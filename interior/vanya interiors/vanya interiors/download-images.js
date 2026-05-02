import fs from 'fs';
import path from 'path';
import https from 'https';

const dirsToScan = ['./src/data', './src/components', './src/pages'];
const publicImagesDir = './public/images';

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

// Function to download image
const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else if (res.statusCode === 301 || res.statusCode === 302) {
        downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
};

const regex = /https:\/\/images\.unsplash\.com\/[^\s"',\)]+/g;

async function processFiles() {
  const filesToProcess = [];
  
  const scanDir = (dir) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        scanDir(fullPath);
      } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
        filesToProcess.push(fullPath);
      }
    }
  };

  dirsToScan.forEach(scanDir);

  let imageCounter = 1;
  const urlMap = new Map();

  for (const file of filesToProcess) {
    let content = fs.readFileSync(file, 'utf-8');
    const matches = content.match(regex);
    
    if (matches) {
      let modified = false;
      for (const url of matches) {
        // clean url
        const cleanUrl = url.split('?')[0]; 
        
        let localName;
        if (urlMap.has(cleanUrl)) {
          localName = urlMap.get(cleanUrl);
        } else {
          localName = `img_${imageCounter++}.jpg`;
          urlMap.set(cleanUrl, localName);
          console.log(`Downloading ${cleanUrl} as ${localName}...`);
          try {
            await downloadImage(url, path.join(publicImagesDir, localName));
          } catch (e) {
            console.error(`Failed to download ${url}: ${e.message}`);
          }
        }
        
        // replace in content
        content = content.replace(url, `/images/${localName}`);
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(file, content, 'utf-8');
        console.log(`Updated ${file}`);
      }
    }
  }
}

processFiles().then(() => console.log('Done.')).catch(console.error);

const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

walkDir(directoryPath, function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Backgrounds
    content = content.replace(/bg-white\/70/g, 'bg-deep-blue/70');
    content = content.replace(/bg-white/g, 'bg-deep-blue');
    content = content.replace(/bg-pearl/g, 'bg-[#050B14]');
    content = content.replace(/bg-charcoal\/\[0\.03\]/g, 'bg-white/5');
    content = content.replace(/bg-charcoal\/5/g, 'bg-white/5');
    content = content.replace(/bg-gray-50/g, 'bg-[#050B14]');
    
    // Borders
    content = content.replace(/border-charcoal\/\[0\.03\]/g, 'border-white/5');
    content = content.replace(/border-charcoal\/\[0\.05\]/g, 'border-white/10');
    content = content.replace(/border-charcoal\/10/g, 'border-white/10');
    content = content.replace(/border-charcoal\/5/g, 'border-white/5');

    // Text Colors
    content = content.replace(/text-charcoal\/30/g, 'text-white/40');
    content = content.replace(/text-charcoal\/40/g, 'text-white/50');
    content = content.replace(/text-charcoal\/50/g, 'text-white/60');
    content = content.replace(/text-charcoal\/60/g, 'text-white/70');
    content = content.replace(/text-charcoal\/70/g, 'text-white/80');
    content = content.replace(/text-charcoal\/80/g, 'text-white/90');
    content = content.replace(/text-charcoal\/90/g, 'text-white');
    content = content.replace(/text-charcoal/g, 'text-white');
    content = content.replace(/text-deep-blue\/40/g, 'text-white/40');
    content = content.replace(/text-deep-blue\/60/g, 'text-white/60');
    content = content.replace(/text-deep-blue\/80/g, 'text-white/80');
    content = content.replace(/text-deep-blue/g, 'text-white');

    // Special Gradients
    content = content.replace(/from-white/g, 'from-deep-blue');
    content = content.replace(/to-white/g, 'to-deep-blue');
    content = content.replace(/via-white/g, 'via-deep-blue');
    content = content.replace(/via-pearl\/80/g, 'via-[#050B14]/80');
    content = content.replace(/via-pearl\/95/g, 'via-[#050B14]/95');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});

import { Jimp } from 'jimp';
import path from 'path';

async function splitReferenceImage(input, outForeground, outBackground) {
    try {
        console.log(`Splitting reference image: ${input}`);
        const image = await Jimp.read(input);
        const width = image.bitmap.width;
        const height = image.bitmap.height;
        const centerX = width / 2;
        const centerY = height / 2;
        
        // 1. Create the Rotating Background (The Wheel)
        const background = image.clone();
        background.scan(0, 0, width, height, function(x, y, idx) {
            const dist = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
            // Keep the wheel circle (roughly 20% to 50% radius)
            // But for a simple approach, let's keep everything but the man in the middle
            if (dist > width * 0.45 || dist < width * 0.1) {
                // this.bitmap.data[idx + 3] = 0; // Make outside transparent
            }
            // For the wheel, we just want the circular pattern
            // Let's just make it a circular crop
            if (dist > width * 0.48) {
                this.bitmap.data[idx + 3] = 0;
            }
        });
        await background.write(outBackground);

        // 2. Create the Stable Foreground (The Man + Desk)
        const foreground = image.clone();
        foreground.scan(0, 0, width, height, function(x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];
            const brightness = (r + g + b) / 3;
            const dist = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));

            // Logic: If it's near the edges and dark/golden, it's background
            // If it's in the middle, it's likely the man
            if (dist > width * 0.25 && brightness < 150) {
                 // Try to remove the background patterns
                 // But keep the man's head and body
                 // We'll use a more targeted seed fill starting from top corners
            }
        });

        // Refined Foreground Extraction: Flood fill from corners
        const visited = new Uint8Array(width * height);
        const queue = [[0, 0], [width - 1, 0], [width/2, 0]]; // Top seeds
        while (queue.length > 0) {
            const [x, y] = queue.shift();
            const idx = (y * width + x) * 4;
            // If it's "darkish" background at the top, it's removable
            const brightness = (foreground.bitmap.data[idx+0] + foreground.bitmap.data[idx+1] + foreground.bitmap.data[idx+2]) / 3;
            
            if (brightness < 120 && foreground.bitmap.data[idx+3] !== 0) {
                foreground.bitmap.data[idx+3] = 0;
                const neighbors = [[x+1, y], [x-1, y], [x, y+1], [x, y-1]];
                for (const [nx, ny] of neighbors) {
                    if (nx >= 0 && nx < width && ny >= 0 && ny < height && !visited[ny * width + nx]) {
                        visited[ny * width + nx] = 1;
                        queue.push([nx, ny]);
                    }
                }
            }
        }

        await foreground.write(outForeground);
        console.log(`Success: Generated ${outForeground} and ${outBackground}`);
    } catch (err) {
        console.error(`Error:`, err);
    }
}

const assetsDir = 'c:/Users/Office/Desktop/astro3/astro_temp/assets';
await splitReferenceImage(path.join(assetsDir, 'reference-pandit.jpg'), path.join(assetsDir, 'hero-foreground.png'), path.join(assetsDir, 'hero-background-wheel.png'));

import { Jimp } from 'jimp';
import path from 'path';

async function createPerfectCutout(input, output) {
    try {
        console.log(`Processing ${input} for perfect transparency...`);
        const image = await Jimp.read(input);
        const width = image.bitmap.width;
        const height = image.bitmap.height;

        // Ensure we have an alpha channel
        image.opacity(1);

        // Step 1: Flood Fill from all four corners to find the background
        const visited = new Uint8Array(width * height);
        const queue = [
            [0, 0], [width - 1, 0], 
            [0, height - 1], [width - 1, height - 1],
            [width / 2, 0] // Add a top-center seed just in case
        ];
        
        const threshold = 60; // Max brightness for background pixels

        for (const [qx, qy] of queue) {
            visited[qy * width + qx] = 1;
        }

        while (queue.length > 0) {
            const [x, y] = queue.shift();
            const idx = (y * width + x) * 4;
            const r = image.bitmap.data[idx + 0];
            const g = image.bitmap.data[idx + 1];
            const b = image.bitmap.data[idx + 2];
            const brightness = (r + g + b) / 3;

            if (brightness < threshold) {
                // Mark as background (transparent)
                image.bitmap.data[idx + 3] = 0;
                
                // Explore neighbors
                const neighbors = [[x+1, y], [x-1, y], [x, y+1], [x, y-1]];
                for (const [nx, ny] of neighbors) {
                    if (nx >= 0 && nx < width && ny >= 0 && ny < height && !visited[ny * width + nx]) {
                        visited[ny * width + nx] = 1;
                        queue.push([nx, ny]);
                    }
                }
            }
        }

        // Step 2: Smoothing/Feathering the edges
        // We scan for pixels near transparent ones and give them partial alpha
        const alphaCopy = new Uint8Array(width * height);
        for(let i=0; i<width*height; i++) alphaCopy[i] = image.bitmap.data[i*4 + 3];

        image.scan(0, 0, width, height, function(x, y, idx) {
            if (this.bitmap.data[idx + 3] > 0) {
                // Check if any neighbor is transparent
                let isEdge = false;
                for(let dy=-1; dy<=1; dy++) {
                    for(let dx=-1; dx<=1; dx++) {
                        const nx = x + dx;
                        const ny = y + dy;
                        if(nx >= 0 && nx < width && ny >= 0 && ny < height) {
                            if(alphaCopy[ny * width + nx] === 0) isEdge = true;
                        }
                    }
                }
                
                if (isEdge) {
                    // Soften the edge
                    const r = this.bitmap.data[idx + 0];
                    const g = this.bitmap.data[idx + 1];
                    const b = this.bitmap.data[idx + 2];
                    const brightness = (r + g + b) / 3;
                    // Edge alpha based on brightness to avoid dark halo
                    this.bitmap.data[idx + 3] = Math.max(100, brightness); 
                }
            }
        });

        await image.write(output);
        console.log(`Success: Saved perfect cutout to ${output}`);
    } catch (err) {
        console.error(`Error:`, err);
    }
}

const assetsDir = 'c:/Users/Office/Desktop/astro3/astro_temp/assets';
await createPerfectCutout(path.join(assetsDir, 'reference-pandit.jpg'), path.join(assetsDir, 'hero-foreground-clean.png'));

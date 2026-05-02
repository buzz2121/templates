import { Jimp } from 'jimp';
import path from 'path';

async function createTrulySolidCutout(input, output) {
    try {
        console.log(`Processing ${input} with Conservative Flood Fill...`);
        const image = await Jimp.read(input);
        const width = image.bitmap.width;
        const height = image.bitmap.height;
        
        // Start as fully opaque
        image.scan(0, 0, width, height, function(x, y, idx) {
            this.bitmap.data[idx + 3] = 255;
        });

        const visited = new Uint8Array(width * height);
        const queue = [[0, 0], [width - 1, 0], [0, height - 1], [width - 1, height - 1]];
        const threshold = 30; // Very conservative threshold for pure black background
        
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
                // This is definitely background
                image.bitmap.data[idx + 3] = 0;
                
                const neighbors = [[x+1, y], [x-1, y], [x, y+1], [x, y-1]];
                for (const [nx, ny] of neighbors) {
                    if (nx >= 0 && nx < width && ny >= 0 && ny < height && !visited[ny * width + nx]) {
                        visited[ny * width + nx] = 1;
                        queue.push([nx, ny]);
                    }
                }
            }
        }

        await image.write(output);
        console.log(`Success: Saved absolute solid cutout to ${output}`);
    } catch (err) {
        console.error(`Error:`, err);
    }
}

const assetsDir = 'c:/Users/Office/Desktop/astro3/astro_temp/assets';
await createTrulySolidCutout(path.join(assetsDir, 'astrology-pandit-user.jpg'), path.join(assetsDir, 'astrology-pandit-user-solid.png'));

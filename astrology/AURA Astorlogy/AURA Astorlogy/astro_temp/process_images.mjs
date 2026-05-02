import { Jimp } from 'jimp';
import path from 'path';

async function processImage(input, output) {
    try {
        console.log(`Reading ${input}...`);
        const image = await Jimp.read(input);
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];
            
            // Remove dark backgrounds
            if (r < 50 && g < 50 && b < 50) {
                this.bitmap.data[idx + 3] = 0;
            }
        });
        await image.write(output);
        console.log(`Success: Saved to ${output}`);
    } catch (err) {
        console.error(`Error processing ${input}:`, err);
    }
}

const assetsDir = 'c:/Users/Office/Desktop/astro3/astro_temp/assets';
await processImage(path.join(assetsDir, 'pandit.png'), path.join(assetsDir, 'pandit_transparent.png'));
await processImage(path.join(assetsDir, 'zodiac-wheel.png'), path.join(assetsDir, 'zodiac_transparent.png'));
await processImage(path.join(assetsDir, 'kundli-chart.png'), path.join(assetsDir, 'kundli_transparent.png'));

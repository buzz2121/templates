const Jimp = require('jimp');
const path = require('path');

async function processImage(input, output) {
    try {
        const image = await Jimp.read(input);
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];
            
            // Aggressive threshold for black removal to catch compression artifacts
            if (r < 55 && g < 55 && b < 55) {
                this.bitmap.data[idx + 3] = 0;
            }
        });
        await image.writeAsync(output);
        console.log(`Success: ${input} -> ${output}`);
    } catch (err) {
        console.error(`Error processing ${input}:`, err);
    }
}

const assetsDir = 'c:/Users/Office/Desktop/astro3/astro_temp/assets';
processImage(path.join(assetsDir, 'pandit.png'), path.join(assetsDir, 'pandit_transparent.png'));
processImage(path.join(assetsDir, 'zodiac-wheel.png'), path.join(assetsDir, 'zodiac_transparent.png'));
processImage(path.join(assetsDir, 'kundli-chart.png'), path.join(assetsDir, 'kundli_transparent.png'));

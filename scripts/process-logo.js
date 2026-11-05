import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const inputPath = path.join(__dirname, '..', 'Gemini_Generated_Image_9yjaxh9yjaxh9yja.jpeg');
  const image = sharp(inputPath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  // Create RGBA buffer
  const rgbaBuffer = Buffer.alloc(width * height * 4);

  // Analyze pixels
  // A pixel belongs to the checkerboard if:
  // - It is close to gray/white:
  //   |R - G| < 12 and |G - B| < 12 and |R - B| < 12
  //   and min(R, G, B) > 160
  // Note: the navy blue ribbon has high B, low R (~15-30, ~45-60, ~80-120).
  // Note: the gold ribbon has R ~ 200, G ~ 160, B ~ 100, which has |R-B| > 80 (very colorful!).
  // Note: the dark pixels (navy text, ribbon) have R,G,B < 100.
  // Therefore, only the neutral checkerboard (gray ~200 and white ~255) meets |R-G|<12, |G-B|<12, min>160!
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const srcIdx = (y * width + x) * channels;
      const dstIdx = (y * width + x) * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];

      const diffRG = Math.abs(r - g);
      const diffGB = Math.abs(g - b);
      const diffRB = Math.abs(r - b);
      const minVal = Math.min(r, g, b);
      const maxDiff = Math.max(diffRG, diffGB, diffRB);

      let alpha = 255;

      // Checkerboard detection:
      // If it's neutral (maxDiff is very small) and bright (minVal > 175)
      if (maxDiff <= 10 && minVal >= 180) {
        // Pure background
        alpha = 0;
      } else if (maxDiff <= 18 && minVal >= 170) {
        // Soft anti-aliasing edge transition
        const softness = (minVal - 170) / 25; // 0 to 1
        alpha = Math.round(255 * (1 - Math.min(1, Math.max(0, softness))));
      }

      rgbaBuffer[dstIdx] = r;
      rgbaBuffer[dstIdx + 1] = g;
      rgbaBuffer[dstIdx + 2] = b;
      rgbaBuffer[dstIdx + 3] = alpha;
    }
  }

  // Ensure output directory exists
  const logoDir = path.join(__dirname, '..', 'src', 'assets', 'images', 'brand');
  if (!fs.existsSync(logoDir)) {
    fs.mkdirSync(logoDir, { recursive: true });
  }

  // Save full-color transparent PNG (for light/ivory backgrounds)
  const transparentPngPath = path.join(logoDir, 'logo-primary.png');
  await sharp(rgbaBuffer, { raw: { width, height, channels: 4 } })
    .trim() // Trim transparent borders
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(transparentPngPath);
  console.log(`Saved transparent logo to ${transparentPngPath}`);

  // Create dark mode variant:
  // For dark navy backgrounds (navbar, footer), the dark navy text and navy ribbon elements
  // need to be visible. Let's inspect how the dark background version in the official brand guide looks:
  // In the brand guide ("نسخة على خلفية داكنة"):
  // The navy text "جسر الخبرة" and "EXEP-RIDGE" becomes pure WHITE (#FFFFFF).
  // The gold ribbon remains gold.
  // The navy ribbon remains navy with subtle contrast or white outlines.
  
  // Also create a version for dark backgrounds
  const darkRgbaBuffer = Buffer.alloc(width * height * 4);
  for (let i = 0; i < rgbaBuffer.length; i += 4) {
    const r = rgbaBuffer[i];
    const g = rgbaBuffer[i + 1];
    const b = rgbaBuffer[i + 2];
    const a = rgbaBuffer[i + 3];

    if (a === 0) {
      darkRgbaBuffer[i] = 0;
      darkRgbaBuffer[i + 1] = 0;
      darkRgbaBuffer[i + 2] = 0;
      darkRgbaBuffer[i + 3] = 0;
      continue;
    }

    // Check if it's the dark text / navy parts (low red and low green)
    // In dark mode: dark text is converted to white
    // If it's gold (r > 150, g > 110, b < 120), keep gold!
    const isGold = (r > 140 && g > 100 && r > b + 40);
    if (!isGold && r < 70 && g < 90) {
      // It's navy ribbon or navy text
      // In the text area (bottom half: y > 500)
      const pixelIndex = i / 4;
      const y = Math.floor(pixelIndex / width);
      if (y > 500) {
        // Text area: turn navy text into crisp white
        darkRgbaBuffer[i] = 255;
        darkRgbaBuffer[i + 1] = 255;
        darkRgbaBuffer[i + 2] = 255;
        darkRgbaBuffer[i + 3] = a;
      } else {
        // Upper emblem area: keep ribbon as-is or slightly lighter navy
        darkRgbaBuffer[i] = Math.min(255, r + 20);
        darkRgbaBuffer[i + 1] = Math.min(255, g + 30);
        darkRgbaBuffer[i + 2] = Math.min(255, b + 50);
        darkRgbaBuffer[i + 3] = a;
      }
    } else {
      darkRgbaBuffer[i] = r;
      darkRgbaBuffer[i + 1] = g;
      darkRgbaBuffer[i + 2] = b;
      darkRgbaBuffer[i + 3] = a;
    }
  }

  const darkPngPath = path.join(logoDir, 'logo-dark.png');
  await sharp(darkRgbaBuffer, { raw: { width, height, channels: 4 } })
    .trim()
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(darkPngPath);
  console.log(`Saved dark background logo to ${darkPngPath}`);
}

main().catch(console.error);

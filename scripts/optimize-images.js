#!/usr/bin/env node

/**
 * Image Optimization Script for art23 Gallery
 *
 * This script optimizes all images in the public/images directory by:
 * 1. Converting to modern formats (WebP, AVIF)
 * 2. Generating responsive variants (400w, 800w, 1200w)
 * 3. Creating blur placeholders (LQIP)
 * 4. Extracting dominant colors
 *
 * Usage:
 *   npm run optimize:images
 *   node scripts/optimize-images.js
 *
 * Requirements:
 *   npm install --save-dev sharp glob
 */

import sharp from 'sharp';
import { glob } from 'glob';
import path from 'path';
import fs from 'fs/promises';

// Configuration
const CONFIG = {
  inputDir: 'public/images',
  outputDir: 'public/images/optimized',
  placeholderDir: 'public/images/placeholders',

  // Responsive breakpoints
  sizes: [
    { width: 400, suffix: '400w' },   // Mobile
    { width: 800, suffix: '800w' },   // Tablet
    { width: 1200, suffix: '1200w' }, // Desktop
  ],

  // Output formats
  formats: [
    { ext: 'avif', quality: 60, effort: 6 },
    { ext: 'webp', quality: 85 },
    { ext: 'jpg', quality: 90 },
  ],

  // LQIP settings
  lqip: {
    width: 20,
    blur: 10,
  }
};

// Ensure output directories exist
async function setupDirectories() {
  await fs.mkdir(CONFIG.outputDir, { recursive: true });
  await fs.mkdir(CONFIG.placeholderDir, { recursive: true });
  console.log('✓ Created output directories\n');
}

// Generate responsive variants
async function generateResponsiveVariants(inputPath, filename) {
  const baseName = path.basename(filename, path.extname(filename));
  const results = [];

  for (const size of CONFIG.sizes) {
    for (const format of CONFIG.formats) {
      const outputFilename = `${baseName}-${size.suffix}.${format.ext}`;
      const outputPath = path.join(CONFIG.outputDir, outputFilename);

      try {
        const options = { quality: format.quality };
        if (format.ext === 'avif') {
          options.effort = format.effort;
        }

        await sharp(inputPath)
          .resize(size.width, null, {
            withoutEnlargement: true,
            fit: 'inside'
          })
          .toFormat(format.ext, options)
          .toFile(outputPath);

        const stats = await fs.stat(outputPath);
        results.push({
          file: outputFilename,
          size: (stats.size / 1024).toFixed(2) + 'KB'
        });

      } catch (error) {
        console.error(`  ✗ Error generating ${outputFilename}:`, error.message);
      }
    }
  }

  return results;
}

// Generate blur placeholder (LQIP)
async function generateBlurPlaceholder(inputPath, filename) {
  const baseName = path.basename(filename, path.extname(filename));
  const outputFilename = `${baseName}-blur.jpg`;
  const outputPath = path.join(CONFIG.placeholderDir, outputFilename);

  try {
    const buffer = await sharp(inputPath)
      .resize(CONFIG.lqip.width, null, { fit: 'inside' })
      .blur(CONFIG.lqip.blur)
      .jpeg({ quality: 50 })
      .toBuffer();

    await fs.writeFile(outputPath, buffer);

    // Also generate base64 for inline use
    const base64 = buffer.toString('base64');
    const dataUrl = `data:image/jpeg;base64,${base64}`;

    const stats = await fs.stat(outputPath);
    return {
      file: outputFilename,
      size: (stats.size / 1024).toFixed(2) + 'KB',
      base64Length: base64.length,
      dataUrl: dataUrl.substring(0, 100) + '...' // Truncate for display
    };

  } catch (error) {
    console.error(`  ✗ Error generating blur placeholder:`, error.message);
    return null;
  }
}

// Extract dominant colors
async function extractDominantColor(inputPath) {
  try {
    const { dominant } = await sharp(inputPath)
      .resize(1, 1)
      .raw()
      .toBuffer({ resolveWithObject: true });

    const [r, g, b] = Array.from(dominant.data);
    const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');

    return hex;
  } catch (error) {
    console.error(`  ✗ Error extracting color:`, error.message);
    return null;
  }
}

// Get image metadata
async function getImageMetadata(inputPath) {
  try {
    const metadata = await sharp(inputPath).metadata();
    const stats = await fs.stat(inputPath);

    return {
      width: metadata.width,
      height: metadata.height,
      format: metadata.format,
      size: (stats.size / 1024).toFixed(2) + 'KB',
      space: metadata.space,
      channels: metadata.channels,
      hasAlpha: metadata.hasAlpha
    };
  } catch (error) {
    console.error(`  ✗ Error reading metadata:`, error.message);
    return null;
  }
}

// Process single image
async function processImage(inputPath) {
  const filename = path.basename(inputPath);
  console.log(`📸 Processing: ${filename}`);

  // Get original metadata
  const metadata = await getImageMetadata(inputPath);
  if (metadata) {
    console.log(`  Original: ${metadata.width}x${metadata.height}, ${metadata.size}`);
  }

  // Extract dominant color
  const color = await extractDominantColor(inputPath);
  if (color) {
    console.log(`  Dominant color: ${color}`);
  }

  // Generate blur placeholder
  const placeholder = await generateBlurPlaceholder(inputPath, filename);
  if (placeholder) {
    console.log(`  Blur placeholder: ${placeholder.size} (${placeholder.base64Length} chars base64)`);
  }

  // Generate responsive variants
  console.log('  Generating responsive variants...');
  const variants = await generateResponsiveVariants(inputPath, filename);

  // Display results in table format
  const totalSavings = variants.reduce((acc, v) => {
    const size = parseFloat(v.size);
    const originalSize = parseFloat(metadata.size);
    return acc + (originalSize - size);
  }, 0);

  console.log('  Generated variants:');
  variants.forEach(v => console.log(`    - ${v.file}: ${v.size}`));
  console.log(`  ✓ Complete! Total savings: ${totalSavings.toFixed(2)}KB\n`);

  return {
    original: filename,
    metadata,
    color,
    placeholder,
    variants,
    totalSavings
  };
}

// Generate manifest file
async function generateManifest(results) {
  const manifest = {
    generated: new Date().toISOString(),
    images: results.map(r => ({
      original: r.original,
      dimensions: `${r.metadata?.width}x${r.metadata?.height}`,
      originalSize: r.metadata?.size,
      dominantColor: r.color,
      placeholder: r.placeholder?.file,
      variants: r.variants.map(v => v.file),
      savings: `${r.totalSavings.toFixed(2)}KB`
    })),
    totalImages: results.length,
    totalVariants: results.reduce((acc, r) => acc + r.variants.length, 0)
  };

  const manifestPath = path.join(CONFIG.outputDir, 'manifest.json');
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));

  console.log('📄 Generated manifest.json');
  return manifest;
}

// Main execution
async function main() {
  console.log('🎨 Image Optimization Pipeline\n');
  console.log('=' .repeat(60) + '\n');

  try {
    // Setup
    await setupDirectories();

    // Find all images
    const images = await glob(`${CONFIG.inputDir}/*.{jpg,jpeg,png,JPG,JPEG,PNG}`);

    if (images.length === 0) {
      console.log('⚠️  No images found in', CONFIG.inputDir);
      return;
    }

    console.log(`Found ${images.length} image(s) to process\n`);

    // Process each image
    const results = [];
    for (const imagePath of images) {
      const result = await processImage(imagePath);
      results.push(result);
    }

    // Generate manifest
    const manifest = await generateManifest(results);

    // Summary
    console.log('\n' + '=' .repeat(60));
    console.log('✨ Optimization Complete!\n');
    console.log(`Total images processed: ${manifest.totalImages}`);
    console.log(`Total variants generated: ${manifest.totalVariants}`);
    console.log(`Output directory: ${CONFIG.outputDir}`);
    console.log(`Placeholder directory: ${CONFIG.placeholderDir}`);
    console.log('\nNext steps:');
    console.log('  1. Review generated images in optimized/ directory');
    console.log('  2. Update image references in React components');
    console.log('  3. Implement <picture> elements for responsive loading');
    console.log('  4. Test on various devices and browsers');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { processImage, generateManifest };

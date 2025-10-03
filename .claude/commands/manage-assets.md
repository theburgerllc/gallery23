Manage images and media assets for the Art23 website.

**Operation**: $ARGUMENTS

## Workflow

Use the **asset-manager** agent to perform the requested asset operation.

## Available Operations

### Import
Import and process new images:
- `import artworks` - Import artwork images
- `import gallery-photos` - Import gallery interior/exterior photos
- `import team-photos` - Import team member photos
- `import artist-profiles` - Import artist profile images

### Optimize
Optimize existing images:
- `optimize all` - Optimize all images
- `optimize artworks` - Optimize artwork images only
- `optimize --category=paintings` - Optimize specific category
- `optimize --format=webp` - Convert to specific format

### Generate
Generate derivative images:
- `generate placeholders` - Generate LQIP placeholders
- `generate thumbnails` - Generate thumbnail versions
- `generate og-images` - Generate Open Graph images for sharing
- `generate responsive` - Generate responsive image sets

### Deploy
Deploy assets to CDN (Cloudinary):
- `deploy staging` - Deploy to staging CDN
- `deploy production` - Deploy to production CDN

### Audit
Audit asset performance:
- `audit` - Check for issues (missing alt text, oversized images, etc.)
- `audit --fix` - Auto-fix common issues

## Image Processing
The asset manager will:
- Create multiple sizes (thumbnail, small, medium, large, full)
- Generate WebP and AVIF versions for modern browsers
- Extract dominant colors for placeholders
- Generate metadata and alt text
- Optimize compression ratios
- Update asset manifest

Start with: "📸 Managing assets: $ARGUMENTS..."

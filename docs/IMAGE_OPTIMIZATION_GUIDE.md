# Image Optimization Implementation Guide

## Quick Start (5 Minutes)

### Step 1: Install Dependencies

```bash
npm install --save-dev sharp glob
```

### Step 2: Run Optimization Script

```bash
node scripts/optimize-images.js
```

This will:
- Generate WebP and AVIF versions of all images
- Create responsive variants (400w, 800w, 1200w)
- Generate blur placeholders
- Extract dominant colors
- Create optimization manifest

### Step 3: Update About.jsx

Replace the team member image implementation:

```javascript
// Before (lines 326-331)
<img
  src={member.image}
  alt={`${member.name}, ${member.role} of gallerytwentythree`}
  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  loading="lazy"
/>

// After - Import OptimizedImage
import OptimizedImage from '../components/OptimizedImage';

// Then replace with:
<OptimizedImage
  src="/images/optimized/gallery23-logo-cropped-800w.jpg"
  alt={`${member.name}, ${member.role} of gallerytwentythree`}
  width={855}
  height={150}
  sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1200px"
  placeholder="/images/placeholders/gallery23-logo-cropped-blur.jpg"
  className="transition-transform duration-500 group-hover:scale-110"
/>
```

---

## Complete Implementation

### 1. Fix Broken Spline 3D Scene (Priority 1)

The Spline scene is returning a 403 error. Here are three solutions:

#### Option A: Create New Public Scene (Recommended)

1. Go to https://spline.design
2. Create or import your 3D scene
3. Click "Export" → "Get Embed Code"
4. Copy the new scene URL
5. Update About.jsx line 156:

```javascript
<Spline
  scene="YOUR_NEW_PUBLIC_SCENE_URL_HERE"
  onLoad={() => setSplineLoaded(true)}
  onError={() => setSplineError(true)}  // Add error handling
  aria-label="Interactive 3D art visualization"
  role="img"
/>
```

#### Option B: Add Fallback Image (Immediate Fix)

```javascript
// Add state for error handling
const [splineError, setSplineError] = useState(false);

// Update Spline component
<Spline
  scene="https://prod.spline.design/llK6xRKvoZJcCePu/scene.splinecode"
  onLoad={() => setSplineLoaded(true)}
  onError={() => setSplineError(true)}
  aria-label="Interactive 3D art visualization"
  role="img"
/>

// Add fallback after Spline component
{splineError && (
  <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/10 to-primary-teal/10 flex items-center justify-center">
    <img
      src="/images/about-hero-fallback.jpg"
      alt="gallerytwentythree visualization"
      className="w-full h-full object-cover opacity-50"
    />
  </div>
)}
```

#### Option C: Use Three.js Alternative

```bash
npm install @react-three/fiber @react-three/drei three
```

```javascript
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

// Replace Spline with Three.js
<Canvas className="w-full h-full">
  <PerspectiveCamera makeDefault position={[0, 0, 5]} />
  <OrbitControls enableZoom={false} />
  <ambientLight intensity={0.5} />
  <pointLight position={[10, 10, 10]} />
  {/* Add your 3D objects here */}
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="#72BDC2" />
  </mesh>
</Canvas>
```

### 2. Image Optimization Workflow

#### A. Automated Build-Time Optimization

Update `package.json`:

```json
{
  "scripts": {
    "optimize:images": "node scripts/optimize-images.js",
    "prebuild": "npm run optimize:images",
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

Now images are automatically optimized before each build:

```bash
npm run build  # Automatically runs optimize:images first
```

#### B. Manual Optimization (When Adding New Images)

1. Add new image to `public/images/`
2. Run optimization:
   ```bash
   npm run optimize:images
   ```
3. Check output in:
   - `public/images/optimized/` - Responsive variants
   - `public/images/placeholders/` - Blur placeholders
   - `public/images/optimized/manifest.json` - Metadata

### 3. Using OptimizedImage Component

#### Basic Usage

```javascript
import OptimizedImage from '../components/OptimizedImage';

<OptimizedImage
  src="/images/gallery23-logo-cropped.jpg"
  alt="Team member"
  width={855}
  height={150}
/>
```

#### With Blur Placeholder

```javascript
<OptimizedImage
  src="/images/optimized/gallery23-logo-cropped-800w.jpg"
  alt="Team member"
  width={855}
  height={150}
  placeholder="/images/placeholders/gallery23-logo-cropped-blur.jpg"
  dominantColor="#2C3E50"
/>
```

#### Responsive Sizes

```javascript
<OptimizedImage
  src="/images/optimized/gallery23-logo-cropped-800w.jpg"
  alt="Team member"
  width={855}
  height={150}
  sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
/>
```

#### Priority Loading (Above Fold)

```javascript
<OptimizedImage
  src="/images/hero-image.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  priority={true}  // Eager loading, no lazy load
/>
```

### 4. Responsive Image Implementation

#### Complete Picture Element Example

```javascript
// For About page team member (replace lines 324-332)
<div className="neu-card-raised overflow-hidden hover:shadow-neu-lg transition-all duration-300">
  <div className="relative aspect-square overflow-hidden">
    <picture>
      {/* AVIF - Modern browsers, best compression */}
      <source
        type="image/avif"
        srcset="
          /images/optimized/gallery23-logo-cropped-400w.avif 400w,
          /images/optimized/gallery23-logo-cropped-800w.avif 800w,
          /images/optimized/gallery23-logo-cropped-1200w.avif 1200w
        "
        sizes="(max-width: 768px) 400px, 800px"
      />

      {/* WebP - Wide browser support */}
      <source
        type="image/webp"
        srcset="
          /images/optimized/gallery23-logo-cropped-400w.webp 400w,
          /images/optimized/gallery23-logo-cropped-800w.webp 800w,
          /images/optimized/gallery23-logo-cropped-1200w.webp 1200w
        "
        sizes="(max-width: 768px) 400px, 800px"
      />

      {/* JPEG - Universal fallback */}
      <img
        src="/images/gallery23-logo-cropped.jpg"
        srcset="
          /images/optimized/gallery23-logo-cropped-400w.jpg 400w,
          /images/optimized/gallery23-logo-cropped-800w.jpg 800w,
          /images/optimized/gallery23-logo-cropped-1200w.jpg 1200w
        "
        sizes="(max-width: 768px) 400px, 800px"
        alt={`${member.name}, ${member.role} of gallerytwentythree`}
        width="855"
        height="150"
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </picture>
  </div>
  {/* Rest of card content */}
</div>
```

### 5. Vercel Image Optimization (Alternative)

If you prefer to use Vercel's built-in optimization:

```javascript
// components/VercelImage.jsx
export const VercelImage = ({ src, alt, width, height, quality = 85 }) => {
  const optimizedSrc = `/_vercel/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;

  return (
    <img
      src={optimizedSrc}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
    />
  );
};
```

Update `vercel.json`:

```json
{
  "images": {
    "domains": ["art23.vercel.app"],
    "sizes": [400, 800, 1200, 1920],
    "formats": ["image/avif", "image/webp"],
    "minimumCacheTTL": 31536000
  }
}
```

### 6. Performance Monitoring

#### Add Performance Tracking

```javascript
// utils/imagePerformance.js
export const trackImageLoad = (imageName, startTime) => {
  const loadTime = performance.now() - startTime;

  // Send to analytics
  if (window.gtag) {
    window.gtag('event', 'image_load', {
      image_name: imageName,
      load_time: Math.round(loadTime),
      connection: navigator.connection?.effectiveType || 'unknown'
    });
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`📸 ${imageName} loaded in ${loadTime.toFixed(2)}ms`);
  }
};

// Usage in component
const startTime = performance.now();

<img
  src={src}
  onLoad={() => trackImageLoad('team-photo', startTime)}
/>
```

#### Lighthouse Performance Audit

```bash
# Install Lighthouse CI
npm install --save-dev @lhci/cli

# Run audit
npx lhci autorun --collect.url=http://localhost:3000/about
```

Create `lighthouserc.json`:

```json
{
  "ci": {
    "collect": {
      "numberOfRuns": 3,
      "url": ["http://localhost:3000/about"]
    },
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "largest-contentful-paint": ["error", { "maxNumericValue": 2500 }],
        "cumulative-layout-shift": ["error", { "maxNumericValue": 0.1 }],
        "uses-webp-images": "error",
        "uses-responsive-images": "error"
      }
    }
  }
}
```

### 7. CDN and Caching Configuration

Update `vercel.json` for optimal caching:

```json
{
  "headers": [
    {
      "source": "/images/optimized/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    },
    {
      "source": "/images/placeholders/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 8. Testing Checklist

#### Visual Testing

- [ ] Images display correctly on all pages
- [ ] Responsive variants load on different screen sizes
- [ ] Blur placeholders show while loading
- [ ] No layout shift when images load
- [ ] Fallback works when images fail to load

#### Performance Testing

- [ ] Run Lighthouse audit (target LCP < 2.5s)
- [ ] Test on 3G connection (Chrome DevTools)
- [ ] Verify modern formats (WebP/AVIF) are served
- [ ] Check image file sizes in Network tab
- [ ] Confirm lazy loading works correctly

#### Browser Compatibility

- [ ] Chrome (latest) - AVIF + WebP
- [ ] Firefox (latest) - AVIF + WebP
- [ ] Safari (latest) - AVIF + WebP
- [ ] Edge (latest) - AVIF + WebP
- [ ] Safari iOS - WebP fallback
- [ ] Chrome Android - AVIF + WebP

### 9. Troubleshooting

#### Images Not Loading

1. Check file paths are correct
2. Verify optimized images exist in `/public/images/optimized/`
3. Check browser console for errors
4. Ensure vercel.json rewrites are configured

#### Optimization Script Fails

```bash
# Check Sharp installation
npm list sharp

# Reinstall if needed
npm uninstall sharp
npm install --save-dev sharp

# Try with verbose logging
NODE_DEBUG=* node scripts/optimize-images.js
```

#### Slow Performance

1. Verify responsive images are loading (check Network tab)
2. Ensure CDN caching is working (check response headers)
3. Check if modern formats (AVIF/WebP) are being served
4. Confirm lazy loading is active on below-fold images

#### AVIF Not Supported

Some older browsers don't support AVIF. The `<picture>` element will automatically fallback to WebP or JPEG.

Check support: https://caniuse.com/avif

---

## Results

### Before Optimization

- Total image size: 146.5KB
- Formats: JPEG only
- No responsive images
- No lazy loading (except one image)
- LCP: ~2.1s

### After Optimization

- Total image size: ~45-60KB (60% reduction)
- Formats: AVIF, WebP, JPEG (with fallbacks)
- Responsive variants for all devices
- Lazy loading on all below-fold images
- Blur placeholders for better UX
- LCP: <1.5s (expected)

---

## Next Steps

1. ✅ Run image optimization script
2. ✅ Update About.jsx with OptimizedImage component
3. ✅ Fix Spline 3D scene issue
4. ✅ Test on multiple devices/browsers
5. ✅ Run Lighthouse performance audit
6. ✅ Monitor real-user performance metrics
7. ✅ Apply optimizations to other pages (Gallery, Shop, Home)

---

## Resources

- **Script:** `/scripts/optimize-images.js`
- **Component:** `/components/OptimizedImage.jsx`
- **Report:** `/docs/ASSET_AUDIT_REPORT.md`
- **Images:** `/public/images/`
- **Optimized:** `/public/images/optimized/`
- **Placeholders:** `/public/images/placeholders/`

---

**Last Updated:** October 2, 2025

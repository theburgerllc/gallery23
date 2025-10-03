# 🚀 Deployment Guide for Lumina Gallery

This guide covers deploying your Lumina Gallery website to various hosting platforms.

## 📋 Pre-Deployment Checklist

- [ ] All dependencies installed (`npm install`)
- [ ] Production build tested (`npm run build && npm run preview`)
- [ ] Environment variables configured (if any)
- [ ] Spline 3D scenes accessible and loading
- [ ] Images optimized for web
- [ ] SEO meta tags added
- [ ] Analytics configured (optional)

## 🌐 Deployment Options

### 1. Vercel (Recommended)

**Pros**: Zero config, automatic HTTPS, global CDN, preview deployments

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# For production
vercel --prod
```

**Via GitHub**:
1. Push code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite config
4. Deploy!

### 2. Netlify

**Pros**: Drag-and-drop deployment, form handling, serverless functions

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

**Via GitHub**:
1. Connect repository on [netlify.com](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

**netlify.toml** (optional):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. GitHub Pages

**Pros**: Free hosting, direct from repository

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/art-gallery"
}
```

3. Deploy:
```bash
npm run deploy
```

4. Enable GitHub Pages in repository settings

**vite.config.js** update:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/art-gallery/', // Your repo name
})
```

### 4. Cloudflare Pages

**Pros**: Unlimited bandwidth, fast CDN, free SSL

1. Push code to GitHub
2. Connect on [pages.cloudflare.com](https://pages.cloudflare.com)
3. Build settings:
   - Build command: `npm run build`
   - Build output: `dist`
4. Deploy!

### 5. AWS S3 + CloudFront

**Pros**: Scalable, customizable, AWS ecosystem

```bash
# Build
npm run build

# Upload to S3
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront (optional)
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### 6. Firebase Hosting

**Pros**: Google infrastructure, easy integration with other Firebase services

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting

# Build
npm run build

# Deploy
firebase deploy
```

**firebase.json**:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## 🔧 Build Optimization

### 1. Image Optimization

Install sharp for automatic image optimization:
```bash
npm install --save-dev vite-plugin-imagemin
```

### 2. Code Splitting

Vite automatically code-splits, but you can optimize further:
```javascript
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation': ['framer-motion'],
          'spline': ['@splinetool/react-spline', '@splinetool/runtime'],
        }
      }
    }
  }
})
```

### 3. Compression

Enable Gzip/Brotli compression:
```bash
npm install --save-dev vite-plugin-compression
```

```javascript
// vite.config.js
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    compression()
  ]
})
```

## 🔐 Environment Variables

Create `.env.production`:
```env
VITE_API_URL=https://api.yourdomain.com
VITE_SPLINE_KEY=your_spline_key
VITE_GA_ID=your_google_analytics_id
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## 📊 Performance Monitoring

### Google Analytics

Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Lighthouse CI

```bash
npm install -g @lhci/cli

# Run audit
lhci autorun
```

## 🌍 Custom Domain

### Vercel
1. Add domain in project settings
2. Configure DNS records
3. Automatic SSL provisioning

### Netlify
1. Add custom domain in site settings
2. Update DNS records
3. HTTPS enabled automatically

### Cloudflare Pages
1. Add custom domain
2. Configure DNS in Cloudflare
3. SSL enabled by default

## 🔄 CI/CD Setup

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📱 PWA Setup (Optional)

Install PWA plugin:
```bash
npm install --save-dev vite-plugin-pwa
```

Update `vite.config.js`:
```javascript
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Lumina Gallery',
        short_name: 'Lumina',
        description: 'Contemporary Art Gallery',
        theme_color: '#72BDC2',
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
```

## 🐛 Troubleshooting

### Build Fails
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `rm -rf dist && npm run build`

### Routing Issues
- Ensure hosting platform handles SPA routing
- Check redirect rules for React Router

### Images Not Loading
- Verify image paths are relative
- Check image URLs are accessible
- Use Vite's public folder for static assets

### Spline Not Loading
- Verify Spline URLs are correct
- Check CORS settings
- Ensure scenes are published

## 📈 Post-Deployment

- [ ] Test all pages and functionality
- [ ] Verify responsive design on multiple devices
- [ ] Check page load times
- [ ] Test forms and interactions
- [ ] Verify 3D scenes load correctly
- [ ] Check SEO meta tags
- [ ] Set up monitoring and analytics
- [ ] Configure error tracking (Sentry, etc.)

---

Need help? Check the [README.md](README.md) or open an issue!

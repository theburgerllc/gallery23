# 🚀 Installation Instructions

## Prerequisites

Before you begin, ensure you have:
- **Node.js 18+** installed ([Download here](https://nodejs.org/))
- **npm** or **yarn** package manager
- A code editor (VS Code recommended)
- Modern web browser (Chrome, Firefox, Safari, or Edge)

## Step-by-Step Installation

### 1. Navigate to Project Directory
```bash
cd art-gallery
```

### 2. Install Dependencies
This will install all required packages (React, Vite, Tailwind, etc.)

```bash
npm install
```

**Expected output:**
```
added 350 packages in 45s
```

**Package installation includes:**
- React 18.3.1
- Vite 5.4.7
- Tailwind CSS 3.4.12
- Framer Motion 11.5.4
- Spline React 4.0.0
- Lucide React 0.445.0
- And more...

### 3. Start Development Server
```bash
npm run dev
```

**Expected output:**
```
VITE v5.4.7  ready in 1234 ms

➜  Local:   http://localhost:3000/
➜  Network: http://192.168.1.x:3000/
```

### 4. Open in Browser
Navigate to: **http://localhost:3000**

You should see your beautiful art gallery! 🎨

## Alternative Commands

### Using Yarn
```bash
yarn install
yarn dev
```

### Using PNPM
```bash
pnpm install
pnpm dev
```

### Using Different Port
```bash
npm run dev -- --port 3001
```

## Verification Checklist

After starting the dev server, verify:
- [ ] Home page loads with 3D background
- [ ] Navigation works (Home, Gallery, About, Contact)
- [ ] Gallery page shows artwork grid
- [ ] About page displays team and timeline
- [ ] Contact form is visible
- [ ] Mobile menu works (resize browser)
- [ ] Animations are smooth
- [ ] No console errors

## Common Installation Issues

### Issue: "Node version too old"
**Solution:**
```bash
# Check your Node version
node -v

# Should be 18.0.0 or higher
# If not, download latest from nodejs.org
```

### Issue: "npm install fails"
**Solution:**
```bash
# Clear cache and try again
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Issue: "Port 3000 already in use"
**Solution:**
```bash
# Use different port
npm run dev -- --port 3001

# Or kill process using port 3000
# Mac/Linux:
lsof -ti:3000 | xargs kill -9
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Issue: "Module not found"
**Solution:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Issue: "Vite optimization timeout"
**Solution:**
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

## Building for Production

### Build Command
```bash
npm run build
```

**Output:**
```
vite v5.4.7 building for production...
✓ built in 8.45s
dist/index.html                  0.45 kB
dist/assets/index-abc123.js    145.67 kB
```

### Preview Production Build
```bash
npm run preview
```

This serves your production build locally at http://localhost:4173

## File Sizes

After installation:
```
node_modules/      ~350 MB
package-lock.json  ~2 MB
Total installed:   ~352 MB
```

After build:
```
dist/              ~500 KB (gzipped: ~150 KB)
```

## Environment Setup

### Optional: Create .env file
```bash
# Create .env file in root
touch .env
```

```env
# Add environment variables
VITE_API_URL=https://your-api.com
VITE_SITE_URL=https://your-site.com
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## Development Tips

### Hot Module Replacement (HMR)
Vite automatically reloads when you save files. No need to refresh!

### Fast Refresh
React components update instantly without losing state.

### Browser DevTools
- **F12** - Open DevTools
- **Ctrl/Cmd + Shift + M** - Toggle device toolbar
- **Ctrl/Cmd + Shift + C** - Inspect element

### VS Code Extensions (Recommended)
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- ESLint
- Prettier

## Network Access

To access from other devices on your network:

1. Find your local IP:
```bash
# Mac/Linux
ifconfig | grep inet

# Windows
ipconfig
```

2. Access from mobile/tablet:
```
http://YOUR_LOCAL_IP:3000
```

Example: `http://192.168.1.100:3000`

## Performance Tips

### Optimize Development Experience
```bash
# Clear Vite cache if slow
rm -rf node_modules/.vite

# Restart dev server
npm run dev
```

### Production Optimization
Vite automatically:
- ✅ Minifies JavaScript
- ✅ Optimizes CSS
- ✅ Tree-shakes unused code
- ✅ Code-splits by route
- ✅ Generates source maps

## What Happens During Installation?

1. **npm install reads package.json**
   - Identifies all dependencies
   - Downloads from npm registry

2. **Dependencies are installed**
   - React, Vite, Tailwind, etc.
   - Creates node_modules folder
   - Generates package-lock.json

3. **Post-install scripts run**
   - Sets up TypeScript types
   - Prepares dev environment

4. **Ready to develop!**
   - All packages available
   - Dev server can start

## System Requirements

### Minimum Requirements
- **OS:** Windows 10, macOS 10.15, Ubuntu 18.04
- **RAM:** 4 GB
- **Storage:** 500 MB free
- **Node.js:** 18.0.0+
- **Browser:** Last 2 versions

### Recommended Setup
- **OS:** Latest Windows 11, macOS, or Linux
- **RAM:** 8 GB+
- **Storage:** 2 GB free
- **Node.js:** 20.0.0+
- **Browser:** Chrome/Edge 120+

## Success!

If you see the website running at http://localhost:3000, congratulations! 🎉

Your Lumina Gallery is now ready for customization.

## Next Steps

1. ✅ Installation complete
2. 📖 Read QUICKSTART.md for customization
3. 🎨 Replace placeholder images
4. ✏️ Update text content
5. 🚀 Deploy (see DEPLOYMENT_GUIDE.md)

---

**Need help?** Check the other documentation files or review console errors.

**Everything working?** Time to make it yours! 🎨✨

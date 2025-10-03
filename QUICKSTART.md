# ⚡ Quick Start Guide - Lumina Gallery

Get your art gallery website up and running in minutes!

## 🚀 Fast Setup (3 minutes)

### Step 1: Install Dependencies
```bash
cd art-gallery
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Navigate to **http://localhost:3000**

That's it! 🎉

---

## 📂 What You Get

### ✨ Pre-built Pages
- **Home** (`/`) - Hero with 3D Spline, featured artworks
- **Gallery** (`/gallery`) - Filterable artwork grid
- **About** (`/about`) - Company story, team, values
- **Contact** (`/contact`) - Contact form, info cards

### 🎨 Design Features
- ✅ Neumorphic UI components
- ✅ Glassmorphic effects
- ✅ 3D Spline integrations
- ✅ Smooth animations
- ✅ Fully responsive
- ✅ Modern color palette

### 🛠️ Tech Stack
- React 18.3.1
- Vite 5.4.7
- Tailwind CSS 3.4.12
- Framer Motion 11.5.4
- Spline React 4.0.0

---

## 🎯 Common Tasks

### Adding New Artwork
Edit `src/pages/Gallery.jsx`:
```javascript
const artworks = [
  {
    id: 13,
    title: 'Your Artwork',
    artist: 'Artist Name',
    category: 'Abstract',
    image: 'https://your-image-url.com/image.jpg',
    views: 0,
    likes: 0,
    description: 'Your description'
  },
  // ... existing artworks
];
```

### Changing Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    dark: '#21221F',    // Background
    cyan: '#72BDC2',    // Accent
    teal: '#388B9E',    // Secondary
    sage: '#5C7572',    // Tertiary
    tan: '#988C7F'      // Highlights
  }
}
```

### Updating 3D Scenes
Replace Spline URLs in page components:
```jsx
<Spline scene="https://prod.spline.design/YOUR-SCENE-ID/scene.splinecode" />
```

### Adding New Page
1. Create file in `src/pages/YourPage.jsx`
2. Add route in `src/App.jsx`:
```jsx
<Route path="/yourpage" element={<YourPage />} />
```
3. Add to navigation in `src/components/Navbar.jsx`

---

## 📱 Testing on Mobile

### Using Browser DevTools
1. Open DevTools (F12)
2. Click device toolbar icon
3. Select device or enter custom dimensions

### Using Local Network
```bash
# Find your local IP
ipconfig  # Windows
ifconfig  # Mac/Linux

# Access from mobile
http://YOUR_IP:3000
```

---

## 🔧 Customization Quick Reference

### Change Site Name
Update in:
- `index.html` - `<title>` tag
- `src/components/Navbar.jsx` - Logo
- `src/components/Footer.jsx` - Brand name

### Modify Contact Info
Edit `src/pages/Contact.jsx`:
```javascript
const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Your Address', 'City, State ZIP']
  },
  // ... other contact info
];
```

### Update Social Links
Edit `src/components/Footer.jsx`:
```javascript
const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/yourhandle' },
  { icon: Facebook, href: 'https://facebook.com/yourpage' },
  { icon: Twitter, href: 'https://twitter.com/yourhandle' },
];
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use different port
npm run dev -- --port 3001
```

### Dependencies Not Installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear dist folder
rm -rf dist
npm run build
```

### Spline Not Loading
- Check internet connection
- Verify Spline scene is published
- Check browser console for errors

---

## 📖 Next Steps

1. **Customize Content**
   - Replace placeholder images
   - Update text and descriptions
   - Add your artworks

2. **Configure SEO**
   - Add meta tags in `index.html`
   - Set up Open Graph tags
   - Create sitemap

3. **Deploy**
   - See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
   - Choose hosting platform
   - Configure custom domain

4. **Enhance**
   - Add more pages
   - Integrate CMS
   - Add e-commerce features

---

## 🆘 Need Help?

### Documentation
- 📘 [README.md](README.md) - Full documentation
- 🎨 [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) - Design reference
- 🚀 [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - Deployment help

### Resources
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

## ⌨️ Keyboard Shortcuts (VS Code)

- `Ctrl/Cmd + P` - Quick file open
- `Ctrl/Cmd + Shift + F` - Find in files
- `Ctrl/Cmd + B` - Toggle sidebar
- `Ctrl/Cmd + J` - Toggle terminal

---

## ✅ Quick Checklist

Before going live:
- [ ] Replace all placeholder content
- [ ] Update contact information
- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Check form submissions
- [ ] Optimize images
- [ ] Test 3D scene loading
- [ ] Add analytics
- [ ] Set up SEO
- [ ] Configure domain

---

Happy building! 🎨✨

Need more details? Check the full [README.md](README.md)

# 🎨 art23 Gallery - Contemporary Art Space

A modern, interactive art gallery website celebrating American artists with neumorphic design, 3D elements, Vanta.js backgrounds, and e-commerce functionality. Built with React, Vite, and Tailwind CSS.

## ✨ Features

- 🎨 **Neumorphic & Glassmorphic UI**: Beautiful soft UI design with depth and transparency effects
- 🌊 **Interactive Vanta.js Background**: Animated fog effect using Three.js
- 🖼️ **3D Interactive Elements**: Integrated Spline 3D scenes for immersive experiences
- 🛒 **E-commerce Functionality**: Shopping cart with local storage persistence
- 📱 **Fully Responsive**: Optimized for all devices from mobile to desktop
- ✨ **Smooth Animations**: Framer Motion powered transitions and interactions
- 🎯 **Complete Routing**: All pages including 404 Not Found
- **Modern Tech Stack**: Built with latest React 18.3, Vite 5.4, and Tailwind CSS 3.4

## 🎨 Color Palette

- **Primary Dark**: `#21221F`
- **Cyan**: `#72BDC2`
- **Teal**: `#388B9E`
- **Sage**: `#5C7572`
- **Tan**: `#988C7F`

## 📦 Tech Stack

- **React 18.3.1** - UI Library
- **Vite 5.4.7** - Build Tool & Dev Server
- **React Router 6.26.2** - Client-side Routing
- **Tailwind CSS 3.4.12** - Utility-first CSS
- **Framer Motion 11.5.4** - Animation Library
- **Spline React 4.0.0** - 3D Graphics
- **Lucide React 0.445.0** - Icon Library

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn installed
- Modern web browser

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd art-gallery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
art-gallery/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Gallery.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎯 Pages

### Home (`/`)
- Hero section with 3D Spline background
- Featured artworks grid
- About gallerytwentythree section
- Statistics showcase
- Call-to-action section

### Gallery (`/gallery`)
- Filterable artwork collection
- Category-based filtering
- Search functionality
- Interactive hover effects

### Shop (`/shop`)
- E-commerce product listing
- Add to cart functionality
- Product cards with pricing
- Interactive shopping experience

### About (`/about`)
- Mission statement
- Core values showcase
- Timeline of milestones
- Team member profiles
- Artist resources information
- 3D visual elements

### Contact (`/contact`)
- Contact form with validation
- Contact information cards
- Reasons to contact section
- FAQ section
- 3D decorative elements

### Checkout (`/checkout`)
- Order form with validation
- Cart summary
- Payment integration ready
- Shipping information

### 404 Not Found (`*`)
- Custom 404 page
- Quick navigation links
- Helpful suggestions

## 🎨 Design System

### Neumorphic Components
- Soft shadows with light/dark contrast
- Raised and inset effects
- Subtle gradients for depth

### Glassmorphic Components
- Frosted glass effect with backdrop blur
- Semi-transparent backgrounds
- Subtle borders with gradient colors

### Animation Patterns
- Smooth page transitions
- Hover effects on interactive elements
- Scroll-triggered animations
- Loading states

## 🔧 Customization

### Changing Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    dark: '#21221F',
    cyan: '#72BDC2',
    teal: '#388B9E',
    sage: '#5C7572',
    tan: '#988C7F'
  }
}
```

### Modifying 3D Scenes
Replace Spline scene URLs in page components:
```jsx
<Spline scene="YOUR_SPLINE_SCENE_URL" />
```

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a demonstration project. Feel free to fork and customize for your needs.

## 📄 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- Images from Unsplash
- Icons from Lucide React
- 3D scenes from Spline
- Fonts from Google Fonts

## 📞 Support

For questions or issues, please open an issue in the repository.

---

Built with ❤️ using React, Vite, and modern web technologies.

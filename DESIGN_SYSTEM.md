# 🎨 Lumina Gallery Design System

Complete reference guide for neumorphic and glassmorphic design patterns used in the Lumina Gallery.

## 📐 Design Principles

### Neumorphism
- **Soft UI**: Creates depth through subtle shadows and highlights
- **Minimal contrast**: Stays within similar color ranges
- **3D illusion**: Elements appear to extrude from or sink into the background

### Glassmorphism
- **Transparency**: Semi-transparent backgrounds with blur
- **Layering**: Creates depth through stacked glass-like layers
- **Borders**: Subtle light borders enhance the glass effect

## 🎨 Color System

```css
/* Primary Colors */
--primary-dark: #21221F    /* Main background */
--primary-cyan: #72BDC2    /* Accent & interactive elements */
--primary-teal: #388B9E    /* Secondary accent */
--primary-sage: #5C7572    /* Tertiary accent */
--primary-tan:  #988C7F    /* Subtle highlights */

/* Semantic Colors */
--text-primary: #FFFFFF     /* Main text */
--text-secondary: #9CA3AF   /* Secondary text */
--text-muted: #6B7280       /* Muted text */

/* Gradients */
--gradient-primary: linear-gradient(135deg, #72BDC2, #388B9E)
--gradient-background: linear-gradient(145deg, #252621, #1e1f1d)
```

## 🧩 Component Library

### Neumorphic Components

#### 1. Neu Card
```html
<div class="neu-card">
  <!-- Content -->
</div>
```
**CSS:**
```css
.neu-card {
  background: linear-gradient(145deg, #252621, #1e1f1d);
  border-radius: 1rem;
  box-shadow: 
    8px 8px 16px rgba(0, 0, 0, 0.3),
    -8px -8px 16px rgba(255, 255, 255, 0.05);
}
```

#### 2. Neu Card Raised (Hover Effect)
```html
<div class="neu-card-raised">
  <!-- Content -->
</div>
```
**Features:**
- Larger shadows for more depth
- Hover animation (lifts up)
- Best for clickable items

#### 3. Neu Button
```html
<button class="neu-button">
  Click Me
</button>
```
**States:**
- Default: Raised appearance
- Hover: Subtle lift
- Active: Pressed/inset appearance

#### 4. Neu Input
```html
<input class="neu-input" type="text" placeholder="Enter text...">
```
**Features:**
- Inset shadow (sunken appearance)
- Smooth focus transition
- Gradient background

### Glassmorphic Components

#### 1. Glass Card
```html
<div class="glass-card">
  <!-- Content -->
</div>
```
**CSS:**
```css
.glass-card {
  background: rgba(114, 189, 194, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(114, 189, 194, 0.1);
  border-radius: 1rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}
```

#### 2. Glass Navigation
```html
<nav class="glass-nav">
  <!-- Navigation items -->
</nav>
```
**Features:**
- Strong blur effect
- Slightly higher opacity
- Border on bottom only

#### 3. Glass Button
```html
<button class="glass-button">
  Action
</button>
```
**States:**
- Default: Subtle glass effect
- Hover: Increased opacity and glow
- Active: Enhanced border

## 📏 Spacing System

```css
/* Spacing Scale */
--space-1: 0.25rem   /* 4px */
--space-2: 0.5rem    /* 8px */
--space-3: 0.75rem   /* 12px */
--space-4: 1rem      /* 16px */
--space-6: 1.5rem    /* 24px */
--space-8: 2rem      /* 32px */
--space-12: 3rem     /* 48px */
--space-16: 4rem     /* 64px */
--space-20: 5rem     /* 80px */
```

## 🔤 Typography

### Font Families
```css
/* Headings */
font-family: 'Playfair Display', serif;

/* Body */
font-family: 'Inter', sans-serif;
```

### Type Scale
```css
/* Headings */
h1: 3.75rem / 60px  (text-6xl)
h2: 3rem / 48px     (text-5xl)
h3: 2.25rem / 36px  (text-4xl)
h4: 1.875rem / 30px (text-3xl)
h5: 1.5rem / 24px   (text-2xl)
h6: 1.25rem / 20px  (text-xl)

/* Body */
Large: 1.125rem / 18px  (text-lg)
Base:  1rem / 16px      (text-base)
Small: 0.875rem / 14px  (text-sm)
XS:    0.75rem / 12px   (text-xs)
```

## 🎭 Shadows

### Neumorphic Shadows
```css
/* Small - Buttons, inputs */
.neu-sm {
  box-shadow: 
    4px 4px 8px rgba(0, 0, 0, 0.2),
    -4px -4px 8px rgba(255, 255, 255, 0.05);
}

/* Medium - Cards */
.neu-md {
  box-shadow: 
    8px 8px 16px rgba(0, 0, 0, 0.3),
    -8px -8px 16px rgba(255, 255, 255, 0.05);
}

/* Large - Elevated cards */
.neu-lg {
  box-shadow: 
    12px 12px 24px rgba(0, 0, 0, 0.4),
    -12px -12px 24px rgba(255, 255, 255, 0.05);
}

/* Inset - Inputs, pressed buttons */
.neu-inset {
  box-shadow: 
    inset 4px 4px 8px rgba(0, 0, 0, 0.3),
    inset -4px -4px 8px rgba(255, 255, 255, 0.05);
}
```

### Glassmorphic Shadow
```css
.glass {
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}
```

## 🎬 Animation Library

### Float Animation
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
```

### Glow Animation
```css
@keyframes glow {
  0% { box-shadow: 0 0 5px rgba(114, 189, 194, 0.5); }
  100% { box-shadow: 0 0 20px rgba(114, 189, 194, 0.8); }
}

.animate-glow {
  animation: glow 2s ease-in-out infinite alternate;
}
```

### Hover Lift
```css
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-10px);
}
```

## 🔘 Button Patterns

### Primary Button (Neumorphic)
```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="neu-button"
>
  Primary Action
</motion.button>
```

### Secondary Button (Glassmorphic)
```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="glass-button"
>
  Secondary Action
</motion.button>
```

### Icon Button
```jsx
<motion.button
  whileHover={{ scale: 1.1 }}
  className="p-3 neu-card rounded-lg"
>
  <Icon className="w-5 h-5 text-primary-cyan" />
</motion.button>
```

## 📦 Card Patterns

### Image Card with Hover Effect
```jsx
<motion.div
  whileHover={{ y: -10 }}
  className="neu-card-raised overflow-hidden cursor-pointer"
>
  <div className="relative aspect-[3/4] overflow-hidden">
    <img 
      src={image}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-60" />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-semibold">Title</h3>
    <p className="text-gray-400">Description</p>
  </div>
</motion.div>
```

### Info Card
```jsx
<div className="glass-card p-6">
  <div className="flex items-center space-x-4">
    <div className="neu-card p-3 rounded-lg">
      <Icon className="w-6 h-6 text-primary-cyan" />
    </div>
    <div>
      <h4 className="font-semibold">Title</h4>
      <p className="text-gray-400 text-sm">Description</p>
    </div>
  </div>
</div>
```

## 🎯 Form Elements

### Input Field
```jsx
<div className="space-y-2">
  <label className="text-sm font-medium text-gray-400">
    Label
  </label>
  <input
    type="text"
    className="neu-input"
    placeholder="Enter text..."
  />
</div>
```

### Textarea
```jsx
<textarea
  className="neu-input resize-none"
  rows="6"
  placeholder="Enter message..."
/>
```

### Select/Dropdown
```jsx
<select className="neu-input">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

## 🎨 Gradient Text
```jsx
<h2 className="gradient-text">
  Gradient Text
</h2>
```

## 🖼️ Image Overlays

### Gradient Overlay
```jsx
<div className="relative">
  <img src={image} className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-60" />
</div>
```

### Glass Overlay
```jsx
<div className="absolute inset-0 glass-card p-6">
  <div className="text-white">
    Content over image
  </div>
</div>
```

## 📱 Responsive Patterns

### Mobile-First Grid
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {items.map(item => (
    <Card key={item.id} {...item} />
  ))}
</div>
```

### Responsive Spacing
```jsx
<div className="px-4 sm:px-6 lg:px-8">
  <div className="py-12 md:py-20">
    Content
  </div>
</div>
```

## ♿ Accessibility

### Focus States
```css
.neu-button:focus {
  outline: 2px solid #72BDC2;
  outline-offset: 2px;
}
```

### ARIA Labels
```jsx
<button aria-label="Close modal" className="neu-button">
  <X className="w-5 h-5" />
</button>
```

## 🎪 Best Practices

### Do's ✅
- Use neumorphism for tactile, interactive elements
- Apply glassmorphism for overlays and navigation
- Maintain consistent spacing and shadows
- Test on multiple devices and screen sizes
- Ensure sufficient color contrast for readability
- Use animations sparingly and meaningfully

### Don'ts ❌
- Don't overuse heavy shadows (performance)
- Avoid low contrast text on glass backgrounds
- Don't mix too many styles in one component
- Avoid excessive animations that distract
- Don't forget mobile responsiveness
- Avoid blur on elements with important text

## 🔍 Testing Checklist

- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Verify responsive design (mobile, tablet, desktop)
- [ ] Check dark mode appearance
- [ ] Test keyboard navigation
- [ ] Verify screen reader compatibility
- [ ] Test on low-end devices
- [ ] Check loading states
- [ ] Verify hover/focus states
- [ ] Test form validation
- [ ] Check animation performance

---

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Neumorphism Guide](https://neumorphism.io/)
- [Glassmorphism Generator](https://glassmorphism.com/)

---

Built with attention to detail and modern design principles. 🎨✨

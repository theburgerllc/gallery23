# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Lumina Gallery is a React-based art gallery website with e-commerce functionality, featuring neumorphic and glassmorphic design elements. Built with Vite, React Router, and Tailwind CSS.

## Commands

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm run preview      # Preview production build
```

### Development Server
The dev server runs on port 3000 and automatically opens in browser (configured in vite.config.js).

## Architecture

### Tech Stack
- **React 18.3.1** with JSX
- **Vite 5.4.7** as build tool
- **React Router 6.26.2** for client-side routing
- **Tailwind CSS 3.4.12** with custom design system
- **Framer Motion 11.5.4** for animations
- **Spline React 4.0.0** for 3D elements
- **Lucide React 0.445.0** for icons

### Project Structure
```
src/
├── main.jsx              # React entry point
├── App.jsx              # Main app with routing and CartProvider
├── index.css            # Global styles and design system
├── components/          # Reusable components
│   ├── Navbar.jsx       # Navigation with mobile menu and cart
│   ├── Footer.jsx       # Footer with social links
│   └── Cart.jsx         # Sliding cart sidebar
├── pages/               # Page components
│   ├── Home.jsx         # Hero, stats, featured works
│   ├── Gallery.jsx      # Artwork collection with filtering
│   ├── Shop.jsx         # E-commerce product listing
│   ├── About.jsx        # Mission, values, timeline, team
│   ├── Contact.jsx      # Contact form and information
│   └── Checkout.jsx     # Order form and payment
└── context/
    └── CartContext.jsx  # Global cart state management
```

### Key Patterns

#### State Management
- **Cart State**: Managed via React Context (CartContext.jsx)
- **Local Storage**: Cart persists automatically using localStorage
- **Form State**: Local state in individual components

#### Routing
All routes defined in App.jsx:
- `/` - Home page
- `/gallery` - Gallery with artwork filtering
- `/shop` - E-commerce product listing
- `/about` - About page
- `/contact` - Contact form
- `/checkout` - Order processing

#### Component Architecture
- **Provider Pattern**: CartProvider wraps entire app
- **Compound Components**: Cart with items, totals, actions
- **Page Components**: Self-contained pages with all sections
- **Reusable Components**: Navbar and Footer used across pages

### Design System

#### Colors (Tailwind Config)
```javascript
primary: {
  dark: '#21221F',   // Main background
  cyan: '#72BDC2',   // Primary accent
  teal: '#388B9E',   // Secondary accent
  sage: '#5C7572',   // Tertiary accent
  tan: '#988C7F'     // Warm highlights
}
```

#### Custom Shadows (Neumorphic)
- `shadow-neu-sm` - Small elements (buttons, inputs)
- `shadow-neu-md` - Cards and containers
- `shadow-neu-lg` - Elevated elements
- `shadow-neu-inset` - Pressed/active states
- `shadow-glass` - Glassmorphic elements

#### Animations
- `animate-float` - Floating effect (6s infinite)
- `animate-glow` - Glowing effect for accents
- Framer Motion for page transitions and interactions

### E-commerce Features

#### Cart Management
```javascript
// Add item to cart
addToCart(artwork)

// Update quantity
updateQuantity(itemId, newQuantity)

// Remove item
removeFromCart(itemId)

// Calculate totals
getCartTotal()
getCartCount()
```

#### Data Flow
1. **Shop.jsx** displays products with "Add to Cart" buttons
2. **CartContext** manages global cart state
3. **Cart.jsx** displays cart items in sliding sidebar
4. **Checkout.jsx** processes orders with form validation
5. **localStorage** persists cart between sessions

### Styling Conventions

#### Neumorphic Components
- Soft shadows with light/dark contrast
- Raised appearance with `shadow-neu-*`
- Inset effects for active/pressed states
- Subtle gradients for depth

#### Glassmorphic Components
- `backdrop-blur-*` for frosted glass effect
- Semi-transparent backgrounds with `bg-opacity-*`
- Light borders with `border-white/20`
- Used for overlays and navigation

#### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Mobile menu in Navbar for smaller screens
- Cart becomes full-width on mobile

### 3D Integration
- Spline scenes embedded in Home, About, and Contact pages
- Scenes loaded via URLs (can be replaced with custom Spline projects)
- Interactive 3D elements for visual enhancement

### Important Notes

#### File Organization
- All pages are in root directory (not in src/pages/ subdirectory)
- Components follow PascalCase naming
- Single-file components with all logic included

#### Data Management
- Product data hardcoded in Shop.jsx artworks array
- No external API or database integration
- Cart state managed entirely in frontend

#### Form Handling
- Contact and Checkout forms use local state
- No backend integration (forms don't actually submit)
- Client-side validation only

#### Asset Management
- Images loaded via external URLs (Unsplash)
- No local image assets
- Fonts loaded from Google Fonts CDN

**Recent Image Updates (2025-10-03):**
- Fixed broken artwork images in Home.jsx and Gallery.jsx
- Replaced 3 missing images with working Unsplash URLs:
  - "Geometric Harmony": photo-1557672172-298e090bd0f1 (geometric abstract art)
  - "Urban Lens": photo-1477959858617-67f85cf4f1df (urban photography)
  - "Color Symphony": photo-1515405295579-ba7b45403062 (colorful abstract)
- All images use format: `https://images.unsplash.com/photo-[ID]?w=800&q=80`
- Images are optimized for web (800px width, 80% quality)

When modifying this codebase:
1. Follow existing component patterns and file structure
2. Use the established design system colors and shadows
3. Maintain responsive design principles
4. Keep cart state management centralized in CartContext
5. Test cart functionality when making changes to e-commerce features

## 🤖 Claude Code Agents

This project includes specialized Claude Code agents for deployment and quality assurance.

### Available Agents

#### 1. Deployment Orchestrator (`deployment-orchestrator`)
Master coordinator for Vercel deployments. Manages the entire deployment pipeline from validation to production.

**Usage:**
```
Use the deployment orchestrator agent to deploy to Vercel
```

**Responsibilities:**
- Pre-deployment validation
- Preview deployment coordination
- Production releases
- Post-deployment verification
- Rollback management

#### 2. Code Validator (`code-validator`)
Validates code quality, runs build checks, and ensures best practices.

**Usage:**
```
Use the code validator agent to check code quality
```

**Checks:**
- Build validation
- Code structure
- Dependencies and security
- React best practices
- Asset optimization

#### 3. QA Tester (`qa-tester`)
Tests Vercel preview deployments and validates functionality.

**Usage:**
```
Use the qa tester agent to test the preview deployment at [URL]
```

**Tests:**
- Page accessibility
- Performance
- Client-side routing
- Asset loading
- Mobile responsiveness

#### 4. Monitoring Agent (`monitoring-agent`)
Monitors production health and checks for issues.

**Usage:**
```
Use the monitoring agent to check production health
```

**Monitors:**
- Deployment status
- Site uptime
- Performance metrics
- Error rates (Sentry)
- SSL certificates

#### 5. Test Runner (`test-runner`)
Manages testing infrastructure (currently helps set up tests as none exist yet).

**Usage:**
```
Use the test runner agent to run validation checks
```

**Can help with:**
- Setting up Vitest for unit tests
- Setting up Playwright for E2E tests
- Running build validation
- Creating test examples

#### 6. Asset Manager (`asset-manager`)
Manages digital assets including images, optimization, and CDN integration.

**Usage:**
```
Use the asset manager agent to find and fix missing images
```

**Responsibilities:**
- Finding replacement images from Unsplash
- Optimizing image URLs and parameters
- Updating image references in code
- Verifying image loading and quality
- Managing image metadata

### Slash Commands

#### `/deploy-preview`
Creates a Vercel preview deployment for testing.

**What it does:**
1. Validates code and build
2. Commits and pushes changes
3. Creates Vercel preview deployment
4. Runs QA tests on preview
5. Provides preview URL

**Example:**
```
/deploy-preview
```

#### `/deploy-production`
Deploys to production on Vercel (use with caution!).

**What it does:**
1. Verifies preview was tested
2. Merges to main branch
3. Triggers production deployment
4. Validates production site
5. Monitors for errors

**Prerequisites:**
- Preview deployment tested
- All QA checks passed
- Code reviewed

**Example:**
```
/deploy-production
```

#### `/emergency-rollback`
Instantly rolls back production to previous version.

**When to use:**
- Production site is down
- Critical bug discovered
- Performance issues
- Any emergency situation

**Example:**
```
/emergency-rollback
```

### Deployment Workflow

#### Standard Workflow
1. Make changes to code
2. Run `/deploy-preview` to create preview
3. Test preview thoroughly
4. Run `/deploy-production` to go live
5. Monitor production

#### Emergency Workflow
1. Issue detected in production
2. Run `/emergency-rollback` immediately
3. Investigate root cause
4. Fix in preview
5. Redeploy when ready

### Deployment History

#### 2025-10-03 - Image Fix Deployment
- **Commit**: `ebf00e1` - fix: replace broken artwork images with working Unsplash URLs
- **Changes**:
  - Replaced 3 broken artwork images (Geometric Harmony, Urban Lens, Color Symphony)
  - Updated image URLs in Home.jsx and Gallery.jsx
  - All images verified working and optimized
- **Production URL**: https://art2three.vercel.app
- **Deployment ID**: art2three-jb84up2lr
- **Status**: ✅ Successful
- **Build Time**: ~3 seconds

#### 2025-10-03 - Initial Deployment
- **Commit**: `36c3f89` - Initial commit: Art23 Gallery website ready for Vercel deployment
- **Changes**: Complete gallery website with e-commerce functionality
- **Production URL**: https://art2three.vercel.app
- **Deployment ID**: art2three-pxy18x6am
- **Status**: ✅ Successful
- **Build Time**: ~13 seconds

### Environment Setup

#### Required Environment Variables
The following should be set in your environment (already in `.env`):
- `VERCEL_TOKEN` - For Vercel CLI deployments
- `GITHUB_TOKEN` - For GitHub operations
- `SENTRY_AUTH_TOKEN` - For error monitoring
- `SUPABASE_SERVICE_ROLE_KEY` - For future database integration

#### Vercel Configuration
The project is configured for Vercel with:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework**: Vite
- **Node Version**: 18.x

#### GitHub Integration
Vercel automatically deploys:
- **Preview**: Any branch push creates preview
- **Production**: Push to `main` branch deploys to production

### Deployment Best Practices

1. **Always test preview first**
   - Never deploy directly to production
   - Test all functionality on preview
   - Check mobile responsiveness

2. **Monitor after deployment**
   - Watch for errors in Sentry
   - Check Vercel Analytics
   - Test critical user flows

3. **Keep deployments small**
   - Deploy frequently
   - One feature at a time
   - Easier to rollback if needed

4. **Use rollback when needed**
   - Don't hesitate to rollback
   - Fix issues properly before redeploying
   - Document what went wrong

### Agent Configuration

All agent configurations are in `.claude/`:
```
.claude/
├── agents/                  # Agent definitions
│   ├── deployment-orchestrator.md
│   ├── code-validator.md
│   ├── qa-tester.md
│   ├── monitoring-agent.md
│   └── test-runner.md
├── commands/                # Slash commands
│   ├── deploy-preview.md
│   ├── deploy-production.md
│   └── emergency-rollback.md
├── settings.json            # Project configuration
└── hooks.json              # Automation hooks
```

### Automation Hooks

The project includes automated hooks for:
- **Pre-deployment validation**: Runs before deployments
- **Auto-formatting**: Formats code after edits
- **Production safeguards**: Extra confirmation for production
- **Post-deployment monitoring**: Health checks after deploy
- **Build failure handling**: Graceful error handling
- **Security audits**: Checks dependencies

### Testing Strategy

Currently, the project has no automated tests. The test-runner agent can help set up:

#### Unit Tests (Vitest)
```bash
npm install --save-dev vitest @testing-library/react
```

#### E2E Tests (Playwright)
```bash
npm install --save-dev @playwright/test
```

#### Manual Testing Checklist
- [ ] All pages load
- [ ] Cart functionality works
- [ ] Forms validate
- [ ] Mobile responsive
- [ ] 3D scenes load
- [ ] No console errors

### Monitoring & Analytics

#### Vercel Analytics
Built-in analytics available in Vercel dashboard:
- Page views
- Performance metrics
- Web Vitals

#### Sentry Error Tracking
Error monitoring configured (when set up):
- JavaScript errors
- Performance issues
- User feedback

#### Uptime Monitoring
Consider adding:
- Better Stack (formerly Better Uptime)
- Pingdom
- UptimeRobot

### Troubleshooting

#### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

#### Preview Not Working
- Check Vercel dashboard for build logs
- Verify environment variables
- Check branch name

#### Production Issues
- Run `/emergency-rollback` immediately
- Check Sentry for errors
- Review recent changes

### Quick Reference

#### Deploy Preview
```
/deploy-preview
```

#### Deploy Production
```
/deploy-production
```

#### Emergency Rollback
```
/emergency-rollback
```

#### Check Code Quality
```
Use the code validator agent to check code quality
```

#### Monitor Production
```
Use the monitoring agent to check production health
```

### Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Claude Code Documentation](https://docs.claude.com/claude-code)

---

**Remember**: The agents are here to help! Use them to streamline deployments, ensure quality, and maintain a healthy production site.
# Personal Portfolio Website

A modern, abstract-style personal portfolio built with Next.js 16, React 19, and Tailwind CSS v4. Features glassmorphic design, smooth animations, and fully responsive layouts.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed on your system
- npm or yarn package manager

### Installation

```bash
# Navigate to project directory
cd /Users/violetlin/Documents/github/my_github/Introduction

# Install dependencies (already done, but here's the command)
npm install
```

### Running the Development Server

```bash
npm run dev
```

The site will be available at:
- **Local:** http://localhost:3000
- **Network:** http://10.0.0.179:3000

Press `Ctrl+C` to stop the server.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

### Starting Production Server

```bash
npm start
```

## 📁 Project Structure

```
portfolio-site/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Home page (main showcase)
│   │   ├── about/
│   │   │   └── page.tsx        # About Me page
│   │   ├── projects-big/
│   │   │   └── page.tsx        # Big Projects (3-column grid)
│   │   ├── projects-small/
│   │   │   └── page.tsx        # Small Projects (list)
│   │   ├── experience/
│   │   │   └── page.tsx        # Past Experience (timeline)
│   │   └── contact/
│   │       └── page.tsx        # Contact & Form
│   ├── components/
│   │   ├── Navbar.tsx          # Fixed navigation bar
│   │   ├── LayoutClient.tsx    # Client wrapper for layout
│   │   ├── PageTransition.tsx  # Fade-in animation wrapper
│   │   ├── CentralPhoto.tsx    # Central profile photo
│   │   ├── FloatingBubble.tsx  # Individual speech bubble
│   │   └── BubblesContainer.tsx # Bubbles manager
│   ├── styles/
│   │   └── globals.css         # Global animations & styles
│   └── lib/
│       └── privacy.ts          # Privacy protection utilities (disabled by default)
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind theme configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
└── package.json                # Dependencies
```

## 🎨 Design Features

### Color Palette (Muted Pop Abstract)
- **Background:** Rose-50 (`bg-rose-50`)
- **Content Container:** Glassmorphic white (`bg-white/80 backdrop-blur-md`)
- **Text:** Slate-800 and Rose-950
- **Accent:** Rose gradients

### Key Components

#### 🏠 Home Page
- Central profile photo with watermark overlay
- 5 floating speech bubbles (About, Big Projects, Small Projects, Experience, Contact)
- Each bubble has a tail pointing to center
- Responsive: Desktop (centered) → Mobile (vertical stack)

#### 📊 Big Projects Page
- 3x2 grid layout on desktop (3 columns, 2 rows)
- Single column stack on mobile
- Square project cards with glassmorphic styling
- Inherit floating animations with hover pause effect

#### Other Pages
- **About Me:** Profile and skills showcase
- **Small Projects:** List-based project display
- **Experience:** Timeline view of work history
- **Contact:** Contact methods + contact form

### Animations

1. **Floating Animation** (`float`)
   - Desynchronized timing per element
   - Subtle vertical movement (±15px)
   - Duration: 3.8s - 4.5s

2. **Page Transitions** (`fade-in`/`fade-out`)
   - Smooth 300-500ms transitions
   - Applied when navigating between pages

3. **Hover Effects**
   - Scale up (1 → 1.1)
   - Shadow deepening
   - Sibling opacity reduction (30%)

## 🔒 Privacy Features

Privacy protection functions are pre-configured but **DISABLED BY DEFAULT** for development.

Available functions in `src/lib/privacy.ts`:
- `disableRightClick()` - Block right-click context menu
- `preventTextSelection()` - Disable text selection and copying
- `blockScreenshots()` - Detect and warn about screenshot attempts
- `enableAllPrivacyFeatures()` - Enable all protections at once

### To Enable Privacy Features

Edit `src/components/LayoutClient.tsx`:

```typescript
import { enableAllPrivacyFeatures } from '@/lib/privacy';

useEffect(() => {
  // Uncomment the line below to enable:
  enableAllPrivacyFeatures();
}, []);
```

⚠️ **Note:** These are behavioral deterrents, not cryptographic security. Determined users with dev tools can bypass them.

## 📱 Responsive Design

### Breakpoints (Tailwind CSS)
- **Mobile (sm):** < 640px - Vertical stack
- **Tablet (md):** 640px - 1024px - Compact layout
- **Desktop (lg):** 1024px+ - Full centered layout
- **Large (xl):** 1280px+ - Maximum width

### Responsive Utilities
- `md:` - Tablet and up
- `lg:` - Desktop and up
- Use Tailwind's responsive prefixes throughout

## 🛠️ Customization

### Adding Your Profile Photo

1. Place your image in `public/` folder
2. Update `src/components/CentralPhoto.tsx`:

```typescript
import Image from 'next/image';

// Replace the SVG placeholder with:
<Image
  src="/your-photo.jpg"
  alt="Profile Photo"
  width={256}
  height={256}
  className="w-full h-full object-cover"
  priority
/>
```

### Updating Navigation Links

Edit `src/components/Navbar.tsx` `navLinks` array:

```typescript
const navLinks = [
  { href: '/path', label: 'Custom Label' },
  // Add more links...
];
```

### Customizing Bubble Positions

Edit bubble positions in `src/app/page.tsx`:

```typescript
const bubbles = [
  {
    text: 'Label',
    emoji: '🎯',
    href: '/path',
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'right-center',
    animationDelay: 0,
  },
];
```

### Modifying Theme Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      'rose-soft': '#custom-color',
    },
  },
}
```

## 📦 Deployment

### Preparing for GitHub Pages

1. Update `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  images: { unoptimized: true },
};
```

2. Build static export:
```bash
npm run build
```

3. Push to GitHub:
```bash
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

4. Deploy to GitHub Pages using workflow or manual method

## 🧪 Testing

### Run TypeScript Type Checking
```bash
npx tsc --noEmit
```

### Run ESLint
```bash
npm run lint
```

### Browser Testing
- Open http://localhost:3000
- Test all navigation links
- Test hover effects and animations
- Test responsive design (resize browser or use dev tools)

## 📚 Technologies Used

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Runtime:** React 19
- **Package Manager:** npm

## 🚧 Future Enhancements

- Add dark mode toggle
- Integrate contact form with backend service
- Add project detail pages
- Implement search functionality
- Add blog section
- Set up analytics tracking

## 📝 License

© 2025 My Portfolio. All rights reserved.

---

**Happy coding!** 🎨✨

For questions or issues, check the code comments or customize as needed.

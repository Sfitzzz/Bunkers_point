# The Bunkers Point 🏗️☕
### थे बंकर्स पॉइंट — 24/7 Café & Hangout | Kolar Road, Bhopal

A fully responsive, production-grade single-page website for The Bunkers Point café.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS (custom industrial theme)
- **Icons**: Lucide React
- **Fonts**: Bebas Neue · Barlow Condensed · Noto Sans Devanagari (via Google Fonts)

## Project Structure

```
bunkers-point/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata + font imports
│   ├── page.tsx            # Main page — assembles all sections
│   └── globals.css         # Global styles, caution stripes, reveal animations
├── components/
│   ├── Navbar.tsx          # Fixed responsive navbar with mobile drawer
│   ├── Footer.tsx          # Footer
│   ├── FloatingActions.tsx # Mobile FAB: Call + Navigate
│   └── sections/
│       ├── HeroSection.tsx     # Full-screen hero with rotating taglines
│       ├── AboutSection.tsx    # About + feature cards + stats
│       ├── MenuSection.tsx     # Tabbed menu grid (Coffee / Snacks / Chai)
│       ├── ReviewsSection.tsx  # Wall of Fame — 6 review cards
│       └── LocationSection.tsx # Google Maps embed + address info
├── lib/
│   ├── data.ts             # All business data, menu items, reviews (single source of truth)
│   └── useInView.ts        # Scroll-reveal hook (IntersectionObserver)
├── tailwind.config.ts      # Custom bunker theme: colors, fonts, animations
└── next.config.js
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

## Customisation

All business data lives in **`lib/data.ts`**:
- Update `SITE.phone` with the real phone number
- Update `SITE.address.embedUrl` with exact Google Maps embed URL
- Edit `MENU` to add/remove/change menu items
- Edit `REVIEWS` to update testimonials

## Key Features
- ⚡ Open 24/7 badge (animated pulsing glow)
- 🗺 Google Maps embed (grayscale filtered to match industrial theme)
- 📱 Fully responsive — mobile drawer nav + floating call/navigate buttons
- 🎨 Industrial Bunker aesthetic — caution stripes, grid overlays, steel textures
- 🔍 SEO-optimized — meta title, description, Open Graph, Twitter Card
- ♿ Accessible — aria-labels, semantic HTML, focus states
- 🚀 Performance — next/font, lazy-loaded iframe, CSS-only animations

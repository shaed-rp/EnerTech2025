# EnerTech Forum 2025 - SHAED Landing Page

A modern, performant landing page for SHAED's EnerTech Forum 2025 presentation, showcasing the unified platform for commercial vehicle procurement.

> Last updated: Deployment configuration optimized for Vercel static hosting.

## 🚀 Features

- **Modern Stack**: Built with React 18, TypeScript, Vite, and Tailwind CSS
- **Performance Optimized**: Lazy loading, code splitting, and optimized bundles
- **Mobile First**: Fully responsive design with mobile menu
- **Accessible**: WCAG 2.1 compliant with keyboard navigation and screen reader support
- **SEO Optimized**: Meta tags, semantic HTML, and proper structure
- **Smooth Animations**: Intersection Observer-based animations with reduced motion support

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS v4, Radix UI components
- **Routing**: Wouter
- **Backend**: Express.js
- **Package Manager**: pnpm

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type check
pnpm check

# Format code
pnpm format
```

## 🏗️ Project Structure

```
├── client/                 # Frontend application
│   ├── public/            # Static assets
│   └── src/
│       ├── components/    # React components
│       │   ├── sections/  # Page sections
│       │   └── ui/        # UI components
│       ├── hooks/         # Custom React hooks
│       ├── lib/           # Utility functions
│       └── pages/         # Page components
├── server/                # Express server
├── shared/                # Shared constants
└── dist/                  # Build output
```

## 🎨 Key Components

### Sections
- **Hero**: Main landing section with gradient text
- **Market Opportunity**: Market statistics and TAM/SAM/SOM
- **Problem Section**: Industry challenges
- **Solution Section**: SHAED platform features
- **ROI Section**: Proven results and metrics
- **Market Timing**: Industry tailwinds
- **Traction**: Current platform adoption
- **CTA**: Call-to-action section

### Hooks
- `useSmoothScroll`: Smooth scrolling with reduced motion support
- `useIntersectionObserver`: Viewport intersection detection
- `useScrollPosition`: Track scroll position

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Optional: Analytics
VITE_ANALYTICS_ENDPOINT=https://your-analytics-url.com
VITE_ANALYTICS_WEBSITE_ID=your-website-id

# Optional: Google Maps (if using Map component)
VITE_FRONTEND_FORGE_API_KEY=your-api-key
VITE_FRONTEND_FORGE_API_URL=https://forge.butterfly-effect.dev
```

## 🚢 Deployment

### Production Build

```bash
pnpm build
```

This creates an optimized production build in the `dist/` directory.

### Server

The Express server serves the static files and handles client-side routing:

```bash
NODE_ENV=production pnpm start
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Screen reader optimized
- Focus management
- Reduced motion support
- Skip to content link

## 🎯 Performance

- Code splitting with React.lazy()
- Lazy loading images
- Optimized bundle sizes
- Preload critical resources
- Efficient re-renders

## 📄 License

MIT

## 👥 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

For questions or support, please contact the SHAED team.


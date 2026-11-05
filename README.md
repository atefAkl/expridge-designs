# Mawthiq Partner Website — بوابة شركاء موثق

> **Milestone 1:** Project Setup & Environment Foundation  
> **Status:** Completed  
> **Target Directory:** `mawthiq-partner-website`

---

## 1. Project Overview

**Mawthiq Partner Website** (`mawthiq-partner-website`) is a premium corporate website designed to introduce the **Mawthiq (موثق)** ecosystem and attract top-tier business, commercial, and technical partners across Saudi Arabia and the GCC region.

### Core Objectives
- Present Mawthiq’s corporate identity, vision, and core values.
- Attract and recruit strategic partners (tech platforms, commercial distributors, professional consultants).
- Provide a clear, reliable onboarding journey for prospective partners.
- Lay the ground for future backend integration and interactive partner recruitment workflows.

---

## 2. Technology Stack

| Technology | Role | Details |
|---|---|---|
| **React 19** | Frontend UI Framework | Component-based interactive UI |
| **Vite 8** | Build Tool & Bundler | Ultra-fast development server with ES Modules |
| **JavaScript (ESM)** | Language | Modern ES Modules (no TypeScript) |
| **Tailwind CSS v4** | Utility-First Styling | Official `@tailwindcss/vite` integration |
| **React Router DOM v7** | Client Routing | Declarative single-page routing |
| **Framer Motion v14** | Motion & Transitions | Fluid micro-interactions and transitions |
| **Lucide React** | Icons | Modern, lightweight, customizable icons |
| **Axios** | HTTP Client | Preconfigured instance with interceptors for API readiness |

---

## 3. Project Architecture

The codebase follows a modular, feature-oriented, and scalable architecture:

```text
mawthiq-partner-website/
├── public/
│   ├── favicon.svg              # Corporate branded SVG icon
│   └── robots.txt               # Crawler directives
├── src/
│   ├── assets/
│   │   ├── images/              # Media and brand imagery (.gitkeep)
│   │   ├── icons/               # Specialized custom vector assets (.gitkeep)
│   │   └── styles/
│   │       └── index.css        # Tailwind CSS v4 entrypoint & theme variables
│   ├── components/
│   │   ├── common/              # Reusable design system primitives
│   │   │   ├── Button.jsx       # Animated button with variants & icons
│   │   │   ├── Card.jsx         # Elevated card with motion hover effects
│   │   │   ├── Container.jsx    # Responsive maximum width container
│   │   │   ├── SectionHeader.jsx# Unified title, badge & subtitle wrapper
│   │   │   └── index.js
│   │   ├── layout/              # Structural chrome components
│   │   │   ├── Navbar.jsx       # Fixed blur header with mobile drawer
│   │   │   ├── Footer.jsx       # Enterprise corporate footer
│   │   │   ├── Layout.jsx       # Root page wrapper
│   │   │   └── index.js
│   │   └── sections/            # The 8 core landing page sections
│   │       ├── HeroSection.jsx           # Section 2: Animated Hero Slider scaffold
│   │       ├── VisionSection.jsx         # Section 3: Our Vision
│   │       ├── TargetPartnersSection.jsx # Section 4: Who We're Looking For
│   │       ├── PartnershipModelSection.jsx # Section 5: What Partnership Means
│   │       ├── PrinciplesSection.jsx     # Section 6: Our Principles
│   │       ├── HowToJoinSection.jsx      # Section 7: How to Join
│   │       ├── FaqSection.jsx            # Section 8: Interactive FAQ
│   │       ├── FinalCtaSection.jsx       # Section 9: Final Call-to-Action
│   │       └── index.js
│   ├── constants/               # Centralized configuration & links
│   │   ├── navigation.js        # Navbar & footer anchor links
│   │   ├── siteConfig.js        # Contact details & brand metadata
│   │   └── index.js
│   ├── hooks/                   # Custom reusable React hooks
│   │   ├── useScroll.js         # Reactive scroll tracking
│   │   └── index.js
│   ├── pages/                   # Application views
│   │   ├── HomePage.jsx         # Main partner recruitment landing page
│   │   ├── NotFoundPage.jsx     # Resilient 404 page
│   │   └── index.js
│   ├── routes/                  # Client-side routing definitions
│   │   ├── AppRoutes.jsx        # BrowserRouter configuration
│   │   └── index.js
│   ├── services/                # Network and API layer
│   │   ├── api.js               # Configured Axios client with interceptors
│   │   └── index.js
│   ├── utils/                   # Shared helper functions
│   │   └── cn.js                # Conditional class name merger
│   ├── App.jsx                  # Root App provider
│   ├── main.jsx                 # DOM entrypoint
│   └── index.css                # CSS bridge
├── .env.example                 # Environment configuration template
├── .gitignore                   # Ignored files & build artifacts
├── index.html                   # HTML entrypoint with Arabic RTL support
├── package.json                 # Dependency manifest
└── vite.config.js               # Vite + Tailwind v4 + path alias configuration
```

---

## 4. Getting Started

### Prerequisites
- **Node.js**: v20+ (Verified on v22.18.0)
- **npm**: v10+ (Verified on 10.9.3)

### Installation
From the project directory:
```bash
cd mawthiq-partner-website
npm install
```

### Development Server
Starts the local development server at `http://localhost:3000`:
```bash
npm run dev
```

### Production Build
Builds optimized production assets inside the `dist/` folder:
```bash
npm run build
```

### Preview Production Build
Locally preview the generated production build:
```bash
npm run preview
```

---

## 5. Environment Configuration

Copy `.env.example` to `.env` to configure environment variables:
```bash
cp .env.example .env
```

Available variables:
- `VITE_APP_NAME`: Application brand name
- `VITE_APP_ENV`: Current environment (`development`, `production`)
- `VITE_API_BASE_URL`: API backend base URL for future Laravel integration
- `VITE_API_TIMEOUT`: Axios timeout in milliseconds (default: `15000`)

---

## 6. Project Roadmap

- [x] **Milestone 1:** Project Setup & Environment Foundation (Current)
- [ ] **Milestone 2:** Design Tokens, Typography & Brand Assets
- [ ] **Milestone 3:** Landing Page Sections Implementation (Interactive Slider, Dynamic FAQ, Principles grid)
- [ ] **Milestone 4:** Partner Application Workflow & Forms
- [ ] **Milestone 5:** Backend API Integration (Laravel API)
- [ ] **Milestone 6:** Quality Assurance, Accessibility, Performance & Deployment

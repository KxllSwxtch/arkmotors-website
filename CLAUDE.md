# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start Vite dev server (http://localhost:5173)
npm run build    # Build for production (outputs to /dist)
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
npm run start    # Serve production build (uses 'serve' package)
```

**Deployment:**

- Hosted on Netlify
- Node version: 20.9.0
- Configuration: `netlify.toml`
- SPA redirects configured (all routes → index.html)

## Tech Stack

- **React 19.0.0** with new `createRoot` API
- **Vite 6.1.0** for build tooling
- **React Router DOM 7.2.0** for routing
- **Tailwind CSS 4.0.6** with custom brand colors
- **Firebase 11.5.0** (Firestore for configuration)
- **Framer Motion 12.4.2** for animations
- **Axios 1.7.9** for HTTP requests

## Architecture Overview

**Application Type:** Single Page Application for car export business (Korean cars to Russia)

**Routing Structure:**

```
App.jsx (Router + Layout)
├── Header (fixed navigation with mobile menu)
├── Routes:
│   ├── / (Home - composition of landing sections)
│   ├── /catalog (In-stock inventory with filters)
│   ├── /catalog/:carId (Car details)
│   ├── /export-catalog (Cars available for export/order)
│   ├── /export-catalog/:carId (Export car details)
│   ├── /about, /contacts, /cases
│   └── /admin (Markup management panel)
├── FixedPhone (floating contact button)
└── Footer
```

**Data Flow:**

1. **Firebase Firestore** stores markup configuration
2. **External Heroku API** (`https://ark-motors-backend-3a002a527613.herokuapp.com`) provides car inventory
3. **Translation layer** converts Korean car names to Russian
4. **Local state management** (no Redux/Context API)

**Key Directories:**

- `/src/components/` - Reusable UI components (17 files)
- `/src/pages/` - Route-level page components (10 files)
- `/src/utils/` - Helper functions, filter options, brand/model logos
- `/src/translations/` - Korean → Russian translation dictionaries

## Critical Patterns & Conventions

### 1. Translation System

All car-related text from the Korean API is translated to Russian using translation dictionaries:

```javascript
// Usage pattern:
import { translateCarName } from "./utils"
const translatedName = translateCarName(koreanCarName)
```

- Dictionaries: `carBrands.js`, `carModels.js`, `carTrims.js`, `carDetailedModels.js`
- Uses longest-match-first regex replacement strategy
- Applied at render time, not stored in database

### 2. Tailwind Custom Colors

Brand colors defined in `tailwind.config.js` `@theme` block:

```javascript
--color-arkGold: #ffd700       // Primary brand color
--color-arkGoldDark: #b78d37   // Hover/accent color
--color-arkBlack: #333333      // Dark background
```

Use as: `bg-arkGold`, `text-arkGoldDark`, `hover:bg-arkGoldDark`

### 3. Cascading Filter Architecture (Catalog.jsx)

The catalog implements a hierarchical filtering system:

```
Country → Maker → Model → DetailModel → Grade → DetailGrade
```

- Each selection triggers API call to fetch next level options
- Additional filters: price, year, mileage, fuel, transmission, color, plate number
- Pagination: 24 cars per page
- Total pages calculated from API response `totalCars / itemsPerPage`

When modifying filters, ensure:

- Reset dependent filters when parent changes
- Maintain filter state in component
- Update API calls with new filter parameters

### 4. Barrel Exports Pattern

All component and utility directories use `index.js` for barrel exports:

```javascript
// components/index.js
export { default as Header } from "./Header"
export { default as Footer } from "./Footer"
// ... etc
```

Import as: `import { Header, Footer } from './components';`

### 5. API Integration Pattern

Standard pattern for API calls:

```javascript
import axios from "axios"

const BASE_URL = "https://ark-motors-backend-3a002a527613.herokuapp.com"
const response = await axios.get(`${BASE_URL}/endpoint`)
```

Firebase usage for markup:

```javascript
import { db } from "./firebase"
import { doc, getDoc, updateDoc } from "firebase/firestore"

const markupDoc = await getDoc(doc(db, "settings", "markup"))
const markupValue = markupDoc.data().value
```

### 6. Component Patterns

- **Functional components only** (no class components)
- **Hooks-based** state management
- **Lazy loading** for performance: `const Component = React.lazy(() => import('./Component'))`
- **Suspense boundaries** with `<Loader />` fallback
- **Props drilling** (no Context API usage)

## Business Logic

### Markup System

- Centralized markup value stored in Firebase Firestore (`settings/markup` document)
- Admin panel (`/admin`) allows updating markup
- Admin password: `'test'` (hardcoded in `AdminPanel.jsx:33`)
- Markup applied to display prices in catalogs

### Customs Calculator

- Integrated external calculator from calcus.ru
- Calculates Russian import duties for Korean cars
- Uses CORS proxy: `https://api.allorigins.win/raw?url=`
- Located in `Calculator.jsx` component

### Two Catalog Types

1. **`/catalog`** - Cars currently in stock/available
2. **`/export-catalog`** - Cars available for export/order

Both share similar filtering logic but query different API endpoints.

### Car Data Hierarchy

```
Country (Korea)
└── Maker (Hyundai, Kia, etc.)
    └── Model (Sonata, K5, etc.)
        └── DetailModel (trim variants)
            └── Grade (equipment levels)
                └── DetailGrade (specific configurations)
```

Each car includes: price (KRW), year, mileage, fuel type, transmission, color, plate number, images

## Important Notes

- **No TypeScript** - Fully JavaScript codebase
- **No tests** - No testing framework configured
- **ESLint configuration** - Uses flat config format (modern ESLint 9.x)
- **React version mismatch** - Project uses React 19.0.0, but ESLint config specifies 18.3
- **Firebase config** - Public API keys exposed in `firebase.js` (acceptable for client-side Firebase)
- **Large translation files** - `modelLogos.js` is ~87KB, consider code splitting if bundle size becomes an issue
- **No error boundaries** - Add React error boundaries if implementing error handling improvements

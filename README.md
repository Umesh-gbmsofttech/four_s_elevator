# Four S Elevators Website

## Commands

Run these from the project root:

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

Notes:

- `npm run dev` starts the local Vite development server.
- `npm run build` creates the production build in `dist/`.
- `npm run preview` serves the production build locally for verification.
- `npm run lint` checks the codebase with ESLint.
- There is currently no `test` script configured in this project.

## Project Details

This is the production marketing website for Four S Elevators, a Pune-based elevator solutions company. The site is built as a React + Vite single-page application and is designed to support SEO, lead generation, and mobile-responsive business presentation.

### Tech Stack

- React 19
- Vite
- Material UI
- Framer Motion
- React Router

### Main Features

- Multi-page business website for Home, About, Products, Services, Contact, and Privacy Policy
- SEO-focused product and service content for elevator-related search terms
- Reusable contact form with Google Apps Script submission flow
- Global lead-capture popup with once-per-user behavior
- Shared contact modal used across popup, navbar CTA, and footer support action
- Responsive layouts for desktop and mobile
- Lazy-loaded routes and images for better performance

### Contact Form Integration

Lead submissions are sent through the shared helper in:

`src/utils/contactSubmission.js`

The form currently posts to a Google Apps Script endpoint using `fetch(..., { mode: "no-cors" })`.

### Important Project Paths

- `src/pages/` - main route pages
- `src/sections/` - reusable page sections
- `src/components/` - shared UI and interaction components
- `src/content/siteContent.js` - business copy and structured content
- `src/assets/siteMedia.js` - media imports and image mappings
- `public/` - static public assets such as logos and redirects

### Build Output

Production files are generated in:

`dist/`

### Current Maintenance Notes

- Large image assets are still the biggest performance cost; converting PNGs to WebP/AVIF would further improve load speed.
- No automated test setup exists yet.
- The contact popup and shared modal are tuned for responsive behavior and mobile usability.

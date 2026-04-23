# Ideal Spaces Frontend

Next.js 16 frontend-only app for Ideal Spaces, a lead-generation event venue website.

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Architecture

- `src/app` contains the Next.js App Router routes.
- `src/views` contains the reusable Ideal Spaces page views.
- `src/components` contains UI sections and shared components.
- `src/data/idealSpaces.ts` contains venue content, contact details, gallery data, and WhatsApp links.
- `public/ideal-spaces` contains generated venue imagery used by the pages.

No backend, database, API server, or admin app is required.

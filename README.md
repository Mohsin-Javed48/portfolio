# Mohsin Javed — Portfolio

Personal portfolio site built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All resume content (experience, projects, skills) lives in `src/lib/data.ts` — edit that file to update the site.

Project images: swap the placeholder icon block in `src/components/Projects.tsx` with a `next/image` once screenshots are available; images should live in `public/projects/`.

Resume PDF: replace `public/resume.pdf` to update the downloadable resume.

## Deploy

Deployed on [Vercel](https://vercel.com/new). Pushing to `main` triggers a production deploy automatically once the project is linked.

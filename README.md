This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Tech stack

| Layer      | Technology |
|-----------|------------|
| Framework | **Next.js** 16 (App Router) |
| UI        | **React** 19 |
| Styling   | **Tailwind CSS** v4 |
| Language  | **TypeScript** 5 |

The project is configured for deployment on [Vercel](https://vercel.com) (see below).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

1. Push this repo to GitHub and go to [vercel.com/new](https://vercel.com/new).
2. Import **joebrokka-coder/Cimba-Website** (or your fork). Vercel will detect Next.js automatically.
3. Use the default settings: **Build Command** `npm run build`, **Output Directory** `.next`. No environment variables are required for the default build.
4. Deploy. Each push to `main` will trigger a new production deployment.

The repo includes `vercel.json` so the framework and build are explicit. Non-app folders (`cursor-talk-to-figma-mcp`, `documents`) are excluded from the TypeScript build so they do not affect the Vercel build.


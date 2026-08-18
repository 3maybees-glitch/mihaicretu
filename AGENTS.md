<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

This is a single Next.js 16 (App Router, Turbopack, React 19) static artist site — no backend, database, or external services. Standard commands live in `package.json` and `README.md`:

- Dev server: `npm run dev` (Turbopack, serves on `http://localhost:3000`).
- Lint: `npm run lint` (ESLint flat config).
- Build: `npm run build` (fully static; all routes prerender).

Non-obvious notes:

- The contact form (`components/contact-form.tsx`) is the only interactive feature. It has no server endpoint — on submit it opens a `mailto:` link (only when `NEXT_PUBLIC_CONTACT_EMAIL` is set) and always shows a "Thank you" confirmation. There is no network request to verify.
- `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_CONTACT_EMAIL` are optional; the app runs fine without any env vars or `.env` file.
- Running `next dev`/`next build` regenerates the `nextjs-agent-rules` block at the top of this file; commit it with your work to keep the tree clean (see that block).

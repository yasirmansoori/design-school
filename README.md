# Design School

The Design School Bengaluru website: sessions, past community events, a photo gallery, and a newsletter preview. This is a private Next.js application maintained by the team.

## Local development

Use **Node.js 24** and **pnpm 11.18.0**. The Node version is recorded in `.nvmrc` and `.node-version`; the package manager is pinned in `package.json`.

```sh
nvm install
nvm use
npm install --global pnpm@11.18.0
pnpm install --frozen-lockfile
pnpm dev
```

Open <http://localhost:3000>. No environment variables, database, or API credentials are required.

## Commands

| Command         | Purpose                                         |
| --------------- | ----------------------------------------------- |
| `pnpm dev`      | Start the development server                    |
| `pnpm check`    | Run lint, TypeScript, and formatting checks     |
| `pnpm format`   | Format source and configuration                 |
| `pnpm build`    | Create and validate the production build        |
| `pnpm start`    | Serve the production build                      |
| `pnpm test:e2e` | Run desktop and mobile browser smoke tests      |
| `pnpm audit`    | Check dependencies against published advisories |

Before running browser tests for the first time:

```sh
pnpm exec playwright install chromium
pnpm build
pnpm test:e2e
```

Tests launch their own production server on port **3100**. Keep that port free. On Linux, install browser system dependencies with `pnpm exec playwright install --with-deps chromium`.

## Project structure

```text
src/
  app/                 Routes, root layout, metadata, global CSS
  components/
    home/              Homepage sections and their event/gallery components
    layout/            Site navigation and footer
    ui/                Small shared animation components
  content/             Typed site settings, navigation, events, gallery photos
  hooks/               Shared browser preference subscriptions
  lib/                 Class-name and numeric utilities
public/images/         Local community photos and newsletter artwork
tests/                 Playwright smoke tests
docs/                  Asset provenance and refactor review
.github/workflows/     Team CI checks
```

`src/app/page.tsx` composes the homepage on the server. Client components own menus, carousels, scroll animation, and the newsletter form. CSS modules live beside the components they style; shared homepage decoration lives in `home-sections.module.css`.

## Updating the website

- **Upcoming and past events:** edit `src/content/events.ts`. Past-event URLs also identify carousel cards, so keep them unique. The carousel starts with the middle event, matching the original site.
- **Gallery:** add photos under `public/images/gallery/` and update `src/content/gallery.ts`, including descriptive alt text.
- **Site metadata, mission, and navigation:** edit `src/content/site.ts`.
- **Section copy and layout:** edit the matching component in `src/components/home/`.

Preserve existing anchors (`#hero`, `#mission`, `#events`, `#testimonials`, `#gallery`, `#newsletter`) when renaming internal components. `#testimonials` remains the past-events anchor for compatibility.

The newsletter validates an email and displays a **signups open soon** notice. It does not send, store, or subscribe email addresses. The unused chatbot and `/api/chat` endpoint have been removed.

Lato loads from Google Fonts; event-cover images load from their existing external hosts. Local gallery images and newsletter artwork are served by this application. See [asset notes](docs/assets.md).

## Team workflow

1. Clone the private repository and create a short-lived branch: `git switch -c feat/your-change` (or `fix/your-change`).
2. Make a focused change, run `pnpm check`, then `pnpm build` and `pnpm test:e2e` when behavior or layout changes.
3. Push the branch and open a pull request against `main`. Explain what changed and how it was verified; include screenshots for visible changes.
4. Have a teammate review the change and merge after CI passes.

CI runs installation, lint, types, formatting, production build, and desktop/mobile smoke tests on pushes to `main` and on pull requests. Failed browser tests retain traces/screenshots as a seven-day workflow artifact.

Repository owners can add teammates under **Settings → Collaborators**. Contributors need Write access. Keep this repository private and keep credentials and local configuration out of Git.

## Dependency maintenance

Keep Next.js on a patched 15.x release and React on a compatible patched 19.x release. ESLint 9 is retained because it is supported by Next 15's lint configuration. Parser security overrides in `pnpm-workspace.yaml` patch indirect dependencies; revisit them when upgrading Next or Tailwind. After dependency changes, run the audit and all checks above and commit `pnpm-lock.yaml`.

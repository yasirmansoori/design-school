# Refactor review — 24 October 2026

## Findings resolved

| Priority | Original finding                                                                                                                                       | Resolution                                                                                                                                                                                 |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| High     | Production builds explicitly ignored TypeScript and lint failures.                                                                                     | Removed both bypasses, fixed the active scroll-text type error, and added blocking local/CI checks.                                                                                        |
| High     | The unused `/api/chat` route still exposed an n8n proxy, accepted unvalidated input, and logged full workflow responses.                               | Removed the endpoint, unused chat UI, and integration dependencies. The route now returns 404.                                                                                             |
| High     | Next 15.2.4, React 19.0.0, and indirect dependencies were outdated.                                                                                    | Updated to patched Next 15.5.28 and React/React DOM 19.3.1; refreshed the lockfile and patched indirect parsers. `pnpm audit` reports no known vulnerabilities.                            |
| Medium   | Past-event content was copied into state, so later prop updates could leave the carousel showing stale data.                                           | State now contains only the navigation offset; event cards derive from current props with stable event URLs as keys. Empty collections render nothing and singleton controls are disabled. |
| Medium   | A past-events component still included a large running-club testimonial dataset and alternate demo rendering.                                          | Removed the unrelated content and rendering branches; renamed the component and event-card types around their actual purpose.                                                              |
| Medium   | The entire homepage was a client component, with large inline content arrays and interactive/static responsibilities mixed together.                   | The page and static sections render on the server. Navigation, carousels, scroll effects, and the form have focused client boundaries. Content lives in typed modules.                     |
| Medium   | Scroll-reveal text duplicated content for assistive technology; reduced-motion handling did not reliably update after server hydration.                | Exposed one accessible text copy and added a hydration-safe media-query subscription with cleanup. Reduced-motion users receive readable text and immediate animation transitions.         |
| Medium   | Hidden/offscreen past-event links were all keyboard stops.                                                                                             | Only the centered event is in the tab sequence; carousel controls remain keyboard accessible and announce the selected event.                                                              |
| Low      | Root-level components, duplicate hooks/styles, an unused starter UI collection, placeholder images, and obsolete design notes obscured the actual app. | Organized code under `src`, colocated CSS modules, removed unreferenced files/assets, and replaced the gallery's hook-file dependency with a plain math utility.                           |
| Low      | Project metadata and developer setup were inherited from a generator; the README was empty.                                                            | Added project naming, pinned toolchain versions, editor/format/lint configuration, focused browser tests, a README, asset notes, and CI.                                                   |

## Verification

- Node 24.22.1 and pnpm 11.18.0 used for validation.
- Lint, strict TypeScript, formatting, and production build pass with error suppression removed.
- Browser suite: **13 passed, 1 skipped**. The skip is the mobile-menu test in the desktop project.
- Desktop/mobile checks cover anchors, layout overflow, mobile Escape/focus and menu closing, event selection and destinations, gallery wrapping/keyboard controls/local image loading, newsletter validation with no POST, reduced motion, and removal of `/api/chat`.
- Twelve screenshots captured at 1440 × 1000 and 390 × 844 match the original at a 0.12 pixel-comparison threshold. All six section heights match at both viewport sizes. Captures and the recoverable original snapshot are kept outside the repository in the local temporary QA directory.
- Dependency audit: **no known vulnerabilities found**. Compatible parser overrides are documented in `pnpm-workspace.yaml` and should be revisited during future framework/tooling upgrades.

## Intentional limitations

- Newsletter submission still shows the existing “signups open soon” notice; it does not collect or persist email addresses.
- Event covers and Lato still depend on their existing external hosts. Gallery images and newsletter artwork remain local.
- Existing design, content, section anchors (including `#testimonials`), external event destinations, and initial carousel selection are preserved.
- ESLint 9 remains aligned with the Next 15 lint configuration. Framework-major and Tailwind-major migrations are outside this refactor.

# Asset notes

- `public/images/gallery/*.webp` contains the eight GTM School community photographs already present in the original project. Their filenames and descriptive alt text are preserved in `src/content/gallery.ts`.
- `public/images/newsletter-bengaluru.jpg` is the original project's AI-generated artwork, created with the built-in image-generation tool by editing an earlier landscape. It is an imaginative Lalbagh-inspired scene, not a documentary event or venue photograph. The unused earlier landscape and generation prompts were removed.
- Event covers retain the existing Luma CDN and Pinterest-hosted URLs recorded in `src/content/events.ts`. No event details or cover artwork were replaced during the refactor.
- The Bengaluru sketches are inline SVG drawings in `bengaluru-illustrations.tsx`. The original local design pass referenced <https://gtmschool.club/> for its in-person community framing; its notes state that no assets were copied from that reference site.
- Typography uses the existing hosted Google Fonts Lato stylesheet. The newsletter display type uses the existing Georgia/system serif stack.

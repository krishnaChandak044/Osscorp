# Osscorp site handoff

## Service photography
The five galleries are populated with high-resolution illustrative stock photographs sourced from Unsplash and covered by its free-use license. These are representative sector images, not photographs of Osscorp projects or clients. For approved corporate/project photography, replace the corresponding local image.

Each service's gallery contains `1.jpg` through `5.jpg` under `public/services/<service-id>/`:
- `offshore` — offshore operations and platforms
- `security` — surveillance and site security
- `telecommunications` — communications infrastructure
- `solar` — solar power installations
- `renewable` — wind energy and renewable infrastructure

Each local image is self-hosted for reliable display and should be kept with its Unsplash source credit. See `IMAGE-CREDITS.md` for the image source pages.

## Contact and final copy
Provide the official email, telephone, office address, and enquiry delivery destination. The current project brief tool copies text locally and does not submit or store enquiries. Replace it with a connected enquiry form once the destination is supplied.

Confirm service capability descriptions, company statistics, ONGC relationship wording, and approval to display client logos. Identify the two generically named logo files: `images.png` and `cropped-cropped-small-round-e1617433026829-300x300.png`. No certifications, testimonials, or project case studies have been invented.

The supplied founder photograph is 250 × 326; replace `public/founder/image.png` with a high-resolution portrait for the best result.

## Local development
Run `npm install`, then `npm run dev` from this folder. Build with `npm run build`.

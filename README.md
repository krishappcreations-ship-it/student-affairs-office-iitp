# Student Affairs Office — IIT Patna

A modern, accessible website for the Student Affairs Office of IIT Patna — a single, easy front door to student-life support: hostels, welfare, wellness, campus life, resources, team and contacts.

> **Note:** Built for the **DeployIITP** event. Since the Student Affairs Office does not publish a dedicated portal, the content uses **dummy data** grounded in real, publicly available IIT Patna information (campus photos, hostels, the Students' Gymkhana, clubs, fests, helplines). Fields are tagged `real` vs `dummy` in the content files; placeholder details (names, office email/phone, campus emergency numbers) must be replaced before any official use.

## Highlights

- **Data-driven** — all content lives in `/content/*.json`; components never hardcode copy, people, links or images. Positions are role-keyed, so people can change without touching code.
- **Accessible** — semantic landmarks, one `h1` per page, keyboard-operable nav, gallery lightbox and forms, visible focus, `prefers-reduced-motion`, WCAG-aware contrast.
- **Secure contact form** — client + server validation (Zod), input sanitisation, honeypot, in-memory rate limiting, secrets via environment only.
- **Fast** — static rendering, `next/image`, restrained motion, branded Open Graph image, sitemap + robots.

## Tech stack

Next.js (App Router) · TypeScript · Tailwind CSS · Zod · `next/font` (Fraunces + Source Sans 3). Deploys on Vercel.

## Pages

Home (About · Vision & Mission · Responsibilities · Welfare · Campus Life · Initiatives) · Team · Gallery · Resources · FAQ · Contact · Privacy · Terms.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Environment variables

All optional — copy `.env.example` to `.env.local` and set as needed:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, sitemap, robots |
| `RESEND_API_KEY` | Enables email delivery for the contact form (optional) |
| `CONTACT_TO_EMAIL` | Destination address for contact submissions |

If the email variables are unset, the contact form validates and accepts submissions as a no-op (demo mode). No secrets are committed to the repository.

## Editing content

Update the JSON files in `/content` — see `content/README.md` for the data dictionary and the real-vs-dummy legend. To change a team member, edit only their entry in `content/team.json`.

## Credits

Campus photography and institutional links are sourced from the official IIT Patna website (iitp.ac.in) for this academic project.

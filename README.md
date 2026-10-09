# Lumen: free websites for local nonprofits

A fast, accessible marketing site built with Next.js (App Router), TypeScript and Tailwind CSS v4. No CMS, no database, no paid services. All copy lives in [`content/`](content/).

`Lumen` is a placeholder name. Change it in one line (see below).

## Run locally

Requires Node 20.9 or newer.

```bash
npm install
cp .env.example .env.local   # optional; see "Connect the forms"
npm run dev                  # http://localhost:3000
```

Other commands: `npm run build`, `npm start`, `npm run lint`, `npm run typecheck`.

## Project layout

```
content/            All editable copy and data (typed TypeScript)
  site.ts           Org name, tagline, email, nav, CTAs  <- start here
  home.ts           Home page sections and roadmap
  nonprofits.ts     Eligibility, process, FAQ, application form fields
  volunteer.ts      Roles, benefits, commitment, sign-up form fields
  work.ts           Portfolio case studies
  about.ts          Mission, story, values, team
  contact.ts        Contact form fields
  legal.ts          Privacy Policy
  types.ts          The schema every content file follows
src/app/            Routes, metadata, sitemap, robots, server action
src/components/     UI components (no copy lives here)
src/lib/            Form validation, metadata helper
src/app/globals.css Design tokens: accent color, neutrals, fonts
```

## Edit content

Open the file in `content/`, change the text, save. TypeScript will flag a missing or misspelled field.

- **Org name:** change `ORG_NAME` at the top of [`content/site.ts`](content/site.ts). It flows into the header, footer, page titles, metadata, structured data, and form emails.
- **Contact email:** `email` in `content/site.ts`. This is also the `mailto:` fallback for every form. It is currently the placeholder `hello@lumen.example`, so replace it before launch.
- **Domain:** set `NEXT_PUBLIC_SITE_URL` in Vercel (used for the sitemap, canonical URLs and Open Graph).
- **Team:** edit `team` in `content/about.ts`. Entries with `placeholder: true` render as dashed "Your name here" cards.
- **Colors and fonts:** the accent color is defined once, as `--color-accent-*` in `src/app/globals.css`. Fonts are set in `src/app/layout.tsx`.
- **Privacy Policy:** `content/legal.ts`. It is a plain-language starting point, not legal advice. Have it reviewed before relying on it.

## Add a portfolio case study

1. Open [`content/work.ts`](content/work.ts) and copy an entry in `caseStudies`.
2. Give it a unique `slug`, a `title`, `orgType`, `summary`, `services` and, if you have them, real `results`. Do not invent numbers.
3. Delete the `placeholder: true` line so the "Placeholder" badge disappears.
4. Optional: add a screenshot to `public/` and set `image: { src: "/work/pantry.png", alt: "…", width: 1200, height: 660 }`. It renders with `next/image`. Add `url` to link to the live site.
5. Delete the example cards once you have real ones.

## Connect the forms

All three forms (application, volunteer, contact) post to one server action, [`src/app/actions.ts`](src/app/actions.ts). It validates on the server, then POSTs JSON to the URL in the `FORM_ENDPOINT` environment variable:

```json
{ "form": "contact", "subject": "Lumen: Contact message", "name": "…", "email": "…" }
```

**Until `FORM_ENDPOINT` is set (or if it fails), nothing is sent.** The form says so plainly, keeps the visitor's answers, and shows an "Open email with my answers" button that opens a pre-filled `mailto:` to your address. Forms are never dead, and visitors are never told a message was sent when it wasn't.

### Option A: Formspree (easiest)

1. Create a free form at [formspree.io](https://formspree.io) and copy its endpoint, like `https://formspree.io/f/abcd1234`.
2. Set `FORM_ENDPOINT` to that URL (locally in `.env.local`, in production in Vercel).
3. Submit a test, then confirm the email in Formspree's inbox. Free plans have a monthly submission limit.

### Option B: Google Apps Script (free, writes to a Google Sheet)

1. Create a Google Sheet. Open **Extensions > Apps Script** and paste:

   ```js
   function doPost(e) {
     const data = JSON.parse(e.postData.contents);
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
     sheet.appendRow([new Date(), data.form, data.name || data.contactName, data.email, JSON.stringify(data)]);
     MailApp.sendEmail("you@example.org", data.subject, JSON.stringify(data, null, 2));
     return ContentService.createTextOutput("{}").setMimeType(ContentService.MimeType.JSON);
   }
   ```

2. **Deploy > New deployment > Web app**. Execute as *Me*, access *Anyone*. Copy the web app URL.
3. Set `FORM_ENDPOINT` to that URL.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. At [vercel.com/new](https://vercel.com/new), import the repo. Vercel detects Next.js, so no configuration is needed.
3. Under **Settings > Environment Variables**, add `NEXT_PUBLIC_SITE_URL` (your final domain) and `FORM_ENDPOINT`.
4. Deploy. Add your custom domain under **Settings > Domains**, then redeploy so the sitemap uses it.

## Notes

- The site is statically generated. Only form submissions run on the server.
- Sitemap and robots are generated at `/sitemap.xml` and `/robots.txt`. The Open Graph image is generated from the org name and tagline in `src/app/opengraph-image.tsx`.
- The site uses no analytics or cookies. If you add analytics, update the Privacy Policy.
- Motion is limited to a gentle fade and slide on scroll, and is disabled for visitors who prefer reduced motion.

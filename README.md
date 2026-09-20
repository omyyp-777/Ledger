# After Hours — WebRush Improved Frontend

A frontend-only React/Vite experience for **Your Life, In Receipts**. The app is organized around story chapters, discoverable cross-category threads, and an explorable receipt ledger.

## Important dataset note

The included `src/data/receipts.js` contains **fictional demonstration records only** so the project runs immediately. It is not the WebRush organizer dataset. Before submitting, replace the demo records with the official dataset. Do not claim that sample records are organizer-provided data.

## Features

- Story chapters that open into evidence-backed narratives
- Thread Finder with tag-based discovery
- Cross-category receipt sequences and supporting evidence
- Search across title, detail, category, tags, and location
- Category filtering and chronological sorting
- Clickable receipt details
- Responsive layout for mobile, tablet, and desktop
- Keyboard focus states, semantic controls, labels, and reduced-motion support
- Frontend-only implementation; no backend, database, or server-side application logic

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

## Replace the sample dataset

1. Open `src/data/receipts.js`.
2. Replace `receipts` with the official organizer dataset.
3. Preserve each record's unique `id`, `type`, and `date`; map organizer fields to `title`, `detail`, `tags`, and optional `location`, `amount`, and `mood`.
4. Update the `stories` array so each `receiptIds` list references real receipt IDs from the official dataset.
5. Validate every story against the records it cites. Avoid unsupported claims or invented relationships.
6. Update the archive year and copy in `src/App.jsx` if the official dataset covers a different period.

## Suggested normalized receipt shape

```js
{
  id: "unique-id",
  type: "Music", // one of the organizer's categories
  date: "2017-01-14T02:10:00",
  title: "Record title",
  detail: "Original or faithfully summarized record details",
  tags: ["tag-one", "tag-two"],
  location: "Optional location",
  amount: 12.40 // optional numeric value
}
```

## Deployment

Deploy as a static frontend on Vercel, Netlify, or another supported static host. Build command: `npm run build`. Output directory: `dist`.

Before submission:
- Confirm the deployed site loads in a fresh browser session.
- Confirm GitHub repository and live URL are the versions you intend to submit.
- Test search, filters, story details, receipt details, and responsive layouts.
- Verify dataset compliance and all narrative claims against the official dataset.
- Include the live URL and repository URL in the final submission.

## Accessibility and performance notes

- No Three.js scene or continuously running animation loop is included; the experience prioritizes content, responsiveness, and low overhead.
- Motion preferences are respected with `prefers-reduced-motion`.
- Interactive elements are native buttons, selects, and labeled inputs with visible keyboard focus.
- If you add imagery, use meaningful alt text and optimized asset sizes.

## Hackathon integrity

This is a starter implementation. Follow WebRush's participation rules and ensure the final project, dataset integration, validation, and submission are completed within the permitted hackathon window. Check the organizer's policy on AI-assisted code before submitting.

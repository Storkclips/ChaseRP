
# ChaseRP Neon — Vite + React + TypeScript + Tailwind

Neon-themed FiveM server site with a dashboard, queue page, rules, store, support, and account pages.

## Quick start
```bash
npm i
npm run dev
```

## Routes
- `/` — Dashboard (Join Queue modal)
- `/queue?server=Game%20Server&position=110&total=110&autoLaunch=1` — Angled queue screen
- `/rules` — Rules & SOPs
- `/store` — Simple store
- `/support` — Discord support CTA
- `/account` — Basic account placeholders

## Notes
- UI is built with Tailwind classes and lightweight shadcn-like components (`src/ui/*`). No extra setup needed.
- “Join Queue” opens `/queue` in a **new tab** with query params.
- Swap placeholder data and link real endpoints as needed.

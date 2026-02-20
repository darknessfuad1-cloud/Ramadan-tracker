# Ramadan Planner 2026 (Bangladesh)

Interactive Ramadan planner web app rebuilt for **Bangladesh Ramadan 2026** with dynamic day logic, Google-only login, and Supabase cloud sync.

## Features

- Dynamic Ramadan day calculation in `Asia/Dhaka` (auto rollover at 00:00)
- Google OAuth login with Supabase Auth
- Division selection after first login (`Dhaka`, `Chattogram`, `Rajshahi`, `Khulna`, `Barishal`, `Sylhet`, `Rangpur`, `Mymensingh`)
- Division-based prayer times (Sehri end, Iftar, Tahajjud)
- Cross-device synced progress using Supabase database
- Dashboard + calendar + daily planner + goals/reflection/review pages
- 30-day Surah plan + 30-day Hadith plan
- Multi-language UI (`English`, `Bangla`, `Arabic`) with RTL support for Arabic

## Environment

Create `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
```

## Database setup (Supabase)

Apply migration:

```bash
npx supabase db push
```

Migration file:

- `supabase/migrations/20260221000000_ramadan_2026_bd.sql`

This migration creates:

- `profiles`
- `ramadan_progress`
- `prayer_times`
- RLS policies and update triggers

## Run

```bash
npm install
npm run dev
```

## Verify

```bash
npm run typecheck
npm run lint
npm run build
```

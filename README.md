# Master Simex Paper Limited — Website

Marketing site for Master Simex Paper Limited (MSPL), built with Next.js App Router.


Live website: "https://mastersimex.com/"



## Local development

```bash
npm install
cp .env.example .env.local
# Edit .env.local with local admin credentials
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Admin panel: [http://localhost:3000/admin](http://localhost:3000/admin).

## Environment variables

| Variable | Required | Notes |
|----------|----------|--------|
| `ADMIN_USERNAME` | Production | Admin login username |
| `ADMIN_PASSWORD` | Production | Strong unique password |
| `ADMIN_SECRET` | Production | Random string, **32+ characters**, used to sign session cookies |
| `NEXT_PUBLIC_GA_ID` | Optional | Google Analytics measurement ID (loads only after cookie consent) |

See `.env.example` for placeholders. Never commit `.env.local`.

## Admin CMS

- **Careers** — jobs stored in `data/careers.json`
- **Images** — catalog in `lib/cms/image-catalog.ts`; overrides in `data/images.json`; uploaded files in `public/uploads/`

Admin routes under `/admin/*` are protected by middleware + server-action auth checks. After replace, hard-refresh the admin page if a thumbnail looks stale; the public site picks up overrides via `revalidateTag("image-catalog")`.

## Important: deployment & storage

The CMS **writes to the local filesystem**. That works on:

- a long-lived Node/VPS host with persistent disk
- Docker with a mounted volume for `data/` and `public/uploads/`

It does **not** work reliably on ephemeral serverless (e.g. default Vercel) — edits and uploads can disappear on redeploy.

**CMS uploads on Apache + `next start`:** production Next only auto-serves `public/` files that existed when the Node process started. This app serves `/uploads/*` via `app/uploads/[...path]/route.ts` (and `remote.htaccess` can also map `/uploads/` to `public/uploads/` before the proxy). After deploying those, admin image replaces work without restarting PM2.

Before go-live:

1. Set strong `ADMIN_USERNAME`, `ADMIN_PASSWORD`, and `ADMIN_SECRET`.
2. Choose a host with persistent disk, **or** move JSON + uploads to object storage / a database.
3. Activate FormSubmit for your company email (or replace with first-party SMTP/SES/Resend).
4. Confirm HTTPS is enabled (HSTS headers are already set).

## Forms

Contact and careers forms post via FormSubmit (`lib/form-submit.ts`). CVs and applicant PII transit that third-party service — document this in your privacy/processor agreements.

## Scripts

```bash
npm run dev      # development
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

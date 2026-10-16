# CreatorGrid

CreatorGrid is a desktop-first content planning and production-management workspace for solo creators, small media teams and creator agencies. It is built on React, Express, tRPC and Drizzle, with Manus OAuth for account entry and a MySQL-backed workspace schema for future persisted records.

## Run locally

```bash
pnpm dev
pnpm check
pnpm build
```

The Preview server listens on the configured port (3000 by default). `pnpm db:push` applies the additive workspace schema from `drizzle/schema.ts`; the app includes a safe fictional-data fallback when tables are empty or unavailable.

## Included MVP routes

The app includes a public landing page, login, pricing and the protected workspace routes `/app`, `/app/calendar`, `/app/board`, `/app/library`, `/app/content/:id`, `/app/brief/:id`, `/app/assets`, `/app/approvals`, `/app/performance` and `/app/settings`. The route manifest is served at `/manus-routes.json`.

## Testing checklist

- [x] Open the landing page and follow the primary CTA to the real Manus OAuth entry.
- [x] Confirm `/api/health` returns `{ "status": "ok" }`.
- [x] Confirm `/manus-routes.json` returns the complete page route set.
- [x] Open the dashboard and verify pipeline, review, publishing and fictional reach summaries render.
- [x] Open the calendar, switch channel filters, select a day and open a scheduled item.
- [x] Open the production board, search content, filter by owner and move a card forward.
- [x] Open the content library, search, filter by stage and toggle the Review queue saved view.
- [x] Open an item detail page, edit its brief, add a review comment and approve the piece.
- [x] Open assets, search, switch between all assets/files/links and toggle the upload affordance.
- [x] Open approvals, request changes, approve a piece and confirm the card state updates.
- [x] Open performance, settings and pricing; verify the desktop-first layout remains readable at laptop widths.
- [x] Run `pnpm check` and `pnpm build`.

## Optional post-MVP upgrades

1. Persist all board moves, comments, briefs and approval transitions through tRPC mutations and workspace-scoped authorization.
2. Add real file uploads using Manus Storage with asset previews, version history and signed access.
3. Add client review links with expiring access and comment-only permissions.
4. Add calendar subscriptions and reminders without introducing social-platform API complexity.
5. Add richer performance imports behind a connector boundary, keeping fictional demo analytics as the default workspace.

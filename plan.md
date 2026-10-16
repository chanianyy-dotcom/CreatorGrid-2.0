# CreatorGrid implementation plan

## Scope and approach

Build CreatorGrid as a desktop-first creator operations workspace using the initialized React/Express/tRPC/Drizzle starter. The MVP emphasizes a polished, believable workspace experience over deep external integrations: fictional seeded data drives the dashboard, calendar, production board, content library, approvals, asset library and performance views, while lightweight client interactions demonstrate create/update/filter/review flows. The existing Manus OAuth flow remains the authentication layer; app-specific workspace data is modeled in Drizzle/MySQL and exposed through a small tRPC API. A graceful in-memory fallback keeps Preview useful if the database is unavailable.

## Implementation design

- **Frontend shell**: persistent left navigation, workspace switcher, top search/command affordance, compact profile area, and route-aware page headers.
- **Primary routes**: `/` marketing landing; `/login`; `/app` dashboard; `/app/calendar`; `/app/board`; `/app/library`; `/app/content/:id`; `/app/brief/:id`; `/app/assets`; `/app/approvals`; `/app/performance`; `/app/settings`; `/pricing`.
- **Backend**: retain the starter's Manus OAuth/session handling, add protected tRPC procedures for workspace summary, content items, assets, approvals, comments and performance. Seed a realistic demo workspace and content pipeline on first read when no records exist.
- **Data model**: users plus workspaces, workspaceMembers, brands, contentItems, briefs, assets, comments, approvals, performanceRecords and tags. Content items own stage, type, brand, due date, owner, channel, description and review metadata.
- **Interaction model**: buttons and forms update local state immediately and call API procedures where available; search, stage filters, calendar selection, board drag affordances, approval actions and brief editing are functional in the UI.
- **Validation**: run TypeScript checks, build, inspect route manifest and perform a read-only requirement trace after the app is running. Fix any confirmed diagnostics before checkpointing.

## Design direction

Three candidate directions:

1. **Editorial control room** — 0.06 probability. A warm, magazine-like planning workspace with paper tones and ink-like dividers.
2. **Midnight signal studio** — 0.04 probability. A dark, high-contrast command center with electric accents and glowing status cues.
3. **Soft utility atelier** — 0.08 probability. A calm, tactile productivity interface mixing warm neutrals with a single vivid orange signal color.

### Chosen style: Editorial control room

- **Design movement**: Contemporary editorial dashboard, inspired by print production desks and independent magazine studios rather than generic SaaS admin panels.
- **Core principles**: strong scan lines; quiet surfaces with high-contrast type; status as color-coded editorial markers; dense enough for daily use but never cramped.
- **Color philosophy**: warm ivory and paper gray create an inviting worktable; ink navy provides structure; persimmon orange is the ownable action signal for “move this forward”; moss and lilac support channel and stage distinctions.
- **Layout paradigm**: a fixed, narrow navigation rail opens into a broad worktable. Pages use asymmetric columns, horizontal section rules and stacked cards instead of centered card grids.
- **Signature elements**: orange “signal dot” status markers; thin editorial rules; oversized numeric callouts for pipeline and performance.
- **Interaction philosophy**: every interactive control should communicate the next action clearly, with small motion and immediate feedback rather than modal-heavy workflows.
- **Animation**: short 150–220ms ease-out transitions for route/page changes, hover lift on actionable cards, and subtle status pulse only for items awaiting review.
- **Typography system**: Fraunces for display headlines and metrics; Inter for UI, navigation and dense metadata. Uppercase micro-labels use generous tracking.
- **Brand essence**: “The calm operating desk for people who publish for a living.” Personality: focused, warm, editorial.
- **Brand voice**: crisp and human. Example lines: “Turn the next good idea into a finished piece.” and “Your week, with less chasing.”
- **Wordmark & logo**: a compact four-cell grid mark with one orange cell offset upward, paired with a lowercase wordmark.
- **Signature brand color**: persimmon orange `#F36B3B`, reserved for primary actions, live status and key emphasis.

## Project structure

- `client/src/App.tsx`: route map and app providers.
- `client/src/pages/`: landing, auth, dashboard, calendar, board, library, content detail, brief, assets, approvals, performance, settings and pricing views.
- `client/src/components/`: workspace shell, shared primitives and domain cards.
- `client/src/index.css`: design tokens, typography, layout utilities and responsive rules.
- `server/routers.ts`: tRPC procedures for workspace and content workflows.
- `server/db.ts`: database access and first-run demo seeding.
- `drizzle/schema.ts`: persistent entities and relations.
- `public/manus-routes.json`: complete route manifest for preview and publication.
- `app.config.ts`: project branding metadata.

## Required behavior retained from request

Authentication, team roles, calendar, kanban workflow, content detail, brief editor, asset links, review comments and approval flow, search/filters/saved views, dashboard summaries, fictional analytics, pricing/test payment affordance, responsive desktop-first layout, realistic demo content, testing checklist and optional post-MVP upgrades are all represented in the MVP or documented for follow-up.

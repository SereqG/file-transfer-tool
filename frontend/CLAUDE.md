## Development

Before creating new abstractions, look for existing ones.

Prefer existing utilities over introducing new dependencies.

## Folder structure

Top-level folders are organized by **purpose**, each split into subfolders by
**domain/feature**:

| Folder | Contents |
|---|---|
| `app/` | Routes only (`page.tsx`, `layout.tsx`, route `metadata`). No business logic. |
| `components/<domain>/` | Presentational + thin container React components for one domain. JSX and prop/hook wiring only — no data fetching, no business rules inline. |
| `hooks/<domain>/` | Custom hooks: stateful or React-context-consuming logic extracted out of components. One responsibility per hook. |
| `lib/<domain>/` | Domain-aware pure logic, types, and static data — things that "know" the domain's rules (e.g. what a workflow node/category is). No JSX, no React imports besides types. |
| `helpers/<domain>/` | Generic, domain-agnostic utility functions (id generation, serialization, formatting) that don't know the domain's business rules, even if only one domain currently uses them. |
| `<top-level-folder>/common/` | Shared UI or logic used by more than one domain. **Created only when a second consumer actually needs it** — do not pre-scaffold empty `common/` folders speculatively. |

Naming note: the project convention is singular **`lib/`** (matching the
Next.js community idiom), not `libs/` — a deliberate choice, not an
oversight.

## Component rules

- No business logic inside components — push derivations, calculations, and
  data transforms into `lib/<domain>/` as pure functions.
- Mark only one `"use client"` boundary per client subtree (the top of that
  subtree), not every descendant component — everything a client component
  imports is transitively part of the client bundle already.
- Keep components small and single-purpose. Avoid large components that mix
  several concerns.

## Hook rules

- A hook is for **state or React-context consumption** (e.g. anything using
  `useState`, `useEffect`, or a library hook like `useReactFlow`).
- A handler with no state and no context dependency (e.g. just calling
  `event.dataTransfer.setData(...)`) is a plain function in `helpers/` or
  `lib/`, not a hook. Don't wrap things in hooks for the sake of it.

## TypeScript rules

- Strict mode is on project-wide (`tsconfig.json`) — keep it that way, no
  `any`.
- Domain types live in `lib/<domain>/types.ts`.
- Prefer `interface` for object shapes, `type` for unions/aliases.

## Styling

- Tailwind CSS v4, CSS-first config (`@theme inline` in `app/globals.css`) —
  there is no `tailwind.config.*` file, don't add one.
- Dark mode via `dark:` variants and the existing `--background`/
  `--foreground` CSS vars; match the existing zinc/black/white palette
  (see `app/page.tsx`) rather than introducing new ad hoc colors per feature.
- Any route that needs a real pixel-height container (e.g. a canvas library
  like React Flow) must anchor height at the route root with `h-dvh` or
  `h-screen`. Do not rely on `h-full` cascading from `<body>` — the root
  layout's `<body>` only has `min-h-full` (a minimum, not a fixed height), so
  percentage heights on descendants won't reliably resolve to a real pixel
  value.
- Import third-party CSS (e.g. `@xyflow/react/dist/style.css`) directly in
  the component that needs it, not globally in `app/globals.css`, unless the
  dependency is genuinely shared across multiple routes.
- The `/new-workflow` workflow editor uses blue/violet (Tailwind `blue-*` /
  `violet-*`) as its accent palette — navbar, active/hover states, node
  handles and edges, selection accents — layered on top of the existing
  zinc/black/white base rather than replacing it. Route-specific accent CSS
  vars (e.g. `--workflow-grid-dot`) live in `app/globals.css` next to
  `--background`/`--foreground`. Other routes keep the plain neutral palette
  unless a similar decision extends this there.
- Within that route, each node **category** additionally gets its own
  gradient accent (input=blue, transform=violet, output=emerald) applied as
  a subtle glass-tile gradient, used consistently on both the sidebar node
  cards and the canvas nodes — see
  `lib/workflow-editor/node-category-styles.ts` for the color tokens and
  `components/workflow-editor/common/NodeGlassIcon.tsx` for the shared glass
  tile the two surfaces render through. Chrome that isn't tied to a specific
  category (navbar, connectors, selection outline) keeps the blue/violet
  default above rather than picking up a category color.

## Icons

- `lucide-react` (exact-pinned) is the icon library. A `NodeIconId` union
  naming icon keys lives in `lib/<domain>/types.ts` (pure data, no React
  import); the actual `icon key -> lucide component` lookup map lives in
  `components/<domain>/` (e.g. `node-icons.ts`), since `lib/` may not import
  React component values. Domain data (e.g. `node-catalog.ts`) references
  nodes by icon key, never by importing the icon component directly.

## Overlays & tooltips

- A tooltip/popover that must escape a scrollable or `max-h`-constrained
  ancestor (e.g. the `/new-workflow` toolbox, which caps at `70vh` and
  scrolls) is rendered via `createPortal` to `document.body`, not via CSS
  `overflow: visible` — an element can't combine `overflow-y: auto` with
  visible horizontal overflow (per the CSS overflow spec, one non-`visible`
  axis forces the other to compute as `auto`), so anything relying on escaping
  bounds gets clipped once its ancestor scrolls. Track the anchor's
  `getBoundingClientRect()` on hover in a small hook (state = the computed
  `{top, left}` position, not a visibility boolean) — see
  `hooks/workflow-editor/use-hover-tooltip.ts` — and gate the portal render on
  that state being non-null so it never runs during SSR (`document` is
  undefined server-side).

## Package manager

- npm only — `package-lock.json` is the source of truth, don't introduce
  another lockfile.
- Use `--save-exact` when installing new dependencies, matching the existing
  exact-pin style already used for `next`/`react`/`react-dom`.

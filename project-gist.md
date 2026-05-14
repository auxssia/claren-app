# Claren — Project Gist

> Visual intelligence for litigation.
> Claren helps lawyers and law students understand cases, evidence, timelines, and legal procedures visually — instead of digging through endless PDFs and documents.

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 15.5.18 |
| Language | TypeScript | 5.9.3 |
| UI Engine | React | 19.2.6 |
| Styling | Tailwind CSS v4 | 4.3.0 |
| Animations | GSAP + ScrollTrigger | 3.15.0 |
| Icons | Lucide React | 0.460.0 |
| CSS Utility | clsx + tailwind-merge | 2.1.1 / 2.6.1 |
| PostCSS | @tailwindcss/postcss | 4.3.0 |
| Package Manager | npm | — |
| Font | Inter (via next/font) | — |

---

## Folder Structure

```
M:\claren\
├── .gitignore                      # Git ignore rules
├── next-env.d.ts                   # Next.js TS declarations (auto-generated)
├── next.config.ts                  # Next.js configuration
├── package.json                    # Dependencies & scripts
├── package-lock.json               # Locked dependency tree
├── postcss.config.mjs              # PostCSS config (Tailwind v4)
├── tsconfig.json                   # TypeScript configuration
├── project-gist.md                 # THIS FILE — codebase documentation
│
├── public/                         # Static assets (currently empty)
│
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── layout.tsx              # Root layout (Navbar + Footer + Inter font)
│   │   ├── globals.css             # Tailwind v4 + custom theme + animations
│   │   ├── page.tsx                # Home page (/)
│   │   ├── arch/
│   │   │   └── page.tsx            # Arch page (/arch)
│   │   ├── atlas/
│   │   │   └── page.tsx            # Atlas page (/atlas)
│   │   └── pricing/
│   │       └── page.tsx            # Pricing page (/pricing)
│   │
│   ├── lib/
│   │   └── utils.ts                # cn() helper (clsx + tailwind-merge)
│   │
│   └── components/
│       ├── common/                 # Shared/reusable components
│       │   ├── section-wrapper.tsx  # SectionWrapper + SectionHeader
│       │   ├── animated-section.tsx # AnimatedSection + AnimatedStagger (GSAP)
│       │   └── waitlist-form.tsx    # Email waitlist signup form
│       │
│       ├── layout/                 # Layout components
│       │   ├── navbar.tsx           # Fixed top nav with mobile menu
│       │   └── footer.tsx           # Site footer
│       │
│       ├── visuals/                # SVG visual/demo components
│       │   ├── evidence-graph.tsx           # Evidence relationship graph
│       │   ├── litigation-timeline.tsx       # Vertical timeline with nodes
│       │   ├── legal-node-map.tsx           # Statute connection node map
│       │   ├── contextual-search-panel.tsx  # Interactive search UI demo
│       │   ├── document-relationships.tsx   # Document connection graph
│       │   ├── procedural-tree.tsx          # Vertical procedural hierarchy
│       │   └── procedural-flow.tsx          # Horizontal step flow chart
│       │
│       └── sections/               # Page-specific sections
│           ├── home/
│           │   ├── hero.tsx               # Full-screen hero with CTAs
│           │   ├── what-claren-does.tsx    # Features vs not-features
│           │   ├── meet-arch.tsx           # Arch intro with visuals
│           │   ├── open-source-first.tsx   # Open source card
│           │   ├── who-this-is-for.tsx     # Audience cards
│           │   └── future-direction.tsx    # Roadmap comparison
│           │
│           ├── arch/
│           │   ├── arch-hero.tsx           # Arch hero with waitlist
│           │   ├── what-arch-does.tsx      # 5 feature blocks with visuals
│           │   ├── why-arch-exists.tsx     # Problem/solution comparison
│           │   ├── built-differently.tsx   # Philosophy card
│           │   ├── arch-open-source.tsx    # Open source details
│           │   ├── early-access.tsx        # Waitlist CTA card
│           │   └── releasing-soon.tsx      # Upcoming features grid
│           │
│           ├── atlas/
│           │   ├── atlas-hero.tsx          # Atlas hero (no CTA)
│           │   ├── what-atlas-does.tsx     # Description + procedural tree
│           │   ├── example-section.tsx     # Cheque bounce example + flow
│           │   ├── why-atlas-matters.tsx   # 4 value cards
│           │   ├── designed-for.tsx        # 4 audience cards
│           │   └── atlas-open-source.tsx   # Open source card
│           │
│           └── pricing/
│               ├── pricing-hero.tsx        # Simple pricing header
│               ├── pricing-tiers.tsx       # 4 pricing tier cards
│               └── why-we-do-this.tsx      # Philosophy comparison card
│
└── gsap-skills/                    # GSAP skill plugins (separate git-tracked content)
    ├── AGENTS.md, CLAUDE.md, GEMINI.md, README.md, LICENSE
    ├── skills/gsap-*/              # 8 GSAP skill markdown files
    ├── examples/                   # Example projects (react, vue, nuxt, vanilla)
    └── assets/                     # GSAP brand SVGs
```

---

## Design System

### Colors (Tailwind v4 `@theme` tokens)

Defined in `src/app/globals.css` using OKLCH color space:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-background` | `oklch(0.98 0 0)` | Page background (near-white) |
| `--color-foreground` | `oklch(0.13 0 0)` | Primary text, headings, icons |
| `--color-muted` | `oklch(0.55 0 0)` | Secondary text, labels |
| `--color-border` | `oklch(0.87 0 0)` | Borders, dividers, outlines |
| `--color-ring` | `oklch(0.87 0 0)` | Focus ring |
| `--color-accent` | `oklch(0.2 0 0)` | Accent backgrounds |
| `--color-accent-foreground` | `oklch(0.98 0 0)` | Text on accent |
| `--color-card` | `oklch(0.97 0 0)` | Card/surface background |
| `--color-card-foreground` | `oklch(0.13 0 0)` | Text on card |

**Note**: The entire palette is monochrome/grayscale (chroma = 0). No accent colors are used — the design relies purely on contrast and spacing.

### Typography

| Property | Value |
|----------|-------|
| Font (body/headings) | Inter (variable font) via `next/font/google` |
| Font (monospace) | `"SF Mono", "Fira Code", "Fira Mono", monospace` |
| CSS var | `--font-inter` (set via `Inter({ variable: "--font-inter" })`) |
| Base body | `font-family: var(--font-sans)` = Inter, system-ui, -apple-system, sans-serif |
| Sizes | `text-xs` (labels/desc), `text-sm` (body), `text-base` (lead), `text-3xl` to `text-8xl` (headings) |
| Headings | `font-semibold tracking-tight` — all headings use tight tracking |
| Body | `text-muted leading-relaxed` — body text is muted color with relaxed line height |
| Labels | `text-xs font-medium text-muted uppercase tracking-widest` — section labels |

### Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-section` | `8rem` (128px) | Top padding on `SectionWrapper` |
| `--spacing-section-inner` | `4rem` (64px) | Bottom padding on `SectionWrapper` |
| Standard | `px-6` (24px) | Horizontal page padding |
| Container | `max-w-7xl` (80rem / 1280px) | Content max-width |
| Gaps | `gap-4` (16px), `gap-8` (32px), `gap-12` (48px), `gap-16` (64px) | Section grid gaps |

### Animations

**CSS Animations** (defined in `globals.css` `@theme`):
- `animate-fade-in`: opacity 0 → 1 over 0.8s
- `animate-fade-up`: opacity 0 + translateY(12px) → opacity 1 + translateY(0) over 0.8s
- `.gradient-grid`: 60px dotted grid overlay for hero backgrounds
- `@keyframes draw-line`: SVG stroke-dashoffset 0 for line drawing

**GSAP Animations** (via `animated-section.tsx`):
- `AnimatedSection`: Fades in a single element on scroll (opacity 0→1, y: 24→0, duration 0.8s, trigger at "top 85%")
- `AnimatedStagger`: Fades in children with stagger (opacity 0→1, y: 16→0, stagger 0.08s, duration 0.6s)

**Hero animations**: Hero sections use `gsap.fromTo` with `.anim-child` class, staggering each child element by 0.12s.

**IntersectionObserver**: Some visual components (timeline, graphs, tree, flow) use their own `IntersectionObserver` to trigger CSS transitions when scrolled into view.

---

## Pages & Routes

### 1. Home Page (`/`) — `src/app/page.tsx`

Sections in order:

| # | Section | Component | Visual | Key Content |
|---|---------|-----------|--------|-------------|
| 1 | Hero | `HomeHero` | Gradient grid BG | "Visual intelligence for litigation." + 2 CTAs |
| 2 | What Claren Does | `WhatClarenDoes` | EvidenceGraph | "Instead of X" vs "Claren helps you" list |
| 3 | Meet Arch | `MeetArch` | LitigationTimeline + LegalNodeMap | Arch intro + "Learn more about Arch" link |
| 4 | Open Source First | `OpenSourceFirst` | — | "Open Source First" card with 4 values |
| 5 | Who This Is For | `WhoThisIsFor` | — | 4 audience cards (Law Students, Junior Lawyers, Litigation Teams, Researchers) |
| 6 | Future Direction | `FutureDirection` | — | "Starting with" vs "Building toward" roadmap, "Building toward an explainable OS for litigation" |

**Buttons/CTAs on Home:**
- "Explore Arch" → `/arch`
- "View pricing" → `/pricing`
- "Learn more about Arch" → `/arch` (text link with arrow icon)

### 2. Arch Page (`/arch`) — `src/app/arch/page.tsx`

Sections in order:

| # | Section | Component | Visual | Key Content |
|---|---------|-----------|--------|-------------|
| 1 | Hero | `ArchHero` | Gradient grid BG | "Litigation intelligence built for clarity." + WaitlistForm |
| 2 | What Arch Does | `WhatArchDoes` | 5 visuals (EvidenceGraph, LitigationTimeline, LegalNodeMap, ContextualSearchPanel, DocumentRelationships) | 5 alternating feature blocks: Evidence Mapping, Chronology Building, Procedural Navigation, Contextual Search, Legal Connections |
| 3 | Why Arch Exists | `WhyArchExists` | — | "Fragmented → Structured" card with 6 source-type tags (PDFs, screenshots, WhatsApp chats, notices, scanned docs, annexures) |
| 4 | Built Differently | `BuiltDifferently` | — | "Arch is not designed to replace lawyers." + 4 pillars card |
| 5 | Open Source | `ArchOpenSource` | — | "Inspect models, Self-host, Contribute, Free to use" |
| 6 | Early Access | `EarlyAccess` | — | Waitlist CTA card for 4 roles (law students, litigators, researchers, small firms) |
| 7 | Releasing Soon | `ReleasingSoon` | — | 4 upcoming features grid |

**Buttons/CTAs on Arch:**
- WaitlistForm (email input + "Join waitlist" button) — appears in hero and Early Access section
- No page-level navigation links (no "Learn more" type links)

### 3. Atlas Page (`/atlas`) — `src/app/atlas/page.tsx`

Sections in order:

| # | Section | Component | Visual | Key Content |
|---|---------|-----------|--------|-------------|
| 1 | Hero | `AtlasHero` | Gradient grid BG | "Procedural intelligence for law." (no CTA) |
| 2 | What Atlas Does | `WhatAtlasDoes` | ProceduralTree | Description + "what triggers what / procedural dependencies / timelines / conditions / next possible steps" |
| 3 | Example | `ExampleSection` | ProceduralFlow | "A cheque bounce matter becomes..." with procedural tags + horizontal flow |
| 4 | Why Atlas Matters | `WhyAtlasMatters` | — | 4 value cards (See relationships, Learn visually, Navigate confidently, Operational reference) |
| 5 | Designed For | `DesignedFor` | — | 4 audience cards (Law Students, Junior Associates, Litigation Teams, Researchers) |
| 6 | Open Source | `AtlasOpenSource` | — | "transparent, inspectable, collaborative, accessible" card |

**Buttons/CTAs on Atlas:** None. No waitlist forms, no page links. Purely informational.

### 4. Pricing Page (`/pricing`) — `src/app/pricing/page.tsx`

Sections in order:

| # | Section | Component | Visual | Key Content |
|---|---------|-----------|--------|-------------|
| 1 | Hero | `PricingHero` | Gradient grid BG | "Pricing. Simple and transparent." (no CTA) |
| 2 | Tiers | `PricingTiers` | — | 4 tier cards in 2×2 grid |
| 3 | Why We Do This | `WhyWeDoThis` | — | "Legal software is often [expensive, closed, difficult to trust]" vs "We want to build systems that are [transparent, explainable, accessible, community-driven]" |

**Pricing Tiers:**
1. **Open Source Core** — Free. Arch engine, Atlas engine, Self-hosting, Community releases.
2. **Hosted Chat Interface** — Free Tier (highlighted with border). 2 chat uses/day, Basic document interaction, Limited testing access, Public model releases.
3. **Hosted Pro Access** — Coming Later. Higher limits, Saved workspaces, Team collaboration, etc.
4. **Custom Law Firm Deployments** — Contact Us. Private deployments, Custom interfaces, Workflow integrations, etc.

**Buttons/CTAs on Pricing:** None. No purchase/signup links. Informational only.

---

## Navigation

### Navbar (`src/components/layout/navbar.tsx`)

- **Position**: Fixed to top, z-50
- **Background**: Transparent by default, `bg-background/80 backdrop-blur-lg border-b border-border/50` when scrolled (20px threshold)
- **Left**: "Claren" text link → `/`
- **Center (desktop)**: 4 nav links:
  - "Home" → `/`
  - "Arch" → `/arch`
  - "Atlas" → `/atlas`
  - "Pricing" → `/pricing`
  - GitHub icon link → `https://github.com` (external, new tab)
  - "Join waitlist" button → `/arch`
- **Mobile**: Hamburger menu (Menu/X icons), same links stacked vertically, full-width dropdown with backdrop blur

**Active link detection**: Uses `usePathname()` — exact match against current route.

### Footer (`src/components/layout/footer.tsx`)

- **Position**: Below all content, separated by `border-t border-border/50`
- **Links**:
  - "Claren" → `/`
  - "GitHub" → `https://github.com` (external, new tab)
  - "Open Source" → `#` (placeholder)
  - "Contact" → `#` (placeholder)
  - "X / Twitter" → `#` (placeholder)
- **Bottom**: `© {year} Claren. Open source.`

---

## Common/Shared Components

### SectionWrapper (`src/components/common/section-wrapper.tsx`)

- Renders a `<section>` with: `mx-auto max-w-7xl px-6 pt-section pb-section-inner`
- Accepts optional `id`, `className`, and rest props
- Also exports `SectionHeader`: renders label + title + description in standard layout

### AnimatedSection (`src/components/common/animated-section.tsx`)

- "use client" component wrapping GSAP ScrollTrigger animation
- `AnimatedSection`: single element fade-up on scroll (trigger at "top 85%")
- `AnimatedStagger`: children stagger-fade-up (each child fades in sequentially)

### WaitlistForm (`src/components/common/waitlist-form.tsx`)

- Email input + "Join waitlist" submit button
- Client-side state: `email` string, `submitted` boolean
- On submit: validates email required, shows success message "Thanks for joining. We'll be in touch."
- **No actual API call** — just local state demonstration

### cn() (`src/lib/utils.ts`)

- Combines `clsx` and `tailwind-merge` for conditional class merging
- Used throughout the project for dynamic className construction

---

## Visual Components (SVG Demos)

All visual components use IntersectionObserver for scroll-triggered animation. None are interactive (except ContextualSearchPanel).

### EvidenceGraph (`src/components/visuals/evidence-graph.tsx`)
- **SVG viewBox**: 340 × 160
- **Content**: 6 document nodes (circles + labels), 7 connecting edges (lines)
- **Animation**: SVG lines draw in (stroke-dashoffset), nodes fade in staggered
- **Usage**: Home "What Claren Does" section + Arch "Evidence Mapping" feature

### LitigationTimeline (`src/components/visuals/litigation-timeline.tsx`)
- **Structure**: Vertical flex column with 5 events, each with a circular node on a vertical line
- **Events**: "12 Mar Notice Issued" → "25 Mar Reply Filed" → "05 Apr Complaint" → "18 Apr Evidence" → "02 May Hearing"
- **Animation**: Each event fades up staggered by 120ms
- **Usage**: Home "Meet Arch" section + Arch "Chronology Building" feature

### LegalNodeMap (`src/components/visuals/legal-node-map.tsx`)
- **SVG viewBox**: 340 × 100
- **Content**: 5 statute rectangle nodes (S.138, S.139, S.142, CrPC 200, Evidence Act) with 4 connecting edges
- **Animation**: Nodes scale + fade in staggered, lines draw in
- **Usage**: Home "Meet Arch" section + Arch "Procedural Navigation" feature

### ContextualSearchPanel (`src/components/visuals/contextual-search-panel.tsx`)
- **Structure**: Search input with 3 mock results
- **Interaction**: Type to see relevance-ranked results (94%, 88%, 82%)
- **Animation**: Results fade in staggered
- **Usage**: Arch "Contextual Search" feature

### DocumentRelationships (`src/components/visuals/document-relationships.tsx`)
- **SVG viewBox**: 300 × 130
- **Content**: 5 vertical bar nodes (Contract, Email, Invoice, Notice, Screenshot) with 6 connections
- **Animation**: Lines draw in, nodes fade in staggered
- **Usage**: Arch "Legal Connections" feature

### ProceduralTree (`src/components/visuals/procedural-tree.tsx`)
- **Structure**: Vertical hierarchy with 4 levels (Notice Period → Limitation → Maintainability → Trial)
- **Each level**: Header label + 3 tag items + connecting vertical line
- **Animation**: Each level fades up staggered by 150ms
- **Usage**: Atlas "What Atlas Does" section

### ProceduralFlow (`src/components/visuals/procedural-flow.tsx`)
- **Structure**: Horizontal step flow with 6 steps connected by arrows
- **Steps**: Notice Served ✓ → Reply Period ✓ → Complaint Filed (active) → Evidence Stage → Arguments → Judgment
- **Status states**: "complete" (filled dark), "active" (outlined), "pending" (faded)
- **Animation**: Steps fade up staggered
- **Usage**: Atlas "Example" section

---

## Pattern Notes

### Component Conventions
- All section components are `"use client"` (due to GSAP or event handlers)
- Layout components (SectionWrapper, SectionHeader) are server-compatible (no `"use client"`)
- Visual components use `"use client"` for IntersectionObserver
- Components are PascalCase; files are kebab-case
- Imports use `@/` path alias mapping to `./src/`

### Tailwind v4 Usage
- Uses `@import "tailwindcss"` instead of `@tailwind base/components/utilities`
- Custom theme via `@theme inline { }` block in `globals.css`
- Uses `@custom-variant dark (&:is(.dark *))` for dark mode support (not actively used yet)
- No custom Tailwind config file — all theme in CSS

### GSAP Setup
- GSAP and ScrollTrigger are imported directly in animated-section.tsx
- `gsap.registerPlugin(ScrollTrigger)` called at module level
- `gsap.context()` used for cleanup (ctx.revert() on unmount)
- Each hero section has its own GSAP timeline for staggered entrance

### No State Management
- No React Context, Redux, Zustand, etc.
- The only state is local: `useState` for form inputs, animation flags, mobile menu
- "Waitlist" form is pure client-side demo (no API endpoint)

### No Backend
- Static site with no API routes, database, or server-side logic
- All data is hardcoded in component files (events, nodes, features, tiers)
- Next.js generates static HTML at build time

---

## Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies, scripts (dev/build/start/lint) |
| `tsconfig.json` | Strict TS, bundler resolution, `@/` path alias, excludes `node_modules` and `gsap-skills` |
| `next.config.ts` | Minimal — just type-imports and empty config |
| `postcss.config.mjs` | Plugins: `@tailwindcss/postcss` only |
| `next-env.d.ts` | Next.js auto-generated TS type references (do not edit) |
| `.gitignore` | Ignores node_modules, .next, out, .env, .vscode, gsap-skills |

### Available Scripts (`npm run <script>`)

| Script | Command |
|--------|---------|
| `dev` | `next dev` — development server |
| `build` | `next build` — production build |
| `start` | `next start` — serve production build |
| `lint` | `next lint` — ESLint |

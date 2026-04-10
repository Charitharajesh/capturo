# Capturo — Design Brief

## Tone
Futuristic, premium, luxury-tech. Bold commitment to cosmic aesthetics with purpose-driven precision. Not generic, not safe—intentional and memorable.

## Differentiation
Cosmic gradient system across interactive elements (buttons, accents, borders) paired with glowing glow effects that create perception of depth and energy. Dark theme elevates premium perception. Typography hierarchy uses weight/size variance over color variance.

## Color Palette

| Token | OKLCH | Hex | Purpose |
|-------|-------|-----|---------|
| background | 0.118 0.02 285 | #0F0A1F | Page background—deep purple-black |
| card | 0.142 0.025 285 | #1A1333 | Elevated surfaces, cards, popovers |
| foreground | 1.0 0 0 | #FFFFFF | Primary text—white, maximum contrast |
| foreground-secondary | 0.92 0.04 285 | #E9D5FF | Secondary text—soft lavender |
| primary | 0.594 0.238 10 | #F43F5E | Hot pink/rose—accent, CTAs, highlights |
| secondary | 0.398 0.176 285 | #4C1D95 | Deep purple—gradient start, muted accents |
| accent | 0.586 0.235 347 | #9D174D | Berry/magenta—gradient mid, hover states |
| border | 0.22 0.02 285 | #2A1B47 | Subtle dividers, reduced opacity on cards |
| muted | 0.18 0.02 285 | #17101F | Muted backgrounds, disabled states |

## Typography

| Layer | Font | Size | Weight | Use |
|-------|------|------|--------|-----|
| Display | General Sans | 48px–72px | 700 | Hero, section headings |
| Body | General Sans | 16px | 400–500 | Copy, labels, UI text |
| Code | JetBrains Mono | 14px | 400 | Code blocks, captions |

**Hierarchy:** Heavy 700 on display. 500 for emphasis in body. 400 for secondary/muted. Letter-spacing tight (−0.5px) on display for premium feel.

## Elevation & Depth

| Zone | Treatment |
|------|-----------|
| Header | `bg-card` with `border-b border-border` at 0.1 opacity. Sticky on scroll. |
| Main content | `bg-background`. Cards use `bg-card` with `shadow-card` (0 10px 30px rgba(0,0,0,0.3)). |
| Buttons | Gradient background (cosmic gradient), `shadow-glow` on hover, 8px radius. |
| Footer | `bg-muted/20` with `border-t border-border` at 0.1 opacity. |
| Modals/Popovers | `bg-popover` with `shadow-elevated` (0 20px 60px rgba(0,0,0,0.4)), z-layer 50+. |

## Structural Zones

| Zone | Background | Border | Radius | Shadow |
|------|-----------|--------|--------|--------|
| Header/Nav | card | border (0.1 opacity) | 0 | none |
| Hero | background | none | 0 | none |
| Feature Cards | card | border (0.1 opacity) | 8px | shadow-card |
| Button (primary) | cosmic gradient | none | 8px | glow on hover |
| Button (secondary) | muted/30 | border/60 | 8px | none |
| Input fields | muted/20 | border/40 | 6px | none |
| Footer | muted/20 | border/20 | 0 | none |

## Component Patterns

- **Buttons:** Primary = cosmic gradient + `glow-hover` effect. Secondary = `bg-muted/30` + `border`. Sizes: `py-2 px-4` (small), `py-3 px-6` (medium), `py-4 px-8` (large).
- **Cards:** `bg-card` + `shadow-card` + `border border-border/10` + `p-6` + `rounded-lg`.
- **Inputs:** `bg-muted/20` + `border border-border/40` + `rounded-md` + `text-foreground` + `placeholder-foreground/40`.
- **Nav links:** `text-foreground/60` hover→ `text-foreground` + underline accent on active.

## Motion & Animation

- **Entrance:** Fade-in + slide-up on page load (`animation-fade-in`, `animation-slide-up` at 0.5–0.6s).
- **Hover:** Button glow pulse (`animation-glow-pulse` at 3s). Smooth color/shadow transition via `transition-smooth`.
- **Interactive:** All state changes use `transition-smooth` (0.3s cubic-bezier).

## Spacing & Rhythm

- **Base unit:** 8px. Scales: 4px (tight), 8px, 16px, 24px, 32px, 48px.
- **Container padding:** 24px on mobile, 32px on tablet/desktop.
- **Section spacing:** 48px vertical gap (gap-12 in Tailwind).
- **Component density:** Cards/inputs use 16px internal padding. Dense grids use 12px gap.

## Constraints

- **No light mode.** Dark only. Ever.
- **No flat design.** Shadows and gradients are mandatory for visual hierarchy.
- **No generic AI aesthetics.** No purple gradients on everything. Gradients are positioned strategically (buttons, accents, hero). Secondary/muted backgrounds stay flat.
- **No system colors.** All colors rooted in Cosmic Berry palette. No arbitrary hex values.
- **Mobile-first.** Design flows from 375px → tablet (640px) → desktop (1024px+).

## Signature Detail

**Glow-on-hover buttons.** Primary CTA buttons use `glow-primary` + `glow-hover` CSS effects. On hover, box-shadow expands (20px→30px blur radius, opacity 0.6→0.8). This creates the perception of depth, energy, and interactivity without over-animation. Reinforces "futuristic" aesthetic through glowing light metaphor.

## Differentiation Deep Dive

Cosmic Berry is a **color story**, not a palette swap. Every token serves the narrative:
- **Deep Purple (`#0F0A1F`):** Night sky, vastness, premium emptiness.
- **Berry Gradient (`#4C1D95 → #9D174D → #F43F5E`):** Aurora/nebula energy, draws the eye, suggests motion and joy.
- **Soft Lavender text:** Legible, premium, not harsh white. Reinforces cosmic theme.
- **Glow effects:** Light source metaphor—suggests technology, innovation, aliveness.

Result: Users perceive Capturo as a forward-thinking, premium platform—not a generic startup template.

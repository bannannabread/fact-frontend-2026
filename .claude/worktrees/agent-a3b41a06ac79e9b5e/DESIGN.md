---
name: FACT 2026 — Mahiwagahan
description: Purple floral macro-photography "night band" hero/nav paired with a warm parchment "day band" content system for the FACT 2026 conference site.
colors:
  ink-900: "#0e155e"
  violet-800: "#4b1c71"
  orchid-400: "#b37ad4"
  cream-100: "#ffffdd"
  white: "#ffffff"
  pill-solid-mid: "#f2edfe"
  pill-solid-shade: "#ddd2f7"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.5rem, 5.5vw, 4rem)"
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: "-0.01em"
    fontVariation: "'SOFT' 40, 'WONK' 1"
  numeral:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(3rem, 6vw, 4.75rem)"
    fontWeight: 900
    lineHeight: 1
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.6rem, 3.2vw, 2.25rem)"
    fontWeight: 800
    letterSpacing: "-0.01em"
  category-label:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.25rem, 1.9vw, 1.5rem)"
    fontWeight: 700
    letterSpacing: "-0.005em"
  quote:
    fontFamily: "Fraunces, Georgia, serif"
    fontStyle: "italic"
    fontSize: "clamp(1.25rem, 1.9vw, 1.6rem)"
    fontWeight: 500
    lineHeight: 1.5
  lead:
    fontFamily: "Jost, Trebuchet MS, sans-serif"
    fontSize: "clamp(1.2rem, 1.8vw, 1.4rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Jost, Trebuchet MS, sans-serif"
    fontSize: "0.98rem–1.02rem"
    fontWeight: 400
    lineHeight: "1.7–1.75"
  structural-label:
    fontFamily: "Jost, Trebuchet MS, sans-serif"
    fontSize: "0.78rem–1.05rem"
    fontWeight: "500–600"
    letterSpacing: "0.01em–0.06em"
  nav-link:
    fontFamily: "Jost, Trebuchet MS, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 400
  meta:
    fontFamily: "Jost, Trebuchet MS, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 400
    letterSpacing: "0.02em"
  question:
    fontFamily: "Jost, Trebuchet MS, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 500
  label:
    fontFamily: "Jost, Trebuchet MS, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 500
    letterSpacing: "0.01em"
rounded:
  pill: "999px"
  circle: "50%"
  control: "10px"
  focus: "2px"
components:
  pill-solid:
    backgroundColor: "linear-gradient(180deg, #ffffff 0%, {colors.pill-solid-mid} 50%, {colors.pill-solid-shade} 100%)"
    textColor: "{colors.ink-900}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.35rem"
  pill-ghost:
    backgroundColor: "linear-gradient(180deg, rgba(255,255,255,0.28), rgba(255,255,255,0.08))"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.35rem"
  pill-ink:
    backgroundColor: "linear-gradient(180deg, {colors.violet-800} 0%, {colors.ink-900} 100%)"
    textColor: "{colors.cream-100}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.35rem"
  nav-badge-frame:
    rounded: "{rounded.circle}"
    width: "52px"
    height: "52px"
  footer-mark:
    rounded: "{rounded.circle}"
    width: "40px"
    height: "40px"
---

# Design System: FACT 2026 — Mahiwagahan

## Overview

**Creative North Star: "The Almanac Held to Candlelight"**

The site is now six pages deep — Home, About, Agenda, Workshops, Team, and Past FACTs, plus FAQ — and all six run the same night→day→night rhythm established in the prior redesign: a **night band** (full-bleed violet floral macro photography, reversed-white type, the asset-baked wordmark) opens every page, full-viewport on the landing hero and collapsed to `.hero--compact` on the five interior pages; a **day band** carries all reading content on a warm parchment ground (`--cream-100`, `#ffffdd`) with Fraunces headings, hand-drawn line-art motifs, and the paper-grain texture; a dark `ink-900` footer closes every page as the third bookend. Workshops, Team, and Past FACTs reuse this template exactly — same compact hero, same `.section`/`.section__inner` scaffold, same crosslink strip, same footer — extending the established system rather than introducing a new one. No new visual world was authored for this pass.

The one genuinely new primitive is a third pill variant, `.pill--ink` — a solid violet-to-ink gradient pill with cream text — added because this is the first time an interactive pill sits directly on the parchment content ground rather than on a photographic/dark band; the two incumbent pill variants (`pill--solid`, `pill--ghost`) were tuned for a dark surface behind them and read poorly on cream. `.pill--ink` is now the pill used for every disabled action button placed in day-band content (Workshops "Register," Past FACTs "View Booklet"), same token set, same shape and padding, no new hue introduced. Everything else that shipped is composition of already-documented parts: the shared `.groupheading` subheading, the same hairline-row rhythm used by Agenda/FAQ, the same radial-gradient circle-placeholder device used by the nav badge and footer mark, and a fifth-and-sixth authored motif reuse (no new motif shapes were introduced — Workshops reuses the butterfly, Team reuses the orbit, Past FACTs reuses the moon strip, each already catalogued).

To fit a doubled nav (3 → 6 links) inline at desktop widths, the nav's link spacing and size were tightened and the hamburger breakpoint was pushed wider — a layout-density adjustment to the incumbent nav component, not a new nav pattern.

**Key Characteristics:**
- Six pages, one template family: the night→day→night band structure is now shared by Home (full hero + TOC) and five interior pages (compact hero + content + crosslink + footer) — About/Agenda/FAQ from before, Workshops/Team/Past-FACTs newly added on the identical template.
- `.pill--ink` (violet-800→ink-900 gradient, cream-100 text) is the day band's own interactive pill, used wherever a button sits on parchment rather than a photo/dark band.
- `.groupheading` is a new generic class name for the same visual pattern as the pre-existing `.faq__categoryheading` (Fraunces 700, `clamp(1.25rem, 1.9vw, 1.5rem)`, `--accent-on-light`) — see Components for the duplication note; this is a known minor inconsistency in the build, not two separate design patterns.
- The radial-gradient circle device (orchid→violet→ink, used previously for the nav badge and footer photo mark) is now also the placeholder-avatar device for Team members and the placeholder-photo device for Past FACTs entries — one device, three contexts, no new visual language.
- Nav link spacing tightened (`clamp(0.85rem, 1.8vw, 1.85rem)` gap, `0.92rem` font-size, down from `clamp(1.5rem, 3.5vw, 2.75rem)`/`0.95rem`) and the mobile-hamburger breakpoint moved from 780px to 900px, both purely to accommodate three additional nav links inline — not new nav rules.
- All three new pages carry explicit `.section__intro` placeholder-content flags (Workshops: illustrative session data; Team: placeholder names over real committee structure; Past FACTs: two of three years fully TBD) — placeholder content is disclosed in-page, not hidden.

## Colors

Unchanged from the prior pass; no new colors were introduced by these three pages. Two palettes share the same hue set: the photographic night band keeps its on-photo roles; the parchment day band uses its accessible on-light roles.

### Primary
- **Deep Indigo** (`#0e155e`, `--ink-900`): night-band background/scrim base; on the day band, the standing heading/body-ink color and the footer background. Also the base tone of the shared placeholder-circle gradient (nav badge, footer mark, Team avatars, Past FACTs photo placeholders).
- **Violet** (`#4b1c71`, `--violet-800`): the page-edge "book" border and, on the day band, `--accent-on-light` — every structural label, category/group heading, link, and (new) the `.pill--ink` gradient's top stop.
- **Orchid** (`#b37ad4`, `--orchid-400`): reserved for large/decorative-only day-band uses — heading accent rules, motif ornaments, and the placeholder-circle gradient's outer stop (Team avatars, Past FACTs photos). Still never body or label text.

### Neutral
- **Warm White / Parchment** (`#ffffdd`, `--cream-100`): the day band's dominant background across all six content-bearing pages now, and the text color inside `.pill--ink`.
- **White** (`#ffffff`): night band's reversed text/title color and footer text color.
- **Ink-on-Light** (`--ink-900` solid; `--ink-on-light-dim`, ink-900 at 72% alpha): the day band's heading/body ink pair — now also styling Workshops descriptions, Team's non-placeholder role labels, and Past FACTs year/theme text.
- **Hairline-on-Light** (`rgba(14, 21, 94, 0.14)`, ink-900-tinted): unchanged sole divider color, now also used for `.workshop__row` and `.pastfacts__entry` row dividers — same device, same rhythm as Agenda/FAQ rows.

### Named Rules
**The No-Card Rule.** Content and controls sit directly on the photograph, a scrim gradient, the parchment ground, or the footer's flat ink-900 field — never inside a `box-shadow`-bordered container or opaque panel. Workshops rows, Team grids, and Past FACTs entries all confirm this: none introduce a card or panel background.

**The Hairline-Only Structure Rule.** Every visual division between content is a 1–2px tinted hairline or the short orchid accent rule under a heading. `.workshop__row` and `.pastfacts__entry` both use the identical `border-top: 1px solid var(--hairline-on-light)` pattern as Agenda/FAQ rows — never a card edge.

**The Two-Ink Rule.** On-light text uses exactly two ink roles: solid `ink-900` and `ink-900` at 72% alpha. Orchid/violet stay accent-only. Holds unchanged across the three new pages.

**Orphaned tokens (documented, not active).** `--blue-500` and `--silver` remain declared in `:root` with zero usages, unchanged by this pass. Still not to be reached for in new work.

## Typography

**Display Font:** Fraunces (self-hosted variable, weights 300–900 normal + italic), Georgia fallback — headings only.
**UI/Label/Body Font:** Jost (variable 300–700), Trebuchet MS fallback — every non-heading role.

**Character:** Unchanged — a bold vintage-slab serif announcing every heading against a plain grotesque body voice.

### Hierarchy
- **Category Label** (weight 700, Fraunces, `clamp(1.25rem, 1.9vw, 1.5rem)`, letter-spacing `-0.005em`, `--accent-on-light`): now shared by two class names — `.faq__categoryheading` (incumbent) and `.groupheading` (new, used by Workshops session headings and Team committee headings). Same computed style; see Components for the duplication note.
- **Numeral** (weight 900, Fraunces, `clamp(2rem, 4vw, 3rem)` at the Past FACTs scale — smaller than the Agenda date numeral's `clamp(3rem, 6vw, 4.75rem)` — `'SOFT' 40, 'WONK' 1`, ink-900): Past FACTs year figures reuse the Agenda numeral's device (tabular Fraunces 900) at a page-appropriate smaller scale; this is a scale variant of the existing Numeral role, not a new one.
- **Quote** (weight 500 italic, Fraunces, ink-900): Past FACTs theme names (`.pastfacts__theme`, `clamp(1.1rem, 1.8vw, 1.4rem)`) reuse the About page's italic-Fraunces device for a pulled-phrase feel — previously described as the system's "sole italic use"; that is now carried by two components sharing one typographic role, not two competing italic treatments.
- **Title** (weight 800, Fraunces, ink-900): Workshops session titles (`.workshop__title`, `clamp(1.3rem, 2.2vw, 1.75rem)`) sit one step below Display, in the same family as the TOC entry Title role.
- **Structural Label** (weight 600, Jost, `0.78rem`, letter-spacing `0.05em`, uppercase, `--accent-on-light`): Team role labels use this compact uppercase-label device — same role as Agenda's weekday labels and the TOC index numerals. (Workshops previously used this role for a "spots left" tag; retired along with the per-row Register pill — see Workshops Search.)

### Named Rules
**The Display-Is-Headings-Only Rule.** Fraunces still appears solely in heading/numeral/quote/title roles. `.groupheading`, `.workshop__title`, `.pastfacts__year`, and `.pastfacts__theme` all extend this rule to the new pages' headings and display-scale text; none introduce Fraunces into body, label, or UI chrome.

**The No-Kicker Rule.** Section headings carry no eyebrow/kicker label above them. Workshops, Team, and Past FACTs headings (via `.groupheading`) confirm this — grouped content is introduced by the group heading itself, never a small label above it.

## Layout

Unchanged two-header-state structure (full hero on `index.html`, `.hero--compact` on all five interior pages) and unchanged `.section`/`.section__inner` rhythm (`clamp(4rem, 10vw, 7.5rem)` vertical padding, `max-width: 1180px` inner wrapper, paper-grain `main::before` texture).

**Workshops:** compact header → `.workshops__sessions` (three `.groupheading`-led groups, `gap: clamp(3rem, 6vw, 4.5rem)`) of `.workshop__row` entries (flex row, hairline-topped, `gap: clamp(1.5rem, 3.5vw, 3rem)`, collapsing to a stacked column under 900px) → butterfly motif, top-right → crosslink strip (to Agenda, Team) → footer.

**Team:** compact header → `.team__groups` (five `.groupheading`-led committee groups) of `.team__grid` (`repeat(auto-fill, minmax(170px, 1fr))`, `gap: clamp(2rem, 3.5vw, 2.75rem)`, no fixed column count) of `.team__member` entries → orbit motif, top-right → crosslink strip (to About, Past FACTs) → footer.

**Past FACTs:** compact header → `.pastfacts__list` (flex column, no group headings — a flat list, unlike Workshops/Team) of `.pastfacts__entry` rows (flex row, `align-items: center`, hairline-topped, `gap: clamp(1.5rem, 4vw, 3rem)`) → moon-strip motif, top-right → crosslink strip (to About, Team) → footer.

**Nav (all six pages):** `.hero__links` gap reduced from `clamp(1.5rem, 3.5vw, 2.75rem)` to `clamp(0.85rem, 1.8vw, 1.85rem)` and font-size from `0.95rem` to `0.92rem`, plus `flex-wrap: wrap` added as a safety net, to fit six links (About Us / Agenda / Workshops / Team / Past FACTs / FAQ) inline. The hamburger-nav breakpoint moved from **780px to 900px**, giving the now-wider nav more room before collapsing to the mobile menu — a value change to an existing breakpoint, not a new one.

**Homepage TOC:** grew from three `.toc__entry` items to six, same pattern, index numerals now running `01`–`06`.

Breakpoints: **900px** (nav collapses to hamburger — moved from 780px this pass; About/Agenda grids collapse to one column; motifs switch to mobile treatment; Workshops rows stack; Past FACTs entries top-align and shrink their photo circle to 76px), **460px** (topbar eventline wraps), **560px** (FAQ summary shrinks; TOC arrow hides; crosslink strip stacks).

## Elevation & Depth

Unchanged. Flat, no-shadow-ramp system on the day band; separation by hairline, whitespace, and paper-grain texture. The Team avatar and Past FACTs photo circles carry the same ambient shadow as the pre-existing nav badge/footer mark device (`0 6px 16px rgba(6,4,30,0.28), inset 0 0 0 1px rgba(255,255,255,0.22)`) — reused, not new. `.pill--ink` carries the same soft, diffuse shadow logic as the other two pill variants (`0 4px 16px rgba(14,21,94,0.28)`); no hard-offset shadow was introduced.

### Named Rules
**The No Hard Offset Rule.** Unchanged; `.pill--ink` and the reused avatar/photo shadow both stay soft and diffuse.

## Shapes

Unchanged binary form language: fully round (`999px`/`50%`) or hard-edged. `.pill--ink` is round, matching the two incumbent pill variants. Team avatars (68px circle) and Past FACTs photo placeholders (110px circle, 76px under 900px) are both `border-radius: 50%`, the same circle device as the nav badge and footer mark. No new radius value was introduced.

## Components

### Buttons (Pills)
Three variants: **Solid** and **Ghost** (night-band-only — assume a dark surface behind them) plus **Ink** (`.pill--ink`): `background: linear-gradient(180deg, var(--violet-800) 0%, var(--ink-900) 100%)`, `color: var(--cream-100)`, same `999px` radius as the other two. All three share `0.9rem 1.35rem` padding (raised from `0.6rem` this pass to clear the 44px touch-target minimum on Login/Donate/Register/View Booklet). `.pill--solid`'s gradient midtones are now named tokens, `--pill-solid-mid` (`#f2edfe`) and `--pill-solid-shade` (`#ddd2f7`), rather than inline hex.

Every currently-unavailable pill (Login, Donate, Register, View Booklet) uses `aria-disabled="true"` instead of the native `disabled` attribute, keeping the button focusable and its "coming soon" reason exposed to screen readers via a `.sr-only` span appended to the label (e.g. "Login. Registration opens soon") — native `disabled` pulled these out of the tab order and made the `title` tooltip mouse-only. `main.js` guards `[aria-disabled="true"]` clicks with `preventDefault`.

The footer's primary CTA (`index.html` only) is the one pill that is genuinely live: `<a class="pill pill--solid footer__ctabutton" href="mailto:fact@psauiuc.org?...">Get Notified When Registration Opens</a>` — a real mailto to FACT's general inbox, not a disabled placeholder. Because of this, the pill component's lock-icon `::before` and `cursor: not-allowed` are now scoped to `.pill:disabled, .pill[aria-disabled='true']` only (previously unconditional on `.pill`), and the base `.pill` cursor defaults to `pointer`. Any future pill that goes live should follow this same pattern: drop `aria-disabled`/`title`/the `.sr-only` reason span, use a real `href`.

### Content Section (signature component)
Unchanged: `.section` → `.section__inner` → `.section__heading` + `.section__rule`, with a corner motif. Workshops (butterfly, top-right), Team (orbit, top-right), and Past FACTs (moon strip, top-right) all reuse this scaffold and reuse already-catalogued motif shapes — no new motif shape was authored for these pages.

### Group Heading (new shared class — documented duplication)
`.groupheading` (Fraunces 700, `clamp(1.25rem, 1.9vw, 1.5rem)`, letter-spacing `-0.005em`, `--accent-on-light`) is visually and numerically identical to the pre-existing `.faq__categoryheading`. It was given its own generic name because the pattern is now used across three content types (Workshop sessions, Team committees) beyond FAQ categories. `.faq__categoryheading` itself was **not** refactored to alias `.groupheading` — both class names currently exist in `sections.css` for the same computed style. This is recorded as a known minor duplication in the build, not a documented two-pattern system: new work should reach for `.groupheading` going forward, and a future pass should consider aliasing `.faq__categoryheading` to it.

### Workshops Session List (signature component — see Workshops Search for the current shape)
`.workshops__sessions` → three `.groupheading`-led groups → `.workshop__row` entries: `.workshop__facilitator` (placeholder-avatar circle) beside a `.workshop__info` block (Title role + description, `--ink-on-light-dim`, max 58ch). Hairline-topped rows, same rhythm as Agenda/FAQ. Browse-only — no per-row action. All titles and descriptions are explicit placeholders, flagged via a `.section__intro` note at the top of the page.

### Team Grid (signature component)
`.team__groups` → five `.groupheading`-led committee groups (Directors, Programming, Logistics, Marketing, Delegate Experience — real organizational structure) → `.team__grid` (`<ul>`, auto-fill, `minmax(170px, 1fr)`, no cards, list-reset) of `.team__member` (`<li>`) entries: a 68px `.team__avatar` circle (reuses the nav-badge/footer-mark radial-gradient device, with a single-letter initial in Fraunces 700 white), a name (`.team__name--tbd` renders dim italic — every shipped entry uses this modifier, since no real names exist yet), and an uppercase `.team__role` label in `--accent-on-light`. The grouping and role titles are real; only individual names are placeholder. `.team__grid`/`.team__member` were promoted from plain `div`s to `ul`/`li` so assistive tech announces the roster as a list.

### Past FACTs List (signature component, new)
`.pastfacts__list` (flat, no group headings) of `.pastfacts__entry` rows: a `.pastfacts__photo` circle (110px, 76px under 900px — same radial-gradient placeholder device as Team avatars and the nav badge, containing a monoline camera-icon SVG rather than a fake photo, to signal "photo placeholder" explicitly), a `.pastfacts__year` numeral (Fraunces 900, smaller Numeral-role scale), a `.pastfacts__theme` (Fraunces italic, same device as the About pulled quote), a `.pastfacts__flag` note (`--accent-on-light`, bullet-prefixed) for placeholder fields, and a `.pill--ink` "View Booklet" button. One entry (2025, "Ipahayag nang Malakas") carries a real theme name; 2024 and 2023 are fully placeholder ("Theme TBD").

### Workshops Search (structural rework, new)
`workshops.html` grew from 9 illustrative sessions to 80 (still 3 sessions, ~26-27 each — the time-slot structure is unchanged, only the option count within it) after learning the real lineup will run to that scale. Reworked to hold: a single page-level keyword search (`#workshop-search`, `.workshops__searchinput` — the site's first text input, styled as an underline field, Jost, no boxed control, matching the no-card system rather than introducing one) filters all 80 rows live by title + description text match. A session group hides its own `.groupheading` when its match count drops to zero (`.workshops__sessions > div[hidden]`), so filtering never leaves a floating empty heading. A zero-results state (`#workshop-empty`, `.workshops__empty`) replaces the blank scroll. Filtering is pure client-side (`js/main.js`), no backend — matches the static-site stack constraint.

**This also retired the per-row disabled "Register" pill and the `.workshop__meta`/`.workshop__spots` classes added earlier the same session.** Delegates browse here only; workshops are actually chosen post-registration via the My FACT dashboard (per the FAQ), so a dead CTA on every one of 80 rows was both visual noise and a direct contradiction of the real flow — removed rather than carried forward at 9x the scale. `.workshop__row` is now `.workshop__facilitator` (unchanged placeholder-avatar device) + `.workshop__info` (title + description) only.

### Photo Placeholders (new, reused device)
Two new picture-placeholder spots, both reusing the existing radial-gradient circle/shadow device (`orchid-400`→`violet-800`→`ink-900`, `0 6px 16px rgba(6,4,30,0.28), inset 0 0 0 1px rgba(255,255,255,0.22)`) rather than inventing a new placeholder visual, matching the Do/Don't rule below:
- **About** (`about.html`, `.about__photo`): a full-width `21/9` rectangle beneath the mission grid, hard-edged (no border-radius — the system's other allowed shape besides `50%`/`999px`), reusing the same camera-icon SVG Past FACTs already uses, with a visible `<figcaption>Delegate photos coming soon</figcaption>` (`0.85rem`, the documented label size step).
- **Workshops** (`workshops.html`, `.workshop__facilitator`): a 56px circle prepended to every `.workshop__row`, smaller than Team's 68px avatar since it's secondary to the session title. Uses a generic person-silhouette line icon (not a letter, since no facilitator names exist yet) — same monoline stroke convention as the camera icon. `aria-hidden="true"` on the wrapper since it carries no information beyond what the row's title/description already state.

### Navigation
Style, typography, and states unchanged; now carries six links instead of three. Link gap and font-size were reduced (see Layout) and the hamburger breakpoint moved from 780px to 900px to keep the wider link set fitting inline before collapsing to the mobile menu. `aria-current="page"` marks the active link on each of the six pages.

### FAQ Accordion, About Split, Program Day, Table of Contents, Cross-Link Strip, Footer
Unchanged by this pass; see prior documentation. The TOC (`toc__entry`) grew from three to six entries, numbered `01`–`06`, same pattern.

## Do's and Don'ts

### Do:
- **Do** treat every page — including Workshops, Team, and Past FACTs — as the same three-band sequence (night → parchment day → dark footer bookend); new pages should reuse the compact-hero + `.section` + crosslink + footer template exactly, as these three did.
- **Do** use `.pill--ink` for any interactive pill placed directly on the parchment day band; reserve `.pill--solid`/`.pill--ghost` for pills on a photographic or dark surface.
- **Do** reuse `.groupheading` for any new grouped-content heading pattern rather than inventing a fourth near-identical class; if touching `.faq__categoryheading` in a future pass, consider aliasing it to `.groupheading` instead of maintaining both.
- **Do** reuse the existing radial-gradient circle device (`.team__avatar`, `.pastfacts__photo`) for any future placeholder-photo/avatar need, rather than introducing a new placeholder visual.
- **Do** flag placeholder content explicitly in-page (via `.section__intro` or a `.pastfacts__flag`-style note) rather than presenting invented names, numbers, or copy as real.
- **Do** keep hairline-topped rows (`.workshop__row`, `.pastfacts__entry`) as the pattern for any future list-of-entries content, matching Agenda/FAQ's existing rhythm.

### Don't:
- **Don't** introduce a card, panel, or opaque-background container for grouping content — Workshops, Team, and Past FACTs all confirm zero new card usage.
- **Don't** add a kicker/eyebrow label above any heading, including the new `.groupheading` instances.
- **Don't** extend `.pill--solid`/`.pill--ghost` onto the parchment ground — their gradient and shadow were tuned for a dark surface; use `.pill--ink` there instead.
- **Don't** treat `.groupheading` and `.faq__categoryheading` as two intentionally different patterns going forward — they are one visual pattern under two names; the duplication is a build artifact, not a system decision to preserve.
- **Don't** author a new placeholder-avatar or placeholder-photo visual device — reuse the existing radial-gradient circle.
- **Don't** add hard-offset/neobrutalist shadows anywhere, including on the new pill variant or placeholder circles — both stay soft and diffuse, consistent with the rest of the system.

**Accessibility/perf fixes (this pass).** Audit-driven, no visual-world change: footer legal text raised from `rgba(255,255,255,0.45)` to `0.65)` (was ~4.18:1 on ink-900, now ~6.5:1, WCAG AA); `.hero__navtoggle` raised 40px→44px; `.footer__social` padding raised to clear 44px; `.hero__links a::after` underline and `.crosslink__link` hover motion converted from layout-triggering properties (`left`/`right`/`gap`) to `transform`-only; mobile nav panel `backdrop-filter` blur reduced 14px→8px. Hero topbar text-on-photo contrast was checked by computing WCAG relative luminance against the layered scrim (`hero__scrim` + `hero__topbar`'s own gradient) over a worst-case near-white pixel — the stacked semi-transparent dark layers compound to ≥7.9:1 even in that worst case, so no change was needed there; the pinned hero art itself was not touched.

**Open item — not independently verified this pass.** Mobile rendering of the six-item nav (wrapped/collapsed state at and near the new 900px breakpoint) and of the three new pages (Workshops row stacking, Team grid reflow, Past FACTs photo-circle shrink) was not visually confirmed in a live browser this session, for the same browser-automation tooling limitation logged in this project's prior sessions — not a design decision. The CSS values above are read directly from `styles.css`/`sections.css` and are believed correct, but a future pass should visually confirm the six-link nav doesn't crowd or wrap awkwardly between 900px and typical desktop widths, and that the three new pages' mobile layouts match the About/Agenda/FAQ precedent they were built from.

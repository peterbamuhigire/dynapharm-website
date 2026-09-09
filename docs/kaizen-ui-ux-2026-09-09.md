# Kaizen UI/UX Handoff — 9 September 2026

## Scope

This bounded repair covers only the shared header, footer, language switcher,
and global styles. Country pages, photos, SEO, layout templates, and engine
repositories are outside this worker scope and remain with the Astra root.

## Before evidence

- `Header.astro` closed the mobile menu on `Escape` but did not return focus to
  the menu trigger. Opening the menu also left focus on the trigger.
- The mobile menu trigger was sized for touch, but the language link remained a
  text-sized target in the header and footer.
- Global reduced-motion rules set `html { scroll-behavior: auto; }`, while the
  layout also applies the higher-specificity `scroll-smooth` utility. The
  reduced-motion override was therefore not guaranteed to win.
- Shared focus styles used the red outline for every surface. That can be
  visually weak on the dark footer and on red primary buttons.
- The language switcher was a nested `nav` landmark when rendered inside the
  mobile navigation landmark.

These are static code observations from the scoped source files, not rendered
browser results.

## Changes

- Added explicit mobile-menu focus management: opening focuses the first mobile
  navigation link; `Escape` closes the menu and returns focus to the trigger.
- Kept the existing Alpine disclosure state and bilingual labels, while giving
  the trigger and language link comfortable minimum touch dimensions.
- Changed the language switcher wrapper to a named group to avoid nested
  navigation landmarks while retaining its accessible label and alternate URL.
- Increased footer navigation/contact link hit areas without changing routes or
  visible information architecture.
- Added clipped horizontal overflow protection at the document surface.
- Strengthened focus-ring contrast per surface and made reduced-motion override
  the `scroll-smooth` utility.

## Acceptance checks

- Static ownership check: only the five assigned paths were edited.
- `git diff --check`: PASS; Git reported only existing line-ending warnings.
- Source inspection: the menu trigger has a named `x-ref`; opening and
  `Escape` paths reference focus targets; language links retain `hreflang` and
  existing localized paths.
- Browser keyboard traversal, focus visibility, screen-reader output, 320px/
  200% reflow, reduced-motion rendering, contrast measurement, and full Astro
  build are `NOT_ASSESSED` in this worker handoff. The Astra root owns browser
  setup, build, and visual QA.

## Remaining NOT_ASSESSED gaps

- No browser or assistive-technology execution was performed here.
- No rendered contrast or target-size measurement was performed here.
- No visual baseline comparison was performed here.
- No full build was run here to avoid overlapping the root’s build/visual-QA
  work.

## Rollback

Revert the changes in the five scoped paths, or restore those paths from the
pre-change commit. Do not revert unrelated photo-bank changes owned by the
user or the Astra root.

## Blog schema follow-up

- Scoped to `src/layouts/BlogPostLayout.astro`; article body content and page
  sources were not changed.
- Blog hero and publisher logo schema URLs now come from Astro-emitted
  `getImage` results, with source dimensions clamped to avoid upscaling.
- BlogPosting reuses BaseLayout's site-wide organization entity by `@id` rather
  than emitting a second publisher organization.
- Blog canonical, breadcrumb, related-post, back-to-blog, and alternate paths
  now use trailing slashes consistently.
- Hero social metadata and rendered hero alt text use the localized catalogued
  hero alt text.
- Full Astro build, rendered schema inspection, and browser visual QA remain
  `NOT_ASSESSED` for Astra root integration.

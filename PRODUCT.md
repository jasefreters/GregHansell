# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
- **Collectors and buyers**: people who already admire Australian realist and landscape painting, assessing Greg's body of work, its standing and its consistency before deciding whether to pursue a piece.
- **Galleries and curators**: professionals checking his track record (prize hangings, exhibitions, collections, the monograph) when deciding whether to show or represent the work.

Both arrive mainly to look at the work and verify the career. They are not shopping in a hurry.

## Product Purpose
The site is a lasting record of Greg Hansell's career: the paintings, exhibitions, prizes, collections and the 2024 monograph, gathered in one authoritative place. Success means a collector or curator leaves with a clear, trustworthy picture of the work and the career, and knows how to make contact if they want to.

## Positioning
Decades of pastel work centred on weathered man-made surfaces (corrugated iron, timber, farm machinery) under Australian light, made partly with handmade earth pastels, and documented in a monograph by Lou Klepac (The Beagle Press, 2024). No other artist's site can truthfully claim that combination.

## Operating Context
- Maintained by family or friends, not by Greg, using GitHub's web editor in a browser. There is no local tooling.
- Content grows through Markdown files: artworks in `src/content/works/`, exhibitions and prizes in `src/content/exhibitions/`.
- The primary source of truth for biography, exhibition history and images is the book *Greg Hansell: Purity of Australian Light*.

## Capabilities and Constraints
- Astro static site on GitHub Pages at `/GregHansell/`. No client JavaScript and no server, so there is no contact form.
- Contact is by email link and social links. Both are still undecided and empty in `src/site.config.ts`.
- Undecided: whether works are offered for sale, and through which galleries.
- Editors are non-technical, so structures must stay simple to edit in Markdown.

## Brand Commitments
- Written in the third person ("Greg Hansell is…") by family and friends, with Greg's approval.
- Name: Greg Hansell. No logo exists.

## Evidence on Hand
- Monograph: *Greg Hansell: Purity of Australian Light*, Lou Klepac, The Beagle Press, 2024, ISBN 978-0-947349-70-7.
- Public-source facts are drafted in `src/pages/about.astro` and `src/content/exhibitions/`, and are marked "To check" until confirmed against the book.
- **Absent:** no artwork photos, no portrait, no artist statement, no testimonials or press quotes, no sale prices. Do not fabricate any of these. Use placeholders.

## Product Principles
1. The paintings come first. Everything else is there to support looking at the work.
2. Accuracy over impressiveness: only verified facts, with unverified ones visibly flagged.
3. A permanent record, not a shopfront. Calm, considered, no sales pressure.
4. Simple enough for a non-technical family member to keep up to date.

## Accessibility & Inclusion
Many visitors are likely to be older collectors, so the text must be readable, links clear, and contrast generous. Aim for WCAG 2.2 AA.

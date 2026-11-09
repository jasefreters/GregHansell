# Greg Hansell — website

The website for Australian pastel artist Greg Hansell, built with [Astro](https://astro.build)
and published free on GitHub Pages:

**https://jasefreters.github.io/GregHansell/**

Every change saved to the `main` branch rebuilds and republishes the site automatically
(it takes 1–2 minutes). You don't need to install anything: all editing can be done in the
browser on github.com.

---

## Turning the site on (one time only)

1. In this repository, open **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Open the **Actions** tab. If the "Deploy to GitHub Pages" run failed before Pages was
   turned on, click it and choose **Re-run all jobs**.
4. When it shows a green tick, the site is live at the address above.

---

## Editing in the browser

### Change some text

1. Find the file (see "Where things live" below) and click it.
2. Click the **pencil icon** (Edit this file) at the top right.
3. Make the change, then click **Commit changes…** → **Commit changes**.
4. Check the **Actions** tab: a green tick means the change is live.

If the run shows a red cross, click it to see the error. It is almost always a typo in the
settings block at the top of a Markdown file (a missing `:` or quote). Fix it the same way.

### Where things live

| What | File |
| --- | --- |
| Site name, tagline, **email**, **Instagram/Facebook links** | `src/site.config.ts` |
| Menu (order and names of pages) | `NAV` in `src/site.config.ts` |
| Home page | `src/pages/index.astro` |
| About / biography | `src/pages/about.astro` |
| Book page | `src/pages/book.astro` |
| Contact page | `src/pages/contact.astro` |
| **Artworks** (one file each) | `src/content/works/` |
| **Exhibitions, prizes, events** (one file each) | `src/content/exhibitions/` |
| Colours and fonts | top of `src/styles/global.css` |
| Social-share picture | `public/og-default.png` (1200 × 630) |
| Browser-tab icon | `public/favicon.svg` |

In the `.astro` page files, edit only the plain text between the tags, for example the
words inside `<p> … </p>`. Leave the lines between the `---` markers at the top alone
unless you know what they do.

### Placeholder and "To check" notes

Yellow dashed boxes on the site mark things still to do:

- **Placeholder**: content that's missing (portrait, artist statement, book cover, email…).
- **To check**: details drafted from public websites that need confirming against Greg's
  book or with Greg.

In the page files they look like `<Note> … </Note>` or `<Note kind="check"> … </Note>`.
Once the real content is in, delete the whole `<Note …> … </Note>` line(s).
On artworks and exhibitions, set `needsChecking: false` once the details are confirmed.

---

## Adding an artwork

1. Open `src/content/works/` and click **Add file → Upload files**. Upload the photo
   (JPG or PNG; use a simple file name with no spaces, such as `tomago.jpg`) and commit.
2. Open `_example.md` in the same folder and copy its contents.
3. Click **Add file → Create new file**, name it after the work (for example
   `windsor-shed.md`; this becomes the page address `/works/windsor-shed/`), paste,
   and fill in the details:

   ```yaml
   ---
   title: Windsor shed
   year: 2023
   medium: Earth pastel on paper
   dimensions: 56 x 76 cm
   image: ./windsor-shed.jpg
   imageAlt: A rusting corrugated-iron shed in late-afternoon light
   featured: true
   order: 5
   ---

   A few sentences about the work.
   ```

4. Commit. The site resizes and optimises the photo automatically.

To add a photo to an existing work, upload the image to `src/content/works/`, then edit
that work's `.md` file and add an `image: ./your-file.jpg` line.

- `featured: true` shows the work on the home page (up to six).
- `order` sets its position on the Works page (lower numbers first).
- To remove a work, open its `.md` file, click the **…** menu → **Delete file**.

## Adding an exhibition, prize or event

Copy `src/content/exhibitions/_example.md` into a new file in the same folder, for example
`royal-art-society-2025.md`, and fill it in. `kind` is one of `Exhibition`, `Prize`,
`Event` or `Collection`. Items are listed newest first by `year` (or `date`, as
`YYYY-MM-DD`); items with no year go at the end.

Files whose names start with `_` (like `_example.md`) are templates and never appear on
the site.

## Adding a new page

1. Create `src/pages/your-page.astro` (it will be at `/your-page/`). The easiest start is
   to copy `src/pages/book.astro` and change the text.
2. Add it to the menu in `NAV` in `src/site.config.ts`, e.g.
   `{ label: 'Workshops', href: '/workshops/' },`

For links between pages inside `.astro` files, use `href={url('/works/')}` rather than
`href="/works/"`, so they keep working under the `/GregHansell/` address.

---

## For developers

```bash
npm install
npm run dev       # local preview at http://localhost:4321/GregHansell/
npm run build     # production build into dist/
npm run preview   # serve the built site
```

- Astro 7, static output, no client-side JavaScript.
- Content collections are defined in `src/content.config.ts`.
- `astro.config.mjs` sets `site` and `base` for GitHub Pages. For a custom domain, set
  `site` to that domain and remove `base`.
- Deploys via `.github/workflows/deploy.yml` (`withastro/action` + `actions/deploy-pages`).

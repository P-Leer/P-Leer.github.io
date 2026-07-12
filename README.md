# Peter Leer — research homepage

A lightweight, static research homepage designed for GitHub Pages. It uses plain HTML, CSS, and a tiny amount of JavaScript: no build step and no dependencies.

## Preview locally

From this directory, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Publish with GitHub Pages

1. On GitHub, create a **public** repository named `p-leer.github.io`. The name must match the GitHub username in lower case; `PeterLeer.github.io` would be treated as a project site instead.
2. Add these files to the root of that repository and push them to the `main` branch.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.

The site will appear at <https://p-leer.github.io/> after GitHub finishes its first deployment.

## Before publishing

- Read the biography and research descriptions for accuracy.
- Confirm the LinkedIn and Eriksholm profile links.
- Add any preferred contact method or CV link.
- If you use a custom domain later, update the canonical URLs in `index.html`, `robots.txt`, and `sitemap.xml`.

## Add a project page

1. Copy the `projects/_template` folder.
2. Rename the copy to a short URL slug, for example `projects/my-new-project`.
3. Edit its `index.html`, replacing the title, description, facts, body text, and `PAPER_URL` placeholders.
4. Add a matching project card to the `#projects` section of the homepage.
5. Add the new page URL to `sitemap.xml`.

The shared project-page layout lives in `styles.css`, so future pages inherit the same typography and responsive behaviour automatically.

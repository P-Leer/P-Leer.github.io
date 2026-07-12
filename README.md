# Peter Leer — research homepage

A lightweight, static research homepage designed for GitHub Pages. It uses plain HTML, CSS, and a tiny amount of JavaScript: no build step and no dependencies.

## Preview locally

From this directory, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Publish with GitHub Pages

1. On GitHub, create a **public** repository named `P-Leer.github.io`.
2. Add these files to the root of that repository and push them to the `main` branch.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.

The site will appear at <https://p-leer.github.io/> after GitHub finishes its first deployment.

## Before publishing

- Read the biography and research descriptions for accuracy.
- Confirm the LinkedIn and ACM profile links.
- Add any preferred contact method or CV link.
- If you use a custom domain later, update the canonical URLs in `index.html`, `robots.txt`, and `sitemap.xml`.

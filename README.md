# Haoming (Harvey) Chen

Personal academic website for Haoming (Harvey) Chen, an undergraduate at Rice University researching generative modeling, flow matching, and diffusion models.

Public address: **https://hc-sgw.github.io**

Built from [al-folio](https://github.com/alshedivat/al-folio), using its versioned Jekyll theme and plugins. See `LICENSE` for the template's MIT license. Academic content and CV belong to Haoming (Harvey) Chen.

## Editing content

| Content                             | File                                    |
| ----------------------------------- | --------------------------------------- |
| Biography and homepage              | `_pages/about.md`                       |
| Research descriptions and abstracts | `_pages/research.md`                    |
| Publication entries                 | `_bibliography/papers.bib`              |
| Unpublished research listing        | `_pages/publications.md`                |
| Online CV                           | `_data/cv.yml`                          |
| Downloadable public CV              | `assets/pdf/Haoming_Harvey_Chen_CV.pdf` |
| Email and professional profiles     | `_data/socials.yml`                     |
| Site settings                       | `_config.yml`                           |

Keep the online CV and downloadable PDF in sync when updating academic details. Publish only the public CV copy; source application documents and transcripts are not site assets. Preserve the distinction between workshop publications and unpublished research.

The site currently works without a portrait. To add one, place your photo in `assets/img/` and replace `profile: false` in `_pages/about.md` with:

```yaml
profile:
  align: right
  image: portrait.jpg
  image_circular: false
```

## Local preview

Use Ruby 3.3 or a compatible newer Ruby version.

```sh
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve --host 127.0.0.1
```

Open http://127.0.0.1:4000. The site is configured for the domain root, so `baseurl` is empty.

For a production build:

```sh
JEKYLL_ENV=production bundle exec jekyll build
```

Optional formatting:

```sh
npm ci
npm run format
npm run lint:prettier
```

## Publishing

GitHub Pages uses **GitHub Actions** as its source. Pushing changes to `main` runs `.github/workflows/deploy.yml`, builds the site, and publishes the resulting `_site` artifact. No custom domain or server is required.

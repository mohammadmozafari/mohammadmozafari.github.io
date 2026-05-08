# Mohammad's Blog

Personal blog built with Next.js, MDX, and the Tailwind Next.js Starter Blog template.

## Development

```bash
yarn install
yarn dev
```

## Content

- Edit site metadata in `data/siteMetadata.js`
- Write posts in `data/blog`
- Update the about page in `data/authors/default.mdx`
- Adjust the main navigation in `data/headerNavLinks.ts`
- Update project cards in `data/projectsData.ts`

## GitHub Pages

The repository includes a ready-to-use GitHub Pages workflow at `.github/workflows/pages.yml`.

- Push to the `main` branch.
- Enable `Settings > Pages > Build and deployment > Source` to use `GitHub Actions`.
- The workflow builds the site as a static export and publishes the `out` directory.

The workflow also injects `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_SITE_REPO` at build time so metadata and edit links point to the deployed site and repository.

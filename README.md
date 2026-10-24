# Which movie tonight?

A React movie picker using TMDB movie details.

## Development

Use Node.js 22.12 or newer (Node.js 22 LTS recommended).

```sh
npm ci
npm start
```

The development server runs at http://localhost:3000.

## Checks

```sh
npm test
npm run build
npm audit
```

Tests run once; `npm run test:watch` enables watch mode. The production build
is written to `build/`. `npm run preview` serves it locally.

## Deployment

`npm run build` followed by `npm run deploy` publishes `build/` with gh-pages.
Relative asset paths support hosting under a GitHub Pages repository path.

## Dependency maintenance

Vite and Vitest replace the legacy Create React App toolchain. Unused packages
(including `styled-component`, `styled-components`, `react-spring`, and
`react-bootstrap`) have been removed to reduce the dependency tree.

CI checks the complete dependency tree with `npm audit --audit-level=low`, runs
the movie-picker tests, and builds the app. Dependabot is configured for security update PRs only;
routine version update PRs are disabled for npm and GitHub Actions. React and
React DOM security updates are grouped to keep their versions compatible. New advisories can appear after any successful audit;
review and merge future updates to keep the repository current.

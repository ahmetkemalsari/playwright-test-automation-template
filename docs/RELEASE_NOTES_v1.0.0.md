# v1.0.0 — Initial stable release

The first stable release provides a reusable Playwright and TypeScript starter framework for UI, API, and end-to-end automation.

## Highlights

- Business-readable UI flows built with typed Page and Component Objects
- Typed API request/response models, services, and Playwright `APIRequestContext`
- Typed fixture-based dependency injection and reusable test data factories
- Isolated unauthenticated tests and reusable authenticated browser state
- Central dev, staging, and production configuration with fail-fast validation and production safeguards
- Chromium, Firefox, and WebKit projects, native tags, parallel execution, and CI retries
- HTML and JUnit reports with failure screenshots, video, and traces
- Version-matched Playwright Docker image and Docker Compose runner
- Pull-request quality gate, nightly regression, Dependabot, and CodeQL workflows
- Strict TypeScript, typed ESLint rules, Prettier, secret handling, and publication guidance

The bundled SauceDemo and JSONPlaceholder scenarios are executable examples. Adopting teams should replace the demo namespace, URLs, and public demo credentials with their product implementation.

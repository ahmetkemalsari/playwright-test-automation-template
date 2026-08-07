# Contributing

Create focused branches such as `feature/add-orders-api`, `fix/login-locator`, or `docs/environment-guide`. Keep commits small, intentional, and written in imperative language. Never commit credentials, tokens, real environment files, reports, or storage state.

Install with `npm ci` and `npx playwright install`. Follow strict TypeScript, typed fixture, Page/Component Object, and locator conventions. Format with Prettier; do not bypass lint or type errors.

Before submitting a pull request:

```bash
npm run lint
npm run format:check
npm run typecheck
npm test
```

Add or update tests for behavioral changes, update documentation when public usage changes, and describe validation evidence in the PR. Complete the repository PR checklist and request review only after checks pass.

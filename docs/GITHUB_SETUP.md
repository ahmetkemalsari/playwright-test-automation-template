# GitHub Publication and v1.0.0 Checklist

## Recommended repository metadata

- Name: `playwright-test-automation-template`
- Description: Production-ready Playwright + TypeScript automation framework template for UI, API and E2E testing.
- Topics: `playwright`, `typescript`, `test-automation`, `qa`, `automation-testing`, `e2e-testing`, `api-testing`, `ui-testing`, `quality-assurance`, `testing`

## Publication

- [ ] Create the GitHub repository without inventing or committing a placeholder remote URL.
- [ ] Push the local `main` branch.
- [ ] Enable **Template repository** under repository settings.
- [ ] When replacing the public demo, configure product `TEST_USERNAME` and `TEST_PASSWORD` Actions secrets.
- [ ] Run the quality, nightly, and CodeQL workflows on GitHub.
- [ ] Enable Dependabot alerts and security updates.
- [x] Configure README badges for the published repository.

## Main branch protection

- [ ] Require a pull request before merging.
- [ ] Require the Playwright quality gate and CodeQL checks.
- [ ] Require branches to be up to date before merging.
- [ ] Prevent force pushes.
- [ ] Prevent branch deletion.

## v1.0.0 release

- [ ] Confirm the working tree contains no generated artifacts or secrets.
- [ ] Confirm `package.json` and `CHANGELOG.md` both identify version `1.0.0`.
- [ ] Create and push an annotated `v1.0.0` tag only after GitHub checks pass.
- [ ] Create the GitHub release using `docs/RELEASE_NOTES_v1.0.0.md`.

These settings require repository administrator access and are recommendations until applied on GitHub.

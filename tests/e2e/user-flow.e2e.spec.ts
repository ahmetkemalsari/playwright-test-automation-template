import { test } from '../../playwright/fixtures/auth.fixture';

test(
  'authenticated user can access the application',
  { tag: ['@e2e', '@critical'] },
  async ({ dashboardPage }) => {
    await dashboardPage.open();
    await dashboardPage.verifyLoaded();
  },
);

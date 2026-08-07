import { test } from '../../../playwright/fixtures/auth.fixture';

test(
  'authenticated user can view dashboard',
  { tag: ['@regression', '@ui'] },
  async ({ dashboardPage }) => {
    await dashboardPage.open();
    await dashboardPage.verifyLoaded();
  },
);

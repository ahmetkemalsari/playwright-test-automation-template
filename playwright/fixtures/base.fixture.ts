import { test as base } from '@playwright/test';
import { DashboardPage } from '../../src/examples/demo/pages/DashboardPage';
import { LoginPage } from '../../src/examples/demo/pages/LoginPage';

interface UiFixtures {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
}

export const test = base.extend<UiFixtures>({
  loginPage: async ({ page }, use) => use(new LoginPage(page)),
  dashboardPage: async ({ page }, use) => use(new DashboardPage(page)),
});
export { expect } from '@playwright/test';

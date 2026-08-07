import { test as setup, expect } from '@playwright/test';
import { env } from '../../config/environment';
import { LoginPage } from '../../src/examples/demo/pages/LoginPage';

const AUTH_FILE = 'playwright/.auth/user.json';

setup('authenticate test user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login(env.username, env.password);
  await expect(page).toHaveURL(/inventory\.html/);
  await page.context().storageState({ path: AUTH_FILE });
});

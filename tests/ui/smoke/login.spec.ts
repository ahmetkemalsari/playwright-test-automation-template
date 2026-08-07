import { invalidUser, testUser } from '../../../src/examples/demo/data/TestData';
import { test } from '../../../playwright/fixtures/base.fixture';

test(
  'user can login',
  { tag: ['@smoke', '@ui', '@critical'] },
  async ({ loginPage, dashboardPage }) => {
    await loginPage.open();
    await loginPage.login(testUser.email, testUser.password);
    await dashboardPage.verifyLoaded();
  },
);

test(
  'invalid credentials show an error',
  { tag: ['@smoke', '@ui', '@negative'] },
  async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(invalidUser.email, invalidUser.password);
    await loginPage.verifyErrorContains('Username and password do not match');
  },
);

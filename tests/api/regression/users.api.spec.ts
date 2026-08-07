import { test, expect } from '../../../playwright/fixtures/api.fixture';

test('existing user can be retrieved', { tag: ['@regression', '@api'] }, async ({ userApi }) => {
  const response = await userApi.getUser(1);
  expect(response.ok()).toBeTruthy();
  const user = await userApi.parseExistingUser(response);
  expect(user.id).toBe(1);
  expect(user.name).toBeTruthy();
  expect(user.email).toContain('@');
});

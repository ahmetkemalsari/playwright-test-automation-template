import { test, expect } from '../../../playwright/fixtures/api.fixture';
import { UserFactory } from '../../../src/examples/demo/data/factories/UserFactory';

test('user can be created', { tag: ['@smoke', '@api'] }, async ({ userApi }) => {
  const user = UserFactory.create();
  const response = await userApi.createUser(user);
  expect(response.status()).toBe(201);
  const created = await userApi.parseCreatedUser(response);
  expect(created.name).toBe(user.name);
  expect(created.email).toBe(user.email);
  expect(created.role).toBe(user.role);
  expect(created.id).toBeTruthy();
});

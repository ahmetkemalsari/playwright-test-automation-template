import { test as base } from '@playwright/test';
import { UserApi } from '../../src/examples/demo/api/services/UserApi';

interface ApiFixtures {
  userApi: UserApi;
}

export const test = base.extend<ApiFixtures>({
  userApi: async ({ request }, use) => use(new UserApi(request)),
});
export { expect } from '@playwright/test';

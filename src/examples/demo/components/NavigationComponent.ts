import type { Page } from '@playwright/test';

export class NavigationComponent {
  constructor(private readonly page: Page) {}

  async logout(): Promise<void> {
    await this.page.getByRole('button', { name: 'Open Menu' }).click();
    await this.page.getByRole('link', { name: 'Logout' }).click();
  }
}

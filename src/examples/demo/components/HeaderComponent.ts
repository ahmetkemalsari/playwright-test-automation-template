import { expect, type Locator, type Page } from '@playwright/test';

export class HeaderComponent {
  private readonly title: Locator;
  private readonly menuButton: Locator;

  constructor(page: Page) {
    this.title = page.getByText('Swag Labs', { exact: true });
    this.menuButton = page.getByRole('button', { name: 'Open Menu' });
  }

  async verifyVisible(): Promise<void> {
    await expect(this.title).toBeVisible();
    await expect(this.menuButton).toBeVisible();
  }
}

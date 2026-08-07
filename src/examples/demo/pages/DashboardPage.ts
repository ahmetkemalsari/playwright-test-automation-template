import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from '../../../pages/BasePage';
import { HeaderComponent } from '../components/HeaderComponent';
import { NavigationComponent } from '../components/NavigationComponent';

export class DashboardPage extends BasePage {
  readonly header: HeaderComponent;
  readonly navigation: NavigationComponent;
  private readonly inventory: Locator;

  constructor(page: Page) {
    super(page);
    this.header = new HeaderComponent(page);
    this.navigation = new NavigationComponent(page);
    this.inventory = page.getByTestId('inventory-list');
  }

  async open(): Promise<void> {
    await this.openPath('/inventory.html');
  }

  async verifyLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.inventory).toBeVisible();
    await this.header.verifyVisible();
  }
}

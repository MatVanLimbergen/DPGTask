import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class HeaderPage extends BasePage {
  readonly page: Page;

  readonly cookiesIframe: Locator;
  readonly acceptCookiesButton: Locator;
  readonly loginButton: Locator;
  readonly navigationProfile: Locator;
  readonly searchButton: Locator;
  readonly searchBarInput: Locator;
  readonly searchBarSubmit: Locator;

  constructor(page: Page) {
    super(page);
    this.cookiesIframe = page.locator('[title="SP Consent Message"]');
    this.acceptCookiesButton = this.cookiesIframe.frameLocator(':scope').getByTitle('Akkoord');
    this.loginButton = page.getByText('Inloggen', { exact: true });
    this.navigationProfile = page.locator('div.primary-nav__profile');
    this.searchButton = page.locator('div.primary-nav .icon-search');

    this.searchBarInput = page.locator('form.sub-nav__search-form > input');
    this.searchBarSubmit = page.locator('form.sub-nav__search-form > button.submit')
  }

  async acceptCookies() {
    await this.waitForDisplayed(this.acceptCookiesButton);
    await this.acceptCookiesButton.click();
    await this.waitForDetached(this.cookiesIframe);
  }

  async goToLogin() {
    await this.waitForDisplayed(this.loginButton);
    await this.loginButton.click();
  }

  async verifyLoggedIn(user: string) {
    await this.waitForDisplayed(this.navigationProfile);
    await this.waitForDisplayed(this.navigationProfile.getByTitle(user));
  }

  async searchKeyword(keyword: string) {
    await this.waitForDisplayed(this.searchButton);
    await this.searchButton.click();
    await this.waitForDisplayed(this.searchBarInput);
    await this.searchBarInput.fill(keyword);
    await this.searchBarSubmit.click();
  }
}
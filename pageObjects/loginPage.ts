import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  readonly page: Page;

  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.locator('button[type="submit"]');
  }

  async enterEmail(username: string) {
    await this.waitForDisplayed(this.emailInput);
    await this.emailInput.fill(username);
    await this.submitButton.click();
  }

  async enterPassword(password: string) {
    await this.waitForDisplayed(this.passwordInput);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}
import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class SearchPage extends BasePage {
  readonly page: Page;

  readonly searchResults: Locator;

  constructor(page: Page) {
    super(page);
    this.searchResults = page.locator('article');
  }

  async verifySearchResult(keyword: string) {
    await this.validateContainsText(this.searchResults.first(), keyword);
  }
}
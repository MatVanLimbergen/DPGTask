import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class ArticlePage extends BasePage {
  readonly page: Page;

  readonly articleTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.articleTitle = page.locator('h1.article__title');
  }

  async verifyArticleTitle(title: string) {
    await this.validateText(this.articleTitle, title);
  }
}
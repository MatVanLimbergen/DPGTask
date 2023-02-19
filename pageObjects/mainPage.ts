import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class MainPage extends BasePage {
  readonly page: Page;

  readonly primaryContent: Locator;
  readonly primaryTileArticles: Locator;

  constructor(page: Page) {
    super(page);

    this.primaryContent = page.locator('div.col--primary')
    this.primaryTileArticles = this.primaryContent.locator('ol.tile-grid article');
  }

  async navigateToFirstTile(): Promise<string> {
    const firstArticle = this.primaryTileArticles.first();
    await this.waitForDisplayed(firstArticle);
    await this.waitForDisplayed(firstArticle.locator('h2.ankeiler__title'));
    var articleTitle: string = await this.getInnerText(firstArticle.locator('h2.ankeiler__title'));
    await firstArticle.click();
    // Remove soft hyphen if present
    return articleTitle.replace(/\u00AD/g,'');
  }
}
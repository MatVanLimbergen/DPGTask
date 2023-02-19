import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }

  async waitForDisplayed(element: Locator) {
    await element.waitFor(
        {
            state: "visible"
        }
    )
  }

  async waitForDetached(element: Locator) {
    await element.waitFor(
        {
            state: "detached"
        }
    )
  }

  async validateText(element: Locator, text: string) {
    await expect(element).toHaveText(text);
  }

  async validateContainsText(element: Locator, text: string) {
    await expect(element).toContainText(text);
  }

  async getInnerText(element): Promise<string> {
    return (await element.innerText()).valueOf()
  }
}
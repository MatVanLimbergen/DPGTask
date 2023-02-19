import { test } from '../playwright-test-options';
import { LoginPage } from '../pageObjects/loginPage';
import { HeaderPage } from '../pageObjects/headerPage';

test.describe('Login', () => {
  var headerPage: HeaderPage;
  var loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    headerPage = new HeaderPage(page);
    loginPage = new LoginPage(page);

    await page.goto('');
    await headerPage.acceptCookies();
  });

  test('should login with correct credentials', async ({ username, password, email }) => {
    await headerPage.goToLogin();
    await loginPage.enterEmail(email);
    await loginPage.enterPassword(password)
    await headerPage.verifyLoggedIn(username);
  });
});
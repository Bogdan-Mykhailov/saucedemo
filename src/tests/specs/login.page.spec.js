const LoginPage = require('../../pageobjects/pages/login.page');
const InventoryPage = require('../../pageobjects/pages/inventory.page');
const logger = require('../../../logger.config');
const {
  errorMessage,
  username,
  pageTitle,
  password,
  url
} = require('../../data/dataProvider');
const { browser } = require("@wdio/globals");

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe('Saucedemo login tests', () => {
  beforeEach(async () => {
    logger.info('Opening the login page');
    await loginPage.open();
  });

  username.validUsernames.forEach(user => {
    if (user === 'locked_out_user') {
      it('UC-4: Check Locked-Out User Access', async () => {
        await expect(await browser.getUrl()).toEqual(url.loginPageUrl);
        logger.info('Correct page URL was verified');

        await loginPage.setFormFields(user, password.validPassword);
        await loginPage.clickOnLoginButton();

        await expect(await browser.getUrl()).toEqual(url.loginPageUrl);
        logger.info('User was redirected to login page');

        await expect(await loginPage.errorMessage.isDisplayed()).toBe(true);
        await expect(await loginPage.errorMessage.getText()).toContain(errorMessage.lockedOutUsernameError);
        logger.info('Correct error message for locked-out user was displayed');
      });
    } else {
      it('UC-1: Test Login Form with Empty Credentials', async () => {
        await expect(await browser.getUrl()).toEqual(url.loginPageUrl);
        logger.info('Correct page URL was verified');

        await loginPage.setFormFields(user, password.validPassword);
        await expect(await loginPage.usernameField.getValue()).toEqual(user);
        await expect(await loginPage.passwordField.getValue()).toEqual(password.validPassword);
        logger.info('The form field credentials were entered');

        await loginPage.clearField(loginPage.usernameField);
        await loginPage.clearField(loginPage.passwordField);
        await expect(await loginPage.usernameField.getValue()).toEqual('');
        await expect(await loginPage.passwordField.getValue()).toEqual('');
        logger.info('The form fields were cleared');

        await loginPage.clickOnLoginButton();
        await expect(await loginPage.errorMessage.isDisplayed()).toBe(true);
        await expect(await loginPage.errorMessage.getText()).toContain(errorMessage.usernameError);
        logger.info('Successful error message was displayed');
      });

      it('UC-2: Test Login Form with Credentials by Passing Username', async () => {
        await expect(await browser.getUrl()).toEqual(url.loginPageUrl);
        logger.info('Correct page URL was verified');

        await loginPage.setFormFields(user, password.validPassword);
        await expect(await loginPage.usernameField.getValue()).toEqual(user);
        await expect(await loginPage.passwordField.getValue()).toEqual(password.validPassword);
        logger.info('The form field credentials were entered');

        await loginPage.clearField(loginPage.passwordField);
        await expect(await loginPage.usernameField.getValue()).toEqual(user);
        await expect(await loginPage.passwordField.getValue()).toEqual('');
        logger.info('The password field was cleared');

        await loginPage.clickOnLoginButton();
        await expect(await loginPage.errorMessage.isDisplayed()).toBe(true);
        await expect(await loginPage.errorMessage.getText()).toContain(errorMessage.passwordError);
        logger.info('Successful error message was displayed');
      });

      it('UC-3: Test Login Form with Credentials by Passing Username & Password', async () => {
        await expect(await browser.getUrl()).toEqual(url.loginPageUrl);
        logger.info('Correct page URL was verified');

        await loginPage.setFormFields(user, password.validPassword);
        await expect(await loginPage.usernameField.getValue()).toEqual(user);
        await expect(await loginPage.passwordField.getValue()).toEqual(password.validPassword);
        logger.info('The form field credentials were entered');

        await loginPage.clickOnLoginButton();
        await expect(await browser.getUrl()).toEqual(url.inventoryPageUrl);
        logger.info('Successful login and correct page URL was verified');
        await expect(await inventoryPage.pageTitle.getText()).toEqual(pageTitle.inventoryPageTitle);
        logger.info('Correct page title was displayed');
      });
    }
  });
});

const LoginPage = require('../../pageobjects/pages/login.page');
const InventoryPage = require('../../pageobjects/pages/inventory.page');
const logger = require('../../../logger.config');
const {user} = require('../../data/user');
const {browser} = require("@wdio/globals");

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe('Saucedemo login tests', () => {
  beforeEach(async () => {
    logger.info('Opening the login page');
    await loginPage.open();
  });
  it('UC-1: Test Login Form with Empty Credentials', async () => {
    await expect(await browser.getUrl()).toEqual(loginPage.url);
    logger.info('Correct page URL was verified');

    await loginPage.setFormFields(user.name, user.password);
    await expect(await loginPage.usernameField.getValue()).toEqual(user.name);
    await expect(await loginPage.passwordField.getValue()).toEqual(user.password);
    logger.info('The form field credentials were entered');

    await loginPage.clearField(loginPage.usernameField);
    await loginPage.clearField(loginPage.passwordField);
    await expect(await loginPage.usernameField.getValue()).toEqual('');
    await expect(await loginPage.passwordField.getValue()).toEqual('');
    logger.info('The form fields were cleared');

    await loginPage.clickOnLoginButton();
    await expect(await loginPage.errorMessage.isDisplayed()).toBe(true);
    await expect(await loginPage.errorMessage.getText()).toContain('Username is required');
    logger.info('Successful error message was displayed');
  });

  it('UC-2: Test Login Form with Credentials by Passing Username', async () => {
    await expect(await browser.getUrl()).toEqual(loginPage.url);
    logger.info('Correct page URL was verified');

    await loginPage.setFormFields(user.name, user.password);
    await expect(await loginPage.usernameField.getValue()).toEqual(user.name);
    await expect(await loginPage.passwordField.getValue()).toEqual(user.password);
    logger.info('The form field credentials were entered');

    await loginPage.clearField(loginPage.passwordField);
    await expect(await loginPage.usernameField.getValue()).toEqual(user.name);
    await expect(await loginPage.passwordField.getValue()).toEqual('');
    logger.info('The password field was cleared');

    await loginPage.clickOnLoginButton();
    await expect(await loginPage.errorMessage.isDisplayed()).toBe(true);
    await expect(await loginPage.errorMessage.getText()).toContain('Password is required');
    logger.info('Successful error message was displayed');
  });

  it('UC-3: Test Login Form with Credentials by Passing Username & Password', async () => {
    await expect(await browser.getUrl()).toEqual(loginPage.url);
    logger.info('Correct page URL was verified');

    await loginPage.setFormFields(user.name, user.password);
    await expect(await loginPage.usernameField.getValue()).toEqual(user.name);
    await expect(await loginPage.passwordField.getValue()).toEqual(user.password);
    logger.info('The form field credentials were entered');

    await loginPage.clickOnLoginButton();
    await expect(await browser.getUrl()).toEqual(inventoryPage.url);
    logger.info('Successful login and correct page URL was verified');
    await expect(await inventoryPage.pageTitle.getText()).toEqual('Swag Labs');
    logger.info('Correct page title was displayed');
  });
});

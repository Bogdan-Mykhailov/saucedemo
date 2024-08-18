const LoginPage = require('../../pageobjects/pages/login.page');
const InventoryPage = require('../../pageobjects/pages/inventory.page');
const {verifyErrorMessage, verifyFormFields} = require('../../utils/helpers');
const logger = require('../../utils/loggerConfig');
const {
  username,
  errorMessage,
  pageTitle,
  password,
  url
} = require('../../data/dataProvider');

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe('Saucedemo login form tests', () => {
  before(async () => {
    logger.info('Opening the login page');
    await loginPage.open();
  })

  /*it('should display "Username is required" error message if empty username and password fields',
    async () => {
    try {
      /!**
       * Given "Username" and "Password" data.
       *!/
      logger.info(`Setting form fields with random
      username: ${username.invalidUsername} and valid password: ${password.validPassword}`);
      await setFormFields(username.invalidUsername, password.validPassword);
      logger.info('Verifying form fields have correct values');
      expect(await loginPage.username.getValue()).toEqual(username.invalidUsername);
      expect(await loginPage.password.getValue()).toEqual(password.validPassword);

      /!**
       * When clear the fields.
       *!/
      logger.info('Clearing the form fields');
      await loginPage.clearInputs();
      expect(await loginPage.username.getValue()).toEqual('');
      expect(await loginPage.password.getValue()).toEqual('');
      logger.info(`Form fields has to be empty:
      username: ${await loginPage.username.getValue()} password: ${await loginPage.password.getValue()}`);

      /!**
       * When empty fields and button login was clicked
       *!/
      logger.info('Clicking the login button with empty fields');
      await loginPage.buttonClick();

      /!**
       * Then error message "Username is required" should be displayed
       *!/
      logger.info('Checking for "Username is required" error message');
      await loginPage.errorMessage.waitForDisplayed();
      expect(await loginPage.errorMessage.isDisplayed()).toBe(true);
      expect(await loginPage.errorMessage.getText()).toContain(errorMessage.usernameError);
    } catch (error) {
      logger.error('Test failed: should display "Username is required" error message', error);
      throw error;
    }
  })

  it('should display "Password is required" error message if empty password field',
    async () => {
    try {
      /!**
       * Given "Username" and "Password" data.
       *!/
      logger.info('Setting form fields with valid username and password');
      await setFormFields(username.validUsername, password.validPassword);
      logger.info(`Verifying form fields have correct values
      username: ${username.validUsername} and password: ${password.validPassword}`);
      expect(await loginPage.username.getValue()).toEqual(username.validUsername);
      expect(await loginPage.password.getValue()).toEqual(password.validPassword);

      /!**
       * When username field was filled with valid data.
       *!/
      logger.info('Filling username field with valid data');
      await loginPage.username.setValue(username.validUsername);
      expect(await loginPage.username.getValue()).toEqual(username.validUsername);

      /!**
       * When clear the password field and login button was clicked.
       *!/
      logger.info('Clearing the password field and clicking login button');
      await loginPage.password.clearValue();
      expect(await loginPage.password.getValue()).toEqual('');
      await loginPage.buttonClick();

      /!**
       * Then error message "Password is required" should be displayed.
       *!/
      logger.info('Checking for "Password is required" error message');
      await loginPage.errorMessage.waitForDisplayed();
      expect(await loginPage.errorMessage.isDisplayed()).toBe(true);
      expect(await loginPage.errorMessage.getText()).toContain(errorMessage.passwordError);
    } catch (error) {
      logger.error('Test failed: should display "Password is required" error message', error);
      throw error;
    }
  });*/

  //using the if else statement, i'm combine two similar tests and implement shorter solution

  it('should display correct error message if empty form field', async () => {
    try {
      /**
       * Determine which error message we are expecting.
       */
      const errorText = errorMessage.usernameError || errorMessage.passwordError;

      if (errorMessage.usernameError) {
        /**
         * Given invalid username and valid password.
         */
        await verifyFormFields(username.invalidUsername, password.validPassword);
        /**
         * When clear inputs to trigger the error message.
         */
        await loginPage.clearInputs();
        /**
         * Then press login button and verify that the correct error message is displayed.
         */
        await verifyErrorMessage(errorMessage.usernameError);
      } else if (errorMessage.passwordError) {
        /**
         * Given valid username and password.
         */
        await verifyFormFields(username.validUsername, password.validPassword);
        /**
         * When clear the password field to trigger the error message.
         */
        await loginPage.password.clearValue();
        /**
         * When verify that the password field is empty.
         */
        expect(await loginPage.password.getValue()).toEqual('');
        /**
         * Then press login button and verify that the correct error message is displayed.
         */
        await verifyErrorMessage(errorText);
      }
    } catch (error) {
      logger.error('Test failed: should display valid error message.');
      throw error;
    }
  });

  it('should login when passing valid credentials in to the Username & Password fields',
    async () => {
      try {
        /**
         * Given valid "Username" and "Password" data.
         */
        logger.info('Setting form fields');
        await loginPage.username.setValue(username.validUsername);
        await loginPage.password.setValue(password.validPassword);
        logger.info(`Fields set to username: ${username.validUsername} and password: ******`);
        /**
         * When login button was clicked
         */
        logger.info('Clicking the login button');
        await loginPage.buttonClick();
        /**
         * Then redirect to correct page and dashboard should show valid title
         */
        try {
          logger.info('Checking for successful login and correct page url');
          expect(await browser.getUrl()).toEqual(url.inventoryPageUrl);
          logger.info('Successful login and correct page url');
        } catch (error) {
          logger.error('Wrong page url');
          throw error;
        }

        await inventoryPage.pageTitle.waitForDisplayed();

        try {
          logger.info('Checking for correct page title');
          expect(await inventoryPage.pageTitle.getText()).toEqual(pageTitle.inventoryPageTitle);
          logger.info('Correct page title');
        } catch (error) {
          logger.error('Wrong page title');
          throw error;
        }
      } catch (error) {
        logger.error('Test failed: should login when passing valid credentials');
        throw error;
      }
    });
});

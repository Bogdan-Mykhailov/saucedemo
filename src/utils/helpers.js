const LoginPage = require('../pageobjects/pages/login.page')
const loginPage = new LoginPage();
const {browser} = require('@wdio/globals');
const logger = require("./loggerConfig");

/**
 * Sets the values for the username and password fields on the login page.
 *
 * This function uses the WebDriverIO `browser.execute` method to directly manipulate
 * the input fields' values in the DOM.
 *
 * @param {string} username - The value to set in the "Username" field.
 * @param {string} password - The value to set in the "Password" field.
 *
 * @example
 * // Usage example:
 * await setFormFields('testuser', 'testpassword');
 *
 * // This sets 'testuser' in the "Username" field and 'testpassword' in the "Password" field
 * // on the login page.
 */
async function setFormFields(username, password) {
  await browser.execute((userInput, passInput, userName, password) => {
    userInput.value = userName;
    passInput.value = password;
  }, await loginPage.username, await loginPage.password, username, password);
}

/**
 * Verifies that the username and password fields have been set to the specified values.
 *
 * This function sets the values for the username and password fields and then checks
 * if the fields reflect the expected values. It also logs the process for better traceability.
 *
 * @param {string} usernameValue - The expected value for the "Username" field.
 * @param {string} passwordValue - The expected value for the "Password" field.
 *
 * @example
 * // Usage example:
 * await verifyFormFields('testuser', 'testpassword');
 *
 * // This sets 'testuser' in the "Username" field and 'testpassword' in the "Password" field,
 * // and then verifies that these values are correctly reflected in the fields.
 */

async function verifyFormFields(usernameValue, passwordValue) {
  await setFormFields(usernameValue, passwordValue);
  logger.info(`Fields set to username: ${usernameValue} and password: ******`);

  try {
    expect(await loginPage.username.getValue()).toEqual(usernameValue);
    expect(await loginPage.password.getValue()).toEqual(passwordValue);
    logger.info('Form fields have correct values');
  } catch (error) {
    logger.error(`Failed to verify form fields with username: ${usernameValue} and password: ******.`);
    throw error;
  }
}

/**
 * Verifies that the error message displayed matches the expected error message.
 *
 * This function triggers the error message by clicking the login button and then checks if
 * the displayed error message matches the expected error message. It also logs the process
 * for better traceability.
 *
 * @param {string} expectedErrorMessage - The expected error message to verify.
 *
 * @example
 * // Usage example:
 * await verifyErrorMessage('Username is required');
 *
 * // This clicks the login button and verifies that the error message displayed is
 * // "Username is required".
 */

async function verifyErrorMessage(expectedErrorMessage) {
  await loginPage.buttonClick();
  await loginPage.errorMessage.waitForDisplayed();
  logger.info('Checking for error message');
  try {
    expect(await loginPage.errorMessage.isDisplayed()).toBe(true);
    expect(await loginPage.errorMessage.getText()).toContain(expectedErrorMessage);
    logger.info(`Correct error message "${expectedErrorMessage}" is displayed`);
  } catch (error) {
    logger.error(`Failed to get expected error message: ${expectedErrorMessage}.`);
    throw error;
  }
}

module.exports = {
  setFormFields,
  verifyFormFields,
  verifyErrorMessage
};


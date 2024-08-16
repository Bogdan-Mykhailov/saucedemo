const LoginPage = require('../pageobjects/pages/login.page')
const loginPage = new LoginPage();
const {browser} = require('@wdio/globals');

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
async function setFormFields(username, password){
  await browser.execute((userInput, passInput, userName, password) => {
    userInput.value = userName;
    passInput.value = password;
  }, await loginPage.username, await loginPage.password, username, password);
}

module.exports = setFormFields;

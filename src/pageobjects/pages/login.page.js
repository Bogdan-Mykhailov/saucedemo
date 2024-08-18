const LoginForm = require('../components/login.form');
const Page = require('./page');
const { url } = require('../../data/dataProvider');

/**
 * This class extends the base `Page` class and provides methods and selectors
 * specific to the login page, such as interacting with the username and password fields,
 * clicking the submit button, and handling error messages.
 */
class LoginPage extends Page {
  constructor() {
    super();
    this.loginForm = new LoginForm();
  }

  /**
   * Gets the username input field element.
   *
   * @returns {WebdriverIO.Element} The username input field element.
   */
  get username() {
    return this.loginForm.elements('userInput');
  }

  /**
   * Gets the password input field element.
   *
   * @returns {WebdriverIO.Element} The password input field element.
   */
  get password() {
    return this.loginForm.elements('passInput');
  }

  /**
   * Gets the submit button element.
   *
   * @returns {WebdriverIO.Element} The submit button element.
   */
  get submitButton() {
    return this.loginForm.elements('loginButton');
  }

  /**
   * Gets the error message element.
   *
   * @returns {WebdriverIO.Element} The error message element.
   */
  get errorMessage() {
    return this.loginForm.elements('errorMessage');
  }

  /**
   * Opens the login page.
   *
   * This method overrides the `open` method from the `Page` class to navigate
   * to the login page URL specified in the `LOGIN_PAGE_URL` constant.
   *
   * @returns {Promise<void>} A promise that resolves when the page is opened.
   */
  open() {
    return super.open(url.loginPageUrl);
  }

  /**
   * Clicks the submit button on the login page.
   *
   * @returns {Promise<void>} A promise that resolves when the button is clicked.
   */
  async buttonClick() {
    await this.submitButton.click();
  }

  /**
   * Clears the values from the username and password input fields.
   *
   * This method sets the values of the username and password fields to empty strings.
   *
   * @returns {Promise<void>} A promise that resolves when the inputs are cleared.
   */
  async clearInputs() {
    await this.username.clearValue();
    await this.password.clearValue();
  }
}

module.exports = LoginPage;

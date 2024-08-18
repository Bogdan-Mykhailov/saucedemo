/**
 * Represents a login form with methods to access various form elements.
 */
class LoginForm {
  /**
   * Returns a WebDriverIO element based on the provided parameter.
   *
   * The parameter corresponds to a key in the `selectors` object, which defines the locators for different form elements.
   *
   * @param {string} param - The key to access the corresponding selector in the `selectors` object.
   * @returns {WebdriverIO.Element} The WebDriverIO element corresponding to the provided parameter.
   */
  elements(param) {
    const selectors = {
      userInput: "//input[@id='user-name']",
      passInput: "//input[@id='password']",
      loginButton: "//input[@id='login-button']",
      errorMessage: "//div[contains(@class, 'error-message-container') and contains(@class, 'error')]//h3[@data-test='error']"
    };

    return $(selectors[param]);
  }
}

module.exports = LoginForm;

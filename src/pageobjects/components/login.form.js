class LoginForm {
  elements(param) {
    const selectors = {
      usernameInput: "//input[@id='user-name']",
      passwordInput: "//input[@id='password']",
      loginButton: "//input[@id='login-button']",
      errorMessage: "//div[contains(@class, 'error-message-container') and contains(@class, 'error')]//h3[@data-test='error']"
    };

    return $(selectors[param]);
  }
}

module.exports = LoginForm;

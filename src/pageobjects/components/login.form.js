class LoginForm {
  elements(param) {
    const selectors = {
      usernameInput: "//input[@id='user-name']",
      passwordInput: "//input[@id='password']",
      loginButton: "//input[@id='login-button']",
      errorMessage: "//h3[@data-test='error']"
    };

    return $(selectors[param]);
  }
}

module.exports = LoginForm;

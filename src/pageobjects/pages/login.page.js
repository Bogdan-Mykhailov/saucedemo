const LoginForm = require('../components/login.form');
const BasePage = require('./base.page');

class LoginPage extends BasePage {
  url = 'https://www.saucedemo.com/';

  constructor() {
    super();
    this.loginForm = new LoginForm();
  }

  get usernameField() {
    return this.loginForm.elements('usernameInput');
  }

  get passwordField() {
    return this.loginForm.elements('passwordInput');
  }

  get loginButton() {
    return this.loginForm.elements('loginButton');
  }

  get errorMessage() {
    return this.loginForm.elements('errorMessage');
  }

  async open() {
    await super.open(this.url);
  }

  async enterUsername(username) {
    await this.usernameField.setValue(username);
  }

  async enterPassword(password) {
    await this.passwordField.setValue(password);
  }

  async setFormFields(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
  }

  async clickOnLoginButton() {
    await this.loginButton.click();
  }
}

module.exports = LoginPage;

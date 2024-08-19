const LoginForm = require('../components/login.form');
const Page = require('./page');
const { url } = require('../../data/dataProvider');
const {browser} = require("@wdio/globals");

class LoginPage extends Page {
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
    await super.open(url.loginPageUrl);
  }

  async enterUsername(username){
    await this.usernameField.setValue(username);
  }

  async enterPassword(password){
    await this.passwordField.setValue(password);
  }

  async setFormFields(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
  }

  async clickOnLoginButton() {
    await this.loginButton.click();
  }

  async clearField(field) {
    await field.click();
    const isMac = process.platform === 'darwin';

    if (isMac) {
      await browser.keys(['Meta', 'a']);
    } else {
      await browser.keys(['Control', 'a']);
    }

    await browser.keys('Delete');
  }
}

module.exports = LoginPage;

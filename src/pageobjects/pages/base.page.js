const {browser} = require("@wdio/globals");

class BasePage {
  async open(path) {
    await browser.url(path);
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

module.exports = BasePage;

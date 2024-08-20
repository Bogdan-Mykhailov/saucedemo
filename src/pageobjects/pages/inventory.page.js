const Page = require('./base.page');

class InventoryPage extends Page {
  url = 'https://www.saucedemo.com/inventory.html';
  title = "//div[@class='app_logo']";

  get pageTitle() {
    return $(this.title);
  }
}

module.exports = InventoryPage;

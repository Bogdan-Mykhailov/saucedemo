const Page = require('./page');

class InventoryPage extends Page {
  get pageTitle() {
    return $("//div[@class='app_logo']");
  }
}

module.exports = InventoryPage;

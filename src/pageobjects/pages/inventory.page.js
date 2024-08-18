const Page = require('./page');
/**
 * This class extends the base `Page` class and provides methods and selectors
 * specific to the inventory page, such as checking the page title.
 */
class InventoryPage extends Page {
  /**
   * Gets the page title element.
   *
   * @returns {WebdriverIO.Element} The page title element.
   */
  get pageTitle() {
    return $("//div[@class='app_logo']");
  }
}

module.exports = InventoryPage;

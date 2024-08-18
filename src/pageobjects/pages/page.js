const {browser} = require("@wdio/globals");

/**
* Main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    return browser.url(path)
  }
}

module.exports = Page;

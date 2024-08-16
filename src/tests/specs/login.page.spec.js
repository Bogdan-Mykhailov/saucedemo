const LoginPage = require('../../pageobjects/pages/login.page');
const InventoryPage = require('../../pageobjects/pages/inventory.page');
const setFormFields = require('../../utils/helpers')
const {
  PAGE_TITLE,
  VALID_PASSWORD,
  VALID_USERNAME,
  RANDOM_USERNAME,
  ERROR_USERNAME_REQUIRED,
  ERROR_PASSWORD_REQUIRED,
  INVENTORY_PAGE_URL
} = require('../../utils/constants');

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe('Saucedemo login form tests', () => {
  before(async () => {
    await loginPage.open();
  })

  it('should display "Username is required" error message if empty username and password fields', async () => {
    /**
     * Given "Username" and "Password" data.
     */
    await setFormFields(RANDOM_USERNAME, VALID_PASSWORD);
    expect(await loginPage.username.getValue()).toEqual(RANDOM_USERNAME);
    expect(await loginPage.password.getValue()).toEqual(VALID_PASSWORD);

    /**
     * When clear the fields.
     */
    await loginPage.clearInputs();
    expect(await loginPage.username.getValue()).toEqual('');
    expect(await loginPage.password.getValue()).toEqual('');

    /**
     * When empty fields and button login was clicked
     */
    await loginPage.buttonClick();

    /**
     * Then error message "Username is required" should be displayed
     */
    await loginPage.errorMessage.waitForDisplayed();
    expect(await loginPage.errorMessage.isDisplayed()).toBe(true);
    expect(await loginPage.errorMessage.getText()).toContain(ERROR_USERNAME_REQUIRED);
  })


  it('should display "Password is required" error message if empty password field', async () => {
    /**
     * Given "Username" and "Password" data.
     */
    await setFormFields(VALID_USERNAME, VALID_PASSWORD);
    expect(await loginPage.username.getValue()).toEqual(VALID_USERNAME);
    expect(await loginPage.password.getValue()).toEqual(VALID_PASSWORD);

    /**
     * When username field was filled with valid data.
     */
    await loginPage.username.setValue(VALID_USERNAME);
    expect(await loginPage.username.getValue()).toEqual(VALID_USERNAME);

    /**
     * When clear the password field and login button was clicked.
     */
    await loginPage.password.clearValue();
    expect(await loginPage.password.getValue()).toEqual('');
    await loginPage.buttonClick();

    /**
     * Then error message "Password is required" should be displayed.
     */
    await loginPage.errorMessage.waitForDisplayed();
    expect(await loginPage.errorMessage.isDisplayed()).toBe(true);
    expect(await loginPage.errorMessage.getText()).toContain(ERROR_PASSWORD_REQUIRED);
  });

  it('should login when passing valid credentials in to the Username & Password fields', async () => {
    /**
     * Given valid "Username" and "Password" data.
     */
    await loginPage.username.setValue(VALID_USERNAME);
    await loginPage.password.setValue(VALID_PASSWORD);

    /**
     * When login button was clicked
     */
    await loginPage.buttonClick();

    /**
     * Then redirect to correct page and dashboard should show valid title
     */
    expect(await browser.getUrl()).toEqual(INVENTORY_PAGE_URL);
    await inventoryPage.pageTitle.waitForDisplayed();
    expect(await inventoryPage.pageTitle.getText()).toEqual(PAGE_TITLE);
  });
})

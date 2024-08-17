const {
  PAGE_TITLE,
  VALID_PASSWORD,
  VALID_USERNAME,
  ERROR_PASSWORD_REQUIRED,
  ERROR_USERNAME_REQUIRED,
  INVALID_USERNAME,
  INVENTORY_PAGE_URL,
  LOGIN_PAGE_URL
} = require('../utils/constants');

module.exports = {
  username: {
    invalidUsername: INVALID_USERNAME,
    validUsername: VALID_USERNAME,
  },
  errorMessage: {
    passwordError: ERROR_PASSWORD_REQUIRED,
    usernameError: ERROR_USERNAME_REQUIRED,
  },
  password: {
    validPassword: VALID_PASSWORD,
  },
  url: {
    loginPageUrl: LOGIN_PAGE_URL,
    inventoryPageUrl: INVENTORY_PAGE_URL,
  },
  pageTitle: {
    inventoryPageTitle: PAGE_TITLE,
  },
}

module.exports = {
  username: {
    validUsernames: [
      'standard_user',
      'locked_out_user',
      'problem_user',
      'performance_glitch_user',
      'error_user',
      'visual_user'
    ],
  },
  errorMessage: {
    usernameError: 'Username is required',
    passwordError: 'Password is required',
    lockedOutUsernameError: 'Sorry, this user has been locked out',
  },
  password: {
    validPassword: 'secret_sauce',
  },
  url: {
    loginPageUrl: 'https://www.saucedemo.com/',
    inventoryPageUrl: 'https://www.saucedemo.com/inventory.html',
  },
  pageTitle: {
    inventoryPageTitle: 'Swag Labs',
  },
}

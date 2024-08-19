# Saucedemo Login Page Tests

## Task Description

This repository contains automated tests for the Saucedemo login page. The tests are implemented using WebDriverIO and are designed to verify the functionality of the login form under different scenarios.

### Launch URL
- [Saucedemo Login Page](https://www.saucedemo.com/)

### Test Cases

#### UC-1: Test Login Form with Empty Credentials

- **Description**: This test verifies that the login form displays the correct error message when both username and password fields are empty.
- **Steps**:
   1. Type any credentials into the "Username" and "Password" fields.
   2. Clear the inputs.
   3. Click the "Login" button.
   4. Check that the error message "Username is required" is displayed.

#### UC-2: Test Login Form with Credentials by Passing Username

- **Description**: This test verifies that the login form displays the correct error message when only the password field is empty while the username is filled.
- **Steps**:
   1. Type any credentials in the "Username" field.
   2. Enter a password in the "Password" field.
   3. Clear the "Password" input.
   4. Click the "Login" button.
   5. Check that the error message "Password is required" is displayed.

#### UC-3: Test Login Form with Credentials by Passing Username & Password

- **Description**: This test verifies that users with valid credentials (accepted usernames and password) can successfully log in and view the correct dashboard title.
- **Steps**:
   1. Type valid credentials in the "Username" field from the accepted usernames list.
   2. Enter the password "secret_sauce".
   3. Click the "Login" button.
   4. Validate that the dashboard title is "Swag Labs".

### Test Configuration

- **Test Automation Tool**: WebDriverIO
- **Browsers**: Edge, Firefox, Chrome
- **Locators**: XPath
- **Patterns**: Page Object Model
- **Assertions**: Mocha
- **Logging**: Pino (pino-pretty)

### Test Execution

- **Parallel Execution**: Tests are configured to run in parallel on multiple browsers.
- **Logging**: Logs are captured and can be reviewed to debug test execution.
- **Data Provider**: Tests use different accepted usernames to ensure comprehensive coverage and validate various scenarios.

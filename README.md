# WebDriverIO - Page Object Model - Automation

Design Page Objects and run Tests

## Application Under Test
```bash
http://automationpractice.com/index.php
```

## OS and IDE
```bash
OS : macOS
IDE: Visual Studio Code
```

## Run application

Clone the repository

```bash
git clone https://github.com/JayKishoreDuvvuri/WebdriverIO-CrossBrowser-Test-Automation-Framework
```

Install dependencies

```bash
Install node modules with command:              npm i
install as a devDependency selenium-standalone: npm i -D selenium-standalone
Install web drivers with command:               npx selenium-standalone install 
```

Start Selenium Server

```bash
Start selenium server before running the test with command : npm run selenium-server (OR) npx selenium-standalone start
```

Clean Allure Report

```bash
Run on Terminal : npm run clean
```

Run test

```bash
npx wdio wdio.conf.js (OR) npx wdio          #For Full Test Suite Execution Sequentially (OR) Parallel
npm run test (OR) npm test                   #For sequential Execution of tests
npm test -- --spec ./test/homePage.test.js   #For running individual test
(OR)
npm test -- --spec=addToCart.test.js         #For running individual test
```

Folder Structure

    ├── ...
    │
    ├── pages                               # Generic functionality for tests
    │   |
    │   ├── basePage.js                     # Base page testing functionality
    │   ├── landingPage.js                  # Landing page testing functionality
    │
    │
    ├── test                                # Test suite
    │    ├── addToCart.test.js              # Automated Test Script
    │    ├── checkTotalPrice.testjs         # Automated Test Script
    │    ├── productNames.test.js           # Automated Test Script
    │    ├── toggleProductColour.test.js    # Automated Test Script
    │
    │
    ├── utils                               # Utility files for testing
    │    ├──locators.js                     # HTML and CSS identifier for elements to test
    │
    │
    ├── allure-results                      # allure generate {Directory} [on terminal]
    │
    ├── allure-report                       # allure open                 [on terminal]
    │
    └─── errorShots                         # Screenshot captured for failed tests

Generate Allure Test Report

Run on Terminal
```bash
npm run allure-generate
npm run generate-report
```

const locators = require("./utils/locators");

exports.config = {

  runner: "local",

  specs: ["./test/**/*.js"],

  exclude: [
  ],
 
  maxInstances: 8,
  
  capabilities: [
   
    {
      maxInstances: 4,
      browserName: "chrome",
    },

    {
      maxInstances: 4,
      browserName: "firefox",
    },

    // {
    //   maxInstances: 4,
    //   browserName: "MicrosoftEdge",
    // },

    // {
    //   maxInstances: 4,
    //   browserName: "internet explorer",
    // },
  ],
 
  logLevel: "trace",
  
  bail: 0,
 
  baseUrl: locators.baseUrl,
  
  waitforTimeout: locators.waitforTimeout,
 
  connectionRetryTimeout: locators.connectionRetryTimeout,
  
  connectionRetryCount: locators.connectionRetryCount,
 
  services: ["selenium-standalone"],
  port: 9999,
  seleniumArgs: {
    seleniumArgs: ["-port", "9999"],
  },
  
  framework: "mocha",
  
  reporters: [
    [
      "allure",
      {
        // test results will generate in the directory mentioned below
        outputDir: "allure-results",
      },
    ],
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: locators.mochaTimeout,
    compilers: ["js:@babel/register"],
  },
 
  before: function (capabilities, specs) {
    require("@babel/register");

    const chai = require("chai");
    const chaiWebdriver = require("chai-webdriverio").default;

    chai.use(chaiWebdriver(browser));

    global.assert = chai.assert;
    global.should = chai.should;
    global.expect = chai.expect;

    browser.addCommand("getUrlAndTitle", async function () {
      return {
        url: await this.getUrl(),
        title: await this.getTitle(),
      };
    });

    browser.addCommand("waitAndClick", async function (selector) {
      try {
        const element = await $(selector);
        await element.waitForExist();
        await element.waitForEnabled();
        await browser.execute("arguments[0].click();", element);
        //await browser.execute(() => document.querySelector('#submit').click());
      } catch (Error) {
        throw new Error("Could not click on selector:" + (await $(selector)));
      }
    });

    browser.addCommand("waitAndSendKeys", async function (selector, keys) {
      try {
        const element = await $(selector);
        await element.waitForExist();
        await element.setValue(keys);
      } catch (Error) {
        throw new Error(
          "Could not send keys:" +
            (await $(keys)) +
            ", using selector:" +
            (await $(selector))
        );
      }
    });

    browser.addCommand("scrollIntoView", async function (selector) {
      try {
        const element = await $(selector);
        await element.waitForExist();
        await browser.execute("arguments[0].scrollIntoView(true);", element);
      } catch (Error) {
        throw new Error(
          "Could not Scroll into Selector:",
          +(await $(selector))
        );
      }
    });
  },
  
  afterTest: function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (error) {
      var name = "ERROR-" + Date.now();
      browser.saveScreenshot("./errorShots/" + name + ".png");
    }
  },
};

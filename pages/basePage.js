class basePage {
  constructor(path, timeout) {
    this.path = path;
    this.timeout = timeout;
  }

  async open() {
    if (!this.path) {
      browser.url("/");
    } else {
      browser.url(this.path);
    }
  }

  //Wait for the Page to Load
  async waitForPageToLoad(elementSelector) {
    browser.maximizeWindow();
    const selector = await $(elementSelector);
    await selector.waitForDisplayed();
    const isDisplayed = await selector.isDisplayed();
    if (!isDisplayed) {
      return await $(elementSelector).waitForDisplayed();
    }
  }

  //wait and find a specific element with it's ID Selector
  async findById(id) {
    const selectorId = await $(id);
    await selectorId.waitForExist();
    await selectorId.waitForDisplayed();
    return selectorId;
  }

  //wait and find a specific element with it's CSS Selector
  async findByCss(css) {
    const selectorCss = await $(css);
    await selectorCss.waitForExist();
    await selectorCss.waitForDisplayed();
    return selectorCss;
  }

  //wait and find a specific element with it's Classname
  async findByClassName(className) {
    const selectorClassName = await $(className);
    await selectorClassName.waitForExist();
    await selectorClassName.waitForDisplayed();
    return selectorClassName;
  }

  // wait and find a specific element with it's XPath
  async findByXPath(xpath) {
    const selectorXPath = await $(xpath);
    await selectorXPath.waitForExist();
    await selectorXPath.waitForDisplayed();
    return selectorXPath;
  }

  //wait and find an array of elements with it's XPath
  async findAllByXPath(xpath) {
    const selectorsByXPath = await $$(xpath);
    await selectorsByXPath.waitForExist();
    await selectorsByXPath.waitForDisplayed();
    return selectorsByXPath;
  }

  // Wait for Element is Displayed
  async elementIsDisplayed(selector) {
    await selector.waitForExist();
    await selector.waitForDisplayed();
    const isDisplayed = await selector.isDisplayed();
    return await browser.waitUntil(async function () {
      return isDisplayed;
    }, this.timeout);
  }

  // Wait for Element is Enabled
  async elementIsEnabled(selector) {
    await selector.waitForExist();
    await selector.waitForEnabled();
    const isEnabled = await selector.isEnabled();
    return await browser.waitUntil(async function () {
      return isEnabled;
    }, this.timeout);
  }

  // Wait for Element is Present
  async elementIsPresent(selector) {
    await selector.waitForExist();
    await selector.waitForDisplayed();
    const isPresent = await selector.isExisting();
    return await browser.waitUntil(async function () {
      return isPresent;
    }, this.timeout);
  }

  //Get Text of the element
  async getElementText(element) {
    await element.waitForExist();
    await element.waitForDisplayed();
    return element.getText();
  }
}
export default basePage;

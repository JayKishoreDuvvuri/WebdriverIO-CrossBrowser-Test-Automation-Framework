import basePage from "./basePage";
import locators from "../utils/locators";

const baseUrl = locators.baseUrl,
  landingPageImage = locators.landingPageImage,
  landingPageTitle = locators.landingPageTitle,
  fadedShortSleeveTshirts = locators.fadedShortSleeveTshirts,
  blouse = locators.blouse,
  printedDress = locators.printedDress,
  printedDressTwo = locators.printedDressTwo,
  printedSummerDress = locators.printedSummerDress,
  printedSummerDressTwo = locators.printedSummerDressTwo,
  printedChiffonDress = locators.printedChiffonDress,
  addToCartButton = locators.addToCartButton,
  elementText = locators.elementText,
  cartAddedMessage = locators.cartAddedMessage,
  successMessage = locators.successMessage,
  closeBtn = locators.closeBtn,
  itemCount = locators.itemCount,
  colourSelected = locators.colourSelected,
  totalPrice = locators.totalPrice,
  dressTitle = locators.dressTitle,
  timeout = locators.timeout;

class landingPage extends basePage {
  constructor() {
    super(baseUrl, timeout);
  }

  async open() {
    super.open();
    super.waitForPageToLoad(landingPageImage);
  }

  async fadedShortSleeveTshirts() {
    const productOne = await this.findByXPath(fadedShortSleeveTshirts);
    const isDisplayed = await this.elementIsDisplayed(productOne);
    return isDisplayed;
  }

  async blouse() {
    const productTwo = await this.findByXPath(blouse);
    const isDisplayed = await this.elementIsDisplayed(productTwo);
    return isDisplayed;
  }

  async printedDress() {
    const productThree = await this.findByXPath(printedDress);
    const isDisplayed = await this.elementIsDisplayed(productThree);
    return isDisplayed;
  }

  async printedDressTwo() {
    const productFour = await this.findByXPath(printedDressTwo);
    const isDisplayed = await this.elementIsDisplayed(productFour);
    return isDisplayed;
  }

  async printedSummerDress() {
    const productFive = await this.findByXPath(printedSummerDress);
    const isDisplayed = await this.elementIsDisplayed(productFive);
    return isDisplayed;
  }

  async printedSummerDressTwo() {
    const productSix = await this.findByXPath(printedSummerDressTwo);
    const isDisplayed = await this.elementIsDisplayed(productSix);
    return isDisplayed;
  }

  async printedChiffonDress() {
    const productSeven = await this.findByXPath(printedChiffonDress);
    const isDisplayed = await this.elementIsDisplayed(productSeven);
    return isDisplayed;
  }

  async addToCart() {
    const addProductToCart = await this.findByXPath(addToCartButton);
    await this.elementIsDisplayed(addProductToCart);
    const enabledState = await this.elementIsEnabled(addProductToCart);
    const fieldText = await addProductToCart.getText();
    const cartResult = await browser.waitUntil(async function () {
      return {
        text: fieldText,
        state: enabledState,
      };
    }, timeout);
    return cartResult;
  }

  async cartMessage() {
    const productAddedMessage = await this.findByXPath(cartAddedMessage);
    const isDisplayed = await this.elementIsDisplayed(productAddedMessage);
    return isDisplayed;
  }

  async successMessage() {
    const productSuccessMessage = await this.findByXPath(successMessage);
    const isDisplayed = await this.elementIsDisplayed(productSuccessMessage);
    return isDisplayed;
  }

  async getItemCount() {
    const itemsCount = await this.findByCss(itemCount);
    const itemText = await this.getElementText(itemsCount);
    return itemText;
  }

  async colourSelected() {
    const selectedColour = await this.findByXPath(colourSelected);
    const isSelected = await this.elementIsPresent(selectedColour);
    return isSelected;
  }

  async getItemCount() {
    const itemsCount = await this.findByCss(itemCount);
    const itemText = await this.getElementText(itemsCount);
    return itemText;
  }

  async getTotalPrice() {
    const itemPrice = await this.findByCss(totalPrice);
    const price = await this.getElementText(itemPrice);
    return price;
  }
  async dressTitle() {
    const nameOfDress = await this.findByCss(dressTitle);
    const isDisplayed = await this.elementIsDisplayed(nameOfDress);
    return isDisplayed;
  }
}
export default new landingPage();

import landingPage from "../pages/landingPage";
import locators from "../utils/locators";

const baseUrl = locators.baseUrl,
  landingPageTitle = locators.landingPageTitle,
  printedSummerDress = locators.printedSummerDress,
  quantityWanted = locators.quantityWanted,
  numberOfItems = locators.numberOfItems,
  addToCartButton = locators.addToCartButton,
  cart = locators.cart,
  closeBtn = locators.closeBtn,
  totalProductPrice = locators.totalProductPrice;

// ### 1. Launch the Application
// ### 2. Click on the 5th Product with 5% discount from the list
// ### 3. Add quantity as 5 items to the Cart
// ### 4. Check the Total Price of the products selected

describe("Check the Total Price of the Product from the Cart", function () {
  before(async function () {
    await landingPage.open();
  });

  it("Check the title and url of the Landing Page", async function () {
    const landingpage = await browser.getUrlAndTitle();
    expect(landingpage.title).to.equal(landingPageTitle);
    expect(landingpage.url).to.contains(baseUrl);
  });

  it("click on the 5th Product with 5% discunt in the list", async function () {
    const isDisplayed = await landingPage.printedSummerDress();
    await browser.waitAndClick(printedSummerDress);
    expect(isDisplayed).to.be.true;
  });

  it("Add quantity as 5 for the product", async function () {
    let isDisplayed = await landingPage.dressTitle();
    expect(isDisplayed).to.be.true;
    await browser.waitAndSendKeys(quantityWanted, numberOfItems);
    await browser.waitAndClick(addToCartButton);
    await browser.waitAndClick(closeBtn);
    let getProductCount = await landingPage.getItemCount();
    expect(getProductCount).to.equal(numberOfItems);
  });

  it("Check whether the Total price is accurate from the Cart", async function () {
    await browser.waitAndClick(cart);
    let productPrice = await landingPage.getTotalPrice();
    expect(productPrice).to.equal(totalProductPrice);
  });
});

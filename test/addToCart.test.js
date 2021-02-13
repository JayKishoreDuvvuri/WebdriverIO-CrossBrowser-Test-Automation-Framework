import landingPage from "../pages/landingPage";
import locators from "../utils/locators";

const baseUrl = locators.baseUrl,
  landingPageTitle = locators.landingPageTitle,
  addToCartButton = locators.addToCartButton,
  elementText = locators.elementText,
  printedChiffonDress = locators.printedChiffonDress,
  productCount = locators.productCount,
  closeBtn = locators.closeBtn;

// ### 1. Launch the Application
// ### 2. Select the Product
// ### 3. Add to Cart
// ### 4. Verify the message displayed that the product is added to Cart
// ### 5. Check the Product Count of the Cart

describe("Add to Cart", function () {
  before(async function () {
    await landingPage.open();
  });

  it("Check the title and url of the Landing Page", async function () {
    const landingpage = await browser.getUrlAndTitle();
    expect(landingpage.title).to.equal(landingPageTitle);
    expect(landingpage.url).to.contains(baseUrl);
  });

  it("click on 20% discunt listed Item", async function () {
    const isDisplayed = await landingPage.printedChiffonDress();
    await browser.waitAndClick(printedChiffonDress);
    expect(isDisplayed).to.be.true;
  });

  it("Check whether the Shopping Cart is enabled and click item to add to Cart", async function () {
    let result = await landingPage.addToCart();
    expect(result.state).to.be.true;
    expect(result.text).to.equal(elementText);
    await browser.waitAndClick(addToCartButton);
  });

  it("Verify whether the product added to Cart message is displayed", async function () {
    let isDisplayed = await landingPage.cartMessage();
    expect(isDisplayed).to.equal(true);
    let isVisible = await landingPage.successMessage();
    expect(isVisible).to.equal(true);
  });

  it("Verify the product count from the Cart", async function () {
    await browser.waitAndClick(closeBtn);
    let getProductCount = await landingPage.getItemCount();
    expect(getProductCount).to.equal(productCount);
  });
});

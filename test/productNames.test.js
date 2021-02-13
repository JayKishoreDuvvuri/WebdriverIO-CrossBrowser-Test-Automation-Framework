import landingPage from "../pages/landingPage";
import locators from "../utils/locators";

const baseUrl = locators.baseUrl,
  landingPageTitle = locators.landingPageTitle;

// ### 1. Launch the Application
// ### 2. Arrive on the Landing Page
// ### 3. Verify the product names are visible
// ### 4. Print the Name of Products in to the Test Reort

describe("Check Product Names Visible and Print it to Test Report", function () {
  before(async function () {
    await landingPage.open();
  });

  it("Check the title and url of the Landing Page", async function () {
    const landingpage = await browser.getUrlAndTitle();
    expect(landingpage.title).to.equal(landingPageTitle);
    expect(landingpage.url).to.contains(baseUrl);
  });

  it("Check the product name: Faded Short Sleeve T-shirts is visible", async function () {
    const isDisplayed = await landingPage.fadedShortSleeveTshirts();
    expect(isDisplayed).to.equal(true);
  });

  it("Check the product name: Blouse is visible", async function () {
    const isDisplayed = await landingPage.blouse();
    expect(isDisplayed).to.equal(true);
  });

  it("Check the product name: Printed Dress is visible", async function () {
    const isDisplayed = await landingPage.printedDress();
    expect(isDisplayed).to.equal(true);
  });

  it("Check the product name: Printed Dress Two is visible", async function () {
    const isDisplayed = await landingPage.printedDressTwo();
    expect(isDisplayed).to.equal(true);
  });

  it("Check the product name: Printed Summer Dress is visible", async function () {
    const isDisplayed = await landingPage.printedSummerDress();
    expect(isDisplayed).to.equal(true);
  });

  it("Check the product name: Printed Summer Dress Two is visible", async function () {
    const isDisplayed = await landingPage.printedSummerDressTwo();
    expect(isDisplayed).to.equal(true);
  });

  it("Check the product name: Printed Chiffon Dress is visible", async function () {
    const isDisplayed = await landingPage.printedChiffonDress();
    expect(isDisplayed).to.equal(true);
  });
});

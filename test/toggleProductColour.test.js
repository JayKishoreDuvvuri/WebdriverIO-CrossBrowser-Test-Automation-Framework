import landingPage from "../pages/landingPage";
import locators from "../utils/locators";

const baseUrl = locators.baseUrl,
  landingPageTitle = locators.landingPageTitle,
  printedSummerDress = locators.printedSummerDress,
  colourBlack = locators.colourBlack,
  colourOrange = locators.colourOrange,
  colourBlue = locators.colourBlue,
  colourYellow = locators.colourYellow,
  colourSelected = locators.colourSelected,
  homePageImage = locators.homePageImage,
  title = locators.title,
  navigateUrl = locators.navigateUrl;

// ### 1. Launch the Application
// ### 2. Click on the 5th Product with 5% discount from the list
// ### 3. Toggle between the Colours for this selected product
// ### 4. Verify the image is updated when selecting different colours
// ### 5. Click the Logo at the top and Navigate to Landing Page

describe("Toggle between the colours of the Product", function () {
  before(async function () {
    await landingPage.open();
  });

  it("Check the title and url of the Landing Page", async function () {
    const landingpage = await browser.getUrlAndTitle();
    expect(landingpage.title).to.equal(landingPageTitle);
    expect(landingpage.url).to.contains(baseUrl);
  });

  it("click on the 5th Product with 5% discount in the list", async function () {
    const isDisplayed = await landingPage.printedSummerDress();
    await browser.waitAndClick(printedSummerDress);
    expect(isDisplayed).to.be.true;
  });

  it("Check when selecting black colour the image is updated", async function () {
    await browser.waitAndClick(colourBlack);
    let isSelected = await landingPage.colourSelected();
    expect(isSelected).to.be.true;
  });

  it("Check when selecting orange colour the image is updated", async function () {
    await browser.waitAndClick(colourOrange);
    let isSelected = await landingPage.colourSelected();
    expect(isSelected).to.be.true;
  });

  it("Check when selecting blue colour the image is updated", async function () {
    await browser.waitAndClick(colourBlue);
    let isSelected = await landingPage.colourSelected();
    expect(isSelected).to.be.true;
  });

  it("Check when selecting yellow colour the image is updated", async function () {
    await browser.waitAndClick(colourYellow);
    let isSelected = await landingPage.colourSelected();
    expect(isSelected).to.be.true;
  });

  it("Navigate to Landing Page", async function () {
    await browser.waitAndClick(homePageImage);
    expect(baseUrl).to.equal(navigateUrl);
    expect(title).to.equal(landingPageTitle);
  });
});

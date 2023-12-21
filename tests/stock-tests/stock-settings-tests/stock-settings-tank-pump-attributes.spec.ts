import { Page, test } from '@playwright/test';
import { LoginPage } from '../../../page-objects/login-page';
// import data from "../../../testdata/stocks/stock-settings.json"
const data = require(`../../../testdata/${process.env.ENV || 'uat'}/stocks/stock-settings.json`) as Record<string, any>;
import { DashboardPage } from '../../../page-objects/dashboard-page';
import { StockTanksetupPage } from '../../../page-objects/stock-pages/stock-settings-pages/stock-settings-tanksetup-page';
import { StockTankAndPumpAttributesPage } from '../../../page-objects/stock-pages/stock-settings-pages/stock-settings-tank-pump-attributes-page';
import { StockLandingPage } from '../../../page-objects/stock-pages/stock-landing-pages/stock-landing-page';
//Demo test case
test("TC_Stock_028 Verify that added tank attribute should be shown inside Add Tank & pump detailspopup page @prod", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const stockLandingPage: StockLandingPage = new StockLandingPage(page);
    const stockTanksetupPage: StockTanksetupPage = new StockTanksetupPage(page, data['TC_Stock_021'].expectedTankNo, '');
    const stockTankAndPumpAttributesPage: StockTankAndPumpAttributesPage = new StockTankAndPumpAttributesPage(page, data['TC_Stock_028'].expectedTankAttributeName, '');

    await loginPage.gotoLoginPage(data['TC_Stock_028'].url);

    await loginPage.loginToApplication(data['TC_Stock_028'].loginUserName, data['TC_Stock_028'].companyCode, data['TC_Stock_028'].loginPassword);

    await dashboardPage.clickOnStockModule();

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.clickOntankAndPumpAttributesIcon();

    await stockTankAndPumpAttributesPage.verifyAdaButtonIsPresent();

    await stockTankAndPumpAttributesPage.clickOnAddButton();

    await stockTankAndPumpAttributesPage.enterTankAttributeName(data['TC_Stock_028'].expectedTankAttributeName);

    await stockTankAndPumpAttributesPage.clickOnSaveButton();

    // await stockTankAndPumpAttributesPage.verifyRecordIsSavedSuccessfully(data['TC_Stock_028'].expectedSuccessMsg);

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.clickOnTankAndPumpSetupIcon();

    await stockTanksetupPage.verifyAddButtonIsDisabled();

    await stockTanksetupPage.enterValidDataInSiteNameDropdown(data['TC_Stock_028'].siteName);

    await stockTanksetupPage.verifySiteNumberIsGeneratedAutomatically();

    await stockTanksetupPage.clickOnAddButton();

    await stockTanksetupPage.clickOnContinueButton();

    await stockTankAndPumpAttributesPage.verifyIsTankAttributeIsAdded(data['TC_Stock_028'].expectedTankAttributeName);
});

test.only("TC_Stock_029 Verify that LIU should able to edit the tank attribute successfully.and updated details should be shown on stock>settings>tank and pump details popup page @prod", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const stockLandingPage: StockLandingPage = new StockLandingPage(page);
    const stockTanksetupPage: StockTanksetupPage = new StockTanksetupPage(page, data['TC_Stock_021'].expectedTankNo, '');
    const stockTankAndPumpAttributesPage: StockTankAndPumpAttributesPage = new StockTankAndPumpAttributesPage(page, data['TC_Stock_028'].expectedTankAttributeName, '');

    await loginPage.gotoLoginPage(data['TC_Stock_029'].url);

    await loginPage.loginToApplication(data['TC_Stock_029'].loginUserName, data['TC_Stock_029'].companyCode, data['TC_Stock_029'].loginPassword);

    await dashboardPage.clickOnStockModule();

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.clickOntankAndPumpAttributesIcon();

    await stockTankAndPumpAttributesPage.verifyAdaButtonIsPresent();

    await stockTankAndPumpAttributesPage.clickOnAddButton();

    await stockTankAndPumpAttributesPage.enterTankAttributeName(data['TC_Stock_029'].expectedTankAttributeName);

    await stockTankAndPumpAttributesPage.clickOnSaveButton();

    // await stockTankAndPumpAttributesPage.verifyRecordIsSavedSuccessfully(data['TC_Stock_029'].expectedSuccessMsg);

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.clickOnTankAndPumpSetupIcon();

    await stockTanksetupPage.verifyAddButtonIsDisabled();

    await stockTanksetupPage.enterValidDataInSiteNameDropdown(data['TC_Stock_029'].siteName);

    await stockTanksetupPage.verifySiteNumberIsGeneratedAutomatically();

    await stockTanksetupPage.clickOnAddButton();

    await stockTanksetupPage.clickOnContinueButton();

    await stockTankAndPumpAttributesPage.verifyIsTankAttributeIsAdded(data['TC_Stock_029'].expectedTankAttributeName);

    await stockTanksetupPage.clickOnCancelButton();

    await dashboardPage.clickOnStockSettings();

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.clickOntankAndPumpAttributesIcon();

    await stockTankAndPumpAttributesPage.clickOnEditButton();

    await stockTankAndPumpAttributesPage.editTankAttributeName(data['TC_Stock_029'].updatedTankAttributeName);

    await stockTankAndPumpAttributesPage.clickOnSaveButton();

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.clickOnTankAndPumpSetupIcon();

    await stockTanksetupPage.enterValidDataInSiteNameDropdown(data['TC_Stock_029'].siteName);

    await stockTanksetupPage.clickOnAddButton();

    await stockTanksetupPage.clickOnContinueButton();

    await stockTankAndPumpAttributesPage.verifyIsUpdatedTankAttributeIsAdded(data['TC_Stock_029'].updatedTankAttributeName);
});
import { Page, test } from '@playwright/test';
import { LoginPage } from '../../../page-objects/login-page';
// import data from "../../../testdata/stocks/stock-settings.json"
const data = require(`../../../testdata/${process.env.ENV || 'uat'}/stocks/stock-settings.json`) as Record<string, any>;
import { DashboardPage } from '../../../page-objects/dashboard-page';
import { StockTanksetupPage } from '../../../page-objects/stock-pages/stock-settings-pages/stock-settings-tanksetup-page';
import { StockLandingPage } from '../../../page-objects/stock-pages/stock-landing-pages/stock-landing-page';

test("TC_Stock_013 Verify that LIU Should be able to add and save Tank Setup Details successfully,If tank is enabled @prod", async ({ page }) => 
{
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const stockLandingPage:StockLandingPage=new StockLandingPage(page);
    const stockTanksetupPage:StockTanksetupPage=new StockTanksetupPage(page, data['TC_Stock_013'].expectedTankNo,'');

    await loginPage.gotoLoginPage(data['TC_Stock_013'].url);

    await loginPage.loginToApplication(data['TC_Stock_013'].loginUserName, data['TC_Stock_013'].companyCode, data['TC_Stock_013'].loginPassword);
  
    await dashboardPage.clickOnStockModule();

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.clickOnTankAndPumpSetupIcon();

    await stockTanksetupPage.verifyAddButtonIsDisabled();

    await stockTanksetupPage.enterValidDataInSiteNameDropdown(data['TC_Stock_013'].siteName);

    await stockTanksetupPage.verifySiteNumberIsGeneratedAutomatically();

    await stockTanksetupPage.clickOnAddButton();

    await stockTanksetupPage.clickOnContinueButton();

    await stockTanksetupPage.enterValidDataInTankNumberInputField(data['TC_Stock_013'].expectedTankNo);

    await stockTanksetupPage.selectProductFromDropdown(data['TC_Stock_013'].productName);

    await stockTanksetupPage.selectlLevelTypeFromDropdown(data['TC_Stock_013'].levelType);

    await stockTanksetupPage.enterMinCapacityInQty(data['TC_Stock_013'].minCapacityQty);

    await stockTanksetupPage.enterMaxCapacityInQty(data['TC_Stock_013'].maxCapacityQty);

    await stockTanksetupPage.enterMinCapacityInPercentage(data['TC_Stock_013'].minCapacityPercentage);

    await stockTanksetupPage.enterMaxCapacityInPercentage(data['TC_Stock_013'].maxCapacityPercentage);

    await stockTanksetupPage.enterLowStockMinLevelInQty(data['TC_Stock_013'].minLevelQty);

    await stockTanksetupPage.enterLowStockMaxLevelInQty(data['TC_Stock_013'].maxLevelQty);

    await stockTanksetupPage.enterLowStockMinLevelInPercentage(data['TC_Stock_013'].minLevelPercentage);

    await stockTanksetupPage.enterLowStockMaxLevelInPercentage(data['TC_Stock_013'].maxLevelPercentage);

    await stockTanksetupPage.verifySaveButtonIsPresent();

    await stockTanksetupPage.clickOnSaveButton();

    await stockTanksetupPage.enterValidDataInTankNoFilter(data['TC_Stock_013'].expectedTankNo);

    await stockTanksetupPage.verifyRecordIsAddedSuccessfully();

    await dashboardPage.clickOnStockLevels();

    await stockTanksetupPage.clickOnStockLevelIcon();

    await stockTanksetupPage.enterValidDataInStocklevelSiteNameDropdown(data['TC_Stock_013'].siteName);

    await stockTanksetupPage.clickOnStocklevelAddButton();

    await stockTanksetupPage.verifyTankIsAddedSuccessfullyInStockLevel(data['TC_Stock_013'].expectedTankNo);

});

test("TC_Stock_014 Verify that LIU Should be able to add and save Tank Setup Details successfully,If tank is temporarily disabled @prod", async ({ page }) => 
{
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const stockLandingPage:StockLandingPage=new StockLandingPage(page);
    const stockTanksetupPage:StockTanksetupPage=new StockTanksetupPage(page, data['TC_Stock_014'].expectedTankNo,'');

    await loginPage.gotoLoginPage(data['TC_Stock_014'].url);

    await loginPage.loginToApplication(data['TC_Stock_014'].loginUserName, data['TC_Stock_014'].companyCode, data['TC_Stock_014'].loginPassword);
  
    await dashboardPage.clickOnStockModule();

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.clickOnTankAndPumpSetupIcon();

    await stockTanksetupPage.verifyAddButtonIsDisabled();

    await stockTanksetupPage.enterValidDataInSiteNameDropdown(data['TC_Stock_014'].siteName);

    await stockTanksetupPage.verifySiteNumberIsGeneratedAutomatically();

    await stockTanksetupPage.clickOnAddButton();

    await stockTanksetupPage.clickOnContinueButton();

    await stockTanksetupPage.selectStatusFromDropdown(data['TC_Stock_014'].tankStatus);

    await stockTanksetupPage.enterValidDataInTankNumberInputField(data['TC_Stock_014'].expectedTankNo);

    await stockTanksetupPage.selectProductFromDropdown(data['TC_Stock_014'].productName);

    await stockTanksetupPage.selectlLevelTypeFromDropdown(data['TC_Stock_014'].levelType);

    await stockTanksetupPage.enterMinCapacityInQty(data['TC_Stock_014'].minCapacityQty);

    await stockTanksetupPage.enterMaxCapacityInQty(data['TC_Stock_014'].maxCapacityQty);

    await stockTanksetupPage.enterMinCapacityInPercentage(data['TC_Stock_014'].minCapacityPercentage);

    await stockTanksetupPage.enterMaxCapacityInPercentage(data['TC_Stock_014'].maxCapacityPercentage);

    await stockTanksetupPage.enterLowStockMinLevelInQty(data['TC_Stock_014'].minLevelQty);

    await stockTanksetupPage.enterLowStockMaxLevelInQty(data['TC_Stock_014'].maxLevelQty);

    await stockTanksetupPage.enterLowStockMinLevelInPercentage(data['TC_Stock_014'].minLevelPercentage);

    await stockTanksetupPage.enterLowStockMaxLevelInPercentage(data['TC_Stock_014'].maxLevelPercentage);

    await stockTanksetupPage.verifySaveButtonIsPresent();

    await stockTanksetupPage.clickOnSaveButton();

    await stockTanksetupPage.enterValidDataInTankNoFilter(data['TC_Stock_014'].expectedTankNo);

    await stockTanksetupPage.verifyRecordIsAddedSuccessfully();

    await dashboardPage.clickOnStockLevels();

    await stockTanksetupPage.clickOnStockLevelIcon();

    await stockTanksetupPage.enterValidDataInStocklevelSiteNameDropdown(data['TC_Stock_014'].siteName);

    await stockTanksetupPage.clickOnStocklevelAddButton();

    await stockTanksetupPage.verifyTankIsNotAddedInStockLevel(data['TC_Stock_014'].expectedTankNo);
});

test("TC_Stock_015 Verify that LIU Should be able to add and save Tank Setup Details successfully,If tank is Permanently Decommissioned @prod", async ({ page }) => 
{
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const stockLandingPage:StockLandingPage=new StockLandingPage(page);
    const stockTanksetupPage:StockTanksetupPage=new StockTanksetupPage(page, data['TC_Stock_015'].expectedTankNo,'');

    await loginPage.gotoLoginPage(data['TC_Stock_015'].url);

    await loginPage.loginToApplication(data['TC_Stock_015'].loginUserName, data['TC_Stock_015'].companyCode, data['TC_Stock_015'].loginPassword);
  
    await dashboardPage.clickOnStockModule();

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.clickOnTankAndPumpSetupIcon();

    await stockTanksetupPage.verifyAddButtonIsDisabled();

    await stockTanksetupPage.enterValidDataInSiteNameDropdown(data['TC_Stock_015'].siteName);

    await stockTanksetupPage.verifySiteNumberIsGeneratedAutomatically();

    await stockTanksetupPage.clickOnAddButton();

    await stockTanksetupPage.clickOnContinueButton();

    await stockTanksetupPage.selectStatusFromDropdown(data['TC_Stock_015'].tankStatus);

    await stockTanksetupPage.enterValidDataInTankNumberInputField(data['TC_Stock_015'].expectedTankNo);

    await stockTanksetupPage.selectProductFromDropdown(data['TC_Stock_015'].productName);

    await stockTanksetupPage.selectlLevelTypeFromDropdown(data['TC_Stock_015'].levelType);

    await stockTanksetupPage.enterMinCapacityInQty(data['TC_Stock_015'].minCapacityQty);

    await stockTanksetupPage.enterMaxCapacityInQty(data['TC_Stock_015'].maxCapacityQty);

    await stockTanksetupPage.enterMinCapacityInPercentage(data['TC_Stock_015'].minCapacityPercentage);

    await stockTanksetupPage.enterMaxCapacityInPercentage(data['TC_Stock_015'].maxCapacityPercentage);

    await stockTanksetupPage.enterLowStockMinLevelInQty(data['TC_Stock_015'].minLevelQty);

    await stockTanksetupPage.enterLowStockMaxLevelInQty(data['TC_Stock_015'].maxLevelQty);

    await stockTanksetupPage.enterLowStockMinLevelInPercentage(data['TC_Stock_015'].minLevelPercentage);

    await stockTanksetupPage.enterLowStockMaxLevelInPercentage(data['TC_Stock_015'].maxLevelPercentage);

    await stockTanksetupPage.verifySaveButtonIsPresent();

    await stockTanksetupPage.clickOnSaveButton();

    await stockTanksetupPage.enterValidDataInTankNoFilter(data['TC_Stock_015'].expectedTankNo);

    await stockTanksetupPage.verifyRecordIsAddedSuccessfully();

    await dashboardPage.clickOnStockLevels();

    await stockTanksetupPage.clickOnStockLevelIcon();

    await stockTanksetupPage.enterValidDataInStocklevelSiteNameDropdown(data['TC_Stock_015'].siteName);

    await stockTanksetupPage.clickOnStocklevelAddButton();

    await stockTanksetupPage.verifyTankIsNotAddedInStockLevel(data['TC_Stock_015'].expectedTankNo);

});

test("TC_Stock_016 Verify that LIU should able to edit the tank details successfully @prod", async ({ page }) => 
{
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const stockLandingPage:StockLandingPage=new StockLandingPage(page);
    const stockTanksetupPage:StockTanksetupPage=new StockTanksetupPage(page, data['TC_Stock_016'].expectedTankNo,data['TC_Stock_016'].updatedTankNo);

    await loginPage.gotoLoginPage(data['TC_Stock_016'].url);

    await loginPage.loginToApplication(data['TC_Stock_016'].loginUserName, data['TC_Stock_016'].companyCode, data['TC_Stock_016'].loginPassword);
  
    await dashboardPage.clickOnStockModule();

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.clickOnTankAndPumpSetupIcon();

    await stockTanksetupPage.verifyAddButtonIsDisabled();

    await stockTanksetupPage.enterValidDataInSiteNameDropdown(data['TC_Stock_016'].siteName);

    await stockTanksetupPage.verifySiteNumberIsGeneratedAutomatically();

    await stockTanksetupPage.clickOnAddButton();

    await stockTanksetupPage.clickOnContinueButton();

    await stockTanksetupPage.enterValidDataInTankNumberInputField(data['TC_Stock_016'].expectedTankNo);

    await stockTanksetupPage.selectProductFromDropdown(data['TC_Stock_016'].productName);

    await stockTanksetupPage.selectlLevelTypeFromDropdown(data['TC_Stock_016'].levelType);

    await stockTanksetupPage.enterMinCapacityInQty(data['TC_Stock_016'].minCapacityQty);

    await stockTanksetupPage.enterMaxCapacityInQty(data['TC_Stock_016'].maxCapacityQty);

    await stockTanksetupPage.enterMinCapacityInPercentage(data['TC_Stock_016'].minCapacityPercentage);

    await stockTanksetupPage.enterMaxCapacityInPercentage(data['TC_Stock_016'].maxCapacityPercentage);

    await stockTanksetupPage.enterLowStockMinLevelInQty(data['TC_Stock_016'].minLevelQty);

    await stockTanksetupPage.enterLowStockMaxLevelInQty(data['TC_Stock_016'].maxLevelQty);

    await stockTanksetupPage.enterLowStockMinLevelInPercentage(data['TC_Stock_016'].minLevelPercentage);

    await stockTanksetupPage.enterLowStockMaxLevelInPercentage(data['TC_Stock_016'].maxLevelPercentage);

    await stockTanksetupPage.verifySaveButtonIsPresent();

    await stockTanksetupPage.clickOnSaveButton();

    await stockTanksetupPage.enterValidDataInTankNoFilter(data['TC_Stock_016'].expectedTankNo);

    await stockTanksetupPage.verifyRecordIsAddedSuccessfully();

    await dashboardPage.clickOnStockLevels();

    await stockTanksetupPage.clickOnStockLevelIcon();

    await stockTanksetupPage.enterValidDataInStocklevelSiteNameDropdown(data['TC_Stock_016'].siteName);

    await stockTanksetupPage.clickOnStocklevelAddButton();

    await stockTanksetupPage.verifyTankIsAddedSuccessfullyInStockLevel(data['TC_Stock_016'].expectedTankNo);

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.clickOnTankAndPumpSetupIcon();

    await stockTanksetupPage.enterValidDataInSiteNameDropdown(data['TC_Stock_016'].siteName);   

    await stockTanksetupPage.verifyEditButtonIsPresent();

    await stockTanksetupPage.clickOnEditButton();

    await stockTanksetupPage.clickOnContinueButton();

    await stockTanksetupPage.verifyTankDetailsFieldsAreEditable();

    await stockTanksetupPage.enterupdatedTankNumber(data['TC_Stock_016'].updatedTankNo);

    await stockTanksetupPage.selectProductFromDropdown(data['TC_Stock_016'].updatedProductName);

    await stockTanksetupPage.selectlLevelTypeFromDropdown(data['TC_Stock_016'].updatdLevelType);

    await stockTanksetupPage.enterMinCapacityInQty(data['TC_Stock_016'].updatedMinCapacityQty);

    await stockTanksetupPage.enterMaxCapacityInQty(data['TC_Stock_016'].updatedMaxCapacityQty);

    await stockTanksetupPage.enterMinCapacityInPercentage(data['TC_Stock_016'].updatedMinCapacityPercentage);

    await stockTanksetupPage.enterMaxCapacityInPercentage(data['TC_Stock_016'].updatedMaxCapacityPercentage);

    await stockTanksetupPage.enterLowStockMinLevelInQty(data['TC_Stock_016'].updatedMinLevelQty);

    await stockTanksetupPage.enterLowStockMaxLevelInQty(data['TC_Stock_016'].updatedMaxLevelQty);

    await stockTanksetupPage.enterLowStockMinLevelInPercentage(data['TC_Stock_016'].updatedMinLevelPercentage);

    await stockTanksetupPage.enterLowStockMaxLevelInPercentage(data['TC_Stock_016'].updatedMaxLevelPercentage);

    await stockTanksetupPage.clickOnSaveButton();

    await stockTanksetupPage.enterValidDataInTankNoFilter(data['TC_Stock_016'].updatedTankNo);

    await stockTanksetupPage.verifyRecordIsAddedSuccessfully();

    await dashboardPage.clickOnStockLevels();

    await stockTanksetupPage.clickOnStockLevelIcon();

    await stockTanksetupPage.enterValidDataInStocklevelSiteNameDropdown(data['TC_Stock_016'].siteName);
  
    await stockTanksetupPage.clickOnStocklevelAddButton();

    await stockTanksetupPage.verifyTankIsAddedSuccessfullyInStockLevel(data['TC_Stock_016'].updatedTankNo);

});

test("TC_Stock_017 Verify that LIU should be able to cancel the tank details successfully", async ({ page }) => 
{
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const stockLandingPage:StockLandingPage=new StockLandingPage(page);
    const stockTanksetupPage:StockTanksetupPage=new StockTanksetupPage(page, data['TC_Stock_017'].expectedTankNo,'');

    await loginPage.gotoLoginPage(data['TC_Stock_017'].url);

    await loginPage.loginToApplication(data['TC_Stock_017'].loginUserName, data['TC_Stock_017'].companyCode, data['TC_Stock_017'].loginPassword);
  
    await dashboardPage.clickOnStockModule();

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.clickOnTankAndPumpSetupIcon();

    await stockTanksetupPage.verifyAddButtonIsDisabled();

    await stockTanksetupPage.enterValidDataInSiteNameDropdown(data['TC_Stock_017'].siteName);

    await stockTanksetupPage.verifySiteNumberIsGeneratedAutomatically();

    await stockTanksetupPage.clickOnAddButton();

    await stockTanksetupPage.clickOnContinueButton();

    await stockTanksetupPage.enterValidDataInTankNumberInputField(data['TC_Stock_017'].expectedTankNo);

    await stockTanksetupPage.selectProductFromDropdown(data['TC_Stock_017'].productName);

    await stockTanksetupPage.selectlLevelTypeFromDropdown(data['TC_Stock_017'].levelType);

    await stockTanksetupPage.verifyCancelButtonIsPresent();

    await stockTanksetupPage.clickOnCancelButton();

    await stockTanksetupPage.enterValidDataInTankNoFilter(data['TC_Stock_017'].expectedTankNo);

    await stockTanksetupPage.verifyRecordIsCancelledSuccessfully();
});

test("TC_Stock_018 Verify that LIU should able to delete the tank successfully @prod", async ({ page }) => 
{
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const stockLandingPage:StockLandingPage=new StockLandingPage(page);
    const stockTanksetupPage:StockTanksetupPage=new StockTanksetupPage(page, data['TC_Stock_018'].expectedTankNo,'');

    await loginPage.gotoLoginPage(data['TC_Stock_018'].url);

    await loginPage.loginToApplication(data['TC_Stock_018'].loginUserName, data['TC_Stock_018'].companyCode, data['TC_Stock_018'].loginPassword);
  
    await dashboardPage.clickOnStockModule();

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.clickOnTankAndPumpSetupIcon();

    await stockTanksetupPage.verifyAddButtonIsDisabled();

    await stockTanksetupPage.enterValidDataInSiteNameDropdown(data['TC_Stock_018'].siteName);

    await stockTanksetupPage.verifySiteNumberIsGeneratedAutomatically();

    await stockTanksetupPage.clickOnAddButton();

    await stockTanksetupPage.clickOnContinueButton();

    await stockTanksetupPage.enterValidDataInTankNumberInputField(data['TC_Stock_018'].expectedTankNo);

    await stockTanksetupPage.selectProductFromDropdown(data['TC_Stock_018'].productName);

    await stockTanksetupPage.selectlLevelTypeFromDropdown(data['TC_Stock_018'].levelType);

    await stockTanksetupPage.enterMinCapacityInQty(data['TC_Stock_018'].minCapacityQty);

    await stockTanksetupPage.enterMaxCapacityInQty(data['TC_Stock_018'].maxCapacityQty);

    await stockTanksetupPage.enterMinCapacityInPercentage(data['TC_Stock_018'].minCapacityPercentage);

    await stockTanksetupPage.enterMaxCapacityInPercentage(data['TC_Stock_018'].maxCapacityPercentage);

    await stockTanksetupPage.enterLowStockMinLevelInQty(data['TC_Stock_018'].minLevelQty);

    await stockTanksetupPage.enterLowStockMaxLevelInQty(data['TC_Stock_018'].maxLevelQty);

    await stockTanksetupPage.enterLowStockMinLevelInPercentage(data['TC_Stock_018'].minLevelPercentage);

    await stockTanksetupPage.enterLowStockMaxLevelInPercentage(data['TC_Stock_018'].maxLevelPercentage);

    await stockTanksetupPage.verifySaveButtonIsPresent();

    await stockTanksetupPage.clickOnSaveButton();

    await stockTanksetupPage.enterValidDataInTankNoFilter(data['TC_Stock_018'].expectedTankNo);

    await stockTanksetupPage.verifyRecordIsAddedSuccessfully();

    await stockTanksetupPage.verifyDeletButtonIsPresent();

    await stockTanksetupPage.clickOnDeleteButton();

    await stockTanksetupPage.clickOnDeletePopupOkButton();

    await stockTanksetupPage.verifyDeletedMsg(data['TC_Stock_018'].expectedDeleteMsg);

    await stockTanksetupPage.verifyTankIsDeletedSuccessfully();
});

test("TC_Stock_019 Tank setup > Verify that the Export button should have two options:-exports the entire report in .csv format-export selected rows", async ({ page }) => 
{
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const stockLandingPage:StockLandingPage=new StockLandingPage(page);
    const stockTanksetupPage:StockTanksetupPage=new StockTanksetupPage(page,'','');

    await loginPage.gotoLoginPage(data['TC_Stock_019'].url);

    await loginPage.loginToApplication(data['TC_Stock_019'].loginUserName, data['TC_Stock_019'].companyCode, data['TC_Stock_019'].loginPassword);
  
    await dashboardPage.clickOnStockModule();

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.clickOnTankAndPumpSetupIcon();

    await stockTanksetupPage.verifyAddButtonIsDisabled();

    await stockTanksetupPage.enterValidDataInSiteNameDropdown(data['TC_Stock_019'].siteName);

    await stockTanksetupPage.verifySiteNumberIsGeneratedAutomatically();

    await stockTanksetupPage.clickOnCheckbox();

    await stockTanksetupPage.verifyExportButtonIsPresent();

    await stockTanksetupPage.clickOnExportButton();

    await stockTanksetupPage.clickOnExportSelectedRowsButton();

    await stockTanksetupPage.clickOnExportButton();

    await stockTanksetupPage.clickOnExportAllDataButton();
});

test.only("TC_Stock_021 Verify error message should be displayed when LIU tries to save the mandatory details without entering the valid data @prod", async ({ page }) => 
{
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const stockLandingPage:StockLandingPage=new StockLandingPage(page);
    const stockTanksetupPage:StockTanksetupPage=new StockTanksetupPage(page, data['TC_Stock_021'].expectedTankNo,'');

    await loginPage.gotoLoginPage(data['TC_Stock_021'].url);

    await loginPage.loginToApplication(data['TC_Stock_021'].loginUserName, data['TC_Stock_021'].companyCode, data['TC_Stock_021'].loginPassword);
  
    await dashboardPage.clickOnStockModule();

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.clickOnTankAndPumpSetupIcon();

    await stockTanksetupPage.verifyAddButtonIsDisabled();

    await stockTanksetupPage.enterValidDataInSiteNameDropdown(data['TC_Stock_021'].siteName);

    await stockTanksetupPage.verifySiteNumberIsGeneratedAutomatically();

    await stockTanksetupPage.clickOnAddButton();

    await stockTanksetupPage.clickOnContinueButton();

    await stockTanksetupPage.clickOnSaveButton();

    await stockTanksetupPage.verifyTankNumberErrorMsg(data['TC_Stock_021'].expectedTankNoErrorMsg);

    await stockTanksetupPage.verifyMinCapacityQtyErrorMsg(data['TC_Stock_021'].expectedMinCapacityQtyErrorMsg);

    await stockTanksetupPage.verifyMaxCapacityQtyErrorMsg(data['TC_Stock_021'].expectedMaxCapacityQtyErrorMsg);

    await stockTanksetupPage.verifyMinCapacityPercentageErrorMsg(data['TC_Stock_021'].expectedMinCapacityPercentageErrorMsg);

    await stockTanksetupPage.verifyMaxCapacityPercentageErrorMsg(data['TC_Stock_021'].expectedMaxCapacityPercentageErroMsg);

    await stockTanksetupPage.verifyMinLevelQtyErrorMsg(data['TC_Stock_021'].expectedMinLevelQtyErrorMsg);

    await stockTanksetupPage.verifyMaxLevelQtyErrorMsg(data['TC_Stock_021'].expectedMaxLevelQtyErrorMsg);

    await stockTanksetupPage.verifyMinLevelPercentageErrorMsg(data['TC_Stock_021'].expectedMinLevelPercentageErrorMsg);

    await stockTanksetupPage.verifyMaxLevelPercentageErrorMsg(data['TC_Stock_021'].exepctedMaxLevelpercentageErrorMsg);
});
    
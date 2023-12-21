import { Page, test } from '@playwright/test';
import { LoginPage } from '../../../page-objects/login-page';
// import data from "../../../testdata/stocks/stock-levels.json"
const data = require(`../../../testdata/${process.env.ENV || 'uat'}/stocks/stock-levels.json`) as Record<string, any>;
import { DashboardPage } from '../../../page-objects/dashboard-page';
import { StockTanksetupPage } from '../../../page-objects/stock-pages/stock-settings-pages/stock-settings-tanksetup-page';
import { StockLevelDelievryPage } from '../../../page-objects/stock-pages/stock-levels-pages/stock-levels-delivery-page';
import { StockLandingPage } from '../../../page-objects/stock-pages/stock-landing-pages/stock-landing-page';
//Demo test case
test("TC_Stock_006 verify that LIU should be able to see the tank in stock>reports after adding delivery quantity from stock>level>delivery @prod", async ({ page }) => 
{
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const stockLandingPage:StockLandingPage=new StockLandingPage(page);
    const stockTanksetupPage:StockTanksetupPage=new StockTanksetupPage(page, data['TC_Stock_006'].expectedTankNo,'');
    const stockLevelDelievryPage:StockLevelDelievryPage=new StockLevelDelievryPage(page,data['TC_Stock_006'].expectedTankNo,data['TC_Stock_006'].expectedDeliveryQty,'');

    await loginPage.gotoLoginPage(data['TC_Stock_006'].url);

    await loginPage.loginToApplication(data['TC_Stock_006'].loginUserName, data['TC_Stock_006'].companyCode, data['TC_Stock_006'].loginPassword);
  
    await dashboardPage.clickOnStockModule();

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.clickOnTankAndPumpSetupIcon();

    await stockTanksetupPage.verifyAddButtonIsDisabled();

    await stockTanksetupPage.enterValidDataInSiteNameDropdown(data['TC_Stock_006'].siteName);

    await stockTanksetupPage.verifySiteNumberIsGeneratedAutomatically();

    await stockTanksetupPage.clickOnAddButton();

    await stockTanksetupPage.clickOnContinueButton();

    await stockLevelDelievryPage.enterValidDataInTankNumberInputField(data['TC_Stock_006'].expectedTankNo);

    await stockTanksetupPage.selectStatusFromDropdown(data['TC_Stock_006'].tankStatus);

    await stockTanksetupPage.selectProductFromDropdown(data['TC_Stock_006'].productName);

    await stockTanksetupPage.selectlLevelTypeFromDropdown(data['TC_Stock_006'].levelType);

    await stockTanksetupPage.enterMinCapacityInQty(data['TC_Stock_006'].minCapacityQty);

    await stockTanksetupPage.enterMaxCapacityInQty(data['TC_Stock_006'].maxCapacityQty);

    await stockTanksetupPage.enterMinCapacityInPercentage(data['TC_Stock_006'].minCapacityPercentage);

    await stockTanksetupPage.enterMaxCapacityInPercentage(data['TC_Stock_006'].maxCapacityPercentage);

    await stockTanksetupPage.enterLowStockMinLevelInQty(data['TC_Stock_006'].minLevelQty);

    await stockTanksetupPage.enterLowStockMaxLevelInQty(data['TC_Stock_006'].maxLevelQty);

    await stockTanksetupPage.enterLowStockMinLevelInPercentage(data['TC_Stock_006'].minLevelPercentage);

    await stockTanksetupPage.enterLowStockMaxLevelInPercentage(data['TC_Stock_006'].maxLevelPercentage);

    await stockTanksetupPage.verifySaveButtonIsPresent();

    await stockTanksetupPage.clickOnSaveButton();

    await stockLevelDelievryPage.enterValidDataInTankNoFilter(data['TC_Stock_006'].expectedTankNo);

    await stockTanksetupPage.verifyRecordIsAddedSuccessfully();

    await dashboardPage.clickOnStockLevels();

    await stockLevelDelievryPage.clickOnDeliveryIcon();

    await stockLevelDelievryPage.verifyAddButtonIsDisabled();

    await stockLevelDelievryPage.enterValidDataInSiteNameDropdown(data['TC_Stock_006'].siteName);

    await stockLevelDelievryPage.verifySiteNumberIsGeneratedAutomatically();

    await stockLevelDelievryPage.clickOnAddButton();

    await stockLevelDelievryPage.enterValidDataInsideDeliveryQtyInputField(data['TC_Stock_006'].expectedDeliveryQty);

    await stockLevelDelievryPage.clickOnSaveButton();

    await stockLevelDelievryPage.clickOnOkButton();

    await stockLevelDelievryPage.clickOnSaveButton();

    await dashboardPage.clickOnStockReports();

    await stockLevelDelievryPage.enterValidDataInReportsSiteNameDropdown(data['TC_Stock_006'].siteName);

    await stockLevelDelievryPage.selectReportType(data['TC_Stock_006'].reportType);

    await stockLevelDelievryPage.clickOnApplyButton();

    await stockLevelDelievryPage.enterValidDataInTankFilterInputField(data['TC_Stock_006'].expectedTankNo);
   
    await stockLevelDelievryPage.verifyTanknoRecordIsAddedSuccessfully();

    await stockLevelDelievryPage.enterValidDataInQuantityInputField(data['TC_Stock_006'].expectedDeliveryQty);

});
//"BugId:
//#24489"
test("TC_Stock_007 verify that LIU should be able to see the tank in stock>reports after adding delivery percentage from stock>level>delivery @prod", async ({ page }) => 
{
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const stockLandingPage:StockLandingPage=new StockLandingPage(page);
    const stockTanksetupPage:StockTanksetupPage=new StockTanksetupPage(page, data['TC_Stock_007'].expectedTankNo,'');
    const stockLevelDelievryPage:StockLevelDelievryPage=new StockLevelDelievryPage(page,data['TC_Stock_007'].expectedTankNo,'',data['TC_Stock_007'].expectedDeliveryPer);

    await loginPage.gotoLoginPage(data['TC_Stock_007'].url);

    await loginPage.loginToApplication(data['TC_Stock_007'].loginUserName, data['TC_Stock_007'].companyCode, data['TC_Stock_007'].loginPassword);
  
    await dashboardPage.clickOnStockModule();

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.clickOnTankAndPumpSetupIcon();

    await stockTanksetupPage.verifyAddButtonIsDisabled();

    await stockTanksetupPage.enterValidDataInSiteNameDropdown(data['TC_Stock_007'].siteName);

    await stockTanksetupPage.verifySiteNumberIsGeneratedAutomatically();

    await stockTanksetupPage.clickOnAddButton();

    await stockTanksetupPage.clickOnContinueButton();

    await stockLevelDelievryPage.enterValidDataInTankNumberInputField(data['TC_Stock_007'].expectedTankNo);

    await stockTanksetupPage.selectStatusFromDropdown(data['TC_Stock_007'].tankStatus);

    await stockTanksetupPage.selectProductFromDropdown(data['TC_Stock_007'].productName);

    await stockTanksetupPage.selectlLevelTypeFromDropdown(data['TC_Stock_007'].levelType);

    await stockTanksetupPage.enterMinCapacityInQty(data['TC_Stock_007'].minCapacityQty);

    await stockTanksetupPage.enterMaxCapacityInQty(data['TC_Stock_007'].maxCapacityQty);

    await stockTanksetupPage.enterMinCapacityInPercentage(data['TC_Stock_007'].minCapacityPercentage);

    await stockTanksetupPage.enterMaxCapacityInPercentage(data['TC_Stock_007'].maxCapacityPercentage);

    await stockTanksetupPage.enterLowStockMinLevelInQty(data['TC_Stock_007'].minLevelQty);

    await stockTanksetupPage.enterLowStockMaxLevelInQty(data['TC_Stock_007'].maxLevelQty);

    await stockTanksetupPage.enterLowStockMinLevelInPercentage(data['TC_Stock_007'].minLevelPercentage);

    await stockTanksetupPage.enterLowStockMaxLevelInPercentage(data['TC_Stock_007'].maxLevelPercentage);

    await stockTanksetupPage.verifySaveButtonIsPresent();

    await stockTanksetupPage.clickOnSaveButton();

    await stockLevelDelievryPage.enterValidDataInTankNoFilter(data['TC_Stock_007'].expectedTankNo);

    await stockTanksetupPage.verifyRecordIsAddedSuccessfully();

    await dashboardPage.clickOnStockLevels();

    await stockLevelDelievryPage.clickOnDeliveryIcon();

    await stockLevelDelievryPage.verifyAddButtonIsDisabled();

    await stockLevelDelievryPage.enterValidDataInSiteNameDropdown(data['TC_Stock_007'].siteName);

    await stockLevelDelievryPage.verifySiteNumberIsGeneratedAutomatically();

    await stockLevelDelievryPage.clickOnAddButton();

    await stockLevelDelievryPage.enterValidDataInsideDeliveryPerInputField(data['TC_Stock_007'].expectedDeliveryPer);

    await stockLevelDelievryPage.clickOnSaveButton();

    //await stockLevelDelievryPage.clickOnOkButton();

    //await stockLevelDelievryPage.clickOnSaveButton();

    await dashboardPage.clickOnStockReports();

    await stockLevelDelievryPage.enterValidDataInReportsSiteNameDropdown(data['TC_Stock_007'].siteName);

    await stockLevelDelievryPage.selectReportType(data['TC_Stock_007'].reportType);

    await stockLevelDelievryPage.clickOnApplyButton();

    await stockLevelDelievryPage.enterValidDataInpercentageInputField(data['TC_Stock_007'].expectedDeliveryPer);

    await stockLevelDelievryPage.enterValidDataInTankFilterInputField(data['TC_Stock_007'].expectedTankNo);
   
    await stockLevelDelievryPage.verifyTanknoRecordIsAddedSuccessfully();
   
});

//"BugId:
//#24489"
test("TC_Stock_008 verify that LIU should be able to see the tank in stock>reports after adding both delivery quantity and percentage from stock>level>delivery @prod", async ({ page }) => 
{
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const stockLandingPage:StockLandingPage=new StockLandingPage(page);
    const stockTanksetupPage:StockTanksetupPage=new StockTanksetupPage(page, data['TC_Stock_008'].expectedTankNo,'');
    const stockLevelDelievryPage:StockLevelDelievryPage=new StockLevelDelievryPage(page,data['TC_Stock_008'].expectedTankNo,data['TC_Stock_008'].expectedDeliveryQty,data['TC_Stock_008'].expectedDeliveryPer);

    await loginPage.gotoLoginPage(data['TC_Stock_008'].url);

    await loginPage.loginToApplication(data['TC_Stock_008'].loginUserName, data['TC_Stock_008'].companyCode, data['TC_Stock_008'].loginPassword);
  
    await dashboardPage.clickOnStockModule();

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.clickOnTankAndPumpSetupIcon();

    await stockTanksetupPage.verifyAddButtonIsDisabled();

    await stockTanksetupPage.enterValidDataInSiteNameDropdown(data['TC_Stock_008'].siteName);

    await stockTanksetupPage.verifySiteNumberIsGeneratedAutomatically();

    await stockTanksetupPage.clickOnAddButton();

    await stockTanksetupPage.clickOnContinueButton();

    await stockLevelDelievryPage.enterValidDataInTankNumberInputField(data['TC_Stock_008'].expectedTankNo);

    await stockTanksetupPage.selectStatusFromDropdown(data['TC_Stock_008'].tankStatus);

    await stockTanksetupPage.selectProductFromDropdown(data['TC_Stock_008'].productName);

    await stockTanksetupPage.selectlLevelTypeFromDropdown(data['TC_Stock_008'].levelType);

    await stockTanksetupPage.enterMinCapacityInQty(data['TC_Stock_008'].minCapacityQty);

    await stockTanksetupPage.enterMaxCapacityInQty(data['TC_Stock_008'].maxCapacityQty);

    await stockTanksetupPage.enterMinCapacityInPercentage(data['TC_Stock_008'].minCapacityPercentage);

    await stockTanksetupPage.enterMaxCapacityInPercentage(data['TC_Stock_008'].maxCapacityPercentage);

    await stockTanksetupPage.enterLowStockMinLevelInQty(data['TC_Stock_008'].minLevelQty);

    await stockTanksetupPage.enterLowStockMaxLevelInQty(data['TC_Stock_008'].maxLevelQty);

    await stockTanksetupPage.enterLowStockMinLevelInPercentage(data['TC_Stock_008'].minLevelPercentage);

    await stockTanksetupPage.enterLowStockMaxLevelInPercentage(data['TC_Stock_008'].maxLevelPercentage);

    await stockTanksetupPage.verifySaveButtonIsPresent();

    await stockTanksetupPage.clickOnSaveButton();

    await stockLevelDelievryPage.enterValidDataInTankNoFilter(data['TC_Stock_008'].expectedTankNo);

    await stockTanksetupPage.verifyRecordIsAddedSuccessfully();

    await dashboardPage.clickOnStockLevels();

    await stockLevelDelievryPage.clickOnDeliveryIcon();

    await stockLevelDelievryPage.verifyAddButtonIsDisabled();

    await stockLevelDelievryPage.enterValidDataInSiteNameDropdown(data['TC_Stock_008'].siteName);

    await stockLevelDelievryPage.verifySiteNumberIsGeneratedAutomatically();

    await stockLevelDelievryPage.clickOnAddButton();

    await stockLevelDelievryPage.enterValidDataInsideDeliveryQtyInputField(data['TC_Stock_008'].expectedDeliveryQty);

    await stockLevelDelievryPage.clickOnDeliveryPerInputField();

    await stockLevelDelievryPage.clickOnSaveButton();

    await stockLevelDelievryPage.clickOnOkButton();

    await stockLevelDelievryPage.clickOnSaveButton();

    await dashboardPage.clickOnStockReports();

    await stockLevelDelievryPage.enterValidDataInReportsSiteNameDropdown(data['TC_Stock_008'].siteName);
    
    await stockLevelDelievryPage.selectReportType(data['TC_Stock_008'].reportType);

    await stockLevelDelievryPage.clickOnApplyButton();

    await stockLevelDelievryPage.enterValidDataInTankFilterInputField(data['TC_Stock_008'].expectedTankNo);
    
    await stockLevelDelievryPage.verifyTanknoRecordIsAddedSuccessfully();
});

test("TC_Stock_009 verify that site name should be empty when user clicks on Reset button from delivery>reports @prod", async ({ page }) => 
{
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const stockLandingPage:StockLandingPage=new StockLandingPage(page);
    const stockTanksetupPage:StockTanksetupPage=new StockTanksetupPage(page, data['TC_Stock_009'].expectedTankNo,'');
    const stockLevelDelievryPage:StockLevelDelievryPage=new StockLevelDelievryPage(page,data['TC_Stock_009'].expectedTankNo,data['TC_Stock_009'].expectedDeliveryQty,'');

    await loginPage.gotoLoginPage(data['TC_Stock_009'].url);

    await loginPage.loginToApplication(data['TC_Stock_009'].loginUserName, data['TC_Stock_009'].companyCode, data['TC_Stock_009'].loginPassword);
  
    await dashboardPage.clickOnStockModule();

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.clickOnTankAndPumpSetupIcon();

    await stockTanksetupPage.verifyAddButtonIsDisabled();

    await stockTanksetupPage.enterValidDataInSiteNameDropdown(data['TC_Stock_009'].siteName);

    await stockTanksetupPage.verifySiteNumberIsGeneratedAutomatically();

    await stockTanksetupPage.clickOnAddButton();

    await stockTanksetupPage.clickOnContinueButton();

    await stockLevelDelievryPage.enterValidDataInTankNumberInputField(data['TC_Stock_009'].expectedTankNo);

    await stockTanksetupPage.selectStatusFromDropdown(data['TC_Stock_009'].tankStatus);

    await stockTanksetupPage.selectProductFromDropdown(data['TC_Stock_009'].productName);

    await stockTanksetupPage.selectlLevelTypeFromDropdown(data['TC_Stock_009'].levelType);

    await stockTanksetupPage.enterMinCapacityInQty(data['TC_Stock_009'].minCapacityQty);

    await stockTanksetupPage.enterMaxCapacityInQty(data['TC_Stock_009'].maxCapacityQty);

    await stockTanksetupPage.enterMinCapacityInPercentage(data['TC_Stock_009'].minCapacityPercentage);

    await stockTanksetupPage.enterMaxCapacityInPercentage(data['TC_Stock_009'].maxCapacityPercentage);

    await stockTanksetupPage.enterLowStockMinLevelInQty(data['TC_Stock_009'].minLevelQty);

    await stockTanksetupPage.enterLowStockMaxLevelInQty(data['TC_Stock_009'].maxLevelQty);

    await stockTanksetupPage.enterLowStockMinLevelInPercentage(data['TC_Stock_009'].minLevelPercentage);

    await stockTanksetupPage.enterLowStockMaxLevelInPercentage(data['TC_Stock_009'].maxLevelPercentage);

    await stockTanksetupPage.verifySaveButtonIsPresent();

    await stockTanksetupPage.clickOnSaveButton();

    await stockLevelDelievryPage.enterValidDataInTankNoFilter(data['TC_Stock_009'].expectedTankNo);

    await stockTanksetupPage.verifyRecordIsAddedSuccessfully();

    await dashboardPage.clickOnStockLevels();

    await stockLevelDelievryPage.clickOnDeliveryIcon();

    await stockLevelDelievryPage.verifyAddButtonIsDisabled();

    await stockLevelDelievryPage.enterValidDataInSiteNameDropdown(data['TC_Stock_009'].siteName);

    await stockLevelDelievryPage.verifySiteNumberIsGeneratedAutomatically();

    await stockLevelDelievryPage.clickOnAddButton();

    await stockLevelDelievryPage.enterValidDataInsideDeliveryQtyInputField(data['TC_Stock_009'].expectedDeliveryQty);

    await stockLevelDelievryPage.clickOnSaveButton();

    await stockLevelDelievryPage.clickOnOkButton();

    await stockLevelDelievryPage.clickOnSaveButton();

    await dashboardPage.clickOnStockReports();

    await stockLevelDelievryPage.enterValidDataInReportsSiteNameDropdown(data['TC_Stock_009'].siteName);

    await stockLevelDelievryPage.selectReportType(data['TC_Stock_009'].reportType);

    await stockLevelDelievryPage.clickOnApplyButton();

    await stockLevelDelievryPage.enterValidDataInTankFilterInputField(data['TC_Stock_009'].expectedTankNo);
   
    await stockLevelDelievryPage.verifyTanknoRecordIsAddedSuccessfully();

    await stockLevelDelievryPage.clickOnResetButton();

    await stockLevelDelievryPage.verifySiteNameFieldIsEmpty();
    
});

test("TC_Stock_010 verify that error message should display when LIU tries to save the details without entering the data @prod", async ({ page }) => 
{
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const stockLandingPage:StockLandingPage=new StockLandingPage(page);
    const stockTanksetupPage:StockTanksetupPage=new StockTanksetupPage(page, data['TC_Stock_010'].expectedTankNo,'');
    const stockLevelDelievryPage:StockLevelDelievryPage=new StockLevelDelievryPage(page,data['TC_Stock_010'].expectedTankNo,'','');

    await loginPage.gotoLoginPage(data['TC_Stock_010'].url);

    await loginPage.loginToApplication(data['TC_Stock_010'].loginUserName, data['TC_Stock_010'].companyCode, data['TC_Stock_010'].loginPassword);
  
    await dashboardPage.clickOnStockModule();

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.clickOnTankAndPumpSetupIcon();

    await stockTanksetupPage.verifyAddButtonIsDisabled();

    await stockTanksetupPage.enterValidDataInSiteNameDropdown(data['TC_Stock_010'].siteName);

    await stockTanksetupPage.verifySiteNumberIsGeneratedAutomatically();

    await stockTanksetupPage.clickOnAddButton();

    await stockTanksetupPage.clickOnContinueButton();

    await stockLevelDelievryPage.enterValidDataInTankNumberInputField(data['TC_Stock_010'].expectedTankNo);

    await stockTanksetupPage.selectStatusFromDropdown(data['TC_Stock_010'].tankStatus);

    await stockTanksetupPage.selectProductFromDropdown(data['TC_Stock_010'].productName);

    await stockTanksetupPage.selectlLevelTypeFromDropdown(data['TC_Stock_010'].levelType);

    await stockTanksetupPage.enterMinCapacityInQty(data['TC_Stock_010'].minCapacityQty);

    await stockTanksetupPage.enterMaxCapacityInQty(data['TC_Stock_010'].maxCapacityQty);

    await stockTanksetupPage.enterMinCapacityInPercentage(data['TC_Stock_010'].minCapacityPercentage);

    await stockTanksetupPage.enterMaxCapacityInPercentage(data['TC_Stock_010'].maxCapacityPercentage);

    await stockTanksetupPage.enterLowStockMinLevelInQty(data['TC_Stock_010'].minLevelQty);

    await stockTanksetupPage.enterLowStockMaxLevelInQty(data['TC_Stock_010'].maxLevelQty);

    await stockTanksetupPage.enterLowStockMinLevelInPercentage(data['TC_Stock_010'].minLevelPercentage);

    await stockTanksetupPage.enterLowStockMaxLevelInPercentage(data['TC_Stock_010'].maxLevelPercentage);

    await stockTanksetupPage.verifySaveButtonIsPresent();

    await stockTanksetupPage.clickOnSaveButton();

    await stockLevelDelievryPage.enterValidDataInTankNoFilter(data['TC_Stock_010'].expectedTankNo);

    await stockTanksetupPage.verifyRecordIsAddedSuccessfully();

    await dashboardPage.clickOnStockLevels();

    await stockLevelDelievryPage.clickOnDeliveryIcon();

    await stockLevelDelievryPage.verifyAddButtonIsDisabled();

    await stockLevelDelievryPage.enterValidDataInSiteNameDropdown(data['TC_Stock_010'].siteName);

    await stockLevelDelievryPage.verifySiteNumberIsGeneratedAutomatically();

    await stockLevelDelievryPage.clickOnAddButton();

    await stockLevelDelievryPage.clickOnSaveButton();

    await stockLevelDelievryPage.verifystockDeliveryErrorMsg(data['TC_Stock_010'].expectedErrorMsg);

    await stockLevelDelievryPage.clickOnErrorMsgOkButton();
});


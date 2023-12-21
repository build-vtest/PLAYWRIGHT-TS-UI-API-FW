import { Page, test } from '@playwright/test';
import { LoginPage } from '../../../page-objects/login-page';
// import data from "../../../testdata/stocks/stock-landing.json"
const data = require(`../../../testdata/${process.env.ENV || 'uat'}/stocks/stock-landing.json`) as Record<string, any>;
import { DashboardPage } from '../../../page-objects/dashboard-page';
import { StockLandingPage } from '../../../page-objects/stock-pages/stock-landing-pages/stock-landing-page';

test.only("TC_Stock_001 verify User is navigated to each icon present on landing page @prod", async ({ page }) => 
{
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const stockLandingPage:StockLandingPage=new StockLandingPage(page);
   
    await loginPage.gotoLoginPage(data['TC_Stock_001'].url);

    await loginPage.loginToApplication(data['TC_Stock_001'].loginUserName, data['TC_Stock_001'].companyCode, data['TC_Stock_001'].loginPassword);
  
    await dashboardPage.clickOnStockModule();

    //levels

    await dashboardPage.clickOnStockLevels(); 

    await stockLandingPage.verifyLevelsText(data['TC_Stock_001'].expectedLevelsText);   

    await stockLandingPage.verifyStockLevelIconIsVisible();

    await stockLandingPage.clickOnStockLeveIcon();

    await stockLandingPage.verifyUserIsNavigatedToStockLevelPage(data['TC_Stock_001'].expectedStocklevelPage);

    await dashboardPage.clickOnStockLevels(); 

    await stockLandingPage.verifyDeliveryIconIsVisible();

    await stockLandingPage.clickOnDeliveryIcon();

    await stockLandingPage.verifyUserIsNavigatedDeliveryPage(data['TC_Stock_001'].expectedDeliveryPage);

    await dashboardPage.clickOnStockLevels(); 

    await stockLandingPage.verifyReportIssuesIconIsVisible();

    await stockLandingPage.clickOnReportIssuesIcon();

    await stockLandingPage.verifyUserIsNavigatedToReportIssuesPage(data['TC_Stock_001'].expectedReportIssuesPage);

    //Reports
  
    await dashboardPage.clickOnStockReports();

    await stockLandingPage.verifyReportsText(data['TC_Stock_001'].expectedReportsText);

    await stockLandingPage.verifyReportIconIsVisible();

    await stockLandingPage.clickOnReportsIcon();

    await stockLandingPage.verifyUserIsNavigatedToStockReportPage(data['TC_Stock_001'].expectedReportPage);

    await dashboardPage.clickOnStockReports();

    await stockLandingPage.verifyscheduledReportsIconIsVisible();

    await stockLandingPage.clickOnScheduledReportsIcon();

    await stockLandingPage.verifyUserIsNavigatedToStockScheduledReportsPage(data['TC_Stock_001'].expectedScheduledReportsPage);

    //Settings

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.verifySettingsText(data['TC_Stock_001'].expectedSettingsText);

    await stockLandingPage.verifyTankAndPumpSetupIconIsVisible();

    await stockLandingPage.clickOnTankAndPumpSetupIcon();

    await stockLandingPage.verifyUserIsNavigatedToTankAndPumpSetupPage(data['TC_Stock_001'].expectedTankAndPumpSetupPage);

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.verifytankAndPumpAttributesIconIsVisible();

    await stockLandingPage.clickOntankAndPumpAttributesIcon();

    await stockLandingPage.verifyUserIsNavigatedToTankAndPumpAttributesPage(data['TC_Stock_001'].expectedTankAndPumpAttributesPage);

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.taskSetupIconIsVisible();

    await stockLandingPage.clickOnTaskSetupIcon();

    await stockLandingPage.verifyUserIsNavigatedToTaskSetupPage(data['TC_Stock_001'].expectedTaskSetuppage);

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.verifySettingsIconIsVisible();
   
    await stockLandingPage.clickOnSettingsIcon();

    await stockLandingPage.verifyUserIsNavigatedToStockSettingsPage(data['TC_Stock_001'].expectedSettingPage);
});


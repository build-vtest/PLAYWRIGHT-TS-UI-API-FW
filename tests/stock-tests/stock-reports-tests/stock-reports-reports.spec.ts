import { Page, test } from '@playwright/test';
import { LoginPage } from '../../../page-objects/login-page';
// import data from "../../../testdata/stocks/stock-reports.json"
const data = require(`../../../testdata/${process.env.ENV || 'uat'}/stocks/stock-reports.json`) as Record<string, any>;
import { DashboardPage } from '../../../page-objects/dashboard-page';
import { StockReportsPage } from '../../../page-objects/stock-pages/stock-reports-pages/stock-reports-reports-page';
import { StockLandingPage } from '../../../page-objects/stock-pages/stock-landing-pages/stock-landing-page';
//In Progress
test("TC_Stock_011 verify that added site in Reports should display inside stock data", async ({ page }) => 
{
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const stockLandingPage:StockLandingPage=new StockLandingPage(page);
    const stockReportsPage:StockReportsPage=new StockReportsPage(page);
    
    await loginPage.gotoLoginPage(data['TC_Stock_011'].url);

    await loginPage.loginToApplication(data['TC_Stock_011'].loginUserName, data['TC_Stock_011'].companyCode, data['TC_Stock_011'].loginPassword);
  
    await dashboardPage.clickOnStockModule();

    await dashboardPage.clickOnStockReports();

    await stockLandingPage.clickOnReportsIcon();

    await stockReportsPage.enterValidDataInReportsSiteNameDropdown(data['TC_Stock_011'].siteName)

    // await stockReportsPage.selectState(data['TC_Stock_011'].state);

    // await stockReportsPage.selectDivision(data['TC_Stock_011'].division);

    // await stockReportsPage.selectProduct(data['TC_Stock_011'].product);

    // await stockReportsPage.selectSitename(data['TC_Stock_011'].siteName);

    await stockReportsPage.clickOnApplyButton();

    await stockReportsPage.enterValidDataInsideSiteNameFileterInputField(data['TC_Stock_011'].siteName);
});

test("TC_Stock_012 verify siteName sohuld be empty when LIU clicks on Reset button @prod", async ({ page }) => 
{
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const stockLandingPage:StockLandingPage=new StockLandingPage(page);
    const stockReportsPage:StockReportsPage=new StockReportsPage(page);
    
    await loginPage.gotoLoginPage(data['TC_Stock_011'].url);

    await loginPage.loginToApplication(data['TC_Stock_011'].loginUserName, data['TC_Stock_011'].companyCode, data['TC_Stock_011'].loginPassword);
  
    await dashboardPage.clickOnStockModule();

    await dashboardPage.clickOnStockReports();

    await stockLandingPage.clickOnReportsIcon();

    await stockReportsPage.enterValidDataInReportsSiteNameDropdown(data['TC_Stock_011'].siteName)

    await stockReportsPage.clickOnResetButton();

    await stockReportsPage.verifySiteNameFieldIsEmpty();

});












   


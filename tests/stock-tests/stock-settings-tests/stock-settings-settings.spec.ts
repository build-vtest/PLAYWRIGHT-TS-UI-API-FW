import { Page, test } from '@playwright/test';
import { LoginPage } from '../../../page-objects/login-page';
// import data from "../../../testdata/stocks/stock-settings.json"
const data = require(`../../../testdata/${process.env.ENV || 'uat'}/stocks/stock-settings.json`) as Record<string, any>;
import { DashboardPage } from '../../../page-objects/dashboard-page';
import { StockSettingsPage } from '../../../page-objects/stock-pages/stock-settings-pages/stock-settings-settings-page';
import { StockLandingPage } from '../../../page-objects/stock-pages/stock-landing-pages/stock-landing-page';

test("TC_Stock_030 Verify that the edit button allows the user to only edit the Value of the Settings", async ({ page }) => 
{
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const stockLandingPage:StockLandingPage=new StockLandingPage(page);
    const stockSettingsPage:StockSettingsPage=new StockSettingsPage(page);
    
    await loginPage.gotoLoginPage(data['TC_Stock_030'].url);

    await loginPage.loginToApplication(data['TC_Stock_030'].loginUserName, data['TC_Stock_030'].companyCode, data['TC_Stock_030'].loginPassword);
  
    await dashboardPage.clickOnStockModule();

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.clickOnSettingsIcon();

    await stockSettingsPage.verifEditButtonIsPresent();

    await stockSettingsPage.clickOnEditButton();

    await stockSettingsPage.verifyFieldsAreNotEditable();

    await stockSettingsPage.verifyFieldIsEditable();

    await stockSettingsPage.enterValueInValueInputField(data['TC_Stock_030'].value)

    await stockSettingsPage.clickOnSaveButton();
});

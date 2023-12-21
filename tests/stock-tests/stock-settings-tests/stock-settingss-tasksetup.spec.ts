import { Page, test } from '@playwright/test';
import { LoginPage } from '../../../page-objects/login-page';
// import data from "../../../testdata/stocks/stock-settings.json"
const data = require(`../../../testdata/${process.env.ENV || 'uat'}/stocks/stock-settings.json`) as Record<string, any>;
import { DashboardPage } from '../../../page-objects/dashboard-page';
import { StockTasksetupPage } from '../../../page-objects/stock-pages/stock-settings-pages/stock-settings-tasksetup-page';
import { StockLandingPage } from '../../../page-objects/stock-pages/stock-landing-pages/stock-landing-page';

test("TC_Stock_022 Verify by clicking on add button details should appear in the Tasks grid @prod", async ({ page }) => 
{
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const stockTasksetupPage:StockTasksetupPage=new StockTasksetupPage(page, data['TC_Stock_022'].expectedTaskName,'');
    const stockLandingPage:StockLandingPage=new StockLandingPage(page);
    
    await loginPage.gotoLoginPage(data['TC_Stock_022'].url);

    await loginPage.loginToApplication(data['TC_Stock_022'].loginUserName, data['TC_Stock_022'].companyCode, data['TC_Stock_022'].loginPassword);
  
    await dashboardPage.clickOnStockModule();

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.clickOnTaskSetupIcon();

    await stockTasksetupPage.verifyAddButtonIsEnabled();

    await stockTasksetupPage.clickOnTaskAddButton();

    await stockTasksetupPage.enterValidDataInTaskNameInputField(data['TC_Stock_022'].expectedTaskName);

    await stockTasksetupPage.enterValidDataInUrgencyDropdown(data['TC_Stock_022'].urgency);

    await stockTasksetupPage.enterValidDataInMsgInputField(data['TC_Stock_022'].message);

    await stockTasksetupPage.clickOnDueDate();

    await stockTasksetupPage.chooseDueDateFromUniqueCalendar(data['TC_Stock_022'].dueDatePicker, data['TC_Stock_022'].dueDay, data['TC_Stock_022'].dueMonth, data['TC_Stock_022'].dueYear);
  
    await stockTasksetupPage.enterValidDataInTimeInputField(data['TC_Stock_022'].time);

    await stockTasksetupPage.clickOnRepeatButton();

    await stockTasksetupPage.clickOnStartDate();

    await stockTasksetupPage.chooseStartDateFromUniqueCalendar(data['TC_Stock_022'].startDatePicker, data['TC_Stock_022'].startDay, data['TC_Stock_022'].startMonth, data['TC_Stock_022'].startYear);
  
    await stockTasksetupPage.enterStartTime(data['TC_Stock_022'].time);

    await stockTasksetupPage.enterValidDataInFrequencyDropdown(data['TC_Stock_022'].frequencyType);

    await stockTasksetupPage.clickOnRepeatOkButton();

    await stockTasksetupPage.verifySaveButtonIsPresent();

    await stockTasksetupPage.clickOnSaveButton();

    await stockTasksetupPage.enterValidDataInTaskNameFilter(data['TC_Stock_022'].expectedTaskName);

    await stockTasksetupPage.verifyRecordIsAddedSuccessfully();
});
//Demo test case
test("TC_Stock_023 Verify that LIU should able to edit the task details successfully and task should updated in the Tasks Grid @prod", async ({ page }) => 
{
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const stockTasksetupPage:StockTasksetupPage=new StockTasksetupPage(page, data['TC_Stock_023'].expectedTaskName,data['TC_Stock_023'].expectedUpdatedTaskName);
    const stockLandingPage:StockLandingPage=new StockLandingPage(page);

    await loginPage.gotoLoginPage(data['TC_Stock_023'].url);

    await loginPage.loginToApplication(data['TC_Stock_023'].loginUserName, data['TC_Stock_023'].companyCode, data['TC_Stock_023'].loginPassword);
  
    await dashboardPage.clickOnStockModule();

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.clickOnTaskSetupIcon();

    await stockTasksetupPage.verifyAddButtonIsEnabled();

    await stockTasksetupPage.clickOnTaskAddButton();

    await stockTasksetupPage.enterValidDataInTaskNameInputField(data['TC_Stock_023'].expectedTaskName);

    await stockTasksetupPage.enterValidDataInUrgencyDropdown(data['TC_Stock_023'].urgency);

    await stockTasksetupPage.enterValidDataInMsgInputField(data['TC_Stock_023'].message);

    await stockTasksetupPage.clickOnDueDate();

    await stockTasksetupPage.chooseDueDateFromUniqueCalendar(data['TC_Stock_023'].dueDatePicker, data['TC_Stock_023'].dueDay, data['TC_Stock_023'].dueMonth, data['TC_Stock_023'].dueYear);
  
    await stockTasksetupPage.enterValidDataInTimeInputField(data['TC_Stock_023'].time);

    await stockTasksetupPage.clickOnRepeatButton();

    await stockTasksetupPage.clickOnStartDate();

    await stockTasksetupPage.chooseStartDateFromUniqueCalendar(data['TC_Stock_023'].startDatePicker, data['TC_Stock_023'].startDay, data['TC_Stock_023'].startMonth, data['TC_Stock_023'].startYear);
  
    await stockTasksetupPage.enterStartTime(data['TC_Stock_023'].time);

    await stockTasksetupPage.enterValidDataInFrequencyDropdown(data['TC_Stock_023'].frequencyType);

    await stockTasksetupPage.clickOnRepeatOkButton();

    await stockTasksetupPage.verifySaveButtonIsPresent();

    await stockTasksetupPage.clickOnSaveButton();

    await stockTasksetupPage.enterValidDataInTaskNameFilter(data['TC_Stock_023'].expectedTaskName);

    await stockTasksetupPage.verifyRecordIsAddedSuccessfully();

    await stockTasksetupPage.verifyEditButtonIsPresent();

    await stockTasksetupPage.clickOnEditButton();

    await stockTasksetupPage.verifyTaskDetailsFieldsAreEditable();

    await stockTasksetupPage.enterupdatedTaskName(data['TC_Stock_023'].expectedUpdatedTaskName);

    await stockTasksetupPage.enterValidDataInUrgencyDropdown(data['TC_Stock_023'].updatedUrgency);

    await stockTasksetupPage.enterValidDataInMsgInputField(data['TC_Stock_023'].updatedMessage);

    await stockTasksetupPage.clickOnSaveButton();

    await stockTasksetupPage.enterUpdatedValidDataInTasknameFilter(data['TC_Stock_023'].expectedUpdatedTaskName);

    await stockTasksetupPage.verifyUpdatedRecordIsAddedSuccessfully();
});

test("TC_Stock_024 Verify tat LIU should able to cancel the added details in Task details and should not appear in the Task grid @prod", async ({ page }) => 
{
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const stockTasksetupPage:StockTasksetupPage=new StockTasksetupPage(page, data['TC_Stock_024'].expectedTaskName,'');
    const stockLandingPage:StockLandingPage=new StockLandingPage(page);
    
    await loginPage.gotoLoginPage(data['TC_Stock_024'].url);

    await loginPage.loginToApplication(data['TC_Stock_024'].loginUserName, data['TC_Stock_024'].companyCode, data['TC_Stock_024'].loginPassword);
  
    await dashboardPage.clickOnStockModule();

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.clickOnTaskSetupIcon();

    await stockTasksetupPage.verifyAddButtonIsEnabled();

    await stockTasksetupPage.clickOnTaskAddButton();

    await stockTasksetupPage.enterValidDataInTaskNameInputField(data['TC_Stock_024'].expectedTaskName);

    await stockTasksetupPage.enterValidDataInUrgencyDropdown(data['TC_Stock_024'].urgency);

    await stockTasksetupPage.enterValidDataInMsgInputField(data['TC_Stock_024'].message);

    await stockTasksetupPage.clickOnDueDate();

    await stockTasksetupPage.chooseDueDateFromUniqueCalendar(data['TC_Stock_024'].dueDatePicker, data['TC_Stock_024'].dueDay, data['TC_Stock_024'].dueMonth, data['TC_Stock_024'].dueYear);
  
    await stockTasksetupPage.enterValidDataInTimeInputField(data['TC_Stock_024'].time);

    await stockTasksetupPage.clickOnRepeatButton();

    await stockTasksetupPage.clickOnStartDate();StockTasksetupPage

    await stockTasksetupPage.chooseStartDateFromUniqueCalendar(data['TC_Stock_024'].startDatePicker, data['TC_Stock_024'].startDay, data['TC_Stock_024'].startMonth, data['TC_Stock_024'].startYear);
  
    await stockTasksetupPage.enterStartTime(data['TC_Stock_024'].time);

    await stockTasksetupPage.enterValidDataInFrequencyDropdown(data['TC_Stock_024'].frequencyType);

    await stockTasksetupPage.clickOnRepeatOkButton();

    await stockTasksetupPage.verifyCancelButtonIsPresent();

    await stockTasksetupPage.clickOnCancelButton();

    await stockTasksetupPage.verifyRecordIsCancelledSuccessfully();

});
test.only("TC_Stock_025 Verify that LIU should able to see current details inside recipients section @prod", async ({ page }) => 
{
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const stockLandingPage:StockLandingPage=new StockLandingPage(page);
    const stockTasksetupPage:StockTasksetupPage=new StockTasksetupPage(page, data['TC_Stock_025'].expectedTaskName,'');

    await loginPage.gotoLoginPage(data['TC_Stock_025'].url);

    await loginPage.loginToApplication(data['TC_Stock_025'].loginUserName, data['TC_Stock_025'].companyCode, data['TC_Stock_025'].loginPassword);
  
    await dashboardPage.clickOnStockModule();

    await dashboardPage.clickOnStockSettings();

    await stockLandingPage.clickOnTaskSetupIcon();

    await stockTasksetupPage.verifyAddButtonIsEnabled();

    await stockTasksetupPage.clickOnTaskAddButton();

    await stockTasksetupPage.enterValidDataInTaskNameInputField(data['TC_Stock_025'].expectedTaskName);

    await stockTasksetupPage.enterValidDataInUrgencyDropdown(data['TC_Stock_025'].urgency);

    await stockTasksetupPage.enterValidDataInMsgInputField(data['TC_Stock_025'].message);

    await stockTasksetupPage.clickOnDueDate();

    await stockTasksetupPage.chooseDueDateFromUniqueCalendar(data['TC_Stock_025'].dueDatePicker, data['TC_Stock_025'].dueDay, data['TC_Stock_025'].dueMonth, data['TC_Stock_025'].dueYear);
  
    await stockTasksetupPage.enterValidDataInTimeInputField(data['TC_Stock_025'].time);

    await stockTasksetupPage.clickOnRepeatButton();

    await stockTasksetupPage.clickOnStartDate();

    await stockTasksetupPage.chooseStartDateFromUniqueCalendar(data['TC_Stock_025'].startDatePicker, data['TC_Stock_025'].startDay, data['TC_Stock_025'].startMonth, data['TC_Stock_025'].startYear);
  
    await stockTasksetupPage.enterStartTime(data['TC_Stock_025'].time);

    await stockTasksetupPage.enterValidDataInFrequencyDropdown(data['TC_Stock_025'].frequencyType);

    await stockTasksetupPage.clickOnRepeatOkButton();

    await stockTasksetupPage.verifySaveButtonIsPresent();

    await stockTasksetupPage.clickOnSaveButton();

    await stockTasksetupPage.enterValidDataInTaskNameFilter(data['TC_Stock_025'].expectedTaskName);

    await stockTasksetupPage.verifyRecordIsAddedSuccessfully();

    await stockTasksetupPage.clickOnRecipientsTab();

    await stockTasksetupPage.clickOnRecipientsEditButton();

    await stockTasksetupPage.enterValidDataInSiteNameDropdown(data['TC_Stock_025'].siteName);

    await stockTasksetupPage.selectProduct();
    
    await stockTasksetupPage.clickOnRecipientsSaveButton();

    await stockTasksetupPage.enterDataInSiteNameFilterField(data['TC_Stock_025'].siteName);

    await stockTasksetupPage.verifyRecordIsAddedSuccessfullyInRecipients();
});

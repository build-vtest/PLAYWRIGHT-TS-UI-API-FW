import { Page, test } from '@playwright/test';
import { LoginPage } from '../../../page-objects/login-page';
// import data from "../../../testdata/driveoff/driveoff-settings.json";
const data = require(`../../../testdata/${process.env.ENV || 'uat'}/driveoff/driveoff-settings.json`) as Record<string, any>;
import { DriveoffSettingspage } from '../../../page-objects/driveoff-pages/driveoff-settings-pages/driveoff-settings-page';
import { DashboardPage } from '../../../page-objects/dashboard-page';

test(" TC Drive_009 Verify that LIU should be able to edit the Settings by clicking the edit button", async ({ page }) => {
  const loginPage: LoginPage = new LoginPage(page);
  const dashboardPage: DashboardPage = new DashboardPage(page);
  const driveoffSettingspage: DriveoffSettingspage = new DriveoffSettingspage(page);

  await loginPage.gotoLoginPage(data['TC Drive_009'].url);

  await loginPage.loginToApplication(data['TC Drive_009'].userNameInput, data['TC Drive_009'].companyCode, data['TC Drive_009'].passwordInput);

  await dashboardPage.clickOnDriveoffModule();

  await dashboardPage.clickOnDriveoffSettings();

  await driveoffSettingspage.verifyAllSettingsAreCheckable();

});



import { test } from '@playwright/test';
import { LoginPage } from '../../../page-objects/login-page';
// import data from "../../../testdata/driveoff/driveoff-dashboard.json";
const data = require(`../../../testdata/${process.env.ENV || 'uat'}/driveoff/driveoff-dashboard.json`) as Record<string, any>;
import { DashboardPage } from '../../../page-objects/dashboard-page';
import { DriveoffDashboardReportsPage } from '../../../page-objects/driveoff-pages/driveoff-reports-pages/driveoff-reports-reports-page';
import { DriveoffVehiclePage } from '../../../page-objects/driveoff-pages/driveoff-driveoff-pages/driveoff-driveoff-vehicle-page';

test(" TC-Drive-001 Verify that Site Name dropdown should allow the LIU to select a Site from the List of Sites as the Report", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffDashboardReportspage: DriveoffDashboardReportsPage = new DriveoffDashboardReportsPage(page);

    await loginPage.gotoLoginPage(data['TC-Drive-001'].url);

    await loginPage.loginToApplication(data['TC-Drive-001'].loginUserName, data['TC-Drive-001'].companyCode, data['TC-Drive-001'].loginPassword);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveOffReport();

    await driveoffDashboardReportspage.chooseSiteFromFilter(data['TC-Drive-001'].siteName);

    await driveoffDashboardReportspage.verifySiteNameIsPopulated(data['TC-Drive-001'].siteName);
});

test(" TC-Drive-002 Verify that Site No. dropdown should automatically populated once the Site Name is selected", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffDashboardReportspage: DriveoffDashboardReportsPage = new DriveoffDashboardReportsPage(page);

    await loginPage.gotoLoginPage(data['TC-Drive-002'].url);

    await loginPage.loginToApplication(data['TC-Drive-002'].loginUserName, data['TC-Drive-002'].companyCode, data['TC-Drive-002'].loginPassword);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveOffReport();

    await driveoffDashboardReportspage.chooseSiteFromFilter(data['TC-Drive-002'].siteName);

    await driveoffDashboardReportspage.verifySiteNumberIsPopulated(data['TC-Drive-002'].siteNumber);

});

test(" TC-Drive-003 Verify that the Site Name dropdown should automatically be populated once the Site No. is selected", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffDashboardReportspage: DriveoffDashboardReportsPage = new DriveoffDashboardReportsPage(page);

    await loginPage.gotoLoginPage(data['TC-Drive-003'].url);

    await loginPage.loginToApplication(data['TC-Drive-003'].loginUserName, data['TC-Drive-003'].companyCode, data['TC-Drive-003'].loginPassword);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveOffReport();

    await driveoffDashboardReportspage.chooseSiteNumberFromFilter(data['TC-Drive-003'].siteNumber);

    await driveoffDashboardReportspage.verifySiteNameIsPopulated(data['TC-Drive-003'].siteName);

});

test(" TC-Drive-004 Verify that by selecting Start Date, End Date user should be able to click on Apply button, details should appear in the Reports grid", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffDashboardReportspage: DriveoffDashboardReportsPage = new DriveoffDashboardReportsPage(page);

    await loginPage.gotoLoginPage(data['TC-Drive-004'].url);

    await loginPage.loginToApplication(data['TC-Drive-004'].loginUserName, data['TC-Drive-004'].companyCode, data['TC-Drive-004'].loginPassword);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveOffReport();

    await driveoffDashboardReportspage.chooseSiteFromFilter(data['TC-Drive-004'].siteName);

    await driveoffDashboardReportspage.verifySiteNumberIsPopulated(data['TC-Drive-004'].siteNumber);

    await driveoffDashboardReportspage.chooseDateFromCalendar(data['TC-Drive-004'].startDateDatePicker, data['TC-Drive-004'].startDateDay, data['TC-Drive-004'].startDateMonth, data['TC-Drive-004'].startDateYear);

    await driveoffDashboardReportspage.chooseDateFromCalendar(data['TC-Drive-004'].endDateDatePicker, data['TC-Drive-004'].endDateDay, data['TC-Drive-004'].endDateMonth, data['TC-Drive-004'].endDateYear);

    await driveoffDashboardReportspage.clickOnApplyButton();

    await driveoffDashboardReportspage.verifyApplyButtonIsClicked();
});

test(" TC-Drive-005 Verify that LIU should be able to export all the Reports in the .csv format", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffDashboardReportspage: DriveoffDashboardReportsPage = new DriveoffDashboardReportsPage(page);

    await loginPage.gotoLoginPage(data['TC-Drive-005'].url);

    await loginPage.loginToApplication(data['TC-Drive-005'].loginUserName, data['TC-Drive-005'].companyCode, data['TC-Drive-005'].loginPassword);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveOffReport();

    await driveoffDashboardReportspage.chooseSiteFromFilter(data['TC-Drive-005'].siteName);

    await driveoffDashboardReportspage.verifySiteNumberIsPopulated(data['TC-Drive-005'].siteNumber);

    await driveoffDashboardReportspage.chooseDateFromCalendar(data['TC-Drive-005'].startDateDatePicker, data['TC-Drive-005'].startDateDay, data['TC-Drive-005'].startDateMonth, data['TC-Drive-005'].startDateYear);

    await driveoffDashboardReportspage.chooseDateFromCalendar(data['TC-Drive-005'].endDateDatePicker, data['TC-Drive-005'].endDateDay, data['TC-Drive-005'].endDateMonth, data['TC-Drive-005'].endDateYear);

    await driveoffDashboardReportspage.clickOnApplyButton();

    await driveoffDashboardReportspage.verifyApplyButtonIsClicked();

    await driveoffDashboardReportspage.clickOnExportButton();

    await driveoffDashboardReportspage.exportAllData();

});

test(" TC-Drive-006 Verify that when the LIU clicks on the Drive Off button should redirect to Drive Off - Drive Off - Vehicle @prod", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffDashboardReportspage: DriveoffDashboardReportsPage = new DriveoffDashboardReportsPage(page);
    const driveoffvehiclepage: DriveoffVehiclePage = new DriveoffVehiclePage(page, '');

    await loginPage.gotoLoginPage(data['TC-Drive-006'].url);

    await loginPage.loginToApplication(data['TC-Drive-006'].loginUserName, data['TC-Drive-006'].companyCode, data['TC-Drive-006'].loginPassword);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveOffReport();

    await driveoffDashboardReportspage.chooseSiteFromFilter(data['TC-Drive-006'].siteName);

    await driveoffDashboardReportspage.verifySiteNumberIsPopulated(data['TC-Drive-006'].siteNumber);

    await driveoffDashboardReportspage.chooseDateFromCalendar(data['TC-Drive-006'].startDateDatePicker, data['TC-Drive-006'].startDateDay, data['TC-Drive-006'].startDateMonth, data['TC-Drive-006'].startDateYear);

    await driveoffDashboardReportspage.chooseDateFromCalendar(data['TC-Drive-006'].endDateDatePicker, data['TC-Drive-006'].endDateDay, data['TC-Drive-006'].endDateMonth, data['TC-Drive-006'].endDateYear);

    await driveoffDashboardReportspage.clickOnApplyButton();

    await driveoffDashboardReportspage.clickOnDriveOffButton();

    await driveoffvehiclepage.verifyDriveOffButtonIsClicked();
});


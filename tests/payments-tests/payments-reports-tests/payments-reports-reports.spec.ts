import { test } from '@playwright/test';
import { LoginPage } from "../../../page-objects/login-page";
import { DashboardPage } from "../../../page-objects/dashboard-page";
// import data from "../../../testdata/payments/payments-reports.json"
const data = require(`../../../testdata/${process.env.ENV || 'uat'}/payments/payments-reports.json`) as Record<string, any>;
import { PaymentsReportsReportsPage } from '../../../page-objects/payments-pages/payments-reports-pages/payments-reports-reports-page';
import { PaymentsLandingPage } from '../../../page-objects/payments-pages/payments-landing-page';

test('TC Pay_011 Verify that LIU should be able to select the Report Type as payments request and should able to see the particular site name inside payment requset section @prod', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const paymentsLandingPage: PaymentsLandingPage = new PaymentsLandingPage(page);
    const paymentsReportsPage: PaymentsReportsReportsPage = new PaymentsReportsReportsPage(page);

    await loginPage.gotoLoginPage(data['TC_Pay_011'].url);

    await loginPage.loginToApplication(data['TC_Pay_011'].loginUserName, data['TC_Pay_011'].companyCode, data['TC_Pay_011'].loginPassword);

    await dashboardPage.clickOnPaymentsModule();

    await dashboardPage.clickOnPaymentsReports();

    await paymentsLandingPage.clickOnReportsIcon();
    
    await paymentsReportsPage.clickOnReportsSubmodule();

    await paymentsReportsPage.clickOnresetButton();

   // await paymentsReportsPage.chooseDateFromCalendar(data['TC_Pay_011'].fromDatePicker, data['TC_Pay_011'].fromDay, data['TC_Pay_011'].fromMonth, data['TC_Pay_011'].fromYear);

   // await paymentsReportsPage.chooseDateFromCalendar(data['TC_Pay_011'].toDatePicker, data['TC_Pay_011'].toDay, data['TC_Pay_011'].toMonth, data['TC_Pay_011'].toYear);

    await paymentsReportsPage.chooseReportType(data['TC_Pay_011'].reportType);

    await paymentsReportsPage.chooseSiteFromFilter(data['TC_Pay_011'].siteName);

    await paymentsReportsPage.clickOnApplyButton();

    await paymentsReportsPage.enterValidDataInSiteNameFilterField(data['TC_Pay_011'].siteName);

    await paymentsReportsPage.verifyDataIsPresent();
});

test('TC Pay_012 Verify that LIU should be able to Apply filter through Sites - Filter data by and verify the details on the respective table @prod', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const paymentsLandingPage: PaymentsLandingPage = new PaymentsLandingPage(page);
    const paymentsReportsPage: PaymentsReportsReportsPage = new PaymentsReportsReportsPage(page);

    await loginPage.gotoLoginPage(data['TC_Pay_012'].url);

    await loginPage.loginToApplication(data['TC_Pay_012'].loginUserName, data['TC_Pay_012'].companyCode, data['TC_Pay_012'].loginPassword);

    await dashboardPage.clickOnPaymentsModule();

    await dashboardPage.clickOnPaymentsReports();

    await paymentsLandingPage.clickOnReportsIcon();

    await paymentsReportsPage.clickOnReportsSubmodule();

    await paymentsReportsPage.clickOnApplyButton();

    await paymentsReportsPage.verifyAllertComesForSelectinAtleastOneSite();

    await paymentsReportsPage.acceptAllert();

    await paymentsReportsPage.chooseSiteFromFilter(data['TC_Pay_012'].siteName);

    await paymentsReportsPage.clickOnApplyButton();
});


import { test } from '@playwright/test';
import { LoginPage } from '../../page-objects/login-page';
// import data from "../../testdata/payments/payments-payments.json";
const data = require(`../../testdata/${process.env.ENV || 'uat'}/payments/payments-payments.json`) as Record<string, any>;
import { DashboardPage } from '../../page-objects/dashboard-page';
import { PaymentsRequestPage } from '../../page-objects/payments-pages/payments-payments-pages/payments-requests-page';
import { PaymentsLandingPage } from '../../page-objects/payments-pages/payments-landing-page';
import { PaymentsReportsReportsPage } from '../../page-objects/payments-pages/payments-reports-pages/payments-reports-reports-page';
import { PaymentsSettingsPage } from '../../page-objects/payments-pages/payments-settings-pages/payments-settings-settings-page';

test("TC Pay_022 Verify that LIU should be able to navigate Payments,Reports and Settings page from landing page @prod", async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const paymentRequestPage: PaymentsRequestPage = new PaymentsRequestPage(page, "", "", "");
    const paymentReportsPage: PaymentsReportsReportsPage = new PaymentsReportsReportsPage(page);
    const paymentSettingsPage: PaymentsSettingsPage = new PaymentsSettingsPage(page);
    const paymentsLandingPage: PaymentsLandingPage = new PaymentsLandingPage(page);

    await loginPage.gotoLoginPage(data['TC_Pay_022'].url);

    await loginPage.loginToApplication(data['TC_Pay_022'].userNameInput, data['TC_Pay_022'].companyCode, data['TC_Pay_022'].passwordInput);

    await dashboardPage.clickOnPaymentsModule();

    await paymentsLandingPage.clickOnPaymentsIcon();

    await paymentRequestPage.verifyNavigatedToPaymentsSubmodule();

    await dashboardPage.clickOnPaymentsReports();

    await paymentsLandingPage.clickOnReportsIcon();

    await paymentReportsPage.verifyNavigatedToReportsSubmodule();

    await dashboardPage.clickOnPaymentsSettings();

    await paymentsLandingPage.clickOnSettingsIcon();

    await paymentSettingsPage.verifyNavigatedToSettingsSubmodule();

    await dashboardPage.clickOnPaymentsModule();
});

test("TC Pay_023 Verify that LIU should be able to export all the data in the .csv format and should able to click on export all data and export selected rows.", async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const paymentRequestPage: PaymentsRequestPage = new PaymentsRequestPage(page, "", "", "");
    const paymentReportsPage: PaymentsReportsReportsPage = new PaymentsReportsReportsPage(page);
    const paymentSettingsPage: PaymentsSettingsPage = new PaymentsSettingsPage(page);
    const paymentsLandingPage: PaymentsLandingPage = new PaymentsLandingPage(page);

    await loginPage.gotoLoginPage(data['TC_Pay_023'].url);

    await loginPage.loginToApplication(data['TC_Pay_023'].userNameInput, data['TC_Pay_023'].companyCode, data['TC_Pay_023'].passwordInput);

    await dashboardPage.clickOnPaymentsModule();

    await paymentsLandingPage.clickOnPaymentsIcon();

    await paymentRequestPage.verifyNavigatedToPaymentsSubmodule();

    await dashboardPage.clickOnPaymentsModule();

    await paymentsLandingPage.clickOnReportsIcon();

    await paymentReportsPage.verifyNavigatedToReportsSubmodule();

    await dashboardPage.clickOnPaymentsModule();

    await paymentsLandingPage.clickOnSettingsIcon();

    await paymentSettingsPage.verifyNavigatedToSettingsSubmodule();

    await dashboardPage.clickOnPaymentsModule();
});

test("TC Pay_024 Verify that LIU should be able to view payments landing page by clicking on view icon", async ({ page }) => {

    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const paymentRequestPage: PaymentsRequestPage = new PaymentsRequestPage(page, "", "", "");
    const paymentReportsPage: PaymentsReportsReportsPage = new PaymentsReportsReportsPage(page);
    const paymentSettingsPage: PaymentsSettingsPage = new PaymentsSettingsPage(page);
    const paymentsLandingPage: PaymentsLandingPage = new PaymentsLandingPage(page);

    await loginPage.gotoLoginPage(data['TC_Pay_024'].url);

    await loginPage.loginToApplication(data['TC_Pay_024'].userNameInput, data['TC_Pay_024'].companyCode, data['TC_Pay_024'].passwordInput);

    await dashboardPage.clickOnPaymentsModule();

    await paymentsLandingPage.clickOnPaymentsIcon();

    await paymentRequestPage.verifyNavigatedToPaymentsSubmodule();

    await dashboardPage.clickOnPaymentsModule();

    await paymentsLandingPage.clickOnReportsIcon();

    await paymentReportsPage.verifyNavigatedToReportsSubmodule();

    await dashboardPage.clickOnPaymentsModule();

    await paymentsLandingPage.clickOnSettingsIcon();

    await paymentSettingsPage.verifyNavigatedToSettingsSubmodule();

    await dashboardPage.clickOnPaymentsModule();
});
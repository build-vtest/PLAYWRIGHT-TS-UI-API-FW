
import { test } from '@playwright/test';
import { LoginPage } from '../../../page-objects/login-page';
// import data from "../../../testdata/payments/payments-reports.json";
const data = require(`../../../testdata/${process.env.ENV || 'uat'}/payments/payments-reports.json`) as Record<string, any>;
import { DashboardPage } from '../../../page-objects/dashboard-page';
import { PaymentsReportsReportsPage } from '../../../page-objects/payments-pages/payments-reports-pages/payments-reports-reports-page';
import { PaymentsInvoicePage } from '../../../page-objects/payments-pages/payments-reports-pages/payments-reports-invoices-page';
import { DatePicker } from '../../../page-objects/utilities-pages/datePicker';

test(" TC Pay_014 Verify that LIU should be able to Apply the filter by selecting Start Date and End Date and observe the details in the Invoices grid", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const paymentsReportsPage: PaymentsReportsReportsPage = new PaymentsReportsReportsPage(page);
    const paymentsInvoicesPage: PaymentsInvoicePage = new PaymentsInvoicePage(page);

    await loginPage.gotoLoginPage(data['TC_Pay_014'].url);

    await loginPage.loginToApplication(data['TC_Pay_014'].userNameInput, data['TC_Pay_014'].companyCode, data['TC_Pay_014'].passwordInput);

    await dashboardPage.clickOnPaymentsModule();

    await dashboardPage.clickOnPaymentsReports();

    await paymentsReportsPage.clickOnInvoicesSubmodule();

    await paymentsInvoicesPage.verifyApplyButtonIsVisible();

    await paymentsInvoicesPage.clickOnApplyButton();
});

test(" TC Pay_015 Verify that LIU should be able to Export all the data in the.csv format", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const paymentsReportsPage: PaymentsReportsReportsPage = new PaymentsReportsReportsPage(page);
    const paymentsInvoicesPage: PaymentsInvoicePage = new PaymentsInvoicePage(page);

    await loginPage.gotoLoginPage(data['TC_Pay_015'].url);

    await loginPage.loginToApplication(data['TC_Pay_015'].userNameInput, data['TC_Pay_015'].companyCode, data['TC_Pay_015'].passwordInput);

    await dashboardPage.clickOnPaymentsModule();

    await dashboardPage.clickOnPaymentsReports();

    await paymentsReportsPage.clickOnInvoicesSubmodule();

    await paymentsInvoicesPage.verifyApplyButtonIsVisible();

    await paymentsInvoicesPage.clickOnApplyButton();

    await paymentsInvoicesPage.verifyExportButtonIsPresent();

    await paymentsInvoicesPage.clickOnExportbutton()

    await paymentsInvoicesPage.verifyExportAllDataButtonIsPresent();

    await paymentsInvoicesPage.clickOnExportAllDataButton();
});

test(" TC Pay_016 Verify when the LIU clicks on the Mail icon from the Action column should open a popup and LIU able to enter the valid email address and system should send the invoice to the entered email address @prod", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const paymentsReportsPage: PaymentsReportsReportsPage = new PaymentsReportsReportsPage(page);
    const paymentsInvoicesPage: PaymentsInvoicePage = new PaymentsInvoicePage(page);
    const datePicker: DatePicker = new DatePicker(page);

    await loginPage.gotoLoginPage(data['TC_Pay_016'].url);

    await loginPage.loginToApplication(data['TC_Pay_016'].userNameInput, data['TC_Pay_016'].companyCode, data['TC_Pay_016'].passwordInput);

    await dashboardPage.clickOnPaymentsModule();

    await dashboardPage.clickOnPaymentsReports();

    await paymentsReportsPage.clickOnInvoicesSubmodule();

    await paymentsInvoicesPage.clickOnStartDateDatePicker();
    
    await datePicker.chooseDateFromCalendar(data['TC_Pay_016'].startDatePicker, data['TC_Pay_016'].startDay, data['TC_Pay_016'].startMonth, data['TC_Pay_016'].startYear, data['TC_Pay_016'].index);

    await paymentsInvoicesPage.clickOnEndDateDatePicker();

    await datePicker.chooseDateFromCalendar(data['TC_Pay_016'].endDatePicker, data['TC_Pay_016'].endDay, data['TC_Pay_016'].endMonth, data['TC_Pay_016'].endYear, data['TC_Pay_016'].index);

    await paymentsInvoicesPage.clickOnApplyButton();

    await paymentsInvoicesPage.clickOnMailIcon();

    await paymentsInvoicesPage.enterMailID(data['TC_Pay_016'].email);

    await paymentsInvoicesPage.ClickOnSendMailButton();

    await paymentsInvoicesPage.verifyEmailIsResent(data['TC_Pay_016'].successMessage);
});

test(" TC Pay_017  Verify when the LIU clicks on the Mail icon from the Action column should open a popup and LIU enter the invalid email address and system should throw an error message @prod", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const paymentsReportsPage: PaymentsReportsReportsPage = new PaymentsReportsReportsPage(page);
    const paymentsInvoicesPage: PaymentsInvoicePage = new PaymentsInvoicePage(page);
    const datePicker: DatePicker = new DatePicker(page);

    await loginPage.gotoLoginPage(data['TC_Pay_017'].url);

    await loginPage.loginToApplication(data['TC_Pay_017'].userNameInput, data['TC_Pay_017'].companyCode, data['TC_Pay_017'].passwordInput);

    await dashboardPage.clickOnPaymentsModule();

    await dashboardPage.clickOnPaymentsReports();

    await paymentsReportsPage.clickOnInvoicesSubmodule();

    await paymentsInvoicesPage.clickOnStartDateDatePicker();

    await datePicker.chooseDateFromCalendar(data['TC_Pay_017'].startDatePicker, data['TC_Pay_017'].startDay, data['TC_Pay_017'].startMonth, data['TC_Pay_017'].startYear, data['TC_Pay_017'].index);

    await paymentsInvoicesPage.clickOnEndDateDatePicker();

    await datePicker.chooseDateFromCalendar(data['TC_Pay_017'].endDatePicker, data['TC_Pay_017'].endDay, data['TC_Pay_017'].endMonth, data['TC_Pay_017'].endYear, data['TC_Pay_017'].index);

    await paymentsInvoicesPage.clickOnApplyButton();

    await paymentsInvoicesPage.clickOnMailIcon();

    await paymentsInvoicesPage.enterMailID(data['TC_Pay_017'].incorrectEmail);

    await paymentsInvoicesPage.ClickOnSendMailButton();

    await paymentsInvoicesPage.verifyIncorrectMailMessage();

    await paymentsInvoicesPage.closeIncorrectMailPopup();

    await paymentsInvoicesPage.enterMailID(data['TC_Pay_017'].invalidEmail);

    await paymentsInvoicesPage.ClickOnSendMailButton();

    await paymentsInvoicesPage.verifyInvalidMailMessage();
});

test(" TC Pay_018 Verify when the LIU clicks on the IDisplay Invoice icon from the Action column should open a popup the Invoices on the same page with Ok button @prod", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const paymentsReportsPage: PaymentsReportsReportsPage = new PaymentsReportsReportsPage(page);
    const paymentsInvoicesPage: PaymentsInvoicePage = new PaymentsInvoicePage(page);
    const datePicker: DatePicker = new DatePicker(page);

    await loginPage.gotoLoginPage(data['TC_Pay_018'].url);

    await loginPage.loginToApplication(data['TC_Pay_018'].userNameInput, data['TC_Pay_018'].companyCode, data['TC_Pay_018'].passwordInput);

    await dashboardPage.clickOnPaymentsModule();

    await dashboardPage.clickOnPaymentsReports();

    await paymentsReportsPage.clickOnInvoicesSubmodule();

    await paymentsInvoicesPage.clickOnStartDateDatePicker();

    await datePicker.chooseDateFromCalendar(data['TC_Pay_018'].startDatePicker, data['TC_Pay_018'].startDay, data['TC_Pay_018'].startMonth, data['TC_Pay_018'].startYear, data['TC_Pay_018'].index);

    await paymentsInvoicesPage.clickOnEndDateDatePicker();

    await datePicker.chooseDateFromCalendar(data['TC_Pay_018'].endDatePicker, data['TC_Pay_018'].endDay, data['TC_Pay_018'].endMonth, data['TC_Pay_018'].endYear, data['TC_Pay_018'].index);

    await paymentsInvoicesPage.clickOnApplyButton();

    await paymentsInvoicesPage.clickOnDisplayInvoiceIcon();

    await paymentsInvoicesPage.verifyInvoicePopupIsShown();

    await paymentsInvoicesPage.verifyInvoiceDisplayButtonIsShown();

    await paymentsInvoicesPage.ClickOnInvoiceDisplayOkButton();
});


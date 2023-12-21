
import { test } from '@playwright/test';
import { LoginPage } from "../../../page-objects/login-page";
import { DashboardPage } from "../../../page-objects/dashboard-page";
// import data from "../../../testdata/payments/payments-reports.json"
const data = require(`../../../testdata/${process.env.ENV || 'uat'}/payments/payments-reports.json`) as Record<string, any>;
import { PaymentsReportsReportsPage } from '../../../page-objects/payments-pages/payments-reports-pages/payments-reports-reports-page';
import { PaymentsReportsFormsExtractPage } from '../../../page-objects/payments-pages/payments-reports-pages/payments-reports-forms-extract-page';
import { DatePicker } from '../../../page-objects/utilities-pages/datePicker';

test('TC Pay_013 Verify that LIU should be able to Apply the filter by selecting Start Date and End Date and observe the details in the Form Extract @prod', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const paymentsReportsPage: PaymentsReportsReportsPage = new PaymentsReportsReportsPage(page);
    const paymentsReportsFormsExtractPage: PaymentsReportsFormsExtractPage = new PaymentsReportsFormsExtractPage(page);
    const datePicker: DatePicker = new DatePicker(page);
 

    await loginPage.gotoLoginPage(data['TC_Pay_013'].url);

    await loginPage.loginToApplication(data['TC_Pay_013'].loginUserName, data['TC_Pay_013'].companyCode, data['TC_Pay_013'].loginPassword);

    await dashboardPage.clickOnPaymentsModule();

    await dashboardPage.clickOnPaymentsReports();

    await paymentsReportsPage.clickOnFormsExtractSubmodule();

    await paymentsReportsFormsExtractPage.clickOnStartDateDatePicker();

    await datePicker.chooseDateFromUniqueCalendar(data['TC_Pay_013'].startDatePicker, data['TC_Pay_013'].startDay, data['TC_Pay_013'].startMonth, data['TC_Pay_013'].startYear);

    await paymentsReportsFormsExtractPage.clickOnEndDateDatePicker();

    await datePicker.chooseDateFromUniqueCalendar(data['TC_Pay_013'].endDatePicker, data['TC_Pay_013'].endDay, data['TC_Pay_013'].endMonth, data['TC_Pay_013'].endYear);

   // await paymentsReportsPage.chooseSiteFromFilter(data['TC_Pay_13'].siteName);

    await paymentsReportsFormsExtractPage.clickOnApplyButton();

});
import { test } from '@playwright/test';
import { LoginPage } from '../../../page-objects/login-page';
// import data from "../../../testdata/payments/payments-payments.json";
const data = require(`../../../testdata/${process.env.ENV || 'uat'}/payments/payments-payments.json`) as Record<string, any>;
import { DashboardPage } from '../../../page-objects/dashboard-page';
import { PaymentsPaymentStatusPage } from '../../../page-objects/payments-pages/payments-payments-pages/payments-payment-status-page';
import { PaymentsRequestPage } from '../../../page-objects/payments-pages/payments-payments-pages/payments-requests-page';


test(" TC Pay_019 Verify that LIU should be able to select the Requested or Paid button", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const paymentRequestPage: PaymentsRequestPage = new PaymentsRequestPage(page, "", "", "");
    const paymentStatusPage: PaymentsPaymentStatusPage = new PaymentsPaymentStatusPage(page);

    await loginPage.gotoLoginPage(data['TC_Pay_019'].url);

    await loginPage.loginToApplication(data['TC_Pay_019'].userNameInput, data['TC_Pay_019'].companyCode, data['TC_Pay_019'].passwordInput);

    await dashboardPage.clickOnPaymentsModule();

    await dashboardPage.clickOnPaymentsPayments();

    await paymentRequestPage.clickOnPayemtesStatusSubbmodule();

    await paymentStatusPage.clickOnresetButton();

    await paymentStatusPage.clickOnApplyButton();

    await paymentStatusPage.verifyAllertComesForSelectinAtleastOneSite();

    await paymentStatusPage.acceptAllert();

    await paymentStatusPage.chooseSiteFromFilter(data['TC_Pay_019'].siteName);
  
    await paymentStatusPage.verifyRequestedRadioButtonIsChecked();

    await paymentStatusPage.checkPaidRadioButton();

    await paymentStatusPage.verifyPaidRadioButtonIsChecked();    

    await paymentStatusPage.clickOnApplyButton();

});

test(" TC Pay_020 Verify that LIU should be able to Apply filter through Sites - Filter data and verify the details on the Payment Status grid", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const paymentRequestPage: PaymentsRequestPage = new PaymentsRequestPage(page, "", "", "");
    const paymentStatusPage: PaymentsPaymentStatusPage = new PaymentsPaymentStatusPage(page);
   
    await loginPage.gotoLoginPage(data['TC_Pay_020'].url);

    await loginPage.loginToApplication(data['TC_Pay_020'].userNameInput, data['TC_Pay_020'].companyCode, data['TC_Pay_020'].passwordInput);

    await dashboardPage.clickOnPaymentsModule();

    await dashboardPage.clickOnPaymentsPayments();

    await paymentRequestPage.clickOnPayemtesStatusSubbmodule();

    await paymentStatusPage.clickOnresetButton();

    await paymentStatusPage.clickOnApplyButton();

    await paymentStatusPage.verifyAllertComesForSelectinAtleastOneSite();

    await paymentStatusPage.acceptAllert();

    await paymentStatusPage.chooseSiteFromFilter(data['TC_Pay_020'].siteName);
  
    await paymentStatusPage.verifyRequestedRadioButtonIsChecked();

    await paymentStatusPage.clickOnApplyButton();

    await paymentStatusPage.enterValidDataInFilterField(data['TC_Pay_020'].siteName);
    
    await paymentStatusPage.verifySiteDetailsAreShownInGrid();
});
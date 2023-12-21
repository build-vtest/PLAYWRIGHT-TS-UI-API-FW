import { Page, test } from '@playwright/test';
import { LoginPage } from '../../../page-objects/login-page';
// import data from "../../../testdata/payments/payments-payments.json";
const data = require(`../../../testdata/${process.env.ENV || 'uat'}/payments/payments-payments.json`) as Record<string, any>;
import { PaymentsPayNowPage } from '../../../page-objects/payments-pages/payments-payments-pages/payments.paynow-page';
import { DashboardPage } from '../../../page-objects/dashboard-page';
import { PaymentsPaymentStatusPage } from '../../../page-objects/payments-pages/payments-payments-pages/payments-payment-status-page';
import { PaymentsRequestPage } from '../../../page-objects/payments-pages/payments-payments-pages/payments-requests-page';

test.only("TC Pay_001 Verify that after filling in all the mandatory fields LIU should be able to click on Pay Now button and Pay successfully @prod", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const paymentsPayNowPage: PaymentsPayNowPage = new PaymentsPayNowPage(page);
    const paymentStatusPage: PaymentsPaymentStatusPage = new PaymentsPaymentStatusPage(page);
    const paymentRequestPage: PaymentsRequestPage = new PaymentsRequestPage(page, "", "", "");

    await loginPage.gotoLoginPage(data['TC_Pay_001'].url);

    await loginPage.loginToApplication(data['TC_Pay_001'].userNameInput, data['TC_Pay_001'].companyCode, data['TC_Pay_001'].passwordInput);

    await dashboardPage.clickOnPaymentsModule();

    await paymentsPayNowPage.clickOnPayNowIcon();

    await paymentsPayNowPage.enterMobileNumber(data['TC_Pay_001'].mobileNumber);

    await paymentsPayNowPage.enterEmailTo(data['TC_Pay_001'].email);

    await paymentsPayNowPage.enterFirstName(data['TC_Pay_001'].firstName);

    await paymentsPayNowPage.enterLastName(data['TC_Pay_001'].lastName);

    await paymentsPayNowPage.selectSiteNumerFromDropdown(data['TC_Pay_001'].siteNumber);

    await paymentsPayNowPage.enterRefNumber(data['TC_Pay_001'].refNumber);

    await paymentsPayNowPage.enterVehicalNumber(data['TC_Pay_001'].refNumber);

    await paymentsPayNowPage.enterAmount(data['TC_Pay_001'].amount);

    await paymentsPayNowPage.clickOnPayNowButton();

    await paymentsPayNowPage.enterValidcardHolderName(data['TC_Pay_001'].cardHolderName);

    await paymentsPayNowPage.enterValidCardNumber(data['TC_Pay_001'].cardNumber);

    await paymentsPayNowPage.enterValidExpiryMonth(data['TC_Pay_001'].month);

    await paymentsPayNowPage.enterValidExpiryYear(data['TC_Pay_001'].year);

    await paymentsPayNowPage.enterValidCVN(data['TC_Pay_001'].cvn);

    await paymentsPayNowPage.clickOnProcessPaymentButton();

    await paymentsPayNowPage.verifyPaymentsSuccessfulMsg(data['TC_Pay_001'].paymentSuccessMsg);

    await paymentsPayNowPage.clickOnClosePopupButton();

    await dashboardPage.clickOnPaymentsModule();

    await paymentRequestPage.clickOnPayemtesStatusSubbmodule();

    await paymentStatusPage.selectSiteFromDropdown(data['TC_Pay_001'].siteName);

    await paymentStatusPage.clickOnApplyButton();

    await paymentsPayNowPage.verifyPaymentStatus(data['TC_Pay_001'].paymentStatus);
});
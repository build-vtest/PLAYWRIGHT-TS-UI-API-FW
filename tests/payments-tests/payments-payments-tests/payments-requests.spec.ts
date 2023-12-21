import { Page, test } from '@playwright/test';
import { LoginPage } from '../../../page-objects/login-page';
// import data from "../../../testdata/payments/payments-payments.json";
const data = require(`../../../testdata/${process.env.ENV || 'uat'}/payments/payments-payments.json`) as Record<string, any>;
import { PaymentsRequestPage } from '../../../page-objects/payments-pages/payments-payments-pages/payments-requests-page';

/*test.skip("TC Pay_001 Verify that after filling in all the mandatory fields LIU should be able to click on Pay Now button @prod", async ({ page }) => 
{
    const loginPage: LoginPage = new LoginPage(page) ;
    const paymentsRequestPage:PaymentsRequestPage=new PaymentsRequestPage(page,data['TC_Pay_001'].firstName,data['TC_Pay_001'].lastName,data['TC_Pay_001'].amount,);

    await loginPage.gotoLoginPage(data['TC_Pay_001'].url);

    await loginPage.loginToApplication(data['TC_Pay_001'].userNameInput, data['TC_Pay_001'].companyCode, data['TC_Pay_001'].passwordInput);

    await paymentsRequestPage.clickOnPaymentsModule();

    await paymentsRequestPage.clickOnPaymentRequestSubModule();

    await paymentsRequestPage.enterValidEmailInEmilToField(data['TC_Pay_001'].email);

    await paymentsRequestPage.enterValidDataInFirstNameField(data['TC_Pay_001'].firstName);

    await paymentsRequestPage.enterValidDataInLastNameField(data['TC_Pay_001'].lastName);

    await paymentsRequestPage.selectSiteNo(data['TC_Pay_001'].siteNumber);

    await paymentsRequestPage.enterValidDataInRefNumberField(data['TC_Pay_001'].refNumber);

    await paymentsRequestPage.entervalidDataInAmountField(data['TC_Pay_001'].amount);

    await paymentsRequestPage.verifyPayNowButtonIsVisible();

    await paymentsRequestPage.verifyPayNowButtonIsEnable();

    await paymentsRequestPage.ClickOnPayNowButton();

    await paymentsRequestPage.verifyAmountErrorMessage(data['TC_Pay_001'].ExpectedAmountErrorMessage);

    await paymentsRequestPage.clickOnOkButton();
});*/

test(" TC Pay_002 Verify that after filling in all the mandatory fields LIU should be able to click on Send Payment Request button -email@prod", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const paymentsRequestPage: PaymentsRequestPage = new PaymentsRequestPage(page, data['TC_Pay_002'].firstName, data['TC_Pay_002'].lastName, data['TC_Pay_002'].amount);
    await loginPage.gotoLoginPage(data['TC_Pay_002'].url);

    await loginPage.loginToApplication(data['TC_Pay_002'].userNameInput, data['TC_Pay_002'].companyCode, data['TC_Pay_002'].passwordInput);

    await paymentsRequestPage.clickOnPaymentsModule();

    await paymentsRequestPage.clickOnPaymentRequestSubModule();

    await paymentsRequestPage.enterValidEmailInEmilToField(data['TC_Pay_002'].emailTo);

    await paymentsRequestPage.enterValidDataInFirstNameField(data['TC_Pay_002'].firstName);

    await paymentsRequestPage.enterValidDataInLastNameField(data['TC_Pay_002'].lastName);

    await paymentsRequestPage.selectSiteNo(data['TC_Pay_002'].siteNumber);

    await paymentsRequestPage.enterValidDataInRefNumberField(data['TC_Pay_002'].refNumber);

    await paymentsRequestPage.entervalidDataInAmountField(data['TC_Pay_002'].amount);

    await paymentsRequestPage.enterVehicleNumber(data['TC_Pay_002'].vehicleNumber);

    await paymentsRequestPage.verifySendPaymentsRequestButtonIsEnable();

    await paymentsRequestPage.verifySendPaymentsRequestButtonIsVisible();

    await paymentsRequestPage.clickOnSendPaymentRequestButton();

    await paymentsRequestPage.verifyRequestSentMsg(data['TC_Pay_002'].expectedReqSentMsg);
});

//Bug
test.only(" TC Pay_006 Verify that after filling in all the mandatory fields LIU should be able to click on Send Payment Request button -sms @prod", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const paymentsRequestPage: PaymentsRequestPage = new PaymentsRequestPage(page, data['TC_Pay_006'].firstName, data['TC_Pay_006'].lastName, data['TC_Pay_006'].amount);

    await loginPage.gotoLoginPage(data['TC_Pay_006'].url);

    await loginPage.loginToApplication(data['TC_Pay_006'].userNameInput, data['TC_Pay_006'].companyCode, data['TC_Pay_006'].passwordInput);

    await paymentsRequestPage.clickOnPaymentsModule();

    await paymentsRequestPage.clickOnPaymentRequestSubModule();

    await paymentsRequestPage.clickOnExpandButton();

    await paymentsRequestPage.selectSmsRadioButton();

    await paymentsRequestPage.selectCountry(data['TC_Pay_006'].country);

    await paymentsRequestPage.enterValidDataInFirstNameField(data['TC_Pay_006'].firstName);

    await paymentsRequestPage.enterValidDataInLastNameField(data['TC_Pay_006'].lastName);

    await paymentsRequestPage.selectSiteNo(data['TC_Pay_006'].siteNumber);

    await paymentsRequestPage.enterValidDataInRefNumberField(data['TC_Pay_006'].refNumber);

    await paymentsRequestPage.entervalidDataInAmountField(data['TC_Pay_006'].amount);

    await paymentsRequestPage.enterVehicleNumber(data['TC_Pay_006'].vehicleNumber);

    await paymentsRequestPage.verifySendPaymentsRequestButtonIsEnable();

    await paymentsRequestPage.verifySendPaymentsRequestButtonIsVisible();

    await paymentsRequestPage.clickOnSendPaymentRequestButton();

    await paymentsRequestPage.enterValidMobileNo(data['TC_Pay_006'].mobileNumber);

    await paymentsRequestPage.clickOnSendPaymentRequestButton();

    await paymentsRequestPage.verifyRequestSentMsg(data['TC_Pay_006'].expectedReqSentMsg);
});

test(" TC Pay_003 Verify that LIU should be able to pay when select the Email option @prod", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const paymentsRequestPage: PaymentsRequestPage = new PaymentsRequestPage(page, '', '', '');
    await loginPage.gotoLoginPage(data['TC_Pay_003'].url);

    await loginPage.loginToApplication(data['TC_Pay_003'].userNameInput, data['TC_Pay_003'].companyCode, data['TC_Pay_003'].passwordInput);

    await paymentsRequestPage.clickOnPaymentsModule();

    await paymentsRequestPage.clickOnPaymentRequestSubModule();

    await paymentsRequestPage.clickOnExpandButton();

    await paymentsRequestPage.enterValidEmailInEmilToField(data['TC_Pay_003'].emailTo);

    await paymentsRequestPage.enterValidDataInFirstNameField(data['TC_Pay_003'].firstName);

    await paymentsRequestPage.enterValidDataInLastNameField(data['TC_Pay_003'].lastName);

    await paymentsRequestPage.selectSiteNo(data['TC_Pay_003'].siteNumber);

    await paymentsRequestPage.enterValidDataInRefNumberField(data['TC_Pay_003'].refNumber);

    await paymentsRequestPage.enterVehicleNumber(data['TC_Pay_003'].refNumber);

    await paymentsRequestPage.entervalidDataInAmountField(data['TC_Pay_003'].amount);

   
});
/*
//Bug-Mobile number
test(" TC Pay_004 Verify that LIU should be able to pay when selecting the SMS option @prod", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const paymentsRequestPage: PaymentsRequestPage = new PaymentsRequestPage(page, '', '', '');
    await loginPage.gotoLoginPage(data['TC_Pay_004'].url);

    await loginPage.loginToApplication(data['TC_Pay_004'].userNameInput, data['TC_Pay_004'].companyCode, data['TC_Pay_004'].passwordInput);

    await paymentsRequestPage.clickOnPaymentsModule();

    // await paymentsRequestPage.clickOnPayemtesSubbmodule();

    await paymentsRequestPage.clickOnExpandButton();

    await paymentsRequestPage.selectSmsRadioButton();

    //await paymentsRequestPage.clickOnMobileNoDropdown();

    //await paymentsRequestPage.enterValidDataInSearchmobInputField(data['TC_Pay_004'].countryName);

    await paymentsRequestPage.enterValidMobileNo(data['TC_Pay_004'].mobileNumber);

    await paymentsRequestPage.enterValidDataInFirstNameField(data['TC_Pay_004'].firstName);

    await paymentsRequestPage.enterValidDataInLastNameField(data['TC_Pay_004'].lastName);

    await paymentsRequestPage.selectSiteNo(data['TC_Pay_004'].siteNumber);

    await paymentsRequestPage.enterValidDataInRefNumberField(data['TC_Pay_004'].refNumber);

    await paymentsRequestPage.entervalidDataInAmountField(data['TC_Pay_004'].amount);

    await paymentsRequestPage.verifyPayNowButtonIsVisible();

    await paymentsRequestPage.verifyPayNowButtonIsEnable();

    await paymentsRequestPage.ClickOnPayNowButton();

    await paymentsRequestPage.enterValidcardHolderName(data['TC_Pay_004'].cardHolderName);

    await paymentsRequestPage.enterValidCardNumber(data['TC_Pay_004'].cardNumber);

    await paymentsRequestPage.enterValidExpiryMonth(data['TC_Pay_004'].month);

    await paymentsRequestPage.enterValidExpiryYear(data['TC_Pay_004'].year);

    await paymentsRequestPage.enterValidCVN(data['TC_Pay_004'].cvn);  
});*/

test(" TC Pay_005 Verify all the mandatory validation for Request card(Error Message) @prod", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const paymentsRequestPage: PaymentsRequestPage = new PaymentsRequestPage(page, '', '', '');
    await loginPage.gotoLoginPage(data['TC_Pay_005'].url);

    await loginPage.loginToApplication(data['TC_Pay_005'].userNameInput, data['TC_Pay_005'].companyCode, data['TC_Pay_005'].passwordInput);

    await paymentsRequestPage.clickOnPaymentsModule();

    await paymentsRequestPage.clickOnPaymentRequestSubModule();

    await paymentsRequestPage.clickOnSendPaymentRequestButton();

    await paymentsRequestPage.verifyEmailToFieldErorrMsg(data['TC_Pay_005'].expectedEmailToErrorMsg);

    await paymentsRequestPage.verifySiteNoErrorMsg(data['TC_Pay_005'].expectedSiteNumberErrorMsg);

    await paymentsRequestPage.verifyAmountErrorMsg(data['TC_Pay_005'].expectedAmountErrorMsg);

    await paymentsRequestPage.verifyRefNoErrorMsg(data['TC_Pay_005'].expectedRefNoErrorMsg);
});



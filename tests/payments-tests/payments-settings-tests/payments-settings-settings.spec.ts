import { test } from '@playwright/test';
import { LoginPage } from "../../../page-objects/login-page";
import { DashboardPage } from "../../../page-objects/dashboard-page";
// import data from "../../../testdata/payments/payments-settings.json"
const data = require(`../../../testdata/${process.env.ENV || 'uat'}/payments/payments-settings.json`) as Record<string, any>;
import { PaymentsSettingsPage } from '../../../page-objects/payments-pages/payments-settings-pages/payments-settings-settings-page';
import { PaymentsLandingPage } from '../../../page-objects/payments-pages/payments-landing-page';

test('TC Pay_006 Verify that the LIU should be able to edit all the Settings rows by check or uncheck the checkboxes', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const paymentsSettingsPage: PaymentsSettingsPage = new PaymentsSettingsPage(page);
    const paymentsLandingPage: PaymentsLandingPage = new PaymentsLandingPage(page);

    await loginPage.gotoLoginPage(data['TC_Pay_006'].url);

    await loginPage.loginToApplication(data['TC_Pay_006'].loginUserName, data['TC_Pay_006'].companyCode, data['TC_Pay_006'].loginPassword);

    await dashboardPage.clickOnPaymentsModule();

    await dashboardPage.clickOnPaymentsSettings();

    await paymentsLandingPage.clickOnSettingsIcon();

    await paymentsSettingsPage.verifyAllSettingsAreCheckable();
});

test('TC Pay_007 Verify that LIU should be able to edit the Setup settings by selecting Due Date Days and Expiry Date Days', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const paymentsSettingsPage: PaymentsSettingsPage = new PaymentsSettingsPage(page);

    await loginPage.gotoLoginPage(data['TC_Pay_007'].url);

    await loginPage.loginToApplication(data['TC_Pay_007'].loginUserName, data['TC_Pay_007'].companyCode, data['TC_Pay_007'].loginPassword);

    await dashboardPage.clickOnPaymentsModule();

    await dashboardPage.clickOnPaymentsSettings();

    await paymentsSettingsPage.clickOnSettingsSubmodule();

    await paymentsSettingsPage.clickOnEditSetupButton();

    await paymentsSettingsPage.enterDueDateDays(data['TC_Pay_007'].dueDateDays);

    await paymentsSettingsPage.enterExpiryDateDays(data['TC_Pay_007'].expiryDateDays);

    await paymentsSettingsPage.verifyDueDateDaysAreEntered(data['TC_Pay_007'].dueDateDays);

    await paymentsSettingsPage.verifyExpiryDateDaysAreEntered(data['TC_Pay_007'].expiryDateDays);
});

test('TC Pay_008 Verify that LIU should be able to edit the Company Bank Account only when the Allow Payments for all sites to go to a single company Bank account is marked as checked under Payments > Settings @prod', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const paymentsSettingsPage: PaymentsSettingsPage = new PaymentsSettingsPage(page);

    await loginPage.gotoLoginPage(data['TC_Pay_008'].url);

    await loginPage.loginToApplication(data['TC_Pay_008'].loginUserName, data['TC_Pay_008'].companyCode, data['TC_Pay_008'].loginPassword);

    await dashboardPage.clickOnPaymentsModule();

    await dashboardPage.clickOnPaymentsSettings();

    await paymentsSettingsPage.clickOnSettingsSubmodule();

    await paymentsSettingsPage.checkAllowPaymentsForAllSitesSettingsIfUnchecked(data['TC_Pay_008'].value);

    await paymentsSettingsPage.clickOnEditCompanyBankAccount();

    await paymentsSettingsPage.enterAccountName(data['TC_Pay_008'].accountName);

    await paymentsSettingsPage.enterBSB(data['TC_Pay_008'].bSB);

    await paymentsSettingsPage.enterAccountNumber(data['TC_Pay_008'].accountNumber);

    await paymentsSettingsPage.verifyAccountNameIsEntered(data['TC_Pay_008'].accountName);

    await paymentsSettingsPage.verifyBSBIsEntered(data['TC_Pay_008'].bSB);

    await paymentsSettingsPage.verifyAccountNumberIsEntered(data['TC_Pay_008'].accountNumber);

    await paymentsSettingsPage.saveBankAccoutDetails();

    await paymentsSettingsPage.verifyBankAccountSavedSuccessfully(data['TC_Pay_008'].savedSuccessMessage);

    await paymentsSettingsPage.deleteBankAccoutDetails();

    await paymentsSettingsPage.verifyBankAccountDeleteddSuccessfully(data['TC_Pay_008'].deletedSuccessMessage);

});
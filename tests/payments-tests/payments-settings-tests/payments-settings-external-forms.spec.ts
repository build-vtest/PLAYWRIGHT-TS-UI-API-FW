import { test } from '@playwright/test';
import { LoginPage } from "../../../page-objects/login-page";
import { DashboardPage } from "../../../page-objects/dashboard-page";
// import data from "../../../testdata/payments/payments-settings.json";
const data = require(`../../../testdata/${process.env.ENV || 'uat'}/payments/payments-settings.json`) as Record<string, any>;
import { PaymentSettingsExternalFormPage } from '../../../page-objects/payments-pages/payments-settings-pages/payments-settings-external-forms-page';
import { PaymentsSettingsPage } from '../../../page-objects/payments-pages/payments-settings-pages/payments-settings-settings-page';

test.only('TC 009 Verify that by clicking the + icon LIU should be able to add the new Form Details', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const paymentSettingsExternalFormPage: PaymentSettingsExternalFormPage = new PaymentSettingsExternalFormPage(page, data['TC_Pay_009'].formName, data['TC_Pay_009'].filePrefix, data['TC_Pay_009'].editFormName);
    await loginPage.gotoLoginPage(data['TC_Pay_009'].url);
    const paymentsSettingsPage: PaymentsSettingsPage = new PaymentsSettingsPage(page);

    await loginPage.loginToApplication(data['TC_Pay_009'].loginUserName, data['TC_Pay_009'].companyCode, data['TC_Pay_009'].loginPassword);

    await dashboardPage.clickOnPaymentsModule();

    await dashboardPage.clickOnPaymentsSettings();

    await paymentsSettingsPage.clickOnPaymentSettingsExternalForms();

    await paymentSettingsExternalFormPage.clickOnAddButton();

    await paymentSettingsExternalFormPage.enterValidFormName(data['TC_Pay_009'].formName);

    await paymentSettingsExternalFormPage.selectExpiryDate();

    await paymentSettingsExternalFormPage.selectPublishedCheckbox();

    await paymentSettingsExternalFormPage.selectPreFilledAnswersCheckbox();

    await paymentSettingsExternalFormPage.selectPDFFolder(data['TC_Pay_009'].selectFolder);

    await paymentSettingsExternalFormPage.enterValidFilePrefix();

    await paymentSettingsExternalFormPage.saveFormDetail();

    await paymentSettingsExternalFormPage.verifyAddedForm(data['TC_Pay_009'].formName);
});

test('TC 010 Verify that after filling in all the mandatory fields LIU should be able to click on Save button @prod', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const paymentSettingsExternalFormPage: PaymentSettingsExternalFormPage = new PaymentSettingsExternalFormPage(page, data['TC_Pay_010'].formName, data['TC_Pay_010'].filePrefix, data['TC_Pay_010'].editFormName);
    await loginPage.gotoLoginPage(data['TC_Pay_010'].url);
    const paymentsSettingsPage: PaymentsSettingsPage = new PaymentsSettingsPage(page);

    await loginPage.loginToApplication(data['TC_Pay_010'].loginUserName, data['TC_Pay_010'].companyCode, data['TC_Pay_010'].loginPassword);

    await dashboardPage.clickOnPaymentsModule();

    await dashboardPage.clickOnPaymentsSettings();

    await paymentsSettingsPage.clickOnPaymentSettingsExternalForms();

    await paymentSettingsExternalFormPage.clickOnAddButton();

    await paymentSettingsExternalFormPage.enterValidFormName(data['TC_Pay_010'].formName);

    await paymentSettingsExternalFormPage.selectPDFFolder(data['TC_Pay_010'].selectFolder);

    await paymentSettingsExternalFormPage.enterValidFilePrefix();

    await paymentSettingsExternalFormPage.saveFormDetail();

    await paymentSettingsExternalFormPage.verifyAddedForm(data['TC_Pay_010'].formName);

    //await paymentSettingsExternalFormPage.selectValueFromExistingTemplateDD(data['TC_Pay_010'].existingTemplate);
});

test('TC 021 Verify that when LIU selects the form name on the form details screen the details should be displayed and should be able to edit the form details using the edit button @prod', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const paymentSettingsExternalFormPage: PaymentSettingsExternalFormPage = new PaymentSettingsExternalFormPage(page, data['TC_Pay_021'].formName, data['TC_Pay_021'].filePrefix, data['TC_Pay_021'].editFormName);
    await loginPage.gotoLoginPage(data['TC_Pay_021'].url);
    const paymentsSettingsPage: PaymentsSettingsPage = new PaymentsSettingsPage(page);

    await loginPage.loginToApplication(data['TC_Pay_021'].loginUserName, data['TC_Pay_021'].companyCode, data['TC_Pay_021'].loginPassword);

    await dashboardPage.clickOnPaymentsModule();

    await dashboardPage.clickOnPaymentsSettings();

    await paymentsSettingsPage.clickOnPaymentSettingsExternalForms();

    await paymentSettingsExternalFormPage.clickOnAddButton();

    await paymentSettingsExternalFormPage.enterValidFormName(data['TC_Pay_021'].formName);

    await paymentSettingsExternalFormPage.selectPDFFolder(data['TC_Pay_021'].selectFolder);

    await paymentSettingsExternalFormPage.enterValidFilePrefix();

    await paymentSettingsExternalFormPage.saveFormDetail();

    await paymentSettingsExternalFormPage.verifySelectedForm();

    await paymentSettingsExternalFormPage.clickEditButton();

    await paymentSettingsExternalFormPage.editFormName(data['TC_Pay_021'].editFormName);

    await paymentSettingsExternalFormPage.saveFormDetail();

    await paymentSettingsExternalFormPage.verifyUpdatedForm();
});
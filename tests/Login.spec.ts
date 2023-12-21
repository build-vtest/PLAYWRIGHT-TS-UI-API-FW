import { test } from '@playwright/test';
import { LoginPage } from "../page-objects/login-page";
import { DashboardPage } from "../page-objects/dashboard-page";
// import data from "../testdata/login.json"
const data = require(`../testdata/${process.env.ENV || 'uat'}/login.json`) as Record<string, any>;

// test.beforeEach(async ({ page }) => {
//     const loginPage: LoginPage = new LoginPage(page);

//     await loginPage.gotoLoginPage(data['TC-Admin-46'].url);

//     await loginPage.loginToApplication(data['TC-Admin-46'].userNameInput, data['TC-Admin-46'].companyCode, data['TC-Admin-46'].passwordInput);

// });

test('TC2 Verify that the user is able to Login with Valid Credentials @production', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);

    await loginPage.gotoLoginPage(data['TC-Login-2'].url);

    await loginPage.loginToApplication(data['TC-Login-2'].userNameInput, data['TC-Login-2'].companyCode, data['TC-Login-2'].passwordInput);

    await dashboardPage.verifyPageTitle(data['TC-Login-2'].expectedPageTitle);
});

test('TC3 Verify that the user is not able to Login with an invalid Username and invalid Password @production', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);

    await loginPage.gotoLoginPage(data['TC-Login-3'].url);

    await loginPage.loginToApplication(data['TC-Login-3'].userNameInput, data['TC-Login-3'].companyCode, data['TC-Login-3'].passwordInput);

    await loginPage.verifyErrorMessage(data['TC-Login-3'].errorMessage);
});

test('TC4 Verify that the user is not able to Login with a Valid Username and invalid Password @production', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);

    await loginPage.gotoLoginPage(data['TC-Login-4'].url);

    await loginPage.loginToApplication(data['TC-Login-4'].userNameInput, data['TC-Login-4'].companyCode, data['TC-Login-4'].passwordInput);

    await loginPage.verifyErrorMessage(data['TC-Login-4'].errorMessage);
});

test('TC5 Verify that the user is not able to log in with an invalid Username and Valid Password @production', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);

    await loginPage.gotoLoginPage(data['TC-Login-5'].url);

    await loginPage.loginToApplication(data['TC-Login-5'].userNameInput, data['TC-Login-5'].companyCode, data['TC-Login-5'].passwordInput);

    await loginPage.verifyErrorMessage(data['TC-Login-5'].errorMessage);
});

test('TC6 Verify that the user can copy and paste the password in the password field @production', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);

    await loginPage.gotoLoginPage(data['TC-Login-6'].url);

    await loginPage.pastePassword(data['TC-Login-6'].userNameInput);
});

test('TC7 Verify that the user can copy and paste the username in the username field @production', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);

    await loginPage.gotoLoginPage(data['TC-Login-7'].url);

    await loginPage.pasteUserName(data['TC-Login-7'].userNameInput);
});

test('TC8 Verify that the password field allows blank spaces @production', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);

    await loginPage.gotoLoginPage(data['TC-Login-8'].url);

    await loginPage.loginToApplication(data['TC-Login-8'].userNameInput, data['TC-Login-8'].companyCode, data['TC-Login-8'].passwordInput);

    await dashboardPage.verifyPageTitle(data['TC-Login-8'].expectedPageTitle);
});

test('TC9 Verify that the password field accepts the lowercase and uppercase alphabets @production', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);

    await loginPage.gotoLoginPage(data['TC-Login-9'].url);

    await loginPage.loginToApplication(data['TC-Login-9'].userNameInput, data['TC-Login-9'].companyCode, data['TC-Login-9'].passwordInput);

    await loginPage.verifyErrorMessage(data['TC-Login-9'].errorMessage);
});

test('TC10 Verify that the password field accepts special characters @production', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);

    await loginPage.gotoLoginPage(data['TC-Login-10'].url);

    await loginPage.loginToApplication(data['TC-Login-10'].userNameInput, data['TC-Login-10'].companyCode, data['TC-Login-10'].passwordInput);

    await loginPage.verifyErrorMessage(data['TC-Login-10'].errorMessage);
});

test('TC11 Verify that the password field accepts alphabets @production', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);

    await loginPage.gotoLoginPage(data['TC-Login-11'].url);

    await loginPage.loginToApplication(data['TC-Login-11'].userNameInput, data['TC-Login-11'].companyCode, data['TC-Login-11'].passwordInput);

    await dashboardPage.verifyPageTitle(data['TC-Login-11'].expectedPageTitle);
});

test('TC12 Verify that  the password field accepts numbers @production', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);

    await loginPage.gotoLoginPage(data['TC-Login-12'].url);

    await loginPage.loginToApplication(data['TC-Login-12'].userNameInput, data['TC-Login-12'].companyCode, data['TC-Login-12'].passwordInput);

    await loginPage.verifyErrorMessage(data['TC-Login-12'].errorMessage);
});

test('TC13-a Verify that the user is not able to log in with a blank Username @production', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);

    await loginPage.gotoLoginPage(data['TC-Login-13a'].url);

    await loginPage.loginToApplication(data['TC-Login-13a'].userNameInput, data['TC-Login-13a'].companyCode, data['TC-Login-13a'].passwordInput);

    await loginPage.verifyErrorMessage(data['TC-Login-13a'].errorMessageUserName);
});

test('TC13-b Verify that the user is not able to log in with a blank Password @production', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);

    await loginPage.gotoLoginPage(data['TC-Login-13b'].url);

    await loginPage.loginToApplication(data['TC-Login-13b'].userNameInput, data['TC-Login-13b'].companyCode, data['TC-Login-13b'].passwordInput);

    await loginPage.verifyErrorMessage(data['TC-Login-13b'].errorMessagePassword);
});

test('TC15 Verify that the user is not able to log with invalid Company Code @production', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);

    await loginPage.gotoLoginPage(data['TC-Login-15'].url);

    await loginPage.loginToApplication(data['TC-Login-15'].userNameInput, data['TC-Login-15'].companyCode, data['TC-Login-15'].passwordInput);

    await loginPage.verifyErrorMessage(data['TC-Login-15'].errorMessageCredentials);
});

test('TC18 Verify that for every invalid data, there should be an error prompt @production', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);

    await loginPage.gotoLoginPage(data['TC-Login-18'].url);

    await loginPage.loginToApplication(data['TC-Login-18'].userNameInput, data['TC-Login-18'].companyCode, data['TC-Login-18'].passwordInput);

    await loginPage.verifyErrorMessage(data['TC-Login-18'].errorMessageCredentials);
});

test('TC19 Verify that for every valid data there should be an success prompt @production', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);

    await loginPage.gotoLoginPage(data['TC-Login-19'].url);

    await loginPage.loginToApplication(data['TC-Login-19'].userNameInput, data['TC-Login-19'].companyCode, data['TC-Login-19'].passwordInput);

    await dashboardPage.verifyUserLoggedinSuccessfully();
});

test('TC23 Verify that user is able to reset the password successfully @production', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);

    await loginPage.gotoLoginPage(data['TC-Login-23'].url);

    await loginPage.clickOnForgotPasswordButton();

    await loginPage.resetPassword(data['TC-Login-23'].userNameInput, data['TC-Login-23'].companyCode);

    await loginPage.verifyResetPassword(data['TC-Login-23'].popup);

});
test('TC24 Verify that the user should see "Login Microsoft" button if the user enters the mail Id set under "Single Sign On - Microsoft" and clicks on Login @production', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);

    await loginPage.gotoLoginPage(data['TC-Login-24'].url);

    await loginPage.enterEmailId(data['TC-Login-24'].emailID);

    await loginPage.clickOnLoginButton();

    await loginPage.verifyLoginMicrosoftButtonIsVisible();

    await loginPage.clickOnMicrosoftLoginButton();

});
test('TC25 Verify that the user should see "Login Google" button if the user enters the mail Id set under "Single Sign On - Google" and clicks on Login @production', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);

    await loginPage.gotoLoginPage(data['TC-Login-25'].url);

    await loginPage.enterEmailId(data['TC-Login-25'].emailID);

    await loginPage.clickOnLoginButton();

    await loginPage.verifyLoginGoogleButtonIsVisible();

    await loginPage.clickOnGoogleLoginButton();
});

test('TC_30 Verify that the Super Admin should not be able to Login with an invalid Username and invalid Password @production', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);

    await loginPage.gotoLoginPage(data['TC-Login-30'].url);

    await loginPage.enterLoginDetails(data['TC-Login-30'].userNameInput, data['TC-Login-30'].companyCode, data['TC-Login-30'].passwordInput);

    await loginPage.clickOnLoginButton();

    await dashboardPage.verifyUserNotLoggedinSuccessfully();
});

test('TC38 Verify that by default username and Company Name showing in the field when the user checked to remember me checkbox and visits the site again @production', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);

    await loginPage.gotoLoginPage(data['TC-Login-38'].url);

    await loginPage.loginToApplication(data['TC-Login-38'].userNameInput, data['TC-Login-38'].companyCode, data['TC-Login-38'].passwordInput);

    await dashboardPage.clickOnAdmin();

    await loginPage.verifyUsernameAndPasswordField(data['TC-Login-38'].url, data['TC-Login-38'].userNameInput, data['TC-Login-38'].passwordInput);
});
test('TC 56 Verify that the user should locked out for 60 minutes after 3 unsuccessful login attempts', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);

    await loginPage.gotoLoginPage(data['TC-Login-56'].url);

    await loginPage.enterLoginDetails(data['TC-Login-56'].userNameInput, data['TC-Login-56'].companyCode1, data['TC-Login-56'].passwordInput);

    await loginPage.clickOnLoginButton();

    await loginPage.enterLoginDetails(data['TC-Login-56'].userNameInput, data['TC-Login-56'].companyCode2, data['TC-Login-56'].passwordInput);

    await loginPage.clickOnLoginButton();

    await loginPage.enterLoginDetails(data['TC-Login-56'].userNameInput, data['TC-Login-56'].companyCode3, data['TC-Login-56'].passwordInput);

    await loginPage.clickOnLoginButton();

    await loginPage.verifyUserIsLockedOutForSityMinutes(data['TC-Login-56'].lockedoutErrorMessage);
});

test('TC59 .Verify that the Multi-Factor Authentication should be reflected on Login page if Password is Standard password @production', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);

    await loginPage.gotoLoginPage(data['TC-Login-59'].url);

    await loginPage.enterLoginDetails(data['TC-Login-59'].userNameInput, data['TC-Login-59'].companyCode, data['TC-Login-59'].passwordInput);

    await loginPage.clickOnLoginButton();

    await loginPage.clickOnEmailRadioButton();

    await loginPage.clickOnSevndVerificationCodeButton();

    await loginPage.verifyMFAPopupIsVisible();

    await loginPage.clickOnCloseMFAPopupButton();

    await loginPage.clickOnSmsRadioButton();

    await loginPage.clickOnSevndVerificationCodeButton();

    await loginPage.verifyMFAPopupIsVisible();

    await loginPage.clickOnCloseMFAPopupButton();

    await loginPage.clickOnAuthenticatorAppRadioButton();

    await loginPage.clickOnVerificationCodeButton();

    await loginPage.verifyMFAPopupIsVisible();

    await loginPage.clickOnCloseMFAPopupButton();

    await loginPage.clickOnEmailRadioButton();
});


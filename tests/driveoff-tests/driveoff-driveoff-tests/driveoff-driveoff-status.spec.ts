import { test } from '@playwright/test';
import { LoginPage } from '../../../page-objects/login-page';
// import data from "../../../testdata/driveoff/driveoff-driveoff.json";
const data = require(`../../../testdata/${process.env.ENV || 'uat'}/driveoff/driveoff-driveoff.json`) as Record<string, any>;
import { DriveoffVehiclePage } from '../../../page-objects/driveoff-pages/driveoff-driveoff-pages/driveoff-driveoff-vehicle-page';
import { DriveoffStatusPage } from '../../../page-objects/driveoff-pages/driveoff-driveoff-pages/driveoff-driveoff-status-page';
import { DatePicker } from '../../../page-objects/utilities-pages/datePicker';
import { PaymentsRequestPage } from '../../../page-objects/payments-pages/payments-payments-pages/payments-requests-page';
import { DashboardPage } from '../../../page-objects/dashboard-page';

test(" TC Drive_021 Verify that LIU should be able to edit the Status details", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffvehiclepage: DriveoffVehiclePage = new DriveoffVehiclePage(page, data['TC Drive_021'].expectedRego);
    const driveoffStatusPage: DriveoffStatusPage = new DriveoffStatusPage(page);
    const datePicker: DatePicker = new DatePicker(page);

    await loginPage.gotoLoginPage(data['TC Drive_021'].url);

    await loginPage.loginToApplication(data['TC Drive_021'].userNameInput, data['TC Drive_021'].companyCode, data['TC Drive_021'].passwordInput);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveoffDriveOff();

    await driveoffvehiclepage.verifyAddButtonIsPresent();

    await driveoffvehiclepage.clickOnAddButton();

    await driveoffvehiclepage.enterValidDataInRagoInputField(data['TC Drive_021'].expectedRego);

    await driveoffvehiclepage.chooseArrivalDateFromCalendar(data['TC Drive_021'].dd, data['TC Drive_021'].mm, data['TC Drive_021'].yyyy);

    await driveoffvehiclepage.enterValidDataInArrivalTime(data['TC Drive_021'].arrivalTime);

    await driveoffvehiclepage.chooseDriveoffDateFromCalendar(data['TC Drive_021'].dd, data['TC Drive_021'].mm, data['TC Drive_021'].yyyy);

    await driveoffvehiclepage.enterDriveoffTime(data['TC Drive_021'].driveoffTime);

    await driveoffvehiclepage.selectProductDropdown(data['TC Drive_021'].productName);

    await driveoffvehiclepage.enterValidDataInFuelquantity(data['TC Drive_021'].fuelQuantity);

    await driveoffvehiclepage.enterVlidDataInFuelAmount(data['TC Drive_021'].fuelAmount);

    await driveoffvehiclepage.enterValidDataInRefNumField(data['TC Drive_021'].refNumber);

    await driveoffvehiclepage.enterValidDataInPumpNoField(data['TC Drive_021'].pumpNumber);

    await driveoffvehiclepage.selectSiteFromDropdown(data['TC Drive_021'].siteName);

    await driveoffvehiclepage.selectFailToPayTypeValueFromDropdown(data['TC Drive_021'].failToPayTypeValue);

    await driveoffvehiclepage.selectColorFromDropdown(data['TC Drive_021'].colorName);

    await driveoffvehiclepage.selectDidFAndRMatch(data['TC Drive_021'].didFrontAndValue);

    await driveoffvehiclepage.clickOnSaveButton();

    await driveoffvehiclepage.clickOnStatusTab();

    await driveoffStatusPage.clickOnEditStatusButton();

    await driveoffStatusPage.choosePOliceStatus(data['TC Drive_021'].policeStatus);

    await driveoffStatusPage.clickOnDateReportedDatePicker();

    await datePicker.chooseDateFromUniqueCalendar(data['TC Drive_020'].datePicker, data['TC Drive_020'].dd, data['TC Drive_020'].mm, data['TC Drive_020'].yyyy);

    await driveoffStatusPage.enterPoliceReference(data['TC Drive_021'].policeRefNo);

    await driveoffStatusPage.enterInternalReference(data['TC Drive_021'].internalRefNo);
});

test(" TC Drive_022 Verify that by clicking Pay Now button LIU should be able to Pay ", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffvehiclepage: DriveoffVehiclePage = new DriveoffVehiclePage(page, data['TC Drive_022'].expectedRego);
    const driveoffStatusPage: DriveoffStatusPage = new DriveoffStatusPage(page);
    const paymentsRequestPage: PaymentsRequestPage = new PaymentsRequestPage(page, '', '', '');

    await loginPage.gotoLoginPage(data['TC Drive_022'].url);

    await loginPage.loginToApplication(data['TC Drive_022'].userNameInput, data['TC Drive_022'].companyCode, data['TC Drive_022'].passwordInput);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveoffDriveOff();

    await driveoffvehiclepage.verifyAddButtonIsPresent();

    await driveoffvehiclepage.clickOnAddButton();

    await driveoffvehiclepage.enterValidDataInRagoInputField(data['TC Drive_022'].expectedRego);

    await driveoffvehiclepage.chooseArrivalDateFromCalendar(data['TC Drive_022'].dd, data['TC Drive_022'].mm, data['TC Drive_022'].yyyy);

    await driveoffvehiclepage.enterValidDataInArrivalTime(data['TC Drive_022'].arrivalTime);

    await driveoffvehiclepage.chooseDriveoffDateFromCalendar(data['TC Drive_022'].dd, data['TC Drive_022'].mm, data['TC Drive_022'].yyyy);

    await driveoffvehiclepage.enterDriveoffTime(data['TC Drive_022'].driveoffTime);

    await driveoffvehiclepage.selectProductDropdown(data['TC Drive_022'].productName);

    await driveoffvehiclepage.enterValidDataInFuelquantity(data['TC Drive_022'].fuelQuantity);

    await driveoffvehiclepage.enterVlidDataInFuelAmount(data['TC Drive_022'].fuelAmount);

    await driveoffvehiclepage.enterValidDataInRefNumField(data['TC Drive_022'].refNumber);

    await driveoffvehiclepage.enterValidDataInPumpNoField(data['TC Drive_022'].pumpNumber);

    await driveoffvehiclepage.selectSiteFromDropdown(data['TC Drive_022'].siteName);

    await driveoffvehiclepage.selectFailToPayTypeValueFromDropdown(data['TC Drive_022'].failToPayTypeValue);

    await driveoffvehiclepage.selectColorFromDropdown(data['TC Drive_022'].colorName);

    await driveoffvehiclepage.selectDidFAndRMatch(data['TC Drive_022'].didFrontAndValue);

    await driveoffvehiclepage.clickOnSaveButton();

    await driveoffvehiclepage.clickOnStatusTab();

    await driveoffStatusPage.clickOnPayNowButton();

    await driveoffStatusPage.enterValidDetailsInEmailInputField(data['TC Drive_022'].emailId);

    await driveoffStatusPage.enterValidFirstNameInputField(data['TC Drive_022'].firstName);

    await driveoffStatusPage.enterValidDetailsInLastNameInputField(data['TC Drive_022'].lastName);

    await driveoffStatusPage.clickOnpayNowPopupButton();

    await paymentsRequestPage.enterValidcardHolderName(data['TC Drive_022'].cardHolderName);

    await paymentsRequestPage.enterValidCardNumber(data['TC Drive_022'].cardNumber);

    await paymentsRequestPage.enterValidExpiryMonth(data['TC Drive_022'].month);

    await paymentsRequestPage.enterValidExpiryYear(data['TC Drive_022'].year);

    await paymentsRequestPage.enterValidCVN(data['TC Drive_022'].cvn);

    await paymentsRequestPage.verifyProcessPaymentButtonIsVisible();

    await paymentsRequestPage.clickOnProcessPaymentButton();

    await paymentsRequestPage.verifyPaymentsSuccessfulMsg(data['TC Drive_022'].paymentSuccessMsg);

    await paymentsRequestPage.clickOnCloseButton();

});
//Demo test case
test.only(" TC Drive_023 Verify that by clicking the Payment Request button LIU can create the link and send it to the user by entering email @prod", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffvehiclepage: DriveoffVehiclePage = new DriveoffVehiclePage(page, data['TC Drive_023'].expectedRego);
    const driveoffStatusPage: DriveoffStatusPage = new DriveoffStatusPage(page);

    await loginPage.gotoLoginPage(data['TC Drive_023'].url);

    await loginPage.loginToApplication(data['TC Drive_023'].userNameInput, data['TC Drive_023'].companyCode, data['TC Drive_023'].passwordInput);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveoffDriveOff();

    await driveoffvehiclepage.verifyAddButtonIsPresent();

    await driveoffvehiclepage.clickOnAddButton();

    await driveoffvehiclepage.enterValidDataInRagoInputField(data['TC Drive_023'].expectedRego);

    await driveoffvehiclepage.chooseArrivalDateFromCalendar(data['TC Drive_023'].dd, data['TC Drive_023'].mm, data['TC Drive_023'].yyyy);

    await driveoffvehiclepage.enterValidDataInArrivalTime(data['TC Drive_023'].arrivalTime);

    await driveoffvehiclepage.chooseDriveoffDateFromCalendar(data['TC Drive_023'].dd, data['TC Drive_023'].mm, data['TC Drive_023'].yyyy);

    await driveoffvehiclepage.enterDriveoffTime(data['TC Drive_023'].driveoffTime);

    await driveoffvehiclepage.selectProductDropdown(data['TC Drive_023'].productName);

    await driveoffvehiclepage.enterValidDataInFuelquantity(data['TC Drive_023'].fuelQuantity);

    await driveoffvehiclepage.enterVlidDataInFuelAmount(data['TC Drive_023'].fuelAmount);

    await driveoffvehiclepage.enterValidDataInRefNumField(data['TC Drive_023'].refNumber);

    await driveoffvehiclepage.enterValidDataInPumpNoField(data['TC Drive_023'].pumpNumber);

    await driveoffvehiclepage.selectSiteFromDropdown(data['TC Drive_023'].siteName);

    await driveoffvehiclepage.selectFailToPayTypeValueFromDropdown(data['TC Drive_023'].failToPayTypeValue);

    await driveoffvehiclepage.selectColorFromDropdown(data['TC Drive_023'].colorName);

    await driveoffvehiclepage.selectDidFAndRMatch(data['TC Drive_023'].didFrontAndValue);

    await driveoffvehiclepage.clickOnSaveButton();

    await driveoffvehiclepage.verifyRecordIsSavedSuccessfully(data['TC Drive_023'].successfulSavedMessage)

    await driveoffvehiclepage.clickOnStatusTab();

    await driveoffStatusPage.clickOnPaymentRequestButton();

    await driveoffStatusPage.enterValidDetailsInEmailInputField(data['TC Drive_023'].emailId);

    await driveoffStatusPage.enterValidFirstNameInputField(data['TC Drive_023'].firstName);

    await driveoffStatusPage.enterValidDetailsInLastNameInputField(data['TC Drive_023'].lastName);

    await driveoffStatusPage.clickOnCreateLinkPopupButton();

    await driveoffStatusPage.verifyRecordIsSavedSuccessfully(data['TC Drive_023'].expectedPaymentReqSuccessMsg);

    await driveoffStatusPage.clickOnPaymentsReqCloseButton();

});

test(" TC Drive_024 Verify that by clicking the Payment Request button LIU can create the link and send it to the user by entering sms @prod", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffvehiclepage: DriveoffVehiclePage = new DriveoffVehiclePage(page, data['TC Drive_024'].expectedRego);
    const driveoffStatusPage: DriveoffStatusPage = new DriveoffStatusPage(page);

    await loginPage.gotoLoginPage(data['TC Drive_024'].url);

    await loginPage.loginToApplication(data['TC Drive_024'].userNameInput, data['TC Drive_024'].companyCode, data['TC Drive_024'].passwordInput);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveoffDriveOff();

    await driveoffvehiclepage.verifyAddButtonIsPresent();

    await driveoffvehiclepage.clickOnAddButton();

    await driveoffvehiclepage.enterValidDataInRagoInputField(data['TC Drive_024'].expectedRego);

    await driveoffvehiclepage.chooseArrivalDateFromCalendar(data['TC Drive_024'].dd, data['TC Drive_024'].mm, data['TC Drive_024'].yyyy);

    await driveoffvehiclepage.enterValidDataInArrivalTime(data['TC Drive_024'].arrivalTime);

    await driveoffvehiclepage.chooseDriveoffDateFromCalendar(data['TC Drive_024'].dd, data['TC Drive_024'].mm, data['TC Drive_024'].yyyy);

    await driveoffvehiclepage.enterDriveoffTime(data['TC Drive_024'].driveoffTime);

    await driveoffvehiclepage.selectProductDropdown(data['TC Drive_024'].productName);

    await driveoffvehiclepage.enterValidDataInFuelquantity(data['TC Drive_024'].fuelQuantity);

    await driveoffvehiclepage.enterVlidDataInFuelAmount(data['TC Drive_024'].fuelAmount);

    await driveoffvehiclepage.enterValidDataInRefNumField(data['TC Drive_024'].refNumber);

    await driveoffvehiclepage.enterValidDataInPumpNoField(data['TC Drive_024'].pumpNumber);

    await driveoffvehiclepage.selectSiteFromDropdown(data['TC Drive_024'].siteName);

    await driveoffvehiclepage.selectFailToPayTypeValueFromDropdown(data['TC Drive_024'].failToPayTypeValue);

    await driveoffvehiclepage.selectColorFromDropdown(data['TC Drive_024'].colorName);

    await driveoffvehiclepage.selectDidFAndRMatch(data['TC Drive_024'].didFrontAndValue);

    await driveoffvehiclepage.clickOnSaveButton();

    await driveoffvehiclepage.verifyRecordIsSavedSuccessfully(data['TC Drive_024'].successfulSavedMessage)

    await driveoffvehiclepage.clickOnStatusTab();

    await driveoffStatusPage.clickOnPaymentRequestButton();

    await driveoffStatusPage.clickOnSmsRadioButton();

    await driveoffStatusPage.enterValidMobNumberInInputField(data['TC Drive_024'].mobileNumber);

    await driveoffStatusPage.enterValidFirstNameInputField(data['TC Drive_024'].firstName);

    await driveoffStatusPage.enterValidDetailsInLastNameInputField(data['TC Drive_024'].lastName);

    await driveoffStatusPage.clickOnCreateLinkPopupButton();

    await driveoffStatusPage.verifyRecordIsSavedSuccessfully(data['TC Drive_024'].expectedPaymentReqSuccessMsg);

    await driveoffStatusPage.clickOnPaymentsReqCloseButton();
});





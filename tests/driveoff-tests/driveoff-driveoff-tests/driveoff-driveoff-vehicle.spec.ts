import { test } from '@playwright/test';
import { LoginPage } from '../../../page-objects/login-page';
// import data from "../../../testdata/driveoff/driveoff-driveoff.json";
const data = require(`../../../testdata/${process.env.ENV || 'uat'}/driveoff/driveoff-driveoff.json`) as Record<string, any>;
import { DriveoffVehiclePage } from '../../../page-objects/driveoff-pages/driveoff-driveoff-pages/driveoff-driveoff-vehicle-page';
import { DashboardPage } from '../../../page-objects/dashboard-page';

test(" TC Drive_010 Verify that LIU should be able to add a new Vehicle by clicking the " + " icon ", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffvehiclepage:DriveoffVehiclePage=new DriveoffVehiclePage(page,data['TC Drive_010'].expectedRego);

    await loginPage.gotoLoginPage(data['TC Drive_010'].url);

    await loginPage.loginToApplication(data['TC Drive_010'].userNameInput, data['TC Drive_010'].companyCode, data['TC Drive_010'].passwordInput);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveoffDriveOff();

    await driveoffvehiclepage.verifyAddButtonIsPresent();

    await driveoffvehiclepage.clickOnAddButton();

    await driveoffvehiclepage.enterValidDataInRagoInputField(data['TC Drive_010'].expectedRego);

    await driveoffvehiclepage.chooseArrivalDateFromCalendar(data['TC Drive_010'].dd, data['TC Drive_010'].mm, data['TC Drive_010'].yyyy);

    await driveoffvehiclepage.enterValidDataInArrivalTime(data['TC Drive_010'].arrivalTime);

    await driveoffvehiclepage.chooseDriveoffDateFromCalendar(data['TC Drive_010'].dd1, data['TC Drive_010'].mm1, data['TC Drive_010'].yyyy1);

    await driveoffvehiclepage.enterDriveoffTime(data['TC Drive_010'].driveoffTime);

    await driveoffvehiclepage.selectProductDropdown(data['TC Drive_010'].productName);

    await driveoffvehiclepage.enterValidDataInFuelquantity(data['TC Drive_010'].fuelQuantity);

    await driveoffvehiclepage.enterVlidDataInFuelAmount(data['TC Drive_010'].fuelAmount);

    await driveoffvehiclepage.enterValidDataInRefNumField(data['TC Drive_010'].refNumber);

    await driveoffvehiclepage.enterValidDataInPumpNoField(data['TC Drive_010'].pumpNumber);

    await driveoffvehiclepage.selectSiteFromDropdown(data['TC Drive_010'].siteName);

    await driveoffvehiclepage.selectFailToPayTypeValueFromDropdown(data['TC Drive_010'].failToPayTypeValue);

    await driveoffvehiclepage.selectColorFromDropdown(data['TC Drive_010'].colorName);

    await driveoffvehiclepage.selectDidFAndRMatch(data['TC Drive_010'].didFrontAndValue);
});

test(" TC Drive_011 Verify that LIU should be able to Save the vehicle details after entering all the valid data @prod", async ({ page }) => 
{
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffvehiclepage:DriveoffVehiclePage=new DriveoffVehiclePage(page,data['TC Drive_011'].expectedRego);
      
    await loginPage.gotoLoginPage(data['TC Drive_011'].url);

    await loginPage.loginToApplication(data['TC Drive_011'].userNameInput, data['TC Drive_011'].companyCode, data['TC Drive_011'].passwordInput);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveoffDriveOff();

    await driveoffvehiclepage.verifyAddButtonIsPresent();

    await driveoffvehiclepage.clickOnAddButton();

    await driveoffvehiclepage.enterValidDataInRagoInputField(data['TC Drive_011'].expectedRego);

    await driveoffvehiclepage.chooseArrivalDateFromCalendar(data['TC Drive_011'].dd, data['TC Drive_011'].mm, data['TC Drive_011'].yyyy);

    await driveoffvehiclepage.enterValidDataInArrivalTime(data['TC Drive_011'].arrivalTime);

    await driveoffvehiclepage.chooseDriveoffDateFromCalendar(data['TC Drive_011'].dd, data['TC Drive_011'].mm, data['TC Drive_011'].yyyy);

    await driveoffvehiclepage.enterDriveoffTime(data['TC Drive_011'].driveoffTime);

    await driveoffvehiclepage.selectProductDropdown(data['TC Drive_011'].productName);

    await driveoffvehiclepage.enterValidDataInFuelquantity(data['TC Drive_011'].fuelQuantity);

    await driveoffvehiclepage.enterVlidDataInFuelAmount(data['TC Drive_011'].fuelAmount);

    await driveoffvehiclepage.enterValidDataInRefNumField(data['TC Drive_011'].refNumber);

    await driveoffvehiclepage.enterValidDataInPumpNoField(data['TC Drive_011'].pumpNumber);

    await driveoffvehiclepage.selectSiteFromDropdown(data['TC Drive_011'].siteName);

    await driveoffvehiclepage.selectFailToPayTypeValueFromDropdown(data['TC Drive_011'].failToPayTypeValue);

    await driveoffvehiclepage.selectColorFromDropdown(data['TC Drive_011'].colorName);

    await driveoffvehiclepage.selectDidFAndRMatch(data['TC Drive_011'].didFrontAndValue);

    await driveoffvehiclepage.verifySaveButtonIsPresent();

    await driveoffvehiclepage.clickOnSaveButton();

    await driveoffvehiclepage.verifyRecordIsSavedSuccessfully(data['TC Drive_011'].successfulSavedMessage);
});

test(" TC Drive_012 Verify that LIU should not be able to Save the vehicle details if enter invalid or wrong details and capture all mandatory messages  @prod", async ({ page }) => 
{
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffvehiclepage:DriveoffVehiclePage=new DriveoffVehiclePage(page,''); 

    await loginPage.gotoLoginPage(data['TC Drive_012'].url);

    await loginPage.loginToApplication(data['TC Drive_012'].userNameInput, data['TC Drive_012'].companyCode, data['TC Drive_012'].passwordInput);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveoffDriveOff();

    await driveoffvehiclepage.verifyAddButtonIsPresent();

    await driveoffvehiclepage.clickOnAddButton();

    await driveoffvehiclepage.verifySaveButtonIsPresent();

    await driveoffvehiclepage.clickOnSaveButton();

    await driveoffvehiclepage.verifyRegoErrorMsg(data['TC Drive_012'].expectedRegoErrorMsg);

    await driveoffvehiclepage.verifyArrivalTimeErrorMsg(data['TC Drive_012'].expectedArrivalTimeErrorMsg);

    await driveoffvehiclepage.verifyDriveoffTimeErrorMsg(data['TC Drive_012'].expectedDriveoffTimeErrorMsg);

    await driveoffvehiclepage.verifyActualFuelQuantityErrorMsg(data['TC Drive_012'].expectedFuelQuantityErrorMsg);

    await driveoffvehiclepage.verifyActualFuelAMountErrorMsg(data['TC Drive_012'].expectedFuelAmountErrorMsg);

    await driveoffvehiclepage.verifyActualRefNumberErrorMsg(data['TC Drive_012'].expectedRefNumberErrorMsg);

    await driveoffvehiclepage.verifyActualPumpNoErrorMsg(data['TC Drive_012'].expectedPumpNumberErrorMsg);
});

test(" TC Drive_025 Verify that LIU should be able to edit Vehicle by clicking the edit icon @prod", async ({ page }) => 
{
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffvehiclepage:DriveoffVehiclePage=new DriveoffVehiclePage(page,data['TC Drive_025'].expectedRego);
   
    await loginPage.gotoLoginPage(data['TC Drive_025'].url);

    await loginPage.loginToApplication(data['TC Drive_025'].userNameInput, data['TC Drive_025'].companyCode, data['TC Drive_025'].passwordInput);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveoffDriveOff();

    await driveoffvehiclepage.clickOnAddButton();

    await driveoffvehiclepage.enterValidDataInRagoInputField(data['TC Drive_025'].expectedRego);

    await driveoffvehiclepage.chooseArrivalDateFromCalendar(data['TC Drive_025'].dd, data['TC Drive_025'].mm, data['TC Drive_025'].yyyy);

    await driveoffvehiclepage.enterValidDataInArrivalTime(data['TC Drive_025'].arrivalTime);

    await driveoffvehiclepage.chooseDriveoffDateFromCalendar(data['TC Drive_025'].dd, data['TC Drive_025'].mm, data['TC Drive_025'].yyyy);

    await driveoffvehiclepage.enterDriveoffTime(data['TC Drive_025'].driveoffTime);

    await driveoffvehiclepage.selectProductDropdown(data['TC Drive_025'].productName);

    await driveoffvehiclepage.enterValidDataInFuelquantity(data['TC Drive_025'].fuelQuantity);

    await driveoffvehiclepage.enterVlidDataInFuelAmount(data['TC Drive_025'].fuelAmount);

    await driveoffvehiclepage.enterValidDataInRefNumField(data['TC Drive_025'].refNumber);

    await driveoffvehiclepage.enterValidDataInPumpNoField(data['TC Drive_025'].pumpNumber);

    await driveoffvehiclepage.selectSiteFromDropdown(data['TC Drive_025'].siteName);

    await driveoffvehiclepage.selectFailToPayTypeValueFromDropdown(data['TC Drive_025'].failToPayTypeValue);

    await driveoffvehiclepage.selectColorFromDropdown(data['TC Drive_025'].colorName);

    await driveoffvehiclepage.selectDidFAndRMatch(data['TC Drive_025'].didFrontAndValue);

    await driveoffvehiclepage.verifySaveButtonIsPresent();

    await driveoffvehiclepage.clickOnSaveButton();

    await driveoffvehiclepage.verifyRecordIsSavedSuccessfully(data['TC Drive_025'].successfulSavedMessage);

    await driveoffvehiclepage.clickOnEditButton();

    await driveoffvehiclepage.verifyArrivalTimeIsEditable();

    await driveoffvehiclepage.verifyDriveoffTimeIsEditable();

    await driveoffvehiclepage.verifyProductInputDropdownIsEditable();

    await driveoffvehiclepage.verifyFuelQuantityTextboxIsEditable();

    await driveoffvehiclepage.verifyFuelAmountTextboxIsEditable();

    await driveoffvehiclepage.verifyRefNumberTextboxIsEditable();

    await driveoffvehiclepage.verifyPumpNumberTextboxIsEditable();

    await driveoffvehiclepage.verifyFailToPayTypeIsEditable();

    await driveoffvehiclepage.verifyColourInputTypeIsEditable();

    await driveoffvehiclepage.verifyDidFrontAndRearIsEditable();
});


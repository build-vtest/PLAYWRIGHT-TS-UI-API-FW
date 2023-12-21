import { Page, test } from '@playwright/test';
import { LoginPage } from '../../../page-objects/login-page';
// import data from "../../../testdata/driveoff/driveoff-driveoff.json";
const data = require(`../../../testdata/${process.env.ENV || 'uat'}/driveoff/driveoff-driveoff.json`) as Record<string, any>;
import { DriveoffSuspectsPage } from '../../../page-objects/driveoff-pages/driveoff-driveoff-pages/driveoff-driveoff-suspects-page';
import { DriveoffVehiclePage } from '../../../page-objects/driveoff-pages/driveoff-driveoff-pages/driveoff-driveoff-vehicle-page';
import { DashboardPage } from '../../../page-objects/dashboard-page';

test(" TC Drive_013 Verify after entering the details in the Vehicle card then only the Suspects, Witnesses, Photos/Videos Files, Status should show the edit button @prod", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffvehiclepage: DriveoffVehiclePage = new DriveoffVehiclePage(page, data['TC Drive_013'].expectedRego);

    await loginPage.gotoLoginPage(data['TC Drive_013'].url);

    await loginPage.loginToApplication(data['TC Drive_013'].userNameInput, data['TC Drive_013'].companyCode, data['TC Drive_013'].passwordInput);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveoffDriveOff();

    await driveoffvehiclepage.verifyAddButtonIsPresent();

    await driveoffvehiclepage.clickOnAddButton();

    await driveoffvehiclepage.enterValidDataInRagoInputField(data['TC Drive_013'].expectedRego);

    await driveoffvehiclepage.chooseArrivalDateFromCalendar(data['TC Drive_013'].dd, data['TC Drive_013'].mm, data['TC Drive_013'].yyyy);

    await driveoffvehiclepage.enterValidDataInArrivalTime(data['TC Drive_013'].arrivalTime);

    await driveoffvehiclepage.chooseDriveoffDateFromCalendar(data['TC Drive_013'].dd1, data['TC Drive_013'].mm1, data['TC Drive_013'].yyyy1);

    await driveoffvehiclepage.enterDriveoffTime(data['TC Drive_013'].driveoffTime);

    await driveoffvehiclepage.selectProductDropdown(data['TC Drive_013'].productName);

    await driveoffvehiclepage.enterValidDataInFuelquantity(data['TC Drive_013'].fuelQuantity);

    await driveoffvehiclepage.enterVlidDataInFuelAmount(data['TC Drive_013'].fuelAmount);

    await driveoffvehiclepage.enterValidDataInRefNumField(data['TC Drive_013'].refNumber);

    await driveoffvehiclepage.enterValidDataInPumpNoField(data['TC Drive_013'].pumpNumber);

    await driveoffvehiclepage.selectSiteFromDropdown(data['TC Drive_013'].siteName);

    await driveoffvehiclepage.selectFailToPayTypeValueFromDropdown(data['TC Drive_013'].failToPayTypeValue);

    await driveoffvehiclepage.selectColorFromDropdown(data['TC Drive_013'].colorName);

    await driveoffvehiclepage.selectDidFAndRMatch(data['TC Drive_013'].didFrontAndValue);

    await driveoffvehiclepage.verifySaveButtonIsPresent();

    await driveoffvehiclepage.clickOnSaveButton();

    await driveoffvehiclepage.verifyRecordIsSavedSuccessfully(data['TC Drive_013'].successfulSavedMessage);

    await driveoffvehiclepage.verifySuspectsTabIsEnabled();

    await driveoffvehiclepage.verifyWitnessessTabIsEnabled();

    await driveoffvehiclepage.verifyPhotosOrVideosTabIsEnabled();

    await driveoffvehiclepage.verifyStatusTabIsEnabled();
});

test(" TC Drive_014 Verify that LIU should be able to add the Suspects details successfully and capture the success message @prod", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffSuspectspage: DriveoffSuspectsPage = new DriveoffSuspectsPage(page);
    const driveoffvehiclepage: DriveoffVehiclePage = new DriveoffVehiclePage(page, data['TC Drive_014'].expectedRego);

    await loginPage.gotoLoginPage(data['TC Drive_014'].url);

    await loginPage.loginToApplication(data['TC Drive_014'].userNameInput, data['TC Drive_014'].companyCode, data['TC Drive_014'].passwordInput);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveoffDriveOff();

    await driveoffvehiclepage.verifyAddButtonIsPresent();

    await driveoffvehiclepage.clickOnAddButton();

    await driveoffvehiclepage.enterValidDataInRagoInputField(data['TC Drive_014'].expectedRego);

    await driveoffvehiclepage.chooseArrivalDateFromCalendar(data['TC Drive_014'].dd, data['TC Drive_014'].mm, data['TC Drive_014'].yyyy);

    await driveoffvehiclepage.enterValidDataInArrivalTime(data['TC Drive_014'].arrivalTime);

    await driveoffvehiclepage.chooseDriveoffDateFromCalendar(data['TC Drive_014'].dd1, data['TC Drive_014'].mm1, data['TC Drive_014'].yyyy1);

    await driveoffvehiclepage.enterDriveoffTime(data['TC Drive_014'].driveoffTime);

    await driveoffvehiclepage.selectProductDropdown(data['TC Drive_014'].productName);

    await driveoffvehiclepage.enterValidDataInFuelquantity(data['TC Drive_014'].fuelQuantity);

    await driveoffvehiclepage.enterVlidDataInFuelAmount(data['TC Drive_014'].fuelAmount);

    await driveoffvehiclepage.enterValidDataInRefNumField(data['TC Drive_014'].refNumber);

    await driveoffvehiclepage.enterValidDataInPumpNoField(data['TC Drive_014'].pumpNumber);

    await driveoffvehiclepage.selectSiteFromDropdown(data['TC Drive_014'].siteName);

    await driveoffvehiclepage.selectFailToPayTypeValueFromDropdown(data['TC Drive_014'].failToPayTypeValue);

    await driveoffvehiclepage.selectColorFromDropdown(data['TC Drive_014'].colorName);

    await driveoffvehiclepage.selectDidFAndRMatch(data['TC Drive_014'].didFrontAndValue);

    await driveoffvehiclepage.verifySaveButtonIsPresent();

    await driveoffvehiclepage.clickOnSaveButton();

    await driveoffvehiclepage.verifyRecordIsSavedSuccessfully(data['TC Drive_014'].successfulSavedMessage);

    await driveoffvehiclepage.clickOnSuspectsTab();

    await driveoffSuspectspage.clickOnSuspectsAddButton();

    await driveoffSuspectspage.selectGenderFromDropdown(data['TC Drive_014'].gender);//Defect raised

    await driveoffSuspectspage.enterValidDataInAgeInputField(data['TC Drive_014'].age);

    await driveoffSuspectspage.selectHeightFromDropdown(data['TC Drive_014'].height);

    await driveoffSuspectspage.selectBuildFromInputDropdown(data['TC Drive_014'].build);

    await driveoffSuspectspage.selectEthnicAppearanceFromDropdown(data['TC Drive_014'].ethnicAppearance);

    await driveoffSuspectspage.selectComplexionFromDropdown(data['TC Drive_014'].complexion);

    await driveoffSuspectspage.selectHairColourFromDropdown(data['TC Drive_014'].hairColour);

    await driveoffSuspectspage.selectHairLengthFromDropdown(data['TC Drive_014'].hairLength);

    await driveoffSuspectspage.selectHairStyleFromDropdown(data['TC Drive_014'].hairStyle);

    await driveoffSuspectspage.selectFacialHairFromDropdown(data['TC Drive_014'].facialHair);

    await driveoffSuspectspage.selectFacialHairColourFromDropdown(data['TC Drive_014'].facialHairColour);

    await driveoffSuspectspage.selecteyeColourFromDropdown(data['TC Drive_014'].eyeColour);

    await driveoffSuspectspage.verifySuspectsSaveButtonIsPresent();

    await driveoffSuspectspage.clickOnSuspectsSaveButton();

    await driveoffSuspectspage.verifyRecordIsSavedSuccessfully(data['TC Drive_014'].successfulSavedMessage);
});

test(" TC Drive_015 Verify that LIU should be able to cancel the Suspects details successfully @prod", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffSuspectspage: DriveoffSuspectsPage = new DriveoffSuspectsPage(page);
    const driveoffvehiclepage: DriveoffVehiclePage = new DriveoffVehiclePage(page, data['TC Drive_015'].expectedRego);

    await loginPage.gotoLoginPage(data['TC Drive_015'].url);

    await loginPage.loginToApplication(data['TC Drive_015'].userNameInput, data['TC Drive_015'].companyCode, data['TC Drive_015'].passwordInput);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveoffDriveOff();

    await driveoffvehiclepage.verifyAddButtonIsPresent();

    await driveoffvehiclepage.clickOnAddButton();

    await driveoffvehiclepage.enterValidDataInRagoInputField(data['TC Drive_015'].expectedRego);

    await driveoffvehiclepage.chooseArrivalDateFromCalendar(data['TC Drive_015'].dd, data['TC Drive_015'].mm, data['TC Drive_015'].yyyy);

    await driveoffvehiclepage.enterValidDataInArrivalTime(data['TC Drive_015'].arrivalTime);

    await driveoffvehiclepage.chooseDriveoffDateFromCalendar(data['TC Drive_015'].dd1, data['TC Drive_015'].mm1, data['TC Drive_015'].yyyy1);

    await driveoffvehiclepage.enterDriveoffTime(data['TC Drive_015'].driveoffTime);

    await driveoffvehiclepage.selectProductDropdown(data['TC Drive_015'].productName);

    await driveoffvehiclepage.enterValidDataInFuelquantity(data['TC Drive_015'].fuelQuantity);

    await driveoffvehiclepage.enterVlidDataInFuelAmount(data['TC Drive_015'].fuelAmount);

    await driveoffvehiclepage.enterValidDataInRefNumField(data['TC Drive_015'].refNumber);

    await driveoffvehiclepage.enterValidDataInPumpNoField(data['TC Drive_015'].pumpNumber);

    await driveoffvehiclepage.selectSiteFromDropdown(data['TC Drive_015'].siteName);

    await driveoffvehiclepage.selectFailToPayTypeValueFromDropdown(data['TC Drive_015'].failToPayTypeValue);

    await driveoffvehiclepage.selectColorFromDropdown(data['TC Drive_015'].colorName);

    await driveoffvehiclepage.selectDidFAndRMatch(data['TC Drive_015'].didFrontAndValue);

    await driveoffvehiclepage.verifySaveButtonIsPresent();

    await driveoffvehiclepage.clickOnSaveButton();

    await driveoffvehiclepage.verifyRecordIsSavedSuccessfully(data['TC Drive_015'].successfulSavedMessage);

    await driveoffvehiclepage.clickOnSuspectsTab();

    await driveoffSuspectspage.clickOnSuspectsAddButton();

    await driveoffSuspectspage.selectGenderFromDropdown(data['TC Drive_015'].gender);//Defect Raised

    await driveoffSuspectspage.enterValidDataInAgeInputField(data['TC Drive_015'].age);

    await driveoffSuspectspage.selectHeightFromDropdown(data['TC Drive_015'].height);

    await driveoffSuspectspage.selectBuildFromInputDropdown(data['TC Drive_015'].build);

    await driveoffSuspectspage.selectEthnicAppearanceFromDropdown(data['TC Drive_015'].ethnicAppearance);

    await driveoffSuspectspage.selectComplexionFromDropdown(data['TC Drive_015'].complexion);

    await driveoffSuspectspage.selectHairColourFromDropdown(data['TC Drive_015'].hairColour);

    await driveoffSuspectspage.selectHairLengthFromDropdown(data['TC Drive_015'].hairLength);

    await driveoffSuspectspage.selectHairStyleFromDropdown(data['TC Drive_015'].hairStyle);

    await driveoffSuspectspage.selectFacialHairFromDropdown(data['TC Drive_015'].facialHair);

    await driveoffSuspectspage.selectFacialHairColourFromDropdown(data['TC Drive_015'].facialHairColour);

    await driveoffSuspectspage.selecteyeColourFromDropdown(data['TC Drive_015'].eyeColour);

    await driveoffSuspectspage.verifyCancelButtonIsPresent();

    await driveoffSuspectspage.clickOnSuspectscancelButton();

    await driveoffSuspectspage.verifyRecordIsCancelledSuccessfully();
});

test(" TC Drive_026 Verify that LIU should be able to edit the Suspects details successfully @prod", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffSuspectspage: DriveoffSuspectsPage = new DriveoffSuspectsPage(page);
    const driveoffvehiclepage: DriveoffVehiclePage = new DriveoffVehiclePage(page, data['TC Drive_026'].expectedRego);

    await loginPage.gotoLoginPage(data['TC Drive_026'].url);

    await loginPage.loginToApplication(data['TC Drive_026'].userNameInput, data['TC Drive_026'].companyCode, data['TC Drive_026'].passwordInput);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveoffDriveOff();

    await driveoffvehiclepage.verifyAddButtonIsPresent();

    await driveoffvehiclepage.clickOnAddButton();

    await driveoffvehiclepage.enterValidDataInRagoInputField(data['TC Drive_026'].expectedRego);

    await driveoffvehiclepage.chooseArrivalDateFromCalendar(data['TC Drive_026'].dd, data['TC Drive_026'].mm, data['TC Drive_026'].yyyy);

    await driveoffvehiclepage.enterValidDataInArrivalTime(data['TC Drive_026'].arrivalTime);

    await driveoffvehiclepage.chooseDriveoffDateFromCalendar(data['TC Drive_026'].dd1, data['TC Drive_026'].mm1, data['TC Drive_026'].yyyy1);

    await driveoffvehiclepage.enterDriveoffTime(data['TC Drive_026'].driveoffTime);

    await driveoffvehiclepage.selectProductDropdown(data['TC Drive_026'].productName);

    await driveoffvehiclepage.enterValidDataInFuelquantity(data['TC Drive_026'].fuelQuantity);

    await driveoffvehiclepage.enterVlidDataInFuelAmount(data['TC Drive_026'].fuelAmount);

    await driveoffvehiclepage.enterValidDataInRefNumField(data['TC Drive_026'].refNumber);

    await driveoffvehiclepage.enterValidDataInPumpNoField(data['TC Drive_026'].pumpNumber);

    await driveoffvehiclepage.selectSiteFromDropdown(data['TC Drive_026'].siteName);

    await driveoffvehiclepage.selectFailToPayTypeValueFromDropdown(data['TC Drive_026'].failToPayTypeValue);

    await driveoffvehiclepage.selectColorFromDropdown(data['TC Drive_026'].colorName);

    await driveoffvehiclepage.selectDidFAndRMatch(data['TC Drive_026'].didFrontAndValue);

    await driveoffvehiclepage.verifySaveButtonIsPresent();

    await driveoffvehiclepage.clickOnSaveButton();

    await driveoffvehiclepage.verifyRecordIsSavedSuccessfully(data['TC Drive_026'].successfulSavedMessage);

    await driveoffvehiclepage.clickOnSuspectsTab();

    await driveoffSuspectspage.clickOnSuspectsAddButton();

    await driveoffSuspectspage.selectGenderFromDropdown(data['TC Drive_026'].gender);//Defect Raised

    await driveoffSuspectspage.enterValidDataInAgeInputField(data['TC Drive_026'].age);

    await driveoffSuspectspage.selectHeightFromDropdown(data['TC Drive_026'].height);

    await driveoffSuspectspage.selectBuildFromInputDropdown(data['TC Drive_026'].build);

    await driveoffSuspectspage.selectEthnicAppearanceFromDropdown(data['TC Drive_026'].ethnicAppearance);

    await driveoffSuspectspage.selectComplexionFromDropdown(data['TC Drive_026'].complexion);

    await driveoffSuspectspage.selectHairColourFromDropdown(data['TC Drive_026'].hairColour);

    await driveoffSuspectspage.selectHairLengthFromDropdown(data['TC Drive_026'].hairLength);

    await driveoffSuspectspage.selectHairStyleFromDropdown(data['TC Drive_026'].hairStyle);

    await driveoffSuspectspage.selectFacialHairFromDropdown(data['TC Drive_026'].facialHair);

    await driveoffSuspectspage.selectFacialHairColourFromDropdown(data['TC Drive_026'].facialHairColour);

    await driveoffSuspectspage.selecteyeColourFromDropdown(data['TC Drive_026'].eyeColour);

    await driveoffSuspectspage.verifySuspectsSaveButtonIsPresent();

    await driveoffSuspectspage.clickOnSuspectsSaveButton();

    await driveoffSuspectspage.verifyRecordIsSavedSuccessfully(data['TC Drive_026'].successfulSavedMessage);

    await driveoffSuspectspage.verifySuspectsEditButtonIsPresent();

    await driveoffSuspectspage.clickOnSuspectsEditButton();

    await driveoffSuspectspage.selectGenderFromDropdown(data['TC Drive_026'].updatedGender);

    await driveoffSuspectspage.verifyAgeInputFieldIsEditable();

    await driveoffSuspectspage.enterValidDataInAgeInputField(data['TC Drive_026'].updatedAge);

    await driveoffSuspectspage.verifyHeightDropdwonFieldIsEdiable();

    await driveoffSuspectspage.selectHeightFromDropdown(data['TC Drive_026'].updatedHeight);

    await driveoffSuspectspage.verifyBuildDropdownFieldIsEdiatable();

    await driveoffSuspectspage.selectBuildFromInputDropdown(data['TC Drive_026'].updatedBuild);

    await driveoffSuspectspage.verifyEthnicAppearanceDropdownFieldIsEditable();

    await driveoffSuspectspage.selectEthnicAppearanceFromDropdown(data['TC Drive_026'].updatedEthnicAppearance);

    await driveoffSuspectspage.verifyComplexionDropdownFieldIsEditable();

    await driveoffSuspectspage.selectComplexionFromDropdown(data['TC Drive_026'].updatedComplexion);

    await driveoffSuspectspage.verifyHairColorDropdownFieldIsEditable();

    await driveoffSuspectspage.selectHairColourFromDropdown(data['TC Drive_026'].updatedHairColour);

    await driveoffSuspectspage.verifyHairLengthDropdownFieldIsEditable();

    await driveoffSuspectspage.selectHairLengthFromDropdown(data['TC Drive_026'].updatedHairLength);

    await driveoffSuspectspage.verifyHairStyleDropdownFieldIsEditable();

    await driveoffSuspectspage.selectHairStyleFromDropdown(data['TC Drive_026'].updatedHairStyle);

    await driveoffSuspectspage.verifyFacialHairDropdownFieldIsEditable();

    await driveoffSuspectspage.selectFacialHairFromDropdown(data['TC Drive_026'].updatedFacialHair);

    await driveoffSuspectspage.verifyFacialHairColorDropdownFFieldIsEditable();

    await driveoffSuspectspage.selectFacialHairColourFromDropdown(data['TC Drive_026'].updatedFacialHairColour);

    await driveoffSuspectspage.verifyEyeColorInputDropdownIsEditable();

    await driveoffSuspectspage.selecteyeColourFromDropdown(data['TC Drive_026'].updatedEyeColour);
});

test(" TC Drive_027 Verify that LIU should be able to delete the Suspects details successfully @prod", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffSuspectspage: DriveoffSuspectsPage = new DriveoffSuspectsPage(page);
    const driveoffvehiclepage: DriveoffVehiclePage = new DriveoffVehiclePage(page, data['TC Drive_027'].expectedRego);

    await loginPage.gotoLoginPage(data['TC Drive_027'].url);

    await loginPage.loginToApplication(data['TC Drive_027'].userNameInput, data['TC Drive_027'].companyCode, data['TC Drive_027'].passwordInput);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveoffDriveOff();

    await driveoffvehiclepage.verifyAddButtonIsPresent();

    await driveoffvehiclepage.clickOnAddButton();

    await driveoffvehiclepage.enterValidDataInRagoInputField(data['TC Drive_027'].expectedRego);

    await driveoffvehiclepage.chooseArrivalDateFromCalendar(data['TC Drive_027'].dd, data['TC Drive_027'].mm, data['TC Drive_027'].yyyy);

    await driveoffvehiclepage.enterValidDataInArrivalTime(data['TC Drive_027'].arrivalTime);

    await driveoffvehiclepage.chooseDriveoffDateFromCalendar(data['TC Drive_027'].dd1, data['TC Drive_027'].mm1, data['TC Drive_027'].yyyy1);

    await driveoffvehiclepage.enterDriveoffTime(data['TC Drive_027'].driveoffTime);

    await driveoffvehiclepage.selectProductDropdown(data['TC Drive_027'].productName);

    await driveoffvehiclepage.enterValidDataInFuelquantity(data['TC Drive_027'].fuelQuantity);

    await driveoffvehiclepage.enterVlidDataInFuelAmount(data['TC Drive_027'].fuelAmount);

    await driveoffvehiclepage.enterValidDataInRefNumField(data['TC Drive_027'].refNumber);

    await driveoffvehiclepage.enterValidDataInPumpNoField(data['TC Drive_027'].pumpNumber);

    await driveoffvehiclepage.selectSiteFromDropdown(data['TC Drive_027'].siteName);

    await driveoffvehiclepage.selectFailToPayTypeValueFromDropdown(data['TC Drive_027'].failToPayTypeValue);

    await driveoffvehiclepage.selectColorFromDropdown(data['TC Drive_027'].colorName);

    await driveoffvehiclepage.selectDidFAndRMatch(data['TC Drive_027'].didFrontAndValue);

    await driveoffvehiclepage.verifySaveButtonIsPresent();

    await driveoffvehiclepage.clickOnSaveButton();

    await driveoffvehiclepage.verifyRecordIsSavedSuccessfully(data['TC Drive_027'].successfulSavedMessage);

    await driveoffvehiclepage.clickOnSuspectsTab();

    await driveoffSuspectspage.clickOnSuspectsAddButton();

    await driveoffSuspectspage.selectGenderFromDropdown(data['TC Drive_027'].gender);//Defect Raised

    await driveoffSuspectspage.enterValidDataInAgeInputField(data['TC Drive_027'].age);

    await driveoffSuspectspage.selectHeightFromDropdown(data['TC Drive_027'].height);

    await driveoffSuspectspage.selectBuildFromInputDropdown(data['TC Drive_027'].build);

    await driveoffSuspectspage.selectEthnicAppearanceFromDropdown(data['TC Drive_027'].ethnicAppearance);

    await driveoffSuspectspage.selectComplexionFromDropdown(data['TC Drive_027'].complexion);

    await driveoffSuspectspage.selectHairColourFromDropdown(data['TC Drive_027'].hairColour);

    await driveoffSuspectspage.selectHairLengthFromDropdown(data['TC Drive_027'].hairLength);

    await driveoffSuspectspage.selectHairStyleFromDropdown(data['TC Drive_027'].hairStyle);

    await driveoffSuspectspage.selectFacialHairFromDropdown(data['TC Drive_027'].facialHair);

    await driveoffSuspectspage.selectFacialHairColourFromDropdown(data['TC Drive_027'].facialHairColour);

    await driveoffSuspectspage.selecteyeColourFromDropdown(data['TC Drive_027'].eyeColour);

    await driveoffSuspectspage.verifySuspectsSaveButtonIsPresent();

    await driveoffSuspectspage.clickOnSuspectsSaveButton();

    await driveoffSuspectspage.verifyRecordIsSavedSuccessfully(data['TC Drive_027'].successfulSavedMessage);

    await driveoffSuspectspage.verifySuspectsDeleteButtonIsPresent();

    await driveoffSuspectspage.clickOnSuspectsDeleteButton();

    await driveoffSuspectspage.clickOnDeleteButtonPopup();
});



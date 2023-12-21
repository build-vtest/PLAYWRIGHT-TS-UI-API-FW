import { Page, test } from '@playwright/test';
import { LoginPage } from '../../../page-objects/login-page';
// import data from "../../../testdata/driveoff/driveoff-driveoff.json";
const data = require(`../../../testdata/${process.env.ENV || 'uat'}/driveoff/driveoff-driveoff.json`) as Record<string, any>;
import { DriveoffVehiclePage } from '../../../page-objects/driveoff-pages/driveoff-driveoff-pages/driveoff-driveoff-vehicle-page';
import { DriveoffWitnessesPage } from '../../../page-objects/driveoff-pages/driveoff-driveoff-pages/driveoff-driveoff-witnesses-page';
import { DashboardPage } from '../../../page-objects/dashboard-page';

test("TC Drive_016 Verify that LIU should be able to add the Witnesses details successfully and capture the success message @prod", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffvehiclepage: DriveoffVehiclePage = new DriveoffVehiclePage(page,data['TC Drive_016'].expectedRego);
    const driveoffWitnessesPage:DriveoffWitnessesPage=new DriveoffWitnessesPage(page,data['TC Drive_016'].firstName);

    await loginPage.gotoLoginPage(data['TC Drive_016'].url);

    await loginPage.loginToApplication(data['TC Drive_016'].userNameInput, data['TC Drive_016'].companyCode, data['TC Drive_016'].passwordInput);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveoffDriveOff();
   
    await driveoffvehiclepage.verifyAddButtonIsPresent();

    await driveoffvehiclepage.clickOnAddButton();

    await driveoffvehiclepage.enterValidDataInRagoInputField(data['TC Drive_016'].expectedRego);

    await driveoffvehiclepage.chooseArrivalDateFromCalendar(data['TC Drive_016'].dd, data['TC Drive_016'].mm, data['TC Drive_016'].yyyy);

    await driveoffvehiclepage.enterValidDataInArrivalTime(data['TC Drive_016'].arrivalTime);

    await driveoffvehiclepage.enterDriveoffTime(data['TC Drive_016'].driveoffTime);

    await driveoffvehiclepage.selectProductDropdown(data['TC Drive_016'].productName);

    await driveoffvehiclepage.enterValidDataInFuelquantity(data['TC Drive_016'].fuelQuantity);

    await driveoffvehiclepage.enterVlidDataInFuelAmount(data['TC Drive_016'].fuelAmount);

    await driveoffvehiclepage.enterValidDataInRefNumField(data['TC Drive_016'].refNumber);

    await driveoffvehiclepage.enterValidDataInPumpNoField(data['TC Drive_016'].pumpNumber);

    await driveoffvehiclepage.selectSiteFromDropdown(data['TC Drive_016'].siteName);

    await driveoffvehiclepage.selectFailToPayTypeValueFromDropdown(data['TC Drive_016'].failToPayTypeValue);

    await driveoffvehiclepage.selectColorFromDropdown(data['TC Drive_016'].colorName);

    await driveoffvehiclepage.selectDidFAndRMatch(data['TC Drive_016'].didFrontAndValue);

    await driveoffvehiclepage.verifySaveButtonIsPresent();

    await driveoffvehiclepage.clickOnSaveButton();

    await driveoffvehiclepage.verifyRecordIsSavedSuccessfully(data['TC Drive_016'].successfulSavedMessage);

    await driveoffWitnessesPage.clickOnWitnessesTab();

    await driveoffWitnessesPage.clickOnWitnessAddButton();

    await driveoffWitnessesPage.enterValidDataInFirstNameField(data['TC Drive_016'].firstName);

    await driveoffWitnessesPage.enterValidDataInlastNameInputField(data['TC Drive_016'].lastName);

    await driveoffWitnessesPage.selectDOBFromDropdown(data['TC Drive_016'].dd,data['TC Drive_016'].mm,data['TC Drive_016'].yyyy);

    await driveoffWitnessesPage.enterValidMobileNo(data['TC Drive_016'].mobileNumber);

    await driveoffWitnessesPage.enterValidDataInhomeAddressInputField(data['TC Drive_016'].homeAddress);

    await driveoffWitnessesPage.selectIdentificationTypeFromDropdown(data['TC Drive_016'].identificationType);

    await driveoffWitnessesPage.enterValidDataInIdentityDocNumber(data['TC Drive_016'].identifyDocNumber);

    await driveoffWitnessesPage.selectGenderFromDropdwon(data['TC Drive_016'].gender);

    await driveoffWitnessesPage.verifySaveButtonIsPresent();

    await driveoffWitnessesPage.clickOnSaveButton();

    await driveoffWitnessesPage.verifyRecordIsSavedSuccessfully(data['TC Drive_016'].successfulSavedMessage);   
});

test("TC Drive_017 Verify that LIU should be able to cancel the Witnessess details successfully @prod", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffvehiclepage: DriveoffVehiclePage = new DriveoffVehiclePage(page,'');
    const driveoffWitnessesPage:DriveoffWitnessesPage=new DriveoffWitnessesPage(page,data['TC Drive_017'].firstName);

    await loginPage.gotoLoginPage(data['TC Drive_017'].url);

    await loginPage.loginToApplication(data['TC Drive_017'].userNameInput, data['TC Drive_017'].companyCode, data['TC Drive_017'].passwordInput);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveoffDriveOff();
   
    await driveoffvehiclepage.verifyAddButtonIsPresent();

    await driveoffvehiclepage.clickOnAddButton();

    await driveoffvehiclepage.enterValidDataInRagoInputField(data['TC Drive_017'].expectedRego);

    await driveoffvehiclepage.chooseArrivalDateFromCalendar(data['TC Drive_017'].dd, data['TC Drive_017'].mm, data['TC Drive_017'].yyyy);

    await driveoffvehiclepage.enterValidDataInArrivalTime(data['TC Drive_017'].arrivalTime);

    await driveoffvehiclepage.enterDriveoffTime(data['TC Drive_017'].driveoffTime);

    await driveoffvehiclepage.selectProductDropdown(data['TC Drive_017'].productName);

    await driveoffvehiclepage.enterValidDataInFuelquantity(data['TC Drive_017'].fuelQuantity);

    await driveoffvehiclepage.enterVlidDataInFuelAmount(data['TC Drive_017'].fuelAmount);

    await driveoffvehiclepage.enterValidDataInRefNumField(data['TC Drive_017'].refNumber);

    await driveoffvehiclepage.enterValidDataInPumpNoField(data['TC Drive_017'].pumpNumber);

    await driveoffvehiclepage.selectSiteFromDropdown(data['TC Drive_017'].siteName);

    await driveoffvehiclepage.selectFailToPayTypeValueFromDropdown(data['TC Drive_017'].failToPayTypeValue);

    await driveoffvehiclepage.selectColorFromDropdown(data['TC Drive_017'].colorName);

    await driveoffvehiclepage.selectDidFAndRMatch(data['TC Drive_017'].didFrontAndValue);

    await driveoffvehiclepage.verifySaveButtonIsPresent();

    await driveoffvehiclepage.clickOnSaveButton();

    await driveoffvehiclepage.verifyRecordIsSavedSuccessfully(data['TC Drive_017'].successfulSavedMessage);

    await driveoffWitnessesPage.clickOnWitnessesTab();

    await driveoffWitnessesPage.clickOnWitnessAddButton();

    await driveoffWitnessesPage.enterValidDataInFirstNameField(data['TC Drive_017'].firstName);

    await driveoffWitnessesPage.enterValidDataInlastNameInputField(data['TC Drive_017'].lastName);

    await driveoffWitnessesPage.selectDOBFromDropdown(data['TC Drive_017'].dd,data['TC Drive_017'].mm,data['TC Drive_017'].yyyy);

    await driveoffWitnessesPage.enterValidMobileNo(data['TC Drive_017'].mobileNumber);

    await driveoffWitnessesPage.enterValidDataInhomeAddressInputField(data['TC Drive_017'].homeAddress);

    await driveoffWitnessesPage.selectIdentificationTypeFromDropdown(data['TC Drive_017'].identificationType);

    await driveoffWitnessesPage.enterValidDataInIdentityDocNumber(data['TC Drive_017'].identifyDocNumber);

    await driveoffWitnessesPage.selectGenderFromDropdwon(data['TC Drive_017'].gender);//Defect Raised

    await driveoffWitnessesPage.verifyCancelButtonIsPresent();
    
    await driveoffWitnessesPage.clickOnWitnessescancelButton();

    await driveoffWitnessesPage.verifyRecordIsCancelledSuccessfully(data['TC Drive_017'].successfulSavedMessage);
});
//Demo test case
test("TC Drive_028 Verify that LIU should be able to edit the witnesses details successfully @prod", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffvehiclepage: DriveoffVehiclePage = new DriveoffVehiclePage(page,data['TC Drive_028'].expectedRego);
    const driveoffWitnessesPage:DriveoffWitnessesPage=new DriveoffWitnessesPage(page,data['TC Drive_028'].firstName);

    await loginPage.gotoLoginPage(data['TC Drive_028'].url);

    await loginPage.loginToApplication(data['TC Drive_028'].userNameInput, data['TC Drive_028'].companyCode, data['TC Drive_028'].passwordInput);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveoffDriveOff();
    
    await driveoffvehiclepage.verifyAddButtonIsPresent();

    await driveoffvehiclepage.clickOnAddButton();

    await driveoffvehiclepage.enterValidDataInRagoInputField(data['TC Drive_028'].expectedRego);

    await driveoffvehiclepage.chooseArrivalDateFromCalendar(data['TC Drive_028'].dd, data['TC Drive_028'].mm, data['TC Drive_028'].yyyy);

    await driveoffvehiclepage.enterValidDataInArrivalTime(data['TC Drive_028'].arrivalTime);

    await driveoffvehiclepage.enterDriveoffTime(data['TC Drive_028'].driveoffTime);

    await driveoffvehiclepage.selectProductDropdown(data['TC Drive_028'].productName);

    await driveoffvehiclepage.enterValidDataInFuelquantity(data['TC Drive_028'].fuelQuantity);

    await driveoffvehiclepage.enterVlidDataInFuelAmount(data['TC Drive_028'].fuelAmount);

    await driveoffvehiclepage.enterValidDataInRefNumField(data['TC Drive_028'].refNumber);

    await driveoffvehiclepage.enterValidDataInPumpNoField(data['TC Drive_028'].pumpNumber);

    await driveoffvehiclepage.selectSiteFromDropdown(data['TC Drive_028'].siteName);

    await driveoffvehiclepage.selectFailToPayTypeValueFromDropdown(data['TC Drive_028'].failToPayTypeValue);

    await driveoffvehiclepage.selectColorFromDropdown(data['TC Drive_028'].colorName);

    await driveoffvehiclepage.selectDidFAndRMatch(data['TC Drive_028'].didFrontAndValue);

    await driveoffvehiclepage.verifySaveButtonIsPresent();

    await driveoffvehiclepage.clickOnSaveButton();

    await driveoffvehiclepage.verifyRecordIsSavedSuccessfully(data['TC Drive_028'].successfulSavedMessage);

    await driveoffWitnessesPage.clickOnWitnessesTab();

    await driveoffWitnessesPage.clickOnWitnessAddButton();

    await driveoffWitnessesPage.enterValidDataInFirstNameField(data['TC Drive_028'].firstName);

    await driveoffWitnessesPage.enterValidDataInlastNameInputField(data['TC Drive_028'].lastName);

    await driveoffWitnessesPage.selectDOBFromDropdown(data['TC Drive_028'].dd,data['TC Drive_028'].mm,data['TC Drive_028'].yyyy);

    await driveoffWitnessesPage.enterValidMobileNo(data['TC Drive_016'].mobileNumber);

    await driveoffWitnessesPage.enterValidDataInhomeAddressInputField(data['TC Drive_028'].homeAddress);

    await driveoffWitnessesPage.selectIdentificationTypeFromDropdown(data['TC Drive_028'].identificationType);

    await driveoffWitnessesPage.enterValidDataInIdentityDocNumber(data['TC Drive_028'].identifyDocNumber);

    await driveoffWitnessesPage.selectGenderFromDropdwon(data['TC Drive_028'].gender);

    await driveoffWitnessesPage.verifySaveButtonIsPresent();

    await driveoffWitnessesPage.clickOnSaveButton();

    await driveoffWitnessesPage.verifyRecordIsSavedSuccessfully(data['TC Drive_028'].successfulSavedMessage);

    await driveoffWitnessesPage.verifyWitnessesEditButtonIsPresent();

    await driveoffWitnessesPage.clickOnWitnessesEditButton();

    await driveoffWitnessesPage.verifyFirstNameInputFieldIsEditable();

    await driveoffWitnessesPage.enterValidDataInFirstNameField(data['TC Drive_028'].updatedFirstName);

    await driveoffWitnessesPage.verifyLastNameInputFieldIsEditable();

    await driveoffWitnessesPage.enterValidDataInlastNameInputField(data['TC Drive_028'].updatedLastName);

    await driveoffWitnessesPage.verifyDOBIsEditable();

    await driveoffWitnessesPage.selectDOBFromDropdown(data['TC Drive_028'].dd,data['TC Drive_028'].mm,data['TC Drive_028'].yyyy);

    await driveoffWitnessesPage.verifyMobileNoFieldIsEditable();

    await driveoffWitnessesPage.enterValidMobileNo(data['TC Drive_028'].updatedMobileNumber);

    await driveoffWitnessesPage.verifyHomeAddressInputFieldIsEditabe();

    await driveoffWitnessesPage.enterValidDataInhomeAddressInputField(data['TC Drive_028'].updatedHomeAddress);

    await driveoffWitnessesPage.veifyIdentificationTypeDropdownIsEditable();

    await driveoffWitnessesPage.selectIdentificationTypeFromDropdown(data['TC Drive_028'].updatedIdentificationType);

    await driveoffWitnessesPage.verifyIdentityDocNumberIsEditable();

    await driveoffWitnessesPage.enterValidDataInIdentityDocNumber(data['TC Drive_028'].updatedIdentifyDocNumber);      
});

test("TC Drive_029 Verify that LIU should be able  to delete the witnesses details successfully @prod", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffvehiclepage: DriveoffVehiclePage = new DriveoffVehiclePage(page,data['TC Drive_029'].expectedRego);
    const driveoffWitnessesPage:DriveoffWitnessesPage=new DriveoffWitnessesPage(page,data['TC Drive_029'].firstName);

    await loginPage.gotoLoginPage(data['TC Drive_029'].url);

    await loginPage.loginToApplication(data['TC Drive_029'].userNameInput, data['TC Drive_029'].companyCode, data['TC Drive_029'].passwordInput);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveoffDriveOff();
    
    await driveoffvehiclepage.verifyAddButtonIsPresent();

    await driveoffvehiclepage.clickOnAddButton();

    await driveoffvehiclepage.enterValidDataInRagoInputField(data['TC Drive_029'].expectedRego);

    await driveoffvehiclepage.chooseArrivalDateFromCalendar(data['TC Drive_029'].dd, data['TC Drive_029'].mm, data['TC Drive_029'].yyyy);

    await driveoffvehiclepage.enterValidDataInArrivalTime(data['TC Drive_029'].arrivalTime);

    await driveoffvehiclepage.enterDriveoffTime(data['TC Drive_029'].driveoffTime);

    await driveoffvehiclepage.selectProductDropdown(data['TC Drive_029'].productName);

    await driveoffvehiclepage.enterValidDataInFuelquantity(data['TC Drive_029'].fuelQuantity);

    await driveoffvehiclepage.enterVlidDataInFuelAmount(data['TC Drive_029'].fuelAmount);

    await driveoffvehiclepage.enterValidDataInRefNumField(data['TC Drive_029'].refNumber);

    await driveoffvehiclepage.enterValidDataInPumpNoField(data['TC Drive_029'].pumpNumber);

    await driveoffvehiclepage.selectSiteFromDropdown(data['TC Drive_029'].siteName);

    await driveoffvehiclepage.selectFailToPayTypeValueFromDropdown(data['TC Drive_029'].failToPayTypeValue);

    await driveoffvehiclepage.selectColorFromDropdown(data['TC Drive_029'].colorName);

    await driveoffvehiclepage.selectDidFAndRMatch(data['TC Drive_029'].didFrontAndValue);

    await driveoffvehiclepage.verifySaveButtonIsPresent();

    await driveoffvehiclepage.clickOnSaveButton();

    await driveoffvehiclepage.verifyRecordIsSavedSuccessfully(data['TC Drive_029'].successfulSavedMessage);

    await driveoffWitnessesPage.clickOnWitnessesTab();

    await driveoffWitnessesPage.clickOnWitnessAddButton();

    await driveoffWitnessesPage.enterValidDataInFirstNameField(data['TC Drive_029'].firstName);

    await driveoffWitnessesPage.enterValidDataInlastNameInputField(data['TC Drive_029'].lastName);

    await driveoffWitnessesPage.selectDOBFromDropdown(data['TC Drive_029'].dd,data['TC Drive_029'].mm,data['TC Drive_029'].yyyy);

    await driveoffWitnessesPage.enterValidMobileNo(data['TC Drive_029'].mobileNumber);

    await driveoffWitnessesPage.enterValidDataInhomeAddressInputField(data['TC Drive_029'].homeAddress);

    await driveoffWitnessesPage.selectIdentificationTypeFromDropdown(data['TC Drive_029'].identificationType);

    await driveoffWitnessesPage.enterValidDataInIdentityDocNumber(data['TC Drive_029'].identifyDocNumber);

    await driveoffWitnessesPage.selectGenderFromDropdwon(data['TC Drive_029'].gender);

    await driveoffWitnessesPage.verifySaveButtonIsPresent();

    await driveoffWitnessesPage.clickOnSaveButton();

    await driveoffWitnessesPage.verifyRecordIsSavedSuccessfully(data['TC Drive_029'].successfulSavedMessage);

    await driveoffWitnessesPage.verifyWitnessesDeleteButtonIsPresent();

    await driveoffWitnessesPage.clickOnWitnessesDeleteButton();

    await driveoffWitnessesPage.clickOnDeleteButtonPopup();
});

test("TC Drive_030 Verify that LIU should be able to maximize the witnesses screen successfully", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page) ;
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffvehiclepage: DriveoffVehiclePage = new DriveoffVehiclePage(page,data['TC Drive_030'].expectedRego);
    const driveoffWitnessesPage:DriveoffWitnessesPage=new DriveoffWitnessesPage(page,'');

    await loginPage.gotoLoginPage(data['TC Drive_030'].url);

    await loginPage.loginToApplication(data['TC Drive_030'].userNameInput, data['TC Drive_030'].companyCode, data['TC Drive_030'].passwordInput);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveoffDriveOff();

    await driveoffvehiclepage.verifyAddButtonIsPresent();

    await driveoffvehiclepage.clickOnAddButton();

    await driveoffvehiclepage.enterValidDataInRagoInputField(data['TC Drive_030'].expectedRego);

    await driveoffvehiclepage.chooseArrivalDateFromCalendar(data['TC Drive_030'].dd, data['TC Drive_030'].mm, data['TC Drive_030'].yyyy);

    await driveoffvehiclepage.enterValidDataInArrivalTime(data['TC Drive_030'].arrivalTime);

    await driveoffvehiclepage.enterDriveoffTime(data['TC Drive_030'].driveoffTime);

    await driveoffvehiclepage.selectProductDropdown(data['TC Drive_030'].productName);

    await driveoffvehiclepage.enterValidDataInFuelquantity(data['TC Drive_030'].fuelQuantity);

    await driveoffvehiclepage.enterVlidDataInFuelAmount(data['TC Drive_030'].fuelAmount);

    await driveoffvehiclepage.enterValidDataInRefNumField(data['TC Drive_030'].refNumber);

    await driveoffvehiclepage.enterValidDataInPumpNoField(data['TC Drive_030'].pumpNumber);

    await driveoffvehiclepage.selectSiteFromDropdown(data['TC Drive_030'].siteName);

    await driveoffvehiclepage.selectFailToPayTypeValueFromDropdown(data['TC Drive_030'].failToPayTypeValue);

    await driveoffvehiclepage.selectColorFromDropdown(data['TC Drive_030'].colorName);

    await driveoffvehiclepage.selectDidFAndRMatch(data['TC Drive_030'].didFrontAndValue);

    await driveoffvehiclepage.verifySaveButtonIsPresent();

    await driveoffvehiclepage.clickOnSaveButton();

    await driveoffvehiclepage.verifyRecordIsSavedSuccessfully(data['TC Drive_030'].successfulSavedMessage);

    await driveoffWitnessesPage.clickOnWitnessesTab();

    await driveoffWitnessesPage.verifyExpandButtonIsPresent();

    await driveoffWitnessesPage.clickOnWitnessesExpandButton();

    await driveoffWitnessesPage.verifyWitnessIsMaximizedSuccessfully();


});










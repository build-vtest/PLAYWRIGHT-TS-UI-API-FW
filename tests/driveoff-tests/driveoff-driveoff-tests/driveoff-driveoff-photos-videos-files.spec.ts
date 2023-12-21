import { Page, test } from '@playwright/test';
import { LoginPage } from '../../../page-objects/login-page';
// import data from "../../../testdata/uat/driveoff/driveoff-driveoff.json";
const data = require(`../../../testdata/${process.env.npm_config_ENV || 'uat'}/driveoff/driveoff-driveoff.json`) as Record<string, any>;
import { DriveoffVehiclePage } from '../../../page-objects/driveoff-pages/driveoff-driveoff-pages/driveoff-driveoff-vehicle-page';
import { DriveoffPhotosAndVideospage } from '../../../page-objects/driveoff-pages/driveoff-driveoff-pages/driveoff-driveoff-photos-videos-files-page';
import { DashboardPage } from '../../../page-objects/dashboard-page';

test(" TC Drive_018 Verify that LIU should be able to upload the Receipt successfully by clicking the Upload Receipt button @prod", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffvehiclepage: DriveoffVehiclePage = new DriveoffVehiclePage(page, data['TC Drive_018'].expectedRego);
    const driveoffPhotosAndVideospage: DriveoffPhotosAndVideospage = new DriveoffPhotosAndVideospage(page);

    await loginPage.gotoLoginPage(data['TC Drive_018'].url);

    await loginPage.loginToApplication(data['TC Drive_018'].userNameInput, data['TC Drive_018'].companyCode, data['TC Drive_018'].passwordInput);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveoffDriveOff();

    await driveoffvehiclepage.verifyAddButtonIsPresent();

    await driveoffvehiclepage.clickOnAddButton();

    await driveoffvehiclepage.enterValidDataInRagoInputField(data['TC Drive_018'].expectedRego);

    await driveoffvehiclepage.chooseArrivalDateFromCalendar(data['TC Drive_018'].dd, data['TC Drive_018'].mm, data['TC Drive_018'].yyyy);

    await driveoffvehiclepage.enterValidDataInArrivalTime(data['TC Drive_018'].arrivalTime);

    await driveoffvehiclepage.chooseDriveoffDateFromCalendar(data['TC Drive_018'].dd, data['TC Drive_018'].mm, data['TC Drive_018'].yyyy);

    await driveoffvehiclepage.enterDriveoffTime(data['TC Drive_018'].driveoffTime);

    await driveoffvehiclepage.selectProductDropdown(data['TC Drive_018'].productName);

    await driveoffvehiclepage.enterValidDataInFuelquantity(data['TC Drive_018'].fuelQuantity);

    await driveoffvehiclepage.enterVlidDataInFuelAmount(data['TC Drive_018'].fuelAmount);

    await driveoffvehiclepage.enterValidDataInRefNumField(data['TC Drive_018'].refNumber);

    await driveoffvehiclepage.enterValidDataInPumpNoField(data['TC Drive_018'].pumpNumber);

    await driveoffvehiclepage.selectSiteFromDropdown(data['TC Drive_018'].siteName);

    await driveoffvehiclepage.selectFailToPayTypeValueFromDropdown(data['TC Drive_018'].failToPayTypeValue);

    await driveoffvehiclepage.selectColorFromDropdown(data['TC Drive_018'].colorName);

    await driveoffvehiclepage.selectDidFAndRMatch(data['TC Drive_018'].didFrontAndValue);

    await driveoffvehiclepage.verifySaveButtonIsPresent();

    await driveoffvehiclepage.clickOnSaveButton();

    await driveoffvehiclepage.clickCheckRegoButton();

    await driveoffPhotosAndVideospage.clickOnDriveoffPhotosandVideosSubmodule();

    await driveoffPhotosAndVideospage.clickOnUploadReceiptButton();

    await driveoffPhotosAndVideospage.uploadFileThroughDialog(data['TC Drive_018'].Receipt_path);

    await driveoffPhotosAndVideospage.verifyReceiptIsUploadedSuccessfully(data['TC Drive_018'].expectedUploadedReceiptMessage);

});

test(" TC Drive_019 Verify that LIU should be able to upload the Photos successfully by clicking the Upload Photos button ", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffvehiclepage: DriveoffVehiclePage = new DriveoffVehiclePage(page, data['TC Drive_019'].expectedRego);
    const driveoffPhotosAndVideospage: DriveoffPhotosAndVideospage = new DriveoffPhotosAndVideospage(page);

    await loginPage.gotoLoginPage(data['TC Drive_019'].url);

    await loginPage.loginToApplication(data['TC Drive_019'].userNameInput, data['TC Drive_019'].companyCode, data['TC Drive_019'].passwordInput);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveoffDriveOff();

    await driveoffvehiclepage.verifyAddButtonIsPresent();

    await driveoffvehiclepage.clickOnAddButton();

    await driveoffvehiclepage.enterValidDataInRagoInputField(data['TC Drive_019'].expectedRego);

    await driveoffvehiclepage.chooseArrivalDateFromCalendar(data['TC Drive_019'].dd, data['TC Drive_019'].mm, data['TC Drive_019'].yyyy);

    await driveoffvehiclepage.enterValidDataInArrivalTime(data['TC Drive_019'].arrivalTime);

    await driveoffvehiclepage.chooseDriveoffDateFromCalendar(data['TC Drive_019'].dd, data['TC Drive_019'].mm, data['TC Drive_019'].yyyy);

    await driveoffvehiclepage.enterDriveoffTime(data['TC Drive_019'].driveoffTime);

    await driveoffvehiclepage.selectProductDropdown(data['TC Drive_019'].productName);

    await driveoffvehiclepage.enterValidDataInFuelquantity(data['TC Drive_019'].fuelQuantity);

    await driveoffvehiclepage.enterVlidDataInFuelAmount(data['TC Drive_019'].fuelAmount);

    await driveoffvehiclepage.enterValidDataInRefNumField(data['TC Drive_019'].refNumber);

    await driveoffvehiclepage.enterValidDataInPumpNoField(data['TC Drive_019'].pumpNumber);

    await driveoffvehiclepage.selectSiteFromDropdown(data['TC Drive_019'].siteName);

    await driveoffvehiclepage.selectFailToPayTypeValueFromDropdown(data['TC Drive_019'].failToPayTypeValue);

    await driveoffvehiclepage.selectColorFromDropdown(data['TC Drive_019'].colorName);

    await driveoffvehiclepage.selectDidFAndRMatch(data['TC Drive_019'].didFrontAndValue);

    await driveoffvehiclepage.verifySaveButtonIsPresent();

    await driveoffvehiclepage.clickOnSaveButton();

    await driveoffvehiclepage.clickCheckRegoButton();

    await driveoffPhotosAndVideospage.clickOnDriveoffPhotosandVideosSubmodule();

    await driveoffPhotosAndVideospage.clickOnUploadPhotosButton();

    await driveoffPhotosAndVideospage.uploadFileThroughDialog(data['TC Drive_019'].Photos_path);

    await driveoffPhotosAndVideospage.verifyPhotoIsUploadedSuccessfully(data['TC Drive_019'].expectedUploadedPhotoMessage);

});

//Bug - Video is not getting uploaded successfully - Error message ==>> "Error in grid data loading."
test.only(" TC Drive_020 Verify that LIU should be able to upload the Videos successfully by clicking the Upload Videos button @prod", async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    const driveoffvehiclepage: DriveoffVehiclePage = new DriveoffVehiclePage(page, data['TC Drive_020'].expectedRego);
    const driveoffPhotosAndVideospage: DriveoffPhotosAndVideospage = new DriveoffPhotosAndVideospage(page);

    await loginPage.gotoLoginPage(data['TC Drive_020'].url);

    await loginPage.loginToApplication(data['TC Drive_020'].userNameInput, data['TC Drive_020'].companyCode, data['TC Drive_020'].passwordInput);

    await dashboardPage.clickOnDriveoffModule();

    await dashboardPage.clickOnDriveoffDriveOff();

    await driveoffvehiclepage.verifyAddButtonIsPresent();

    await driveoffvehiclepage.clickOnAddButton();

    await driveoffvehiclepage.enterValidDataInRagoInputField(data['TC Drive_020'].expectedRego);

    await driveoffvehiclepage.chooseArrivalDateFromCalendar(data['TC Drive_020'].dd, data['TC Drive_020'].mm, data['TC Drive_020'].yyyy);

    await driveoffvehiclepage.enterValidDataInArrivalTime(data['TC Drive_020'].arrivalTime);

    await driveoffvehiclepage.chooseDriveoffDateFromCalendar(data['TC Drive_020'].dd, data['TC Drive_020'].mm, data['TC Drive_020'].yyyy);

    await driveoffvehiclepage.enterDriveoffTime(data['TC Drive_020'].driveoffTime);

    await driveoffvehiclepage.selectProductDropdown(data['TC Drive_020'].productName);

    await driveoffvehiclepage.enterValidDataInFuelquantity(data['TC Drive_020'].fuelQuantity);

    await driveoffvehiclepage.enterVlidDataInFuelAmount(data['TC Drive_020'].fuelAmount);

    await driveoffvehiclepage.enterValidDataInRefNumField(data['TC Drive_020'].refNumber);

    await driveoffvehiclepage.enterValidDataInPumpNoField(data['TC Drive_020'].pumpNumber);

    await driveoffvehiclepage.selectSiteFromDropdown(data['TC Drive_020'].siteName);

    await driveoffvehiclepage.selectFailToPayTypeValueFromDropdown(data['TC Drive_020'].failToPayTypeValue);

    await driveoffvehiclepage.selectColorFromDropdown(data['TC Drive_020'].colorName);

    await driveoffvehiclepage.selectDidFAndRMatch(data['TC Drive_020'].didFrontAndValue);

    await driveoffvehiclepage.verifySaveButtonIsPresent();

    await driveoffvehiclepage.clickOnSaveButton();

    await driveoffvehiclepage.clickCheckRegoButton();

    await driveoffPhotosAndVideospage.clickOnDriveoffPhotosandVideosSubmodule();

    await driveoffPhotosAndVideospage.clickOnUploadVideosButton();

    // await driveoffPhotosAndVideospage.uploadFileDialogBox(data['TC Drive_020'].Videos_path);

    await driveoffPhotosAndVideospage.uploadFileThroughDialog(data['TC Drive_020'].Videos_path);

    await driveoffPhotosAndVideospage.verifyVideoIsUploadedSuccessfully(data['TC Drive_020'].expectedUploadedVideoMessage);
});
import { Locator, Page, expect } from "@playwright/test";

export class DriveoffVehiclePage {
    readonly page: Page;

    // Tabs / Submodules
    readonly incidentOrVehicleTab: Locator;
    readonly suspectsTab: Locator;
    readonly witnessesTab: Locator;
    readonly photosOrvideosFilesTab: Locator;
    readonly statusTab: Locator;

    //Incident//

    readonly driveoffModule: Locator;
    readonly driveoffSubmodule: Locator;
    readonly vehicleAddButton: Locator;
    readonly regoTextbox: Locator;
    readonly arrivalDate: Locator;
    readonly arrivalTimeTextbox: Locator;
    readonly driveoffDate: Locator;
    readonly driveoffTimeTextbox: Locator;
    readonly productInputDropdown: Locator;
    readonly fuelQuantityTextbox: Locator;
    readonly fuelAmountTextbox: Locator;
    readonly referenceNoTextbox: Locator;
    readonly pumpNumberTextbox: Locator;
    readonly siteTInputDropdown: Locator;
    readonly failToPayTypeInputDropdown: Locator;
    readonly expectedRegoTextbox: string;
    readonly checkRegoButton: Locator;
    readonly closeRegoButton: Locator;
    readonly statusButton: Locator;

    //VehicleDetails//

    readonly colourInputDropdown: Locator;
    readonly didFrontAndRearPlatesMatchInputDropdown: Locator;
    readonly saveButton: Locator;
    readonly actualSuccessfulMsg: Locator;

    //Error Message//

    readonly actualRegoErrorMsg: Locator;
    readonly actualArrivalTimeErrorMsg: Locator;
    readonly actualDriveoffTimeErrorMsg: Locator;
    readonly actualFuelQuantityErrorMsg: Locator;
    readonly actualFuelAmountErrorMsg: Locator;
    readonly actualRefNumberErrorMsg: Locator;
    readonly actualPumpNumberErrorMsg: Locator;

    //Edit//
    readonly editVehicleButton: Locator;

    constructor(page: Page, regoName: string) {
        this.page = page;

        // Tabs / Submodules
        this.incidentOrVehicleTab = page.locator('//li[normalize-space()="Incident/Vehicle"]');
        this.suspectsTab = page.locator('//li[normalize-space()="Suspects"]');
        this.witnessesTab = page.locator('//li[normalize-space()="Witnesses"]');
        this.photosOrvideosFilesTab = page.locator('//li[normalize-space()="Photos/Videos Files"]');
        this.statusTab = page.locator('//li[normalize-space()="Status"]');

        //Incident//

        this.driveoffModule = page.locator('//p[text()="Drive Off"]');
        this.driveoffSubmodule = page.locator('//span[text()="Drive Off"]');
        this.vehicleAddButton = page.locator('//*[@id="react-tabs-1"]/div/div/div/div/div/form/div[2]/div/div[2]/div/span[1]/button');
        this.expectedRegoTextbox = `${regoName}${Math.random().toString().slice(2, 6)}`;
        this.regoTextbox = page.locator('[name="FrontRegistrationNumber"]');
        this.arrivalDate = page.locator('[placeholder="Arrival Date"]');
        this.arrivalTimeTextbox = page.locator('[name="ArrivalTime"]');
        this.driveoffDate = page.locator('[placeholder="Drive Off Date"]');
        this.driveoffTimeTextbox = page.locator('[name="DriveOffTime"]');
        this.productInputDropdown = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormProduct"]//input[1]').first();
        this.fuelQuantityTextbox = page.locator('[name="FuelQuantity"]');
        this.fuelAmountTextbox = page.locator('[name="FuelAmount"]');
        this.referenceNoTextbox = page.locator('[name="ReferenceNumber"]');
        this.pumpNumberTextbox = page.locator('[name="PumpNo"]');
        this.siteTInputDropdown = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormSiteId"]//input[1]').first();
        this.failToPayTypeInputDropdown = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormFailToPayType"]//input[1]').first();
        this.checkRegoButton = page.locator('//button[normalize-space()="Check Rego"]');
        this.closeRegoButton = page.locator('//div[@class="card-buttons"]//img[@alt="icon"]');
        this.vehicleAddButton = page.locator('[data-test-id="DriveOffIncidentVehicleIncidentVehicleFormAdd"]');
        this.expectedRegoTextbox = `${regoName}${Math.random().toString().slice(2, 6)}`;
        this.regoTextbox = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormFrontRegistrationNumber"]//input[1]');
        this.arrivalDate = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormArrivalDate"]//input[1]');
        this.arrivalTimeTextbox = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormArrivalTime"]//input[1]');
        this.driveoffDate = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormDriveOffDate"]//input[1]');
        this.driveoffTimeTextbox = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormDriveOffTime"]//input[1]');
        this.productInputDropdown = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormProduct"]//input[1]').first();
        this.fuelQuantityTextbox = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormFuelQuantity"]//input[1]');
        this.fuelAmountTextbox = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormFuelAmount"]//input[1]');
        this.referenceNoTextbox = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormReferenceNumber"]//input[1]');
        this.pumpNumberTextbox = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormPumpNo"]//input[1]');
        this.siteTInputDropdown = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormSiteId"]//input[1]').first();
        this.failToPayTypeInputDropdown = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormFailToPayType"]//input[1]').first();
        this.statusButton = page.locator('[data-test-id="DriveOff11313"]');

        //VehicleDetails//

        this.colourInputDropdown = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormColor1"]//input[1]').first();
        this.didFrontAndRearPlatesMatchInputDropdown = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormPlatesMatch"]//input[1]').first();
        this.saveButton = page.locator('[data-test-id="DriveOffIncidentVehicleIncidentVehicleFormSave"]');
        this.actualSuccessfulMsg = page.locator('//p[text()="Record has been saved successfully"]');

        //Error Message//

        this.actualRegoErrorMsg = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormFrontRegistrationNumber"]//div');
        this.actualArrivalTimeErrorMsg = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormArrivalTime"]//div[2]');
        this.actualDriveoffTimeErrorMsg = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormDriveOffTime"]//div[2]');
        this.actualFuelQuantityErrorMsg = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormFuelQuantity"]//div');
        this.actualFuelAmountErrorMsg = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormFuelAmount"]//div');
        this.actualRefNumberErrorMsg = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormReferenceNumber"]//div');
        this.actualPumpNumberErrorMsg = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormPumpNo"]//div');

        //Edit//
        this.editVehicleButton = page.locator('[data-test-id="DriveOffIncidentVehicleIncidentVehicleFormEdit"]');
    }

    // Tabs / Submodules

    async clickOnincidentOrVehicleTab() {
        await this.incidentOrVehicleTab.click();
    }

    async clickOnSuspectsTab() {
        await this.suspectsTab.click();
    }

    async clickOnWitnessesTab() {
        await this.witnessesTab.click();
    }

    async clickOnPhotosAndVideosTab() {
        await this.photosOrvideosFilesTab.click();
    }

    async clickOnStatusTab() {
        await this.statusTab.click();
    }

    //*****************************************************Incident************************************************************************** */

    async verifyAddButtonIsPresent() {
        await this.vehicleAddButton.isVisible();
    }

    async clickOnAddButton() {
        await this.page.waitForLoadState('networkidle');
        await this.vehicleAddButton.click();
        await this.vehicleAddButton.isHidden();
    }

    async enterValidDataInRagoInputField(regoName: string) {
        await this.regoTextbox.fill(this.expectedRegoTextbox)
    }

    //Arrival Date
    async chooseArrivalDateFromCalendar(dd: string, mm: string, yyyy: string) {
        await this.arrivalDate.click();
        const prevButton = this.page.locator('(//th[@class="rdtPrev"])[1]');
        const mmyyButton = this.page.locator('(//th[@class="rdtSwitch"])[1]');
        const nextButton = this.page.locator('(//th[@class="rdtNext"])[1]');

        await mmyyButton.click();
        await this.page.waitForTimeout(3000);
        await mmyyButton.click();

        let condition = false;
        //select year
        for (let index = 0; index < 5; index++) {
            for (let tr = 1; tr < 4; tr++) {
                for (let td = 1; td < 5; td++) {
                    let year = await this.page.locator('//div[@class="rdtYears"]//table//tbody//tr[' + tr + ']/td[' + td + ']').textContent();
                    if (!(year != yyyy)) {
                        await this.page.locator('//div[@class="rdtYears"]//table//tbody//tr[' + tr + ']/td[' + td + ']').click();
                        condition = true;
                        break;
                    }
                }
                if (condition) {
                    break;
                }
            }
            if (condition) {
                condition = false;
                break;
            }
        }
        //select month
        for (let tr = 1; tr < 4; tr++) {
            for (let td = 1; td < 5; td++) {
                let month = await this.page.locator('//div[@class="rdtMonths"]//table//tbody//tr[' + tr + ']/td[' + td + ']').textContent();
                if (!(month != mm)) {
                    await this.page.locator('//div[@class="rdtMonths"]//table//tbody//tr[' + tr + ']/td[' + td + ']').click();
                    condition = true;
                    break;
                }
            }
            if (condition) {
                condition = false;
                break;
            }
        }
        //select day
        for (let tr = 2; tr < 7; tr++) {
            for (let td = 3; td < 8; td++) {
                let day = await this.page.locator('//div[@class="rdtDays"]//table//tbody//tr[' + tr + ']/td[' + td + ']').first().textContent();
                if (!(day != dd)) {
                    if ((tr == 1 && Number(day) > 20) || (tr == 6 && Number(day) < 10)) {

                    } else {
                        await this.page.locator('//div[@class="rdtDays"]//table//tbody//tr[' + tr + ']/td[' + td + ']').first().click();
                        condition = true;
                        break;
                    }
                }
            }
            if (condition) {
                condition = false;
                break;
            }
        }
    }

    async enterValidDataInArrivalTime(arrivalTime: string) {
        await this.arrivalTimeTextbox.fill(arrivalTime)
    }

    //Driveoff Date
    async chooseDriveoffDateFromCalendar(dd1: string, mm1: string, yyyy1: string) {
        await this.driveoffDate.click();
        const prevButton = this.page.locator('(//th[@class="rdtPrev"])[2]');
        const mmyyButton = this.page.locator('(//th[@class="rdtSwitch"])[2]');
        const nextButton = this.page.locator('(//th[@class="rdtNext"])[2]');

        await mmyyButton.click();
        await mmyyButton.click();


        let condition = false;
        //select year
        for (let index = 0; index < 5; index++) {
            for (let tr = 1; tr < 4; tr++) {
                for (let td = 1; td < 5; td++) {
                    let year = await this.page.locator('//div[@class="rdtYears"]//table//tbody//tr[' + tr + ']//td[' + td + ']').textContent();
                    if (!(year != yyyy1)) {
                        await this.page.locator('//div[@class="rdtYears"]//table//tbody//tr[' + tr + ']//td[' + td + ']').click();
                        condition = true;
                        break;
                    }
                }
                if (condition) {
                    break;
                }
            }
            if (condition) {
                condition = false;
                break;
            }
        }
        //select month
        for (let tr = 1; tr < 4; tr++) {
            for (let td = 1; td < 5; td++) {
                let month = await this.page.locator('//div[@class="rdtMonths"]//table//tbody//tr[' + tr + ']//td[' + td + ']').textContent();
                if (!(month != mm1)) {
                    await this.page.locator('//div[@class="rdtMonths"]//table//tbody//tr[' + tr + ']//td[' + td + ']').click();
                    condition = true;
                    break;
                }
            }
            if (condition) {
                condition = false;
                break;
            }
        }
        //select day
        for (let tr = 4; tr < 7; tr++) {
            for (let td = 4; td < 8; td++) {
                let day = await this.page.locator('(//div[@class="rdtDays"])[2]//table//tbody//tr[' + tr + ']//td[' + td + ']').first().textContent();
                if (!(day != dd1)) {
                    if ((tr == 1 && Number(day) > 20) || (tr == 6 && Number(day) < 10)) {

                    } else {
                        await this.page.locator('(//div[@class="rdtDays"])[2]//table//tbody//tr[' + tr + ']//td[' + td + ']').first().click();
                        condition = true;
                        break;
                    }
                }
            }
            if (condition) {
                condition = false;
                break;
            }
        }
    }

    async enterDriveoffTime(driveoffTime: string) {
        await this.driveoffTimeTextbox.fill(driveoffTime)
        await this.page.waitForTimeout(5000);
    }

    async selectProductDropdown(productName: string) {
        await this.productInputDropdown.click();
        await this.productInputDropdown.fill(productName);
        await this.page.locator("//div[normalize-space()='" + productName + "']").first().click();
    }

    async enterValidDataInFuelquantity(fuelQuantity: string) {
        await this.fuelQuantityTextbox.fill(fuelQuantity)
    }

    async enterVlidDataInFuelAmount(amount: string) {
        await this.fuelAmountTextbox.fill(amount);
    }

    async enterValidDataInRefNumField(refNumber: string) {
        await this.referenceNoTextbox.fill(refNumber)
    }

    async enterValidDataInPumpNoField(pumpnumber: string) {
        await this.pumpNumberTextbox.fill(pumpnumber)
    }

    async selectSiteFromDropdown(siteName: string) {
        await this.siteTInputDropdown.click();
        await this.siteTInputDropdown.fill(siteName);
        await this.page.locator("//div[normalize-space()='" + siteName + "']").first().click();
    }

    async selectFailToPayTypeValueFromDropdown(failToPayTypeValue: string) {
        await this.failToPayTypeInputDropdown.click();
        await this.failToPayTypeInputDropdown.fill(failToPayTypeValue);
        await this.page.locator("//div[normalize-space()='" + failToPayTypeValue + "']").first().click();
    }
    async clickCheckRegoButton() {
        await this.checkRegoButton.click();
        await this.closeRegoButton.click();
    }

    //*****************************************************vehicleDetails************************************************************************** */

    async selectColorFromDropdown(colorName: string) {
        await this.colourInputDropdown.click();
        await this.colourInputDropdown.fill(colorName);
        await this.page.locator("//div[normalize-space()='" + colorName + "']").first().click();
    }

    async selectDidFAndRMatch(didFrontAndValue: string) {
        await this.didFrontAndRearPlatesMatchInputDropdown.click();
        await this.didFrontAndRearPlatesMatchInputDropdown.fill(didFrontAndValue);
        await this.page.locator("//div[normalize-space()='" + didFrontAndValue + "']").first().click();
    }

    async verifySaveButtonIsPresent() {
        await this.saveButton.isVisible();
    }

    async clickOnSaveButton() {
        await this.saveButton.click();
    }

    async verifyRecordIsSavedSuccessfully(expectedSuccessMsg: string) {
        const actualSuccessfulMsg = await this.actualSuccessfulMsg.textContent();
        expect(actualSuccessfulMsg).toBe(expectedSuccessMsg);

    }
    async verifyDriveOffButtonIsClicked() {
        expect(this.regoTextbox).toBeVisible();
    }

    //Error Message
    async verifyRegoErrorMsg(expectedRegoErrorMsg: string) {
        const actualRegoErrorMsg = await this.actualRegoErrorMsg.textContent();
        expect(actualRegoErrorMsg).toBe(expectedRegoErrorMsg);
    }

    async verifyArrivalTimeErrorMsg(expectedArrivalTimeErrorMsg: string) {
        const actualArrivalTimeErrorMsg = await this.actualArrivalTimeErrorMsg.textContent();
        expect(actualArrivalTimeErrorMsg).toBe(expectedArrivalTimeErrorMsg);
    }

    async verifyDriveoffTimeErrorMsg(expectedDriveoffTimeErrorMsg: string) {
        const actualDriveoffTimeErrorMsg = await this.actualDriveoffTimeErrorMsg.textContent();
        expect(actualDriveoffTimeErrorMsg).toBe(expectedDriveoffTimeErrorMsg);
    }

    async verifyActualFuelQuantityErrorMsg(expectedFuelQuantityErrorMsg: string) {
        const actualFuelQuantityErrorMsg = await this.actualFuelQuantityErrorMsg.textContent();
        expect(actualFuelQuantityErrorMsg).toBe(expectedFuelQuantityErrorMsg);
    }

    async verifyActualFuelAMountErrorMsg(expectedFuelAmountErrorMsg: string) {
        const actualFuelAMountErrorMsg = await this.actualFuelAmountErrorMsg.textContent();
        expect(actualFuelAMountErrorMsg).toBe(expectedFuelAmountErrorMsg);
    }

    async verifyActualRefNumberErrorMsg(expectedRefNumberErrorMsg: string) {
        const actualRefNumberErrorMsg = await this.actualRefNumberErrorMsg.textContent();
        expect(actualRefNumberErrorMsg).toBe(expectedRefNumberErrorMsg);
    }

    async verifyActualPumpNoErrorMsg(expectedPumpNumberErrorMsg: string) {
        const actualPumpNumberErrorMsg = await this.actualPumpNumberErrorMsg.textContent();
        expect(actualPumpNumberErrorMsg).toBe(expectedPumpNumberErrorMsg);
    }

    //verify Tabs-Enabled
    async verifySuspectsTabIsEnabled() {
        await expect(this.suspectsTab).toBeEnabled();
        await expect(this.suspectsTab).toBeEditable();
    }

    async verifyWitnessessTabIsEnabled() {
        await expect(this.witnessesTab).toBeEnabled();
        await expect(this.witnessesTab).toBeEditable();
    }

    async verifyPhotosOrVideosTabIsEnabled() {
        await expect(this.photosOrvideosFilesTab).toBeEnabled();
        await expect(this.photosOrvideosFilesTab).toBeEditable();
    }

    async verifyStatusTabIsEnabled() {
        await expect(this.statusTab).toBeEnabled();
        await expect(this.statusTab).toBeEditable();
    }


    //verify-fields are editable

    async clickOnEditButton() {
        await this.editVehicleButton.click();
    }

    async verifyArrivalTimeIsEditable() {
        await this.arrivalTimeTextbox.isEditable();
        await expect(this.arrivalTimeTextbox).toBeEditable();
    }

    async verifyDriveoffTimeIsEditable() {
        await this.driveoffTimeTextbox.isEditable();
        await expect(this.driveoffTimeTextbox).toBeEditable();
    }

    async verifyProductInputDropdownIsEditable() {
        await this.productInputDropdown.isEditable();
        await expect(this.productInputDropdown).toBeEditable();
    }

    async verifyFuelQuantityTextboxIsEditable() {
        await this.fuelQuantityTextbox.isEditable();
        await expect(this.fuelQuantityTextbox).toBeEditable();
    }

    async verifyFuelAmountTextboxIsEditable() {
        await this.fuelAmountTextbox.isEditable();
        await expect(this.fuelAmountTextbox).toBeEditable();
    }

    async verifyRefNumberTextboxIsEditable() {
        await this.referenceNoTextbox.isEditable();
        await expect(this.referenceNoTextbox).toBeEditable();
    }

    async verifyPumpNumberTextboxIsEditable() {
        await this.pumpNumberTextbox.isEditable();
        await expect(this.pumpNumberTextbox).toBeEditable();
    }

    async verifySiteInputDropdownIsEditable() {
        await this.siteTInputDropdown.isEditable();
        await expect(this.siteTInputDropdown).toBeEditable();
    }

    async verifyFailToPayTypeIsEditable() {
        await this.failToPayTypeInputDropdown.isEditable();
        await expect(this.failToPayTypeInputDropdown).toBeEditable();
    }

    async verifyColourInputTypeIsEditable() {
        await this.colourInputDropdown.isEditable();
        await expect(this.colourInputDropdown).toBeEditable();
    }

    async verifyDidFrontAndRearIsEditable() {
        await this.didFrontAndRearPlatesMatchInputDropdown.isEditable();
        await expect(this.didFrontAndRearPlatesMatchInputDropdown).toBeEditable();
    }


}
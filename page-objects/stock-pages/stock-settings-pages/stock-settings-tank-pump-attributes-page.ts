import { Locator, Page, expect } from "@playwright/test";


export class StockTankAndPumpAttributesPage {
    readonly page: Page;

    //Sub Menu//
    readonly expectedTankAttributeName: string;
    readonly updatedTankAttributeNams: string;
    readonly tankAndPumpupAttributesIcon: Locator;
    //Add
    readonly addButon: Locator;
    readonly tankAttributeNameTextbox: Locator;
    readonly newTankAttributeName: string;
    readonly updatedTankAttributeName: string;
    //Edit
    readonly editButton: Locator;
    readonly tankAttributeNameEdit: Locator;
    //Save
    readonly saveButton: Locator;
    readonly actualSuccessfulMsg: Locator;

    constructor(page: Page, tankAttributeName: string, updatedTankAttributeName: string) {
        this.page = page;
        //Sub Menu//
        this.expectedTankAttributeName = `${tankAttributeName}${Math.random().toString().slice(2, 6)}`;
        this.tankAndPumpupAttributesIcon = page.locator('(//button[@data-test-id="StockHomeMenuCardundefinedMenuButton1"])[2]');
        this.updatedTankAttributeName = `${updatedTankAttributeName}${Math.random().toString().slice(2, 6)}`;

        //Add
        this.addButon = page.locator('[data-test-id="TankAttributesAttributeAddCard1241Add"]');
        this.tankAttributeNameTextbox = page.locator('(//div[@data-test-id="TankAttributesAttributeAddCard1241"]/form/div[@class="card-body"]/div/div/div/div/input[@placeholder="Enter field label"])[last()]');

        //Edit
        this.editButton = page.locator('[data-test-id="TankAttributesAttributeAddCard1241Edit"]');

        //Save
        this.saveButton = page.locator('[data-test-id="TankAttributesAttributeAddCard1241Save"]');
        this.actualSuccessfulMsg = page.locator('[data-test-id="NotificationMessage"]');


    }

    //*****************************************************Sub Menu************************************************************************** */

    async clickOnTankAndPumpAttributesIcon() {
        await this.tankAndPumpupAttributesIcon.click();
    }

    //Add
    async verifyAdaButtonIsPresent() {
        await expect(this.addButon).toBeVisible();
    }

    async clickOnAddButton() {
        await this.addButon.click();
    }

    async enterTankAttributeName(expectedTankAttributeName: string) {
        console.log(this.expectedTankAttributeName);
        await this.tankAttributeNameTextbox.click();
        await this.tankAttributeNameTextbox.fill(this.expectedTankAttributeName)
    }

    //Stock>settings>tank and pum setup>add>tank attributes
    async verifyIsTankAttributeIsAdded(productName: string) {
        console.log(this.expectedTankAttributeName);
        expect(this.page.locator("(//div[@data-test-id='TankSetupPopupCardWithToggleAndFunctionButtonsCardBody'])[3]//label[text()='" + this.expectedTankAttributeName + "']")).toBeVisible();
    }

    async verifyIsUpdatedTankAttributeIsAdded(productName: string) {
        expect(this.page.locator("(//div[@data-test-id='TankSetupPopupCardWithToggleAndFunctionButtonsCardBody'])[3]//label[text()='" + this.updatedTankAttributeName + "']")).toBeVisible();
    }

    async verifyEditButtonIsPresent() {
        await expect(this.editButton).not.toBeVisible();
    }

    async clickOnEditButton() {
        await this.editButton.click();
    }

    async editTankAttributeName(updatedTankAttributeName: string) {
        await this.tankAttributeNameTextbox.click();
        await this.page.keyboard.press('Control+A+Delete')
        await this.tankAttributeNameTextbox.fill(this.updatedTankAttributeName)
    }

    //Save
    async clickOnSaveButton() {
        await this.saveButton.click();
    }

    async verifyRecordIsSavedSuccessfully(expectedSuccessMsg: string) {
        const actualSuccessfulMsg = await this.actualSuccessfulMsg.textContent();
        expect(actualSuccessfulMsg).toBe(expectedSuccessMsg);
    }

}
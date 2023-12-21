import { Locator, Page, expect } from "@playwright/test";

export class StockSettingsPage{
    readonly page: Page;

    readonly settingsEditButton:Locator;
    readonly groupInputField:Locator;
    readonly settingInputField:Locator;
    readonly valueInputField:Locator;
    readonly validationInputField:Locator;
    readonly saveButton:Locator;
   
    constructor(page: Page)
    {
        this.page = page;

        this.settingsEditButton=page.locator('(//button[@data-test-id="StockSettingsSettings131SettingsCommandEdit"])[1]');
        this.groupInputField=page.locator('//td[@data-test-id="StockSettingsSettings131SettingsSettingGroup"]//input');
        this.settingInputField=page.locator('//td[@data-test-id="StockSettingsSettings131SettingsSettingType"]//input');
        this.valueInputField=page.locator('//td[@data-test-id="StockSettingsSettings131SettingsValue"]//input');
        this.validationInputField=page.locator('//td[@data-test-id="StockSettingsSettings131SettingsValidationType"]//input');
        this.saveButton=page.locator('[data-test-id="StockSettingsSettings131SettingsCommandCommit"]')
    }

    //*****************************************************Settings************************************************************************** */
    
    async verifEditButtonIsPresent()
    {
        await expect(this.settingsEditButton).toBeVisible();
    }

    async clickOnEditButton()
    {
        await this.settingsEditButton.click();
    }

    //Verify-fields are editable
    async verifyFieldsAreNotEditable()
    {
        await expect(this.groupInputField).not.toBeEditable();
        await expect(this.settingInputField).not.toBeEditable();
        await expect(this.validationInputField).not.toBeEditable();
    }

    async verifyFieldIsEditable()
    {
        await expect(this.valueInputField).toBeEditable();
    }

    async enterValueInValueInputField(value:string)
    {
        await this.valueInputField.click();
        await this.valueInputField.fill(value);
        await this.page.locator("(//div[normalize-space()='" + value + "'])[4]").click();
    }

    async clickOnSaveButton()
    {
        await this.saveButton.click();
    }

    

    
}
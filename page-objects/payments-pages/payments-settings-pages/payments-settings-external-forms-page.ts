import { Locator, Page, expect } from "@playwright/test";

export class PaymentSettingsExternalFormPage {
    readonly page: Page;

    //ExternalForms
    readonly addButton: Locator;
    readonly formNameField: Locator;
    readonly expiresField: Locator;
    readonly selectCalendarFromExpireField: Locator;
    readonly publishedCheckbox: Locator;
    readonly preFillAnswersCheckbox: Locator;
    readonly savePDFCheckbox: Locator;
    readonly clickChooseFolder: Locator;
    readonly selectFolder: Locator;
    readonly clickOk: Locator;
    readonly filePrefixField: Locator;
    readonly saveButton: Locator;
    readonly searchAddedForm: Locator;
    readonly addedFormDetail: Locator;
    readonly expectedFormName: string;
    readonly expectedFilePrefix: string;
    readonly editedFormName: string;
    readonly enterCreatedFormName: Locator;
    readonly getFormNameText: Locator;
    readonly editButton: Locator;

    constructor(page: Page, formName: string, filePrefix: string, editFormName: string) {
        this.page = page;

        //ExternalForms
        this.expectedFormName = `${formName}${Math.random().toString().slice(2, 6)}`;
        this.expectedFilePrefix = `${filePrefix}${Math.random().toString().slice(2, 6)}`;
        this.editedFormName = `${editFormName}${Math.random().toString().slice(2, 6)}`;
        this.addButton = page.locator('[data-test-id="ExternalForms44Add"]');
        this.formNameField = page.locator('//div[@data-test-id="ExternalForms44DocNameCompany"]//input');
        this.expiresField = page.locator('//div[@data-test-id="ExternalForms44ExpiredDate"]//input');
        this.selectCalendarFromExpireField = page.locator('//td[@class="rdtDay rdtToday"]');
        this.publishedCheckbox = page.locator('//div[@data-test-id="ExternalForms44Published"]//label');
        this.preFillAnswersCheckbox = page.locator('//div[@data-test-id="ExternalForms44PrefillAnswers"]//label');
        this.savePDFCheckbox = page.locator('//div[@data-test-id="ExternalForms44SelectFolderAndFilePrefixSaveAsPdf"]//label');
        this.clickChooseFolder = page.locator('//button[@data-test-id="ExternalForms44SelectFolderAndFilePrefixSelectFolderFolder"]');
        this.selectFolder = page.locator('//span[normalize-space()="Food Safety"]');
        this.clickOk = page.locator('button[class="btn btn-standard btn btn-success btn-sm"]');
        this.filePrefixField = page.locator('//div[@data-test-id="ExternalForms44SelectFolderAndFilePrefixFilePrefix"]//input');
        this.saveButton = page.locator('//button[@data-test-id="ExternalForms44Save"]');
        this.searchAddedForm = page.locator('[data-test-id="ExternalForms44ExternalFormsFilterCellDocNameCompany"] input')
        this.addedFormDetail = page.locator('(//td[@data-test-id="ExternalForms44ExternalFormsDocNameCompanyCell"])[1]//input');
        this.enterCreatedFormName = page.locator('((//div[@class="dropdown-select css-b62m3t-container"])[2]//input)[1]');
        this.getFormNameText = page.locator('//div[@class="col-md-3"]//div[@class=" css-hlgwow"]');
        this.editButton = page.locator('[data-test-id="ExternalForms44Edit"]');
    }

    //External Forms Actions
    async clickOnAddButton() {
        await this.addButton.click();

    }

    async enterValidFormName(formName: string) {
        await this.page.waitForTimeout(3000);
        await this.formNameField.click();
        await this.formNameField.fill(this.expectedFormName)
        await this.page.waitForTimeout(3000);
    }

    async editFormName(editFormName: string) {
        await this.formNameField.fill(this.editedFormName)
        await this.page.waitForTimeout(10000);
    }


    async selectExpiryDate() {
        await this.expiresField.click();
        await this.selectCalendarFromExpireField.click();
    }

    async selectPublishedCheckbox() {
        await this.publishedCheckbox.click();
    }

    async selectPreFilledAnswersCheckbox() {
        await this.preFillAnswersCheckbox.click();
    }

    async selectPDFFolder(selectFolder: string) {
        await this.savePDFCheckbox.click();
        await this.clickChooseFolder.click();
        await this.page.locator('//span[normalize-space()="' + selectFolder + '"]').click();
        await this.clickOk.click();
    }

    async enterValidFilePrefix() {
        await this.filePrefixField.fill(this.expectedFilePrefix)
    }

    async saveFormDetail() {
        await this.saveButton.isEnabled();
        await this.saveButton.click();
        await this.page.waitForTimeout(10000);
    }

    async clickEditButton() {
        await this.editButton.click();
    }

    //Verify
    async verifyAddedForm(formName: string) {
        await this.page.setViewportSize({ width: 1200, height: 595 });

        await this.searchAddedForm.fill(this.expectedFormName);
        await this.page.waitForTimeout(5000);
        //const verifyValue=await this.addedFormDetail.getAttribute("value");
        //const verifyValue=await this.addedFormDetail.textContent();
        //expect(verifyValue).toBe(this.expectedFormName);
        const value1 = await this.searchAddedForm.textContent();
        const value2 = await this.addedFormDetail.textContent();
        expect(value1).toBe(value2);
    }

    async verifySelectedForm() {
        const verifySelectedValue = await this.getFormNameText.textContent();
        expect(verifySelectedValue).toBe(this.expectedFormName);
    }

    async verifyUpdatedForm() {
        const verifyUpdatedValue = await this.getFormNameText.textContent();
        expect(verifyUpdatedValue).toBe(this.editedFormName);
    }
}
import { Locator, Page, expect } from "@playwright/test";

export class PaymentsReportsFormsExtractPage {
    readonly page: Page;

    readonly startDateDatePicker: Locator;
    readonly endDateDatePicker: Locator;

    readonly applyButton: Locator;

    constructor(page: Page)
    {
        this.page = page;
        /**Forms Extract Page Date Picckers*/
        this.startDateDatePicker = page.locator('[data-test-id="FormsExtract291StartDate"] input');
        this.endDateDatePicker = page.locator('[data-test-id="FormsExtract291EndDate"] input');
        this.applyButton = page.locator('[data-test-id="FormsExtract291Apply"] ');
    }

    async clickOnStartDateDatePicker() 
    {
        await this.startDateDatePicker.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickOnEndDateDatePicker() 
    {
        await this.endDateDatePicker.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickOnApplyButton() 
    {
        await this.applyButton.click();
        await this.page.waitForLoadState('networkidle');
    }
}
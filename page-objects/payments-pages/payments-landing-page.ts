import { Locator, Page, expect } from "@playwright/test";

export class PaymentsLandingPage {
    readonly page: Page;

    readonly paymentTypeInputField: Locator;
    readonly startDatePicker: Locator;
    readonly endDatePicker: Locator;

    readonly paymentsIcon: Locator;
    readonly reportsIcon: Locator;
    readonly settingsIcon: Locator;
    readonly siteNameFilterField: Locator;
    readonly exportButton: Locator;
    readonly exportAllDataButton: Locator;
    readonly exportSelectedRowsButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.paymentTypeInputField = page.locator('[data-test-id="PaymentsHome293Type"] input[autocorrect="off"]');
        this.startDatePicker = page.locator('[data-test-id="PaymentsHome293StartDate"] [placeholder="Start"]');
        this.endDatePicker = page.locator('[data-test-id="PaymentsHome293EndDate"] [placeholder="End"]');

        this.paymentsIcon = page.locator('//button[@title="Payments"]');
        this.reportsIcon = page.locator('(//button[@title="Reports"])[1]');
        this.settingsIcon = page.locator('(//button[@title="Settings"])[1]');

        this.siteNameFilterField = page.getByTestId('PaymentsHome293PaymentRequest_StatusFilterCellSiteName');
        this.exportButton = page.getByTestId('PaymentsHome293PaymentRequest_StatusExport');
        this.exportAllDataButton = page.locator('//input[@name="DateSelection"]/parent::label')
        this.exportSelectedRowsButton = page.locator('//input[@name="DateSelection"]/parent::label');
    }

    async chooseSiteFromFilter(siteName: string) {
        await this.siteNameFilterField.fill(siteName);
        await this.page.locator('//div[normalize-space()="' + siteName + '"][@aria-disabled="false"]').click();
        await this.page.waitForLoadState('networkidle');
    }
    async clickOnStartDatePicker() {
        await this.startDatePicker.click();
    }
    async clickOnEndDatePicker() {
        await this.endDatePicker.click();
    }
    async clickOnPaymentsIcon() {
        await this.paymentsIcon.click();
    }
    async clickOnReportsIcon() {
        await this.reportsIcon.click();
    }
    async clickOnSettingsIcon() {
        await this.settingsIcon.click();
    }
    async clickOnExportButton() {
        await this.exportButton.click();
    }
    async clickOnExportAllDataButton() {
        await this.exportAllDataButton.click();
    }
    async clickOnExportSelectedRowsButton() {
        await this.exportSelectedRowsButton.click();
    }
    //Verifications
    async verifySiteDetailsAreShownInGrid() {
        expect(this.exportButton).toBeVisible();
    }
    
}
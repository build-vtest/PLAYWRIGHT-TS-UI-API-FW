import { Locator, Page, expect } from "@playwright/test";

export class PaymentsPaymentStatusPage {
    readonly page: Page;


    readonly fromDatePicker: Locator;
    readonly toDatePicker: Locator;

    readonly requestedRadioButton: Locator;
    readonly paidRadioButton: Locator;

    readonly paymentRequestButton: Locator;
    readonly resetButton: Locator;
    readonly applyButton: Locator;
    readonly mustSelectSiteMessage: Locator;
    readonly mustSelectAlertOkButton: Locator;
    readonly siteNameFilterField: Locator;
    readonly sitesFromDropdaown: Locator;
    readonly siteNameFilterDownArrow: Locator;
    readonly siteNameFilterUpArrow: Locator;
    readonly siteNumberFilterField: Locator;

    readonly siteNameFilterData: Locator;
    readonly siteNameEnteredData: Locator;

    constructor(page: Page) {
        this.page = page;
        this.fromDatePicker = page.locator('//div[@data-test-id="PaymentReport50DateFrom"]//input');
        this.toDatePicker = page.locator('//div[@data-test-id="PaymentReport50DateTo"]//input');

        this.requestedRadioButton = page.locator('(//div[@data-test-id="PaymentReport50DateSelection"]//label)[1]');
        this.paidRadioButton = page.locator('(//div[@data-test-id="PaymentReport50DateSelection"]//label)[2]');

        this.paymentRequestButton = page.locator('[name="btnPayReq"]');
        this.resetButton = page.locator('[data-test-id="btnResetButton"]');
        this.applyButton = page.locator('[data-test-id="btnApplyButton"]');
        this.mustSelectSiteMessage = page.locator('[data-test-id="PaymentReportChangeAlertMessage"]');
        this.mustSelectAlertOkButton = page.locator('//a[text()="Ok"]');
        this.siteNameFilterField = page.locator('//div[@data-test-id="PaymentReport50SiteName"]//input');
        this.sitesFromDropdaown = page.locator('[class="companysite-select__option css-1lputcw-option"]');
        this.siteNumberFilterField = page.locator('[data-test-id="PaymentsPaymentsPaymentReport50StoreNo"] input');
        this.siteNameFilterUpArrow = page.locator('(//div[@class="companysite-select__indicator companysite-select__dropdown-indicator css-uib1fa-indicatorContainer"])[1]');
        this.siteNameFilterDownArrow = page.locator('[class="companysite-select__indicator companysite-select__dropdown-indicator css-1m4zzj-indicatorContainer"]');

        this.siteNameFilterData = page.locator('//th[@data-test-id="PaymentReport75PaymentRequest_StatusFilterCellSiteName"]//input');
        this.siteNameEnteredData = page.locator('(//input[@data-test-id="PaymentReport75PaymentRequest_StatusSiteName"])[1]');
    }

    async chooseSiteFromFilter(siteName: string) {
        await this.siteNameFilterField.fill(siteName);
        await this.page.locator('//div[normalize-space()="' + siteName + '"][@aria-disabled="false"]').click();
        await this.page.waitForLoadState('networkidle');
        await this.siteNameFilterUpArrow.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickOnFromDatePicker() {
        await this.fromDatePicker.click();
    }

    async clickOnToDatePicker() {
        await this.toDatePicker.click();
    }

    async checkRequestedRadioButton() {
        await this.requestedRadioButton.check();
    }

    async checkPaidRadioButton() {
        await this.paidRadioButton.check();
    }

    async selectMultipleSitesFromSitesFilter(numberOfSites: number) {
        for (let index = 0; index < numberOfSites; index++) {
            await this.sitesFromDropdaown.nth(index).click();
        }
        await this.paymentRequestButton.click();
    }

    async clickOnPaymentRequestButton() {
        await this.paymentRequestButton.click();
    }

    async clickOnresetButton() {
        await this.page.waitForTimeout(3000);
        await this.resetButton.click();
        await this.page.waitForTimeout(7000);
    }

    async clickOnApplyButton() {
        await this.applyButton.click();
        await this.page.waitForTimeout(5000);
    }

    async acceptAllert() {
        await this.mustSelectAlertOkButton.click();
    }
    async selectSiteFromDropdown(siteName: string) {
        await this.page.locator('[data-test-id="PaymentReport50SiteName"] input').fill(siteName);
        await this.page.locator('//div[normalize-space()="' + siteName + '"][@aria-disabled="false"]').click();
        await this.page.waitForLoadState('networkidle');
    }
    //Verifications
    async verifyAllertComesForSelectinAtleastOneSite() {
        expect(this.mustSelectSiteMessage).toBeVisible();
    }

    async enterValidDataInFilterField(siteName: string) {
        await this.siteNameFilterData.click();
        await this.siteNameFilterData.fill(siteName);
    }

    async verifySiteDetailsAreShownInGrid() {
        const siteNameFilterData = await this.siteNameFilterData.textContent();
        const siteNameEnteredData = await this.siteNameEnteredData.textContent();
        expect(siteNameFilterData).toBe(siteNameEnteredData);
    }

    async verifyRequestedRadioButtonIsChecked() {
        expect(this.requestedRadioButton).toBeChecked();
    }

    async verifyPaidRadioButtonIsChecked() {
        expect(this.paidRadioButton).toBeChecked();
    }

}
import { Locator, Page, expect } from "@playwright/test";

export class DriveoffDashboardReportsPage {
    readonly page: Page;

    /**Reports Submodule Date Pickers*/
    /**Forms Extract Page Date Picckers*/
    readonly startDateDatePicker: Locator;
    readonly endDateDatePicker: Locator;

    /**Tabs*/
    readonly reportsTab: Locator;
    readonly invoicesTab: Locator;
    readonly scheduledReportsTab: Locator;

    readonly siteNameFilterField: Locator;
    readonly sitesFromDropdaown: Locator;
    readonly siteNameFilterDownArrow: Locator;
    readonly siteNameFilterUpArrow: Locator;
    readonly siteNumberFilterDownArrow: Locator;
    readonly siteNumberFilterUpArrow: Locator;
    readonly siteNumberFilterField: Locator;
    readonly siteNumberField: Locator;
    readonly siteNameField: Locator;

    readonly driveOffButton: Locator;
    readonly applyButton: Locator;
    readonly eyeButton: Locator;
    readonly exportButton: Locator;
    readonly exportAllDataButton: Locator;

    constructor(page: Page) {
        this.page = page;

        /**Reports Page Date Picckers*/
        this.startDateDatePicker = page.locator('[data-test-id="DriveOffReportsDriveOffReportsTabReportsFormStartDate"] input');
        this.endDateDatePicker = page.locator('[data-test-id="DriveOffReportsDriveOffReportsTabReportsFormEndDate"] input');

        /**Tabs */
        this.reportsTab = page.locator('[data-test-id="DriveOffReports11303"]');
        this.invoicesTab = page.locator('[data-test-id="DriveOffReports11304"]');
        this.scheduledReportsTab = page.locator('[data-test-id="DriveOffReports11305"]');

        this.siteNameFilterField = page.locator('[data-test-id="DriveOffReportsDriveOffReportsTabSiteName"] input');
        this.sitesFromDropdaown = page.locator('[class="companysite-select__option css-1lputcw-option"]');
        this.siteNumberFilterField = page.locator('[data-test-id="DriveOffReportsDriveOffReportsTabSiteNo"] input');
        this.siteNameFilterUpArrow = page.locator('[class="companysite-select__indicator companysite-select__dropdown-indicator css-ml4gjf-indicatorContainer"]');
        this.siteNumberFilterUpArrow = page.locator('[class="companysite-select__indicator companysite-select__dropdown-indicator css-ml4gjf-indicatorContainer"]');
        this.siteNameFilterDownArrow = page.locator('[class="companysite-select__indicator companysite-select__dropdown-indicator css-1m4zzj-indicatorContainer"]');
        this.siteNumberFilterDownArrow = page.locator('[class="companysite-select__indicator companysite-select__dropdown-indicator css-1m4zzj-indicatorContainer"]');
        this.siteNameField = page.locator('[data-test-id="DriveOffReportsDriveOffReportsTabSiteName"]');
        this.siteNumberField = page.locator('[data-test-id="DriveOffReportsDriveOffReportsTabSiteNo"]');

        this.driveOffButton = page.locator('[data-test-id="DriveOffReportsCardWithBackButtonCustomButton"]');
        this.applyButton = page.locator('[data-test-id="DriveOffReportsDriveOffReportsTabApply"]');
        this.eyeButton = page.locator('[class="btn btn-outline-secondary border-0 ml-1"]').first();
        this.exportButton = page.locator('//button[@data-test-id="DriveOffReportsDriveOffReportsTab149DriveOffReportsExport"]');
        this.exportAllDataButton = page.locator('//div[@data-test-id="DriveOffReportsDriveOffReportsTab149DriveOffReportsExport"]');

    }
    /**Select Tabs */
    async clickOnReportsTab() {
        await this.reportsTab.click();
    }
    async clickOnInvoicesTab() {
        await this.invoicesTab.click();
    }
    async clickOnScheduledReportsTab() {
        await this.scheduledReportsTab.click();
    }

    /**Actions  */
    async clickOnApplyButton() {
        await this.applyButton.click();
    }
    async clickOnExportButton() {
        await this.exportButton.click();
    }
    async exportAllData() {
        await this.exportAllDataButton.click();
    }
    async clickOnDriveOffButton() {
        await this.driveOffButton.click();
    }

    async chooseDateFromCalendar(datePicker: string, dd: string, mm: string, yyyy: string) {
        if (datePicker == 'Start Date')
            await this.startDateDatePicker.click();
        else if (datePicker == 'End Date')
            await this.endDateDatePicker.click();

        const prevButton = this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/thead/tr/th[@class="rdtPrev"]').first();
        const mmyyButton = this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/thead/tr/th[@class="rdtSwitch"]').first();
        const nextButton = this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/thead/tr/th[@class="rdtNext"]').first();

        await mmyyButton.click();
        await mmyyButton.click();
        let condition = false;
        //select year
        for (let index = 0; index < 5; index++) {
            for (let tr = 1; tr < 4; tr++) {
                for (let td = 1; td < 5; td++) {
                    let year = await this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').first().textContent();
                    if (!(year != yyyy)) {
                        await this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').first().click();
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
            await prevButton.click();
        }
        //select month
        for (let tr = 1; tr < 4; tr++) {
            for (let td = 1; td < 5; td++) {
                let month = await this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').first().textContent();
                if (!(month != mm)) {
                    await this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').first().click();
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
        for (let tr = 1; tr < 7; tr++) {
            for (let td = 1; td < 8; td++) {
                let day = await this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').first().textContent();
                if (!(day != dd)) {
                    if ((tr == 1 && Number(day) > 20) || (tr == 6 && Number(day) < 10)) {

                    } else {
                        await this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').first().click();
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

    async chooseSiteFromFilter(siteName: string) {
        await this.siteNameFilterField.fill(siteName);
        await this.page.locator('//div[normalize-space()="' + siteName + '"][@aria-disabled="false"]').click();
        await this.page.waitForLoadState('networkidle');
        await this.siteNameFilterUpArrow.click();
        await this.page.waitForLoadState('networkidle');
    }
    async chooseSiteNumberFromFilter(siteNumber: string) {
        await this.siteNumberFilterField.fill(siteNumber);
        await this.page.waitForTimeout(5000);
        await this.page.locator('//div[normalize-space()="' + siteNumber + '"][@aria-disabled="false"]').click();
        await this.page.waitForLoadState('networkidle');
        await this.siteNumberFilterUpArrow.click();
        await this.page.waitForLoadState('networkidle');
    }
    async selectMultipleSitesFromSitesFilter(numberOfSites: number) {

        for (let index = 0; index < numberOfSites; index++) {
            await this.sitesFromDropdaown.nth(index).click();
        }
    }

    async verifyApplyButtonIsClicked() {
        expect(this.eyeButton).toBeVisible();
        expect(this.exportButton).toBeVisible();
    }
    async verifySiteNumberIsPopulated(siteNumber: string) {
        expect(await this.siteNumberField.innerText()).toContain(siteNumber);
        await this.page.waitForTimeout(3000);
    }
    async verifySiteNameIsPopulated(siteName: string) {
        expect(await this.siteNameField.innerText()).toContain(siteName);
    }
}
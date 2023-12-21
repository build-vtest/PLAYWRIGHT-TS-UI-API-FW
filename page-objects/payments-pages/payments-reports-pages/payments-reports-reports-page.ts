import { Locator, Page, expect } from "@playwright/test";

export class PaymentsReportsReportsPage {
    readonly page: Page;

    //Tabs
    readonly dashboardTab: Locator;
    readonly reportsTab: Locator;
    readonly scheduledReportsTab: Locator;
    readonly formsExtractTab: Locator;
    readonly invoicesTab: Locator;
    readonly paymentsTab:Locator;

    readonly rows: Locator;
    /**Reports Submodule Date Pickers*/
    readonly reportTypeInputField: Locator;
    readonly fromDatePicker: Locator;
    readonly toDatePicker: Locator;
    /**Forms Extract Page Date Picckers*/
    readonly startDateDatePicker: Locator;
    readonly endDateDatePicker: Locator;
    readonly siteNameFilterData:Locator;
    readonly paymentRequestButton: Locator;
    readonly resetButton: Locator;
    readonly applyButton: Locator;
    readonly mustSelectSiteMessage: Locator;
    readonly mustSelectAllertOkButton: Locator;
    readonly siteNameFilterField: Locator;
    readonly siteNameEnteredData:Locator;
    readonly sitesFromDropdaown: Locator;
    readonly siteNameFilterDownArrow: Locator;
    readonly siteNameFilterUpArrow: Locator;
    readonly siteNumberFilterField: Locator;


    constructor(page: Page) 
    {
        this.page = page;
        //Tabs//
        this.dashboardTab = page.locator('//li[normalize-space()="Dashboard"][@aria-disabled="false"]');
        this.reportsTab = page.locator('(//button[@title="Reports"])[2]');
        this.scheduledReportsTab = page.locator('//button[@title="Scheduled Reports"]');
        this.formsExtractTab = page.locator('//button[@title="Forms Extract"]');
        this.invoicesTab = page.locator('//button[@title="Invoices"]');
        this.paymentsTab=page.locator('[data-test-id="PaymentsPayments1405"]');

        this.rows = page.locator('[data-test-id="Settings131SettingsEditCommandCell"]');
        this.reportTypeInputField = page.locator('[data-test-id="PaymentReport50GridPreview"] input[autocomplete="off"]');
        this.fromDatePicker = page.locator('[data-test-id="PaymentReport50DateFrom"] input');
        this.toDatePicker = page.locator('[data-test-id="PaymentReport50DateTo"] input');
        /**Forms Extract Page Date Picckers*/
        this.startDateDatePicker = page.locator('[data-test-id="PaymentsReportsFormsExtract291StartDate"] input');
        this.endDateDatePicker = page.locator('[data-test-id="PaymentsReportsFormsExtract291EndDate"] input');

        this.paymentRequestButton = page.locator('[data-test-id="PaymentsReportsPaymentRequestButton"]');
        this.resetButton = page.locator('[data-test-id="btnResetButton"]');
        this.applyButton = page.locator('[data-test-id="btnApplyButton"]');
        this.mustSelectSiteMessage = page.locator('//div[@data-test-id="PaymentReportChangeAlertMessage"]');
        this.mustSelectAllertOkButton = page.locator('//div[@data-test-id="PaymentReportChangeAlertMessage"]/parent::div/following-sibling::p/a');
        this.siteNameFilterField = page.locator('[data-test-id="PaymentReport50SiteName"] input');
        this.siteNameFilterData=page.locator('[data-test-id="PaymentReport211Pay_Now_PaymentsFilterCellSiteName"] input');
        this.siteNameEnteredData=page.locator('(//td[@data-test-id="PaymentReport211Pay_Now_PaymentsSiteNameCell"])[1]');
        this.sitesFromDropdaown = page.locator('[class="companysite-select__option css-1lputcw-option"]');
        this.siteNumberFilterField = page.locator('[data-test-id="PaymentsReportsPaymentReport50StoreNo"] input');
        this.siteNameFilterUpArrow = page.locator('(//div[@class="companysite-select__indicator companysite-select__dropdown-indicator css-uib1fa-indicatorContainer"])[1]');
        this.siteNameFilterDownArrow = page.locator('[class="companysite-select__indicator companysite-select__dropdown-indicator css-1m4zzj-indicatorContainer"]');
    }

    //Select Submodules/Tabs
    async clickOnDashboardModule() 
    {
        await this.dashboardTab.click();
    }

    async clickOnReportsSubmodule() 
    {
        await this.reportsTab.click();
    }

    async clickOnScheduledReportsSubbmodule() 
    {
        await this.scheduledReportsTab.click();
    }

    async clickOnFormsExtractSubmodule() 
    {
        await this.formsExtractTab.click();
    }

    async clickOnInvoicesSubmodule() 
    {
        await this.invoicesTab.click();
    }

    async chooseDateFromCalendar(datePicker: string, dd: string, mm: string, yyyy: string) 
    {
        if (datePicker == 'From')
            await this.fromDatePicker.click();
        else if (datePicker == 'To')
            await this.toDatePicker.click();
        // else if (datePicker == 'Start Date')
        //     await this.startDateDatePicker.click();
        // else if (datePicker == 'End Date')
        //     await this.endDateDatePicker.click();
        const prevButton = this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/thead/tr/th[@class="rdtPrev"]');
        const mmyyButton = this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/thead/tr/th[@class="rdtSwitch"]');
        const nextButton = this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/thead/tr/th[@class="rdtNext"]');

        await mmyyButton.click();
        await mmyyButton.click();
        let condition = false;
        //select year
        for (let index = 0; index < 5; index++) {
            for (let tr = 1; tr < 4; tr++) {
                for (let td = 1; td < 5; td++) {
                    let year = await this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').textContent();
                    if (!(year != yyyy)) {
                        await this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').click();
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
                let month = await this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').textContent();
                if (!(month != mm)) {
                    await this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').click();
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
                let day = await this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').textContent();
                if (!(day != dd)) {
                    if ((tr == 1 && Number(day) > 20) || (tr == 6 && Number(day) < 10)) {

                    } else {
                        await this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').click();
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

    async chooseSiteFromFilter(siteName: string) 
    {
        await this.siteNameFilterField.fill(siteName);
        await this.page.locator('//div[normalize-space()="' + siteName + '"][@aria-disabled="false"]').click();
        await this.page.waitForLoadState('networkidle');
        await this.siteNameFilterUpArrow.click();
        await this.page.waitForLoadState('networkidle');
    }

    async chooseReportType(reportType: string) 
    {
        await this.reportTypeInputField.fill(reportType);
        await this.page.locator('//div[normalize-space()="' + reportType + '"][@aria-disabled="false"]').click();
    
    }

    async selectMultipleSitesFromSitesFilter(numberOfSites: number) 
    {

        for (let index = 0; index < numberOfSites; index++) {
            await this.sitesFromDropdaown.nth(index).click();
        }
        await this.paymentRequestButton.click();
    }

    async clickOnPaymentRequestButton() 
    {
        await this.paymentRequestButton.click();
    }

    async clickOnresetButton() 
    {
        await this.resetButton.click();
        await this.page.waitForTimeout(3000);
    }

    async clickOnApplyButton() 
    {
        await this.applyButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    async acceptAllert() 
    {
        await this.mustSelectAllertOkButton.click();
    }

    //Verifications
    async verifyAllertComesForSelectinAtleastOneSite() 
    {
        expect(this.mustSelectSiteMessage).toBeVisible();
    }

    async verifyPaymentRequestButtonIsRedirected() 
    {
        expect(this.paymentsTab).toBeVisible();
    }

    async verifyNavigatedToReportsSubmodule() 
    {
        expect(this.reportsTab).toBeVisible();
        expect(this.invoicesTab).toBeVisible();
        expect(this.formsExtractTab).toBeVisible();
        expect(this.scheduledReportsTab).toBeVisible();
    }

    async enterValidDataInSiteNameFilterField(siteName:string)
    {
        await this.siteNameFilterData.click();
        await this.siteNameFilterData.fill(siteName);
    }

    async verifyDataIsPresent()
    {
        const value1=this.siteNameFilterData.textContent();
        const value2=this.siteNameEnteredData.textContent();
        expect(value1).toEqual(value2);
    }
}
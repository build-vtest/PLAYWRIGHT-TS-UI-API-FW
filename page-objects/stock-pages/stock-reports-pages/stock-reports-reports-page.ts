import { Locator, Page, expect } from "@playwright/test";

export class StockReportsPage{
    readonly page: Page;

    //Sub Menu//

    readonly reports:Locator;
    readonly scheduledReports:Locator;
    readonly reportsSiteName:Locator;
    readonly reportsApplyButton:Locator;
    readonly reportsResetButton:Locator;
    readonly siteNameFilter:Locator;
    readonly siteNameEnteredData:Locator;
    readonly dropdownArrow:Locator;
   
    constructor(page: Page)
    {
        this.page = page;

        //Sub Menu//

        this.reports=page.locator('(//button[@data-test-id="StockHomeMenuCardundefinedMenuButton0"])[2]');
        this.scheduledReports=page.locator('(//button[@data-test-id="StockHomeMenuCardundefinedMenuButton1"])[2]');
        this.reportsSiteName=page.locator('//div[@data-test-id="StockReport294SiteName"]//input');
        this.reportsApplyButton=page.locator('//button[@name="btnLoad"]');
        this.reportsResetButton=page.locator('//button[@name="btnReset"]');
        this.siteNameFilter=page.locator('//th[@data-test-id="StockReport295StockTankGridFilterCellSiteName"]//input');
        this.siteNameEnteredData=page.locator('//div[@data-test-id="StockHome120StockTankGridGrid"]');
        this.dropdownArrow=page.locator('(//div[@class="companysite-select__indicator companysite-select__dropdown-indicator css-uib1fa-indicatorContainer"])[1]');
    }

    //*****************************************************Sub Menu************************************************************************** */
    async enterValidDataInReportsSiteNameDropdown(siteName:string)
    {     
        await this.reportsSiteName.click();
        await this.reportsSiteName.fill(siteName);
        await this.page.locator("//div[normalize-space()='" + siteName + "']").first().click();
        await this.dropdownArrow.click();
    }

    
    async clickOnScgeduleReportIcon()
    {
        await this.scheduledReports.click();
    }

    async selectState(state:string)
    {
        await this.page.locator("(//div[normalize-space()='" + state+ "']//label)[1]").click();
        await this.page.waitForTimeout(5000);
    }

    async selectDivision(division:string)
    {
        await this.page.locator("(//div[normalize-space()='" + division+ "']//label)[2]").first().click();
    }

    async selectSitename(siteName:string)
    {
        await this.page.locator("(//div[normalize-space()='" + siteName + "']//label)[3]").click();
    }

    async selectProduct(product:string)
    {
        await this.page.locator("(//div[normalize-space()='" + product + "']//label)[4]").click();
    }

    async clickOnApplyButton()
    {
        await this.reportsApplyButton.click();
    }

    async clickOnResetButton()
    {
        await this.reportsResetButton.click();
    }

    async enterValidDataInsideSiteNameFileterInputField(siteName:string)
    {
        await this.siteNameFilter.click();
        await this.siteNameFilter.fill(siteName)
    }
    
    async verifySiteNameFieldIsEmpty()
    {
        await expect(this.reportsSiteName).toBeEmpty();
    }




}
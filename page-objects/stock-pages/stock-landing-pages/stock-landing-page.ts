
import { Locator, Page, expect, test } from '@playwright/test';

export class StockLandingPage{
    readonly page: Page;
   
    //levels menuBar
    readonly actualLevelsText:Locator;
    readonly actualReportsText:Locator;
    readonly actualSettingsText:Locator;
    //levelsIcon
    readonly stockLevelIcon:Locator;
    readonly deliveryIcon:Locator;
    readonly reportIssuesIcon:Locator;
    //levelsNavigation
    readonly actualStocklevelPage:Locator;
    readonly actualDeliveryPage:Locator;
    readonly actualReportIssuesPage:Locator;
    //reportsIcon
    readonly reportIcon:Locator;
    readonly scheduledReportsIcon:Locator;
    //reportsNavigation
    readonly actualReportPage:Locator;
    readonly actualScheduledReportsPage:Locator;
    //settingsIcon
    readonly tankAndPumpSetupIcon:Locator;
    readonly tankAndPumpAttributesIcon:Locator;
    readonly taskSetupIcon:Locator;
    readonly settingsIcon:Locator;
    //settingsNavigation
    readonly actualTankAndPumpSetupPage:Locator;
    readonly actualTankAndPumpAttributesPage:Locator;
    readonly actualTaskSetuppage:Locator;
    readonly actualSettingPage:Locator;

    constructor(page: Page) 
    {
        this.page = page;

        //levelsMenuBar
        this.actualLevelsText=page.locator('//h5[text()="Levels"]');
        this.actualReportsText=page.locator('//h5[text()="Reports"]');
        this.actualSettingsText=page.locator('//h5[text()="Settings"]');
        //levelsIcon
        this.stockLevelIcon=page.locator('//button[@title="Stock Level"]');
        this.deliveryIcon=page.locator('//button[@title="Delivery"]');
        this.reportIssuesIcon=page.locator('//button[@title="Report Issues"]');
        //levelsNavigation
        this.actualStocklevelPage=page.locator('(//span[text()="Stock - Stock Level"])[1]');
        this.actualReportIssuesPage=page.locator('(//span[text()="Stock - Report Issues"])[1]');
        this.actualDeliveryPage=page.locator('(//span[text()="Stock - Delivery"])[1]');
        //ReportsIcon
        this.reportIcon=page.locator('//button[@title="Report"]');
        this.scheduledReportsIcon=page.locator('//button[@title="Scheduled Reports"]');
        //reportsNavigation
        this.actualReportPage=page.locator('(//span[text()="Stock - Report"])[1]');
        this.actualScheduledReportsPage=page.locator('(//span[text()="Stock - Scheduled Reports"])[1]');
        //SettingsIcon
        this.tankAndPumpSetupIcon=page.locator('//button[@title="Tank & Pump Setup"]');
        this.tankAndPumpAttributesIcon=page.locator('//button[@title="Tank & Pump Attributes"]');
        this.taskSetupIcon=page.locator('//button[@title="Task Setup"]');
        this.settingsIcon=page.locator('(//button[@title="Settings"])[2]');
        //settingsNavigation
        this.actualTankAndPumpSetupPage=page.locator('(//span[text()="Stock - Tank & Pump Setup"])[1]');
        this.actualTankAndPumpAttributesPage=page.locator('(//span[text()="Stock - Tank & Pump Attributes"])[1]');
        this.actualTaskSetuppage=page.locator('(//span[text()="Stock - Task Setup"])[1]');
        this.actualSettingPage=page.locator('(//span[text()="Stock - Settings"])[1]');

    }

    //levelsMenuBar
    async verifyLevelsText(expectedLevelsText:string)
    {
        const actualLevelsText=await this.actualLevelsText.textContent();
        expect(actualLevelsText).toBe(expectedLevelsText);
    }

    async verifyReportsText(expectedReportsText:string)
    {
        const actualReportsText=await this.actualReportsText.textContent();
        expect(actualReportsText).toBe(expectedReportsText);
    }

    async verifySettingsText(expectedSettingsText:string)
    {
        const actualSettingsText=await this.actualSettingsText.textContent();
        expect(actualSettingsText).toBe(expectedSettingsText);
    }

    //levelsIcon
    async verifyStockLevelIconIsVisible()
    {
        await expect(this.stockLevelIcon).toBeVisible();
    }

    async clickOnStockLeveIcon()
    {
        await this.stockLevelIcon.click();
    }

    async verifyUserIsNavigatedToStockLevelPage(expectedStocklevelPage:String)
    {
        await expect(this.actualStocklevelPage).toBeVisible();
        const actualStocklevelPage=await this.actualStocklevelPage.textContent();
        expect(actualStocklevelPage).toBe(expectedStocklevelPage);
    }

    async verifyDeliveryIconIsVisible()
    {
        await expect(this.deliveryIcon).toBeVisible();
    }

    async clickOnDeliveryIcon()
    {
        await this.deliveryIcon.click();
    }

    async verifyUserIsNavigatedDeliveryPage(expectedDeliveryPage:string)
    {
        await expect(this.actualDeliveryPage).toBeVisible();
        const actualDeliveryPage=await this.actualDeliveryPage.textContent();
        expect(actualDeliveryPage).toBe(expectedDeliveryPage);
        
    }

    async verifyReportIssuesIconIsVisible()
    {
        await expect(this.reportIssuesIcon).toBeVisible();
    }

    async clickOnReportIssuesIcon()
    {
        await this.reportIssuesIcon.click();
    }

    async verifyUserIsNavigatedToReportIssuesPage(expectedReportIssuesPage:string)
    {
        await expect(this.actualReportIssuesPage).toBeVisible();
        const actualReportIssuesPage=await this.actualReportIssuesPage.textContent();
        expect(actualReportIssuesPage).toBe(expectedReportIssuesPage);
    }

    //ReportsIcon
    async verifyReportIconIsVisible()
    {
        await expect(this.reportIcon).toBeVisible();
    }

    async clickOnReportsIcon()
    {
        await this.reportIcon.click();
    }

    async verifyUserIsNavigatedToStockReportPage(expectedReportPage:string)
    {
        await expect(this.actualReportPage).toBeVisible();
        const actualReportPage=await this.actualReportPage.textContent();
        expect(actualReportPage).toBe(expectedReportPage);
    }

    async verifyscheduledReportsIconIsVisible()
    {
        await expect(this.scheduledReportsIcon).toBeVisible();
    }

    async clickOnScheduledReportsIcon()
    {
        await this.scheduledReportsIcon.click();
    }

    async verifyUserIsNavigatedToStockScheduledReportsPage(expectedScheduledReportsPage:string)
    {
        await expect(this.actualScheduledReportsPage).toBeVisible();
        const actualScheduledReportsPage=await this.actualScheduledReportsPage.textContent();
        expect(actualScheduledReportsPage).toBe(expectedScheduledReportsPage);
    }
    
    //settingsIcon
    async verifyTankAndPumpSetupIconIsVisible()
    {
        await expect(this.tankAndPumpSetupIcon).toBeVisible();
    }

    async clickOnTankAndPumpSetupIcon()
    {
        await this.tankAndPumpSetupIcon.click();
    }

    async verifyUserIsNavigatedToTankAndPumpSetupPage(expectedTankAndPumpSetupPage:string)
    {
        await expect(this.actualTankAndPumpSetupPage).toBeVisible();
        const actualTankAndPumpSetupPage=await this.actualTankAndPumpSetupPage.textContent();
        expect(actualTankAndPumpSetupPage).toBe(expectedTankAndPumpSetupPage);
    }

    async verifytankAndPumpAttributesIconIsVisible()
    { 
        await expect(this.tankAndPumpAttributesIcon).toBeVisible();
    }

    async clickOntankAndPumpAttributesIcon()
    {
        await this.tankAndPumpAttributesIcon.click();
    }

    async verifyUserIsNavigatedToTankAndPumpAttributesPage(expectedTankAndPumpAttributesPage:string)
    {
        await expect(this.actualTankAndPumpAttributesPage).toBeVisible();
        const actualTankAndPumpAttributesPage=await this.actualTankAndPumpAttributesPage.textContent();
        expect(actualTankAndPumpAttributesPage).toBe(expectedTankAndPumpAttributesPage);
    }

    async taskSetupIconIsVisible()
    {
        await expect(this.taskSetupIcon).toBeVisible();
    }

    async clickOnTaskSetupIcon()
    {
        await this.taskSetupIcon.click();
    }

    async verifyUserIsNavigatedToTaskSetupPage(expectedTaskSetuppage:string)
    {
        await expect(this.actualTaskSetuppage).toBeVisible();
        const actualTaskSetuppage=await this.actualTaskSetuppage.textContent();
        expect(actualTaskSetuppage).toBe(expectedTaskSetuppage);
    }

    async verifySettingsIconIsVisible()
    {
        await expect(this.settingsIcon).toBeVisible();
    }
    
    async clickOnSettingsIcon()
    {
        await this.settingsIcon.click();
    }

    async verifyUserIsNavigatedToStockSettingsPage(expectedSettingPage:string)
    {
        await expect(this.actualSettingPage).toBeVisible();
        const actualSettingPage=await this.actualSettingPage.textContent();
        expect(actualSettingPage).toBe(expectedSettingPage);
    }
}
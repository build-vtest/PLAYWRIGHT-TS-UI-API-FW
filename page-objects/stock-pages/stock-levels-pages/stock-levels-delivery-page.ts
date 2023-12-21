import { Locator, Page, expect, test } from '@playwright/test';


export class StockLevelDelievryPage{
    readonly page: Page;
   
    //Stock Delivery//

    readonly tankNumbertextbox:Locator;
    readonly settingstankNoFilterData:Locator;
    readonly expectedTankNo:string;
    readonly stockDelivery:Locator;
    readonly deliverySiteName:Locator;
    readonly deliverySiteNumber:Locator;
    readonly deliveryAddButton:Locator;
    readonly deliveryQty:Locator;
    readonly deliveryPercentage:Locator;
    readonly expectedDeliveryQty:string;
    readonly expectedDeliveryper:string;
    readonly deliverySaveButon:Locator;
    
    //Reports//

    readonly reportsSiteName:Locator;
    readonly reportsSiteNumber:Locator;
    readonly applyButton:Locator;
    readonly resetButton:Locator;
    readonly reportType:Locator;
    //verify
    readonly tankNoFilterData:Locator;
    readonly tankNoEnteredData:Locator;    
    readonly quantityFilterData:Locator;
    readonly quantityEnteredData:Locator;
    readonly percentageFilterData:Locator;
    readonly deliveryOkButton:Locator;
    readonly deliveryErrormsgOkButton:Locator;
    readonly actualErroMsg:Locator;
   
    constructor(page: Page,tankNo:string,deliveryQty:string,deliveryPer:string) 
    {
        this.page = page;
       
        //Stock delivery//

        this.tankNumbertextbox=page.locator('[data-test-id="TankSetupTankSetupPopupTankNo"] input');
        this.settingstankNoFilterData=page.locator('//th[@data-test-id="TankSetup112TankSetupFilterCellTankNo"]//input');
        this.expectedTankNo= `${tankNo}${Math.random().toString().slice(2, 6)}`;
        this.stockDelivery=page.locator('(//button[@data-test-id="StockHomeMenuCardundefinedMenuButton1"])[2]');
        this.deliverySiteName=page.locator('//div[@data-test-id="StockDeliverySiteName"]//input');
        this.deliverySiteNumber = page.locator('//div[@data-test-id="StockDeliveryStoreNumber"]//input');
        this.deliveryAddButton=page.locator('[data-test-id="StockDeliveryTankStockDeliveryCardWithToggleAndFunctionButtonsbtnAddButton"]');
        //this.deliveryQty=page.locator('[data-test-id="StockDeliveryTankStockDeliveryCardWithToggleAndFunctionButtonsCardBody"]>div').last();    
        this.deliveryQty=page.locator('(//*[@data-test-id="StockDeliveryTankStockDeliveryCardWithToggleAndFunctionButtonsCardBody"]/div)[last()]/div[1]/div[3]/div[1]/div[1]/input');
        this.deliveryPercentage=page.locator('(//*[@data-test-id="StockDeliveryTankStockDeliveryCardWithToggleAndFunctionButtonsCardBody"]/div)[last()]/div[1]/div[3]/div[1]/div[2]/input');
        this.expectedDeliveryQty= `${deliveryQty}${Math.random().toString().slice(2, 4)}`;
        this.expectedDeliveryper= `${deliveryPer}${Math.random().toString().slice(2, 4)}`;
        this.deliverySaveButon=page.locator('//button[@data-test-id="StockDeliveryTankStockDeliveryCardWithToggleAndFunctionButtonsbtnSaveButton"]');
        
        //Reports//

        this.reportsSiteName=page.locator('//div[@data-test-id="StockHome119SiteName"]//input');
        this.reportsSiteNumber=page.locator('//div[@data-test-id="StockHome119StoreNumber"]//input');
        this.applyButton=page.locator('//button[@data-test-id="StockHomeCardWithToggleAndFunctionButtonsbtnLoadButton"]');
        this.resetButton=page.locator('[data-test-id="StockHomeCardWithToggleAndFunctionButtonsbtnResetButton"]');
        this.reportType=page.locator('(//div[@data-test-id="StockHomeStockReportType"]//input)[1]');

        //verify
        this.tankNoFilterData=page.locator('//th[@data-test-id="StockHome120StockTankGridFilterCellTankNo"]//input');
        this.tankNoEnteredData=page.locator('//input[@data-test-id="StockHome120StockTankGridTankNo"]');
        this.quantityFilterData=page.locator('//th[@data-test-id="StockHome120StockTankGridFilterCellQuantity"]//input');
        this.quantityEnteredData=page.locator('//div[@data-test-id="StockHome120StockTankGridQuantity"]');
        this.percentageFilterData=page.locator('//th[@data-test-id="StockHome120StockTankGridFilterCellQuantityPrc"]//input');
        this.deliveryOkButton=page.locator('//a[text()="OK"]');
        this.deliveryErrormsgOkButton=page.locator('//a[text()="Ok"]')
        this.actualErroMsg=page.locator('//div[@data-test-id="StockDeliveryTankStockDeliveryErrorsAlertMessage0"]')
        
    }

    //*******************************************************Delivery************************************************************************ */
    
    async enterValidDataInTankNumberInputField(expectedTankNo:string)
    {
        await this.tankNumbertextbox.click();
        await this.tankNumbertextbox.fill(this.expectedTankNo);
        console.log(this.expectedTankNo);
    }

    async enterValidDataInTankNoFilter(expectedTankNo:string)
    {
        await this.settingstankNoFilterData.click();
        await this.settingstankNoFilterData.fill(this.expectedTankNo);
        console.log(this.expectedTankNo);
    }

    async clickOnDeliveryIcon()
    {
        await this.stockDelivery.click();
    }

    async verifyAddButtonIsDisabled()
    {
        await expect(this.deliveryAddButton).not.toBeEnabled();
    }

    async enterValidDataInSiteNameDropdown(siteName:string)
    {     
        await this.deliverySiteName.click();
        await this.deliverySiteName.fill(siteName);
        await this.page.locator("//div[normalize-space()='" + siteName + "']").first().click();
    }

    async verifySiteNumberIsGeneratedAutomatically()
    {
        await (this.deliverySiteNumber).isVisible();
        await expect(this.deliverySiteNumber).toBeVisible();
    }

    async clickOnAddButton()
    {
        await this.deliveryAddButton.click();
    }

    //Qty
    async enterValidDataInsideDeliveryQtyInputField(expectedDeliveryQty:string)
    {       
        //((//div[@class="row"])[33]//input)[3]
        // [data-test-id="StockDeliveryTankStockDeliveryCardWithToggleAndFunctionButtonsCardBody"]>div
        //((//div[@class="row"])[13]//div)[5]//input
        await this.deliveryQty.click();
        await this.deliveryQty.fill(this.expectedDeliveryQty);
        //await this.deliveryQty.locator('>div>div[3] input').click();
        //await this.deliveryQty.locator('/div/div/div/div/div/input').click();
        //await this.deliveryQty.locator('/div/div/div/div/div/input').fill(this.expectedDeliveryQty);
        //await this.deliveryQty.locator('>div>div[3] input').fill(this.expectedDeliveryQty);
        console.log(this.expectedDeliveryQty);
    }

    //Per
    async enterValidDataInsideDeliveryPerInputField(expectedDeliveryPer:string)
    {
        await this.deliveryPercentage.click();
        await this.deliveryPercentage.fill(expectedDeliveryPer);      
        console.log(expectedDeliveryPer);
        await this.page.waitForTimeout(7000);
    }

    async clickOnDeliveryPerInputField()
    {
        await this.deliveryPercentage.click();
    }

    async clickOnOkButton()
    {
        await this.deliveryOkButton.click();
        await this.page.waitForTimeout(7000);
    }

    async clickOnSaveButton()
    {
        await this.deliverySaveButon.click();
        await this.page.waitForTimeout(10000);
    }

    /******************************************************Reports*************************************************************************** */
    async enterValidDataInReportsSiteNameDropdown(siteName:string)
    {     
        await this.reportsSiteName.click();
        await this.reportsSiteName.fill(siteName);
        await this.page.locator("//div[normalize-space()='" + siteName + "']").first().click();
    }

    async verifyReportsSiteNumberIsGeneratedAutomatically()
    {
        await (this.reportsSiteNumber).isVisible();
        await expect(this.reportsSiteNumber).toBeVisible();
    }

    async verifyApplyButtonIsPresent()
    {
        await expect(this.applyButton).toBeVisible();
    }

    async clickOnApplyButton()
    {
        await this.applyButton.click();
    }

    async verifyResetButtonIsPresent()
    {
        await expect(this.resetButton).toBeVisible();
    }

    async clickOnResetButton()
    {
        await this.resetButton.click();
    }

    async  selectReportType(reportType:string)
    {
        await this.reportType.click();      
        await this.reportType.fill(reportType);
        await this.page.locator("//div[normalize-space()='" + reportType + "']").first().click();
    }

    /******************************************************verify*************************************************************************** */
    async enterValidDataInTankFilterInputField(expectedTankNo:string)
    { 
        await this.tankNoFilterData.click();
        await this.tankNoFilterData.fill(this.expectedTankNo);
        console.log(this.expectedTankNo);
    }
   
    async verifyTanknoRecordIsAddedSuccessfully()
    {
        const value1=await this.tankNoFilterData.textContent();
        const value2=await this.tankNoEnteredData.textContent();   
        expect(value1).toBe(value2);
        expect(value1).toEqual(value2);
        await this.page.waitForTimeout(7000);
    }

    //Qty
    async enterValidDataInQuantityInputField(expectedDeliveryQty:string)
    {
        await this.quantityFilterData.click();
        await this.quantityFilterData.fill(this.expectedDeliveryQty);
        console.log(this.expectedDeliveryQty);
    }

    async verifyQtyRecordIsAddedSuccessfully(Qty:string)
    {
        //const value2=expect (this.page.locator("//div[text()='" + Qty + "']")).toContain(this.expectedDeliveryQty);
        const value1=await this.quantityFilterData.textContent();
        await this.page.waitForTimeout(5000);
        const value2=await this.quantityEnteredData.textContent();
        await this.page.waitForTimeout(5000);   
        expect(value1).toBe(value2);
        await this.page.waitForTimeout(5000);
    }

    //per
    async enterValidDataInpercentageInputField(expectedDeliveryPer:string)
    {
        await this.percentageFilterData.click();
        await this.percentageFilterData.fill(expectedDeliveryPer);
        console.log(expectedDeliveryPer);
    }

    //verify-Reset
    async verifySiteNameFieldIsEmpty()
    {
        await expect(this.reportsSiteName).toBeEmpty();
    }

    async verifystockDeliveryErrorMsg(expectedErrorMsg:string)
    {
        const actualErrorMsg=await this.actualErroMsg.textContent();
        expect(actualErrorMsg).toBe(expectedErrorMsg);
    }

    async clickOnErrorMsgOkButton()
    {
        await this.deliveryErrormsgOkButton.click();
    }
}
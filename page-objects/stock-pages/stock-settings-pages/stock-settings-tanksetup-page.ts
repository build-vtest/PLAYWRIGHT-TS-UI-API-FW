import { Locator, Page, expect } from "@playwright/test";


export class StockTanksetupPage{
    readonly page: Page;

    //Filter//

    readonly siteName:Locator;
    readonly siteNumber:Locator;

    //TankSetup//

    readonly expectedTankNo:string;
    readonly tanksetupAddButton:Locator;
    readonly enabledCheckbox:Locator;
    readonly tankNumbertextbox:Locator;
    readonly productDropdown:Locator;
    readonly levelTypeDropdown:Locator;
    readonly temporarilyDisabledTank:Locator;
    readonly tankStatus:Locator;
    readonly noData:Locator;
    readonly minCapacityQty:Locator;
    readonly maxCapacityQty:Locator;
    readonly minCapacityPercentage:Locator;
    readonly maxCapacityPercentage:Locator;
    readonly minLevelQty:Locator;
    readonly maxLevelQty:Locator;
    readonly minLevelPercentage:Locator;
    readonly maxLevelPercentage:Locator;
    
    //Save
    readonly tanksetupSaveButton:Locator;
    readonly actualSuccessfulMsg:Locator;
    //Cancel
    readonly tanksetupCancelButton:Locator;
    //Edit
    readonly actionsEditButton:Locator;
    readonly expectedUpdatedTankNo:string;
    //Delete
    readonly actionsDeleteButton:Locator;
    readonly deletePopupokButton:Locator;
    readonly actionsCheckbox:Locator;
    readonly actualDeleteMsg:Locator;
    readonly expectedDeleteMsg:string;  
    readonly actualContactMsg:Locator; 
    //Export
    readonly tanksetupExportButton:Locator;
    readonly tanksetupExportAllDataButton:Locator;
    readonly tanksetupExportselectedRowsButton:Locator;
    //Error Msg
    readonly actualTankNoErrorMsg:Locator;
    readonly actualMinCapacityQtyErrorMsg:Locator;
    readonly actualMaxCapacityQtyErrorMsg:Locator;
    readonly actualMinCapacityPercentageErrorMsg:Locator;
    readonly actualMaxCapacityPercentageErroMsg:Locator;
    readonly actualMinLevelQtyErrorMsg:Locator;
    readonly actualMaxLevelQtyErrorMsg:Locator;
    readonly actualMinLevelPercentageErrorMsg:Locator;
    readonly actualMaxLevelpercentageErrorMsg:Locator;
    //Verify
    readonly tankNoFilterData:Locator;
    readonly tankNoEnteredData:Locator;
     
    //Stock level//

    readonly stocklevelIcon:Locator;
    readonly stocklevelSiteName:Locator;
    readonly stocklevelSiteNumber:Locator;
    readonly stocklevelAddButton:Locator;
    readonly stocklevelActualErrorMsg:Locator;
    readonly stocklevelOkButton:Locator;
    readonly continueButton:Locator;
   
    constructor(page: Page,tankNo:string,updatedTankNo:string) 
    {
        this.page=page;
        //Filter//

        this.siteName=page.locator('//div[@data-test-id="TankSetupSiteName"]//input');
        this.siteNumber=page.locator('[data-test-id="TankSetupStoreNumber"] input');

        //TanSetup//

        this.expectedTankNo= `${tankNo}${Math.random().toString().slice(2, 7)}`;
        this.tanksetupAddButton=page.locator('[data-test-id="TankSetupCardWithToggleAndFunctionButtonsbtnAddButton"]');
        this.enabledCheckbox=page.locator('[data-test-id="TankSetupTankSetupPopupActive"] label');
        this.tankNumbertextbox=page.locator('[data-test-id="TankSetupTankSetupPopupTankNo"] input');
        this.productDropdown=page.locator('(//div[@data-test-id="TankSetupTankSetupPopupProductID"]//input)[1]');
        this.levelTypeDropdown=page.locator('(//div[@data-test-id="TankSetupTankSetupPopupLevelType"]//input)[1]');
        this.continueButton=page.locator('//a[text()="Continue"]');
        this.temporarilyDisabledTank=page.locator('//div[text()="Temporarily Disabled"]');
        this.tankStatus=page.locator('(//div[@data-test-id="TankSetupTankSetupPopupTankStatusID"]//input)[1]');
        this.noData=page.locator('//big[text()="No Data"]');
        this.minCapacityQty=page.locator('[data-test-id="TankSetupTankSetupPopupCapacityMin"] input');
        this.maxCapacityQty=page.locator('[data-test-id="TankSetupTankSetupPopupCapacityMax"] input');
        this.minCapacityPercentage=page.locator('[data-test-id="TankSetupTankSetupPopupMinimumCapacityPercent"] input');
        this.maxCapacityPercentage=page.locator('[data-test-id="TankSetupTankSetupPopupMaximumCapacityPercent"] input');
        this.minLevelQty=page.locator('[data-test-id="TankSetupTankSetupPopupLowStockMinimumLevel"] input');
        this.maxLevelQty=page.locator('[data-test-id="TankSetupTankSetupPopupLowStockMaximumLevel"] input');
        this.minLevelPercentage=page.locator('[data-test-id="TankSetupTankSetupPopupLowStockMinimumLevelPercent"] input');
        this.maxLevelPercentage=page.locator('[data-test-id="TankSetupTankSetupPopupLowStockMaximumLevelPercent"] input');

        //Save
        this.tanksetupSaveButton=page.locator('[data-test-id="TankSetupTankSetupPopupSave"]');
        this.actualSuccessfulMsg=page.locator('');
        //Cancel
        this.tanksetupCancelButton=page.locator('//button[@data-test-id="CustomHoverButton"]');
        //Edit
        this.actionsEditButton=page.locator('(//button[@data-test-id="TankSetup112TankSetupActionsColumnCompanyIDButton"])[1]');
        this.expectedUpdatedTankNo= `${updatedTankNo}${Math.random().toString().slice(2, 6)}`;
        //Delete
        this.actionsDeleteButton=page.locator('(//button[@data-test-id="TankSetup112TankSetupActionsColumnCompanySiteIDButton"])[1]');
        this.deletePopupokButton=page.locator('//button[@data-test-id="TankSetupDeleteAlertButton0"]');
        this.actionsCheckbox=page.locator('(//td[@data-test-id="TankSetup112TankSetupSelectionCellSelectionCell"])[1]');
        this.actualDeleteMsg=page.locator('[data-test-id="NotificationMessage"]');
        this.actualContactMsg=page.locator('[data-test-id="TankSetupDeleteTankAlertMessage"]');      
        //Export
        this.tanksetupExportButton=page.locator('//button[@data-test-id="TankSetup112TankSetupExport"]');
        this.tanksetupExportAllDataButton=page.locator('//button[text()="Export all data"]');
        this.tanksetupExportselectedRowsButton=page.locator('//button[text()="Export selected rows"]');  
        //Error Msg 
        this.actualTankNoErrorMsg=page.locator('//div[text()="TankNo is a required field"]');
        this.actualMinCapacityQtyErrorMsg=page.locator('//div[text()="CapacityMin is a required field"]');
        this.actualMaxCapacityQtyErrorMsg=page.locator('//div[text()="CapacityMax is a required field"]');
        this.actualMinCapacityPercentageErrorMsg=page.locator('//div[text()="MinimumCapacityPercent is a required field"]');
        this.actualMaxCapacityPercentageErroMsg=page.locator('//div[text()="MaximumCapacityPercent is a required field"]');
        this.actualMinLevelQtyErrorMsg=page.locator('//div[text()="LowStockMinimumLevel is a required field"]');
        this.actualMaxLevelQtyErrorMsg=page.locator('//div[text()="LowStockMaximumLevel is a required field"]');
        this.actualMinLevelPercentageErrorMsg=page.locator('//div[text()="LowStockMinimumLevelPercent is a required field"]');
        this.actualMaxLevelpercentageErrorMsg=page.locator('//div[text()="LowStockMaximumLevelPercent is a required field"]');   
        //verify
        this.tankNoFilterData=page.locator('//th[@data-test-id="TankSetup112TankSetupFilterCellTankNo"]//input');
        this.tankNoEnteredData=page.locator('(//input[@data-test-id="TankSetup112TankSetupTankNo"])[1]');
       
        //Stock level//

        this.stocklevelIcon=page.locator('(//button[@data-test-id="StockHomeMenuCardundefinedMenuButton0"])[2]');
        this.stocklevelSiteName=page.locator('//div[@data-test-id="StockLevelSiteName"]//input');
        this.stocklevelSiteNumber=page.locator('[data-test-id="StockLevelStoreNumber"] input');
        this.stocklevelAddButton=page.locator('[data-test-id="StockLevelTankStockLevelCardWithToggleAndFunctionButtonsbtnAddButton"]');
        this.stocklevelActualErrorMsg=page.locator('[data-test-id="StockLevelTankStockLevelErrorsAlertMessage0"]');
        this.stocklevelOkButton=page.locator('//a[text()="Ok"]');
    }

    //*****************************************************TankSetup************************************************************************** */

    async verifyAddButtonIsDisabled()
    {
        await expect(this.tanksetupAddButton).not.toBeEnabled();
    }

    async enterValidDataInSiteNameDropdown(siteName:string)
    {
        await this.siteName.click();
        await this.siteName.fill(siteName);
        await this.page.locator("//div[normalize-space()='" + siteName + "']").first().click();
    }

    async verifySiteNumberIsGeneratedAutomatically()
    {
        await (this.siteNumber).isVisible();
        await expect(this.siteNumber).toBeVisible();
    }

    async clickOnAddButton()
    {
        await this.tanksetupAddButton.click();
    }

    async clickOnContinueButton()
    {
        await this.continueButton.click();
    }

    async verifyEnabledCheckboxIsChecked()
    {
        await this.enabledCheckbox.click();
        await expect(this.enabledCheckbox).toBeChecked();
    }

    async selectStatusFromDropdown(status:string)
    {
        await this.tankStatus.click();
        await this.tankStatus.fill(status);
        await this.page.locator("//div[normalize-space()='" + status + "']").first().click();

    }

    async enterValidDataInTankNumberInputField(expectedTankNo:string)
    {
        await this.tankNumbertextbox.click();
        await this.tankNumbertextbox.fill(this.expectedTankNo);
    }

    async selectProductFromDropdown(productName:string)
    {
        await this.productDropdown.click();
        await this.productDropdown.fill(productName);
        await this.page.locator("//div[normalize-space()='" + productName + "']").first().click();
    }

    async selectlLevelTypeFromDropdown(levelType:string)
    {
        await this.levelTypeDropdown.click();
        await this.levelTypeDropdown.fill(levelType);
        await this.page.locator("//div[normalize-space()='" + levelType + "']").first().click();
    }

    async enterMinCapacityInQty(minCapacityQty:string)
    {
        await this.minCapacityQty.click();
        await this.minCapacityQty.fill(minCapacityQty);
    }

    async enterMaxCapacityInQty(maxCapacityQty:string)
    {
        await this.maxCapacityQty.click();
        await this.maxCapacityQty.fill(maxCapacityQty);
    }

    async enterMinCapacityInPercentage(minCapacityPercentage:string)
    {
        await this.minCapacityPercentage.click();
        await this.minCapacityPercentage.fill(minCapacityPercentage);
    }

    async enterMaxCapacityInPercentage(maxCapacityPercentage:string)
    {
        await this.maxCapacityPercentage.click();
        await this.maxCapacityPercentage.fill(maxCapacityPercentage);
    }

    async enterLowStockMinLevelInQty(minLevelQty:string)
    {
        await this.minLevelQty.click();
        await this.minLevelQty.fill(minLevelQty);
    
    }

    async enterLowStockMaxLevelInQty(maxLevelQty:string)
    {
        await this.maxLevelQty.click();
        await this.maxLevelQty.fill(maxLevelQty);
    }

    async enterLowStockMinLevelInPercentage(minLevelPercentage:string)
    {
        await this.minLevelPercentage.click();
        await this.minLevelPercentage.fill(minLevelPercentage);
    }
   
    async enterLowStockMaxLevelInPercentage(maxLevelPercentage:string)
    {
        await this.maxLevelPercentage.click();
        await this.maxLevelPercentage.fill(maxLevelPercentage);
    }

    //Save
    async verifySaveButtonIsPresent()
    {
        await expect(this.tanksetupSaveButton).toBeVisible();
    }

    async clickOnSaveButton()
    {
        await this.tanksetupSaveButton.click();
    }

    //Verify-success message
    async verifyRecordIsSavedSuccessfully(expectedSuccessMsg:string)
    {
        const actualSuccessfulMsg=await this.actualSuccessfulMsg.textContent();
        expect(actualSuccessfulMsg).toBe(expectedSuccessMsg);
    }

    //Cancel
    async verifyCancelButtonIsPresent()
    {
        await expect(this.tanksetupCancelButton).toBeVisible();
    }

    async clickOnCancelButton()
    {
        await this.tanksetupCancelButton.click();
    }

    //verify

    async verifyRecordIsCancelledSuccessfully()
    {
        const value1=await this.noData.textContent();   
        const value2=await this.tankNoFilterData.textContent();
        expect(value1).not.toBe(value2);
    }

    //*****************************************************Tank & Pump Setup************************************************************************** */
    
    async enterValidDataInTankNoFilter(expectedTankNo:string)
    {
        await this.tankNoFilterData.click();
        await this.tankNoFilterData.fill(this.expectedTankNo);
    }

    async verifyRecordIsAddedSuccessfully()
    {
        const value1=await this.tankNoFilterData.textContent();
        const value2=await this.tankNoEnteredData.textContent();   
        expect(value1).toBe(value2);
        expect(value1).toEqual(value2);
    }

    //Edit
    async verifyEditButtonIsPresent()
    {
        await expect(this.actionsEditButton).toBeVisible();
    }

    async clickOnEditButton()
    {
        await this.actionsEditButton.click();
    }

    //verifyTank details fields are editable
    async verifyTankDetailsFieldsAreEditable()
    {
        await expect(this.tankNumbertextbox).toBeEditable();
        await expect(this.productDropdown).toBeEditable();
        await expect(this.levelTypeDropdown).toBeEditable();
    }

    //Verify-success message
    async verifyRecordIsUpdatedSuccessfully(expectedSuccessMsg:string)
    {
         const actualSuccessfulMsg=await this.actualSuccessfulMsg.textContent();
         expect(actualSuccessfulMsg).toBe(expectedSuccessMsg);
    }

    //updated values
    async enterupdatedTankNumber(updatedTankNo:string)
    {
        await this.tankNumbertextbox.click();
        await this.tankNumbertextbox.fill(this.expectedUpdatedTankNo);
    }

    async enterUpdatedValidDataInTankNoFilter(updatedTankNo:string)
    {
        await this.tankNoFilterData.click();
        await this.tankNoFilterData.fill(this.expectedUpdatedTankNo);
    }

    async verifyUpdatedRecordIsAddedSuccessfully()
    {
        const value1=await this.tankNoFilterData.textContent();
        const value2=await this.tankNoEnteredData.textContent();   
        expect(value1).toBe(value2);
        expect(value1).toEqual(value2);
    }

    //Delete-Inactive tankstatus
    async verifyDeletButtonIsPresent()
    {
        await expect(this.actionsDeleteButton).toBeVisible();
    }

    async clickOnDeleteButton()
    {
        await this.actionsDeleteButton.click();
    }

    async clickOnDeletePopupOkButton()
    {
        await this.deletePopupokButton.click();
    }

    async verifyRecordIsDeletedSuccessfully(tankNo:string)
    {
        const value1=await this.tankNoFilterData.textContent();
        const value2=await this.tankNoEnteredData.textContent();   
        expect(value1).not.toBe(value2);
        expect(value1).not.toEqual(value2);
    }

    async verifyDeletedMsg(expectedDeleteMsg:string)
    {
        const actualDeleteMsg=await this.actualDeleteMsg.textContent();
        expect(actualDeleteMsg).toBe(expectedDeleteMsg);
    }

    async verifyTankIsDeletedSuccessfully()
    {
        const value1=await this.noData.textContent();   
        const value2=await this.tankNoFilterData.textContent();
        expect(value1).not.toBe(value2);
    }

    //Delete-Active tank Status

    //Export
    async verifyExportButtonIsPresent()
    {
        await expect(this.tanksetupExportButton).toBeVisible();
    }

    async clickOnExportButton()
    {
        await this.tanksetupExportButton.click();
    }

    async clickOnCheckbox()
    {
       await this.actionsCheckbox.click();
    }
    
    async clickOnExportAllDataButton()
    {
        await this.tanksetupExportAllDataButton.click();
    }

    async clickOnExportSelectedRowsButton()
    {
        await this.tanksetupExportselectedRowsButton.click();
    }

    //Error Msg
    async verifyTankNumberErrorMsg(expectedTankNoErrorMsg:string)
    {
        const actualTankNoErrorMsg=await this.actualTankNoErrorMsg.textContent();
        expect(actualTankNoErrorMsg).toBe(expectedTankNoErrorMsg);
    }

    async verifyMinCapacityQtyErrorMsg(expectedMinCapacityQtyErrorMsg:string)
    {
        const actualMinCapacityQtyErrorMsg=await  this.actualMinCapacityQtyErrorMsg.textContent();
        expect(actualMinCapacityQtyErrorMsg).toBe(expectedMinCapacityQtyErrorMsg);
    }

    async verifyMaxCapacityQtyErrorMsg(expectedMaxCapacityQtyErrorMsg:string)
    {
        const actualMaxCapacityQtyErrorMsg=await  this.actualMaxCapacityQtyErrorMsg.textContent();
        expect(actualMaxCapacityQtyErrorMsg).toBe(expectedMaxCapacityQtyErrorMsg);
    }

    async verifyMinCapacityPercentageErrorMsg(expectedMinCapacityPercentageErrorMsg:string)
    {
        const actualMinCapacityPercentageErrorMsg=await this.actualMinCapacityPercentageErrorMsg.textContent();
        expect(actualMinCapacityPercentageErrorMsg).toBe(expectedMinCapacityPercentageErrorMsg);
    }

    async verifyMaxCapacityPercentageErrorMsg(expectedMaxCapacityPercentageErrorMsg:string)
    {
        const actualMaxCapacityPercentageErrorMsg=await this.actualMaxCapacityPercentageErroMsg.textContent();
        expect(actualMaxCapacityPercentageErrorMsg).toBe(expectedMaxCapacityPercentageErrorMsg);
    }

    async verifyMinLevelQtyErrorMsg(expectedMinLevelQtyErrorMsg:string)
    {
        const actualMinLevelQtyErrorMsg=await this.actualMinLevelQtyErrorMsg.textContent();
        expect(actualMinLevelQtyErrorMsg).toBe(expectedMinLevelQtyErrorMsg);
    }

    async verifyMaxLevelQtyErrorMsg(expectedMaxLevelQtyErrorMsg:string)
    {
        const actualMaxLevelQtyErrorMsg=await this.actualMaxLevelQtyErrorMsg.textContent();
        expect(actualMaxLevelQtyErrorMsg).toBe(expectedMaxLevelQtyErrorMsg);
    }
    
    async verifyMinLevelPercentageErrorMsg(expectedMinLevelPercentageErrorMsg:string)
    {
        const actualMinLevelPercentageErrorMsg=await this.actualMinLevelPercentageErrorMsg.textContent();
        expect(actualMinLevelPercentageErrorMsg).toBe(expectedMinLevelPercentageErrorMsg)
    }

    async verifyMaxLevelPercentageErrorMsg(expectedMaxLevelPercentageErrorMsg:string)
    {
        const actualMaxLevelPercentageErrorMsg=await this.actualMaxLevelpercentageErrorMsg.textContent();
        expect(actualMaxLevelPercentageErrorMsg).toBe(expectedMaxLevelPercentageErrorMsg)
    }


    //*****************************************************stock level************************************************************************** */

    async clickOnStockLevelIcon()
    {
        await this.stocklevelIcon.click();
    }

    async enterValidDataInStocklevelSiteNameDropdown(siteName:string)
    {
        await this.stocklevelSiteName.click();
        await this.stocklevelSiteName.fill(siteName);
        await this.page.locator("//div[normalize-space()='" + siteName + "']").first().click();
    }

    async clickOnStocklevelAddButton()
    {
        await this.stocklevelAddButton.click();
    }

    //Verify-tank status->Enabled
    async verifyTankIsAddedSuccessfullyInStockLevel(expectedTankNo:string)
    {
        await expect(this.page.locator("//input[@value='"+ this.expectedTankNo +"']")).toBeVisible();
    }

    //Verify-tank status->temporarily Disabled
    async verifyTankIsNotAddedInStockLevel(expectedTankNo:string)
    {
        await expect(this.page.locator("//input[@value='"+ this.expectedTankNo +"']")).toBeHidden();
    }

    //Error msg-when tank status is inactive
    async verifyPopupMsg(expectedErrorMsg:string)
    {
        const actualResult=await this.stocklevelActualErrorMsg.textContent();
        expect(actualResult).toBe(expectedErrorMsg);
    }

    async clickOnOkButton()
    {
        await this.stocklevelOkButton.click();
    }
}
    
  //h5[text()="Current Stock Level"]/parent::div/parent::div/following-sibling::div/div/button[@title="Add"]
  //input[@value="TestTank7970"]












   







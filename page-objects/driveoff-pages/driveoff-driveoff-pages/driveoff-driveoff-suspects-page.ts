import { Locator, Page, expect } from "@playwright/test";

export class DriveoffSuspectsPage{
    readonly page: Page;

    //Add//

    readonly suspectsAddButton:Locator;
    readonly genderInputDropdown:Locator;
    readonly ageTextbox:Locator;
    readonly heightInputDropdown:Locator;
    readonly buildInputDropdown:Locator;
    readonly ethnicAppearanceInputDropdown:Locator;
    readonly complexionInputDropdown:Locator;
    readonly hairColourInputDropdown:Locator;
    readonly hairLengthInputDropdown:Locator;
    readonly hairStyleInputDropdown:Locator;
    readonly facialHairInputDropdown:Locator;
    readonly facialHairColourInputDropdown:Locator;
    readonly eyeColourInputDropdown:Locator;
    readonly suspectsSaveButton:Locator;
    readonly actualSuccessfulMsg:Locator;
    readonly actualEmptyRecordErrorMsg:Locator;
    readonly closeIcon:Locator;

    //Cancel//

    readonly suspectsCancelButton:Locator;

    //Edit//
    
    readonly suspectsEditButton:Locator;

    //Delete//
    
    readonly suspectsDeleteButton:Locator;
    readonly deleteButtonPopup:Locator;
    
     
    constructor(page: Page) {
        this.page = page;

       //Add//

       this.suspectsAddButton=page.locator('[data-test-id="DriveOffSuspectsSavePersonsInvolvedFormAdd"]');
       this.genderInputDropdown=page.locator('(//div[@data-test-id="DriveOffSuspectsSavePersonsInvolvedFormGender"]//input)[1]');
       this.ageTextbox=page.locator('[data-test-id="DriveOffSuspectsSavePersonsInvolvedFormAge"] input');
       this.heightInputDropdown=page.locator('(//div[@data-test-id="DriveOffSuspectsSavePersonsInvolvedFormHeight"]//input)[1]');
       this.buildInputDropdown=page.locator('(//div[@data-test-id="DriveOffSuspectsSavePersonsInvolvedFormBuild"]//input)[1]');
       this.ethnicAppearanceInputDropdown=page.locator('(//div[@data-test-id="DriveOffSuspectsSavePersonsInvolvedFormEthnicType"]//input)[1]');
       this.complexionInputDropdown=page.locator('(//div[@data-test-id="DriveOffSuspectsSavePersonsInvolvedFormComplexion"]//input)[1]');
       this.hairColourInputDropdown=page.locator('(//div[@data-test-id="DriveOffSuspectsSavePersonsInvolvedFormHairColour"]//input)[1]');
       this.hairLengthInputDropdown=page.locator('(//div[@data-test-id="DriveOffSuspectsSavePersonsInvolvedFormHairLength"]//input)[1]');
       this.hairStyleInputDropdown=page.locator('(//div[@data-test-id="DriveOffSuspectsSavePersonsInvolvedFormHairStyle"]//input)[1]');
       this.facialHairInputDropdown=page.locator('(//div[@data-test-id="DriveOffSuspectsSavePersonsInvolvedFormFacialHair"]//input)[1]');
       this.facialHairColourInputDropdown=page.locator('(//div[@data-test-id="DriveOffSuspectsSavePersonsInvolvedFormFacialColour"]//input)[1]');
       this.eyeColourInputDropdown=page.locator('(//div[@data-test-id="DriveOffSuspectsSavePersonsInvolvedFormEyeColour"]//input)[1]'); 
       this.suspectsSaveButton=page.locator('[data-test-id="DriveOffSuspectsSavePersonsInvolvedFormSave"]');
       this.actualSuccessfulMsg=page.locator('[data-test-id="NotificationMessage"]');
       this.actualEmptyRecordErrorMsg=page.locator('[data-test-id="NotificationMessage"]');
       this.closeIcon=page.locator('//button[@class="close"]');
        
       //Cancel//

       this.suspectsCancelButton=page.locator('[data-test-id="DriveOffSuspectsSavePersonsInvolvedFormCancelCustomHoverButton"]')

       //Edit//

       this.suspectsEditButton=page.locator('[data-test-id="DriveOffSuspectsSavePersonsInvolvedFormEdit"]');

       //Delete//

       this.suspectsDeleteButton=page.locator('[data-test-id="DriveOffSuspectsSavePersonsInvolvedFormDelete"]');
       this.deleteButtonPopup=page.locator('[data-test-id="DriveOffSuspectsButton0"]');
    }

    async clickOnSuspectsAddButton()
    {
        await this.suspectsAddButton.click();
    }

    async selectGenderFromDropdown(gender:string)
    {
        await this.genderInputDropdown.click();
        await this.genderInputDropdown.fill(gender);
        await this.page.locator("//div[normalize-space()='" + gender + "']").first().click();
    
    }

    async enterValidDataInAgeInputField(age:string)
    {
        await this.ageTextbox.fill(age);
    }

    async selectHeightFromDropdown(height:string)
    {
        await this.heightInputDropdown.click();
        await this.heightInputDropdown.fill(height);
        await this.page.locator("//div[normalize-space()='" + height + "']").first().click();
    }

    async selectBuildFromInputDropdown(build:string)
    {
        await this.buildInputDropdown.click();
        await this.buildInputDropdown.fill(build);
        await this.page.locator("//div[normalize-space()='" + build + "']").first().click();
    }

    async selectEthnicAppearanceFromDropdown(ethnicAppearance:string)
    {
        await this.ethnicAppearanceInputDropdown.click();
        await this.ethnicAppearanceInputDropdown.fill(ethnicAppearance);
        await this.page.locator("//div[normalize-space()='" + ethnicAppearance + "']").first().click();
    }

    async selectComplexionFromDropdown(complexion:string)
    {
        await this.complexionInputDropdown.click();
        await this.complexionInputDropdown.fill(complexion);
        await this.page.locator("//div[normalize-space()='" + complexion + "']").first().click();
    }

    async selectHairColourFromDropdown(hairColour:string)
    {
        await this.hairColourInputDropdown.click();
        await this.hairColourInputDropdown.fill(hairColour);
        await this.page.locator("//div[normalize-space()='" + hairColour + "']").first().click();
    }

    async selectHairLengthFromDropdown(hairLength:string)
    {
        await this.hairLengthInputDropdown.click();
        await this.hairLengthInputDropdown.fill(hairLength);
        await this.page.locator("//div[normalize-space()='" + hairLength + "']").first().click();
    }

    async selectHairStyleFromDropdown(hairStyle:string)
    {
        await this.hairStyleInputDropdown.click();
        await this.hairStyleInputDropdown.fill(hairStyle);
        await this.page.locator("//div[normalize-space()='" + hairStyle + "']").first().click();
    }

    async selectFacialHairFromDropdown(facialHair:string)
    {
        await this.facialHairInputDropdown.click();
        await this.facialHairInputDropdown.fill(facialHair);
        await this.page.locator("//div[normalize-space()='" + facialHair + "']").first().click();
    }

    async selectFacialHairColourFromDropdown(facialHairColour:string)
    {
        await this.facialHairColourInputDropdown.click();
        await this.facialHairColourInputDropdown.fill(facialHairColour);
        await this.page.locator("//div[normalize-space()='" + facialHairColour + "']").first().click();
    }

    async selecteyeColourFromDropdown(eyeColour:string)
    {
        await this.eyeColourInputDropdown.click();
        await this.eyeColourInputDropdown.fill(eyeColour);
        await this.page.locator("//div[normalize-space()='" + eyeColour + "']").first().click();
    }

    //verify- save
    async verifySuspectsSaveButtonIsPresent()
    {
        await this.suspectsSaveButton.isVisible();
    }

    async clickOnSuspectsSaveButton()
    {
        await this.suspectsSaveButton.click();
    }

    //Verify-success message
    async verifyRecordIsSavedSuccessfully(expectedSuccessMsg:string)
    {
        const actualSuccessfulMsg=await this.actualSuccessfulMsg.textContent();
        expect(actualSuccessfulMsg).toBe(expectedSuccessMsg);
    }

    async verifyErroMsgForEmptyRecord(expectedErrorMsg:string)
    {
        await this.page.waitForTimeout(5000);
        const actualEmptyRecordErrorMsg=await this.actualEmptyRecordErrorMsg.textContent();
        expect(actualEmptyRecordErrorMsg).toBe(expectedErrorMsg);
    }

    async clickOnErrorMsgCloseIcon()
    {
        await this.closeIcon.click();
    
    }

    //verify-cancel
    async verifyCancelButtonIsPresent()
    {
        await this.suspectsCancelButton.isVisible();
    }

    async clickOnSuspectscancelButton()
    {
        await this.suspectsCancelButton.click();
    }

    async verifyRecordIsCancelledSuccessfully()
    {
        await expect(this.ageTextbox).toBeEmpty();
        await expect(this.heightInputDropdown).toBeEmpty();
        await expect(this.buildInputDropdown).toBeEmpty();
        await expect(this.ethnicAppearanceInputDropdown).toBeEmpty();
        await expect(this.complexionInputDropdown).toBeEmpty();
        await expect(this.hairColourInputDropdown).toBeEmpty();
        await expect(this.hairLengthInputDropdown).toBeEmpty();
        await expect(this.hairStyleInputDropdown).toBeEmpty();
        await expect(this.facialHairColourInputDropdown).toBeEmpty();
        await expect(this.facialHairColourInputDropdown).toBeEmpty();
        await expect(this.eyeColourInputDropdown).toBeEmpty();
        }

    //Edit//
    async verifySuspectsEditButtonIsPresent()
    {
        await this.suspectsEditButton.isVisible();
    }

    async clickOnSuspectsEditButton()
    {
        await this.suspectsEditButton.click();
    }

    //Verify-fields are editable
    async verifyAgeInputFieldIsEditable()
    {
        await this.ageTextbox.isEditable();
        await expect(this.ageTextbox).toBeEditable();
    }

    async verifyHeightDropdwonFieldIsEdiable()
    {
        await this.heightInputDropdown.isEditable();
        await expect(this.heightInputDropdown).toBeEditable();
    }

    async verifyBuildDropdownFieldIsEdiatable()
    {
        await this.buildInputDropdown.isEditable();
        await expect(this.buildInputDropdown).toBeEditable();
    }

    async verifyEthnicAppearanceDropdownFieldIsEditable()
    {
        await this.ethnicAppearanceInputDropdown.isEditable();
        await expect(this.ethnicAppearanceInputDropdown).toBeEditable();
    }

    async verifyComplexionDropdownFieldIsEditable()
    {
        await this.complexionInputDropdown.isEditable();
        await expect(this.complexionInputDropdown).toBeEditable();
    }

    async verifyHairColorDropdownFieldIsEditable()
    {
        await this.hairColourInputDropdown.isEditable();
        await expect(this.hairColourInputDropdown).toBeEditable();
    }

    async verifyHairLengthDropdownFieldIsEditable()
    {
        await this.hairLengthInputDropdown.isEditable();
        await expect(this.hairLengthInputDropdown).toBeEditable();
    }

    async verifyHairStyleDropdownFieldIsEditable()
    {
        await this.hairStyleInputDropdown.isEditable();
        await expect(this.hairLengthInputDropdown).toBeEditable();
    }

    async verifyFacialHairDropdownFieldIsEditable()
    {
        await this.facialHairInputDropdown.isEditable();
        await expect(this.facialHairInputDropdown).toBeEditable();
    }

    async verifyFacialHairColorDropdownFFieldIsEditable()
    {
        await this.facialHairColourInputDropdown.isEditable();
        await expect(this.facialHairColourInputDropdown).toBeEditable();
    }

    async verifyEyeColorInputDropdownIsEditable()
    {
        await this.eyeColourInputDropdown.isEditable();
        await expect(this.eyeColourInputDropdown).toBeEditable();
    }

    //Delete//
    async verifySuspectsDeleteButtonIsPresent()
    {
        await this.suspectsDeleteButton.isVisible();
    }

    async clickOnSuspectsDeleteButton()
    {
        await this.suspectsDeleteButton.click();
    }

    async clickOnDeleteButtonPopup()
    {
        await this.deleteButtonPopup.click();
    }

}
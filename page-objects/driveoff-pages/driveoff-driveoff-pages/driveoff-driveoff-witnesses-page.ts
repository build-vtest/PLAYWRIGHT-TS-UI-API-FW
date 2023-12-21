import { Locator, Page, expect } from "@playwright/test";

export class DriveoffWitnessesPage{
    readonly page: Page;

    //Add//

    readonly witnessTab:Locator;
    readonly witnessAddButton:Locator;
    readonly firstNameTextbox:Locator;
    readonly lastNametextbox:Locator;
    readonly dateOfBirthInputDropdown:Locator;
    readonly countrySearchbox:Locator;
    readonly countryFlag:Locator;
    readonly mobileNoDropdownInputField:Locator;
    readonly homeAddressTextbox:Locator;
    readonly suburbTextbox:Locator;
    readonly postCodeTextbox:Locator;
    readonly emailAddressTextbox:Locator;
    readonly identificationTypeInputDropdown:Locator;
    readonly identityDocNumberTextbox:Locator;
    readonly genderInputDropdown:Locator;
    readonly witnessesSaveButton:Locator;
    readonly actualSuccessfulMsg:Locator;
    readonly expectedFirstName:string;

    //Edit//

    readonly witnessEditButton:Locator;
    
    //Delete//

    readonly witnessesDeleteButton:Locator;
    readonly deleteButtonPopup:Locator;

    //Cancel//

    readonly witnessCancelButton:Locator;

    //Maximize//

    readonly witnessMaximizeButton:Locator;

    constructor(page: Page,firstName:string) {
        this.page = page;
        
        //Add//

       this.witnessTab=page.locator('[data-test-id="DriveOff11311"]');
       this.witnessAddButton=page.locator('[data-test-id="DriveOffWitnessesWitnessesFormAdd"]');
       this.expectedFirstName = `${firstName}${Math.random().toString().slice(2, 6)}`;
       this.firstNameTextbox=page.locator('//div[@data-test-id="DriveOffWitnessesWitnessesFormFirstname"]//input')  
       this.lastNametextbox=page.locator('//div[@data-test-id="DriveOffWitnessesWitnessesFormLastname"]//input');
       this.dateOfBirthInputDropdown=page.locator('//input[@placeholder="Date Of Birth"]');
       this.countrySearchbox=page.locator('//input[@class="search-box"]');
       this.countryFlag=page.locator('//div[@class="selected-flag"]');
       this.mobileNoDropdownInputField=page.locator('//div[@data-test-id="DriveOffWitnessesWitnessesFormPhone"]//input');
       this.homeAddressTextbox=page.locator('//div[@data-test-id="DriveOffWitnessesWitnessesFormAddress"]//input');
       this.suburbTextbox=page.locator('//div[@data-test-id="DriveOffWitnessesWitnessesFormSuburb"]//input')
       this.postCodeTextbox=page.locator('//div[@data-test-id="DriveOffWitnessesWitnessesFormPostcode"]//input');
       this.emailAddressTextbox=page.locator('//div[@data-test-id="DriveOffWitnessesWitnessesFormEmail"]//input');
       this.identificationTypeInputDropdown=page.locator('(//div[@data-test-id="DriveOffWitnessesWitnessesFormIdentificationType"]//input)[1]');
       this.identityDocNumberTextbox=page.locator('//div[@data-test-id="DriveOffWitnessesWitnessesFormIdentityNumber"]//input');
       this.genderInputDropdown=page.locator('(//div[@data-test-id="DriveOffWitnessesWitnessesFormGender"]//input)[1]');
       this.witnessesSaveButton=page.locator('[data-test-id="DriveOffWitnessesWitnessesFormSave"]');
       this.actualSuccessfulMsg=page.locator('//p[text()="Record has been saved successfully"]');

       //Edit//

       this.witnessEditButton=page.locator('[data-test-id="DriveOffWitnessesWitnessesFormEdit"]');

       //Delete//

       this.witnessesDeleteButton=page.locator('[data-test-id="DriveOffWitnessesWitnessesFormDelete"]');
       this.deleteButtonPopup=page.locator('//a[text()="Yes"]');

       //Canel//

       this.witnessCancelButton=page.locator('(//button[@title="Cancel"])[3]');

       //Maximize//
       this.witnessMaximizeButton=page.locator('[data-test-id="DriveOffWitnessesWitnessesFormExpand"]');
    }

    async clickOnWitnessesTab()
    {
        await this.witnessTab.click();
    }

    async clickOnWitnessAddButton()
    {
      await this.witnessAddButton.click();
    }
  
    async enterValidDataInFirstNameField(firstName: string) {
        await this.firstNameTextbox.fill(this.expectedFirstName)
    }

    async enterValidDataInlastNameInputField(lastName:string)
    {
        await this.lastNametextbox.fill(lastName);
    }
 
    async selectDOBFromDropdown(dd: string, mm: string, yyyy: string)
    {
        await this.dateOfBirthInputDropdown.click();
            const prevButton = this.page.locator('(//th[@class="rdtPrev"])[3]');
            const mmyyButton = this.page.locator('(//th[@class="rdtSwitch"])[3]');
            const nextButton = this.page.locator('(//th[@class="rdtNext"])[3]');
    
            await mmyyButton.click();
            await this.page.waitForTimeout(3000);
            await mmyyButton.click();
            await mmyyButton.click();
    
            let condition = false;
            //select year
            for (let index = 0; index < 5; index++) {
                for (let tr = 1; tr < 4; tr++) {
                    for (let td = 1; td < 5; td++) {
                        let year = await this.page.locator('//div[@class="rdtYears"]//table//tbody//tr[' + tr + ']/td[' + td + ']').textContent();
                        if (!(year != yyyy)) {
                            await this.page.locator('//div[@class="rdtYears"]//table//tbody//tr[' + tr + ']/td[' + td + ']').click();
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
            }
            //select month
            for (let tr = 1; tr < 4; tr++) {
                for (let td = 1; td < 5; td++) {
                    let month = await this.page.locator('//div[@class="rdtMonths"]//table//tbody//tr[' + tr + ']/td[' + td + ']').textContent();
                    if (!(month != mm)) {
                        await this.page.locator('//div[@class="rdtMonths"]//table//tbody//tr[' + tr + ']/td[' + td + ']').click();
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
                    let day = await this.page.locator('(//div[@class="rdtDays"]//table//tbody)[3]//tr[' + tr + ']/td[' + td + ']').first().textContent();
                    if (!(day != dd)) {
                        if ((tr == 1 && Number(day) > 20) || (tr == 6 && Number(day) < 10)) {
    
                        } else {
                            await this.page.locator('(//div[@class="rdtDays"]//table//tbody)[3]//tr[' + tr + ']/td[' + td + ']').first().click();
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
   
    async enterValidDataInSearchmobInputField(countryName:string)
    {
        await this.countryFlag.click();
        await this.countrySearchbox.fill(countryName)
        await this.page.locator("//span[normalize-space()='" + countryName + "']").first().click();
    }

    async enterValidMobileNo(mobileNumber:string)
    {      
        await this.mobileNoDropdownInputField.click();
        await this.mobileNoDropdownInputField.fill(mobileNumber);
    } 

    async enterValidDataInhomeAddressInputField(homeAddress:string)
    {
        await this.homeAddressTextbox.fill(homeAddress);
    }

    async enterValidDataInSuburbInputField(suburb:string)
    {
        await this.suburbTextbox.fill(suburb);
    }

    async enterValidDataInPostcodeInputField(postcode:string)
    {
        await this.postCodeTextbox.fill(postcode);
    }

    async enterValidDataInEmailAddressInputField(emailAddress:string)
    {
        await this.emailAddressTextbox.fill(emailAddress);
    }

    async selectIdentificationTypeFromDropdown(identificationType:string)
    {
        await this.identificationTypeInputDropdown.click();
        await this.identificationTypeInputDropdown.fill(identificationType);
        await this.page.locator("//div[normalize-space()='" + identificationType + "']").first().click();
    }

    async enterValidDataInIdentityDocNumber(IdentityDocNumber:string)
    {
        await this.identityDocNumberTextbox.fill(IdentityDocNumber);
    }

    async selectGenderFromDropdwon(gender:string)
    {
        await this.genderInputDropdown.fill(gender);
    }

    async clickOnSaveButton()
    {
        await this.witnessesSaveButton.click();
    }

    async verifySaveButtonIsPresent()
    {
        await this.witnessesSaveButton.isVisible();
    }

    //Verify-success message
    async verifyRecordIsSavedSuccessfully(expectedSuccessMsg:string)
    {
        await this.page.waitForTimeout(3000);
        const actualSuccessfulMsg=await this.actualSuccessfulMsg.textContent();
        expect(actualSuccessfulMsg).toBe(expectedSuccessMsg);
    }

    //verify-cancel
    async verifyCancelButtonIsPresent()
    {
        await this.witnessCancelButton.isVisible();
    }
   
    async clickOnWitnessescancelButton()
    {
        await this.witnessCancelButton.click();
    }

    async verifyRecordIsCancelledSuccessfully(expectedSuccessMsg:string)
    {
       await expect(this.firstNameTextbox).toBeEmpty();
       await expect(this.lastNametextbox).toBeEmpty();
       await expect(this.dateOfBirthInputDropdown).toBeEmpty();
       await expect(this.mobileNoDropdownInputField).toBeEmpty();
       await expect(this.homeAddressTextbox).toBeEmpty();
       await expect(this.suburbTextbox).toBeEmpty();
       await expect(this.suburbTextbox).toBeEmpty();
       await expect(this.postCodeTextbox).toBeEmpty();
       await expect(this.emailAddressTextbox).toBeEmpty();
       await expect(this.identificationTypeInputDropdown).toBeEmpty();
       await expect(this.identityDocNumberTextbox).toBeEmpty();
       
    }
   
    //Edit//
    async verifyWitnessesEditButtonIsPresent()
    {
        await this.witnessEditButton.isVisible();
    }
   
    async clickOnWitnessesEditButton()
    {
        await this.witnessEditButton.click();
    }

    //verify-fields are editable
    async verifyFirstNameInputFieldIsEditable()
    {
        await this.firstNameTextbox.isEditable();
    }

    async verifyLastNameInputFieldIsEditable()
    {
        await this.lastNametextbox.isEditable();
    }

    async verifyDOBIsEditable()
    {
        await this.dateOfBirthInputDropdown.isEditable();
    }

    async verifyMobileNoFieldIsEditable()
    {
        await this.mobileNoDropdownInputField.isEditable();
    }

    async verifyHomeAddressInputFieldIsEditabe()
    {
        await this.mobileNoDropdownInputField.isEditable();
    }

    async verifySuburbInputFieldIsEditable()
    {
        await this.suburbTextbox.isEditable();
    }

    async verifyPostcodeInputFieldIsEditable()
    {
        await this.postCodeTextbox.isEditable();
    }

    async verifyEmailAddressFieldIsEditable()
    {
        await this.emailAddressTextbox.isEditable();
    }

    async veifyIdentificationTypeDropdownIsEditable()
    {
        await this.identificationTypeInputDropdown.isEditable();
    }

    async verifyIdentityDocNumberIsEditable()
    {
        await this.identityDocNumberTextbox.isEditable();
    }

    async verifyGnederDropdownIsEditable()
    {
        await this.genderInputDropdown.isEditable();
    }
   
    //Delete//
    async verifyWitnessesDeleteButtonIsPresent()
    {
        await this.witnessesDeleteButton.isVisible();
        await this.witnessesDeleteButton.isEnabled();
    }
   
    async clickOnWitnessesDeleteButton()
    {
        await this.witnessesDeleteButton.click();
    }
   
    async clickOnDeleteButtonPopup()
    {
        await this.deleteButtonPopup.click();
    }

    //Expand//
    async verifyExpandButtonIsPresent()
    {
        await this.witnessMaximizeButton.isVisible();
    }

    async clickOnWitnessesExpandButton()
    {
        await this.witnessMaximizeButton.click();
    }

    async verifyWitnessIsMaximizedSuccessfully()
    {
        await this.witnessMaximizeButton.isHidden();
    }
    
}
import { Locator, Page, expect } from "@playwright/test";


export class PaymentsRequestPage {
    readonly page: Page;

    readonly paymentsModule:Locator;
    readonly paymentRequestSubmodule:Locator;
    readonly paymentsStatusTab:Locator;
    readonly emailRadioButton:Locator;
    readonly emailAddressTextbox:Locator;
    readonly firstNameTextbox:Locator;
    readonly lastNameTextbox:Locator;
    readonly siteNoDropdown:Locator;
    readonly refNumberTextbox:Locator;
    readonly amountTextbox:Locator;
    readonly sendPaymentrequestButton:Locator;
    readonly payNowButton:Locator;
    readonly expectedFirstName:string;
    readonly expectedLastName:string;
    readonly expectedAmount:any;
    readonly okButton:Locator;
    readonly cancelButton:Locator;
    readonly actualAmtErrorMsg:Locator;  
    readonly requestSentMsg:Locator;
    readonly emailErrorMsg:Locator;
    readonly firstNameErrorMsg:Locator;
    readonly lastNameErrorMsg:Locator;
    readonly siteNoErrorMsg:Locator;
    readonly amountErrorMsg:Locator;
    readonly actualRefNoErrorMsg:Locator;
    readonly vehicleNumber:Locator;

    readonly iframe:Locator;

    readonly cardHolderNameTextbox:Locator;
    readonly cardNumberTextbox:Locator;
    readonly expiryMonthTextbox:Locator;
    readonly expiryYearTextbox:Locator;
    readonly cvnTextbox:Locator;
    readonly processPaymentButton:Locator;
    readonly expandButton:Locator;
    readonly smsRadioButton:Locator;
    readonly ValidMobileNoTextbox:Locator;
    readonly mobileNoDropdown:Locator;
    readonly mobileNoDropdownInputField:Locator;
    readonly smsOkButton:Locator;

    readonly actualPaymentSuccessMsg:Locator;
  
    constructor(page:Page,firstName:string,lastName:string,amount:any)
    {
        this.page = page;

        this.paymentsModule = page.locator('//p[text()="Payments"]');
        this.paymentRequestSubmodule = page.locator('//button[@title="Payment Request"]');
        this.paymentsStatusTab = page.locator('//button[@title="Payment Status"]');
        //this.paymentsStatusTab = page.getByTestId("PaymentsPayments1406");
        this.expectedFirstName = `${firstName}${Math.random().toString().slice(2, 6)}`;
        this.expectedLastName=`${lastName}${Math.random().toString().slice(2, 6)}`;
        this.expectedAmount=`${amount}${Math.random().toString().slice(2, 3)}`;
        this.emailRadioButton=page.locator('(//div[@data-test-id="PaymentsPaymentsPaymentRequest74SendBy"])[1]');   
        this.emailAddressTextbox=page.locator('//div[@data-test-id="PaymentsHome293PayNow74EmailAddress"]//input');
        this.firstNameTextbox=page.locator('//div[@data-test-id="PaymentsHome293PayNow74Firstname"]//input');
        this.lastNameTextbox=page.locator('//div[@data-test-id="PaymentsHome293PayNow74Lastname"]//input');
        this.siteNoDropdown=page.locator('(//div[@data-test-id="PaymentsHome293PayNow74StoreNoList"]//input)[1]');
        this.refNumberTextbox=page.locator('(//div[@data-test-id="PaymentsHome293PayNow74Crn2"])[1]//input');
        this.amountTextbox=page.locator('(//div[@data-test-id="PaymentsHome293PayNow74Amount"])[1]//input');
        this.sendPaymentrequestButton=page.locator('//button[@data-test-id="PaymentsHome293PayNow74SendPaymentRequest"]');
        this.payNowButton=page.locator('//button[@data-test-id="PaymentsPaymentsPaymentRequest74PayNow"]');
        this.okButton=page.locator('//a[text()="Ok"]');
        this.actualAmtErrorMsg=page.locator('//div[text()="Amount cannot be greater than 5,000.00"]');
        this.cancelButton=page.locator('//span[@class="btn"]');
        this.requestSentMsg=page.locator('[data-test-id="NotificationMessage"]');
        this.emailErrorMsg=page.locator('//div[text()="Email To is a required field"]');
        this.firstNameErrorMsg=page.locator('//div[text()="Firstname is a required field"]');
        this.lastNameErrorMsg=page.locator('//div[text()="Lastname is a required field"]');
        this.siteNoErrorMsg=page.locator('(//div[text()="Site No  is a required field"])[1]');
        this.amountErrorMsg=page.locator('//div[text()="Amount is a required field"]');
        this.actualRefNoErrorMsg=page.locator('//div[text()="RefNo  is a required field"]');
        this.vehicleNumber=page.locator('//input[@placeholder="Vechical No"]');
        this.iframe=page.locator('//iframe[@id="payNowiframeId"]');

        this.cardHolderNameTextbox=page.locator('[id="cardholdername"]');
        this.cardNumberTextbox=page.locator('[id="cardnumber"]');
        this.expiryMonthTextbox=page.locator('[id="expirydatemonth"]');
        this.expiryYearTextbox=page.locator('[id="expirydateyear"]');
        this.cvnTextbox=page.locator('[id="cvc"]');
        this.processPaymentButton=page.locator('//button[@id="submitbutton"]');
        this.expandButton=page.locator('[data-test-id="PaymentsHome293PayNowCardWithToggleAndFunctionButtonsExpand"]');
        this.smsRadioButton=page.locator('//div[@data-test-id="PaymentsHome293PayNow74SendBy"]/label/input[@value="SMS"]/parent::label');
        this.ValidMobileNoTextbox=page.locator('//input[@placeholder="Mobile Number"]');
        this.mobileNoDropdown=page.locator('//div[@class="selected-flag"]');
        this.mobileNoDropdownInputField=page.locator('//input[@placeholder="search"]');
        this.smsOkButton=page.locator('//a[text()="Ok"]');
        this.actualPaymentSuccessMsg=page.locator('//label[text()="Thank you! Your payment was successful."]');
    }

    async clickOnPaymentsModule() 
    {
        await this.paymentsModule.click();
    }

    async clickOnPaymentRequestSubModule() 
    {
        await this.paymentRequestSubmodule.click();
    }

    async clickOnPayemtesStatusSubbmodule() 
    {
        await this.paymentsStatusTab.click();
    }

    async sekectEmailRadioButton()
    {
       await this.emailRadioButton.click();
    }

    async selectSmsRadioButton()
    {
        await this.smsRadioButton.check();
    }

    async clickOnExpandButton()
    {
        await this.expandButton.click();
    }

    async clickOnSmsOkButton()
    {
        this.smsOkButton.click();
    }

    async clickOnMobileNoDropdown()
    {
        await this.mobileNoDropdown.click();
    }

    async enterValidEmailInEmilToField(emailTo: string) 
    {
        await this.emailAddressTextbox.fill(emailTo)
    }

    async enterValidDataInFirstNameField(firstName: string) 
    {
        await this.firstNameTextbox.fill(firstName);
    }
    async selectCountry(country: string) 
    {
        await this.page.locator('[title="Australia: + 61"]').click();
        await this.page.locator('[placeholder="search"]').fill(country);
        await this.page.locator('//span[normalize-space()="India"]/parent::li[@data-dial-code="1"]').click();
    }

    async enterValidMobileNo(mobileNumber:string)
    {
        await this.ValidMobileNoTextbox.fill(mobileNumber);
        await this.page.waitForLoadState('networkidle');
    }

    async enterValidDataInSearchmobInputField(countryName:string)
    {
        await this.mobileNoDropdownInputField.click();
        await this.mobileNoDropdownInputField.fill(countryName)
        await this.page.locator("//span[normalize-space()='" + countryName + "']").first().click();
    }

    async enterValidDataInLastNameField(lastName:string)
    {
        await this.lastNameTextbox.fill(lastName)
    }

    async selectSiteNo(siteNumber: string) 
    {
        await this.siteNoDropdown.click();
        await this.siteNoDropdown.fill(siteNumber);
        await this.page.locator("//div[normalize-space()='" + siteNumber + "']").first().click();
    }

    async enterValidDataInRefNumberField(refNumber: string) 
    {
        await this.refNumberTextbox.fill(refNumber);
    }

    async entervalidDataInAmountField(amount: string) 
    {
        await this.amountTextbox.fill(amount);

    }

    async enterVehicleNumber(vehicleNumber:string)
    {
        await this.vehicleNumber.click();
        await this.vehicleNumber.fill(vehicleNumber)
    }

    async clickOnSendPaymentRequestButton() 
    {
        await this.sendPaymentrequestButton.click();
    }

    async ClickOnPayNowButton() 
    {
        await this.payNowButton.click();
    }

    async clickOnOkButton() 
    {
        await this.okButton.click();
    }

    async clickOnCancelButton()
    {
        await this.cancelButton.click();
    }

    //verify
    async verifySendPaymentsRequestButtonIsEnable() 
    {
        await this.sendPaymentrequestButton.isEnabled();
    }

    async verifySendPaymentsRequestButtonIsVisible() 
    {
        await this.sendPaymentrequestButton.isVisible();
    }

    async verifyPayNowButtonIsEnable() 
    {
        await this.payNowButton.isEnabled();
    }

    async verifyPayNowButtonIsVisible() 
    {
        await this.payNowButton.isVisible();
    }

    async verifyRequestSentMsg(expectedReqSentMsg: string) 
    {
        const actualRequestMsg = await this.requestSentMsg.textContent();
        expect(actualRequestMsg).toBe(expectedReqSentMsg)
    }

    async verifyProcessPaymentButtonIsVisible()
    {
        await this.processPaymentButton.isVisible();
    }

    async verifyProcessPaymentButtonIsEnabled()
    {
        await this.processPaymentButton.isEnabled();
    }

    //Error Message
    async verifyAmountErrorMessage(ExpectedAmountErrorMessage: string) 
    {
        const actualAmtMsg = await this.actualAmtErrorMsg.textContent();
        expect(actualAmtMsg).toBe(ExpectedAmountErrorMessage);
    }

    async verifyAmountShouldBeLessThanExpectedAmount(amt: any)
    {
        var amount: any;
        expect(this.expectedAmount).not.toBeGreaterThan(amt);
        // if(amount>amt)
        // {
        //     console.log("amount is greater than expected amount")
        // }
        // else
        // {
        //     await this.page.keyboard.press('Control+A+Delete');
        //     await this.entervalidDataInAmountField(amt);
        // }
    }

    //Error message-Mandatory Fields
    async verifyEmailToFieldErorrMsg(expectedEmailToErrorMsg: string) 
    {
        const actualEmailErrorMsg = await this.emailErrorMsg.textContent();
        expect(actualEmailErrorMsg).toBe(expectedEmailToErrorMsg);
    }

    // async verifyFirstNameErrorMsg(expectedFirstNameErrorMsg: string) 
    // {
    //     const actualFirstNameErrorMsg = await this.firstNameErrorMsg.textContent();
    //     expect(actualFirstNameErrorMsg).toBe(expectedFirstNameErrorMsg)

    // }

    // async verifyLastNameErrorMsg(expectedLastNameErrorMsg: string) 
    // {
    //     const actualLastNameErrorMsg = await this.lastNameErrorMsg.textContent();
    //     expect(actualLastNameErrorMsg).toBe(expectedLastNameErrorMsg)
    // }

    async verifySiteNoErrorMsg(expectedSiteNoErrorMsg: string) 
    {
        const actualSiteNoErrorMsg = await this.siteNoErrorMsg.textContent();
        expect(actualSiteNoErrorMsg).toBe(expectedSiteNoErrorMsg)
    }

    async verifyAmountErrorMsg(expectedAmountErrorMsg: string) 
    {
        const actualAmountErrorMsg = await this.amountErrorMsg.textContent();
        expect(actualAmountErrorMsg).toBe(expectedAmountErrorMsg)
    }

    async verifyRefNoErrorMsg(expectedRefNoErrorMsg: string) 
    {
        const actualRefNoErrorMsg = await this.actualRefNoErrorMsg.textContent();
        expect(actualRefNoErrorMsg).toBe(expectedRefNoErrorMsg)
    }

    //Card details
    //Handling Iframe
    async enterValidcardHolderName(cardHolderName:string)
    {
        await this.page.waitForTimeout(3000);
        const allframes = this.page.frames();
        console.log("No.Of Frames: " + allframes.length)
        const my_frame =this.page.frameLocator("//iframe[@id='payNowiframeId']");
        await my_frame.locator('input[id="cardholdername"]').fill(cardHolderName);         
    }
  
    async enterValidCardNumber(cardNumber:string)
    {
        const my_frame =this.page.frameLocator("//iframe[@id='payNowiframeId']");
        await my_frame.locator('input[id="cardnumber"]').fill(cardNumber);         
    }

    async enterValidExpiryMonth(month:string)
    {
        const my_frame =this.page.frameLocator("//iframe[@id='payNowiframeId']");
        await my_frame.locator('input[id="expirydatemonth"]').fill(month);  
    }

    async enterValidExpiryYear(year:string)
    {
        const my_frame =this.page.frameLocator("//iframe[@id='payNowiframeId']");
        await my_frame.locator('input[id="expirydateyear"]').fill(year);  
    }

    async enterValidCVN(cvn:string)
    {
        const my_frame =this.page.frameLocator("//iframe[@id='payNowiframeId']");
        await my_frame.locator('input[id="cvc"]').fill(cvn);
    }
   
    async clickOnProcessPaymentButton()
    {
        await this.page.waitForTimeout(3000);
        const my_frame =this.page.frameLocator("//iframe[@id='payNowiframeId']");
        await my_frame.locator('//button[@id="submitbutton"]').click();
    }

    //verify-paymentsuccessful
    async verifyPaymentsSuccessfulMsg(expectedPaymentsSuccessMsg:string)
    {
        await this.page.waitForTimeout(5000);
        const my_frame =this.page.frameLocator("//iframe[@id='payNowiframeId']");
        const actualPaymentSuccessMsg= await my_frame.locator('//label[text()="Thank you! Your payment was successful."]').textContent();
        await this.page.waitForTimeout(3000);
        expect(actualPaymentSuccessMsg).toBe(expectedPaymentsSuccessMsg);
        await this.page.waitForTimeout(3000);
    }

    async clickOnCloseButton()
    {
        const my_frame =this.page.frameLocator("//iframe[@id='payNowiframeId']");
        await my_frame.locator('//button[text()="Close"]').click();
        
    }

    async verifyNavigatedToPaymentsSubmodule() {
        await this.page.waitForTimeout(3000);
        expect(this.paymentsStatusTab).toBeVisible();
    }


}
















































// import { Locator, Page, expect } from "@playwright/test";


// export class PaymentsRequestPage {
//     readonly page: Page;

//     readonly paymentStatusTab:Locator;
//     readonly paymentTab:Locator;
//     readonly paymentsModule:Locator;
//     readonly paymentsSubmodule:Locator;
//     readonly emailRadioButton:Locator;
//     readonly emailAddressTextbox:Locator;
//     readonly firstNameTextbox:Locator;
//     readonly lastNameTextbox:Locator;
//     readonly siteNoDropdown:Locator;
//     readonly refNumberTextbox:Locator;
//     readonly amountTextbox:Locator;
//     readonly sendPaymentrequestButton:Locator;
//     readonly payNowButton:Locator;
//     readonly expectedFirstName:string;
//     readonly expectedLastName:string;
//     readonly expectedAmount:any;
//     readonly okButton:Locator;
//     readonly cancelButton:Locator;
//     readonly actualAmtErrorMsg:Locator;  
//     readonly requestSentMsg:Locator;
//     readonly emailErrorMsg:Locator;
//     readonly firstNameErrorMsg:Locator;
//     readonly lastNameErrorMsg:Locator;
//     readonly siteNoErrorMsg:Locator;
//     readonly amountErrorMsg:Locator;

//     readonly cardHolderNameTextbox:Locator;
//     readonly cardNumberTextbox:Locator;
//     readonly expiryMonthTextbox:Locator;
//     readonly expiryYearTextbox:Locator;
//     readonly cvnTextbox:Locator;
//     readonly processPaymentButton:Locator;
//     readonly expandButton:Locator;
//     readonly smsRadioButton:Locator;
//     readonly ValidMobileNoTextbox:Locator;
//     readonly mobileNoDropdown:Locator;
//     readonly mobileNoDropdownInputField:Locator;
//     readonly smsOkButton:Locator;

//     readonly actualPaymentSuccessMsg:Locator;
  
//     constructor(page:Page,firstName:string,lastName:string,amount:any)
//     {
//         this.page = page;

//         //Tabs
//         this.paymentStatusTab = page.locator('//li[normalize-space()="Payment Status"]');
//         this.paymentTab = page.locator('//li[normalize-space()="Payment"]');

//         this.paymentsModule = page.locator('//p[text()="Payments"]');
//         this.paymentsSubmodule = page.locator('//span[text()="Payments"]');
//         this.expectedFirstName = `${firstName}${Math.random().toString().slice(2, 6)}`;
//         this.expectedLastName=`${lastName}${Math.random().toString().slice(2, 6)}`;
//         this.expectedAmount=`${amount}${Math.random().toString().slice(2, 3)}`;
//         this.emailRadioButton=page.locator('[value="Email"]');   
//         this.emailAddressTextbox=page.locator('[name="EmailAddress"]');
//         this.firstNameTextbox=page.locator('[name="Firstname"]');
//         this.lastNameTextbox=page.locator('[name="Lastname"]');
//         this.siteNoDropdown=page.locator('(//div[@data-test-id="CardBody"]//input)[8]');
//         this.refNumberTextbox=page.locator('[name="Crn2"]');
//         this.amountTextbox=page.locator('[name="Amount"]');
//         this.sendPaymentrequestButton=page.locator('[name="btPayReq"]');
//         this.payNowButton=page.locator('[name="btRealTimePayment"]');
//         this.okButton=page.locator('//a[text()="Ok"]');
//         this.actualAmtErrorMsg=page.locator('//div[text()="Amount cannot be greater than 5,000.00"]');
//         this.cancelButton=page.locator('//span[@class="btn"]');
//         this.requestSentMsg=page.locator('[data-test-id="NotificationMessage"]');
//         this.emailErrorMsg=page.locator('//div[text()="Email To is a required field"]');
//         this.firstNameErrorMsg=page.locator('//div[text()="Firstname is a required field"]');
//         this.lastNameErrorMsg=page.locator('//div[text()="Lastname is a required field"]');
//         this.siteNoErrorMsg=page.locator('//div[text()="Site No  is a required field"]');
//         this.amountErrorMsg=page.locator('//div[text()="Amount is a required field"]');

//         this.emailErrorMsg = page.locator('//div[text()="Email To is a required field"]');
//         this.firstNameErrorMsg = page.locator('//div[text()="Firstname is a required field"]');
//         this.lastNameErrorMsg = page.locator('//div[text()="Lastname is a required field"]');
//         this.siteNoErrorMsg = page.locator('//div[text()="Site No  is a required field"]');
//         this.amountErrorMsg = page.locator('//div[text()="Amount is a required field"]');

//         this.cardHolderNameTextbox=page.locator('[id="cardholdername"]');
//         this.cardNumberTextbox=page.locator('[id="cardnumber"]');
//         this.expiryMonthTextbox=page.locator('[id="expirydatemonth"]');
//         this.expiryYearTextbox=page.locator('[id="expirydateyear"]');
//         this.cvnTextbox=page.locator('[id="cvc"]');
//         this.processPaymentButton=page.locator('//button[@id="submitbutton"]');
//         this.expandButton=page.locator('//button[@data-test-id="Expand"][1]').first();   
//         this.smsRadioButton=page.locator('//*[@id="react-tabs-1"]/div/div/div/div[3]/div/div/form/div/div[1]/div/div/div[2]/div/label');
//         this.ValidMobileNoTextbox=page.locator('//input[@placeholder="Mobile Number"]');
//         this.mobileNoDropdown=page.locator('//div[@class="selected-flag"]');
//         this.mobileNoDropdownInputField=page.locator('//input[@placeholder="search"]');
//         this.smsOkButton=page.locator('//a[text()="Ok"]');
//         this.actualPaymentSuccessMsg=page.locator('//label[text()="Thank you! Your payment was successful."]');
        
//     }

//     async clickOnPaymentsModule() {
//         await this.paymentsModule.click();
//     }

//     async clickOnPayemtesSubbmodule() {
//         await this.paymentsSubmodule.click();
//     }

//     async sekectEmailRadioButton() {
//         await this.emailRadioButton.click();
//     }

//     async enterValidEmailInEmilToField(emailTo: string) {
//         await this.emailAddressTextbox.fill(emailTo)
//     }

//     async enterValidDataInFirstNameField(firstName: string) {
//         await this.firstNameTextbox.fill(this.expectedFirstName)
//     }

//     async enterValidMobileNo(mobileNumber: string) {
//         await this.ValidMobileNoTextbox.fill(mobileNumber);
//         await this.page.waitForTimeout(5000);
//     }

//     async enterValidDataInSearchmobInputField(countryName: string) {
//         await this.mobileNoDropdownInputField.click();
//         await this.mobileNoDropdownInputField.fill(countryName)
//         await this.page.locator("//span[normalize-space()='" + countryName + "']").first().click();
//     }

//     async enterValidDataInLastNameField(lastName: string) {
//         await this.lastNameTextbox.fill(this.expectedLastName)
//     }

//     async selectSiteNo(siteNumber: string) {
//         await this.siteNoDropdown.click();
//         await this.siteNoDropdown.fill(siteNumber);
//         await this.page.locator("//div[normalize-space()='" + siteNumber + "']").first().click();
//     }

//     async enterValidDataInRefNumberField(refNumber: string) {
//         await this.refNumberTextbox.fill(refNumber);
//     }

//     async entervalidDataInAmountField(amount: string) {
//         await this.amountTextbox.fill(amount);

//     }

//     async clickOnSendPaymentRequestButton() {
//         await this.sendPaymentrequestButton.click();
//     }

//     async ClickOnPayNowButton() {
//         await this.payNowButton.click();
//     }

//     async clickOnOkButton() {
//         await this.okButton.click();
//     }

//     async clickOnCancelButton() {
//         await this.cancelButton.click();
//     }

//     //verify
//     async verifySendPaymentsRequestButtonIsEnable() {
//         await this.sendPaymentrequestButton.isEnabled();
//     }

//     async verifySendPaymentsRequestButtonIsVisible() {
//         await this.sendPaymentrequestButton.isVisible();
//     }

//     async verifyPayNowButtonIsEnable() {
//         await this.payNowButton.isEnabled();
//     }

//     async verifyPayNowButtonIsVisible() {
//         await this.payNowButton.isVisible();
//     }

//     async verifyRequestSentMsg(expectedReqSentMsg: string) {
//         const actualRequestMsg = await this.requestSentMsg.textContent();
//         expect(actualRequestMsg).toBe(expectedReqSentMsg)
//     }

//     async verifyProcessPaymentButtonIsVisible() {
//         await this.processPaymentButton.isVisible();
//     }

//     async verifyProcessPaymentButtonIsEnabled() {
//         await this.processPaymentButton.isEnabled();
//     }

//     //Error Message
//     async verifyAmountErrorMessage(ExpectedAmountErrorMessage: string) {
//         const actualAmtMsg = await this.actualAmtErrorMsg.textContent();
//         expect(actualAmtMsg).toBe(ExpectedAmountErrorMessage);
//     }

//     async verifyAmountShouldBeLessThanExpectedAmount(amt: any) {
//         var amount: any;
//         expect(this.expectedAmount).not.toBeGreaterThan(amt);
//         // if(amount>amt)
//         // {
//         //     console.log("amount is greater than expected amount")
//         // }
//         // else
//         // {
//         //     await this.page.keyboard.press('Control+A+Delete');
//         //     await this.entervalidDataInAmountField(amt);
//         // }
//     }

//     //Error message-Mandatory Fields
//     async verifyEmailToFieldErorrMsg(expectedEmailToErrorMsg: string) {
//         const actualEmailErrorMsg = await this.emailErrorMsg.textContent();
//         expect(actualEmailErrorMsg).toBe(expectedEmailToErrorMsg);
//     }

//     async verifyFirstNameErrorMsg(expectedFirstNameErrorMsg: string) {
//         const actualFirstNameErrorMsg = await this.firstNameErrorMsg.textContent();
//         expect(actualFirstNameErrorMsg).toBe(expectedFirstNameErrorMsg)

//     }

//     async verifyLastNameErrorMsg(expectedLastNameErrorMsg: string) {
//         const actualLastNameErrorMsg = await this.lastNameErrorMsg.textContent();
//         expect(actualLastNameErrorMsg).toBe(expectedLastNameErrorMsg)
//     }

//     async verifySiteNoErrorMsg(expectedSiteNoErrorMsg: string) {
//         const actualSiteNoErrorMsg = await this.siteNoErrorMsg.textContent();
//         expect(actualSiteNoErrorMsg).toBe(expectedSiteNoErrorMsg)
//     }

//     async verifyAmountErrorMsg(expectedAmountErrorMsg: string) {
//         const actualAmountErrorMsg = await this.amountErrorMsg.textContent();
//         expect(actualAmountErrorMsg).toBe(expectedAmountErrorMsg)
//     }
//     //Verification for Payments>Reports>Reports page test case
//     async verifyPaymentRequestBUttonIsClicked() {
//         expect(this.paymentTab).toBeVisible();
//     }

//     //Card details
//     //Handling Iframe
//     async enterValidcardHolderName(cardHolderName: string) {
//         const allframes = this.page.frames();
//         console.log("No.Of Frames: " + allframes.length)
//         const my_frame = this.page.frameLocator("//iframe[@id='payNowiframeId']");
//         await my_frame.locator('input[id="cardholdername"]').fill(cardHolderName);
//     }

//     async enterValidCardNumber(cardNumber: string) {
//         const my_frame = this.page.frameLocator("//iframe[@id='payNowiframeId']");
//         await my_frame.locator('input[id="cardnumber"]').fill(cardNumber);
//     }

//     async enterValidExpiryMonth(month: string) {
//         const my_frame = this.page.frameLocator("//iframe[@id='payNowiframeId']");
//         await my_frame.locator('input[id="expirydatemonth"]').fill(month);
//     }

//     async enterValidExpiryYear(year: string) {
//         const my_frame = this.page.frameLocator("//iframe[@id='payNowiframeId']");
//         await my_frame.locator('input[id="expirydateyear"]').fill(year);
//     }

//     async enterValidCVN(cvn: string) {
//         const my_frame = this.page.frameLocator("//iframe[@id='payNowiframeId']");
//         await my_frame.locator('input[id="cvc"]').fill(cvn);
//     }
   
//     async clickOnProcessPaymentButton()
//     {
//         await this.page.waitForTimeout(3000);
//         const my_frame =this.page.frameLocator("//iframe[@id='payNowiframeId']");
//         await my_frame.locator('//button[@id="submitbutton"]').click();
//     }

//     //verify-paymentsuccessful
//     async verifyPaymentsSuccessfulMsg(expectedPaymentsSuccessMsg:string)
//     {
//         const my_frame =this.page.frameLocator("//iframe[@id='payNowiframeId']");
//         const actualPaymentSuccessMsg= await my_frame.locator('//label[text()="Thank you! Your payment was successful."]').textContent();
//         expect(actualPaymentSuccessMsg).toBe(expectedPaymentsSuccessMsg)
//     }

//     async clickOnCloseButton()
//     {
//         const my_frame =this.page.frameLocator("//iframe[@id='payNowiframeId']");
//         await my_frame.locator('//button[text()="Close"]').click();
        
//     }




// }
import { FrameLocator, Locator, Page, expect } from "@playwright/test";

export class PaymentsPayNowPage {
    readonly page: Page;
    readonly framePage: FrameLocator;
    static dateAndTime: string;

    readonly payNowIcon: Locator;


    readonly mobileNumberInputField: Locator;
    readonly emailToInputField: Locator;
    readonly firstNameInputField: Locator;
    readonly lastNameInputField: Locator;
    readonly siteNumberInputField: Locator;
    readonly refNumberInputField: Locator;
    readonly vehicalNumberInputField: Locator;
    readonly amountInputField: Locator;
    readonly payNowButton: Locator;

    //Card details Frame
    readonly cardHolderName: Locator;
    readonly cardNumber: Locator;
    readonly expiryMonth: Locator;
    readonly expiryYear: Locator;
    readonly cvn: Locator;
    readonly processPaymentButton: Locator;
    readonly paymentSuccessMessage: Locator;
    readonly closeButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.framePage = page.frameLocator("//iframe[@id='payNowiframeId']")
        this.payNowIcon = page.locator('[data-test-id="PaymentsHomeMenuCardundefinedMenuButton0"][title="Pay Now"]');

        this.mobileNumberInputField = page.locator('[data-test-id="PaymentsHome293PaymentRequest74MobilePhoneNumber"] input');
        this.emailToInputField = page.locator('[data-test-id="PaymentsHome293PaymentRequest74EmailAddress"] input');
        this.firstNameInputField = page.locator('[data-test-id="PaymentsHome293PaymentRequest74Firstname"] input');
        this.lastNameInputField = page.locator('[data-test-id="PaymentsHome293PaymentRequest74Lastname"] input');
        this.siteNumberInputField = page.locator('[data-test-id="PaymentsHome293PaymentRequest74StoreNoList"] input[autocorrect="off"]');
        this.refNumberInputField = page.locator('[data-test-id="PaymentsHome293PaymentRequest74Crn2"] input');
        this.vehicalNumberInputField = page.locator('[data-test-id="PaymentsHome293PaymentRequest74Crn3"] input');
        this.amountInputField = page.locator('[data-test-id="PaymentsHome293PaymentRequest74Amount"] input');
        this.payNowButton = page.locator('[data-test-id="PaymentsHome293PaymentRequest74PayNow"]');
        //Card details Frame
        this.cardHolderName = this.framePage.locator('input[id="cardholdername"]');
        this.cardNumber = this.framePage.locator('input[id="cardnumber"]');
        this.expiryMonth = this.framePage.locator('input[id="expirydatemonth"]');
        this.expiryYear = this.framePage.locator('input[id="expirydateyear"]');
        this.cvn = this.framePage.locator('input[id="cvc"]');
        this.processPaymentButton = this.framePage.locator('//button[@id="submitbutton"]');
        this.paymentSuccessMessage = this.framePage.locator('//label[text()="Thank you! Your payment was successful."]');
        this.closeButton = this.framePage.locator('//button[normalize-space()="Close"]');

    }
    getCurrentDateTime(): string {
        const now = new Date();

        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();

        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');

        return `${day}/${month}/${year} ${hours}:${minutes}`;
    }
    getCurrentDay(): string {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        return `${day}`;
    }

    async selectSiteNumerFromDropdown(siteName: string) {
        await this.siteNumberInputField.fill(siteName);
        await this.page.locator('//div[normalize-space()="' + siteName + '"][@aria-disabled="false"]').click();
        await this.page.waitForLoadState('networkidle');
    }

    async enterMobileNumber(mobileNumber: string) {
        await this.mobileNumberInputField.fill(mobileNumber);
    }
    async enterEmailTo(email: string) {
        await this.mobileNumberInputField.fill(email);
    }
    async enterFirstName(firstName: string) {
        await this.firstNameInputField.fill(firstName);
    }
    async enterLastName(lastName: string) {
        await this.lastNameInputField.fill(lastName);
    }
    async enterRefNumber(refNumber: string) {
        await this.refNumberInputField.fill(refNumber);
    }
    async enterVehicalNumber(vehicleNumber: string) {
        await this.vehicalNumberInputField.fill(vehicleNumber);
    }
    async enterAmount(amount: string) {
        await this.amountInputField.fill(amount);
    }
    async clickOnPayNowIcon() {
        await this.payNowIcon.click();
    }
    async clickOnPayNowButton() {
        await this.payNowButton.click();
        await this.page.waitForLoadState('networkidle');
    }
    async clickOnClosePopupButton() {
        await this.closeButton.click();
    }


    async enterValidcardHolderName(cardHolderName: string) {
        await this.page.waitForTimeout(3000);
        await this.cardHolderName.fill(cardHolderName);
    }

    async enterValidCardNumber(cardNumber: string) {
        await this.cardNumber.fill(cardNumber);
    }

    async enterValidExpiryMonth(month: string) {
        await this.expiryMonth.fill(month);
    }

    async enterValidExpiryYear(year: string) {
        await this.expiryYear.fill(year);
    }

    async enterValidCVN(cvn: string) {
        await this.cvn.fill(cvn);
    }

    async clickOnProcessPaymentButton() {
        await this.page.waitForTimeout(3000);
        await this.processPaymentButton.click();
        PaymentsPayNowPage.dateAndTime = this.getCurrentDateTime();
    }

    //verify-paymentsuccessful
    async verifyPaymentsSuccessfulMsg(expectedPaymentsSuccessMsg: string) {
        await this.page.waitForTimeout(5000);
        const actualPaymentSuccessMsg = await this.paymentSuccessMessage.textContent();
        await this.page.waitForTimeout(3000);
        expect(actualPaymentSuccessMsg).toBe(expectedPaymentsSuccessMsg);
        await this.page.waitForTimeout(3000);
    }
    async verifyPaymentStatus(paymentStatus: string) {
        await this.page.locator('[data-test-id="PaymentReport75PaymentRequest_StatusFilterCellDateRequested"] input').fill(this.getCurrentDay());
        await this.page.locator('//table[@class="table dx-g-bs4-table"]/tbody/tr[last()]/td[1]/div/button').click();
        const actualDateAndTime: string = await this.page.locator('[data-test-id="PaymentReportPaymentReportViewDatePaid"] input').inputValue();
        const status: string = await this.page.locator('[data-test-id="PaymentReportPaymentReportViewStatus"] input').inputValue();
        console.log(PaymentsPayNowPage.dateAndTime);
        console.log(status);
        expect(status).toBe(paymentStatus);
        expect(actualDateAndTime).toBe(PaymentsPayNowPage.dateAndTime);
    }

}
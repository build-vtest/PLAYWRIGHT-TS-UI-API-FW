import { Locator, Page, expect } from "@playwright/test";

export class DriveoffStatusPage {
    readonly page: Page;

    readonly payNowButton: Locator;
    readonly paymentRequestButton: Locator;
    readonly editStatusButton: Locator;
    readonly expandButton: Locator;

    readonly policeStatusInputField: Locator;
    readonly dateReportedDatePicker: Locator;
    readonly policeRefferenceField: Locator;
    readonly internalRefferenceField: Locator;

    readonly emailAddressInputField: Locator;
    readonly firstNameInputField: Locator;
    readonly lastNameInputField: Locator;
    readonly payNowPopupButton: Locator;
    readonly paymentRequest: Locator;
    readonly createLinkPopupButton: Locator;
    readonly actualPaymentRegSuccessMsg: Locator;
    readonly paymentReqCloseButton: Locator;
    readonly smsRadioButton: Locator;
    readonly mobNumberInputField: Locator;
    readonly okButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.payNowButton = page.locator('[data-test-id="DriveOffDriveOffStatusStatusFormbtnPayNowCustomButton2"]');
        this.paymentRequestButton = page.locator('[data-test-id="btnPayReqCustomButton"]');
        this.editStatusButton = page.locator('//button[@data-test-id="btnPayReqCustomButton"]/parent::span/following-sibling::span/button[@data-test-id="Edit"]');
        this.editStatusButton = page.locator('[data-test-id="DriveOffDriveOffStatusStatusFormEdit"]');
        this.expandButton = page.locator('//button[@data-test-id="btnPayReqCustomButton"]/parent::span/following::span/button[@data-test-id="Expand"]');

        this.policeStatusInputField = page.locator('[class=" css-19bb58m"] input');
        this.dateReportedDatePicker = page.locator('[placeholder="Date Reported"]');
        this.policeRefferenceField = page.locator('[name="PoliceReference"]');
        this.internalRefferenceField = page.locator('[name="PoliceInternalReference"]');

        this.emailAddressInputField = page.locator('[data-test-id="DriveOffDriveOffStatusDriveOffPaymentRequestPayReqDriveOffFormEmailAddress"] input');
        this.firstNameInputField = page.locator('[data-test-id="DriveOffDriveOffStatusDriveOffPaymentRequestPayReqDriveOffFormFirstName"] input');
        this.lastNameInputField = page.locator('[data-test-id="DriveOffDriveOffStatusDriveOffPaymentRequestPayReqDriveOffFormLastName"] input');
        this.payNowPopupButton = page.locator('[data-test-id="DriveOffDriveOffStatusDriveOffPaymentRequestPayNowSend"]');
        this.paymentRequestButton = page.locator('[data-test-id="DriveOffDriveOffStatusStatusFormbtnPayReqCustomButton"]');
        this.createLinkPopupButton = page.locator('[data-test-id="DriveOffDriveOffStatusDriveOffPaymentRequestCreateLink"]');
        this.actualPaymentRegSuccessMsg = page.locator('[data-test-id="NotificationMessage"]');
        this.paymentReqCloseButton = page.locator('[data-test-id="DriveOffDriveOffStatusDriveOffPaymentRequestClose"]');
        this.smsRadioButton = page.locator('(//div[@data-test-id="DriveOffDriveOffStatusDriveOffPaymentRequestPayReqDriveOffFormSendBy"])[2]');
        this.mobNumberInputField = page.locator('[data-test-id="DriveOffDriveOffStatusDriveOffPaymentRequestPayReqDriveOffFormMobilePhoneNumber"] input');
        this.okButton = page.locator('//a[text()="Ok"]');
    }

    async clickOnEditStatusButton() {
        await this.editStatusButton.click();
    }
    async choosePOliceStatus(policeStatus: string) {
        await this.policeStatusInputField.fill(policeStatus);
        await this.page.locator('//div[normalize-space()="' + policeStatus + '"][@aria-disabled="false"]').click();
    }
    async clickOnDateReportedDatePicker() {
        await this.dateReportedDatePicker.click();
    }
    async enterPoliceReference(policeRefNo: string) {
        await this.policeRefferenceField.fill(policeRefNo);
    }
    async enterInternalReference(internalrefNo: string) {
        await this.internalRefferenceField.fill(internalrefNo);
    }

    async clickOnPayNowButton() {
        await this.payNowButton.click();
        await this.page.waitForTimeout(5000);
    }

    async clickOnPaymentRequestButton() {
        await this.paymentRequestButton.click();
    }

    async enterValidDetailsInEmailInputField(emaiId: string) {
        await this.emailAddressInputField.fill(emaiId)
    }

    async enterValidFirstNameInputField(firstName: string) {
        await this.firstNameInputField.fill(firstName)
    }

    async enterValidDetailsInLastNameInputField(lastName: string) {
        await this.lastNameInputField.fill(lastName)
    }

    async clickOnpayNowPopupButton() {
        await this.payNowPopupButton.click();
        await this.page.waitForTimeout(10000);
    }

    async clickOnCreateLinkPopupButton() {
        await this.page.waitForTimeout(2000)
        try {
            const element = await this.page.waitForSelector('[aria-label="Close"]', { timeout: 5000 });
            await element.click();
        } catch (error) {
        }
        await this.createLinkPopupButton.click();

    }

    async verifyRecordIsSavedSuccessfully(expectedPaymentReqSuccessMsg: string) {
        await this.page.waitForTimeout(5000);
        const actualPaymentRegSuccessMsg = await this.actualPaymentRegSuccessMsg.textContent();
        expect(actualPaymentRegSuccessMsg).toBe(expectedPaymentReqSuccessMsg);
    }

    async clickOnSmsRadioButton() {
        await this.smsRadioButton.click();
    }

    async clickOnPaymentsReqCloseButton() {
        await this.paymentReqCloseButton.click();

    }

    async enterValidMobNumberInInputField(mobNumber: string) {
        await this.mobNumberInputField.click();
        await this.page.keyboard.press('Control+A+Delete');
        await this.mobNumberInputField.fill(mobNumber)
    }

    async clickOnOkButton() {
        await this.okButton.click();
    }

}
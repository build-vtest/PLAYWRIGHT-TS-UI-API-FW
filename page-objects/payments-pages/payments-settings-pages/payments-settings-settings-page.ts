import { Locator, Page, expect } from "@playwright/test";

export class PaymentsSettingsPage {
    readonly page: Page;

    //Tabs
    readonly paymentSettingsExternalForm: Locator;
    //Settings
    readonly rows: Locator;
    readonly expandButton: Locator;
    readonly eyeHideButton: Locator;
    readonly eyeShowButton: Locator;
    readonly saveSettingsButton: Locator;
    readonly cancelSettingsButton: Locator;

    //Setup
    readonly editSetupButton: Locator;
    readonly hideSetupButton: Locator;
    readonly showSetupButton: Locator;
    readonly paymentReasonField: Locator;
    readonly descriptionField: Locator;
    readonly dueDateDaysField: Locator;
    readonly expiryDateDaysField: Locator;
    readonly minimumAmountField: Locator;
    readonly maximumAmountField: Locator;

    //Company Bank Account
    readonly bankAccountMessage: Locator;
    readonly editBankAccountsButton: Locator;
    readonly hideBankAccountsButton: Locator;
    readonly showBankAccountsButton: Locator;
    readonly accountNameField: Locator;
    readonly aBSBField: Locator;
    readonly accountNumberField: Locator;
    readonly saveBankAccountDetailsButton: Locator;
    readonly accountSvaedSuccessMessage: Locator;
    readonly accountSvaedSuccessMessageCloseButton: Locator;
    readonly cancelBankAccountDetailsButton: Locator;
    readonly verifyAccountButton: Locator;
    readonly deleteAccountButton: Locator;
    readonly accountDeletedSuccessMessage: Locator;
    readonly verifyAccountMessage: Locator;
    readonly settingsSubmodule:Locator;

    constructor(page: Page) {
        this.page = page;

        //Tabs//
        this.paymentSettingsExternalForm = page.locator('//button[@title="External Forms"]');

        //Settings
        this.rows = page.locator('[data-test-id="Settings131SettingsEditCommandCell"]');
        this.expandButton = page.locator('[data-test-id="SettingsCardWithToggleButtonExpand"]');
        this.eyeHideButton = page.locator('[data-test-id="SettingsCardWithToggleButtonHideCard"]');
        this.eyeShowButton = page.locator('[data-test-id="SettingsCardWithToggleButtonShowCard"]');
        this.saveSettingsButton = page.locator('[data-test-id="PaymentSettingsDetailsSettings131SettingsCommandCommit"]');
        this.cancelSettingsButton = page.locator('[data-test-id="Settings131SettingsCommandCancel"]');

        //Setup
        this.editSetupButton = page.locator('[data-test-id="PaymentSettingsDetailsPayReqSetup73Edit"]');
        this.hideSetupButton = page.locator('[data-test-id="PaymentsSettingsPaymentSettingsDetailsPayReqSetup73HideCard"] ');
        this.showSetupButton = page.locator('[data-test-id="PaymentsSettingsPaymentSettingsDetailsPayReqSetup73ShowCard"] ');
        this.paymentReasonField = page.locator('[data-test-id="PaymentsSettingsPaymentSettingsDetailsPayReqSetup73PaymentReason"] input');
        this.descriptionField = page.locator('[data-test-id="PaymentsSettingsPaymentSettingsDetailsPayReqSetup73Description"] input');
        this.dueDateDaysField = page.locator('//div[@data-test-id="PaymentSettingsDetailsPayReqSetup73DueDateDays"]//input');
        this.expiryDateDaysField = page.locator('//div[@data-test-id="PaymentSettingsDetailsPayReqSetup73ExpiryDateDays"]//input');
        this.minimumAmountField = page.locator('[data-test-id="PaymentsSettingsPaymentSettingsDetailsPayReqSetup73StringMinAmount"] input');
        this.maximumAmountField = page.locator('[data-test-id="PaymentsSettingsPaymentSettingsDetailsPayReqSetup73StringMaxAmount"] input');

        //Company Bank Account
        this.bankAccountMessage = page.locator('//div[contains(text(),"Based on your company Settings, you have chosen to deposit")]');
        this.editBankAccountsButton = page.locator('//button[@data-test-id="PaymentSettingsDetailsBankAccountBankAccountVerificationCardEdit"]');
        this.hideBankAccountsButton = page.locator('[data-test-id="PaymentsSettingsPaymentSettingsDetailsBankAccountBankAccountVerificationCardHideCard"]');
        this.showBankAccountsButton = page.locator('[data-test-id="PaymentsSettingsPaymentSettingsDetailsBankAccountBankAccountVerificationCardShowCard"]');
        this.accountNameField = page.locator('[data-test-id="PaymentSettingsDetailsBankAccountBankAccountVerificationCardAccountName"] input');
        this.aBSBField = page.locator('//div[@data-test-id="PaymentSettingsDetailsBankAccountBankAccountVerificationCardBSBNumber"]//input');
        this.accountNumberField = page.locator('//div[@data-test-id="PaymentSettingsDetailsBankAccountBankAccountVerificationCardAccountNumber"]//input');
        this.saveBankAccountDetailsButton = page.locator('[data-test-id="PaymentSettingsDetailsBankAccountBankAccountVerificationCardSave"]');
        this.accountSvaedSuccessMessage = page.locator('//div[@data-test-id="NotificationMessage"]/p[normalize-space()="Record has been saved successfully"]');
        this.accountSvaedSuccessMessageCloseButton = page.locator('[class="close"]');
        this.cancelBankAccountDetailsButton = page.locator('[data-test-id="undefinedBankAccountVerificationCardCancel"]');
        this.verifyAccountButton = page.locator('(//button[@data-test-id="PaymentsSettingsPaymentSettingsDetailsBankAccountBankAccountVerificationCardVerifyAccount"])[1]');
        this.deleteAccountButton = page.locator('[data-test-id="PaymentSettingsDetailsBankAccountBankAccountVerificationCardDelete"]');
        this.accountDeletedSuccessMessage = page.locator('//div[@data-test-id="NotificationMessage"]/p[normalize-space()="Bank account has been deleted successfully"]');
        this.verifyAccountMessage = page.locator('label[data-test-id="undefinedBankAccountVerificationCardVerifyAccount"]');
        this.settingsSubmodule=page.locator('(//button[@data-test-id="PaymentsHomeMenuCardundefinedMenuButton0"])[2]');
    }

    //Settings Actions
    async checkAllTheSettingRows() {
        await this.page.waitForTimeout(10000);
        for (let index = 1; index <= (await this.rows.count()); index++) {
            await this.page.locator('//div[@data-test-id="Settings131SettingsGrid"]/div/div/div/table[@class="table dx-g-bs4-table"]/tbody/tr[' + index + ']/td[@data-test-id="Settings131SettingsEditCommandCell"]').click();
            await this.page.locator('//div[@data-test-id="Settings131SettingsGrid"]/div/div/div/table[@class="table dx-g-bs4-table"]/tbody/tr[' + index + ']/td[5]').click();
            await this.saveSettingsButton.click();
        }
    }
    async checkAllowPaymentsForAllSitesSettings() {
        await this.page.locator('//div[@data-test-id="Settings131SettingsGrid"]/div/div/div/table[@class="table dx-g-bs4-table"]/tbody/tr[1]/td[1]').click();
        await this.page.locator('//div[@data-test-id="Settings131SettingsGrid"]/div/div/div/table[@class="table dx-g-bs4-table"]/tbody/tr[1]/td[5]').click();
    }
    //Settingsd Verification
    async verifyAllSettingsAreCheckable() {
        await this.page.waitForTimeout(10000);
        for (let index = 1; index <= (await this.rows.count()); index++) {
            await this.page.locator('//div[@data-test-id="PaymentSettingsDetailsSettingsCardWithToggleButtonCardBody"]/div/div/div//table[@class="table dx-g-bs4-table"]/tbody/tr[' + index + ']/td[@data-test-id="PaymentSettingsDetailsSettings131SettingsEditCommandCell"]').click();
            expect(this.page.locator('//div[@data-test-id="PaymentSettingsDetailsSettingsCardWithToggleButtonCardBody"]/div/div/div//table[@class="table dx-g-bs4-table"]/tbody/tr[' + index + ']/td[1]')).toBeTruthy();
            await this.page.locator('//div[@data-test-id="PaymentSettingsDetailsSettingsCardWithToggleButtonCardBody"]/div/div/div//table[@class="table dx-g-bs4-table"]/tbody/tr[' + index + ']/td[1]').click();
            await this.saveSettingsButton.click();
        }
    }

    //Setup Actions
    async clickOnSettingsSubmodule()
    {
       await this.settingsSubmodule.click();
    }
    async clickOnEditSetupButton() {
        await this.editSetupButton.click();
    }

    async enterDueDateDays(dueDateDays: string) {
        await this.dueDateDaysField.fill(dueDateDays);
    }

    async enterExpiryDateDays(expiryDateDays: string) {
        await this.expiryDateDaysField.fill(expiryDateDays);
    }

    //Setup Verifications
    async verifyDueDateDaysAreEntered(dueDateDays: string) {
        expect(await this.dueDateDaysField.inputValue()).toContain(dueDateDays);
    }

    async verifyExpiryDateDaysAreEntered(expiryDateDays: string) {
        expect(await this.expiryDateDaysField.inputValue()).toContain(expiryDateDays);
    }

    //Company Bank Account Actions

    async checkAllowPaymentsForAllSitesSettingsIfUnchecked(value:string) {
        await this.page.waitForTimeout(10000);
       // const isbankAccountMessageVisible = await this.bankAccountMessage.isVisible();
       // if (isbankAccountMessageVisible) {
            await this.page.locator('//div[@data-test-id="PaymentSettingsDetailsSettingsCardWithToggleButtonCardBody"]/div/div/div//table[@class="table dx-g-bs4-table"]/tbody/tr[1]/td[1]').click();
            await this.page.locator('//div[@data-test-id="PaymentSettingsDetailsSettingsCardWithToggleButtonCardBody"]/div/div/div//table[@class="table dx-g-bs4-table"]/tbody/tr[1]/td[5]').click();
            await this.page.locator('//div[@data-test-id="PaymentSettingsDetailsSettingsCardWithToggleButtonCardBody"]/div/div/div//table[@class="table dx-g-bs4-table"]/tbody/tr[1]/td[5]//input').fill(value);
            await this.page.locator("(//div[text()='" + value + "'])[1]").click();
            await this.saveSettingsButton.click();

      //  }
    }

    

    async clickOnEditCompanyBankAccount() {
        await this.page.waitForTimeout(3000);
        await this.editBankAccountsButton.click();
    }

    async enterAccountName(accountName: string) {
        await this.accountNameField.fill(accountName);
    }

    async enterBSB(bSB: string) {
        await this.aBSBField.fill(bSB);
    }

    async enterAccountNumber(accountNumber: string) {
        await this.accountNumberField.fill(accountNumber);
    }
    async saveBankAccoutDetails() {
        await this.saveBankAccountDetailsButton.click();
        await this.page.waitForTimeout(2000);
    }
    async closeSuccessMessagePopup() {
        await this.accountSvaedSuccessMessageCloseButton.click();
    }
    async cancelBankAccoutDetails() {
        await this.cancelBankAccountDetailsButton.click();
    }
    async verifyBankAccoutDetails() {
        await this.verifyAccountButton.click();
    }
    async deleteBankAccoutDetails() {
        await this.deleteAccountButton.click();
        await this.page.waitForTimeout(2000);
    }
    async clickOnPaymentSettingsExternalForms() {
        await this.paymentSettingsExternalForm.click();
    }
    //Company Bank Account Actions Verifications
    async verifyAccountNameIsEntered(accountName: string) {
        expect(await this.accountNameField.inputValue()).toContain(accountName);
    }
    async verifyBSBIsEntered(bSB: string) {
        expect(await this.aBSBField.inputValue()).toContain(bSB);
    }
    async verifyAccountNumberIsEntered(accountNumber: string) {
        expect(await this.accountNumberField.inputValue()).toContain(accountNumber);
    }
    async verifyAccountVerificatioMessage() {
        expect(this.verifyAccountMessage).toBeVisible();
    }
    async verifyBankAccountSavedSuccessfully(successMessage: string) {
        expect(await this.accountSvaedSuccessMessage.textContent()).toContain(successMessage);
    }
    async verifyBankAccountDeleteddSuccessfully(accountNumber: string) {
        expect(await this.accountDeletedSuccessMessage.textContent()).toContain(accountNumber);
    }
    async verifyNavigatedToSettingsSubmodule() {
        expect(this.paymentSettingsExternalForm).toBeTruthy();
    }

    
}
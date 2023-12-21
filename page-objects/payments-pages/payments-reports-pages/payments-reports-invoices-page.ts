import { Locator, Page, expect } from "@playwright/test";

export class PaymentsInvoicePage {
    readonly page: Page;

    readonly paymentsModule: Locator;

    readonly dashboardSubmodule: Locator;
    readonly invoivesTab: Locator;
    readonly startDateDatePicker: Locator;
    readonly endDateDatePicker: Locator;
    readonly applyButton: Locator;
    readonly mailIcon: Locator;
    readonly displayInvoiceICon: Locator;

    readonly resendMailBUtton: Locator;
    readonly displayInvoiceButton: Locator;

    readonly emailInputPopupField: Locator;
    readonly incorrectEmailMessage: Locator;
    readonly invalidEmailMessage: Locator;
    readonly errorPopupOKButton: Locator;
    readonly resendEmailSuccessMessage: Locator;
    readonly sendButton: Locator;
    readonly closeButton: Locator;
    readonly invoiceDisplayPopup: Locator;
    readonly invoiceDisplayOkButton: Locator;

    //Sayali's elements
    readonly reportsSubmodule: Locator;
    readonly invoicesTab: Locator;
    readonly exportButton: Locator;
    readonly exportAllDatabutton: Locator;

    constructor(page: Page) 
    {
        this.page = page;
        this.dashboardSubmodule = page.locator('(//span[text()="Dashboard"])[2]');
        this.invoivesTab = page.locator('//li[text()="Invoices"]');
        this.startDateDatePicker = page.locator('[data-test-id="PaymentsInvoicesInvoices292StartDate"] input');
        this.endDateDatePicker = page.locator('[data-test-id="PaymentsInvoicesInvoices292EndDate"] input');
        this.applyButton = page.locator('[data-test-id="PaymentsInvoicesInvoicesApply"]');
        this.mailIcon = page.locator('//button[@data-test-id="PaymentsInvoicesInvoices152InvoicesActionsColumnResendIdButton"] ');
        this.displayInvoiceICon = page.locator('[data-test-id="PaymentsInvoicesInvoices152InvoicesActionsColumnIdButton"]');

        this.emailInputPopupField = page.locator('//div[@data-test-id="PaymentsInvoicesInvoicesEmailAddress"]//input');
        this.incorrectEmailMessage = page.locator('[data-test-id="PaymentsInvoicesInvoicesErrorAlert"] p');
        this.invalidEmailMessage = page.locator('[data-test-id="NotificationMessage"] p');
        this.errorPopupOKButton = page.locator('//div[@data-test-id="PaymentsInvoicesInvoicesErrorAlert"]/parent::div/following-sibling::p/a');
        // this.resendEmailSuccessMessage = page.locator('[data-test-id="NotificationMessage"]');
        this.resendEmailSuccessMessage = page.locator('//p[normalize-space()="Succesfully resend Invoice via email"]');
        this.resendMailBUtton = page.locator('[data-test-id="PaymentsReportsInvoicesApply"]');

        this.sendButton = page.locator('[data-test-id="PaymentsInvoicesInvoicesButton0"]');
        this.closeButton = page.locator('[data-test-id="CustomHoverButton"]').last();
        this.invoiceDisplayPopup = page.locator('[data-test-id="PaymentsInvoicesInvoicesDisplayInvoiceAlert"]');
        this.invoiceDisplayOkButton = page.locator('//div[@data-test-id="PaymentsInvoicesInvoicesDisplayInvoiceAlert"]/parent::div/following-sibling::p/a');

        this.reportsSubmodule = page.locator('(//span[text()="Reports"])[1]');
        this.invoicesTab = page.locator('//li[text()="Invoices"]');
        this.exportButton = page.locator('//span[@class="svg-export"]');
        this.exportAllDatabutton = page.locator('//button[text()="Export all data"]');
    
    }

    async clickOnStartDateDatePicker() 
    {
        await this.startDateDatePicker.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickOnEndDateDatePicker() 
    {
        await this.endDateDatePicker.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickOnApplyButton() 
    {
        await this.applyButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickOnMailIcon() 
    {
        await this.mailIcon.first().click();
        await this.page.waitForLoadState('networkidle');
    }

    async clickOnDisplayInvoiceIcon() 
    {
        await this.displayInvoiceICon.first().click();
        await this.page.waitForLoadState('networkidle');
    }

    async enterMailID(emailID: string) 
    {
        await this.emailInputPopupField.fill(emailID);
        await this.page.waitForLoadState('networkidle');
    }

    async ClickOnSendMailButton() 
    {
        await this.sendButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(3000);
    }

    async closeIncorrectMailPopup() 
    {
        await this.errorPopupOKButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    async ClickOnCloseMailPopupButton() 
    {
        await this.closeButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    async ClickOnInvoiceDisplayOkButton() 
    {
        await this.invoiceDisplayOkButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    //Verifications
    async verifyEmailIsResent(successMessage: string) 
    {
        expect(this.resendEmailSuccessMessage).toBeVisible();
        await this.page.waitForLoadState('networkidle');
    }

    async verifyIncorrectMailMessage() 
    {
        expect(this.incorrectEmailMessage).toBeVisible();
        await this.page.waitForLoadState('networkidle');
    }

    async verifyInvalidMailMessage() 
    {
        expect(this.invalidEmailMessage).toBeVisible();
        await this.page.waitForLoadState('networkidle');
    }

    async verifyInvoicePopupIsShown() 
    {
        expect(this.invoiceDisplayPopup).toBeVisible();
        await this.page.waitForLoadState('networkidle');
    }

    async verifyInvoiceDisplayButtonIsShown() 
    {
        expect(this.invoiceDisplayOkButton).toBeVisible();
        await this.page.waitForLoadState('networkidle');
    }

    async clickOnReportsSubmodule() 
    {
        await this.reportsSubmodule.click();
    }

    async verifyInvoicesTabIsPresent() 
    {
        await this.invoicesTab.isVisible();
    }

    async clickOnInvoicesTab() 
    {
        await this.invoicesTab.click();
        await this.invoicesTab.isHidden();
    }

    async verifyApplyButtonIsVisible()
    {
        await this.applyButton.isVisible();
    }

    async verifyExportButtonIsPresent()
    {
        await this.exportButton.isVisible();
    }

    async clickOnExportbutton() 
    {
        await this.exportButton.click();
    }

    async verifyExportAllDataButtonIsPresent() 
    {
        await this.exportAllDatabutton.isVisible();
    }

    async clickOnExportAllDataButton() 
    {
        await this.exportAllDatabutton.click();
    }
}

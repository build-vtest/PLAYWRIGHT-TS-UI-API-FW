import { Locator, Page, expect } from "@playwright/test";

export class DashboardPage {
    readonly page: Page;
    readonly userProfileName: Locator;
    readonly profileButton: Locator;
    readonly dashBoardButton: Locator;
    //Admin Module
    readonly adminLocator: Locator;
    readonly sitesLocator: Locator;
    readonly userLocator: Locator;
    readonly contactsLocator: Locator;
    readonly userProfileDropdown: Locator;
    readonly logoutButton: Locator;
    readonly companySetting: Locator;

    //comms module
    readonly commsModuleButton: Locator;
    readonly commsTasksButton: Locator;
    readonly commsReportsButton: Locator;
    readonly commsSettingsButton: Locator;

    //Driveoff module
    readonly driveOffModuleButton: Locator;
    readonly driveoffReportButton: Locator;
    readonly driveoffDriveoffButton: Locator;
    readonly driveoffSettingsButton: Locator;


    //Payments Module
    readonly paymentModuleButton: Locator;
    readonly paymentsReportsButton: Locator;
    readonly paymentsPaymentsButton: Locator;
    readonly paymentsSettingsButton: Locator;
    readonly paymentSettingsExternalForm: Locator;

    //Stock Module
    readonly stockModule: Locator;
    readonly stockLevelsButton: Locator;
    readonly stockReportsButton: Locator;
    readonly stockSettingsButton: Locator;

    //Documents Module
    readonly documentsTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userProfileName = page.locator('[id="navbarDropdownMenuLink"]');
        this.profileButton = page.locator('//button[normalize-space()="Profile"]');
        this.dashBoardButton = page.locator('[href="/home/dashboard"] p');
        //Admin Module
        this.adminLocator = page.locator('//p[normalize-space()="Admin"]');
        this.sitesLocator = page.locator('//span[normalize-space()="Sites"]');
        this.userLocator = page.locator("//span[normalize-space()='Users']");
        this.contactsLocator = page.locator("//span[normalize-space()='Contacts']");
        this.userProfileDropdown = page.locator('[id="navbarDropdownMenuLink"]');
        this.logoutButton = page.locator('[class="dropdown-item"] span[class="nc-icon nc-button-power padding-right-10"]+span');
        this.companySetting = page.locator("//p[normalize-space()='Admin']//following::span[3]");

        //comms module
        this.commsModuleButton = page.locator('//p[normalize-space()="Comms"]');
        this.commsTasksButton = page.locator('//span[text()="Tasks"]');
        this.commsReportsButton = page.locator('(//span[text()="Reports"])[2]');
        this.commsSettingsButton = page.locator('(//span[text()="Settings"])[3]');

        //Driveoff Module
        this.driveOffModuleButton = page.locator('//p[normalize-space()="Drive Off"]');
        this.driveoffReportButton = page.locator('//a[@href="/home/driveoff/driveoffreports"]/span[normalize-space()="Reports"]');
        this.driveoffSettingsButton = page.locator('//a[@href="/home/driveoff/driveoffsettings"]/span[normalize-space()="Settings"]');
        this.driveoffDriveoffButton = page.locator('//a[@href="/home/driveoff/driveoff"]/span[normalize-space()="Drive Off"]');


        //Payments Module
        this.paymentModuleButton = page.locator('//p[normalize-space()="Payments"]');
        this.paymentsReportsButton = page.locator('//a[@href="/home/payreq/paymentsreports"]/span[normalize-space()="Reports"]');
        this.paymentsPaymentsButton = page.locator('//a[@href="/home/payreq/paymentspayments"]/span[normalize-space()="Payments"]');
        this.paymentsSettingsButton = page.locator('//a[@href="/home/payreq/paymentssettings"]/span[normalize-space()="Settings"]');
        this.paymentSettingsExternalForm = page.locator('//li[normalize-space()="External Forms"]');
        //li[@id="react-tabs-6"]

        //Comms Module
        this.commsModuleButton = page.locator('//p[normalize-space()="Comms"]');
        this.commsTasksButton = page.locator('//a[@href="/home/comms/commstaskmenu"]/span[normalize-space()="Tasks"]');
        this.commsReportsButton = page.locator('//a[@href="/home/comms/commsreportsmenu"]/span[normalize-space()="Reports"]');
        this.commsSettingsButton = page.locator('//a[@href="/home/comms/commssettingsmenu"]/span[normalize-space()="Settings"]');
        //li[@id="react-tabs-6"]

        //Stock Module
        this.stockModule = page.locator('//p[normalize-space()="Stock"]');
        this.stockLevelsButton = page.locator('//span[text()="Levels"]');
        this.stockReportsButton = page.locator('(//span[text()="Reports"])[2]');
        this.stockSettingsButton = page.locator('(//span[text()="Settings"])[2]');

        //Documents Tab
        this.documentsTab = page.locator('//p[normalize-space()="Documents"]');
    }

    async clickOnUserProfileName() {
        await this.userProfileName.click()
    }
    async clickOnprofileButton() {
        await this.profileButton.click()
    }

    //Admin Module
    async clickOnAdmin() {
        await this.page.waitForLoadState('networkidle');
        await this.adminLocator.click()
    }

    async clickOnSite() {
        await this.sitesLocator.click()
    }

    async clickOnUser() {

        await this.userLocator.click()
    }

    async clickOnContacts() {
        await this.contactsLocator.click()
    }

    async clickOnCompanySettings() {
        await this.companySetting.click();
    }
    //comms module
    // async clickOnCommsModule()
    // {
    //     await this.commsModuleButton.click();
    // }

    async clickOnCommsTasksModule() {
        await this.page.waitForLoadState('networkidle');
        await this.commsTasksButton.click();
    }

    async clickOnCommsReportsModule() {
        await this.commsReportsButton.click();
    }

    async clickOnCommsSettingsModule() {
        await this.commsSettingsButton.click();
    }

    //Drive off module
    async clickOnDriveoffModule() {
        await this.page.waitForLoadState('networkidle');
        await this.driveOffModuleButton.click();
    }
    async clickOnDriveOffReport() {
        await this.driveoffReportButton.click()
        this.page.waitForTimeout(3000);
    }
    async clickOnDriveoffSettings() {
        await this.driveoffSettingsButton.click()
    }
    async clickOnDriveoffDriveOff() {
        await this.driveoffDriveoffButton.click();
    }

    //Payments Module
    async clickOnPaymentsModule() {
        // await this.page.waitForLoadState('networkidle');
        await this.paymentModuleButton.click();
    }

    async clickOnPaymentsReports() {
        await this.paymentsReportsButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('load');
    }
    async clickOnPaymentsPayments() {
        await this.paymentsPaymentsButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('load');
    }
    async clickOnPaymentsSettings() {
        await this.paymentsSettingsButton.click();
    }

    //Comms Module
    async clickOnCommsModule() {
        await this.commsModuleButton.click();
    }

    async clickOnCommsReports() {
        await this.commsReportsButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('load');
    }
    async clickOnCommsTasks() {
        await this.commsTasksButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('load');
    }
    async clickOnCommsSettings() {
        await this.commsSettingsButton.click();
    }

    //Stock Module
    async clickOnStockModule() {
        await this.stockModule.click();
    }

    async clickOnStockLevels() {
        await this.stockLevelsButton.click();
    }

    async clickOnStockReports() {
        await this.stockReportsButton.click();
    }

    async clickOnStockSettings() {
        await this.stockSettingsButton.click();
    }

    //Documents Module
    async clickOnDocumentsModule() {
        await this.documentsTab.click();
    }

    //Verifications for Admin
    async verifyPageTitle(expectedPageTitle: string) {
        const actualPageTitle = await this.page.title();
        expect(actualPageTitle).toBe(expectedPageTitle);
    }

    async verifyUserSuccessfullyLoggedin(url: string) {
        expect(this.page).toHaveURL(url);
    }
    async verifyUserLoggedinSuccessfully() {
        await this.dashBoardButton.waitFor();
        expect(this.dashBoardButton).toBeVisible();
    }
    async verifyUserNotLoggedinSuccessfully() {
        expect(this.dashBoardButton).not.toBeVisible();
    }

    async logoutOfTheApplication() {
        await this.userProfileDropdown.click();
        await this.logoutButton.click();
    }

    async verifySiteTab(expectedSiteTabName: string) {
        const actualSiteTabName = await this.sitesLocator.textContent();
        console.log('name ' + actualSiteTabName);
        expect(actualSiteTabName).toBe(expectedSiteTabName);
    }

    async verifyUsersTab(expectedUsersTabName: string) {
        const actualUsersTabName = await this.userLocator.textContent();
        console.log('name ' + actualUsersTabName);
        expect(actualUsersTabName).toBe(expectedUsersTabName);
    }

    async verifyCompanySettingsTab(expectedCompanySettingsTabName: string) {
        const actualCompanySettingsTabName = await this.companySetting.textContent();
        console.log('name ' + actualCompanySettingsTabName);
        expect(actualCompanySettingsTabName).toBe(expectedCompanySettingsTabName);
    }

    async verifyContactsTab(expectedContactsTabName: string) {
        const actualContactTabTabName = await this.contactsLocator.textContent();
        console.log('name ' + actualContactTabTabName);
        expect(actualContactTabTabName).toBe(expectedContactsTabName);
    }

    //Verifications for Payments module

}

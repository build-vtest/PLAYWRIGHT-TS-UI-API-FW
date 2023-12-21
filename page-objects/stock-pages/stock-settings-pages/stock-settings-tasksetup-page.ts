import { Locator, Page, expect } from "@playwright/test";

export class StockTasksetupPage {
    readonly page: Page;

    //Tabs//

    readonly task: Locator;
    readonly reminders: Locator;
    readonly recipients: Locator;

    //Task//

    readonly expectedTaskName: string;
    readonly taskNameTextbox: Locator;
    readonly taskAddButton: Locator;
    readonly urgencyDropdown: Locator;
    readonly dueDateDropdown: Locator;
    readonly time: Locator;
    readonly messageTextbox: Locator;

    //Repeat
    readonly repeatButton: Locator;
    readonly okButton: Locator;
    readonly startDate: Locator;
    readonly startTime: Locator;
    readonly frequencyType: Locator;
    //Save
    readonly tasksetupSaveButton: Locator;
    readonly actualSuccessfulMsg: Locator;
    //Cancel
    readonly tasksetupCancelButton: Locator;
    //Edit
    readonly tasksetupEditButton: Locator;
    readonly expectedUpdatedTaskName: string;
    //Export
    readonly tasksetupExportButton: Locator;
    readonly tasksetupExportAllDataButton: Locator;
    readonly tasksetupExportselectedRowsButton: Locator;
    //verify
    readonly taskNameFilterData: Locator;
    readonly taskNameEnteredData: Locator;

    //Recipients//
    readonly siteNameDropdown: Locator;
    readonly recipientsEditButton: Locator;
    readonly recipientsSaveButton: Locator;
    readonly siteNameFilterData: Locator;
    readonly siteNameInputData: Locator;
    readonly productName: Locator;

    constructor(page: Page, taskName: string, updatedTaskName: string) {
        this.page = page;
        //Tabs//

        this.task = page.locator('//li[@data-test-id="StockCommsSetup11008"]');
        this.reminders = page.locator('//li[@data-test-id="StockCommsSetup11009"]');
        this.recipients = page.locator('//li[@data-test-id="StockCommsSetup11010"]');

        //Task//

        this.expectedTaskName = `${taskName}${Math.random().toString().slice(2, 6)}`;
        this.taskNameTextbox = page.locator('//div[@data-test-id="StockCommsSetupTask158TaskName"]//input');
        this.taskAddButton = page.locator('//button[@data-test-id="StockCommsSetupTask158Add"]');
        this.urgencyDropdown = page.locator('(//div[@data-test-id="StockCommsSetupTask158UrgencyId"]//input)[1]');
        this.dueDateDropdown = page.locator('//div[@data-test-id="StockCommsSetupTask158DueDate"]//input');
        this.time = page.locator('//div[@data-test-id="StockCommsSetupTask158DueTime"]//input');
        this.messageTextbox = page.locator('//div[@data-test-id="StockCommsSetupTask158Message"]//textarea');

        //Repeat
        this.repeatButton = page.locator('//button[@data-test-id="StockCommsSetupTaskRepeatInfoRepeat"]');
        this.okButton = page.locator('//button[@data-test-id="StockCommsSetupTaskRepeatInfoRepeatOk"]');
        this.startDate = page.locator('//div[@data-test-id="StockCommsSetupTaskRepeatInfoRepeatStartDate"]//input');
        this.startTime = page.locator('//div[@data-test-id="StockCommsSetupTaskRepeatInfoRepeatTimeFieldStartTime"]//input');
        this.frequencyType = page.locator('//div[@data-test-id="StockCommsSetupTaskRepeatInfoRepeatFrequencyType"]//input');
        //Save
        this.tasksetupSaveButton = page.locator('//button[@data-test-id="StockCommsSetupTask158Save"]');
        //Cancel
        this.tasksetupCancelButton = page.locator('[data-test-id="StockCommsSetupTask158CancelCustomHoverButton"]');
        //Edit
        this.tasksetupEditButton = page.locator('//button[@data-test-id="StockCommsSetupTask158Edit"]');
        this.expectedUpdatedTaskName = `${updatedTaskName}${Math.random().toString().slice(2, 6)}`;
        //Export
        this.tasksetupExportButton = page.locator('//button[@data-test-id="StockCommsSetupTask159TaskRepeatsExport"]');
        //verify
        this.taskNameFilterData = page.locator('//th[@data-test-id="StockCommsSetupTask159TaskRepeatsFilterCellTaskName"]//input');
        this.taskNameEnteredData = page.locator('(//input[@data-test-id="StockCommsSetupTask159TaskRepeatsTaskName"])[1]');

        //Recipients//
        this.siteNameDropdown = page.locator('[data-test-id="StockCommsSetupTaskRecipientsSiteName"] input');
        this.recipientsEditButton = page.locator('[data-test-id="StockCommsSetupTaskRecipients163Edit"]');
        this.recipientsSaveButton = page.locator('//button[@data-test-id="StockCommsSetupTaskRecipients163Save"]');
        this.siteNameFilterData = page.locator('//th[@data-test-id="StockCommsSetupTaskRecipients163TaskRecipientsGridFilterCellSiteName"]//input');
        this.siteNameInputData = page.locator('[data-test-id="StockCommsSetupTaskRecipients163TaskRecipientsGridSiteName"]');
        this.productName = page.locator('//div[@data-test-id="StockCommsSetupTaskRecipientsSiteFilterComponentSitenameProduct0"]//label');
    }

    //*****************************************************Tabs************************************************************************** */

    async clickOnTaskTab() {
        await this.task.click();
    }

    async clickOnRemindersTab() {
        await this.reminders.click();
    }

    async clickOnRecipientsTab() {
        await this.recipients.click();
    }

    //*****************************************************Task************************************************************************** */

    async verifyAddButtonIsEnabled() {
        await expect(this.taskAddButton).toBeEnabled();
    }

    async clickOnTaskAddButton() {
        await this.taskAddButton.click();

    }

    async enterValidDataInTaskNameInputField(expectedTaskName: string) {
        await this.taskNameTextbox.click();
        await this.taskNameTextbox.fill(this.expectedTaskName);
    }

    async enterValidDataInUrgencyDropdown(urgency: string) {
        await this.urgencyDropdown.click();
        await this.urgencyDropdown.fill(urgency);
        await this.page.locator("//div[normalize-space()='" + urgency + "']").first().click();
    }

    async enterValidDataInTimeInputField(time: string) {
        await this.time.click();
        await this.time.fill(time);
    }

    async enterValidDataInMsgInputField(message: string) {
        await this.messageTextbox.click();
        await this.messageTextbox.fill(message);
    }

    async clickOnDueDate() {
        await this.dueDateDropdown.click();
    }

    async clickOnRepeatButton() {
        await this.repeatButton.click();
    }

    async clickOnStartDate() {
        await this.startDate.click();
    }

    async enterStartTime(startTime: string) {
        await this.startTime.click();
        await this.startTime.fill(startTime);
    }

    async enterValidDataInFrequencyDropdown(frequency: string) {
        await this.frequencyType.click();
        await this.frequencyType.fill(frequency);
        await this.page.locator("(//div[normalize-space()='" + frequency + "'])[4]").click();
    }

    async chooseDueDateFromUniqueCalendar(datePicker: string, dd: string, mm: string, yyyy: string) {
        const prevButton = this.page.locator('//div[@data-test-id="StockCommsSetupTask158DueDate"]//input/parent::div/following-sibling::div/div/table/thead/tr/th[@class="rdtPrev"]');
        const mmyyButton = this.page.locator('//div[@data-test-id="StockCommsSetupTask158DueDate"]//input/parent::div/following-sibling::div/div/table/thead/tr/th[@class="rdtSwitch"]');
        const nextButton = this.page.locator('//div[@data-test-id="StockCommsSetupTask158DueDate"]//input/parent::div/following-sibling::div/div/table/thead/tr/th[@class="rdtNext"]');

        await mmyyButton.click();
        await mmyyButton.click();
        let condition = false;
        //select year
        for (let index = 0; index < 5; index++) {
            for (let tr = 1; tr < 4; tr++) {
                for (let td = 1; td < 5; td++) {
                    let year = await this.page.locator('//div[@data-test-id="StockCommsSetupTask158DueDate"]//input/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').textContent();
                    if (!(year != yyyy)) {
                        await this.page.locator('//div[@data-test-id="StockCommsSetupTask158DueDate"]//input/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').click();
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
            // await prevButton.click();
        }
        //select month
        for (let tr = 1; tr < 4; tr++) {
            for (let td = 1; td < 5; td++) {
                let month = await this.page.locator('//div[@data-test-id="StockCommsSetupTask158DueDate"]//input/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').textContent();
                if (!(month != mm)) {
                    await this.page.locator('//div[@data-test-id="StockCommsSetupTask158DueDate"]//input/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').click();
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
                let day = await this.page.locator('//div[@data-test-id="StockCommsSetupTask158DueDate"]//input/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').textContent();
                if (!(day != dd)) {
                    if ((tr == 1 && Number(day) > 20) || (tr == 6 && Number(day) < 10)) {

                    } else {
                        await this.page.locator('//div[@data-test-id="StockCommsSetupTask158DueDate"]//input/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').click();
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

    async chooseStartDateFromUniqueCalendar(datePicker: string, dd: string, mm: string, yyyy: string) {

        const prevButton = this.page.locator('//div[@data-test-id="StockCommsSetupTaskRepeatInfoRepeatStartDate"]//input/parent::div/following-sibling::div/div/table/thead/tr/th[@class="rdtPrev"]');
        const mmyyButton = this.page.locator('//div[@data-test-id="StockCommsSetupTaskRepeatInfoRepeatStartDate"]//input/parent::div/following-sibling::div/div/table/thead/tr/th[@class="rdtSwitch"]');
        const nextButton = this.page.locator('//div[@data-test-id="StockCommsSetupTaskRepeatInfoRepeatStartDate"]//input/parent::div/following-sibling::div/div/table/thead/tr/th[@class="rdtNext"]');

        await mmyyButton.click();
        await mmyyButton.click();
        let condition = false;
        //select year
        for (let index = 0; index < 5; index++) {
            for (let tr = 1; tr < 4; tr++) {
                for (let td = 1; td < 5; td++) {
                    let year = await this.page.locator('//div[@data-test-id="StockCommsSetupTaskRepeatInfoRepeatStartDate"]//input/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').textContent();
                    if (!(year != yyyy)) {
                        await this.page.locator('//div[@data-test-id="StockCommsSetupTaskRepeatInfoRepeatStartDate"]//input/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').click();
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
            await prevButton.click();
        }
        //select month
        for (let tr = 1; tr < 4; tr++) {
            for (let td = 1; td < 5; td++) {
                let month = await this.page.locator('//div[@data-test-id="StockCommsSetupTaskRepeatInfoRepeatStartDate"]//input/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').textContent();
                if (!(month != mm)) {
                    await this.page.locator('//div[@data-test-id="StockCommsSetupTaskRepeatInfoRepeatStartDate"]//input/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').click();
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
                let day = await this.page.locator('//div[@data-test-id="StockCommsSetupTaskRepeatInfoRepeatStartDate"]//input/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').textContent();
                if (!(day != dd)) {
                    if ((tr == 1 && Number(day) > 20) || (tr == 6 && Number(day) < 10)) {

                    } else {
                        await this.page.locator('//div[@data-test-id="StockCommsSetupTaskRepeatInfoRepeatStartDate"]//input/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').click();
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


    async clickOnRepeatOkButton() {
        await this.okButton.click();
    }


    //Save
    async verifySaveButtonIsPresent() {
        await expect(this.tasksetupSaveButton).toBeVisible();
    }

    async clickOnSaveButton() {
        await this.tasksetupSaveButton.click();
    }

    async enterValidDataInTaskNameFilter(expectedTaskName: string) {
        await this.taskNameFilterData.click();
        await this.taskNameFilterData.fill(this.expectedTaskName);
    }

    async verifyRecordIsAddedSuccessfully() {
        const value1 = await this.taskNameFilterData.textContent();
        const value2 = await this.taskNameEnteredData.textContent();
        expect(value1).toBe(value2);
        expect(value1).toEqual(value2);
    }

    //Cancel
    async verifyCancelButtonIsPresent() {
        await this.page.waitForTimeout(5000);
        await expect(this.tasksetupCancelButton).toBeVisible();
    }

    async clickOnCancelButton() {
        await this.tasksetupCancelButton.click();
    }

    //verify
    async verifyRecordIsCancelledSuccessfully() {
        await expect(this.taskNameTextbox).toBeEmpty();
        await expect(this.urgencyDropdown).toBeEmpty();
        await expect(this.messageTextbox).toBeEmpty();
    }

    //Edit
    async verifyEditButtonIsPresent() {
        await expect(this.tasksetupEditButton).toBeVisible();
    }

    async clickOnEditButton() {
        await this.tasksetupEditButton.click();
    }

    //verifyTask details fields are editable
    async verifyTaskDetailsFieldsAreEditable() {
        await expect(this.taskNameTextbox).toBeEditable();
        await expect(this.urgencyDropdown).toBeEditable();
        await expect(this.messageTextbox).toBeEditable();
    }

    //updated values
    async enterupdatedTaskName(updatedTaskName: string) {
        await this.taskNameTextbox.click();
        await this.taskNameTextbox.fill(this.expectedUpdatedTaskName);
    }

    async enterUpdatedValidDataInTasknameFilter(updatedTaskName: string) {
        await this.taskNameFilterData.click();
        await this.taskNameFilterData.fill(this.expectedUpdatedTaskName);
    }

    async verifyUpdatedRecordIsAddedSuccessfully() {
        const value1 = await this.taskNameFilterData.textContent();
        const value2 = await this.taskNameEnteredData.textContent();
        expect(value1).toBe(value2);
        expect(value1).toEqual(value2);
    }

    //Export
    async verifyExportButtonIsPresent() {
        await expect(this.tasksetupExportButton).toBeVisible();
    }

    async clickOnExportButton() {
        await this.tasksetupExportButton.click();
    }

    async clickOnExportAllDataButton() {
        await this.tasksetupExportAllDataButton.click();
    }

    async enterValidDataInSiteNameDropdown(siteName: string) {
        await this.siteNameDropdown.click();
        await this.siteNameDropdown.fill(siteName);
        await this.page.locator("(//div[normalize-space()='" + siteName + "'])[1]").click();
    }

    //Edit
    async clickOnRecipientsEditButton() {
        await this.recipientsEditButton.click();
    }

    async clickOnRecipientsSaveButton() {
        await this.recipientsSaveButton.click();
    }

    async enterDataInSiteNameFilterField(siteName: string) {
        await this.siteNameFilterData.click();
        await this.siteNameFilterData.fill(siteName);
    }

    async verifyRecordIsAddedSuccessfullyInRecipients() {
        const value1 = await this.siteNameFilterData.textContent();
        const value2 = await this.siteNameInputData.textContent();
        expect(value1).toBe(value2);
        expect(value1).toEqual(value2);
    }

    async selectProduct() {
        await this.productName.click();
    }

}





















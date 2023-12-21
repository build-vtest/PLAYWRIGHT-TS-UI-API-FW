
import { Locator, Page, expect } from "@playwright/test";

export class DriveoffSettingspage{
    readonly page: Page;

    //Settings//

    readonly settingsSubmodule:Locator;
    readonly rows:Locator;
    readonly saveSettingsButton :Locator;
       
    constructor(page: Page) 
    {
        this.page = page;

        //Settings//

        this.settingsSubmodule=page.locator('(//span[text()="Settings"])[5]');
        this.rows = page.locator('[data-test-id="Settings131SettingsEditCommandCell"]');
        this.saveSettingsButton = page.locator('[data-test-id="Settings131SettingsCommandCommit"]');
    }

    //*****************************************************Settings************************************************************************** */

    async verifyAllSettingsAreCheckable()
    {
        this.page.waitForTimeout(10000);
        for (let index = 1; index <= (await this.rows.count()); index++) {
            await this.page.locator('//div[@data-test-id="Settings131SettingsGrid"]/div/div/div/table[@class="table dx-g-bs4-table"]/tbody/tr[' + index + ']/td[@data-test-id="Settings131SettingsEditCommandCell"]').click();
            expect(this.page.locator('//div[@data-test-id="Settings131SettingsGrid"]/div/div/div/table[@class="table dx-g-bs4-table"]/tbody/tr[' + index + ']/td[5]')).toBeTruthy();
            await this.page.locator('//div[@data-test-id="Settings131SettingsGrid"]/div/div/div/table[@class="table dx-g-bs4-table"]/tbody/tr[' + index + ']/td[5]').click();
            await this.saveSettingsButton.click();
        }
    }
}
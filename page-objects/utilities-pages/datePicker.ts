import { Page } from "@playwright/test";

export class DatePicker {
    readonly page: Page;


    constructor(page: Page) {
        this.page = page;


    }
    async chooseDateFromCalendar(datePicker: string, dd: string, mm: string, yyyy: string, i: number) {

        const prevButton = this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/thead/tr/th[@class="rdtPrev"]').nth(i);
        const mmyyButton = this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/thead/tr/th[@class="rdtSwitch"]');
        const nextButton = this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/thead/tr/th[@class="rdtNext"]').nth(i);

        await mmyyButton.click();
        await mmyyButton.click();
        let condition = false;
        //select year
        for (let index = 0; index < 5; index++) {
            for (let tr = 1; tr < 4; tr++) {
                for (let td = 1; td < 5; td++) {
                    let year = await this.page.locator('(//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/tbody)[1]//tr[' + tr + ']/td[' + td + ']').textContent();
                    if (!(year != yyyy)) {
                        await this.page.locator('(//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/tbody)[1]//tr[' + tr + ']/td[' + td + ']').click();
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
                let month = await this.page.locator('(//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/tbody)[1]//tr[' + tr + ']/td[' + td + ']').textContent();
                if (!(month != mm)) {
                    await this.page.locator('(//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/tbody)[1]//tr[' + tr + ']/td[' + td + ']').click();
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
                let day = await this.page.locator('(//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/tbody)[1]//tr[' + tr + ']/td[' + td + ']').textContent();
                if (!(day != dd)) {
                    if ((tr == 1 && Number(day) > 20) || (tr == 6 && Number(day) < 10)) {

                    } else {
                        await this.page.locator('(//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/tbody)[1]//tr[' + tr + ']/td[' + td + ']').click();
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
    async chooseDateFromUniqueCalendar(datePicker: string, dd: string, mm: string, yyyy: string) {
        const prevButton = this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/thead/tr/th[@class="rdtPrev"]');
        const mmyyButton = this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/thead/tr/th[@class="rdtSwitch"]');
        const nextButton = this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/thead/tr/th[@class="rdtNext"]');

        await mmyyButton.click();
        await mmyyButton.click();
        let condition = false;
        //select year
        for (let index = 0; index < 5; index++) {
            for (let tr = 2; tr < 4; tr++) {
                for (let td = 1; td < 5; td++) {
                    let year = await this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').textContent();
                    if (!(year != yyyy)) {
                        await this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').click();
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
                let month = await this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').textContent();
                if (!(month != mm)) {
                    await this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').click();
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
                let day = await this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').textContent();
                if (!(day != dd)) {
                    if ((tr == 1 && Number(day) > 20) || (tr == 6 && Number(day) < 10)) {

                    } else {
                        await this.page.locator('//input[@placeholder="' + datePicker + '"]/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').click();
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
    async chooseDueFromDateFromCalendar(datePicker: string, dd: string, mm: string, yyyy: string) {
        const prevButton = this.page.locator('//div[@data-test-id="MyTasks168DueFrom"]/div/div/input/parent::div/following-sibling::div/div/table/thead/tr/th[@class="rdtPrev"]');
        const mmyyButton = this.page.locator('//div[@data-test-id="MyTasks168DueFrom"]/div/div/input/parent::div/following-sibling::div/div/table/thead/tr/th[@class="rdtSwitch"]');
        const nextButton = this.page.locator('//div[@data-test-id="MyTasks168DueFrom"]/div/div/input/parent::div/following-sibling::div/div/table/thead/tr/th[@class="rdtNext"]');

        await mmyyButton.click();
        await mmyyButton.click();
        let condition = false;
        //select year
        for (let index = 0; index < 5; index++) {
            for (let tr = 1; tr < 4; tr++) {
                for (let td = 1; td < 5; td++) {
                    let year = await this.page.locator('//div[@data-test-id="MyTasks168DueFrom"]/div/div/input/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').textContent();
                    if (!(year != yyyy)) {
                        await this.page.locator('//div[@data-test-id="MyTasks168DueFrom"]/div/div/input/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').click();
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
                let month = await this.page.locator('//div[@data-test-id="MyTasks168DueFrom"]/div/div/input/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').textContent();
                if (!(month != mm)) {
                    await this.page.locator('//div[@data-test-id="MyTasks168DueFrom"]/div/div/input/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').click();
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
                let day = await this.page.locator('//div[@data-test-id="MyTasks168DueFrom"]/div/div/input/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').textContent();
                if (!(day != dd)) {
                    if ((tr == 1 && Number(day) > 20) || (tr == 6 && Number(day) < 10)) {

                    } else {
                        await this.page.locator('//div[@data-test-id="MyTasks168DueFrom"]/div/div/input/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').click();
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
    async chooseDueToDateFromCalendar(datePicker: string, dd: string, mm: string, yyyy: string) {
        const prevButton = this.page.locator('//div[@data-test-id="MyTasks168DueTo"]/div/div/input/parent::div/following-sibling::div/div/table/thead/tr/th[@class="rdtPrev"]');
        const mmyyButton = this.page.locator('//div[@data-test-id="MyTasks168DueTo"]/div/div/input/parent::div/following-sibling::div/div/table/thead/tr/th[@class="rdtSwitch"]');
        const nextButton = this.page.locator('//div[@data-test-id="MyTasks168DueTo"]/div/div/input/parent::div/following-sibling::div/div/table/thead/tr/th[@class="rdtNext"]');

        await mmyyButton.click();
        await mmyyButton.click();
        let condition = false;
        //select year
        for (let index = 0; index < 5; index++) {
            for (let tr = 1; tr < 4; tr++) {
                for (let td = 1; td < 5; td++) {
                    let year = await this.page.locator('//div[@data-test-id="MyTasks168DueTo"]/div/div/input/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').textContent();
                    if (!(year != yyyy)) {
                        await this.page.locator('//div[@data-test-id="MyTasks168DueTo"]/div/div/input/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').click();
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
                let month = await this.page.locator('//div[@data-test-id="MyTasks168DueTo"]/div/div/input/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').textContent();
                if (!(month != mm)) {
                    await this.page.locator('//div[@data-test-id="MyTasks168DueTo"]/div/div/input/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').click();
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
                let day = await this.page.locator('//div[@data-test-id="MyTasks168DueTo"]/div/div/input/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').textContent();
                if (!(day != dd)) {
                    if ((tr == 1 && Number(day) > 20) || (tr == 6 && Number(day) < 10)) {

                    } else {
                        await this.page.locator('//div[@data-test-id="MyTasks168DueTo"]/div/div/input/parent::div/following-sibling::div/div/table/tbody/tr[' + tr + ']/td[' + td + ']').click();
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

}
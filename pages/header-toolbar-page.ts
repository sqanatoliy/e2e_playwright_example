import { Page } from '@playwright/test';
import { headerToolbarPageLocators } from '../locators/header-toolbar-page-locators'

export class HeaderToolbarPage {
    readonly page: Page;
    

    constructor(page: Page) {
        this.page = page;
    }

    async goToProfile() {
        await this.page.waitForSelector(headerToolbarPageLocators.login_btn);
        await this.page.click(headerToolbarPageLocators.login_btn);
        return this;
    }


}
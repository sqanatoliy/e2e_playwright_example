import { Page } from '@playwright/test';
import { headerToolbarPageLocators } from '../locators/header-toolbar-page-locators'

export class HeaderToolbarPage {
    readonly page: Page;
    

    constructor(page: Page) {
        this.page = page;
    }


    async open() {
        await this.page.goto('');
    }


    async goToLoginForm() {
        await this.page.waitForSelector(headerToolbarPageLocators.login_btn);
        await this.page.click(headerToolbarPageLocators.login_btn);
    }

    async goToRegisterForm() {
        await this.page.waitForSelector(headerToolbarPageLocators.register_btn);
        await this.page.click(headerToolbarPageLocators.register_btn);
    }


    async logOut() {
        await this.page.hover(headerToolbarPageLocators.userProfile.menu);
        await this.page.waitForSelector(headerToolbarPageLocators.userProfile.logout);
        await this.page.click(headerToolbarPageLocators.userProfile.logout);
        return this;
    }


}
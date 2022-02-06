import type { Page } from '@playwright/test';
import { loginPageLocators } from '../locators/login-page-locators';
import { user } from '../framework/testdata';
import { headerToolbarPageLocators } from '../locators/header-toolbar-page-locators';


export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async login(emailForLoginTest: string, password: string) {
        await this.page.waitForSelector(loginPageLocators.selectEmail);
        await this.page.click(loginPageLocators.selectEmail);
        await this.page.waitForSelector(loginPageLocators.username);
        await this.page.fill(loginPageLocators.username, emailForLoginTest);
        await this.page.click(loginPageLocators.nextbtn);
        await this.page.waitForSelector(loginPageLocators.password);
        await this.page.fill(loginPageLocators.password, password);
        await this.page.click(loginPageLocators.loginButton);
        await this.page.waitForSelector(headerToolbarPageLocators.userProfile.menu);
        return this;
    }

    async RegisterUser(){

    }


}

import type { Page } from '@playwright/test';
import { loginPageLocators } from '../locators/login-page-locators';


export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('');
    }

    async login(email: string, password: string) {
        await this.page.waitForSelector(loginPageLocators.username);
        await this.page.type(loginPageLocators.username, email);
        await this.page.type(loginPageLocators.password, password);
        await this.page.click(loginPageLocators.loginButton);
        return this;
    }

    async goToRegisterPage(){
        await this.page.waitForSelector(loginPageLocators.registerButton);
        return await this.page.click(loginPageLocators.registerButton);
    }


}

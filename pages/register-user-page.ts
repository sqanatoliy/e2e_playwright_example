import type { Page } from '@playwright/test';
import { registerUserPageLocators } from '../locators/register-user-page-locators'

export class RegisterUserPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    
    async registerUser() {

        const newLocal = Date.now().toString();
        const firstName:string = " first name is " + newLocal;
        const lastName:string = " last name is " + newLocal;
        const email:string = "qaubraine+" + newLocal + "@gmail.com";
        const userName:string = newLocal;
        const password:string = "Qatest1!";
        //console.log(email);

        await this.page.waitForSelector(registerUserPageLocators.firstName)
        await this.page.type(registerUserPageLocators.firstName, firstName);
        await this.page.type(registerUserPageLocators.lastName, lastName);
        await this.page.type(registerUserPageLocators.email, email);
        await this.page.type(registerUserPageLocators.username, userName);
        await this.page.type(registerUserPageLocators.password, password);
        await this.page.type(registerUserPageLocators.confirmPassword, password);
        await this.page.click(registerUserPageLocators.registerButton);
        return this;
    }
}

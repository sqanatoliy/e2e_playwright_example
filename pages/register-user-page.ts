import type { Page } from '@playwright/test';
import { registerUserPageLocators } from '../locators/register-user-page-locators'

export class RegisterUserPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    
    async registerUser() {


    }
}

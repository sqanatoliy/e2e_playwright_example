import { expect, Page } from '@playwright/test';
import { homePageLocators } from '../locators/home-page-locators';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    
    async open() {
        await this.page.goto('');
    }

}

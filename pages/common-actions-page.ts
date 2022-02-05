import type { Page } from '@playwright/test';
import { commonActionsPageLocators } from '../locators/common-actions-page-locators'

export class CommonActionPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async appIsUpdated(): Promise<boolean> {
        return await this.page.isVisible(commonActionsPageLocators.appUpdatetModalWindow);
    }

    async chooseFile(): Promise<any> {
        await this.page.setInputFiles(commonActionsPageLocators.uploadFile.chooseFile, 'authorizationApp.json');
        await this.page.click(commonActionsPageLocators.uploadFile.okBtn);
        return this;
    }




}

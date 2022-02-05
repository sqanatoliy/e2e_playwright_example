import { expect, Page, Request, request, Response } from '@playwright/test';
import { headerPageLocators } from '../locators/header-page-locators'

export class HeaderPage {
    readonly page: Page;
    

    constructor(page: Page) {
        this.page = page;
    }

    async selectAppList() {
        await this.page.waitForSelector(headerPageLocators.appList.selectAppList);
        return await this.page.click(headerPageLocators.appList.selectAppList);
    }

    async importAppButton() {
        await this.page.waitForSelector(headerPageLocators.importAppBtn);
        return await this.page.click(headerPageLocators.importAppBtn);
    }

    async exportAppButton() {
        await this.page.waitForSelector(headerPageLocators.exportAppBtn);
        return await this.page.click(headerPageLocators.exportAppBtn);
    }

    async defaultSettingButton(response_url: string | RegExp | ((request: Request) => boolean | Promise<boolean>)) {
        await this.page.waitForSelector(headerPageLocators.defaultSettingsBtn);
        const [request] = await Promise.all([
            this.page.waitForRequest(response_url),
            this.page.click(headerPageLocators.defaultSettingsBtn),
          ]);
        expect(request.url()).toEqual(response_url);
        return this;

    }


    async versionButton() {
        await this.page.waitForSelector(headerPageLocators.versionBtn);
        return await this.page.click(headerPageLocators.versionBtn);
    }

    async deployButton() {
        await this.page.waitForSelector(headerPageLocators.deployBtn);
        this.page.click(headerPageLocators.deployBtn);
        return this;
    }


    async goToUserProfile() {
        await this.page.waitForSelector(headerPageLocators.userProfile.userProfileMenu);
        return await this.page.click(headerPageLocators.userProfile.userProfileMenu);
    }


    async logout() {
        await this.page.waitForSelector(headerPageLocators.userProfile.userProfileSettings.signOutButton);
        return await this.page.click(headerPageLocators.userProfile.userProfileSettings.signOutButton);
    }



}
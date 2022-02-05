import test, { expect, Page } from '@playwright/test';
import { globalSidebarPageLocators } from '../locators/global-sidebar-page-locators';
import {workspacesPageLocators} from '../locators/workspaces-page-locators'

export class GlobalSidebarPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async addNodeRed(noderedName: string) {
        await this.page.click(globalSidebarPageLocators.globalSidebar.nodeRed.addNodeRedBtn);
        await this.page.waitForSelector(globalSidebarPageLocators.globalSidebar.nodeRed.newNodeRed.createNodeRedBtn);
        await this.page.fill(globalSidebarPageLocators.globalSidebar.nodeRed.newNodeRed.projectName, noderedName);
        await this.page.locator(globalSidebarPageLocators.globalSidebar.nodeRed.newNodeRed.systemType).waitFor({state: 'visible'});
        await this.page.waitForTimeout(1500);
        await this.page.locator(globalSidebarPageLocators.globalSidebar.nodeRed.newNodeRed.createNodeRedBtn).click();
        await this.page.locator(globalSidebarPageLocators.globalSidebar.nodeRed.newNodeRed.createNodeRedBtn).waitFor({state: 'hidden'});
        await this.page.click(globalSidebarPageLocators.globalSidebar.nodeRed.openNodeRedList);
        return this ;
        
    }


    async uiEditor() {
        
        await this.page.waitForSelector(globalSidebarPageLocators.globalSidebar.uiEditor.openUiEditorContainer);
        await this.page.waitForTimeout(1200);
        const uiEditorSection = this.page.locator(globalSidebarPageLocators.globalSidebar.uiEditor.openUiEditorContainer);
        await uiEditorSection.click();
        return this;
    }


}
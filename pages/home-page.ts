import { expect, Page } from '@playwright/test';
import { workspacesPageLocators } from '../locators/workspaces-page-locators';
import {globalSidebarPageLocators} from '../locators/global-sidebar-page-locators';

export class WorkspacesPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    
    async open(url: string) {
        await this.page.goto(''+ url);
    }

    async userIsLoggedIn() {
        let userIsLoggedIn = this.page.locator(workspacesPageLocators.userName);
        await userIsLoggedIn.textContent();
        return userIsLoggedIn;

    }

    async createNewWorkspace(workspaceName: string) {
        

        await this.page.waitForSelector(workspacesPageLocators.headerWorkspace.createNewWorkspaceBtn);
        await this.page.click(workspacesPageLocators.headerWorkspace.createNewWorkspaceBtn);
        await this.page.type(workspacesPageLocators.headerWorkspace.nameNewWorkspace, workspaceName);
        const submitButton = this.page.locator(workspacesPageLocators.headerWorkspace.submitBtn);
        await submitButton.waitFor({state: 'visible'});
        await submitButton.click();
        await submitButton.waitFor({state: 'hidden'});
        const nameOfFirstWorkspace = this.page.locator(workspacesPageLocators.workspacesContainer.nameOfFirtstWorkspace);
        await nameOfFirstWorkspace.waitFor({state: 'visible'});
        await this.page.waitForTimeout(1000);
        await nameOfFirstWorkspace.isEnabled();
        return this;
    }

    async searchWorkspace(requiredWorkspace: string){
        await this.page.waitForSelector(workspacesPageLocators.workspacesContainer.search);
        const searchField = this.page.locator(workspacesPageLocators.workspacesContainer.search);
        await searchField.type(requiredWorkspace);
        await this.page.waitForTimeout(1000);
        await this.page.waitForSelector(workspacesPageLocators.workspacesContainer.nameOfFirtstWorkspace);
        expect(this.page.locator(workspacesPageLocators.workspacesContainer.nameOfFirtstWorkspace)).toHaveText(requiredWorkspace);
        return this;
    
    }

    async editFirstWorkspace(){
        await this.page.waitForSelector(workspacesPageLocators.workspacesContainer.editWorkspace);
        const editButton = this.page.locator(workspacesPageLocators.workspacesContainer.editWorkspace);
        await editButton.click();
        await this.page.waitForSelector(globalSidebarPageLocators.globalSidebar.nodeRed.addNodeRedBtn, {state: 'visible'});
        return this;
        
    }

    async deleteWorkspace(){
        await this.page.waitForSelector(workspacesPageLocators.workspacesContainer.deleteWorkspaceBtn);
        const deleteButton = this.page.locator(workspacesPageLocators.workspacesContainer.deleteWorkspaceBtn);
        await deleteButton.click();
        return this;
        
    }

    async confirmDeleting(){

        await this.page.waitForSelector(workspacesPageLocators.workspacesContainer.confirmDeleteWorkspace);
        const confirmDeleteButton = this.page.locator(workspacesPageLocators.workspacesContainer.confirmDeleteWorkspace);
        await confirmDeleteButton.click();
        await this.page.waitForSelector(workspacesPageLocators.workspacesContainer.confirmDeleteWorkspace, {state: 'hidden'});
        return this;
    }

}

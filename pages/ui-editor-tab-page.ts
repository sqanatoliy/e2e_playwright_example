import type { Page } from '@playwright/test';
import { uiEditorTabPageLocators } from '../locators/ui-editor-tab-page-locators';
import { commonActionsPageLocators } from '../locators/common-actions-page-locators';
import { headerPageLocators } from '../locators/header-page-locators';

export class UiEditorTabPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

   
    
    async addwidget() {
        await this.page.waitForSelector(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.addWidget);
        await this.page.waitForTimeout(1000);
        await this.page.click(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.addWidget);
        return this ;
        
    }

    async dragNdrop(sorurceElemrnt: { boundingBox: () => any; }, targetElement: { boundingBox: () => any; }) {
        const srcBound = await sorurceElemrnt.boundingBox();
        const trgtBound = await targetElement.boundingBox(); 
  
        const positionBoundX = (srcBound.x + srcBound.width / 2);
        const positionBoundY = (srcBound.y + srcBound.height / 2);
        await this.page.mouse.move(positionBoundX, positionBoundY);
        await this.page.waitForTimeout(1000)
        await this.page.mouse.down();
  
        await this.page.waitForTimeout(1000);
  
        const positionDistX = (trgtBound.x + trgtBound.width / 2);
        const positionDistY = (trgtBound.y + trgtBound.height / 2);
        await this.page.mouse.move(positionDistX, positionDistY, {steps: 10});
        await this.page.mouse.up();
        return this;
    }

    async checkVisibilityWidgetOnPage(selector: string) {
        const widget = this.page.locator(selector);
        await widget.isVisible();
        return this;

    }


}

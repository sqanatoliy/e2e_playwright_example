import { test, expect} from '@playwright/test';
import { HomePage } from '../pages/home-page';
import {headerToolbarPageLocators} from '../locators/header-toolbar-page-locators'


test.use({ storageState: "./state.json" });


test.describe('Group "Open home page"', () => {

  //test.use({actionTimeout: 10000, navigationTimeout: 10000} );
  test('Test Opening home page', async ({page}) => {

      // Opening the main page of the applications and checking the display of the name of the organization
    const homepage = new HomePage(page);
    await homepage.open();
    expect(page.locator(headerToolbarPageLocators.userProfile.menu)).toBeTruthy();
    });
});
import { test, expect, APIRequestContext} from '@playwright/test';
import { homePageLocators } from '../locators/home-page-locators';
import { HomePage } from '../pages/home-page'


test.use({ storageState: "./state.json" });


test.describe('Group "Open home page"', () => {

  //test.use({actionTimeout: 10000, navigationTimeout: 10000} );
  test.only('Test Opening home page', async ({page}) => {

      // Opening the main page of the applications and checking the display of the name of the organization
    const homepage = new HomePage(page);
    await homepage.open();
    expect(page.url()).toEqual('https://prom.ua/ua/')
    });
});
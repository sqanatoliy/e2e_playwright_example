import { chromium, expect, FullConfig  } from '@playwright/test';
import { user } from './framework/testdata';
import {headerPageLocators} from './locators/header-page-locators'
import {loginPageLocators} from './locators/login-page-locators'


async function globalSetup(config: FullConfig) {
  const { baseURL } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(baseURL);
  await page.click(loginPageLocators.goToProfile);
  await page.fill(loginPageLocators.username, user.email);
  await page.fill(loginPageLocators.password, user.password);
  await page.click(loginPageLocators.loginButton);
  await page.context().storageState({ path: 'state.json' });
  await page.waitForURL('https://www.olx.ua/uk/myaccount/#login');
  expect(page.url()).toBe('https://www.olx.ua/uk/myaccount/#login');
  await browser.close();
  
}

export default globalSetup;

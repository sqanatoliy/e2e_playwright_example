import { chromium, FullConfig  } from '@playwright/test';
import { user } from './framework/testdata';
import {headerToolbarPageLocators} from './locators/header-toolbar-page-locators'
import {loginPageLocators} from './locators/login-page-locators'


async function globalSetup(config: FullConfig) {
  const { baseURL } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(baseURL);
  await page.waitForSelector(headerToolbarPageLocators.login_btn);
  await page.click(headerToolbarPageLocators.login_btn);
  await page.waitForSelector(loginPageLocators.selectEmail);
  await page.click(loginPageLocators.selectEmail);
  await page.waitForSelector(loginPageLocators.username);
  await page.fill(loginPageLocators.username, user.email);
  await page.click(loginPageLocators.nextbtn);
  await page.waitForSelector(loginPageLocators.password);
  await page.fill(loginPageLocators.password, user.password);
  await page.click(loginPageLocators.loginButton);
  await page.waitForSelector(headerToolbarPageLocators.userProfile.menu);
  await page.context().storageState({ path: 'state.json' });
  //await page.screenshot({ path: 'screenshot1.png' });
  await browser.close();
  
}

export default globalSetup;

import { test, expect } from '@playwright/test';

import { user } from '../framework/testdata';
import { headerToolbarPageLocators } from '../locators/header-toolbar-page-locators';
import { loginPageLocators } from '../locators/login-page-locators';
import { HeaderToolbarPage } from '../pages/header-toolbar-page';
import { LoginPage } from '../pages/login-page';


  test.describe('Login and logout', () => {

    test.use({actionTimeout: 10000} )
    
    test('Test login and logout', async ({ page }) => {
      
  
      const loginpage = new LoginPage(page);
      await loginpage.open();
      const headertoolbarpage = new HeaderToolbarPage(page);
      await headertoolbarpage.goToProfile();
      expect(page.url()).toContain('https://www.olx.ua/uk/account/');

      await loginpage.login(user.emailForLoginTest, user.password);
      await page.waitForURL('https://www.olx.ua/uk/myaccount/#login');
      expect(page.url()).toEqual('https://www.olx.ua/uk/myaccount/#login');
  
    });
  
  });
import { test, expect } from '@playwright/test';

import { user } from '../framework/testdata';
import { HeaderToolbarPage } from '../pages/header-toolbar-page';
import { LoginPage } from '../pages/login-page';
import {headerToolbarPageLocators} from '../locators/header-toolbar-page-locators'



  test.describe('Login and logout', () => {

    //test.use({actionTimeout: 10000} )
    
    test('Test login and logout', async ({ page }) => {
      
  
      const loginpage = new LoginPage(page);
      const headertoolbarpage = new HeaderToolbarPage(page);
      
      await headertoolbarpage.open();
      await headertoolbarpage.goToLoginForm();
      await loginpage.login(user.emailForLoginTest, user.password);
      expect(page.locator(headerToolbarPageLocators.userProfile.menu)).toBeTruthy();

      await headertoolbarpage.logOut();
      expect(page.locator(headerToolbarPageLocators.userProfile.menu)).not.toBeVisible();
    });
  
  });
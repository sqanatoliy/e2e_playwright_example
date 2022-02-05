import { test, expect } from '@playwright/test';

import { user } from '../framework/testdata';
import { headerPageLocators } from '../locators/header-page-locators';
import { loginPageLocators } from '../locators/login-page-locators';
import { WorkspacesPage } from '../pages/workspaces-page';
import { HeaderPage } from '../pages/header-page';
import { LoginPage } from '../pages/login-page';


  test.describe('Login and logout', () => {

    test.use({actionTimeout: 10000} )
    
    test.only('Test login and logout', async ({ page }) => {
      
  
      const loginpage = new LoginPage(page);
      await loginpage.open();
      const goToLoginPage = page.locator(loginPageLocators.loginHeader);
      expect(goToLoginPage).toBeTruthy();
  
      const signInToYourAccount = await page.getAttribute(loginPageLocators.loginButton, 'value');
      expect(signInToYourAccount).toBe('Увійти');
  
      await loginpage.login(user.emailForLoginTest, user.password);
      const userIsLoggedIn = await new WorkspacesPage(page).userIsLoggedIn();
      expect(userIsLoggedIn).toBeTruthy();
   
      // await new HeaderPage(page).goToUserProfile();
      // const onUserProfile = await page.textContent(headerPageLocators.userProfile.userProfileSettings.viewUserEmailOnProfile);
      // const userEmail = user.emailForLoginTest;
      // expect(onUserProfile).toBe(userEmail);
  
      // await new HeaderPage(page).logout();
      // const userIsLoggedOut = await new LoginPage(page).userIsLoggedOut();
      // expect(userIsLoggedOut).toBeTruthy();
    });
  
  });
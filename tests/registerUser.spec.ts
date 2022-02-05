import { test, expect } from '@playwright/test';

import { loginPageLocators } from '../locators/login-page-locators';
import { registerUserPageLocators } from '../locators/register-user-page-locators';
import { WorkspacesPage } from '../pages/workspaces-page';
import { HeaderPage } from '../pages/header-page';
import { LoginPage } from '../pages/login-page';
import { RegisterUserPage } from '../pages/register-user-page';


  test.describe('Registration new user', () => {

    test.use({actionTimeout: 10000} );
    
    test('Test user registration and logout', async ({ page }) => {
      test.skip();
  

      const loginpage = new LoginPage(page);
      await loginpage.open();
      const signInToYourAccount = await page.getAttribute(loginPageLocators.loginButton, 'value');
      expect(signInToYourAccount).toBe('Sign In');

      await loginpage.goToRegisterPage();
      const titleRegisterPage = page.locator(registerUserPageLocators.registerPageTitle);
      expect(titleRegisterPage).toHaveText('Register');
            
         
      const registeruserpage = new RegisterUserPage(page);
      await registeruserpage.registerUser();

      const workspacespage = new WorkspacesPage(page);
      const userIsLoggedIn = workspacespage.userIsLoggedIn();
      expect(userIsLoggedIn).toBeTruthy();
      await new HeaderPage(page).goToUserProfile();

      await new HeaderPage(page).logout();
      const userIsLoggedOut = await new LoginPage(page).userIsLoggedOut();
      expect(userIsLoggedOut).toBeTruthy();

    });
  
  });
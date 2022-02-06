import { test, expect } from '@playwright/test';

import { loginPageLocators } from '../locators/login-page-locators';
import { registerUserPageLocators } from '../locators/register-user-page-locators';

import { HeaderToolbarPage } from '../pages/header-toolbar-page';
import { LoginPage } from '../pages/login-page';
import { RegisterUserPage } from '../pages/register-user-page';


  test.describe('Registration new user', () => {

    test.use({actionTimeout: 10000} );
    
    test('Test user registration and logout', async ({ page }) => {
      test.skip();
  

      

    });
  
  });
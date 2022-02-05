import { test, expect, APIRequestContext} from '@playwright/test';
import { workspacesPageLocators } from '../locators/workspaces-page-locators';
import { WorkspacesPage } from '../pages/workspaces-page';


test.use({ storageState: "./state.json" });

// Request context is reused by all tests in the file.
let apiContext: APIRequestContext;

test.beforeAll(async ({ playwright, baseURL}) => {
    apiContext = await playwright.request.newContext({
         storageState: 'state.json', baseURL: baseURL
         
    });
})

test.afterAll(async ({ }) => {
  // Dispose all responses.
  await apiContext.dispose();
});


test.describe('Group "Open home page"', () => {

  test.use({actionTimeout: 10000, navigationTimeout: 10000} );
  test('Test Opening home page', async ({page}) => {

      // Opening the main page of the applications and checking the display of the name of the organization
    const workspacespage = new WorkspacesPage(page);
    await workspacespage.open('');
    const userIsLoggedIn = await workspacespage.userIsLoggedIn();
    expect(userIsLoggedIn).toBeTruthy();
    });
});


test.describe('Group "Create new workspace"', () => {

  test.use({actionTimeout: 10000, navigationTimeout: 10000}, )
  //test.skip();


  test('Test Creating new workspace', async ({ page }) => {
    test.setTimeout(30000);

      // Opening the main page of the applications and checking the display of the name of the organization
    const workspacepage = new WorkspacesPage(page);
    await workspacepage.open('');
    const userIsLoggedIn = await workspacepage.userIsLoggedIn();
    expect(userIsLoggedIn).toBeTruthy();

    const workspaceName:string = "Create Workspace " + Date.now().toString();
    await workspacepage.createNewWorkspace(workspaceName);
    expect(await page.locator('table > tbody > tr > td:nth-child(2)').allTextContents()).toContain(workspaceName);
    
  
  });

});


test.describe('Group "Delete workspace"', () => {

  test.use({actionTimeout: 10000, navigationTimeout: 10000}, )
  //test.skip();


  test('Test Deleting workspace', async ({ page }) => {
    test.setTimeout(30000);

      // Create a workspace with the random name
    const NameWorkspace:string = 'Delete NodeRed' +  Date.now().toString();
      //let newNameNameWorkspace = NameWorkspace.slice(0, -2);
    const newWorkspace = await apiContext.post(`api/v1/organizations`, {
        form: {
          name: NameWorkspace,
        }
    });
      // Opening the main page of the applications and checking the display of the name of the organization
    const workspacepage = new WorkspacesPage(page);
    await workspacepage.open('');
    const userIsLoggedIn = await workspacepage.userIsLoggedIn();
    expect(userIsLoggedIn).toBeTruthy();


    // Deleting workspace that has name  NameWorkspace
    const current_workspace = page.locator('table > tbody > tr', { hasText: NameWorkspace });
    await current_workspace.waitFor({state: 'visible'});
    const delete_button = current_workspace.locator('button', { hasText: 'delete workspace' });
    await delete_button.click();
    await workspacepage.confirmDeleting();
    expect(await page.locator('table > tbody > tr > td:nth-child(2)').allTextContents()).not.toContain(NameWorkspace);

    
  
  });

});
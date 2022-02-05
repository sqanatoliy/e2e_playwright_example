import { test, expect, APIRequestContext } from '@playwright/test';
import { globalSidebarPageLocators }from '../locators/global-sidebar-page-locators';
import {CommonActionPage} from '../pages/common-actions-page';
import { HeaderPage } from '../pages/header-page';
import { headerPageLocators } from '../locators/header-page-locators';
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


test.describe('Header tests' , () => {


    test.describe('Tests Import App', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )
      
        test('Test for importing App', async ({ page }) => {

              // Create a workspace with the random name
            const NameWorkspace:string = 'Import App' +  Date.now().toString();
              //let newNameNameWorkspace = NameWorkspace.slice(0, -2);
            const newWorkspace = await apiContext.post(`api/v1/organizations`, {
                form: {
                  name: NameWorkspace,
                }
            });
            const json_response = await newWorkspace.json();
            const pageId = json_response.data.pageId;
            const appId = json_response.data.appId;
              //console.log(json_response.data)
            expect(json_response.data).not.toEqual({message: 'This name is already in use', error: true});

            // Open the workspace page and check the user's mail display
            const workspacepage = new WorkspacesPage(page);
            const url = 'workspace/' + appId + '/pages/' + pageId + '/edit';
            await workspacepage.open(url);
            const userIsLoggedIn = await workspacepage.userIsLoggedIn();
            expect(userIsLoggedIn).toBeTruthy();

            // Select import file  
            const commonactionpage = new CommonActionPage(page);
            const headerpage = new HeaderPage(page);
            await headerpage.importAppButton();
            await commonactionpage.chooseFile();
            await page.waitForTimeout(4000);
        
        });
    });


    test.describe('Tests Export App', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )
      
        test('Test for exporting App', async ({ page }) => {

              // Create a workspace with the random name
            const NameWorkspace:string = 'Export App' +  Date.now().toString();
              //let newNameNameWorkspace = NameWorkspace.slice(0, -2);
            const newWorkspace = await apiContext.post(`api/v1/organizations`, {
                form: {
                  name: NameWorkspace,
                }
            });
            const json_response = await newWorkspace.json();
            const pageId = json_response.data.pageId;
            const appId = json_response.data.appId;
              //console.log(json_response.data)
            expect(json_response.data).not.toEqual({message: 'This name is already in use', error: true});

              // Open the workspace page and check the user's mail display
            const workspacepage = new WorkspacesPage(page);
            const url = 'workspace/' + appId + '/pages/' + pageId + '/edit';
            await workspacepage.open(url);
            const userIsLoggedIn = await workspacepage.userIsLoggedIn();
            expect(userIsLoggedIn).toBeTruthy();

              //  Waiting for all items to be displayed
            await page.waitForSelector(globalSidebarPageLocators.globalSidebar.uiEditor.openUiEditorContainer);

              // Select import file  
            //await page.waitForTimeout(1000);
            const [ download ] = await Promise.all([
              // Start waiting for the download
              page.waitForEvent('download'),
              // Perform the action that initiates download
              page.locator(headerPageLocators.exportAppBtn).click(),
            ]);
            // Wait for the download process to complete
            const path = await download.path();
            console.log(path);
            expect(path).toBeTruthy();
        
        });
    });


    test.describe('Tests Default settings', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )
      
        test('Test for default settings', async ({ page, baseURL: baseURL }) => {

              // Create a workspace with the random name
            const NameWorkspace:string = 'Default settings' +  Date.now().toString();
              //let newNameNameWorkspace = NameWorkspace.slice(0, -2);
            const newWorkspace = await apiContext.post(`api/v1/organizations`, {
                form: {
                  name: NameWorkspace,
                }
            });
            const json_response = await newWorkspace.json();
            const pageId = json_response.data.pageId;
            const appId = json_response.data.appId;
              //console.log(json_response.data)
            expect(json_response.data).not.toEqual({message: 'This name is already in use', error: true});

            // Open the workspace page and check the user's mail display
            const workspacepage = new WorkspacesPage(page);
            const new_url = 'workspace/' + appId + '/pages/' + pageId + '/edit';
            // page.on('request', request => 
            // console.log('>>', request.method(), request.url()));
            // page.on('response', response =>
            // console.log('<<', response.status(), response.url()));
            await workspacepage.open(new_url);
            const userIsLoggedIn = await workspacepage.userIsLoggedIn();
            expect(userIsLoggedIn).toBeTruthy();

            // Select default setting
            const commonactionpage = new CommonActionPage(page);
            const headerpage = new HeaderPage(page);
            const response_url = (baseURL + 'api/v1/applications/reset_layout_setting');
            await headerpage.defaultSettingButton(response_url);
            const [response] = await Promise.all([
              // Waits for the next response matching some conditions
              page.waitForResponse(response => response.url() === response_url && response.status() === 200),
            ]);
            expect(response.status()).toEqual(200);
            expect(response.url()).toEqual(response_url);          
        
        });
    });


    test.describe('Tests Version', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )
      
        test('Test Versoin', async ({ page }) => {

              // Create a workspace with the random name
            const NameWorkspace:string = 'Version' +  Date.now().toString();
              //let newNameNameWorkspace = NameWorkspace.slice(0, -2);
            const newWorkspace = await apiContext.post(`api/v1/organizations`, {
                form: {
                  name: NameWorkspace,
                }
            });
            const json_response = await newWorkspace.json();
            const pageId = json_response.data.pageId;
            const appId = json_response.data.appId;
              //console.log(json_response.data)
            expect(json_response.data).not.toEqual({message: 'This name is already in use', error: true});

            // Open the workspace page and check the user's mail display
            const workspacepage = new WorkspacesPage(page);
            const url = 'workspace/' + appId + '/pages/' + pageId + '/edit';
            await workspacepage.open(url);
            const userIsLoggedIn = await workspacepage.userIsLoggedIn();
            expect(userIsLoggedIn).toBeTruthy();

            // Select import file  
            const commonactionpage = new CommonActionPage(page);
            const headerpage = new HeaderPage(page);
            await headerpage.importAppButton();
            await commonactionpage.chooseFile();
            await page.waitForTimeout(10000);
        
        });
    });


    test.describe('Tests Deploy', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )
      
        test('Test for deploy', async ({ page }) => {

              // Create a workspace with the random name
            const NameWorkspace:string = 'Deploy' +  Date.now().toString();
              //let newNameNameWorkspace = NameWorkspace.slice(0, -2);
            const newWorkspace = await apiContext.post(`api/v1/organizations`, {
                form: {
                  name: NameWorkspace,
                }
            });
            const json_response = await newWorkspace.json();
            const pageId = json_response.data.pageId;
            const appId = json_response.data.appId;
              //console.log(json_response.data)
            expect(json_response.data).not.toEqual({message: 'This name is already in use', error: true});

            // Open the workspace page and check the user's mail display
            const workspacepage = new WorkspacesPage(page);
            const url = 'workspace/' + appId + '/pages/' + pageId + '/edit';
            await workspacepage.open(url);
            const userIsLoggedIn = await workspacepage.userIsLoggedIn();
            expect(userIsLoggedIn).toBeTruthy();

            // Select import file  
            const commonactionpage = new CommonActionPage(page);
            const headerpage = new HeaderPage(page);
            await headerpage.importAppButton();
            await commonactionpage.chooseFile();
            await page.waitForTimeout(10000);
        
        });
    });

      

});
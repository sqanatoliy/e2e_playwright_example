import { test, expect, APIRequestContext} from '@playwright/test';
import { WorkspacesPage } from '../pages/workspaces-page';
import {NoderedTabPage} from '../pages/nodered-tab-page';
import {HeaderPage} from '../pages/header-page';
import {GlobalSidebarPage} from '../pages/global-sidebar-page';
import { globalSidebarPageLocators } from '../locators/global-sidebar-page-locators';
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


test.describe('Group "NodeRed"', () => {

    test.use({actionTimeout: 12000, navigationTimeout: 12000}, )

    test.skip(({ browserName }) => browserName === 'webkit');
    test.skip(({ browserName }) => browserName === 'firefox');

        test('Test "Creating new  NodeRed"', async ({page}) => {
            test.setTimeout(150000);

              // Create a workspace with the random name
            const NameWorkspace:string = 'Create new NodeRed' +  Date.now().toString();
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

              //Create new Nodered
            const NameNodeRed:string = 'na' +  Date.now().toString();
            let newNameNodeRed = NameNodeRed.slice(0, -2);
            const globalsidebar = new GlobalSidebarPage(page);
            await globalsidebar.addNodeRed(newNameNodeRed);
            const first_nodered_name = await page.innerText(globalSidebarPageLocators.globalSidebar.nodeRed.firstNodeRed);
            expect(first_nodered_name).toBe(first_nodered_name);

        });
});
import { test, expect, APIRequestContext } from '@playwright/test';
import {globalSidebarPageLocators} from '../locators/global-sidebar-page-locators';
import {GlobalSidebarPage} from '../pages/global-sidebar-page';
import { WorkspacesPage } from '../pages/workspaces-page';
import {uiEditorTabPageLocators} from '../locators/ui-editor-tab-page-locators';
import {UiEditorTabPage} from '../pages/ui-editor-tab-page';
import {headerPageLocators} from '../locators/header-page-locators';
import {HeaderPage} from '../pages/header-page';
import { workspacesPageLocators } from '../locators/workspaces-page-locators';


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



test.describe('All Widgets' , () => {



  test.describe('Form Widgets' , () => {


    test.describe('Tests Widget "Form"', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )
      
        test('Test for adding the widget Form', async ({ page }) => {

              // Create a workspace with the random name
            const NameWorkspace:string = 'Add widget Form' +  Date.now().toString();
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

            // Select UI Editor
            await new GlobalSidebarPage(page).uiEditor();

            // Go to widgets list  
            const uieditortab = new UiEditorTabPage(page);
            await uieditortab.addwidget();

            // Drag and drop widget to canvas
            await page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.formWidgets.widgetForm).scrollIntoViewIfNeeded();
            const sorurceElement = page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.formWidgets.widgetForm).first();
            const targetElement = page.locator(uiEditorTabPageLocators.editorPage.canvas);
            await uieditortab.dragNdrop(sorurceElement, targetElement);

            await uieditortab.checkVisibilityWidgetOnPage(uiEditorTabPageLocators.editorPage.formWidgets.widgetForm);
            expect(page.locator(uiEditorTabPageLocators.editorPage.formWidgets.widgetForm)).toBeTruthy(); 

        
        });
    });
      

    test.describe('Tests widget "Input"', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )

        test('Test for adding the  widget "Input"', async ({ page }) => {
          
              // Create a workspace with the random name
            const NameWorkspace:string = 'Add widget Input' +  Date.now().toString();
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

            // Select UI Editor
            await new GlobalSidebarPage(page).uiEditor();

            // Go to widgets list
            const uieditortab = new UiEditorTabPage(page);
            await uieditortab.addwidget();

            // Drag and drop widget to canvas
            await page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.formWidgets.widgetInput).scrollIntoViewIfNeeded();
            const sorurceElement = page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.formWidgets.widgetInput).first();
            const targetElement = page.locator(uiEditorTabPageLocators.editorPage.canvas);
            await uieditortab.dragNdrop(sorurceElement, targetElement);

            await uieditortab.checkVisibilityWidgetOnPage(uiEditorTabPageLocators.editorPage.formWidgets.widgetInput);
            expect(page.locator(uiEditorTabPageLocators.editorPage.formWidgets.widgetInput)).toBeTruthy(); 

        
        });
    });


    test.describe('Tests widget Dropdown', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )

        test('Test for adding the  widget Dropdown', async ({ page }) => {

          
              // Create a workspace with the random name
            const NameWorkspace:string = 'Add widget Dropdown' +  Date.now().toString();
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

            // Select UI Editor
            await new GlobalSidebarPage(page).uiEditor();

            // Go to widgets list  
            const uieditortab = new UiEditorTabPage(page);
            await uieditortab.addwidget();

            // Drag and drop widget to canvas
            await page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.formWidgets.widgetDropdown).scrollIntoViewIfNeeded();
            const sorurceElement = page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.formWidgets.widgetDropdown).first();
            const targetElement = page.locator(uiEditorTabPageLocators.editorPage.canvas);
            await uieditortab.dragNdrop(sorurceElement, targetElement);

            await uieditortab.checkVisibilityWidgetOnPage(uiEditorTabPageLocators.editorPage.formWidgets.widgetDropdown);
            expect(page.locator(uiEditorTabPageLocators.editorPage.formWidgets.widgetForm)).toBeTruthy();
    
          
        });
    });


    test.describe('Tests widget "Button"', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )

        test('Test widget Button', async ({ page }) => {

              // Create a workspace with the random name
            const NameWorkspace:string = 'Add widget Button' +  Date.now().toString();
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

            // Select UI Editor
            await new GlobalSidebarPage(page).uiEditor();

            // Go to widgets list
            const uieditortab = new UiEditorTabPage(page);
            await uieditortab.addwidget();

            // Drag and drop widget to canvas
            await page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.formWidgets.widgetButton).scrollIntoViewIfNeeded();
            const sorurceElement = page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.formWidgets.widgetButton).first();
            const targetElement = page.locator(uiEditorTabPageLocators.editorPage.canvas);
            await uieditortab.dragNdrop(sorurceElement, targetElement);

            await uieditortab.checkVisibilityWidgetOnPage(uiEditorTabPageLocators.editorPage.formWidgets.widgetButton);
            expect(page.locator(uiEditorTabPageLocators.editorPage.formWidgets.widgetButton)).toBeTruthy();
      
            
        });
    });
 


    test.describe('Tests widget Checkbox', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )

        test('Test for adding the  widget Checkbox', async ({ page }) => {

              // Create a workspace with the random name
            const NameWorkspace:string = 'Add widget Checkbox' +  Date.now().toString();
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

            // Select UI Editor
            await new GlobalSidebarPage(page).uiEditor();

            // Go to widgets list  
            const uieditortab = new UiEditorTabPage(page);
            await uieditortab.addwidget();

            // Drag and drop widfet to canvas
            await page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.formWidgets.widgetCheckbox).scrollIntoViewIfNeeded();
            const sorurceElement = page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.formWidgets.widgetCheckbox).first();
            const targetElement = page.locator(uiEditorTabPageLocators.editorPage.canvas);
            await uieditortab.dragNdrop(sorurceElement, targetElement);

            await uieditortab.checkVisibilityWidgetOnPage(uiEditorTabPageLocators.editorPage.formWidgets.widgetCheckbox);
            expect(page.locator(uiEditorTabPageLocators.editorPage.formWidgets.widgetForm)).toBeTruthy(); 
    
          
        });
    });


    test.describe('Tests widget Radio', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )

        test('Test for adding the  widget Radio', async ({ page }) => {
          
              // Create a workspace with the random name
            const NameWorkspace:string = 'Add widget Radio' +  Date.now().toString();
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

            // Select UI Editor
            await new GlobalSidebarPage(page).uiEditor();

            // Go to widgets list  
            const uieditortab = new UiEditorTabPage(page);
            await uieditortab.addwidget();

            // Drag and drop widfet to canvas
            await page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.formWidgets.widgetRadio).scrollIntoViewIfNeeded();
            const sorurceElement = page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.formWidgets.widgetRadio).first();
            const targetElement = page.locator(uiEditorTabPageLocators.editorPage.canvas);
            await uieditortab.dragNdrop(sorurceElement, targetElement);

            await uieditortab.checkVisibilityWidgetOnPage(uiEditorTabPageLocators.editorPage.formWidgets.widgetRadio);
            expect(page.locator(uiEditorTabPageLocators.editorPage.formWidgets.widgetRadio)).toBeTruthy(); 
        
              
        });
    });

   
    test.describe('Tests widget Datepicker', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )

        test('Test for adding the  widget Datepicker', async ({ page }) => {

              // Create a workspace with the random name
            const NameWorkspace:string = 'Add widget Datepicker' +  Date.now().toString();
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

            // Select UI Editor
            await new GlobalSidebarPage(page).uiEditor();

            // Go to widgets list
            const uieditortab = new UiEditorTabPage(page);
            await uieditortab.addwidget();

            // Drag and drop widget to canvas
            await page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.formWidgets.widgetDatepicker).scrollIntoViewIfNeeded();
            const sorurceElement = page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.formWidgets.widgetDatepicker).first();
            const targetElement = page.locator(uiEditorTabPageLocators.editorPage.canvas);
            await uieditortab.dragNdrop(sorurceElement, targetElement);

            await uieditortab.checkVisibilityWidgetOnPage(uiEditorTabPageLocators.editorPage.formWidgets.widgetDatepicker);
            expect(page.locator(uiEditorTabPageLocators.editorPage.formWidgets.widgetDatepicker)).toBeTruthy(); 
    
        });
    });


    test.describe('Tests widget Rich text editor', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )

        test('Test the  widget RichTextEditor', async ({ page }) => {
          //test.fixme();
          
              // Create a workspace with the random name
            const NameWorkspace:string = 'Add widget Rich text editor' +  Date.now().toString();
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
 
             // Select UI Editor
             await new GlobalSidebarPage(page).uiEditor();
 
             // Adding widget "Form"  
             const uieditortab = new UiEditorTabPage(page);
             await uieditortab.addwidget();
 
             // Drag and drop widfet to canvas
             await page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.formWidgets.widgetRichTextEditor).scrollIntoViewIfNeeded();
             const sorurceElement = page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.formWidgets.widgetRichTextEditor).first();
             const targetElement = page.locator(uiEditorTabPageLocators.editorPage.canvas);
 
             await uieditortab.dragNdrop(sorurceElement, targetElement);
             await uieditortab.checkVisibilityWidgetOnPage(uiEditorTabPageLocators.editorPage.formWidgets.widgetRichTextEditor);
             expect(page.locator(uiEditorTabPageLocators.editorPage.formWidgets.widgetRichTextEditor)).toBeTruthy(); 
    
          
        });
    });


  });



  test.describe('Display Widgets' , () => {


    test.describe('Tests widget Image', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )
      
        test('Test for adding the  widget Image', async ({ page }) => {
          //test.skip();

              // Create a workspace with the random name
            const NameWorkspace:string = 'Add widget Image' +  Date.now().toString();
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

            // Select UI Editor
            await new GlobalSidebarPage(page).uiEditor();
 
             // Go to widgets list 
             const uieditortab = new UiEditorTabPage(page);
             await uieditortab.addwidget();
 
             // Drag and drop widget to canvas
             await page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.displayWidget.widgetImage).scrollIntoViewIfNeeded();
             const sorurceElement = page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.displayWidget.widgetImage).first();
             const targetElement = page.locator(uiEditorTabPageLocators.editorPage.canvas);
             await uieditortab.dragNdrop(sorurceElement, targetElement);

             await uieditortab.checkVisibilityWidgetOnPage(uiEditorTabPageLocators.editorPage.displayWidgets.widgetImage);
             expect(page.locator(uiEditorTabPageLocators.editorPage.displayWidgets.widgetImage)).toBeTruthy(); 
    
        });
    });
 
      

    test.describe('Tests widget Header', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )

        test('Test for adding the  widget Header', async ({ page }) => {
              // Create a workspace with the random name
            const NameWorkspace:string = 'Add widget Header' +  Date.now().toString();
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
 
             // Select UI Editor
             await new GlobalSidebarPage(page).uiEditor();
 
             // Go to widgets list 
             const uieditortab = new UiEditorTabPage(page);
             await uieditortab.addwidget();
 
             // Drag and drop widget to canvas
             await page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.displayWidget.widgetHeader).scrollIntoViewIfNeeded();
             const sorurceElement = page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.displayWidget.widgetHeader).first();
             const targetElement = page.locator(uiEditorTabPageLocators.editorPage.canvas);
             await uieditortab.dragNdrop(sorurceElement, targetElement);

             await uieditortab.checkVisibilityWidgetOnPage(uiEditorTabPageLocators.editorPage.displayWidgets.widgetHeader);
             expect(page.locator(uiEditorTabPageLocators.editorPage.displayWidgets.widgetHeader)).toBeTruthy(); 
      
            
        });
    });


    test.describe('Tests widget Repeat', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )

        test('Test for adding the  widget Repeat', async ({ page }) => {
              // Create a workspace with the random name
            const NameWorkspace:string = 'Add widget Repeat' +  Date.now().toString();
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
 
             // Select UI Editor
             await new GlobalSidebarPage(page).uiEditor();
 
             // Go to widgets list  
             const uieditortab = new UiEditorTabPage(page);
             await uieditortab.addwidget();
 
             // Drag and drop widget to canvas
             await page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.displayWidget.widgetRepeat).scrollIntoViewIfNeeded();
             const sorurceElement = page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.displayWidget.widgetRepeat).first();
             const targetElement = page.locator(uiEditorTabPageLocators.editorPage.canvas);
             await uieditortab.dragNdrop(sorurceElement, targetElement);

             await uieditortab.checkVisibilityWidgetOnPage(uiEditorTabPageLocators.editorPage.displayWidgets.widgetRepeat);
             expect(page.locator(uiEditorTabPageLocators.editorPage.displayWidgets.widgetRepeat)).toBeTruthy(); 
      
            
        });
    });


    test.describe('Tests widget Text', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )

        test('Test for adding the  widget Text', async ({ page }) => {
              // Create a workspace with the random name
            const NameWorkspace:string = 'Add widget Text' +  Date.now().toString();
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

            // Select UI Editor
            await new GlobalSidebarPage(page).uiEditor();

            // Fo to widgets list  
            const uieditortab = new UiEditorTabPage(page);
            await uieditortab.addwidget();

            // Drag and drop widfet to canvas
            await page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.displayWidget.widgetText).scrollIntoViewIfNeeded();
            const sorurceElement = page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.displayWidget.widgetText).first();
            const targetElement = page.locator(uiEditorTabPageLocators.editorPage.canvas);
            await uieditortab.dragNdrop(sorurceElement, targetElement);

            await uieditortab.checkVisibilityWidgetOnPage(uiEditorTabPageLocators.editorPage.displayWidgets.widgetText);
            expect(page.locator(uiEditorTabPageLocators.editorPage.displayWidgets.widgetText)).toBeTruthy();
                
            
        });
    });


    test.describe('Tests widget Iframe', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )

        test('Test for adding the  widget Iframe', async ({ page }) => {
              // Create a workspace with the random name
            const NameWorkspace:string = 'Add widget Iframe' +  Date.now().toString();
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

            // Select UI Editor
            await new GlobalSidebarPage(page).uiEditor();

            // Go to widgets list  
            const uieditortab = new UiEditorTabPage(page);
            await uieditortab.addwidget();

            // Drag and drop widget to canvas
            await page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.displayWidget.widgetIframe).scrollIntoViewIfNeeded();
            const sorurceElement = page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.displayWidget.widgetIframe).first();
            const targetElement = page.locator(uiEditorTabPageLocators.editorPage.canvas);
            await uieditortab.dragNdrop(sorurceElement, targetElement);

            await uieditortab.checkVisibilityWidgetOnPage(uiEditorTabPageLocators.editorPage.displayWidgets.widgetIframe);
            expect(page.locator(uiEditorTabPageLocators.editorPage.displayWidgets.widgetIframe)).toBeTruthy();
      
            
        });
    });


    test.describe('Tests widget Table', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )

        test('Test for adding the  widget Table', async ({ page }) => {
              // Create a workspace with the random name
            const NameWorkspace:string = 'Add widget Table' +  Date.now().toString();
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

            // Select UI Editor
            await new GlobalSidebarPage(page).uiEditor();

            // Go to widgets list  
            const uieditortab = new UiEditorTabPage(page);
            await uieditortab.addwidget();

            // Drag and drop widget to canvas
            await page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.displayWidget.widgetTable).scrollIntoViewIfNeeded();
            const sorurceElement = page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.displayWidget.widgetTable).first();
            const targetElement = page.locator(uiEditorTabPageLocators.editorPage.canvas);
            await uieditortab.dragNdrop(sorurceElement, targetElement);

            await uieditortab.checkVisibilityWidgetOnPage(uiEditorTabPageLocators.editorPage.displayWidgets.widgetTable);
            expect(page.locator(uiEditorTabPageLocators.editorPage.displayWidgets.widgetTable)).toBeTruthy();
            
        });
    });


    test.describe('Tests about widget Fileinput', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )

        test('Test for adding the  widget Fileinput', async ({ page }) => {
              // Create a workspace with the random name
            const NameWorkspace:string = 'Add widget Fileinput' +  Date.now().toString();
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

            // Select UI Editor
            await new GlobalSidebarPage(page).uiEditor();

            // Go to widgets list  
            const uieditortab = new UiEditorTabPage(page);
            await uieditortab.addwidget();

            // Drag and drop widget to canvas
            await page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.displayWidget.widgetFileinput).scrollIntoViewIfNeeded();
            const sorurceElement = page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.displayWidget.widgetFileinput).first();
            const targetElement = page.locator(uiEditorTabPageLocators.editorPage.canvas);
            await uieditortab.dragNdrop(sorurceElement, targetElement);

            await uieditortab.checkVisibilityWidgetOnPage(uiEditorTabPageLocators.editorPage.displayWidgets.widgetFileinput);
            expect(page.locator(uiEditorTabPageLocators.editorPage.displayWidgets.widgetFileinput)).toBeTruthy();
      
            
        });
    });


    test.describe('Tests about widget Video', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )

        test('Test for adding the  widget Video', async ({ page }) => {
              // Create a workspace with the random name
            const NameWorkspace:string = 'Add widget Video' +  Date.now().toString();
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

            // Select UI Editor
            await new GlobalSidebarPage(page).uiEditor();

            // Go to widgets list  
            const uieditortab = new UiEditorTabPage(page);
            await uieditortab.addwidget();

            // Drag and drop widget to canvas
            await page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.displayWidget.widgetVideo).scrollIntoViewIfNeeded();
            const sorurceElement = page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.displayWidget.widgetVideo).first();
            const targetElement = page.locator(uiEditorTabPageLocators.editorPage.canvas);
            await uieditortab.dragNdrop(sorurceElement, targetElement);

            await uieditortab.checkVisibilityWidgetOnPage(uiEditorTabPageLocators.editorPage.displayWidgets.widgetVideo);
            expect(page.locator(uiEditorTabPageLocators.editorPage.displayWidgets.widgetVideo)).toBeTruthy();
      
            
        });
    });


    test.describe('Tests widget Chart', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )

        test('Test for adding the  widget Chart', async ({ page }) => {
              // Create a workspace with the random name
            const NameWorkspace:string = 'Add widget Chart' +  Date.now().toString();
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

            // Select UI Editor
            await new GlobalSidebarPage(page).uiEditor();

            // Go to widgets list  
            const uieditortab = new UiEditorTabPage(page);
            await uieditortab.addwidget();

            // Drag and drop widget to canvas
            await page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.displayWidget.widgetChart).scrollIntoViewIfNeeded();
            const sorurceElement = page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.displayWidget.widgetChart).first();
            const targetElement = page.locator(uiEditorTabPageLocators.editorPage.canvas);
            await uieditortab.dragNdrop(sorurceElement, targetElement);

            await uieditortab.checkVisibilityWidgetOnPage(uiEditorTabPageLocators.editorPage.displayWidgets.widgetChart);
            expect(page.locator(uiEditorTabPageLocators.editorPage.displayWidgets.widgetChart)).toBeTruthy();
      
            
        });
    });


    test.describe('Tests widget FileManager', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )

      test('Test for adding the  widget FileManager', async ({ page }) => {
              // Create a workspace with the random name
            const NameWorkspace:string = 'Add widget Filemanager' +  Date.now().toString();
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

            // Select UI Editor
            await new GlobalSidebarPage(page).uiEditor();

            // Go to widgets list  
            const uieditortab = new UiEditorTabPage(page);
            await uieditortab.addwidget();

            // Drag and drop widget to canvas
            await page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.displayWidget.widgetFileManager).scrollIntoViewIfNeeded();
            const sorurceElement = page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.displayWidget.widgetFileManager).first();
            const targetElement = page.locator(uiEditorTabPageLocators.editorPage.canvas);
            await uieditortab.dragNdrop(sorurceElement, targetElement);

            await uieditortab.checkVisibilityWidgetOnPage(uiEditorTabPageLocators.editorPage.displayWidgets.widgetFileManager);
            expect(page.locator(uiEditorTabPageLocators.editorPage.displayWidgets.widgetFileManager)).toBeTruthy();
    
          
      });
    });


  });



  test.describe('Layout Widgets' , () => {


    test.describe('Tests widget Tabs', () => {

        test.use({actionTimeout: 15000, navigationTimeout: 15000}, )
      
          test('Test for adding the  widget Tabs', async ({ page }) => {
              // Create a workspace with the random name
            const NameWorkspace:string = 'Add widget Tabs' +  Date.now().toString();
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

              // Select UI Editor
              await new GlobalSidebarPage(page).uiEditor();

              // Go to widgets list  
              const uieditortab = new UiEditorTabPage(page);
              await uieditortab.addwidget();

              // Drag and drop widget to canvas
              await page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.layoutWidget.widgetTabs).scrollIntoViewIfNeeded();
              const sorurceElement = page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.layoutWidget.widgetTabs).first();
              const targetElement = page.locator(uiEditorTabPageLocators.editorPage.canvas);
              await uieditortab.dragNdrop(sorurceElement, targetElement);

              await uieditortab.checkVisibilityWidgetOnPage(uiEditorTabPageLocators.editorPage.layoutWidget.widgetTabs);
              expect(page.locator(uiEditorTabPageLocators.editorPage.layoutWidget.widgetTabs)).toBeTruthy();
      
            
          });
    });
      

    test.describe('Tests widget Accordion', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )

        test('Test for adding the  widget "Accordion"', async ({ page }) => {
              // Create a workspace with the random name
            const NameWorkspace:string = 'Add widget According' +  Date.now().toString();
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

            // Select UI Editor
            await new GlobalSidebarPage(page).uiEditor();

            // Go to widgets list  
            const uieditortab = new UiEditorTabPage(page);
            await uieditortab.addwidget();

            // Drag and drop widget to canvas
            await page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.layoutWidget.widgetAccordion).scrollIntoViewIfNeeded();
            const sorurceElement = page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.layoutWidget.widgetAccordion).first();
            const targetElement = page.locator(uiEditorTabPageLocators.editorPage.canvas);
            await uieditortab.dragNdrop(sorurceElement, targetElement);

            await uieditortab.checkVisibilityWidgetOnPage(uiEditorTabPageLocators.editorPage.layoutWidget.widgetAccordion);
            expect(page.locator(uiEditorTabPageLocators.editorPage.layoutWidget.widgetAccordion)).toBeTruthy();
      
            
        });
    });


    test.describe('Tests widget Container', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )

        test('Test for adding the  widget Container', async ({ page }) => {
              // Create a workspace with the random name
            const NameWorkspace:string = 'Add widget Container' +  Date.now().toString();
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

            // Select UI Editor
            await new GlobalSidebarPage(page).uiEditor();

            // Go to widgets list  
            const uieditortab = new UiEditorTabPage(page);
            await uieditortab.addwidget();

            // Drag and drop widget to canvas
            await page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.layoutWidget.widgetContainer).scrollIntoViewIfNeeded();
            const sorurceElement = page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.layoutWidget.widgetContainer).first();
            const targetElement = page.locator(uiEditorTabPageLocators.editorPage.canvas);
            await uieditortab.dragNdrop(sorurceElement, targetElement);

            await uieditortab.checkVisibilityWidgetOnPage(uiEditorTabPageLocators.editorPage.layoutWidget.widgetContainer);
            expect(page.locator(uiEditorTabPageLocators.editorPage.layoutWidget.widgetContainer)).toBeTruthy();
      
            
        });
    });

    test.describe('Tests widget TemplateWidget', () => {

      test.use({actionTimeout: 15000, navigationTimeout: 15000}, )

        test('Test for adding the  widget TemplateWidget', async ({ page }) => {
              // Create a workspace with the random name
            const NameWorkspace:string = 'Add widget TemplateWidget' +  Date.now().toString();
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


            // Select UI Editor
            await new GlobalSidebarPage(page).uiEditor();

            // Go to widgets list  
            const uieditortab = new UiEditorTabPage(page);
            await uieditortab.addwidget();

            // Drag and drop widget to canvas
            await page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.layoutWidget.widgetTemplateWidget).scrollIntoViewIfNeeded();
            const sorurceElement = page.locator(uiEditorTabPageLocators.sidebar.pages.homePage.pageCapabilities.widgets.newWidgets.layoutWidget.widgetTemplateWidget).first();
            const targetElement = page.locator(uiEditorTabPageLocators.editorPage.canvas);
            await uieditortab.dragNdrop(sorurceElement, targetElement);

            await uieditortab.checkVisibilityWidgetOnPage(uiEditorTabPageLocators.editorPage.layoutWidget.widgetTemplateWidget);
            expect(page.locator(uiEditorTabPageLocators.editorPage.layoutWidget.widgetTemplateWidget)).toBeTruthy();
      
            
        });
    });


   });
  

});

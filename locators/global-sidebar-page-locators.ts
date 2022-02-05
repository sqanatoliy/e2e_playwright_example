export const globalSidebarPageLocators = {

    globalIcon: {

        hidenLeftSidebarBtn: 'div.nav > div.wrapper_icon_nav.active',

    },

    globalSidebar: {

        nodeRed: {
            openNodeRedList: 'div.wrapper_left_sidebar > div> div> div> div> div> div',
            addNodeRedBtn: 'div.wrapper_left_sidebar > div > div > div > div:nth-child(2) > div > div:nth-child(2)',
            firstNodeRed: 'div.wrapper_left_sidebar > div > div > div > div:nth-child(2) > div.bp3-collapse > div > li > span > span',
 

            newNodeRed: {
                closeNewNodeRedModalWindow: 'span[icon="cross"]',
                projectName: 'div.wrapper_left_sidebar > div > div > div > div:nth-child(2) > div:nth-child(3) > div > div > div > div > div:nth-child(3) > div > input',
                systemType: 'div.wrapper_left_sidebar > div > div > div > div:nth-child(2) > div:nth-child(3) > div > div > div > div > div:nth-child(4) > div > select',
                createNewEnvBtn: 'text=Create New Env',
                deleteFirstEnvBtn: 'span[class="delete_env"]',
                keyNewEnv: 'input[placeholder="Key"]',
                valueNewEnv: 'input[placeholder="Value"]',
                createNodeRedBtn: 'div.wrapper_left_sidebar > div > div > div > div:nth-child(2) > div:nth-child(3) > div > div > div > div > div:nth-child(6) > div > button',
            },
        },

        iframe: {
            openIframeList: 'div.wrapper_left_sidebar > div > div > div > div:nth-child(3) > div > div:nth-child(1)',
            addIframe: 'div.wrapper_left_sidebar > div > div > div > div:nth-child(3) > div > div:nth-child(2)',

            newIframe: {
                iframeName: 'input[placeholder="Enter Iframe name"]',
                iframeUrl: 'input[placeholder="Enter Url Iframe"]',
                createNodeRedBtn: 'text=Create NodeRed',
            },
        },

        database: {
            openDatabaseList: 'div.wrapper_left_sidebar > div > div > div > div:nth-child(4) > div > div:nth-child(1)',
            addDatabase: 'div.wrapper_left_sidebar > div > div > div > div:nth-child(4) > div > div:nth-child(2)',

            newDatabase: {
                nameDatabase: 'input[placeholder="Enter Database name"]',
                nameUser: 'input[placeholder="Enter User name"]',
                typeDatabase: 'div > select',
                tagDatabase: 'input[placeholder="Enter Url Iframe"]',
                passwordDatabase: 'input[placeholder="Enter Password"]',
                createDatabaseBtn: 'text=Create Database'

            },
        },

        socket: {
            openSocketList: 'div.wrapper_left_sidebar > div > div > div > div:nth-child(2) > div > div',
            addSocket: 'div.wrapper_left_sidebar > div > div > div > div:nth-child(2) > div > div:nth-child(2)',
        },


        dependencies: {
            openDependenciesList: 'div.wrapper_left_sidebar > div > div > div > div:nth-child(5) > div',
            DependenciesList: {
                lodash: 'text=lodash',
                moment: 'text=moment',
            },
            
        },

        uiEditor: {
            openUiEditorContainer: 'text=UiEditor',
        },

        uiDebug: {
            openUiDebugContainer: 'text=UiDebug',
        },



    }


};
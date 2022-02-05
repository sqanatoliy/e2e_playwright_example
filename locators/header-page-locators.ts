export const headerPageLocators = {

    home: '#root > header > div > a',

    appList: {
        selectAppList: 'header  div.workspace_name.open_nav'
    },
    
    importAppBtn: '#root > header > div:nth-child(2) > button:nth-child(1)',
    exportAppBtn: '#root > header > div:nth-child(2) > button:nth-child(2)',
    defaultSettingsBtn: '#root > header > div:nth-child(2) > button:nth-child(3)',
    versionBtn: '#root > header > div:nth-child(2) > div > button:nth-child(1)',
    deployBtn: '#root > header  > button',

    userProfile: {
        userProfileMenu: 'div.wrapper_profile span',

        userProfileSettings: {
            viewUserEmailOnProfile: 'body > div.bp3-portal div.user-name > span',
            signOutButton: 'text=Sign Out'
        }

    },

};

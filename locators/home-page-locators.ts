export const homePageLocators = {
    
    userName: 'div.user_name',
    

    headerWorkspace:{
        createNewWorkspaceBtn: 'div.header_work_space > div:nth-child(1)  button',
        nameNewWorkspace: 'input[placeholder="Name"]',
        submitBtn: 'div.wrapper_button > button:nth-child(2)',

    },

    workspacesContainer:{
        search: 'div.search > input[type=text]',
        sortCreateDate: 'table > thead > tr > th:nth-child(3) > div',
        nameOfFirtstWorkspace: 'table > tbody > tr:nth-child(1) > td:nth-child(2) span',
        editWorkspace: 'tbody > tr:nth-child(1) > td:nth-child(5) > div > button:nth-child(1)',
        launchWorkspace: 'text=launch',
        deleteWorkspaceBtn: 'tbody > tr:nth-child(1) > td:nth-child(5) > div > button:nth-child(3)',
        confirmDeleteWorkspace: 'text=yes',
        

    },
    

};

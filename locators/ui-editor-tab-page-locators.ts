export const uiEditorTabPageLocators = {



    sidebar:{

        searchField: 'input[placeholder="Search entities..."]',

        pages: {

            openPagesList: 'div.t--entity > div > div',
            addPage: 'div.t--entity > div > div:nth-child(4)',

            homePage: {

                settingPageBtn: 'span.entity-context-menu > span > div',
                editNamePage: 'text=Edit Name',
                cloneCurrentPage: 'text=Clone',

                openPageCapabilities: 'div.t--entity.group.pages > div > div > div > div > div > div:nth-child(1) > svg',

                pageCapabilities: {

                    widgets: {

                        openWidgetList: 'div[step="2"] > div',

                        addWidget: 'div[step="2"] div.t--entity-add-btn',

                        goBackBtn: 'div.go_back',

                        newWidgets: {

                            formWidgets:  {
                                widgetForm: 'div[role="tabpanel"] > div > div > div > div:nth-child(2) > div:nth-child(3) > div.t--widget-card-draggable-formwidget > div > div',
                                widgetInput: 'div[role="tabpanel"] > div > div > div > div:nth-child(2) > div:nth-child(3) > div.t--widget-card-draggable-inputwidget > div > div',
                                widgetDropdown: 'div[role="tabpanel"] > div > div > div > div:nth-child(2) > div:nth-child(3) > div.t--widget-card-draggable-dropdownwidget > div > div',
                                widgetButton: 'div[role="tabpanel"] > div > div > div > div:nth-child(2) > div:nth-child(3) > div.t--widget-card-draggable-buttonwidget > div > div',
                                widgetCheckbox: 'div[role="tabpanel"] > div > div > div > div:nth-child(2) > div:nth-child(3) > div.t--widget-card-draggable-checkboxwidget > div > div',
                                widgetRadio: 'div[role="tabpanel"] > div > div > div > div:nth-child(2) > div:nth-child(3) > div.t--widget-card-draggable-radiogroupwidget > div > div',
                                widgetDatepicker: 'div[role="tabpanel"] > div > div > div > div:nth-child(2) > div:nth-child(3) > div.t--widget-card-draggable-datepickerwidget > div > div',
                                widgetRichTextEditor: 'div[role="tabpanel"] > div > div > div > div:nth-child(2) > div:nth-child(3) > div.t--widget-card-draggable-richtexteditorwidget > div > div'
        
                            },
        
                            displayWidget: {
                                widgetImage: 'div[role="tabpanel"] > div > div > div > div:nth-child(2) > div:nth-child(5) > div.t--widget-card-draggable-imagewidget > div > div',
                                widgetHeader: 'div[role="tabpanel"] > div > div > div > div:nth-child(2) > div:nth-child(5) > div.t--widget-card-draggable-mobheaderwidget> div > div',
                                widgetRepeat: 'div[role="tabpanel"] > div > div > div > div:nth-child(2) > div:nth-child(5) > div.t--widget-card-draggable-repeatwidget> div > div',
                                widgetText: 'div[role="tabpanel"] > div > div > div > div:nth-child(2) > div:nth-child(5) > div.t--widget-card-draggable-textwidget> div > div',
                                widgetIframe: 'div[role="tabpanel"] > div > div > div > div:nth-child(2) > div:nth-child(5) > div.t--widget-card-draggable-iframewidget> div > div',
                                widgetTable: 'div[role="tabpanel"] > div > div > div > div:nth-child(2) > div:nth-child(5) > div.t--widget-card-draggable-tablewidget> div > div',
                                widgetFileinput: 'div[role="tabpanel"] > div > div > div > div:nth-child(2) > div:nth-child(5) > div.t--widget-card-draggable-filepickers3widget > div > div',
                                widgetVideo: 'div[role="tabpanel"] > div > div > div > div:nth-child(2) > div:nth-child(5) > div.t--widget-card-draggable-videowidget> div > div',
                                widgetChart: 'div[role="tabpanel"] > div > div > div > div:nth-child(2) > div:nth-child(5) > div.t--widget-card-draggable-chartwidget> div > div',
                                widgetFileManager: 'div[role="tabpanel"] > div > div > div > div:nth-child(2) > div:nth-child(5) > div.t--widget-card-draggable-filemanager> div > div'
        
                            },
        
                            layoutWidget: {
                                widgetTabs: 'div[role="tabpanel"] > div > div > div > div:nth-child(2) > div:nth-child(7) > div.t--widget-card-draggable-tabswidget > div > div',
                                widgetAccordion: 'div[role="tabpanel"] > div > div > div > div:nth-child(2) > div:nth-child(7) > div.t--widget-card-draggable-accordionwidget > div > div',
                                widgetContainer: 'div[role="tabpanel"] > div > div > div > div:nth-child(2) > div:nth-child(7) > div.t--widget-card-draggable-containerwidget > div > div',
                                widgetTemplateWidget: 'div[role="tabpanel"] > div > div > div > div:nth-child(2) > div:nth-child(7) > div.t--widget-card-draggable-templatewidget > div > div',
        
                            },
        

                        },

                        currentWidgets: {

                        },
    

                    },
    
                    apis: {
    
    
                    },
    
                    transformers: {
    
                    },
    

                },

            },
        
        },

    },


    editorPage: {
        canvas: 'section > div > div > div > div[type="CANVAS_WIDGET"]',

        formWidgets: {
            widgetForm: 'div.t--widget-formwidget',
            widgetInput: 'div.t--draggable-inputwidget',
            widgetDropdown: 'div.t--draggable-dropdownwidget',
            widgetButton: 'div.t--draggable-buttonwidget ',
            widgetCheckbox: 'div.t--draggable-checkboxwidget',
            widgetRadio: 'div.t--draggable-radiogroupwidget',
            widgetDatepicker: 'div.t--draggable-datepickerwidget',
            widgetRichTextEditor: 'div.t--draggable-richtexteditorwidget'

        },

        displayWidgets: {
            widgetImage: 'div.t--widget-imagewidget',
            widgetHeader: 'div.t--widget-mobheaderwidget',
            widgetRepeat: 'div.t--widget-repeatwidget',
            widgetText: 'div.t--widget-textwidget ',
            widgetIframe: 'div.t--widget-iframewidget',
            widgetTable: 'div.t--widget-tablewidget',
            widgetFileinput: 'div.t--widget-filepickers3widget',
            widgetVideo: 'div.t--widget-videowidget',
            widgetChart: 'div.t--widget-chartwidget',
            widgetFileManager: 'div.t--widget-filemanager'

        },

        layoutWidget: {
            widgetTabs: 'div.t--widget-tabswidget',
            widgetAccordion: 'div.t--widget-accordionwidget',
            widgetContainer: 'div.t--widget-containerwidget',
            widgetTemplateWidget: 'div.t--widget-templatewidget'

        }



    },


    settingsWiget: {
    },


}
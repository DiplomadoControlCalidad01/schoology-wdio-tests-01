const CommonActions = require('../core/commonActions');

class Resources {
    clickAddResourceButton() {
        CommonActions.click('#toolbar-add');
    }

    clickCreateButton() {
        return CommonActions.click(`input[value='Create']`);
    }

    addFolder(folder) {
        let addFolderForm = '.popups-library-add-folder';
        
        this.clickAddResourceButton();
        CommonActions.click('#collection-add-folder a');
        CommonActions.waitForVisible(addFolderForm);

        let folderSteps = {
            'Name': () => CommonActions.setValue("#edit-title", folder.Name),
            'Color': () => CommonActions.click(`div[data-color=\'${folder.Color}\']`),
            'Description': () => CommonActions.setValue(`body#tinymce.mceContentBody`, folder.Description)
        };

        Object.keys(folder).forEach(key => {
            folderSteps[key].call();
        });

        this.clickCreateButton();
        CommonActions.waitForVisible('div#collection-toolbar');
        return this;
    }
}
module.exports = Resources;
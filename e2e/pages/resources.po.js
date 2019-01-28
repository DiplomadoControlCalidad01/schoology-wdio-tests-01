const CommonActions = require('../core/commonActions');

class Resources {
    clickAddResourceButton() {
        CommonActions.click('#toolbar-add');
    }

    getToolbarMessage(){
        return CommonActions.getText(`.message-text`);
    }

    clickCreateButton(){
        return CommonActions.click(`input[value='Create']`);
    }

    addFolder(folder){
        this.clickAddResourceButton()
        CommonActions.click('#collection-add-folder a');

        let folderSteps = {
            'Name': () => CommonActions.setValue("#edit-title", folder.Name),
            'FolderColor': () => CommonActions.setValue("sd", folder.FolderColor),
            'Description': () => CommonActions.selectValue("sd", folder.Description)
        };

        Object.keys(folder).forEach(key => {
            folderSteps[key].call();
        });

        this.clickCreateButton();
        return this;
    }
}
module.exports = Resources;
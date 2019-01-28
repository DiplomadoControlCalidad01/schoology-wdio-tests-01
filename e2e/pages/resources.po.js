const CommonActions = require('../core/commonActions');

class Resources {
    addResource() {
        CommonActions.click('#toolbar-add');
    }

    getToolbarMessage(){
        return CommonActions.getText(`.message-text`);
    }

    clickCreate(){
        return CommonActions.click(`input[value='Create']`);
    }

    addFolder(folder){
        this.addResource()
        CommonActions.click('#collection-add-folder a');

        let folderSteps = {
            'Name': () => CommonActions.setValue("#edit-title", folder.Name),
            'FolderColor': () => CommonActions.setValue("sd", folder.FolderColor),
            'Description': () => CommonActions.selectValue("sd", folder.Description)
        };

        Object.keys(folder).forEach(key => {
            folderSteps[key].call();
        });

        this.clickCreate();
        return this;
    }
}
module.exports = Resources;
const CommonActions = require('../core/commonActions');

class Resources {
    addResource(resourceName) {
        CommonActions.click('#toolbar-add');
        CommonActions.click('#collection-add-folder a');
        //Should return new instance of resourceName sent
    }

    constructor() {
        //this.sdsd = `sd`;
    }

    clickCreate(){

    }

    clickCancel()
    {

    }

    addFolder(folder){
        let folderSteps = {
            'Name': () => CommonActions.setValue("#edit-title", folder.Name),
            'FolderColor': () => CommonActions.setValue("sd", folder.FolderColor),
            'Description': () => CommonActions.selectValue("sd", folder.Description)
        };

        Object.keys(folder).forEach(key => {
            folderSteps[key].call();
        });

        this.clickCreate();
    }
}
module.exports = Resources;
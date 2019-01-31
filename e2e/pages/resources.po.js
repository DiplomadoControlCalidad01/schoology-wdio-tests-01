const CommonActions = require('../core/commonActions');

class Resources {
    clickAddResourceButton() {
        CommonActions.click('#toolbar-add');
    }

    clickCreateButton() {
        return CommonActions.click(`input[value='Create']`);
    }

    clickAddButton() {
        return CommonActions.click(`input#edit-submit[value='Add']`);
    }

    waitForResourcesBarVisible(){
        CommonActions.waitForVisible('#collection-toolbar');
    }

    addFolder(folder) {
        let addFolderForm = '.popups-library-add-folder';
        
        this.clickAddResourceButton();
        CommonActions.click('#collection-add-folder a');
        CommonActions.waitForVisible(addFolderForm);

        let folderSteps = {
            'Name': () => CommonActions.setValue("#edit-title", folder.Name),
            'Color': () => CommonActions.click(`div[data-color=\'${folder.Color}\']`)
        };

        Object.keys(folder).forEach(key => {
            folderSteps[key].call();
        });

        this.clickCreateButton();
        this.waitForResourcesBarVisible();
        return this;
    }

    addLink(link) {
        let addLinkForm = '.popups-box.popups-large.popups-library-add-link';

        this.clickAddResourceButton();
        CommonActions.click('#collection-add-link');
        CommonActions.waitForVisible(addLinkForm);

        let linkSteps = {
            'url': () => CommonActions.setValue("input#edit-link", link.url),
            'title': () => CommonActions.setValue(`input#edit-link-title`, link.title)
        };

        Object.keys(link).forEach(key => {
            linkSteps[key].call();
        });

        this.clickAddButton();
        this.waitForResourcesBarVisible();
        return this;
    }
}
module.exports = Resources;
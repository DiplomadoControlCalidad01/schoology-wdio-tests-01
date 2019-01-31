const CommonActions = require('../core/commonActions');

class Resources {
    clickAddResourceButton() {
        CommonActions.click('#toolbar-add');
    }

    clickCreateButton() {
        CommonActions.click(`input[value='Create']`);
    }

    clickAddButton() {
        CommonActions.click(`input#edit-submit[value='Add']`);
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

    addTestQuiz(quiz) {
        let addTestQuizForm = '.popups-library-add-template.assessment';

        this.clickAddResourceButton();
        CommonActions.click('#collection-add-assessment');
        CommonActions.waitForVisible(addTestQuizForm);

        let quizSteps = {
            'name': () => CommonActions.setValue("input#edit-link", link.url),
            'maxPoints': () => CommonActions.setValue(`input#edit-link-title`, link.title),
            'resourceNotes': () => CommonActions.setValue(`input#edit-link-title`, link.title),
            'level': () => CommonActions.setValue(`input#edit-link-title`, link.title),
            'resourceTypes': () => CommonActions.setValue(`input#edit-link-title`, link.title),
            'optionsName': () => CommonActions.setValue(`input#edit-link-title`, link.title),
        };

        Object.keys(link).forEach(key => {
            quizSteps[key].call();
        });

        this.clickAddButton();
        this.waitForResourcesBarVisible();
        return this;
    }

}
module.exports = Resources;
const CommonActions = require('../core/commonActions');
const button = require('../core/constants').button;
const TestQuiz = require('../pages/testquiz.po');

class Resources {
    clickAddResourceButton() {
        CommonActions.click('#toolbar-add');
    }

    clickButton(button) {
        CommonActions.click(`input#edit-submit[value='${button}']`);
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

        this.clickButton(button.CREATE);
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
        
        this.clickButton(button.ADD);
        this.waitForResourcesBarVisible();
        return this;
    }

    addTestQuiz(quiz) {
        let addTestQuizForm = '.popups-library-add-template.assessment';

        this.clickAddResourceButton();
        CommonActions.click('#collection-add-assessment');
        CommonActions.waitForVisible(addTestQuizForm);

        let quizSteps = {
            'name': () => CommonActions.setValue("#edit-template-fields-title", quiz.name),
            'maxPoints': () => CommonActions.setValue(`#edit-template-fields-max-points`, quiz.maxPoints),
            'resourceNotes': () => this.fillResourceNotes(quiz.resourceNotes),
            'level': () => CommonActions.selectValue(`#edit-grade-level-range-start`, quiz.level),
            'resourceTypes': () => CommonActions.selectValue(`#edit-use-category`, quiz.resourceTypes)            
        };

        Object.keys(quiz).forEach(key => {
            quizSteps[key].call();
        });

        this.clickButton(button.SUBMIT);
        this.waitForResourcesBarVisible();
        return new TestQuiz();
    }

    fillResourceNotes(resourceNotes){
        CommonActions.click('#resource-info-selector');
        CommonActions.setValue(`textarea#edit-description`, resourceNotes);
    }

}
module.exports = Resources;
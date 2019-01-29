const CommonActions = require('../core/commonActions');

class EditGroupForm  {
    getName() {
        return CommonActions.getText('#edit-name');
    }
    
    editForm(newInfo) {
        const groupSetter = {
            'name': () => CommonActions.setValue('#edit-name', newInfo.name),
            'description': () => CommonActions.setValue('#edit-description', newInfo.description)
        };

        Object
            .keys(group)
            .forEach((field) => {
                groupSetter[field].call();
            });
    }
    
    clickSaveButton() {
        CommonActions.click('input#edit-submit');
        confirmationMessage = CommonActions.getText('message-text');
        return confirmationMessage;
    }

}
module.exports = EditGroupForm;
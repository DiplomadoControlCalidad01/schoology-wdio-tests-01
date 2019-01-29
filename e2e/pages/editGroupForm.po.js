const CommonActions = require('../core/commonActions');

class EditGroupForm  {
    getName() {
        return CommonActions.getText('#edit-name');
    }
    
    editFields(newInfo) {
        const groupSetter = {
            'name': () => CommonActions.setValue('#edit-name', newInfo.name),
            'description': () => CommonActions.setValue('#edit-description', newInfo.description)
        };

        Object
            .keys(newInfo)
            .forEach((field) => {
                groupSetter[field].call();
            });
    }
    
    clickSaveButton() {
        CommonActions.click('input#edit-submit');
        let confirmationMessage = CommonActions.getText('.message-text');
        return confirmationMessage;
    }

}
module.exports = EditGroupForm;
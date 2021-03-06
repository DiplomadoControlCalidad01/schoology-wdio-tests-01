const CommonActions = require('../core/commonActions');
const GroupInfo = require('../pages/groupInfo.po');

class GroupForm {

    fillForm(group){
        const groupSetter = {
            'name': () => CommonActions.setValue('#edit-name', group.name),
            'description': () => CommonActions.setValue('#edit-description', group.description)
        };

        Object
            .keys(group)
            .forEach((field) => {
                groupSetter[field].call();
            });
    }

    clickCreateButton() {
        CommonActions.click('input#edit-submit');
        CommonActions.waitForInvisible('#popups-overlay');
        return new GroupInfo();
    }
}
module.exports = GroupForm;
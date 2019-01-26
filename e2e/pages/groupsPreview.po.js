const CommonActions = require('../core/commonActions');
const GroupForm = require('../pages/groupForm.po');

class GroupsPreview {

    createFirstGroup() {
        CommonActions.click(`//button[text()='Create a Group']`);
        return new GroupForm();
    }

}
module.exports = GroupsPreview;
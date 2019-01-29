const CommonActions = require('../core/commonActions');
const GroupForm = require('../pages/groupForm.po');
const GroupsDashboard = require('../pages/groupsDashboard.po');

class GroupsPreview {

    goToMyGroups() {
        CommonActions.click(`a[href = '/groups']`);
        new GroupsDashboard();
    }

    createFirstGroup() {
        CommonActions.click(`//button[text()='Create a Group']`);
        return new GroupForm();
    }
}
module.exports = GroupsPreview;
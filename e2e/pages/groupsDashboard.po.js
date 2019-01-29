const GroupInfo = require('../pages/groupInfo.po');
const GroupForm = require('../pages/groupForm.po');
const CommonActions = require('../core/commonActions');

class GroupsDashboard {

    createGroup() {
        CommonActions.click(`a[href='/groups/new']`);
        return new GroupForm();
    }
    viewGroupInfo(groupName)
    {
        CommonActions.click(`//a[contains(@class, 'group-title') and text()='${groupName}']`);
        return new GroupInfo();
    }

}
module.exports = GroupsDashboard;
const GroupInfo = require('../pages/groupInfo.po');

class GroupsDashboard {

    createGroup() {
        CommonActions.click(`a[href='/groups/new']`);
        return new GroupForm();
    }
    viewGroupInfo(groupName)
    {
        CommonActions.click(``);
        return new GroupInfo();
    }

}
module.exports = 'GroupsDashboard'
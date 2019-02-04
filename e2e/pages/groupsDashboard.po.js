const GroupInfo = require('../pages/groupInfo.po');
const GroupForm = require('../pages/groupForm.po');
const DeletedGroups = require('../pages/deletedGroups.po');
const CommonActions = require('../core/commonActions');

class GroupsDashboard {

    clickCreateGroupButton() {
        CommonActions.click('a[href="/groups/new"]');
        return new GroupForm();
    }

    clickGroupInfo(groupName)
    {
        CommonActions.click(`//a[contains(@class, 'group-title') and text()='${groupName}']`);
        return new GroupInfo();
    }

    deleteGroup(groupName) {
        CommonActions.click(`//a[contains(@class, 'group-title') and text()='${groupName}']/ancestor::li/descendant::span[contains(@class,'action-links-unfold-text')]`);
        CommonActions.click(`//a[contains(@class, 'group-title') and text()='${groupName}']/ancestor::li/descendant::a[contains(@id, 'action-delete')]`);
        CommonActions.click('#edit-submit');
        CommonActions.waitForInvisible('#popups-overlay');
    }

    clickDeletedGroupsLink() {
        CommonActions.click('a[href="/groups/deleted"]');
        return new DeletedGroups();
    }

}
module.exports = GroupsDashboard;
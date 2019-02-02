const env = require('../../environment');
const Login = require('../pages/login.po');
const Header = require('../pages/header.po');
const expect = require('chai').expect;

 describe('Groups', () => { 
    let header;
    const group = {
        name: 'Test Group',
        description: 'Test Description'
    };
    before(() => {
        header = Login.loginAs(env.credentials.teacher.username, env.credentials.teacher.password);
    });

    beforeEach(() => {
        // Create Group
        let groups = header.navigateTo('Groups');
        let dashboard = groups.goToMyGroups();
        let groupForm = dashboard.clickCreateGroupButton();
        groupForm.fillForm(group);
        
        let groupInfo = groupForm.clickCreateButton();
    });

    it('Edit the name of a Group', () => {
        let groups = header.navigateTo('Groups');

        const editedGroup = {
            name: 'New Group Name',
            description: 'New Description'
        };
        let dashboard = groups.goToMyGroups();
        let groupInfo = dashboard.clickGroupInfo(group.name);
        let editGroupForm = groupInfo.clickEditLink();
        editGroupForm.fillEditGroupInfoForm(editedGroup);
        editGroupForm.clickSaveButton();
        message = header.getConfirmationMessage();
        expect(message).to.equal(`${editedGroup.name} has been saved.`);

    });

    it('Delete a group', () => {
        let groups = header.navigateTo('Groups');
        let dashboard = groups.goToMyGroups();
        dashboard.deleteGroup(group.name);
        let deletedGroups = dashboard.clickDeletedGroupsLink();
        let exists = deletedGroups.isDeletedGroupExisting(group.name);
        expect(exists).to.equal(true);
    });

});
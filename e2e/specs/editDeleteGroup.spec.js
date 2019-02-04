const env = require('../../environment');
const Login = require('../pages/login.po');
const feature = require('../core/constants').feature;
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
        let groups = header.navigateTo(feature.GROUPS);
        let dashboard = groups.goToMyGroups();
        let groupForm = dashboard.clickCreateGroupButton();
        groupForm.fillForm(group);
        
        let groupInfo = groupForm.clickCreateButton();
    });

    it('#Acceptance It should be possible to edit the name and description of a group', () => {
        let groups = header.navigateTo(feature.GROUPS);

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

    it('#Acceptance It should be possible to delete a group', () => {
        let groups = header.navigateTo(feature.GROUPS);
        let dashboard = groups.goToMyGroups();
        dashboard.deleteGroup(group.name);
        let deletedGroups = dashboard.clickDeletedGroupsLink();
        let isGroupDeleted = deletedGroups.isDeletedGroupExisting(group.name);
        expect(isGroupDeleted).to.be.true;
    });

});
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
        browser.url(env.url);
        
        // Create a Group
        header = Login.loginAs(env.credentials.teacher.username, env.credentials.teacher.password);
        let groups = header.navigateTo('Groups');
        let dashboard = groups.goToMyGroups();
        let groupForm = dashboard.createGroup();
        groupForm.fillForm(group);
        
        let groupInfo = groupForm.clickCreateButton();
    });

    it('Edit the name of a Group', () => {
        browser.url(env.url);

        let groups = header.navigateTo('Groups');

        const editedGroup = {
            name: 'New Group Name',
            description: 'New Description'
        };
        let dashboard = groups.goToMyGroups();
        let groupInfo = dashboard.viewGroupInfo(group.name);
        let editGroupForm = groupInfo.editInformation();
        editGroupForm.editFields(editedGroup);
        message = editGroupForm.clickSaveButton();
        expect(message).to.equal(`${editedGroup.name} has been saved.`);

    });

    it('Delete a group', () => {
        let header = new Header();
        let groups = header.navigateTo('Groups');
        let dashboard = groups.goToMyGroups();
        dashboard.deleteGroup();
    });
    
});
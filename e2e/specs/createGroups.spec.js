const env = require('../../environment');
const Login = require('../pages/login.po');
const expect = require('chai').expect;

describe('Groups', () => {
    const group = {
        name: 'N Group',
        description: 'N Description'
    };

    it('Creates a Group', () => {
        browser.url(env.url);

        let header = Login.loginAs(env.credentials.teacher.username, env.credentials.teacher.password);
        let groups = header.navigateTo('Groups');
        let dashboard = groups.goToMyGroups();
        let groupForm = dashboard.createGroup();
        groupForm.fillForm(group);
        
        let groupInfo = groupForm.clickCreateButton();
        expect(groupInfo.getTitle()).to.equal(group.name);
    });

    it('Edit the name of a Group', () => {
        browser.url(env.url);

        let header = Login.loginAs(env.credentials.teacher.username, env.credentials.teacher.password);
        let groups = header.navigateTo('Groups');

        const editedGroup = {
            name: 'New Group Name',
            description: 'New Description'
        };
        let dashboard = groups.goToMyGroups();
        let groupInfo = dashboard.viewGroupInfo(editedGroup.name);
        let editForm = groupInfo.editInformation();
        message = editForm.clickSaveButton();
        
        expect(message).to.equal(`${editedGroup} has been saved.`);
        
    });
});
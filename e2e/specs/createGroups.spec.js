const env = require('../../environment');
const Login = require('../pages/login.po');
const Header = require('../pages/header.po');
const expect = require('chai').expect;

describe('Groups', () => {
    
    it('Creates a Group', () => {
        browser.url(env.url);

        const group = {
            name: 'N Group',
            description: 'N Description'
        };

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

        //let header = Login.loginAs(env.credentials.teacher.username, env.credentials.teacher.password);
        let header = new Header();
        let groups = header.navigateTo('Groups');

        const group = {
            name: 'N Group',
            description: 'N Description'
        };

        const editedGroup = {
            name: 'New Group Name',
            description: 'New Description'
        };
        let dashboard = groups.goToMyGroups();
        let groupInfo = dashboard.viewGroupInfo(group.name);
        let editGroupForm = groupInfo.editInformation();
        editGroupForm.editFields(editedGroup);
        message = editGroupForm.clickSaveButton();
        
        expect(message).to.equal(`${editedGroup} has been saved.`);

    });
    
});
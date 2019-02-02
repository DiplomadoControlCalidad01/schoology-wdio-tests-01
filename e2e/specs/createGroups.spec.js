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
        let groupForm = dashboard.clickCreateGroupButton();
        groupForm.fillForm(group);
        
        let groupInfo = groupForm.clickCreateButton();
        expect(groupInfo.getTitle()).to.equal(group.name);

    }); 
});
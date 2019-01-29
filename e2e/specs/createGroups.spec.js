const env = require('../../environment');
const Login = require('../pages/login.po');
const expect = require('chai').expect;

describe('Groups', () => {
    /*it('Create Group', () => {
        browser.url(env.url);

        let header = Login.loginAs(env.credentials.teacher.username, env.credentials.teacher.password);
        let groups = header.navigateTo('Groups');

        let groupForm = groups.createFirstGroup();
        groupForm.fillForm({
            name: 'Test Group',
            description: 'Test Description'
        });

        browser.pause(10000);
    });*/
    it('Creates a Group', () => {
        browser.url(env.url);

        let header = Login.loginAs(env.credentials.teacher.username, env.credentials.teacher.password);
        let groups = header.navigateTo('Groups');

        const group = {
            name: 'N Group',
            description: 'N Description'
        };

        let groupForm = groups.createGroup();
        groupForm.fillForm(group);
        
        let groupInfo = groupForm.clickCreateButton();
        expect(groupInfo.getTitle()).to.equal(group.name);
        
        browser.pause(10000);

    });
});
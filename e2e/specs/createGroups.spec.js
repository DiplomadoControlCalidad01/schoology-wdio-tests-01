const env = require('../../environment');
const Login = require('../pages/login.po');
const feature = require('../core/constants').feature;
const expect = require('chai').expect;

 describe('Groups', () => { 
    it('#BVT It should be possible to create a group', () => {
        browser.url(env.url);

        const group = {
            name: 'N Group',
            description: 'N Description'
        };

        let header = Login.loginAs(env.credentials.teacher.username, env.credentials.teacher.password);
        let groups = header.navigateTo(feature.GROUPS);
        let dashboard = groups.goToMyGroups();
        let groupForm = dashboard.clickCreateGroupButton();
        groupForm.fillForm(group);
        
        let groupInfo = groupForm.clickCreateButton();
        expect(groupInfo.getTitle()).to.equal(group.name);

    }); 
});
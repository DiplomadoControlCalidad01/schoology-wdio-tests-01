const assert = require('assert');
const env = require('../../environment');
const Login = require('../pages/login.po');

describe('Groups', () => {
    it('Create Group', () => {
        browser.url(env.url);

        let header = Login.loginAs(env.credentials.teacher.username, env.credentials.teacher.password);
        let groups = header.navigateTo('Groups');

        let groupForm = groups.createFirstGroup();
        groupForm.fillForm({
            name: 'Test Group',
            description: 'Test Description'
        });

        browser.pause(10000);

    });
});
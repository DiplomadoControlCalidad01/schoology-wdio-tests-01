const assert = require('assert');
const credentials = require('../environment').credentials;
const Login = require('../pages/login.po');

describe('Groups', () => {
    it('Create Group', () => {
        browser.url(credentials.url);

        let header = Login.loginAs(credentials.teacher.username, credentials.teacher.password);
        let groups = header.navigateTo('Groups');

        let groupForm = groups.createFirstGroup();
        groupForm.fillForm({
            name: 'Test Group',
            description: 'Test Description'
        });

        browser.pause(10000);

    });
});
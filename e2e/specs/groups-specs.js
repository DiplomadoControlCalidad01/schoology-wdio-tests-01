const assert = require('assert');
const credentials = require('../environment').credentials;
const Login = require('../pages/login.po');

describe('Groups', () => {
    it('Create Group', () => {
        browser.url('https://app.schoology.com/login');

        let header = Login.loginAs(credentials.instructor.username, credentials.instructor.password);
        let groups = header.navigateTo('Groups');

        let groupForm = groups.createFirstGroup();
        groupForm.fillForm({
            name: 'Test Group',
            description: 'Test Description'
        });

        browser.pause(10000);

    });
});
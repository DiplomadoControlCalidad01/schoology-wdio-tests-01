const assert = require('assert');
const credentials = require('../../environment').credentials;
const Login = require('../pages/login.po');

describe('webdriver.io page', () => {
    it('login successfully with correct credentials', () => {
        browser.url('https://app.schoology.com/login');

        let header = Login.loginAs(credentials.instructor.username, credentials.instructor.password);
        let resources = header.navigateTo('Resources');

        resources.addResource('Add Folder');
        browser.pause(10000);
    });
});
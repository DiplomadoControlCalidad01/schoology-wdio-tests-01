const assert = require('assert');
const credentials = require('../../environment').credentials;
const Login = require('../pages/login.po');

describe('Resource', () => {
    it('Add Folder resource with required fields', () => {
        //browser.url('https://app.schoology.com/login');

        let header = Login.loginAs(credentials.teacher.username, credentials.teacher.password);
        let resources = header.navigateTo('Resources');

        resources.addResource('Add Folder');
        browser.pause(10000);
    });
});
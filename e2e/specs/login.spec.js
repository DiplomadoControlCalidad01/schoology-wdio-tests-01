const assert = require('assert');
const env = require('../../environment');
const Login = require('../pages/login.po');

describe('webdriver.io page', () => {
    it('login successfully with correct credentials', () => {
        browser.url(env.url);

        let header = Login.loginAs(env.credentials.teacher.username, env.credentials.teacher.password);
        //assert for login
    });
});
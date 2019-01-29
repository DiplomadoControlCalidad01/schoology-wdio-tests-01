const assert = require('assert');
const env = require('../../environment');
const login = require('../pages/login.po');
const helper = require('../helpers/number.helper');
const expect = require('chai').expect;

describe('Resources', () => {
    it('Add Folder resource with required fields', () => {
        let folder = {
            'Name': helper.getRandomNumber()
        };

        browser.url(env.url);
        let header = login.loginAs(env.credentials.teacher.username, env.credentials.teacher.password);
        let resources = header.navigateTo('Resources')
            .addFolder(folder);
        
        expect(resources.getToolbarMessage()).to.equal(`${folder.Name} has been successfully created.`);
    });
});
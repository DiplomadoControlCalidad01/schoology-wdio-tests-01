const assert = require('assert');
const env = require('../../environment');
const login = require('../pages/login.po');
const helper = require('../helpers/number.helper');
const expect = require('chai').expect;

describe('Resources', () => {
    let header;

    /**
     * Runs before all tests in this block
     */
    before(function() {
        browser.url(env.url);
        header = login.loginAs(env.credentials.teacher.username, env.credentials.teacher.password);
        
      });

    it('Add Folder resource with required fields', () => {
        let folder = {
            'Name': helper.getRandomNumber()
        };
        
        let resources = header.navigateTo('Resources')
            .addFolder(folder);

        expect(resources.getToolbarMessage()).to.equal(`${folder.Name} has been successfully created.`);
    });

    it('Add Folder resource with color as green', () => {
        let folder = {
            'Name': helper.getRandomNumber(),
            'Color': 'green'
        };
        
        let resources = header.navigateTo('Resources')
            .addFolder(folder);

        expect(header.getConfirmationMessage()).to.equal(`${folder.Name} has been successfully created.`);
    });

    it('Add Folder resource with color as gray', () => {
        let folder = {
            'Name': helper.getRandomNumber(),
            'Color': 'gray'
        };
        
        let resources = header.navigateTo('Resources')
            .addFolder(folder);

        expect(header.getConfirmationMessage()).to.equal(`${folder.Name} has been successfully created.`);
    });

    it('Add Folder resource with all fields populated', () => {
        let folder = {
            'Name': helper.getRandomNumber(),
            'Color': 'black',
            //'Description': 'This is the description'
        };
        
        let resources = header.navigateTo('Resources')
            .addFolder(folder);

        expect(header.getConfirmationMessage()).to.equal(`${folder.Name} has been successfully created.`);
    });
});
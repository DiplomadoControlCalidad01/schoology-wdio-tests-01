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
        header = login.loginAs(env.credentials.teacher.username, env.credentials.teacher.password);
      });

    it('Confirmation message is displayed when add a folder', () => {
        let folder = {
            'Name': helper.getRandomNumber()
        };
        
        let resources = header.navigateTo('Resources')
            .addFolder(folder);

        expect(resources.getToolbarMessage()).to.equal(`${folder.Name} has been successfully created.`);
    });

    it('Confirmation message is displayed when add a folder with green color', () => {
        let folder = {
            'Name': helper.getRandomNumber(),
            'Color': 'green'
        };

        let resources = header.navigateTo('Resources')
            .addFolder(folder);

        expect(header.getConfirmationMessage()).to.equal(`${folder.Name} has been successfully created.`);
    });

    it('Confirmation message is displayed when add a link', () => {
        let link = {
            'url': 'https://www.google.com/',
            'title': 'google'
        };

        let resources = header.navigateTo('Resources')
            .addLink(link);

        expect(header.getConfirmationMessage()).to.equal(`The link has been successfully added.`);
    });
});
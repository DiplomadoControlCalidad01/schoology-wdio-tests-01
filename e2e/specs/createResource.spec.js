const assert = require('assert');
const env = require('../../environment');
const login = require('../pages/login.po');
const helper = require('../helpers/number.helper');
const feature = require('../core/constants').feature;
const expect = require('chai').expect;

describe('Resources', () => {
    let header;

    /**
     * Runs before all tests in this block
     */
    before(function() {
        header = login.loginAs(env.credentials.teacher.username, env.credentials.teacher.password);
      });

    it('#BVT Correct confirmation message is displayed when add a folder', () => {
        let folder = {
            'Name': 'folder' + helper.getRandomNumber()
        };
        
        header.navigateTo(feature.RESOURCES)
            .addFolder(folder);

        expect(header.getConfirmationMessage()).to.equal(`${folder.Name} has been successfully created.`);
    });

    it('#BVT Confirmation message is displayed when add a link', () => {
        let link = {
            'url': 'https://www.google.com/',
            'title': 'google'
        };

        header.navigateTo(feature.RESOURCES)
            .addLink(link);

        expect(header.getConfirmationMessage()).to.equal(`The link has been successfully added.`);
    });

    it('#Aceptance Correct confirmation message is displayed when add a folder with green color', () => {
        let folder = {
            'Name': 'folder' + helper.getRandomNumber(),
            'Color': 'green'
        };

        header.navigateTo(feature.RESOURCES)
            .addFolder(folder);

        expect(header.getConfirmationMessage()).to.equal(`${folder.Name} has been successfully created.`);
    });

    it('#BVT Test/Quiz can be added successfully with required fields', () => {
        let quiz = {
            'name': 'Quiz' + helper.getRandomNumber()
        };

        let quizPage = header.navigateTo(feature.RESOURCES)
            .addTestQuiz(quiz);

        expect(quizPage.getPageTitle()).to.equal(quiz.name);
    });

    it('#Aceptance Test/Quiz can be added successfully with all fields', () => {
        let quiz = {
            'name': 'Quiz' + helper.getRandomNumber(),
            'maxPoints': '80',
            'resourceNotes': 'Resource notes',
            'level': 'None',
            'resourceTypes': 'Activity'
        };

        let quizPage = header.navigateTo(feature.RESOURCES)
        .addTestQuiz(quiz);

        expect(quizPage.getPageTitle()).to.equal(quiz.name);
    });
});
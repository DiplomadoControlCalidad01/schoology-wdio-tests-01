const login = require('../pages/login.po');
const env = require('../../environment');
const expect = require('chai').expect;

describe('Edit Course', () => {
    it('it should be possible to edit a course\'s info', () => {

        let course = {
            'CourseName': 'Test 101',
            'SectionName': 'Section 1',
            'SubjectArea': 'Technology',
            'Level' : 'None'
        };

        let updatedCourse = {
            'CourseName': 'Other Name',
            'SectionName': 'Other Section',
            'SubjectArea': 'Technology',
            'Level' : 'None'
        };

        browser.url(env.url);
        let header = login.loginAs(env.credentials.teacher.username, env.credentials.teacher.password);
        let editCourse = header.navigateTo('Courses')
            .clickCreateCourseButton()
            .fillCreateCourseForm(course)
            .clickCreateButton()
            .clickCourseOptions()
            .clickEditInfoLink()
            .fillEditCourseInfoForm(updatedCourse)
            .clickSaveButton();

        expect(editCourse.getConfirmationMessage()).to.equal('The section has been updated.');
    });
});
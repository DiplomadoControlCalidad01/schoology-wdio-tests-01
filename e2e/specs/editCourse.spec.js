const login = require('../pages/login.po');
const env = require('../../environment');
const expect = require('chai').expect;

describe('Edit Course', () => {

    let header;
    let courseDashboard;
    let course = {
        'CourseName': 'Test 201',
        'SectionName': 'Section 1',
        'SubjectArea': 'Technology',
        'Level' : 'None'
    };

    before(() => {
        header = login.loginAs(env.credentials.teacher.username, env.credentials.teacher.password);

    });

    beforeEach(() => {
        courseDashboard = header.navigateTo('Courses')
            .clickCreateCourseButton()
            .fillCreateCourseForm(course)
            .clickCreateButton();
    });

    it('it should be possible to edit a course', () => {

        let updatedCourse = {
            'CourseName': 'Other Name',
            'SectionName': 'Other Section',
            'SubjectArea': 'Technology',
            'Level' : 'None'
        };

        let editCourse = courseDashboard.clickCourseOptions()
            .clickEditInfoLink()
            .fillEditCourseInfoForm(updatedCourse)
            .clickSaveButton();

        expect(header.getConfirmationMessage()).to.equal('The section has been updated.');
    });
});
const login = require('../pages/login.po');
const env = require('../../environment');
const expect = require('chai').expect;
const feature = require('../core/constants').feature;

describe('Edit and remove a course', () => {

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
        courseDashboard = header.navigateTo(feature.COURSES)
            .clickCreateCourseButton()
            .fillCreateCourseForm(course)
            .clickCreateButton();
    });

    it('#Acceptance It should be possible to edit a course', () => {
        let updatedCourse = {
            'CourseName': 'Other Name',
            'SectionName': 'Other Section'
        };

        let editCourse = courseDashboard.clickCourseOptions()
            .clickEditInfoLink()
            .fillEditCourseInfoForm(updatedCourse)
            .clickSaveButton();

        expect(header.getConfirmationMessage()).to.equal('The section has been updated.');
        expect(editCourse.getCourseNameValue()).to.equal(updatedCourse.CourseName);
        expect(editCourse.getSectionNameValue()).to.equal(updatedCourse.SectionName);
    });

    it('#Acceptance It should be possible to delete a course', () => {
        let courses = header.navigateTo(feature.COURSES)
            .deleteCourse(course.CourseName);
        expect(courses.getConfirmationMessage()).to.equal(`Section ${course.SectionName} has been deleted.`);

        let deletedCourses = courses.clickDeletedCoursesLink();
        let isCourseDeleted = deletedCourses.isDeletedCourseExisting(course.CourseName, course.SectionName);
        expect(isCourseDeleted).to.be.true;
    });
});
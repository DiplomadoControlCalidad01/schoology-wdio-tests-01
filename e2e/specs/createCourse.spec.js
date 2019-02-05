const login = require('../pages/login.po');
const env = require('../../environment');
const expect = require('chai').expect;
const feature = require('../core/constants').feature;

describe('Create Course', () => {

    let header;

    before(() => {
        header = login.loginAs(env.credentials.teacher.username, env.credentials.teacher.password);
    });

    it('#BVT It should be possible to create a course', () => {

        let course = {
            'CourseName': 'Test 101',
            'SectionName': 'Section 1',
            'SubjectArea': 'Technology',
            'Level' : 'None'
        };

        let courseDashboard = header.navigateTo(feature.COURSES)
            .clickCreateCourseButton()
            .fillCreateCourseForm(course)
            .clickCreateButton();
        
        expect(courseDashboard.getCourseTitle()).to.equal(`${course.CourseName}: ${course.SectionName}`);
    });
});

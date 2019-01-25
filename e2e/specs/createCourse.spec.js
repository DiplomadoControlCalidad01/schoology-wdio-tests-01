const Login = require('../pages/login.po');
const credentials = require('../../environment').credentials;

describe('Create Course', () => {
    it('should be possible to create a course', () => {
        browser.url('https://app.schoology.com/login');

        let header = Login.loginAs(credentials.teacher.username, credentials.teacher.password);
        let coursesPage = header.navigateTo('Courses');
        coursesPage.clickCreateCourseButton();
        //coursesPage.createCourse();
        browser.pause(10000);
    });
});

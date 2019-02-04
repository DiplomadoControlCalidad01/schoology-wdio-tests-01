const CommonActions = require('../core/commonActions');
const CourseDashboard = require('./courseDashboard.po');
const DeletedCourses = require('./deletedCourses.po');

class Courses {

    clickCreateCourseButton(){
        CommonActions.click(`//a[text()='Create Course']`);
        return this;
    }

    clickCreateButton(){
        CommonActions.click('input#edit-submit');
        CommonActions.waitForInvisible('div#popups-overlay');
        return new CourseDashboard();
    }

    clickCancelButton(){
        CommonActions.click(`//a[text()='Cancel']`);
        return this;
    }

    fillCreateCourseForm(course){
        let courseSteps = {
            'CourseName': () => CommonActions.setValue('input#edit-course-name', course.CourseName),
            'SectionName': () => CommonActions.setValue('input#edit-section-name-1', course.SectionName),
            'SubjectArea': () => CommonActions.selectValue('select#edit-subject-area', course.SubjectArea),
            'Level': () => CommonActions.selectValue('select#edit-grade-level-range-start', course.Level)
        };
        Object.keys(course).forEach(key => {
            courseSteps[key].call();
        });
        return this;
    }

    deleteCourse(courseName){
        CommonActions.click(`//span[@class='course-title' and text()='${courseName}']/ancestor::li/descendant::span[contains(@class, 'action-links-unfold-text')]`);
        CommonActions.click(`//span[@class='course-title' and text()='${courseName}']/ancestor::li/descendant::a[text()='Delete']`);
        CommonActions.click('input#edit-submit');
        return this;
    }

    getDeleteConfirmationMessage(){
        return CommonActions.getText('div.message-text');
    }

    clickDeletedCoursesLink(){
        CommonActions.click('a[href="/courses/deleted"]');
        return new DeletedCourses();
    }
}

module.exports = Courses;
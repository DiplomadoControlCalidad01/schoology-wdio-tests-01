const CommonActions = require('../core/CommonActions');

class Courses {

    constructor() {
        this.courseNameTextField = 'input#edit-course-name';
        this.sectionNameTextField = 'input#edit-section-name-1';
        this.subjectAreaSelectField = 'select#edit-subject-area';
        this.levelSelectField = 'select#edit-grade-level-range-start';
        this.createButton = 'input#edit-submit';
        this.cancelButton = `//a[text()='Cancel']`;
        this.createCourseButton = `//a[text()='Create Course']`;
    }

    clickCreateCourseButton(){
        CommonActions.click(this.createCourseButton);
    }

    clickCreateButton(){
        CommonActions.click(this.createButton);
    }

    clickCancelButton(){
        CommonActions.click(this.cancelButton);
    }

    createCourse(course){
        let courseSteps = {
            'CourseName': () => CommonActions.setValue(this.courseNameTextField, course.CourseName),
            'SectionName': () => CommonActions.setValue(this.sectionNameTextField, course.SectionName),
            'SubjectArea': () => CommonActions.selectValue(this.subjectAreaSelectField, course.SubjectArea),
            'Level': () => CommonActions.selectValue(this.levelSelectField, course.Level)
        };
        Object.keys(course).forEach(key => {
            courseSteps[key].call();
        });

        this.clickCreateButton();
    }
}

module.exports = Courses;
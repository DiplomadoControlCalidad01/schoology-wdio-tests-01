const CommonActions = require('../core/commonActions');

class EditCourse {

    constructor(){
        this.courseNameTextField = 'input#edit-course-name';
        this.sectionNameTextField = 'input#edit-section-name-1';
        this.subjectAreaDropdown = 'select#edit-subject-area';
        this.levelDropdown = 'select#edit-grade-level-range-start';
    }
    
    fillEditCourseInfoForm(course){
        let courseSteps = {
            'CourseName': () => CommonActions.setValue(this.courseNameTextField, course.CourseName),
            'SectionName': () => CommonActions.setValue(this.sectionNameTextField, course.SectionName),
            'SubjectArea': () => CommonActions.selectValue(this.subjectAreaDropdown, course.SubjectArea),
            'Level': () => CommonActions.selectValue(this.levelDropdown, course.Level)
        };
        Object.keys(course).forEach(key => {
            courseSteps[key].call();
        });
        return this;
    }

    clickSaveButton(){
        CommonActions.click('input#edit-submit');
        return this;
    }

    getCourseNameValue(){
        return CommonActions.getValue(this.courseNameTextField);
    }

    getSectionNameValue(){
        return CommonActions.getValue(this.sectionNameTextField);
    }
}

module.exports = EditCourse;
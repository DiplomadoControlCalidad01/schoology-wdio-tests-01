const CommonActions = require('../core/commonActions');

class EditCourse {

    fillEditCourseInfoForm(course){
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

    clickSaveButton(){
        CommonActions.click('input#edit-submit');
        return this;
    }
}

module.exports = EditCourse;
const CommonActions = require('../core/commonActions');
const EditCourse = require('./editCourse.po');

class CourseDashboard {

    getCourseTitle(){
        return CommonActions.getText(`h2[class='page-title '] a`);
    }

    clickCourseOptions(){
        CommonActions.click(`//span[text()='Course Options']`);
        return this;
    }

    clickEditInfoLink(){
        CommonActions.click(`//a[text()='Edit Info']`);
        return new EditCourse();
    }
}

module.exports = CourseDashboard;
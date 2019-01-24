const CommonActions = require('../core/CommonActions');

class Courses {
    clickCreateCourseButton(){
        CommonActions.click(`//a[text()='Create Course']`);
    }
}

module.exports = Courses;
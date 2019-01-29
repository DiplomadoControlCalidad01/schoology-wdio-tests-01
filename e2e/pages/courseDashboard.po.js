const CommonActions = require('../core/commonActions');

class CourseDashboard {

    getCourseTitle(){
        return CommonActions.getText(`h2[class='page-title '] a`);
    }
}

module.exports = CourseDashboard;
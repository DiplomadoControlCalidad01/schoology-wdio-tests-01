const CommonActions = require('../core/commonActions');

class DeletedCourses{

    isCourseExisting(courseName, sectionName){
        return CommonActions.isExisting(`//div[@class='deleted-course-title' and text()='${courseName} : ${sectionName}']`);
    }
}

module.exports = DeletedCourses;
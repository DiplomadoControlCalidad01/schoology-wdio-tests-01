const CommonActions = require('../core/commonActions');

class DeletedCourses{

    isDeletedCourseExisting(courseName, sectionName){
        return CommonActions.isExisting(`//div[@class='deleted-course-title' and text()='${courseName} : ${sectionName}']`);
    }
}

module.exports = DeletedCourses;
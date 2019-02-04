const CommonActions = require('../core/commonActions');

class DeletedCourses{

    isCourseExisting(courseName, sectionName){
        console.log(`LOCATOR=> //div[@class='deleted-course-title' and text()='${courseName} : ${sectionName}']`)
        return CommonActions.isExisting(`//div[@class='deleted-course-title' and text()='${courseName} : ${sectionName}']`);
    }
}

module.exports = DeletedCourses;
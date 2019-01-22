const CommonActions = require('../core/CommonActions');
const Resources = require('../pages/resources.po');
const Groups = require('../pages/groups.po');
const Courses = require('../pages/courses.po');

class Header {
    navigateTo(item) {
        CommonActions.click(`//div[@id='header']/descendant::*[text()=\'${item}\']`);
        switch (item) {
            case 'Resources':
                return new Resources();
            case 'Groups':
                return new Groups();
            case 'Courses':
                return new Courses();
        }
    }

    clickCourses(){
        return new Courses();
    }

    clickGroups(){
        return new Gr();
    }


}
module.exports = Header;
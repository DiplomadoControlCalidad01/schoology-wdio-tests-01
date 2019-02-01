const CommonActions = require('../core/commonActions');
const Resources = require('../pages/resources.po');
const GroupsPreview = require('./groupsPreview.po');
const Courses = require('../pages/courses.po');

class Header {
    navigateTo(item) {
        CommonActions.click(`//div[@id='header']/descendant::*[text()=\'${item}\']`);
        switch (item) {
            case 'Resources':
                return new Resources();
            case 'Groups':
                return new GroupsPreview();
            case 'Courses':
                this.clickMyCoursesLink();
                return new Courses();
        }
    }

    clickMyCoursesLink(){
        CommonActions.click(`a[href='/courses']`);
    }

    getConfirmationMessage(){
        return CommonActions.getText(`.message-text`);
    }
}
module.exports = Header;
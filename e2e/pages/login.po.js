const CommonActions = require('../core/CommonActions');
const Header = require('../pages/header.po');

class Login {
    setUserNameTextField(userName) {
        CommonActions.setValue('#edit-mail', userName);
    }

    setPasswordTextField(password) {
        CommonActions.setValue('#edit-pass', password);
    }

    clickLoginbuttonn() {
        CommonActions.click('#edit-submit');
    }

    static loginAs(userName, password) {
        let login = new Login();
        CommonActions.waitForVisible('#login-container');
        login.setUserNameTextField(userName);
        login.setPasswordTextField(password);
        login.clickLoginbuttonn();
        return new Header();
    }
}
module.exports = Login;
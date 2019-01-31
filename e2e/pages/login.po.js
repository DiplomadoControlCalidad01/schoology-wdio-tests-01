const CommonActions = require('../core/commonActions');
const Header = require('../pages/header.po');
const env = require('../../environment');

class Login {
    setUserNameTextField(userName) {
        CommonActions.setValue('#edit-mail', userName);
    }

    setPasswordTextField(password) {
        CommonActions.setValue('#edit-pass', password);
    }

    clickLoginButton() {
        CommonActions.click('#edit-submit');
    }

    static loginAs(userName, password) {
        let login = new Login();
        browser.url(env.url);
        CommonActions.waitForVisible('#login-container');
        login.setUserNameTextField(userName);
        login.setPasswordTextField(password);
        login.clickLoginButton();
        return new Header();
    }
}
module.exports = Login;
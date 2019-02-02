const env = require('../../environment');

class CommonActions{
    static waitForVisible(locator) {
        browser.waitForVisible(locator, env.timeout.explicit)
    }

    static setValue(locator, value) {
        this.waitForVisible(locator);
        browser.element(locator).setValue(value);
    }

    static click(locator) {
        this.waitForVisible(locator);
        browser.element(locator).click();
    }

    static selectValue(locator, value){
        this.waitForVisible(locator);
        browser.element(locator).selectByVisibleText(value);
    }

    static getText(locator){
        this.waitForVisible(locator);
        return browser.element(locator).getText();
    }

    static isExisting(locator) {
        return browser.isExisting(locator);
    }
}
module.exports = CommonActions;
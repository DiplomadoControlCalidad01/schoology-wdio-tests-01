const env = require('../../environment');

class CommonActions{
    static waitForVisible(locator) {
        browser.waitForVisible(locator, 30000)
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
        browser.element(locator).selectByValue(value);
    }
}
module.exports = CommonActions;
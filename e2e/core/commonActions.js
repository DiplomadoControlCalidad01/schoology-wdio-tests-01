class CommonActions{
    static setValue(locator, value) {
        browser.waitForVisible(locator, 30000);
        browser.element(locator).setValue(value);
    }

    static click(locator) {
        browser.waitForVisible(locator, 30000);
        browser.element(locator).click();
    }

    static waitForVisible(locator) {
        browser.waitForVisible(locator, 30000)
    }
}
module.exports = CommonActions;
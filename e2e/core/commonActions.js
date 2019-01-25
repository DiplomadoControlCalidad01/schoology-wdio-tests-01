const env = require('../../environment');

class CommonActions{
    static setValue(locator, value) {
        browser.waitForVisible(locator, env.timeout.explicit);
        browser.element(locator).setValue(value);
    }

    static click(locator) {
        browser.waitForVisible(locator, env.timeout.explicit);
        browser.element(locator).click();
    }

    static waitForVisible(locator) {
        browser.waitForVisible(locator, env.timeout.explicit)
    }
}
module.exports = CommonActions;
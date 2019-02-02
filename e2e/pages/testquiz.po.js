const CommonActions = require('../core/commonActions');

class TestQuiz {
    getPageTitle() {
        return CommonActions.getText(`.page-title`);
    }
}

module.exports = TestQuiz;
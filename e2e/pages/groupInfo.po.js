const CommonActions = require('../core/commonActions');
const EditGroupForm = require('./editGroupForm.po');

class GroupInfo {

    editInformation() {
        CommonActions.click(`.left-block-edit`);
        return new EditGroupForm();
    }

    getTitle() {
        return CommonActions.getText('.group-title a');
    }
}
module.exports = GroupInfo;

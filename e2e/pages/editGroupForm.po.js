const CommonActions = require('../core/commonActions');

class EditGroupForm  {
    getName() {
        return CommonActions.getText('#edit-name');
    }
}
module.exports = EditGroupForm;
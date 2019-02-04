const CommonActions = require('../core/commonActions');

class DeletedGroups {

    isDeletedGroupExisting(groupName) {
        return CommonActions.isExisting(`//div[text() = "${groupName}"]`);
    }
}
module.exports = DeletedGroups; 
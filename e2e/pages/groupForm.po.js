const CommonActions = require('../core/commonActions');

class GroupForm {

    fillForm(group){
        const groupSetter = {
            'name': () => CommonActions.setValue('#edit-name', group.name),
            'description': () => CommonActions.setValue('#edit-description', group.description)
        };

        Object
            .keys(group)
            .forEach((field) => {
                groupSetter[field].call();
            });
    }
}
module.exports = GroupForm;
const CommonActions = require('../core/commonActions');

class Resources {
    addResource(resourceName) {
        CommonActions.click('#toolbar-add');
        CommonActions.click('#collection-add-folder a');
        //Should return new instance of resourceName sent
    }
}
module.exports = Resources;
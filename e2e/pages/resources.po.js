const CommonActions = require('../core/CommonActions');

class Resources {
    clickAgregarRecursos() {
        CommonActions.click('#toolbar-add');
    }

    agregarRecurso(resourceName) {
        let resources = new Resources();
        CommonActions.click('#toolbar-add');
        CommonActions.click('#collection-add-folder a');

    }
}
module.exports = Resources;
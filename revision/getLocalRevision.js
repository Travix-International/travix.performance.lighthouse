const { LATEST_REVISION } = require('./revision.constants');
module.exports = (storage) => storage.getItem(LATEST_REVISION);
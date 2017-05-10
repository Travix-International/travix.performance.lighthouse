const {
  LATEST_REVISION
} = require('../config');

/**
 * Returns persisted release key from storage
 *
 * @method getLocalRevision
 * @param {object} storage abstaction => see more ../storage
 * @returns {string?} local file
 * @public
 */
const getLocalRevision = (storage) =>
  storage.getItem(LATEST_REVISION);

module.exports = getLocalRevision;

/**
 * Runs pwMetrics wrapped with credentials
 *
 * @method getStorage
 * @param {string?} folder
 * @returns {object} as LocalStorage
 * @public
 */
const getStorage = ({ folder = 'data', LocalStorage }) => new LocalStorage(folder);

module.exports = getStorage;

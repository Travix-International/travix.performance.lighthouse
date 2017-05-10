/**
 * Returns current revision from release file
 *
 * @method getRevision
 * @param {Object} as JSON {url:{string}, getRelease: {Promise}}
 * @returns {Promise} as JSON {revision: {string}, url:{string}}
 * @public
 */
const getRevision = ({
    url,
    getRelease
  }) =>
  getRelease(url)
  .then(x => ({
    revision: x.REV,
    url
  }));


module.exports = getRevision;

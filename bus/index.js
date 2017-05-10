const {
  getLocalRevision,
  setLocalRevision
} = require('../revision');


/**
 * Activates runner once per revision
 * Updates local revision after runner
 *
 * @method bus
 * @param {string} url
 * @param {string} latest revision
 * @param {Promise} runner
 * @returns {Promise} result from runner | if already run rejects it
 * @public
 */
const bus = ({
  url,
  revision,
  runner
}) => {
  if (revision === getLocalRevision()) {
    return Promise.reject(`Bus already run for revision: ${revision}`);
  }

  return runner({
    url,
    revision
  }).then(setLocalRevision(revision));
}


module.exports = bus;

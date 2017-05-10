const fetch = require('node-fetch');
const URL = require('url');

const {
  RELEASE
} = require('../config');

/**
 * Maps release text to to Json
 *
 * @method toJson
 * @param {string} url
 * @param {string?} clientSecret contains authentication inforation for google cloud
 * @returns {JSON} {'RELEASE':{string}, 'REV': {string}, 'REV-SRC': {string}, DATE: {string}}
 * @private
 */
const toJson = (text) => {
  if (!text) return;
  return text.split(/\r?\n/).reduce(function (m, i) {
    const split = i.split(':');
    const key = split[0];
    const value = split[1];
    m[key] = value.replace(/^\s+|\s+$/g, '');
    return m;
  }, {});
}

/**
 * Get release information from any travix site
 *
 * @method getRelease
 * @param {string} url
 * @param {string?} clientSecret contains authentication inforation for google cloud
 * @returns {Promise} result from pwmetrics
 * @public
 */
const getRelease = (link) =>
  fetch(URL.resolve(link, RELEASE))
  .then(x => x.text())
  .then(toJson);

module.exports = getRelease;

const fs = require('fs');

/**
 * Returns credentials json for google drive
 *
 * @method getCredentials
 * @param {string} file name
 * @returns {Promise} including JSON
 * @public
 */
const getCredentials = (file) => new Promise((resolve, reject) => {
  if (!file) return resolve();

  fs.readFile(file, (err, content) => {
    if (err) {
      return reject(`Error loading client secret file: ${err}`);
    }

    try {
      return resolve(JSON.parse(content));
    } catch (e) {
        return reject(`Error parsing file: ${err}`);
    }
  })
});

module.exports = getCredentials;

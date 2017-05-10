/**
 * Encapsulation and dependency injection
 */

const {
  storage
} = require('../storage');

const {
  getRelease
} = require('../release');

const getRevision = (url) => require('./getRevision')({
  url,
  getRelease
});

const getLocalRevision = () => require('./getLocalRevision')(storage);
const setLocalRevision = (value) => require('./setLocalRevision')(storage, value);


storage;

module.exports = {
  getRevision,
  getLocalRevision,
  setLocalRevision
}

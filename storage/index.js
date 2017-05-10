/**
 * Encapsulation and dependency injection
 */

const LocalStorage = require('node-localstorage').LocalStorage;

const getStorage = (folder) => require('./getStorage')({
  folder,
  LocalStorage
});

module.exports = {
  storage: getStorage()
}

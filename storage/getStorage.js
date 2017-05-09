const LocalStorage = require('node-localstorage').LocalStorage;

const getStorage = (folder = 'data') => new LocalStorage(folder);

module.exports = getStorage;
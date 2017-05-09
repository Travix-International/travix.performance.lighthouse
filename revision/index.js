const { storage } = require('../storage');

const getRevision = require('./getRevision');
const getLocalRevision = () => require('./getLocalRevision')(storage);
const setLocalRevision = (value) => require('./setLocalRevision')(storage, value);


storage;

module.exports = {
    getRevision,
    getLocalRevision,
    setLocalRevision
}
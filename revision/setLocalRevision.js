const { LATEST_REVISION } = require('./revision.constants');

const setLocalRevision = (storage, value) => {
   return new Promise((resolve, reject) => {
       try {
            storage.setItem(LATEST_REVISION, value);
            resolve(value) 
       } catch (e) {
            reject(e);
       }
    }) 
}

module.exports = setLocalRevision;
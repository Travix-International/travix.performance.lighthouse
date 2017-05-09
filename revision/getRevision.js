const { getRelease } = require('../release');

module.exports = (url) => 
    getRelease(url)
    .then(x => ({ revision: x.REV, url }));
const fetch = require('node-fetch');
const URL = require('url');

const toJson = (text) => {
    if (!text) return;
    return text.split(/\r?\n/).reduce(function(m, i){
        const split = i.split(':');
        const key = split[0];
        const value = split[1];
        m[key] = value.replace(/^\s+|\s+$/g,'');
        return m;
    }, {});
}

const getRelease = (link) => 
    fetch(URL.resolve(link, '/.RELEASE'))
        .then(x => x.text())
        .then(toJson);

module.exports = getRelease;



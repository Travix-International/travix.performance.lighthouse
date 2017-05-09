const fs = require('fs');

const getCredentials = (filename = 'client_secret.json') => new Promise((resolve, reject) => {
    fs.readFile(filename, (err, content) => {
        if (err) {
            console.log('Error loading client secret file: ' + err);
            reject('Error loading client secret file: ' + err);
            return;
        }

        return resolve(JSON.parse(content));
    })
}); 

module.exports = getCredentials;

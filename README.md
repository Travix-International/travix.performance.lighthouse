# Release based performance tracking for Travix websites
Analyzes web apps and web pages, collecting modern performance metrics and insights on developer best practices.

## Install
`npm install`

## Run
`npm run start`

## Cloud
Upload metrics into Google Drive

1. Setup Google Developer project and get credentials. https://developers.google.com/drive/v3/web/quickstart/nodejs
2. Save configuration as client_secret.json in the root directory

## How
```javascript
🕸
const url = process.env.URL || 'https://www.cheaptickets.nl';

🚌
const bus = require('./bus');

🏃
const runner = require('./runner');

🔢
const {
  getRevision,
} = require('./revision');

🚀
getRevision(url)
  .then(({
      url,
      revision
    }) =>
    bus({
      url,
      revision,
      runner
    })
  );
```

## Links
* https://developers.google.com/web/tools/lighthouse/
* https://github.com/paulirish/pwmetrics
* https://hackernoon.com/easy-progressive-web-metrics-9afa5ed857c2
  
### TODO:
* Run inside a configurable, scheduled task runner
* Create cloud storage options (Firebase, Amazon etc...)
* Store url with revision in local storage
* TESTS!
* Create default configuration file, more => https://github.com/paulirish/pwmetrics

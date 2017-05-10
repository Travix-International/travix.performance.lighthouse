# Release based performance tracking for travix websites
Analyzes web apps and web pages, collecting modern performance metrics and insights on developer best practices.

## Install
`npm install`

## Uplading to cloud
Upload Lighthouse traces to Google Drive

1. Setup Google Developer project and get credentials. https://developers.google.com/drive/v3/web/quickstart/nodejs
2. Download and rename it as client_secret.json put it to the root

## Run
`URL='https://www.cheaptickets.nl' npm run start`

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
  
### TODO:
1. Run inside a configurable, scheduled task runner
2. Create more cloud storeage options (Firebase, Amazon etc...)
3. Url based release tracking, currently tracking only one
4. TESTS!

// 🕸
const url = process.env.URL || 'https://www.cheaptickets.nl';

// 🚌
const bus = require('./bus');

// 🔢
const {
  getRevision,
} = require('./revision');

// 🏃
const runner = require('./runner');

// 🚀
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

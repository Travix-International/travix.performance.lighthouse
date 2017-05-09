const { getPWAMetrics } = require('./metrics');
const { getCredentials } = require('./authenticate');

const {
    getRevision,
    getLocalRevision,
    setLocalRevision
} = require('./revision');

const url = 'https://www.cheaptickets.nl';

const getPWAMetricsFor = ({ url, revision }) => {
  if (revision !== getLocalRevision()) {
    const trackingURL = `${url}/?performance_tracer=${revision}`;
    
    getCredentials()
      .then(credentials => getPWAMetrics({ url: trackingURL, credentials}))
      .then(setLocalRevision(revision));
  }
}


getRevision(url).then(getPWAMetricsFor);


/**
 * Runs pwMetrics wrapped with credentials
 *
 * @method pwMetricsRunner
 * @param {object} as JSON {url:{string}, revision:{string}, getCredentials:{Promise}, getPWMetrics:{Promise}}
 * @returns {Promise} resolve or reject
 * @public
 */
const pwMetricsRunner = ({
  url,
  revision,
  getCredentials,
  getPWMetrics
}) => {
  const trackingURL = `${url}/?performance_tracer=${revision}`;

  return getCredentials('client_secret.json')
    .then(credentials => getPWMetrics({
      url: trackingURL,
      credentials
    })).catch(e => {
      console.log('Parsing credentials failed, skipping uploading to the cloud...');
      return getPWMetrics({
        url: trackingURL
      })
    });
}

module.exports = pwMetricsRunner;

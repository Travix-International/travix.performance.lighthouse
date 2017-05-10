/**
 * Runs pwMetrics wrapped with credentials
 *
 * @method pwMetricsRunner
 * @param {object} as JSON {url:{string}, revision:{string}, getCredentials:{Promise}, getPWAMetrics:{Promise}}
 * @returns {Promise} resolve or reject
 * @public
 */
const pwMetricsRunner = ({
  url,
  revision,
  getCredentials,
  getPWAMetrics
}) => {
  const trackingURL = `${url}/?performance_tracer=${revision}`;

  return getCredentials('client_secret.json')
    .then(credentials => getPWAMetrics({
      url: trackingURL,
      credentials
    }));
}

module.exports = pwMetricsRunner;

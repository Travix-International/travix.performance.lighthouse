const PWMetrics = require('pwmetrics');

/**
 * Calculates metrics from a rapper of lighthouse => https://github.com/paulirish/pwmetrics
 *
 * @method getPWMetrics
 * @param {string} url
 * @param {string?} clientSecret contains authentication inforation for google cloud
 * @returns {Promise} result from pwmetrics
 * @public
 */
const getPWMetrics = ({
  url,
  clientSecret
}) => new Promise((resolve, reject) => {
  const pwMetrics = new PWMetrics(url, {
    flags: {
      upload: !!clientSecret,
    },
    clientSecret
  });

  pwMetrics.start()
    .then(resolve)
    .catch(reject);
});

module.exports = getPWMetrics;

const PWMetrics = require('pwmetrics');

/**
 * Calculates metrics from a rapper of lighthouse => https://github.com/paulirish/pwmetrics
 *
 * @method getPWAMetrics
 * @param {string} url
 * @param {string?} clientSecret contains authentication inforation for google cloud
 * @returns {Promise} result from pwmetrics
 * @public
 */
const getPWAMetrics = ({
  url,
  clientSecret
}) => new Promise((resolve, reject) => {
  const pwMetrics = new PWMetrics(url, {
    flags: {
      upload: !!clientSecret,
    },
    clientSecret
  });

  return pwMetrics.start();
});

module.exports = getPWAMetrics;

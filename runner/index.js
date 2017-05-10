/**
 * Encapsulation and dependency injection
 */

const {
  getCredentials
} = require('../authenticate');

const {
  getPWAMetrics
} = require('../metrics');

const runner = require('./pwMetricsRunner');

module.exports = ({
  url,
  revision
}) => runner({
  url,
  revision,
  getCredentials,
  getPWAMetrics
})

/**
 * Encapsulation and dependency injection
 */

const {
  getCredentials
} = require('../authenticate');

const {
  getPWMetrics
} = require('../metrics');

const runner = require('./pwMetricsRunner');

module.exports = ({
  url,
  revision
}) => runner({
  url,
  revision,
  getCredentials,
  getPWMetrics
})

'use strict';

exports.__esModule = true;
exports.fetchSSOData = fetchSSOData;

var _web_api = require('../web_api');

var _web_api2 = _interopRequireDefault(_web_api);

var _cache = require('../../utils/cache');

var _cache2 = _interopRequireDefault(_cache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cache = new _cache2.default(function () {
  return _web_api2.default.getSSOData.apply(_web_api2.default, arguments);
});

function fetchSSOData(id, withAD, cb) {
  cache.get(id, withAD, cb);
}

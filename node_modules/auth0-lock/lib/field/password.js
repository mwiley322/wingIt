'use strict';

exports.__esModule = true;
exports.validatePassword = validatePassword;
exports.setPassword = setPassword;

var _passwordSheriff = require('password-sheriff');

var _passwordSheriff2 = _interopRequireDefault(_passwordSheriff);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validatePassword(password, policy) {
  return (0, _passwordSheriff2.default)(policy).check(password);
}

function setPassword(m, password, policy) {
  return (0, _index.setField)(m, 'password', password, validatePassword, policy);
}

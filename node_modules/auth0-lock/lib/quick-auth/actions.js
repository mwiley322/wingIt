'use strict';

exports.__esModule = true;
exports.skipQuickAuth = skipQuickAuth;
exports.logIn = logIn;

var _quick_auth = require('../quick_auth');

var _index = require('../store/index');

var _actions = require('../core/actions');

var _index2 = require('../core/index');

var l = _interopRequireWildcard(_index2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function skipQuickAuth(id) {
  (0, _index.swap)(_index.updateEntity, 'lock', id, _quick_auth.skipQuickAuth, true);
}

function logIn(id, connection, loginHint) {
  var m = (0, _index.read)(_index.getEntity, 'lock', id);
  var connectionScopes = l.auth.connectionScopes(m);
  var scopes = connectionScopes.get(connection.get('name'));
  var params = {
    connection: connection.get('name'),
    connection_scope: scopes ? scopes.toJS() : []
  };

  if (!l.auth.redirect(m) && connection.get('strategy') === 'facebook') {
    params.display = 'popup';
  }
  if (loginHint) {
    params.login_hint = loginHint;
  }
  (0, _actions.logIn)(id, [], params);
}

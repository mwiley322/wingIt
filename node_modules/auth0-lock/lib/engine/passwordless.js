'use strict';

exports.__esModule = true;

var _index = require('../store/index');

var _error_screen = require('../core/error_screen');

var _error_screen2 = _interopRequireDefault(_error_screen);

var _loading_screen = require('../core/loading_screen');

var _loading_screen2 = _interopRequireDefault(_loading_screen);

var _social_or_email_login_screen = require('./passwordless/social_or_email_login_screen');

var _social_or_email_login_screen2 = _interopRequireDefault(_social_or_email_login_screen);

var _social_or_phone_number_login_screen = require('./passwordless/social_or_phone_number_login_screen');

var _social_or_phone_number_login_screen2 = _interopRequireDefault(_social_or_phone_number_login_screen);

var _ask_vcode = require('../connection/passwordless/ask_vcode');

var _ask_vcode2 = _interopRequireDefault(_ask_vcode);

var _index2 = require('../connection/passwordless/index');

var _index3 = require('../connection/social/index');

var _sync = require('../sync');

var _index4 = require('../core/index');

var l = _interopRequireWildcard(_index4);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Passwordless = function () {
  function Passwordless() {
    _classCallCheck(this, Passwordless);
  }

  Passwordless.prototype.didInitialize = function didInitialize(m, opts) {
    m = (0, _index3.initSocial)(m, opts);
    m = (0, _index2.initPasswordless)(m, opts);

    return m;
  };

  Passwordless.prototype.didReceiveClientSettings = function didReceiveClientSettings(m) {
    var anySocialConnection = l.hasSomeConnections(m, 'social');
    var anyPasswordlessConnection = l.hasSomeConnections(m, 'passwordless');

    if (!anySocialConnection && !anyPasswordlessConnection) {
      var error = new Error('At least one email, sms or social connection needs to be available.');
      error.code = 'no_connection';
      m = l.stop(m, error);
    }

    return m;
  };

  Passwordless.prototype.render = function render(m) {
    // TODO: remove the detail about the loading pane being pinned,
    // sticky screens should be handled at the box module.
    if (!(0, _sync.isDone)(m) || m.get('isLoadingPanePinned')) {
      return new _loading_screen2.default();
    }

    if (l.hasStopped(m)) {
      return new _error_screen2.default();
    }

    if ((0, _index2.isEmail)(m)) {
      return (0, _index2.isSendLink)(m) || !(0, _index2.passwordlessStarted)(m) ? new _social_or_email_login_screen2.default() : new _ask_vcode2.default();
    } else {
      return (0, _index2.passwordlessStarted)(m) ? new _ask_vcode2.default() : new _social_or_phone_number_login_screen2.default();
    }

    setTimeout(function () {
      var stopError = new Error('Internal error');
      stopError.code = 'internal_error';
      stopError.description = "Couldn't find a screen to render";
      (0, _index.swap)(_index.updateEntity, 'lock', l.id(m), l.stop, stopError);
    }, 0);

    return new _error_screen2.default();
  };

  return Passwordless;
}();

exports.default = new Passwordless();

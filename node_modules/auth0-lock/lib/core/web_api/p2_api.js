'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _auth0Js = require('auth0-js');

var _auth0Js2 = _interopRequireDefault(_auth0Js);

var _cordova = require('auth0-js/plugins/cordova');

var _cordova2 = _interopRequireDefault(_cordova);

var _index = require('../index');

var l = _interopRequireWildcard(_index);

var _index2 = require('../../store/index');

var _helper = require('./helper');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Auth0APIClient = function () {
  function Auth0APIClient(lockID, clientID, domain, opts) {
    _classCallCheck(this, Auth0APIClient);

    this.lockID = lockID;
    this.client = null;
    this.authOpt = null;

    var default_telemetry = {
      name: 'lock.js',
      version: '10.16.0',
      lib_version: _auth0Js2.default.version
    };

    this.client = new _auth0Js2.default.WebAuth({
      clientID: clientID,
      domain: domain,
      audience: opts.audience,
      redirectUri: opts.redirectUrl,
      responseMode: opts.responseMode,
      responseType: opts.responseType,
      leeway: opts.leeway || 1,
      plugins: [new _cordova2.default()],
      _sendTelemetry: opts._sendTelemetry === false ? false : true,
      _telemetryInfo: opts._telemetryInfo || default_telemetry,
      __tenant: opts.overrides && opts.overrides.__tenant,
      __token_issuer: opts.overrides && opts.overrides.__token_issuer
    });

    this.authOpt = {
      popup: !opts.redirect,
      popupOptions: opts.popupOptions,
      sso: opts.sso,
      nonce: opts.nonce,
      state: opts.state
    };
  }

  Auth0APIClient.prototype.logIn = function logIn(options, authParams, cb) {
    // TODO: for passwordless only, try to clean in auth0.js
    // client._shouldRedirect = redirect || responseType === "code" || !!redirectUrl;
    var f = (0, _helper.loginCallback)(false, cb);
    var loginOptions = (0, _helper.normalizeAuthParams)(_extends({}, options, this.authOpt, authParams));

    if (!options.username && !options.email) {
      if (this.authOpt.popup) {
        this.client.popup.authorize(loginOptions, f);
      } else {
        this.client.authorize(loginOptions, f);
      }
    } else {
      loginOptions.realm = options.connection;
      this.client.client.login(loginOptions, f);
    }
  };

  Auth0APIClient.prototype.logout = function logout(query) {
    this.client.logout(query);
  };

  Auth0APIClient.prototype.signUp = function signUp(options, cb) {
    var _authOpt = this.authOpt,
        popup = _authOpt.popup,
        sso = _authOpt.sso;
    var autoLogin = options.autoLogin;


    delete options.autoLogin;

    this.client.signup(options, function (err, result) {
      return cb(err, result);
    });
  };

  Auth0APIClient.prototype.resetPassword = function resetPassword(options, cb) {
    this.client.changePassword(options, cb);
  };

  Auth0APIClient.prototype.startPasswordless = function startPasswordless(options, cb) {
    this.client.startPasswordless(options, function (err) {
      return cb((0, _helper.normalizeError)(err));
    });
  };

  Auth0APIClient.prototype.parseHash = function parseHash() {
    var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var cb = arguments[1];

    return this.client.parseHash({
      hash: hash,
      nonce: this.authOpt.nonce,
      state: this.authOpt.state
    }, cb);
  };

  Auth0APIClient.prototype.getUserInfo = function getUserInfo(token, callback) {
    return this.client.client.userInfo(token, callback);
  };

  Auth0APIClient.prototype.getProfile = function getProfile(token, callback) {
    var m = (0, _index2.read)(_index2.getEntity, 'lock', this.lockID);
    l.emitUnrecoverableErrorEvent(m, '`getProfile` is deprecated for oidcConformant clients');
  };

  Auth0APIClient.prototype.getSSOData = function getSSOData() {
    var _client$client;

    return (_client$client = this.client.client).getSSOData.apply(_client$client, arguments);
  };

  Auth0APIClient.prototype.getUserCountry = function getUserCountry(cb) {
    return this.client.getUserCountry(cb);
  };

  return Auth0APIClient;
}();

exports.default = Auth0APIClient;

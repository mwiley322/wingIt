'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Auth0LockPasswordless from './passwordless';

if (typeof global.window.define == 'function' && global.window.define.amd) {
  global.window.define('auth0Lock', function () {
    return _index2.default;
  });
  // global.window.define('auth0LockPasswordless', function () { return Auth0LockPasswordless; });
} else if (global.window) {
  global.window.Auth0Lock = _index2.default;
  // global.window.Auth0LockPasswordless = Auth0LockPasswordless;
} /*
   *
   * This is used to build the bundle with browserify.
   *
   * The bundle is used by people who doesn't use browserify.
   * Those who use browserify will install with npm and require the module,
   * the package.json file points to index.js.
   */

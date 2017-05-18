'use strict';

jest.mock('auth0-js');

var getClient = function getClient() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var lockId = 'lockId';
  var clientId = 'cid';
  var domain = 'domain';
  var Auth0APIClient = require('core/web_api/p2_api').default;
  var client = new Auth0APIClient(lockId, clientId, domain, options);
  client.client.popup = {
    authorize: jest.fn()
  };
  client.client.client = {
    login: jest.fn()
  };
  return client;
};

var getAuth0ClientMock = function getAuth0ClientMock() {
  return require('auth0-js');
};

describe('Auth0APIClient', function () {
  beforeEach(function () {
    jest.resetModules();
  });
  describe('logIn', function () {
    var assertCallWithCallback = function assertCallWithCallback(mock, callbackFunction) {
      expect(mock.calls.length).toBe(1);
      expect(mock.calls[0][0]).toMatchSnapshot();
      mock.calls[0][1]();
      expect(callbackFunction.mock.calls.length).toBe(1);
    };
    describe('with social/enterprise (without username and email)', function () {
      it('should call authorize when redirect===true', function () {
        var client = getClient({
          redirect: true
        });
        var callback = jest.fn();
        client.logIn({}, {}, callback);
        var mock = getAuth0ClientMock();
        var authorizeMock = mock.WebAuth.mock.instances[0].authorize.mock;
        assertCallWithCallback(authorizeMock, callback);
      });
      it('should call popup.authorize when redirect===false', function () {
        var client = getClient({
          redirect: false
        });
        var callback = jest.fn();
        client.logIn({}, {}, callback);
        var mock = getAuth0ClientMock();
        var authorizeMock = mock.WebAuth.mock.instances[0].popup.authorize.mock;
        assertCallWithCallback(authorizeMock, callback);
      });
    });
    describe('with credentials', function () {
      it('should call client.login', function () {
        var client = getClient();
        var callback = jest.fn();
        client.logIn({ username: 'foo' }, {}, callback);
        var mock = getAuth0ClientMock();
        var loginMock = mock.WebAuth.mock.instances[0].client.login.mock;
        assertCallWithCallback(loginMock, callback);
      });
    });
  });
});

'use strict';

jest.mock('auth0-js');

var getClient = function getClient(options) {
  var clientId = 'cid';
  var domain = 'domain';
  var Auth0LegacyAPIClient = require('core/web_api/legacy_api').default;
  var client = new Auth0LegacyAPIClient(clientId, domain, options);
  client.client.popup = {
    authorize: jest.fn(),
    loginWithCredentials: jest.fn()
  };
  client.client.client = {
    loginWithResourceOwner: jest.fn()
  };
  client.client.redirect = {
    loginWithCredentials: jest.fn()
  };
  client.client.transactionManager = {
    getStoredTransaction: jest.fn()
  };
  return client;
};

var getAuth0ClientMock = function getAuth0ClientMock() {
  return require('auth0-js');
};

describe('Auth0LegacyAPIClient', function () {
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

    var assertMethodCall = function assertMethodCall(method) {
      expect(method.calls.length).toBe(1);
      expect(method.calls[0][0]).toMatchSnapshot();
    };

    var assertCallbackIsCalledOnce = function assertCallbackIsCalledOnce(callback, method) {
      method.calls[0][1]();
      expect(callback.mock.calls.length).toBe(1);
    };

    var callback;

    beforeEach(function () {
      callback = jest.fn();
    });

    describe('with social/enterprise (without username and email)', function () {
      var redirectAuthorize = function redirectAuthorize() {
        var mock = getAuth0ClientMock();
        return mock.WebAuth.mock.instances[0].authorize.mock;
      };

      var popupAuthorize = function popupAuthorize() {
        var mock = getAuth0ClientMock();
        return mock.WebAuth.mock.instances[0].popup.authorize.mock;
      };

      it('should call authorize when redirect===true', function () {
        var client = getClient({
          redirect: true
        });
        client.logIn({}, {}, callback);
        assertMethodCall(redirectAuthorize());
        assertCallbackIsCalledOnce(callback, redirectAuthorize());
      });

      it('should call popup.authorize when redirect===false', function () {
        var client = getClient({
          redirect: false
        });
        client.logIn({}, {}, callback);
        assertMethodCall(popupAuthorize());
        assertCallbackIsCalledOnce(callback, popupAuthorize());
      });

      it('should call popup.authorize with additional authParams', function () {
        var client = getClient({
          redirect: false
        });
        client.logIn({}, { scope: 'openid offline_access read:users', audience: 'https://mysite.com/api' }, callback);
        assertMethodCall(popupAuthorize());
        assertCallbackIsCalledOnce(callback, popupAuthorize());
      });
    });

    describe('with sso and redirect === false', function () {
      it('should call loginWithResourceOwner', function () {
        var client = getClient({
          sso: false,
          redirect: false
        });
        client.logIn({ username: 'foo' }, {}, callback);
        var mock = getAuth0ClientMock();
        var loginWithResourceOwnerMock = mock.WebAuth.mock.instances[0].client.loginWithResourceOwner.mock;
        assertMethodCall(loginWithResourceOwnerMock);
        assertCallbackIsCalledOnce(callback, loginWithResourceOwnerMock);
      });
    });

    describe('with credentials', function () {
      var redirectLoginWithCredentials = function redirectLoginWithCredentials() {
        var mock = getAuth0ClientMock();
        return mock.WebAuth.mock.instances[0].redirect.loginWithCredentials.mock;
      };

      var popupLoginWithCredentials = function popupLoginWithCredentials() {
        var mock = getAuth0ClientMock();
        return mock.WebAuth.mock.instances[0].popup.loginWithCredentials.mock;
      };

      it('should call loginWithCredentials', function () {
        var client = getClient({
          redirect: true,
          sso: true
        });
        client.logIn({ username: 'foo' }, {}, callback);
        assertMethodCall(redirectLoginWithCredentials());
        assertCallbackIsCalledOnce(callback, redirectLoginWithCredentials());
      });

      it('should call loginWithCredentials with auth params', function () {
        var client = getClient({
          redirect: true,
          sso: true
        });
        client.logIn({ username: 'foo' }, { scope: 'openid offline_access write:users', audience: 'https://mysites.com/api' }, callback);
        assertMethodCall(redirectLoginWithCredentials());
        assertCallbackIsCalledOnce(callback, redirectLoginWithCredentials());
      });

      it('should call popup.authorize when redirect===false', function () {
        var client = getClient({
          redirect: false,
          sso: true
        });
        client.logIn({ username: 'foo' }, {}, callback);
        assertMethodCall(popupLoginWithCredentials());
        assertCallbackIsCalledOnce(callback, popupLoginWithCredentials());
      });
    });
  });

  describe('parseHash', function () {
    it('should parse correct hash', function () {
      var jwt = require('jsonwebtoken');
      var client = getClient({
        redirect: false
      });
      var token = jwt.sign({ aud: client.clientID, iss: 'https://' + client.domain + '/' }, 'someSecret', { expiresIn: '30m' });
      var payload = jwt.decode(token);
      var callback = jest.fn();

      client.parseHash('#access_token=aToken&id_token=' + token + '&refresh_token=rToken&state=/path%3Fone%3Dtwo%26three%3D3%234', callback);
      expect(callback).toHaveBeenCalled();
      expect(callback).toHaveBeenCalledWith(null, {
        accessToken: 'aToken',
        idToken: token,
        idTokenPayload: payload,
        refreshToken: 'rToken',
        state: '/path?one=two&three=3#4'
      });
    });
  });
});

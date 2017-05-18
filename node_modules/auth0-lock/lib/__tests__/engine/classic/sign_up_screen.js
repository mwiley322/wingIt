'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _testUtils = require('testUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('engine/classic/sign_up_pane', function () {
  return (0, _testUtils.mockComponent)('sign_up_pane');
});
jest.mock('core/pane_separator', function () {
  return (0, _testUtils.mockComponent)('pane_separator');
});
jest.mock('connection/database/sign_up_terms', function () {
  return (0, _testUtils.mockComponent)('sign_up_terms');
});
jest.mock('field/social/social_buttons_pane', function () {
  return (0, _testUtils.mockComponent)('social_buttons_pane');
});
jest.mock('connection/database/login_sign_up_tabs', function () {
  return (0, _testUtils.mockComponent)('login_sign_up_tabs');
});
jest.mock('connection/enterprise/single_sign_on_notice', function () {
  return (0, _testUtils.mockComponent)('single_sign_on_notice');
});

var getComponent = function getComponent() {
  var SignUpScreen = require('engine/classic/sign_up_screen').default;
  var screen = new SignUpScreen();
  return screen.render();
};

describe('SignUpScreen', function () {
  beforeEach(function () {
    jest.resetModules();

    jest.mock('connection/database/index', function () {
      return {
        termsAccepted: function termsAccepted() {
          return true;
        },
        hasScreen: function hasScreen() {
          return false;
        },
        mustAcceptTerms: function mustAcceptTerms() {
          return false;
        }
      };
    });

    jest.mock('connection/database/actions', function () {
      return {
        signUp: jest.fn(),
        toggleTermsAcceptance: jest.fn()
      };
    });
    jest.mock('engine/classic', function () {
      return {
        hasOnlyClassicConnections: function hasOnlyClassicConnections() {
          return false;
        },
        isSSOEnabled: function isSSOEnabled() {
          return false;
        },
        useBigSocialButtons: function useBigSocialButtons() {
          return false;
        }
      };
    });
    jest.mock('core/signed_in_confirmation', function () {
      return {
        renderSignedInConfirmation: jest.fn()
      };
    });
    jest.mock('connection/database/signed_up_confirmation', function () {
      return {
        renderSignedUpConfirmation: jest.fn()
      };
    });

    jest.mock('field/index', function () {
      return {
        renderOptionSelection: function renderOptionSelection() {
          return false;
        }
      };
    });

    jest.mock('connection/enterprise/actions', function () {
      return {
        logIn: jest.fn()
      };
    });

    jest.mock('i18n', function () {
      return { str: function str(_, keys) {
          return keys.join(',');
        } };
    });

    jest.mock('core/index', function () {
      return {
        hasSomeConnections: function hasSomeConnections() {
          return false;
        },
        id: function id() {
          return 'id';
        }
      };
    });
  });
  var defaultProps = {
    i18n: {
      str: function str() {
        for (var _len = arguments.length, keys = Array(_len), _key = 0; _key < _len; _key++) {
          keys[_key] = arguments[_key];
        }

        return keys.join(',');
      },
      group: function group() {
        for (var _len2 = arguments.length, keys = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          keys[_key2] = arguments[_key2];
        }

        return keys.join(',');
      },
      html: function html() {
        for (var _len3 = arguments.length, keys = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          keys[_key3] = arguments[_key3];
        }

        return keys.join(',');
      }
    },
    model: 'model'
  };
  it('renders empty div by default', function () {
    var Component = getComponent();

    (0, _testUtils.expectComponent)(_react2.default.createElement(Component, defaultProps)).toMatchSnapshot();
  });
  it('renders SocialButtonsPane when has social connections', function () {
    require('core/index').hasSomeConnections = function (m, connection) {
      return connection === 'social';
    };
    var Component = getComponent();

    (0, _testUtils.expectComponent)(_react2.default.createElement(Component, defaultProps)).toMatchSnapshot();
  });
  it('disables SocialButtonsPane when terms were not accepted', function () {
    require('core/index').hasSomeConnections = function (m, connection) {
      return connection === 'social';
    };
    require('connection/database/index').termsAccepted = function () {
      return false;
    };
    var Component = getComponent();

    (0, _testUtils.expectComponent)(_react2.default.createElement(Component, defaultProps)).toMatchSnapshot();
  });
  it('renders SingleSignOnNotice when SSO is enabled and has screen login', function () {
    require('engine/classic').isSSOEnabled = function () {
      return true;
    };
    require('connection/database/index').hasScreen = function (m, screenName) {
      return screenName === 'login';
    };

    var Component = getComponent();

    (0, _testUtils.expectComponent)(_react2.default.createElement(Component, defaultProps)).toMatchSnapshot();
  });
  it('renders LoginSignUpTabs SSO is disabled and has screen login', function () {
    require('connection/database/index').hasScreen = function (m, screenName) {
      return screenName === 'login';
    };
    var Component = getComponent();

    (0, _testUtils.expectComponent)(_react2.default.createElement(Component, defaultProps)).toMatchSnapshot();
  });
  describe('renders SignUpPane', function () {
    it('when has database connection', function () {
      require('core/index').hasSomeConnections = function (m, connection) {
        return connection === 'database';
      };
      var Component = getComponent();

      (0, _testUtils.expectComponent)(_react2.default.createElement(Component, defaultProps)).toMatchSnapshot();
    });
    it('when has enterprise connection', function () {
      require('core/index').hasSomeConnections = function (m, connection) {
        return connection === 'enterprise';
      };
      var Component = getComponent();

      (0, _testUtils.expectComponent)(_react2.default.createElement(Component, defaultProps)).toMatchSnapshot();
    });
  });
});

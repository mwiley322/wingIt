'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _testUtils = require('testUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('ui/input/password_input', function () {
  return (0, _testUtils.mockComponent)('password_input');
});

var getComponent = function getComponent() {
  return require('field/password/password_pane').default;
};

describe('PasswordPane', function () {
  var defaultProps = {
    i18n: {
      str: function str() {
        for (var _len = arguments.length, keys = Array(_len), _key = 0; _key < _len; _key++) {
          keys[_key] = arguments[_key];
        }

        return keys.join(',');
      }
    },
    lock: {},
    placeholder: 'placeholder',
    policy: 'policy',
    strengthMessages: {}
  };

  beforeEach(function () {
    jest.resetModules();

    jest.mock('field/index', function () {
      return {
        getFieldValue: function getFieldValue() {
          return 'password';
        },
        isFieldVisiblyInvalid: function isFieldVisiblyInvalid() {
          return true;
        }
      };
    });

    jest.mock('field/password', function () {
      return {
        setPassword: 'setPassword'
      };
    });

    jest.mock('core/index', function () {
      return {
        id: function id() {
          return 1;
        },
        submitting: function submitting() {
          return false;
        },
        ui: {
          avatar: function avatar() {
            return false;
          }
        }
      };
    });

    jest.mock('store/index', function () {
      return {
        swap: jest.fn(),
        updateEntity: 'updateEntity'
      };
    });
  });

  it('renders correctly', function () {
    var PasswordPane = getComponent();
    (0, _testUtils.expectComponent)(_react2.default.createElement(PasswordPane, defaultProps)).toMatchSnapshot();
  });
  it('disables input when submitting', function () {
    require('core/index').submitting = function () {
      return true;
    };
    var PasswordPane = getComponent();

    (0, _testUtils.expectComponent)(_react2.default.createElement(PasswordPane, defaultProps)).toMatchSnapshot();
  });
  it('sets isValid as true when `isFieldVisiblyInvalid` is false', function () {
    require('field/index').isFieldVisiblyInvalid = function () {
      return false;
    };
    var PasswordPane = getComponent();

    (0, _testUtils.expectComponent)(_react2.default.createElement(PasswordPane, defaultProps)).toMatchSnapshot();
  });
  it('calls `swap` onChange', function () {
    var PasswordPane = getComponent();

    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(PasswordPane, defaultProps));
    var props = (0, _testUtils.extractPropsFromWrapper)(wrapper);
    props.onChange({ target: { value: 'newUser' } });

    var mock = require('store/index').swap.mock;

    expect(mock.calls.length).toBe(1);
    expect(mock.calls[0]).toMatchSnapshot();
  });
});

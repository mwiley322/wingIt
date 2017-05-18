'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _password_input = require('../../ui/input/password_input');

var _password_input2 = _interopRequireDefault(_password_input);

var _index = require('../index');

var c = _interopRequireWildcard(_index);

var _index2 = require('../../store/index');

var _index3 = require('../../core/index');

var l = _interopRequireWildcard(_index3);

var _password = require('../password');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PasswordPane = function (_React$Component) {
  _inherits(PasswordPane, _React$Component);

  function PasswordPane() {
    _classCallCheck(this, PasswordPane);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  PasswordPane.prototype.handleChange = function handleChange(e) {
    var _props = this.props,
        lock = _props.lock,
        policy = _props.policy;

    (0, _index2.swap)(_index2.updateEntity, 'lock', l.id(lock), _password.setPassword, e.target.value, policy);
  };

  PasswordPane.prototype.render = function render() {
    var _props2 = this.props,
        i18n = _props2.i18n,
        lock = _props2.lock,
        placeholder = _props2.placeholder,
        policy = _props2.policy,
        strengthMessages = _props2.strengthMessages;


    return _react2.default.createElement(_password_input2.default, {
      value: c.getFieldValue(lock, 'password'),
      invalidHint: i18n.str('blankErrorHint'),
      isValid: !c.isFieldVisiblyInvalid(lock, 'password'),
      onChange: this.handleChange.bind(this),
      placeholder: placeholder,
      strengthMessages: strengthMessages,
      disabled: l.submitting(lock),
      policy: policy
    });
  };

  return PasswordPane;
}(_react2.default.Component);

exports.default = PasswordPane;


PasswordPane.propTypes = {
  i18n: _propTypes2.default.object.isRequired,
  lock: _propTypes2.default.object.isRequired,
  onChange: _propTypes2.default.func,
  placeholder: _propTypes2.default.string.isRequired,
  policy: _propTypes2.default.string,
  strengthMessages: _propTypes2.default.object
};

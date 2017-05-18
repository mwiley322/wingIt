'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('./button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfirmationPane = function ConfirmationPane(_ref) {
  var backHandler = _ref.backHandler,
      children = _ref.children,
      closeHandler = _ref.closeHandler,
      svg = _ref.svg;
  return _react2.default.createElement(
    'div',
    { className: 'auth0-lock-confirmation' },
    closeHandler && _react2.default.createElement(_button.CloseButton, { onClick: closeHandler }),
    backHandler && _react2.default.createElement(_button.BackButton, { onClick: backHandler }),
    _react2.default.createElement(
      'div',
      { className: 'auth0-lock-confirmation-content' },
      _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: svg } }),
      children
    )
  );
};

ConfirmationPane.propTypes = {
  backHandler: _propTypes2.default.func,
  closeHandler: _propTypes2.default.func,
  children: _propTypes2.default.oneOfType([_propTypes2.default.element.isRequired, _propTypes2.default.arrayOf(_propTypes2.default.element).isRequired]),
  svg: _propTypes2.default.string.isRequired
};

exports.default = ConfirmationPane;

'use strict';

exports.__esModule = true;
exports.extractPropsFromWrapper = exports.mockComponent = exports.expectComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // eslint-disable-line


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expectComponent = exports.expectComponent = function expectComponent(children) {
  var component = _reactTestRenderer2.default.create(children);
  return expect(component);
};

var addDataToProps = function addDataToProps(props) {
  var returnedProps = {};
  Object.keys(props).forEach(function (k) {
    return returnedProps['data-' + k] = props[k];
  });
  return returnedProps;
};

var removeDataFromProps = function removeDataFromProps(props) {
  var returnedProps = {};
  Object.keys(props).forEach(function (k) {
    return returnedProps[k.replace('data-', '')] = props[k];
  });
  return returnedProps;
};

var mockComponent = exports.mockComponent = function mockComponent(type) {
  var domElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'div';
  return function (props) {
    return _react2.default.createElement(domElement, _extends({
      'data-__type': type
    }, addDataToProps(props)));
  };
};

var extractPropsFromWrapper = exports.extractPropsFromWrapper = function extractPropsFromWrapper(wrapper) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return removeDataFromProps(wrapper.find('div').at(index).props());
};

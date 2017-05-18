'use strict';

exports.__esModule = true;
exports.parseUrl = parseUrl;
function parseUrl(str) {
  var parser = global.document.createElement('a');
  parser.href = str;
  return parser;
}

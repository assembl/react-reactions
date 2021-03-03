'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlackSelectorCSS = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlackSelectorCSS = exports.SlackSelectorCSS = function SlackSelectorCSS() {
  return _react2.default.createElement('style', {
    dangerouslySetInnerHTML: { __html: '\n\n        @font-face {\n          font-family: Slack;\n          src: url(fonts/slack-icons-Regular.eot);\n          src: url(fonts/slack-icons-Regular.eot?#iefix) format(\'embedded-opentype\'),\n               url(fonts/slack-icons-Regular.woff) format(\'woff\'),\n               url(fonts/slack-icons-Regular.ttf) format(\'truetype\')\n        }\n        .frame::-webkit-scrollbar {\n            -webkit-appearance: none;\n        }\n\n        .frame::-webkit-scrollbar:vertical {\n            width: 8px;\n        }\n\n        .frame::-webkit-scrollbar-thumb {\n            border-radius: 4px;\n            background-color: #D9D9DE;\n            box-shadow: 0 0 0 3px #fff;\n            height: 30px;\n        }\n\n        .frame::-webkit-scrollbar-track {\n            background-color: #F3F3F3;\n            border-radius: 4px;\n        }\n\n      ' }
  });
};

exports.default = SlackSelectorCSS;
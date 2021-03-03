'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlackSelector = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _SlackSelectorCSS = require('./SlackSelectorCSS');

var _SlackSelectorCSS2 = _interopRequireDefault(_SlackSelectorCSS);

var _SlackSelectorHeader = require('./SlackSelectorHeader');

var _SlackSelectorHeader2 = _interopRequireDefault(_SlackSelectorHeader);

var _SlackSelectorItems = require('./SlackSelectorItems');

var _SlackSelectorItems2 = _interopRequireDefault(_SlackSelectorItems);

var _SlackSelectorFooter = require('./SlackSelectorFooter');

var _SlackSelectorFooter2 = _interopRequireDefault(_SlackSelectorFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlackSelector = exports.SlackSelector = function SlackSelector(_ref) {
  var active = _ref.active,
      scrollHeight = _ref.scrollHeight,
      frequent = _ref.frequent,
      removeEmojis = _ref.removeEmojis,
      onSelect = _ref.onSelect;

  var styles = (0, _reactcss2.default)({
    'default': {
      menu: {
        fontFamily: '"Helvetica Neue",Helvetica,"Segoe UI",Tahoma,Arial,sans-serif',
        width: '358px',
        color: '#555459',
        fontSize: '.95rem',
        background: '#f7f7f7',
        lineHeight: '1rem',
        boxShadow: '0 5px 10px rgba(0,0,0,.12)',
        borderRadius: '6px',
        border: '1px solid rgba(0,0,0,.15)'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.menu },
    _react2.default.createElement(_SlackSelectorCSS2.default, null),
    _react2.default.createElement(_SlackSelectorHeader2.default, { active: active }),
    _react2.default.createElement(_SlackSelectorItems2.default, {
      scrollHeight: scrollHeight,
      removeEmojis: removeEmojis,
      frequent: frequent,
      onSelect: onSelect
    }),
    _react2.default.createElement(_SlackSelectorFooter2.default, { onSelect: onSelect })
  );
};

SlackSelector.defaultProps = {
  active: 'mine',
  scrollHeight: '270px',
  removeEmojis: ['🙂', '🙃', '☺️', '🤑', '🤓', '🤗', '🙄', '🤔', '🙁', '☹️', '🤐', '🤒', '🤕', '🤖'],
  frequent: ['👍', '🐉', '🙌', '🗿', '😊', '🐬', '😹', '👻', '🚀', '🚁', '🏇', '🇨🇦']
};

exports.default = SlackSelector;
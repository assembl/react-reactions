'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GithubSelectorEmoji = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _active = require('../../helpers/active');

var _active2 = _interopRequireDefault(_active);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GithubSelectorEmoji = exports.GithubSelectorEmoji = function GithubSelectorEmoji(_ref) {
  var onSelect = _ref.onSelect,
      shortcode = _ref.shortcode,
      hover = _ref.hover,
      active = _ref.active;

  var styles = (0, _reactcss2.default)({
    'default': {
      wrap: {
        padding: '8px 0'
      },
      emoji: {
        width: '34px',
        textAlign: 'center',
        lineHeight: '29px',
        fontSize: '21px',
        fontFamily: '"Apple Color Emoji", "Segoe UI", "Segoe UI Emoji", "Segoe UI Symbol"',
        cursor: 'pointer',

        transform: 'scale(1)',
        transition: 'transform 0.15s cubic-bezier(0.2, 0, 0.13, 2)'
      }
    },
    'hover': {
      emoji: {
        transform: 'scale(1.2)'
      }
    },
    'active': {
      wrap: {
        backgroundColor: '#f2f8fa'
      }
    }
  }, { hover: hover, active: active });

  var handleClick = function handleClick() {
    onSelect(shortcode);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.wrap, onClick: handleClick },
    _react2.default.createElement(
      'div',
      { style: styles.emoji },
      shortcode
    )
  );
}; /* eslint-disable no-shadow */

exports.default = (0, _reactcss.hover)((0, _active2.default)(GithubSelectorEmoji));
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlackSelectorSectionEmoji = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-shadow */

var SlackSelectorSectionEmoji = exports.SlackSelectorSectionEmoji = function SlackSelectorSectionEmoji(_ref) {
  var hoverColor = _ref.hoverColor,
      onSelect = _ref.onSelect,
      emoji = _ref.emoji,
      hover = _ref.hover;

  var styles = (0, _reactcss2.default)({
    'default': {
      wrap: {
        width: '36px',
        height: '32px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 1px 1px 0',
        borderRadius: '6px',
        cursor: 'pointer',

        transition: 'background .15s ease-out 50ms'
      },
      emoji: {
        fontSize: '22px',
        width: '22px',
        height: '22px',
        lineHeight: '26px'
      }
    },
    'hover': {
      wrap: {
        background: hoverColor
      }
    }
  }, { hover: hover });

  var handleClick = function handleClick() {
    onSelect(emoji);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.wrap, onClick: handleClick },
    _react2.default.createElement(
      'div',
      { style: styles.emoji },
      emoji
    )
  );
};

exports.default = (0, _reactcss.hover)(SlackSelectorSectionEmoji);
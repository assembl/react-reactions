'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlackSelectorHeaderTab = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-shadow */

var SlackSelectorHeaderTab = exports.SlackSelectorHeaderTab = function SlackSelectorHeaderTab(_ref) {
  var hover = _ref.hover,
      onClick = _ref.onClick,
      id = _ref.id,
      icon = _ref.icon,
      active = _ref.active;

  var styles = (0, _reactcss2.default)({
    'default': {
      tab: {
        color: '#9e9ea6',
        padding: '5px 8px 7px',
        borderRadius: '6px 6px 0 0',
        marginRight: '1px',
        borderBottom: '3px solid tranlsparent',
        cursor: 'pointer'
      },
      icon: {
        width: '20px',
        height: '18px',
        fontFamily: 'Slack',
        fontSize: '20px',
        WebkitFontSmoothing: 'antialiased'
      }
    },
    'hover': {
      tab: {
        color: '#555459'
      }
    },
    'active': {
      tab: {
        color: '#9e9ea6',
        borderBottom: '3px solid #2ab27b'
      }
    }
  }, { hover: hover, active: active });

  var handleClick = function handleClick() {
    onClick && onClick(id);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.tab, onClick: handleClick },
    _react2.default.createElement(
      'div',
      { style: styles.icon },
      icon
    )
  );
};

exports.default = (0, _reactcss.hover)(SlackSelectorHeaderTab);
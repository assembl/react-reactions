'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlackCounterGroup = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _strings = require('../../helpers/strings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlackCounterGroup = exports.SlackCounterGroup = function SlackCounterGroup(_ref) {
  var hover = _ref.hover,
      onSelect = _ref.onSelect,
      emoji = _ref.emoji,
      count = _ref.count,
      names = _ref.names,
      active = _ref.active;

  var styles = (0, _reactcss2.default)({
    'default': {
      group: {
        height: '19px',
        paddingTop: '1px',
        paddingLeft: '3px',
        paddingRight: '4px',
        border: '1px solid #E8E8E8',
        background: '#fff',
        fontSize: '11px',
        color: '#999',
        fontWeight: '500',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        cursor: 'pointer',
        borderRadius: '5px'
      },
      emoji: {
        fontSize: '16px',
        marginTop: '1px',
        paddingRight: '3px'
      },
      tooltip: {
        maxWidth: '250px',
        wordBreak: 'break-word',
        wordWrap: 'normal',
        whiteSpace: 'nowrap',
        font: 'normal normal 11px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI",\n          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        color: '#fff',
        background: 'rgba(0,0,0,0.8)',
        borderRadius: '3px',
        padding: '5px 8px',
        position: 'absolute',
        bottom: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        marginBottom: '4px',

        opacity: '0',
        transition: 'opacity 0.1s ease-in-out'
      }
    },
    'hover': {
      tooltip: {
        opacity: '1'
      }
    },
    'active': {
      group: {
        background: '#F4FAFF',
        border: '1px solid #BBE1FF'
      }
    },
    'no-names': {
      emoji: {
        paddingRight: '0'
      }
    }
  }, { hover: hover, 'active': active || hover, 'no-names': !names });

  var handleClick = function handleClick() {
    onSelect && onSelect(emoji);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.group, onClick: handleClick },
    _react2.default.createElement(
      'span',
      { style: styles.emoji },
      emoji
    ),
    ' ',
    count,
    names ? _react2.default.createElement(
      'div',
      { style: styles.tooltip },
      (0, _strings.listOfNames)(names)
    ) : null
  );
}; /* eslint-disable no-shadow */

exports.default = (0, _reactcss.hover)(SlackCounterGroup);
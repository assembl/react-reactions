'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GithubCounterGroup = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _strings = require('../../helpers/strings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GithubCounterGroup = exports.GithubCounterGroup = function GithubCounterGroup(_ref) {
  var hover = _ref.hover,
      active = _ref.active,
      emoji = _ref.emoji,
      count = _ref.count,
      onSelect = _ref.onSelect,
      names = _ref.names;

  var styles = (0, _reactcss2.default)({
    'default': {
      group: {
        width: '35px',
        height: '20px',
        padding: '8px 15px',
        borderRight: '1px solid #ddd',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica',
        fontSize: '14px',
        color: '#3D76C2',
        fontWeight: '500',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        cursor: 'pointer',
        borderRadius: '3px 0 0 3px'
      },
      emoji: {
        fontSize: '21px',
        marginTop: '1px'
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
        top: '100%',
        left: '15px',
        marginTop: '4px',

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
        background: '#f2f8fa'
      }
    }
  }, { hover: hover, active: active });

  var handleClick = function handleClick() {
    onSelect(emoji);
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
    _react2.default.createElement(
      'div',
      { style: styles.tooltip },
      (0, _strings.listOfNames)(names)
    )
  );
}; /* eslint-disable no-shadow */

exports.default = (0, _reactcss.hover)(GithubCounterGroup);
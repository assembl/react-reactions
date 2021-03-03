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
  var icon = _ref.icon,
      label = _ref.label,
      onSelect = _ref.onSelect,
      hover = _ref.hover;

  var styles = (0, _reactcss2.default)({
    'default': {
      wrap: {
        padding: '5px',
        position: 'relative'
      },
      icon: {
        paddingBottom: '100%',
        backgroundImage: 'url(' + icon + ')',
        backgroundSize: '100% 100%',
        transformOrigin: 'bottom',
        cursor: 'pointer',

        transition: '200ms transform cubic-bezier(0.23, 1, 0.32, 1)'
      },
      label: {
        position: 'absolute',
        top: '-22px',
        background: 'rgba(0,0,0,.8)',
        borderRadius: '14px',
        color: '#fff',
        fontSize: '11px',
        padding: '4px 7px 3px',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        left: '50%',
        transform: 'translateX(-50%)',
        transition: '200ms transform cubic-bezier(0.23, 1, 0.32, 1)',
        opacity: '0'
      }
    },
    'hover': {
      icon: {
        transform: 'scale(1.3)'
      },
      label: {
        transform: 'translateX(-50%) translateY(-10px)',
        opacity: '1'
      }
    }
  }, { hover: hover });

  var handleClick = function handleClick() {
    onSelect && onSelect(label);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.wrap },
    _react2.default.createElement(
      'div',
      { style: styles.label },
      label
    ),
    _react2.default.createElement('div', { style: styles.icon, onClick: handleClick })
  );
}; /* eslint-disable no-shadow */

exports.default = (0, _reactcss.hover)((0, _active2.default)(GithubSelectorEmoji));
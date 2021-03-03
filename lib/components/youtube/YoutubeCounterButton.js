'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YoutubeCounterButton = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-shadow */

var YoutubeCounterButton = exports.YoutubeCounterButton = function YoutubeCounterButton(_ref) {
  var position = _ref.position,
      number = _ref.number,
      hover = _ref.hover,
      tooltip = _ref.tooltip,
      onClick = _ref.onClick,
      active = _ref.active,
      activeColor = _ref.activeColor;

  var styles = (0, _reactcss2.default)({
    'default': {
      button: {
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Roboto,arial,sans-serif',
        fontSize: '11px',
        opacity: '0.5',
        cursor: 'pointer',
        position: 'relative'
      },
      icon: {
        background: 'no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-2x-vflaXbyPz.webp) ' + position, // eslint-disable-line
        backgroundSize: '573px 310px',
        width: '20px',
        height: '20px',
        marginRight: '6px'
      },
      tooltip: {
        color: '#fff',
        background: 'rgba(0,0,0,0.8)',
        borderRadius: '3px',
        padding: '5px 8px',
        position: 'absolute',
        bottom: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        marginBottom: '4px',
        whiteSpace: 'nowrap',

        opacity: '0',
        transition: 'opacity 0.1s ease-in-out'
      }
    },
    'hover': {
      button: {
        opacity: '0.7'
      },
      tooltip: {
        opacity: '1'
      }
    },
    'active': {
      button: {
        opacity: '1'
      }
    }
  }, { hover: hover, active: active });

  return _react2.default.createElement(
    'div',
    { style: styles.button, onClick: onClick },
    _react2.default.createElement('div', { style: styles.icon }),
    parseInt(number, 10).toLocaleString(),
    _react2.default.createElement(
      'div',
      { style: styles.tooltip },
      tooltip
    )
  );
};

exports.default = (0, _reactcss.hover)(YoutubeCounterButton);
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlackSelectorFooter = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _SlackSelectorSection = require('./SlackSelectorSection');

var _SlackSelectorSection2 = _interopRequireDefault(_SlackSelectorSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlackSelectorFooter = exports.SlackSelectorFooter = function SlackSelectorFooter(_ref) {
  var onSelect = _ref.onSelect;

  var styles = (0, _reactcss2.default)({
    'default': {
      footer: {
        padding: '5px 11px',
        borderTop: '1px solid rgba(0,0,0,.15)',
        display: 'flex',
        justifyContent: 'space-between'
      },
      left: {
        fontSize: '16px',
        lineHeight: '1.5',
        margin: '4px 2px',
        fontWeight: '600',
        WebkitFontSmoothing: 'antialiased'
      },
      right: {
        paddingRight: '6px'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.footer },
    _react2.default.createElement(
      'div',
      { style: styles.left },
      'Handy Reactions'
    ),
    _react2.default.createElement(
      'div',
      { style: styles.right },
      _react2.default.createElement(_SlackSelectorSection2.default, {
        onSelect: onSelect,
        emojis: ['😀', '👍', '✅', '❤️', '👀']
      })
    )
  );
};

exports.default = SlackSelectorFooter;
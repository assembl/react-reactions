'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GithubSelector = undefined;

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _GithubSelectorEmoji = require('./GithubSelectorEmoji');

var _GithubSelectorEmoji2 = _interopRequireDefault(_GithubSelectorEmoji);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GithubSelector = exports.GithubSelector = function GithubSelector(_ref) {
  var reactions = _ref.reactions,
      onSelect = _ref.onSelect;

  var styles = (0, _reactcss2.default)({
    'default': {
      selector: {
        paddingTop: '5px',
        backgroundColor: '#fff',
        border: '1px solid rgba(0,0,0,0.15)',
        borderRadius: '4px',
        boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
        display: 'inline-block'
      },
      label: {
        fontSize: '14px',
        lineHeight: '1.5',
        color: '#767676',
        margin: '6px 12px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica'
      },
      divider: {
        height: '1px',
        margin: '8px 1px 0px',
        backgroundColor: '#e5e5e5'
      },
      emoji: {
        display: 'flex',
        margin: '0 6px'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.selector },
    _react2.default.createElement('div', { style: styles.divider }),
    _react2.default.createElement(
      'div',
      { style: styles.emoji },
      (0, _map3.default)(reactions, function (reaction, i) {
        return _react2.default.createElement(_GithubSelectorEmoji2.default, {
          key: i,
          shortcode: reaction,
          onSelect: onSelect
        });
      })
    )
  );
};

GithubSelector.defaultProps = {
  reactions: ['👍', '👎', '😄', '🎉', '😕', '❤️']
};

exports.default = GithubSelector;
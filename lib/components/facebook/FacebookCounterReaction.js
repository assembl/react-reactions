'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FacebookCounterReaction = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _icons = require('../../helpers/icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FacebookCounterReaction = exports.FacebookCounterReaction = function FacebookCounterReaction(_ref) {
  var reaction = _ref.reaction,
      bg = _ref.bg,
      index = _ref.index;

  var styles = (0, _reactcss2.default)({
    'default': {
      reaction: {
        width: '16px',
        height: '16px',
        backgroundSize: '100% 100%',
        borderRadius: '8px',
        backgroundImage: 'url(' + _icons2.default.find('facebook', reaction) + ')',
        boxShadow: '0 0 0 2px ' + bg,
        position: 'relative',
        zIndex: index
      }
    }
  });
  return _react2.default.createElement('div', { style: styles.reaction });
};

exports.default = FacebookCounterReaction;
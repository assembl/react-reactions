'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlackCounter = undefined;

var _includes2 = require('lodash/includes');

var _includes3 = _interopRequireDefault(_includes2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _groupBy2 = require('lodash/groupBy');

var _groupBy3 = _interopRequireDefault(_groupBy2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _SlackCounterGroup = require('./SlackCounterGroup');

var _SlackCounterGroup2 = _interopRequireDefault(_SlackCounterGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlackCounter = exports.SlackCounter = function SlackCounter(_ref) {
  var hover = _ref.hover,
      counters = _ref.counters,
      user = _ref.user,
      onSelect = _ref.onSelect,
      onAdd = _ref.onAdd;

  var styles = (0, _reactcss2.default)({
    'default': {
      counter: {
        display: 'flex'
      },
      add: {
        cursor: 'pointer',
        fontFamily: 'Slack',
        paddingLeft: '8px',

        opacity: '0',
        transition: 'opacity 0.1s ease-in-out'
      },
      group: {
        marginRight: '4px'
      }
    },
    'hover': {
      add: {
        opacity: '1'
      }
    }
  }, { hover: hover });

  var groups = (0, _groupBy3.default)(counters, 'emoji');

  return _react2.default.createElement(
    'div',
    { style: styles.counter },
    (0, _map3.default)(groups, function (c, emoji) {
      var names = (0, _map3.default)(c, 'by');
      return _react2.default.createElement(
        'div',
        { style: styles.group, key: emoji },
        _react2.default.createElement(_SlackCounterGroup2.default, {
          emoji: emoji,
          count: c.length,
          names: names,
          active: (0, _includes3.default)(names, user),
          onSelect: onSelect
        })
      );
    }),
    _react2.default.createElement(
      'div',
      { style: styles.add, onClick: onAdd },
      _react2.default.createElement(_SlackCounterGroup2.default, { emoji: '' })
    )
  );
}; /* eslint-disable no-shadow */

exports.default = (0, _reactcss.hover)(SlackCounter);
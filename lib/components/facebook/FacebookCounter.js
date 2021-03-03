'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FacebookCounter = undefined;

var _keys2 = require('lodash/keys');

var _keys3 = _interopRequireDefault(_keys2);

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

var _strings = require('../../helpers/strings');

var _FacebookCounterReaction = require('./FacebookCounterReaction');

var _FacebookCounterReaction2 = _interopRequireDefault(_FacebookCounterReaction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FacebookCounter = exports.FacebookCounter = function FacebookCounter(_ref) {
  var counters = _ref.counters,
      user = _ref.user,
      important = _ref.important,
      onClick = _ref.onClick,
      bg = _ref.bg;

  var styles = (0, _reactcss2.default)({
    'default': {
      counter: {
        display: 'flex',
        cursor: 'pointer',
        color: '#365899',
        fontFamily: '"San Francisco", -apple-system, BlinkMacSystemFont,\n          ".SFNSText-Regular", sans-serif',
        fontSize: '12px',
        fontWeight: '500'
      },
      name: {
        paddingLeft: '4px',
        marginTop: '2px'
      }
    }
  });

  var groups = (0, _groupBy3.default)(counters, 'emoji');
  var names = (0, _map3.default)(counters, 'by');

  var nameString = [];
  if ((0, _includes3.default)(names, user)) {
    nameString.push('You');
  }
  if (important.length) {
    if ((0, _includes3.default)(names, important[0])) {
      nameString.push(important[0]);
    }
    if ((0, _includes3.default)(names, important[1])) {
      nameString.push(important[1]);
    }
  }
  nameString.push(names.length - nameString.length + ' others');

  return _react2.default.createElement(
    'div',
    { style: styles.counter, onClick: onClick },
    (0, _map3.default)((0, _keys3.default)(groups), function (reaction, i, reactions) {
      return _react2.default.createElement(_FacebookCounterReaction2.default, {
        key: i,
        reaction: reaction,
        index: reactions.length - i,
        bg: bg
      });
    }),
    _react2.default.createElement(
      'div',
      { style: styles.name },
      (0, _strings.listOfNames)(nameString)
    )
  );
};

FacebookCounter.defaultProps = {
  important: [],
  bg: '#fff'
};

exports.default = FacebookCounter;
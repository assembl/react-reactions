'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlackSelectorItems = undefined;

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _emojiAsArray = require('emoji-as-array');

var _emojiAsArray2 = _interopRequireDefault(_emojiAsArray);

var _SlackSelectorSection = require('./SlackSelectorSection');

var _SlackSelectorSection2 = _interopRequireDefault(_SlackSelectorSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var SlackSelectorItems = exports.SlackSelectorItems = function SlackSelectorItems(_ref) {
  var scrollHeight = _ref.scrollHeight,
      frequent = _ref.frequent,
      onSelect = _ref.onSelect,
      removeEmojis = _ref.removeEmojis;

  var styles = (0, _reactcss2.default)({
    'default': {
      sections: {
        padding: '4px 4px 0',
        background: '#fff'
      },
      wrap: {
        maxHeight: scrollHeight,
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: '4px 4px 8px'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.sections },
    _react2.default.createElement(
      'div',
      { style: styles.wrap, className: 'frame' },
      frequent ? _react2.default.createElement(_SlackSelectorSection2.default, {
        key: 'mine',
        slug: 'mine',
        emojis: frequent,
        onSelect: onSelect
      }) : null,
      (0, _map3.default)(_emojiAsArray2.default, function (group, slug) {
        return _react2.default.createElement(_SlackSelectorSection2.default, {
          key: slug,
          slug: slug,
          emojis: _without3.default.apply(undefined, [group].concat(_toConsumableArray(removeEmojis))),
          onSelect: onSelect
        });
      })
    )
  );
};

exports.default = SlackSelectorItems;
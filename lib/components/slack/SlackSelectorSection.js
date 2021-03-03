'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlackSelectorSection = undefined;

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _slack = require('../../helpers/slack');

var _SlackSelectorSectionEmoji = require('./SlackSelectorSectionEmoji');

var _SlackSelectorSectionEmoji2 = _interopRequireDefault(_SlackSelectorSectionEmoji);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlackSelectorSection = exports.SlackSelectorSection = function SlackSelectorSection(_ref) {
  var slug = _ref.slug,
      emojis = _ref.emojis,
      onSelect = _ref.onSelect;

  var styles = (0, _reactcss2.default)({
    'default': {
      section: {},
      emojis: {
        display: 'flex',
        flexWrap: 'wrap'
      },
      title: {
        fontWeight: '600',
        WebkitFontSmoothing: 'antialiased',
        fontSize: '16px',
        lineHeight: '1.5rem',
        margin: '0 6px'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.section, id: slug },
    _react2.default.createElement(
      'div',
      { style: styles.title },
      (0, _slack.sectionSlugToName)(slug)
    ),
    _react2.default.createElement(
      'div',
      { style: styles.emojis },
      (0, _map3.default)(emojis, function (emoji, i) {
        return _react2.default.createElement(_SlackSelectorSectionEmoji2.default, {
          key: i,
          hoverColor: _slack.emojiColors[i % _slack.emojiColors.length],
          emoji: emoji,
          onSelect: onSelect
        });
      })
    )
  );
};

exports.default = SlackSelectorSection;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlackSelectorHeader = undefined;

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _SlackSelectorHeaderTab = require('./SlackSelectorHeaderTab');

var _SlackSelectorHeaderTab2 = _interopRequireDefault(_SlackSelectorHeaderTab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlackSelectorHeader = exports.SlackSelectorHeader = function SlackSelectorHeader(_ref) {
  var tabs = _ref.tabs,
      active = _ref.active;

  var styles = (0, _reactcss2.default)({
    'default': {
      header: {
        padding: '4px 0 0 7px',
        borderBottom: '1px solid rgba(0,0,0,.15)',
        display: 'flex'
      }
    }
  });

  var handleClick = function handleClick(id) {
    return document.getElementById(id).scrollIntoView(false);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.header },
    (0, _map3.default)(tabs, function (tab) {
      return _react2.default.createElement(_SlackSelectorHeaderTab2.default, {
        icon: tab.icon,
        id: tab.id,
        key: tab.id,
        active: tab.id === active,
        onClick: handleClick
      });
    })
  );
};

SlackSelectorHeader.defaultProps = {
  tabs: [{
    icon: '',
    id: 'mine'
  }, {
    icon: '',
    id: 'people'
  }, {
    icon: '',
    id: 'nature'
  }, {
    icon: '',
    id: 'food-and-drink'
  }, {
    icon: '',
    id: 'activity'
  }, {
    icon: '',
    id: 'travel-and-places'
  }, {
    icon: '',
    id: 'objects'
  }, {
    icon: '',
    id: 'symbols'
  }, {
    icon: '',
    id: 'flags'
  }]
};

exports.default = SlackSelectorHeader;
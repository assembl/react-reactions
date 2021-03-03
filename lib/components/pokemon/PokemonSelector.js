'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PokemonSelector = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FacebookSelector = require('../facebook/FacebookSelector');

var _FacebookSelector2 = _interopRequireDefault(_FacebookSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PokemonSelector = exports.PokemonSelector = function PokemonSelector(_ref) {
  var reactions = _ref.reactions,
      iconSize = _ref.iconSize,
      onSelect = _ref.onSelect;

  return _react2.default.createElement(_FacebookSelector2.default, {
    reactions: reactions,
    variant: 'pokemon',
    iconSize: iconSize,
    onSelect: onSelect
  });
};

PokemonSelector.defaultProps = {
  reactions: ['like', 'love', 'haha', 'wow', 'sad', 'angry'],
  iconSize: 38
};

exports.default = PokemonSelector;
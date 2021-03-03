'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var emojiColors = exports.emojiColors = ['#b7e887', '#b5e0fe', '#f9ef67', '#f3c1fd', '#ffe1ae', '#e0dfff'];

var sectionSlugToName = exports.sectionSlugToName = function sectionSlugToName(name) {
  return {
    'mine': 'Frequently Used',
    'people': 'People',
    'nature': 'Nature',
    'food-and-drink': 'Food & Drink',
    'activity': 'Activity',
    'travel-and-places': 'Travel & Places',
    'objects': 'Objects',
    'symbols': 'Symbols',
    'flags': 'Flags'
  }[name];
};
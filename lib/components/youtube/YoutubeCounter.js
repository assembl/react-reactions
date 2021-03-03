'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YoutubeCounter = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactcss = require('reactcss');

var _reactcss2 = _interopRequireDefault(_reactcss);

var _YoutubeCounterButton = require('./YoutubeCounterButton');

var _YoutubeCounterButton2 = _interopRequireDefault(_YoutubeCounterButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YoutubeCounter = exports.YoutubeCounter = function YoutubeCounter(_ref) {
  var like = _ref.like,
      dislike = _ref.dislike,
      onLikeClick = _ref.onLikeClick,
      onDislikeClick = _ref.onDislikeClick,
      didLike = _ref.didLike,
      didDislike = _ref.didDislike;

  var styles = (0, _reactcss2.default)({
    'default': {
      counter: {
        display: 'flex'
      },
      space: {
        width: '12px'
      }
    }
  });

  var handleLikeClick = function handleLikeClick() {
    return onLikeClick();
  };
  var handleDislikeClick = function handleDislikeClick() {
    return onDislikeClick();
  };

  return _react2.default.createElement(
    'div',
    { style: styles.counter },
    _react2.default.createElement(_YoutubeCounterButton2.default, {
      number: like,
      position: '-66px -69px',
      tooltip: 'I like this',
      onClick: handleLikeClick,
      active: didLike
    }),
    _react2.default.createElement('div', { style: styles.space }),
    _react2.default.createElement(_YoutubeCounterButton2.default, {
      number: dislike,
      position: '-390px -148px',
      tooltip: 'I dislike this',
      onClick: handleDislikeClick,
      active: didDislike
    })
  );
};

exports.default = YoutubeCounter;
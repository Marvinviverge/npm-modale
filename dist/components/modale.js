"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./styles/modale.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modale = _ref => {
  let {
    messageModale,
    messageButton,
    buttonFunction,
    isOpen
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modale",
    style: {
      display: isOpen ? 'block' : 'none'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-close-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modale-close",
    onClick: buttonFunction
  }, "X")), /*#__PURE__*/_react.default.createElement("div", {
    className: "message-content"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "message-modale"
  }, messageModale), /*#__PURE__*/_react.default.createElement("button", {
    className: "button-modale",
    onClick: buttonFunction
  }, messageButton)));
};
var _default = exports.default = Modale;
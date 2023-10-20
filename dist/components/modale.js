"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./styles/modale.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modale = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modale"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-close-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modale-close"
  }, "X")), /*#__PURE__*/_react.default.createElement("div", {
    className: "message-content"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "message-modale"
  }, props.messageModale), /*#__PURE__*/_react.default.createElement("button", {
    className: "button-modale"
  }, props.messageBouton)));
};
var _default = exports.default = Modale;
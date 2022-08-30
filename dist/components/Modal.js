"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Modal.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Modal = props => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.isOpen && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.backdrop && /*#__PURE__*/_react.default.createElement("div", {
  className: "backdrop"
}), /*#__PURE__*/_react.default.createElement("div", {
  className: "modal ".concat(props.darkTheme ? "darkTheme" : "")
}, props.crossClose && /*#__PURE__*/_react.default.createElement("section", {
  className: "modal-cross-close"
}, /*#__PURE__*/_react.default.createElement("button", {
  className: "btn",
  onClick: props.onClose
}, "\u2716")), /*#__PURE__*/_react.default.createElement("section", {
  className: "modal-content"
}, props.children), props.btnClose && /*#__PURE__*/_react.default.createElement("section", {
  className: "modal-btn-close"
}, /*#__PURE__*/_react.default.createElement("button", {
  className: "btn",
  onClick: props.onClose
}, "Close")))));

var _default = Modal;
exports.default = _default;
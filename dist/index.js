"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Selection;
require("./index.css");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Selection(_ref) {
  var title = _ref.title,
    name = _ref.name,
    elements = _ref.elements,
    onChange = _ref.onChange;
  return /*#__PURE__*/_react.default.createElement("select", {
    name: name,
    onChange: onChange,
    "aria-label": name,
    className: "select-plug",
    "data-testid": "test-select"
  }, /*#__PURE__*/_react.default.createElement("option", null, title), elements.map(function (element, index) {
    return /*#__PURE__*/_react.default.createElement("option", {
      value: element,
      key: "".concat(element, "-").concat(index)
    }, element);
  }));
}
Selection.propTypes = {
  title: _propTypes.default.string,
  name: _propTypes.default.string,
  elements: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool])).isRequired,
  onChange: _propTypes.default.func
};
Selection.defaultProps = {
  title: 'Choose an option',
  name: 'selected_value'
};
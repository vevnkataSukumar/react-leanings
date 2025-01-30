"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AppHook;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function AppHook() {
  const initiaCount = 0;
  const inputRef = _react.default.useRef();
  const [count, setCount] = _react.default.useState(initiaCount);
  const increment = _react.default.useCallback(val => {
    console.log('Value: ', val);
    const value = val ? val : 1;
    setCount(prev => {
      return prev + value;
    });
  }, []);
  const decrement = () => {
    setCount(prev => {
      return prev - 1;
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Input Value: ', inputRef.current.value);
    setCount(inputRef.current.value);
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "Counter"), /*#__PURE__*/_react.default.createElement("p", null, count), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => increment(1)
  }, "Increment"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: decrement
  }, "Decrement"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    ref: inputRef
    // value={count}
    // onChange={(e) => setCount(e.target.value)} 
  }))));
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./App.css");
var _react = require("react");
var _AppHook = _interopRequireDefault(require("./AppHook"));
var _UserForm = _interopRequireDefault(require("./UserForm"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class App extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_UserForm.default, null));
  }
}
var _default = exports.default = App;
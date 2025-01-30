"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const UserForm = () => {
  const [userData, setUserData] = _react.default.useState([]);
  const [formData, setFormData] = _react.default.useState({
    name: "",
    age: "",
    country: "",
    mobile: ""
  });
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      [name]: value
    }));
  };
  const resetFormData = () => {
    setFormData({
      name: "",
      age: "",
      country: "",
      mobile: ""
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    const filteredData = userData === null || userData === void 0 ? void 0 : userData.filter(data => data.mobile === formData.mobile);
    if (filteredData.length > 0) {
      const modiData = userData.map(obj => {
        if (obj.mobile === formData.mobile) {
          return _objectSpread(_objectSpread({}, obj), {}, {
            name: formData.name,
            age: formData.age,
            country: formData.country,
            mobile: formData.mobile
          });
        }
        return obj;
      });
      setUserData(modiData);
      return;
    } else {
      setUserData(prevState => {
        return [...prevState, formData];
      });
    }
    resetFormData();
  };
  const deleteData = index => {
    const newData = userData.filter((data, i) => i !== index);
    setUserData(newData);
  };
  const editData = index => {
    const newData = userData.filter((data, i) => i === index);
    console.log(newData);
    setFormData(newData);
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement("h2", null, "User Data Form"), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit,
    style: styles.form
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: styles.inputGroup
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "name"
  }, "Name:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "name",
    name: "name",
    value: formData.name,
    onChange: handleChange,
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: styles.inputGroup
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "age"
  }, "Age:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    id: "age",
    name: "age",
    value: formData.age,
    onChange: handleChange,
    required: true,
    min: "1"
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: styles.inputGroup
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "country"
  }, "Country:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "country",
    name: "country",
    value: formData.country,
    onChange: handleChange,
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: styles.inputGroup
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "mobile"
  }, "Mobile:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "tel",
    id: "mobile",
    name: "mobile",
    value: formData.mobile,
    onChange: handleChange,
    required: true,
    pattern: "[0-9]{10}",
    placeholder: "10-digit number"
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    style: styles.submitButton
  }, "Submit"))), (userData === null || userData === void 0 ? void 0 : userData.length) > 0 && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      textAlign: "center"
    }
  }, "User Data"), /*#__PURE__*/_react.default.createElement("table", {
    style: {
      margin: "0 auto"
    }
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "Name"), /*#__PURE__*/_react.default.createElement("th", null, "Age"), /*#__PURE__*/_react.default.createElement("th", null, "Country"), /*#__PURE__*/_react.default.createElement("th", null, "Mobile"))), /*#__PURE__*/_react.default.createElement("tbody", null, userData.map((user, index) => /*#__PURE__*/_react.default.createElement("tr", {
    key: index
  }, /*#__PURE__*/_react.default.createElement("td", null, user.name), /*#__PURE__*/_react.default.createElement("td", null, user.age), /*#__PURE__*/_react.default.createElement("td", null, user.country), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, user.mobile, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      gap: "10px"
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => deleteData(index)
  }, "Delete"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => editData(index)
  }, "Edit"))))))))));
};
var _default = exports.default = UserForm;
const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    textAlign: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left"
  },
  submitButton: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  submitButtonHover: {
    backgroundColor: "#0056b3"
  },
  successMessage: {
    color: "#28a745",
    textAlign: "center"
  }
};
require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "../../node_modules/@remax/one/esm/api/index.wechat.js":
/*!************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/one/esm/api/index.wechat.js ***!
  \************************************************************************************************************/
/*! exports provided: navigateTo, navigateBack, redirectTo, reLaunch, switchTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_wechat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/wechat */ "../../node_modules/@remax/wechat/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["navigateTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["navigateBack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["redirectTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["reLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return _remax_wechat__WEBPACK_IMPORTED_MODULE_0__["switchTab"]; });



/***/ }),

/***/ "../../node_modules/@remax/one/esm/createHostComponent.js":
/*!***************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/one/esm/createHostComponent.js ***!
  \***************************************************************************************************************/
/*! exports provided: createTarget, createCurrentTarget, createTapEvent, createTouchEvent, createImageEvent, createCallback, createInputEvent, createFormEvent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTarget", function() { return createTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCurrentTarget", function() { return createCurrentTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTapEvent", function() { return createTapEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTouchEvent", function() { return createTouchEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImageEvent", function() { return createImageEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCallback", function() { return createCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInputEvent", function() { return createInputEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFormEvent", function() { return createFormEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createHostComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};


function createTarget(target, detail) {
  return {
    id: target.id,
    offsetLeft: target.offsetLeft,
    offsetTop: target.offsetTop,
    dataset: target.targetDataset || target.dataset,
    value: detail === null || detail === void 0 ? void 0 : detail.value
  };
}
function createCurrentTarget(currentTarget) {
  return {
    id: currentTarget.id,
    offsetLeft: currentTarget.offsetLeft,
    offsetTop: currentTarget.offsetTop,
    dataset: currentTarget.dataset
  };
}
var createTapEvent = function createTapEvent(originalEvent) {
  return {
    type: originalEvent.type,
    stopPropagation: originalEvent.stopPropagation,
    target: createTarget(originalEvent.target, originalEvent.detail),
    currentTarget: createCurrentTarget(originalEvent.currentTarget),
    originalEvent: originalEvent
  };
};
var createTouchEvent = function createTouchEvent(originalEvent) {
  return {
    type: originalEvent.type,
    target: createTarget(originalEvent.target, originalEvent.detail),
    currentTarget: createCurrentTarget(originalEvent.currentTarget),
    touches: originalEvent.touches,
    changedTouches: originalEvent.touches,
    originalEvent: originalEvent
  };
};
var createImageEvent = function createImageEvent(originalEvent) {
  return {
    type: originalEvent.type,
    target: createTarget(originalEvent.target, originalEvent.detail),
    currentTarget: createCurrentTarget(originalEvent.currentTarget),
    originalEvent: originalEvent
  };
};
function createCallback(fn, eventCreator) {
  if (typeof fn !== 'function') {
    return undefined;
  }

  return function (originalEvent) {
    return fn(eventCreator(originalEvent));
  };
}
var createInputEvent = function createInputEvent(originalEvent) {
  return {
    type: originalEvent.type,
    target: createTarget(originalEvent.target, originalEvent.detail),
    currentTarget: createCurrentTarget(originalEvent.currentTarget),
    originalEvent: originalEvent
  };
};
var createFormEvent = function createFormEvent(originalEvent) {
  return {
    type: originalEvent.type,
    target: createTarget(originalEvent.target, originalEvent.detail),
    currentTarget: createCurrentTarget(originalEvent.currentTarget),
    originalEvent: originalEvent
  };
};
function createHostComponent(name) {
  var Component = function Component(props, ref) {
    var inputProps = __assign({}, props);

    if (props.onLongTap) {
      inputProps.onLongTap = createCallback(inputProps.onLongTap, createTapEvent);
    }

    if (inputProps.onTap) {
      inputProps.onTap = createCallback(inputProps.onTap, createTapEvent);
    }

    if (inputProps.onTouchStart) {
      inputProps.onTouchStart = createCallback(inputProps.onTouchStart, createTouchEvent);
    }

    if (inputProps.onTouchMove) {
      inputProps.onTouchMove = createCallback(inputProps.onTouchMove, createTouchEvent);
    }

    if (inputProps.onTouchEnd) {
      inputProps.onTouchEnd = createCallback(inputProps.onTouchEnd, createTouchEvent);
    }

    if (inputProps.onTouchCancel) {
      inputProps.onTouchCancel = createCallback(inputProps.onTouchCancel, createTouchEvent);
    }

    if (inputProps.onChange) {
      inputProps.onChange = createCallback(inputProps.onChange, createInputEvent);
    }

    if (inputProps.onInput) {
      inputProps.onInput = createCallback(inputProps.onInput, createInputEvent);
    }

    if (inputProps.onConfirm) {
      inputProps.onConfirm = createCallback(inputProps.onConfirm, createInputEvent);
    }

    if (inputProps.onFocus) {
      inputProps.onFocus = createCallback(inputProps.onFocus, createInputEvent);
    }

    if (inputProps.onBlur) {
      inputProps.onBlur = createCallback(inputProps.onBlur, createInputEvent);
    }

    if (inputProps.onSubmit) {
      inputProps.onSubmit = createCallback(inputProps.onSubmit, createFormEvent);
    }

    if (inputProps.onReset) {
      inputProps.onReset = createCallback(inputProps.onReset, createFormEvent);
    }

    if (name === 'image') {
      if (inputProps.onLoad) {
        inputProps.onLoad = createCallback(props.onLoad, createImageEvent);
      }

      if (inputProps.onError) {
        inputProps.onError = createCallback(props.onError, createImageEvent);
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](name, __assign(__assign({}, inputProps), {
      ref: ref
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](Component);
}

/***/ }),

/***/ "../../node_modules/@remax/one/esm/hostComponents/Button/index.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/one/esm/hostComponents/Button/index.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createHostComponent */ "../../node_modules/@remax/one/esm/createHostComponent.js");

var Button = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('button');
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "../../node_modules/@remax/one/esm/hostComponents/Form/index.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/one/esm/hostComponents/Form/index.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createHostComponent */ "../../node_modules/@remax/one/esm/createHostComponent.js");

var Form = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('form');
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "../../node_modules/@remax/one/esm/hostComponents/Image/index.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/one/esm/hostComponents/Image/index.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createHostComponent */ "../../node_modules/@remax/one/esm/createHostComponent.js");

var Image = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('image');
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "../../node_modules/@remax/one/esm/hostComponents/Input/index.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/one/esm/hostComponents/Input/index.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../createHostComponent */ "../../node_modules/@remax/one/esm/createHostComponent.js");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};




var Input =
/** @class */
function (_super) {
  __extends(Input, _super);

  function Input(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      value: '',
      // 阿里
      controlled: false
    };

    _this.handleInput = function (e) {
      var controlled = _this.state.controlled;

      if (!controlled) {
        _this.setState({
          value: e.target.value
        });
      }

      if (typeof _this.props.onInput === 'function') {
        return _this.props.onInput(e);
      } // 微信
      // 注意，微信要对 input 受控，必须要在 onInput 方法返回值


      return controlled ? _this.props.value : e.target.value;
    };

    var controlled = props.value !== undefined;
    var value = controlled ? props.value : props.defaultValue;
    _this.state = {
      value: value,
      controlled: controlled
    };
    return _this;
  }

  Input.prototype.componentDidUpdate = function () {
    if (this.props.value !== undefined && this.props.value !== this.state.value) {
      this.setState({
        value: this.props.value
      });
    }
  };

  Input.prototype.render = function () {
    var _a;

    var inputProps = __assign(__assign({}, this.props), {
      onInput: Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createCallback"])(this.handleInput, _createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createInputEvent"])
    });

    if (inputProps.onConfirm) {
      inputProps.onConfirm = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createCallback"])(this.props.onConfirm, _createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createInputEvent"]);
    }

    if (inputProps.onFocus) {
      inputProps.onFocus = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createCallback"])(this.props.onFocus, _createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createInputEvent"]);
    }

    if (inputProps.onBlur) {
      inputProps.onBlur = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createCallback"])(this.props.onBlur, _createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createInputEvent"]);
    }

    if (true) {
      inputProps.maxLength = (_a = inputProps.maxLength) !== null && _a !== void 0 ? _a : 140;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]('input', __assign(__assign({}, inputProps), this.state));
  };

  Input.defaultProps = {
    'toutiao-selection-end': 999,
    'toutiao-selection-start': 999,
    'wechat-selection-end': 999,
    'wechat-selection-start': 999
  };
  return Input;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "../../node_modules/@remax/one/esm/hostComponents/Label/index.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/one/esm/hostComponents/Label/index.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createHostComponent */ "../../node_modules/@remax/one/esm/createHostComponent.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('label'));

/***/ }),

/***/ "../../node_modules/@remax/one/esm/hostComponents/Text/index.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/one/esm/hostComponents/Text/index.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createHostComponent */ "../../node_modules/@remax/one/esm/createHostComponent.js");

var Text = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('text');
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "../../node_modules/@remax/one/esm/hostComponents/Textarea/index.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/one/esm/hostComponents/Textarea/index.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../createHostComponent */ "../../node_modules/@remax/one/esm/createHostComponent.js");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};




var Textarea =
/** @class */
function (_super) {
  __extends(Textarea, _super);

  function Textarea(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      value: '',
      // 阿里
      controlled: false
    };

    _this.handleInput = function (e) {
      var controlled = _this.state.controlled;

      if (!controlled) {
        _this.setState({
          value: e.target.value
        });
      }

      if (typeof _this.props.onInput === 'function') {
        return _this.props.onInput(e);
      } // 微信
      // 注意，微信要对 input 受控，必须要在 onInput 方法返回值


      return controlled ? _this.props.value : e.target.value;
    };

    var controlled = props.value !== undefined;
    var value = controlled ? props.value : props.defaultValue;
    _this.state = {
      value: value,
      controlled: controlled
    };
    return _this;
  }

  Textarea.prototype.componentDidUpdate = function () {
    if (this.props.value !== undefined && this.props.value !== this.state.value) {
      this.setState({
        value: this.props.value
      });
    }
  };

  Textarea.prototype.render = function () {
    var _a;

    var inputProps = __assign(__assign({}, this.props), {
      onInput: Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createCallback"])(this.handleInput, _createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createInputEvent"])
    });

    if (inputProps.onConfirm) {
      inputProps.onConfirm = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createCallback"])(this.props.onConfirm, _createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createInputEvent"]);
    }

    if (inputProps.onFocus) {
      inputProps.onFocus = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createCallback"])(this.props.onFocus, _createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createInputEvent"]);
    }

    if (inputProps.onBlur) {
      inputProps.onBlur = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createCallback"])(this.props.onBlur, _createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createInputEvent"]);
    }

    if (true) {
      inputProps.maxLength = (_a = inputProps.maxLength) !== null && _a !== void 0 ? _a : 140;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]('textarea', __assign(__assign({}, inputProps), this.state));
  };

  Textarea.defaultProps = {
    'toutiao-selection-end': 999,
    'toutiao-selection-start': 999,
    'wechat-selection-end': 999,
    'wechat-selection-start': 999,
    'wechat-fixed': false
  };
  return Textarea;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Textarea);

/***/ }),

/***/ "../../node_modules/@remax/one/esm/hostComponents/View/index.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/one/esm/hostComponents/View/index.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createHostComponent */ "../../node_modules/@remax/one/esm/createHostComponent.js");

var View = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('view');
/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),

/***/ "../../node_modules/@remax/one/esm/hostComponents/WebView/index.js":
/*!************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/one/esm/hostComponents/WebView/index.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createHostComponent */ "../../node_modules/@remax/one/esm/createHostComponent.js");

var WebView = Object(_createHostComponent__WEBPACK_IMPORTED_MODULE_0__["default"])('web-view');
/* harmony default export */ __webpack_exports__["default"] = (WebView);

/***/ }),

/***/ "../../node_modules/@remax/one/esm/hostComponents/index.js":
/*!****************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/one/esm/hostComponents/index.js ***!
  \****************************************************************************************************************/
/*! exports provided: Button, Form, Image, Input, Label, Text, Textarea, View, WebView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "../../node_modules/@remax/one/esm/hostComponents/Button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "../../node_modules/@remax/one/esm/hostComponents/Form/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image */ "../../node_modules/@remax/one/esm/hostComponents/Image/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _Image__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ "../../node_modules/@remax/one/esm/hostComponents/Input/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Label */ "../../node_modules/@remax/one/esm/hostComponents/Label/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _Label__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Text */ "../../node_modules/@remax/one/esm/hostComponents/Text/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _Text__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Textarea */ "../../node_modules/@remax/one/esm/hostComponents/Textarea/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _Textarea__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./View */ "../../node_modules/@remax/one/esm/hostComponents/View/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _View__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _WebView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WebView */ "../../node_modules/@remax/one/esm/hostComponents/WebView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _WebView__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* empty/unused harmony star reexport */


















/***/ }),

/***/ "../../node_modules/@remax/one/esm/index.js":
/*!*************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/one/esm/index.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hostComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hostComponents */ "../../node_modules/@remax/one/esm/hostComponents/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Textarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["View"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["WebView"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "../../node_modules/@remax/one/esm/api/index.wechat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateBack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["redirectTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["reLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["switchTab"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "../../node_modules/@remax/one/esm/types/index.js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_2__) if(["Button","Form","Image","Input","Label","Text","Textarea","View","WebView","navigateTo","navigateBack","redirectTo","reLaunch","switchTab","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "../../node_modules/@remax/one/esm/types/event.js":
/*!*******************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/one/esm/types/event.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* istanbul ignore next */


/***/ }),

/***/ "../../node_modules/@remax/one/esm/types/index.js":
/*!*******************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/one/esm/types/index.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ "../../node_modules/@remax/one/esm/types/event.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_event__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _event__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _event__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "../../node_modules/@remax/shared/esm/createHostComponent.js":
/*!******************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/shared/esm/createHostComponent.js ***!
  \******************************************************************************************************************/
/*! exports provided: createHostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHostComponent", function() { return createHostComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};


function createHostComponent(name, component) {
  if (component) {
    return component;
  }

  var Component = function Component(props, ref) {
    var _a = props.children,
        children = _a === void 0 ? [] : _a;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](name, __assign(__assign({}, props), {
      ref: ref
    }), children);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](Component);
}

/***/ }),

/***/ "../../node_modules/@remax/shared/esm/index.js":
/*!****************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/shared/esm/index.js ***!
  \****************************************************************************************************/
/*! exports provided: promisify, createHostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _promisify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promisify */ "../../node_modules/@remax/shared/esm/promisify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "promisify", function() { return _promisify__WEBPACK_IMPORTED_MODULE_0__["promisify"]; });

/* harmony import */ var _createHostComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createHostComponent */ "../../node_modules/@remax/shared/esm/createHostComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHostComponent", function() { return _createHostComponent__WEBPACK_IMPORTED_MODULE_1__["createHostComponent"]; });




/***/ }),

/***/ "../../node_modules/@remax/shared/esm/promisify.js":
/*!********************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/shared/esm/promisify.js ***!
  \********************************************************************************************************/
/*! exports provided: promisify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promisify", function() { return promisify; });
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function promisify(api) {
  return function (arg) {
    if (arg === void 0) {
      arg = {};
    }

    return new Promise(function (resolve, reject) {
      var promisifyArg = arg;
      api(__assign(__assign({}, promisifyArg), {
        success: function success(res) {
          if (promisifyArg && typeof promisifyArg.success === 'function') {
            promisifyArg.success(res);
          }

          resolve(res);
        },
        fail: function fail(res) {
          if (promisifyArg && typeof promisifyArg.fail === 'function') {
            promisifyArg.fail(res);
          }

          reject(res);
        }
      }));
    });
  };
}

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/api/index.js":
/*!********************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/api/index.js ***!
  \********************************************************************************************************/
/*! exports provided: getAppStub, canIUse, base64ToArrayBuffer, arrayBufferToBase64, getSystemInfoSync, getSystemInfo, getUpdateManager, getLaunchOptionsSync, onPageNotFound, onError, onAudioInterruptionEnd, onAppShow, onAppHide, offPageNotFound, offError, offAudioInterruptionEnd, offAudioInterruptionBegin, offAppShow, offAppHide, setEnableDebug, getLogManager, switchTab, reLaunch, redirectTo, navigateTo, navigateBack, showToast, showModal, showLoading, showActionSheet, hideToast, hideLoading, showNavigationBarLoading, setNavigationBarTitle, setNavigationBarColor, hideNavigationBarLoading, setBackgroundTextStyle, setBackgroundColor, showTabBarRedDot, showTabBar, setTabBarStyle, setTabBarItem, setTabBarBadge, removeTabBarBadge, hideTabBarRedDot, hideTabBar, loadFontFace, stopPullDownRefresh, startPullDownRefresh, pageScrollTo, createAnimation, setTopBarText, nextTick, getMenuButtonBoundingClientRect, onWindowResize, offWindowResize, onKeyboardHeightChange, getSelectedTextRange, request, downloadFile, uploadFile, sendSocketMessage, onSocketOpen, onSocketMessage, onSocketError, onSocketClose, connectSocket, closeSocket, stopLocalServiceDiscovery, startLocalServiceDiscovery, onLocalServiceResolveFail, onLocalServiceLost, onLocalServiceFound, onLocalServiceDiscoveryStop, offLocalServiceResolveFail, offLocalServiceLost, offLocalServiceFound, offLocalServiceDiscoveryStop, createUDPSocket, setStorageSync, setStorage, removeStorageSync, removeStorage, getStorageSync, getStorageInfoSync, getStorageInfo, getStorage, clearStorageSync, clearStorage, createMapContext, saveImageToPhotosAlbum, previewImage, getImageInfo, compressImage, chooseMessageFile, chooseImage, saveVideoToPhotosAlbum, createVideoContext, chooseVideo, chooseMedia, stopVoice, setInnerAudioOption, playVoice, pauseVoice, getAvailableAudioSources, createInnerAudioContext, createAudioContext, stopBackgroundAudio, seekBackgroundAudio, playBackgroundAudio, pauseBackgroundAudio, onBackgroundAudioStop, onBackgroundAudioPlay, onBackgroundAudioPause, getBackgroundAudioPlayerState, getBackgroundAudioManager, createLivePusherContext, createLivePlayerContext, stopRecord, startRecord, getRecorderManager, createCameraContext, stopLocationUpdate, startLocationUpdateBackground, startLocationUpdate, openLocation, onLocationChange, getLocation, chooseLocation, updateShareMenu, showShareMenu, hideShareMenu, getShareInfo, createOffscreenCanvas, createCanvasContext, canvasToTempFilePath, canvasPutImageData, canvasGetImageData, saveFile, removeSavedFile, openDocument, getSavedFileList, getSavedFileInfo, getFileSystemManager, getFileInfo, login, checkSession, navigateToMiniProgram, navigateBackMiniProgram, getAccountInfoSync, getUserInfo, reportMonitor, reportAnalytics, requestPayment, authorize, openSetting, getSetting, chooseAddress, openCard, addCard, chooseInvoiceTitle, chooseInvoice, startSoterAuthentication, checkIsSupportSoterAuthentication, checkIsSoterEnrolledInDevice, getWeRunData, stopBeaconDiscovery, startBeaconDiscovery, onBeaconUpdate, onBeaconServiceChange, getBeacons, stopWifi, startWifi, setWifiList, onWifiConnected, onGetWifiList, getWifiList, getConnectedWifi, connectWifi, addPhoneContact, writeBLECharacteristicValue, readBLECharacteristicValue, onBLEConnectionStateChange, onBLECharacteristicValueChange, notifyBLECharacteristicValueChange, getBLEDeviceServices, getBLEDeviceCharacteristics, createBLEConnection, closeBLEConnection, stopBluetoothDevicesDiscovery, startBluetoothDevicesDiscovery, openBluetoothAdapter, onBluetoothDeviceFound, onBluetoothAdapterStateChange, getConnectedBluetoothDevices, getBluetoothDevices, getBluetoothAdapterState, closeBluetoothAdapter, getBatteryInfoSync, getBatteryInfo, setClipboardData, getClipboardData, stopHCE, startHCE, sendHCEMessage, onHCEMessage, getHCEState, onNetworkStatusChange, getNetworkType, setScreenBrightness, setKeepScreenOn, onUserCaptureScreen, getScreenBrightness, makePhoneCall, stopAccelerometer, startAccelerometer, onAccelerometerChange, stopCompass, startCompass, onCompassChange, stopDeviceMotionListening, startDeviceMotionListening, onDeviceMotionChange, stopGyroscope, startGyroscope, onGyroscopeChange, onMemoryWarning, scanCode, vibrateShort, vibrateLong, createWorker, getExtConfigSync, getExtConfig, createSelectorQuery, createIntersectionObserver, createRewardedVideoAd, createInterstitialAd, cloud, requestSubscribeMessage, hideHomeButton, getRealtimeLogManager, hideKeyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppStub", function() { return getAppStub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canIUse", function() { return canIUse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64ToArrayBuffer", function() { return base64ToArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayBufferToBase64", function() { return arrayBufferToBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSystemInfoSync", function() { return getSystemInfoSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSystemInfo", function() { return getSystemInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpdateManager", function() { return getUpdateManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLaunchOptionsSync", function() { return getLaunchOptionsSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onPageNotFound", function() { return onPageNotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onError", function() { return onError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAudioInterruptionEnd", function() { return onAudioInterruptionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAppShow", function() { return onAppShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAppHide", function() { return onAppHide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offPageNotFound", function() { return offPageNotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offError", function() { return offError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offAudioInterruptionEnd", function() { return offAudioInterruptionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offAudioInterruptionBegin", function() { return offAudioInterruptionBegin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offAppShow", function() { return offAppShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offAppHide", function() { return offAppHide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEnableDebug", function() { return setEnableDebug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLogManager", function() { return getLogManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return switchTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return reLaunch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return redirectTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return navigateTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return navigateBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showToast", function() { return showToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return showModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return showLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showActionSheet", function() { return showActionSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideToast", function() { return hideToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return hideLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNavigationBarLoading", function() { return showNavigationBarLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNavigationBarTitle", function() { return setNavigationBarTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNavigationBarColor", function() { return setNavigationBarColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideNavigationBarLoading", function() { return hideNavigationBarLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBackgroundTextStyle", function() { return setBackgroundTextStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBackgroundColor", function() { return setBackgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTabBarRedDot", function() { return showTabBarRedDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTabBar", function() { return showTabBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTabBarStyle", function() { return setTabBarStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTabBarItem", function() { return setTabBarItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTabBarBadge", function() { return setTabBarBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTabBarBadge", function() { return removeTabBarBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideTabBarRedDot", function() { return hideTabBarRedDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideTabBar", function() { return hideTabBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFontFace", function() { return loadFontFace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopPullDownRefresh", function() { return stopPullDownRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startPullDownRefresh", function() { return startPullDownRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageScrollTo", function() { return pageScrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAnimation", function() { return createAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTopBarText", function() { return setTopBarText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return nextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuButtonBoundingClientRect", function() { return getMenuButtonBoundingClientRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onWindowResize", function() { return onWindowResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offWindowResize", function() { return offWindowResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onKeyboardHeightChange", function() { return onKeyboardHeightChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedTextRange", function() { return getSelectedTextRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return downloadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return uploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendSocketMessage", function() { return sendSocketMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSocketOpen", function() { return onSocketOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSocketMessage", function() { return onSocketMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSocketError", function() { return onSocketError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSocketClose", function() { return onSocketClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectSocket", function() { return connectSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSocket", function() { return closeSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopLocalServiceDiscovery", function() { return stopLocalServiceDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLocalServiceDiscovery", function() { return startLocalServiceDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceResolveFail", function() { return onLocalServiceResolveFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceLost", function() { return onLocalServiceLost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceFound", function() { return onLocalServiceFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceDiscoveryStop", function() { return onLocalServiceDiscoveryStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceResolveFail", function() { return offLocalServiceResolveFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceLost", function() { return offLocalServiceLost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceFound", function() { return offLocalServiceFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceDiscoveryStop", function() { return offLocalServiceDiscoveryStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUDPSocket", function() { return createUDPSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStorageSync", function() { return setStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStorage", function() { return setStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStorageSync", function() { return removeStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStorage", function() { return removeStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorageSync", function() { return getStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorageInfoSync", function() { return getStorageInfoSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorageInfo", function() { return getStorageInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return getStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStorageSync", function() { return clearStorageSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStorage", function() { return clearStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMapContext", function() { return createMapContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveImageToPhotosAlbum", function() { return saveImageToPhotosAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return previewImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageInfo", function() { return getImageInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compressImage", function() { return compressImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseMessageFile", function() { return chooseMessageFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return chooseImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveVideoToPhotosAlbum", function() { return saveVideoToPhotosAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVideoContext", function() { return createVideoContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseVideo", function() { return chooseVideo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseMedia", function() { return chooseMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopVoice", function() { return stopVoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInnerAudioOption", function() { return setInnerAudioOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playVoice", function() { return playVoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pauseVoice", function() { return pauseVoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAvailableAudioSources", function() { return getAvailableAudioSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInnerAudioContext", function() { return createInnerAudioContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAudioContext", function() { return createAudioContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopBackgroundAudio", function() { return stopBackgroundAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seekBackgroundAudio", function() { return seekBackgroundAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playBackgroundAudio", function() { return playBackgroundAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pauseBackgroundAudio", function() { return pauseBackgroundAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioStop", function() { return onBackgroundAudioStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioPlay", function() { return onBackgroundAudioPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioPause", function() { return onBackgroundAudioPause; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBackgroundAudioPlayerState", function() { return getBackgroundAudioPlayerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBackgroundAudioManager", function() { return getBackgroundAudioManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLivePusherContext", function() { return createLivePusherContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLivePlayerContext", function() { return createLivePlayerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopRecord", function() { return stopRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startRecord", function() { return startRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecorderManager", function() { return getRecorderManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCameraContext", function() { return createCameraContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopLocationUpdate", function() { return stopLocationUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLocationUpdateBackground", function() { return startLocationUpdateBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLocationUpdate", function() { return startLocationUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openLocation", function() { return openLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLocationChange", function() { return onLocationChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseLocation", function() { return chooseLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateShareMenu", function() { return updateShareMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showShareMenu", function() { return showShareMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideShareMenu", function() { return hideShareMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShareInfo", function() { return getShareInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOffscreenCanvas", function() { return createOffscreenCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCanvasContext", function() { return createCanvasContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasToTempFilePath", function() { return canvasToTempFilePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasPutImageData", function() { return canvasPutImageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasGetImageData", function() { return canvasGetImageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveFile", function() { return saveFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeSavedFile", function() { return removeSavedFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openDocument", function() { return openDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedFileList", function() { return getSavedFileList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedFileInfo", function() { return getSavedFileInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileSystemManager", function() { return getFileSystemManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileInfo", function() { return getFileInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSession", function() { return checkSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateToMiniProgram", function() { return navigateToMiniProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateBackMiniProgram", function() { return navigateBackMiniProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccountInfoSync", function() { return getAccountInfoSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportMonitor", function() { return reportMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportAnalytics", function() { return reportAnalytics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestPayment", function() { return requestPayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authorize", function() { return authorize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSetting", function() { return openSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetting", function() { return getSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseAddress", function() { return chooseAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCard", function() { return openCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCard", function() { return addCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseInvoiceTitle", function() { return chooseInvoiceTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseInvoice", function() { return chooseInvoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startSoterAuthentication", function() { return startSoterAuthentication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIsSupportSoterAuthentication", function() { return checkIsSupportSoterAuthentication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIsSoterEnrolledInDevice", function() { return checkIsSoterEnrolledInDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeRunData", function() { return getWeRunData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopBeaconDiscovery", function() { return stopBeaconDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startBeaconDiscovery", function() { return startBeaconDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBeaconUpdate", function() { return onBeaconUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBeaconServiceChange", function() { return onBeaconServiceChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBeacons", function() { return getBeacons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopWifi", function() { return stopWifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startWifi", function() { return startWifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWifiList", function() { return setWifiList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onWifiConnected", function() { return onWifiConnected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onGetWifiList", function() { return onGetWifiList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWifiList", function() { return getWifiList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConnectedWifi", function() { return getConnectedWifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectWifi", function() { return connectWifi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPhoneContact", function() { return addPhoneContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeBLECharacteristicValue", function() { return writeBLECharacteristicValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readBLECharacteristicValue", function() { return readBLECharacteristicValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBLEConnectionStateChange", function() { return onBLEConnectionStateChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBLECharacteristicValueChange", function() { return onBLECharacteristicValueChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyBLECharacteristicValueChange", function() { return notifyBLECharacteristicValueChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceServices", function() { return getBLEDeviceServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceCharacteristics", function() { return getBLEDeviceCharacteristics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBLEConnection", function() { return createBLEConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeBLEConnection", function() { return closeBLEConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopBluetoothDevicesDiscovery", function() { return stopBluetoothDevicesDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startBluetoothDevicesDiscovery", function() { return startBluetoothDevicesDiscovery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openBluetoothAdapter", function() { return openBluetoothAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBluetoothDeviceFound", function() { return onBluetoothDeviceFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBluetoothAdapterStateChange", function() { return onBluetoothAdapterStateChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConnectedBluetoothDevices", function() { return getConnectedBluetoothDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBluetoothDevices", function() { return getBluetoothDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBluetoothAdapterState", function() { return getBluetoothAdapterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeBluetoothAdapter", function() { return closeBluetoothAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfoSync", function() { return getBatteryInfoSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfo", function() { return getBatteryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setClipboardData", function() { return setClipboardData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClipboardData", function() { return getClipboardData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopHCE", function() { return stopHCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startHCE", function() { return startHCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendHCEMessage", function() { return sendHCEMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onHCEMessage", function() { return onHCEMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHCEState", function() { return getHCEState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNetworkStatusChange", function() { return onNetworkStatusChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNetworkType", function() { return getNetworkType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setScreenBrightness", function() { return setScreenBrightness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setKeepScreenOn", function() { return setKeepScreenOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUserCaptureScreen", function() { return onUserCaptureScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScreenBrightness", function() { return getScreenBrightness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePhoneCall", function() { return makePhoneCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopAccelerometer", function() { return stopAccelerometer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startAccelerometer", function() { return startAccelerometer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAccelerometerChange", function() { return onAccelerometerChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopCompass", function() { return stopCompass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startCompass", function() { return startCompass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onCompassChange", function() { return onCompassChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopDeviceMotionListening", function() { return stopDeviceMotionListening; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startDeviceMotionListening", function() { return startDeviceMotionListening; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDeviceMotionChange", function() { return onDeviceMotionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopGyroscope", function() { return stopGyroscope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startGyroscope", function() { return startGyroscope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onGyroscopeChange", function() { return onGyroscopeChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMemoryWarning", function() { return onMemoryWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scanCode", function() { return scanCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vibrateShort", function() { return vibrateShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vibrateLong", function() { return vibrateLong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWorker", function() { return createWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtConfigSync", function() { return getExtConfigSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExtConfig", function() { return getExtConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectorQuery", function() { return createSelectorQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIntersectionObserver", function() { return createIntersectionObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRewardedVideoAd", function() { return createRewardedVideoAd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInterstitialAd", function() { return createInterstitialAd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloud", function() { return cloud; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestSubscribeMessage", function() { return requestSubscribeMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideHomeButton", function() { return hideHomeButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRealtimeLogManager", function() { return getRealtimeLogManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideKeyboard", function() { return hideKeyboard; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var getAppStub = getApp;
var canIUse = wx.canIUse;
var base64ToArrayBuffer = wx.base64ToArrayBuffer;
var arrayBufferToBase64 = wx.arrayBufferToBase64;
var getSystemInfoSync = wx.getSystemInfoSync;
var getSystemInfo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getSystemInfo);
var getUpdateManager = wx.getUpdateManager;
var getLaunchOptionsSync = wx.getLaunchOptionsSync;
var onPageNotFound = wx.onPageNotFound;
var onError = wx.onError;
var onAudioInterruptionEnd = wx.onAudioInterruptionEnd;
var onAppShow = wx.onAppShow;
var onAppHide = wx.onAppHide;
var offPageNotFound = wx.offPageNotFound;
var offError = wx.offError;
var offAudioInterruptionEnd = wx.offAudioInterruptionEnd;
var offAudioInterruptionBegin = wx.offAudioInterruptionBegin;
var offAppShow = wx.offAppShow;
var offAppHide = wx.offAppHide;
var setEnableDebug = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setEnableDebug);
var getLogManager = wx.getLogManager;
var switchTab = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.switchTab);
var reLaunch = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.reLaunch);
var redirectTo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.redirectTo);
var navigateTo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.navigateTo);
var navigateBack = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.navigateBack);
var showToast = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showToast);
var showModal = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showModal);
var showLoading = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showLoading);
var showActionSheet = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showActionSheet);
var hideToast = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.hideToast);
var hideLoading = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.hideLoading);
var showNavigationBarLoading = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showNavigationBarLoading);
var setNavigationBarTitle = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setNavigationBarTitle);
var setNavigationBarColor = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setNavigationBarColor);
var hideNavigationBarLoading = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.hideNavigationBarLoading);
var setBackgroundTextStyle = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setBackgroundTextStyle);
var setBackgroundColor = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setBackgroundColor);
var showTabBarRedDot = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showTabBarRedDot);
var showTabBar = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showTabBar);
var setTabBarStyle = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setTabBarStyle);
var setTabBarItem = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setTabBarItem);
var setTabBarBadge = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setTabBarBadge);
var removeTabBarBadge = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.removeTabBarBadge);
var hideTabBarRedDot = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.hideTabBarRedDot);
var hideTabBar = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.hideTabBar);
var loadFontFace = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.loadFontFace);
var stopPullDownRefresh = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopPullDownRefresh);
var startPullDownRefresh = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startPullDownRefresh);
var pageScrollTo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.pageScrollTo);
var createAnimation = wx.createAnimation;
var setTopBarText = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setTopBarText);
var nextTick = wx.nextTick;
var getMenuButtonBoundingClientRect = wx.getMenuButtonBoundingClientRect;
var onWindowResize = wx.onWindowResize;
var offWindowResize = wx.offWindowResize;
var onKeyboardHeightChange = wx.onKeyboardHeightChange;
var getSelectedTextRange = wx.getSelectedTextRange;
var request = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.request);
var downloadFile = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.downloadFile);
var uploadFile = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.uploadFile);
var sendSocketMessage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.sendSocketMessage);
var onSocketOpen = wx.onSocketOpen;
var onSocketMessage = wx.onSocketMessage;
var onSocketError = wx.onSocketError;
var onSocketClose = wx.onSocketClose;
var connectSocket = wx.connectSocket;
var closeSocket = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.closeSocket);
var stopLocalServiceDiscovery = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopLocalServiceDiscovery);
var startLocalServiceDiscovery = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startLocalServiceDiscovery);
var onLocalServiceResolveFail = wx.onLocalServiceResolveFail;
var onLocalServiceLost = wx.onLocalServiceLost;
var onLocalServiceFound = wx.onLocalServiceFound;
var onLocalServiceDiscoveryStop = wx.onLocalServiceDiscoveryStop;
var offLocalServiceResolveFail = wx.offLocalServiceResolveFail;
var offLocalServiceLost = wx.offLocalServiceLost;
var offLocalServiceFound = wx.offLocalServiceFound;
var offLocalServiceDiscoveryStop = wx.offLocalServiceDiscoveryStop;
var createUDPSocket = wx.createUDPSocket;
var setStorageSync = wx.setStorageSync;
var setStorage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setStorage);
var removeStorageSync = wx.removeStorageSync;
var removeStorage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.removeStorage);
var getStorageSync = wx.getStorageSync;
var getStorageInfoSync = wx.getStorageInfoSync;
var getStorageInfo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getStorageInfo);
var getStorage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getStorage);
var clearStorageSync = wx.clearStorageSync;
var clearStorage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.clearStorage);
var createMapContext = wx.createMapContext;
var saveImageToPhotosAlbum = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.saveImageToPhotosAlbum);
var previewImage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.previewImage);
var getImageInfo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getImageInfo);
var compressImage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.compressImage);
var chooseMessageFile = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.chooseMessageFile);
var chooseImage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.chooseImage);
var saveVideoToPhotosAlbum = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.saveVideoToPhotosAlbum);
var createVideoContext = wx.createVideoContext;
var chooseVideo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.chooseVideo);
var chooseMedia = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.chooseMedia);
var stopVoice = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopVoice);
var setInnerAudioOption = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setInnerAudioOption);
var playVoice = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.playVoice);
var pauseVoice = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.pauseVoice);
var getAvailableAudioSources = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getAvailableAudioSources);
var createInnerAudioContext = wx.createInnerAudioContext;
var createAudioContext = wx.createAudioContext;
var stopBackgroundAudio = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopBackgroundAudio);
var seekBackgroundAudio = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.seekBackgroundAudio);
var playBackgroundAudio = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.playBackgroundAudio);
var pauseBackgroundAudio = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.pauseBackgroundAudio);
var onBackgroundAudioStop = wx.onBackgroundAudioStop;
var onBackgroundAudioPlay = wx.onBackgroundAudioPlay;
var onBackgroundAudioPause = wx.onBackgroundAudioPause;
var getBackgroundAudioPlayerState = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getBackgroundAudioPlayerState);
var getBackgroundAudioManager = wx.getBackgroundAudioManager;
var createLivePusherContext = wx.createLivePusherContext;
var createLivePlayerContext = wx.createLivePlayerContext;
var stopRecord = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopRecord);
var startRecord = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startRecord);
var getRecorderManager = wx.getRecorderManager;
var createCameraContext = wx.createCameraContext;
var stopLocationUpdate = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopLocationUpdate);
var startLocationUpdateBackground = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startLocationUpdateBackground);
var startLocationUpdate = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startLocationUpdate);
var openLocation = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.openLocation);
var onLocationChange = wx.onLocationChange;
var getLocation = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getLocation);
var chooseLocation = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.chooseLocation);
var updateShareMenu = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.updateShareMenu);
var showShareMenu = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.showShareMenu);
var hideShareMenu = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.hideShareMenu);
var getShareInfo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getShareInfo);
var createOffscreenCanvas = wx.createOffscreenCanvas;
var createCanvasContext = wx.createCanvasContext;
var canvasToTempFilePath = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.canvasToTempFilePath);
var canvasPutImageData = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.canvasPutImageData);
var canvasGetImageData = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.canvasGetImageData);
var saveFile = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.saveFile);
var removeSavedFile = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.removeSavedFile);
var openDocument = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.openDocument);
var getSavedFileList = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getSavedFileList);
var getSavedFileInfo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getSavedFileInfo);
var getFileSystemManager = wx.getFileSystemManager;
var getFileInfo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getFileInfo);
var login = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.login);
var checkSession = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.checkSession);
var navigateToMiniProgram = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.navigateToMiniProgram);
var navigateBackMiniProgram = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.navigateBackMiniProgram);
var getAccountInfoSync = wx.getAccountInfoSync;
var getUserInfo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getUserInfo);
var reportMonitor = wx.reportMonitor;
var reportAnalytics = wx.reportAnalytics;
var requestPayment = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.requestPayment);
var authorize = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.authorize);
var openSetting = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.openSetting);
var getSetting = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getSetting);
var chooseAddress = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.chooseAddress);
var openCard = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.openCard);
var addCard = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.addCard);
var chooseInvoiceTitle = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.chooseInvoiceTitle);
var chooseInvoice = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.chooseInvoice);
var startSoterAuthentication = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startSoterAuthentication);
var checkIsSupportSoterAuthentication = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.checkIsSupportSoterAuthentication);
var checkIsSoterEnrolledInDevice = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.checkIsSoterEnrolledInDevice);
var getWeRunData = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getWeRunData);
var stopBeaconDiscovery = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopBeaconDiscovery);
var startBeaconDiscovery = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startBeaconDiscovery);
var onBeaconUpdate = wx.onBeaconUpdate;
var onBeaconServiceChange = wx.onBeaconServiceChange;
var getBeacons = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getBeacons);
var stopWifi = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopWifi);
var startWifi = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startWifi);
var setWifiList = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setWifiList);
var onWifiConnected = wx.onWifiConnected;
var onGetWifiList = wx.onGetWifiList;
var getWifiList = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getWifiList);
var getConnectedWifi = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getConnectedWifi);
var connectWifi = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.connectWifi);
var addPhoneContact = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.addPhoneContact);
var writeBLECharacteristicValue = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.writeBLECharacteristicValue);
var readBLECharacteristicValue = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.readBLECharacteristicValue);
var onBLEConnectionStateChange = wx.onBLEConnectionStateChange;
var onBLECharacteristicValueChange = wx.onBLECharacteristicValueChange;
var notifyBLECharacteristicValueChange = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.notifyBLECharacteristicValueChange);
var getBLEDeviceServices = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getBLEDeviceServices);
var getBLEDeviceCharacteristics = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getBLEDeviceCharacteristics);
var createBLEConnection = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.createBLEConnection);
var closeBLEConnection = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.closeBLEConnection);
var stopBluetoothDevicesDiscovery = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopBluetoothDevicesDiscovery);
var startBluetoothDevicesDiscovery = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startBluetoothDevicesDiscovery);
var openBluetoothAdapter = wx.openBluetoothAdapter;
var onBluetoothDeviceFound = wx.onBluetoothDeviceFound;
var onBluetoothAdapterStateChange = wx.onBluetoothAdapterStateChange;
var getConnectedBluetoothDevices = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getConnectedBluetoothDevices);
var getBluetoothDevices = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getBluetoothDevices);
var getBluetoothAdapterState = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getBluetoothAdapterState);
var closeBluetoothAdapter = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.closeBluetoothAdapter);
var getBatteryInfoSync = wx.getBatteryInfoSync;
var getBatteryInfo = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getBatteryInfo);
var setClipboardData = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setClipboardData);
var getClipboardData = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getClipboardData);
var stopHCE = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopHCE);
var startHCE = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startHCE);
var sendHCEMessage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.sendHCEMessage);
var onHCEMessage = wx.onHCEMessage;
var getHCEState = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getHCEState);
var onNetworkStatusChange = wx.onNetworkStatusChange;
var getNetworkType = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getNetworkType);
var setScreenBrightness = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setScreenBrightness);
var setKeepScreenOn = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.setKeepScreenOn);
var onUserCaptureScreen = wx.onUserCaptureScreen;
var getScreenBrightness = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getScreenBrightness);
var makePhoneCall = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.makePhoneCall);
var stopAccelerometer = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopAccelerometer);
var startAccelerometer = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startAccelerometer);
var onAccelerometerChange = wx.onAccelerometerChange;
var stopCompass = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopCompass);
var startCompass = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startCompass);
var onCompassChange = wx.onCompassChange;
var stopDeviceMotionListening = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopDeviceMotionListening);
var startDeviceMotionListening = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startDeviceMotionListening);
var onDeviceMotionChange = wx.onDeviceMotionChange;
var stopGyroscope = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.stopGyroscope);
var startGyroscope = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.startGyroscope);
var onGyroscopeChange = wx.onGyroscopeChange;
var onMemoryWarning = wx.onMemoryWarning;
var scanCode = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.scanCode);
var vibrateShort = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.vibrateShort);
var vibrateLong = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.vibrateLong);
var createWorker = wx.createWorker;
var getExtConfigSync = wx.getExtConfigSync;
var getExtConfig = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.getExtConfig);
var createSelectorQuery = wx.createSelectorQuery;
var createIntersectionObserver = wx.createIntersectionObserver;
var createRewardedVideoAd = wx.createRewardedVideoAd;
var createInterstitialAd = wx.createInterstitialAd;
var cloud = wx.cloud;
var requestSubscribeMessage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.requestSubscribeMessage);
var hideHomeButton = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.hideHomeButton);
var getRealtimeLogManager = wx.getRealtimeLogManager;
var hideKeyboard = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["promisify"])(wx.hideKeyboard);

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/Ad/index.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/Ad/index.js ***!
  \**********************************************************************************************************************/
/*! exports provided: Ad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ad", function() { return Ad; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var Ad = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('ad');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/Audio/index.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/Audio/index.js ***!
  \*************************************************************************************************************************/
/*! exports provided: Audio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return Audio; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");
 // 微信已不再维护

var Audio = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('audio');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/Button/index.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/Button/index.js ***!
  \**************************************************************************************************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var Button = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('button');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/Camera/index.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/Camera/index.js ***!
  \**************************************************************************************************************************/
/*! exports provided: Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var Camera = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('camera');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/Canvas/index.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/Canvas/index.js ***!
  \**************************************************************************************************************************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var Canvas = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('canvas');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/Checkbox/index.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/Checkbox/index.js ***!
  \****************************************************************************************************************************/
/*! exports provided: Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var Checkbox = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('checkbox');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/CheckboxGroup/index.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/CheckboxGroup/index.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: CheckboxGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return CheckboxGroup; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var CheckboxGroup = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('checkbox-group');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/CoverImage/index.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/CoverImage/index.js ***!
  \******************************************************************************************************************************/
/*! exports provided: CoverImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return CoverImage; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var CoverImage = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('cover-image');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/CoverView/index.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/CoverView/index.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: CoverView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverView", function() { return CoverView; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var CoverView = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('cover-view');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/Editor/index.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/Editor/index.js ***!
  \**************************************************************************************************************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var Editor = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('editor');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/Form/index.js":
/*!************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/Form/index.js ***!
  \************************************************************************************************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var Form = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('form');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/FunctionalPageNavigator/index.js":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/FunctionalPageNavigator/index.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: FunctionalPageNavigator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionalPageNavigator", function() { return FunctionalPageNavigator; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var FunctionalPageNavigator = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('functional-page-navigator');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/Icon/index.js":
/*!************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/Icon/index.js ***!
  \************************************************************************************************************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var Icon = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('icon');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/Image/index.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/Image/index.js ***!
  \*************************************************************************************************************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var Image = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('image');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/Input/index.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/Input/index.js ***!
  \*************************************************************************************************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var Input = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('input');
Input.defaultProps = {
  type: 'text',
  maxlength: 140,
  selectionEnd: 999,
  selectionStart: 999
};

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/Label/index.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/Label/index.js ***!
  \*************************************************************************************************************************/
/*! exports provided: Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var Label = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('label');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/LivePlayer/index.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/LivePlayer/index.js ***!
  \******************************************************************************************************************************/
/*! exports provided: LivePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivePlayer", function() { return LivePlayer; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var LivePlayer = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('live-player');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/LivePusher/index.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/LivePusher/index.js ***!
  \******************************************************************************************************************************/
/*! exports provided: LivePusher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivePusher", function() { return LivePusher; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var LivePusher = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('live-pusher');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/Map/index.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/Map/index.js ***!
  \***********************************************************************************************************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var Map = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('map');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/MovableArea/index.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/MovableArea/index.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: MovableArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovableArea", function() { return MovableArea; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var MovableArea = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('movable-area');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/MovableView/index.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/MovableView/index.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: MovableView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovableView", function() { return MovableView; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var MovableView = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('movable-view');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/Navigator/index.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/Navigator/index.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: Navigator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return Navigator; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var Navigator = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('navigator');
Navigator.defaultProps = {
  openType: 'navigate'
};

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/OfficialAccount/index.js":
/*!***********************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/OfficialAccount/index.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: OfficialAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficialAccount", function() { return OfficialAccount; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var OfficialAccount = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('official-account');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/OpenData/index.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/OpenData/index.js ***!
  \****************************************************************************************************************************/
/*! exports provided: OpenData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenData", function() { return OpenData; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var OpenData = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('open-data');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/Picker/index.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/Picker/index.js ***!
  \**************************************************************************************************************************/
/*! exports provided: Picker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return Picker; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var Picker = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('picker');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/PickerView/index.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/PickerView/index.js ***!
  \******************************************************************************************************************************/
/*! exports provided: PickerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return PickerView; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var PickerView = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('picker-view');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/PickerViewColumn/index.js":
/*!************************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/PickerViewColumn/index.js ***!
  \************************************************************************************************************************************/
/*! exports provided: PickerViewColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return PickerViewColumn; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var PickerViewColumn = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('picker-view-column');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/Progress/index.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/Progress/index.js ***!
  \****************************************************************************************************************************/
/*! exports provided: Progress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return Progress; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var Progress = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('progress');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/Radio/index.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/Radio/index.js ***!
  \*************************************************************************************************************************/
/*! exports provided: Radio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return Radio; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var Radio = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('radio');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/RadioGroup/index.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/RadioGroup/index.js ***!
  \******************************************************************************************************************************/
/*! exports provided: RadioGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return RadioGroup; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var RadioGroup = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('radio-group');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/RichText/index.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/RichText/index.js ***!
  \****************************************************************************************************************************/
/*! exports provided: RichText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return RichText; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var RichText = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('rich-text');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/ScrollView/index.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/ScrollView/index.js ***!
  \******************************************************************************************************************************/
/*! exports provided: ScrollView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return ScrollView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};



var componentName = 'scroll-view';

var ScrollViewRender = function ScrollViewRender(props, ref) {
  var children = props.children,
      scrollTop = props.scrollTop,
      onScroll = props.onScroll,
      restProps = __rest(props, ["children", "scrollTop", "onScroll"]);

  var _a = __read(react__WEBPACK_IMPORTED_MODULE_0__["useState"](scrollTop), 2),
      innerScrollTop = _a[0],
      forceUpdateScrollTop = _a[1];

  var scrollTopRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](innerScrollTop);

  function handleScroll(event) {
    var _a;

    scrollTopRef.current = (_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.scrollTop;

    if (typeof onScroll === 'function') {
      onScroll(event);
    }
  }

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    scrollTopRef.current = scrollTop;
    forceUpdateScrollTop(scrollTop);
  }, [scrollTop]);

  var scrollViewProps = __assign(__assign({}, restProps), {
    onScroll: handleScroll,
    scrollTop: scrollTopRef.current,
    ref: ref
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](componentName, scrollViewProps, children);
};

var RemaxScrollView = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](ScrollViewRender);
RemaxScrollView.defaultProps = {
  upperThreshold: 50,
  lowerThreshold: 50
};
var ScrollView = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_1__["createHostComponent"])(componentName, RemaxScrollView);

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/Slider/index.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/Slider/index.js ***!
  \**************************************************************************************************************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var Slider = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('slider');
Slider.defaultProps = {
  blockSize: 28,
  step: 1,
  max: 100
};

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/Swiper/index.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/Swiper/index.js ***!
  \**************************************************************************************************************************/
/*! exports provided: Swiper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return Swiper; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var Swiper = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('swiper');
Swiper.defaultProps = {
  indicatorDots: false,
  indicatorColor: 'rgba(0, 0, 0, .3)',
  indicatorActiveColor: '#000000',
  autoplay: false,
  interval: 5000,
  duration: 500,
  circular: false,
  vertical: false,
  previousMargin: '0px',
  nextMargin: '0px',
  displayMultipleItems: 1,
  skipHiddenItemLayout: false,
  easingFunction: 'default'
};

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/SwiperItem/index.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/SwiperItem/index.js ***!
  \******************************************************************************************************************************/
/*! exports provided: SwiperItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return SwiperItem; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var SwiperItem = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('swiper-item');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/Switch/index.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/Switch/index.js ***!
  \**************************************************************************************************************************/
/*! exports provided: Switch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var Switch = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('switch');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/Text/index.js":
/*!************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/Text/index.js ***!
  \************************************************************************************************************************/
/*! exports provided: Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var Text = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('text');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/Textarea/index.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/Textarea/index.js ***!
  \****************************************************************************************************************************/
/*! exports provided: Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var Textarea = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('textarea');
Textarea.defaultProps = {
  maxlength: -1,
  selectionEnd: 999,
  selectionStart: 999,
  fixed: false
};

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/Video/index.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/Video/index.js ***!
  \*************************************************************************************************************************/
/*! exports provided: Video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



var hostComponentName = 'video';

var VideoRender = function VideoRender(props, ref) {
  var children = props.children,
      restProps = __rest(props, ["children"]);

  var videoProps = __assign(__assign({}, restProps), {
    ref: ref
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](hostComponentName, videoProps, children);
};
/**
 * video 默认宽度 300px、高度 225px，可通过 wxss 设置宽高
 */


var RemaxVideo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](VideoRender);
RemaxVideo.defaultProps = {
  controls: true,
  danmuBtn: false,
  enableDanmu: false,
  autoplay: false,
  loop: false,
  muted: false,
  initialTime: 0,
  pageGesture: false,
  showProgress: true,
  showFullscreenBtn: true,
  showPlayBtn: true,
  showCenterPlayBtn: true,
  enableProgressGesture: true,
  objectFit: 'contain',
  showMuteBtn: false,
  playBtnPosition: 'bottom',
  enablePlayGesture: false,
  autoPauseIfNavigate: true,
  autoPauseIfOpenNative: true,
  vslideGesture: false,
  vslideGestureInFullscreen: true
};
var Video = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_1__["createHostComponent"])(hostComponentName, RemaxVideo);

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/View/index.js":
/*!************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/View/index.js ***!
  \************************************************************************************************************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var View = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('view');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/WebView/index.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/WebView/index.js ***!
  \***************************************************************************************************************************/
/*! exports provided: WebView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return WebView; });
/* harmony import */ var _remax_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/shared */ "../../node_modules/@remax/shared/esm/index.js");

var WebView = Object(_remax_shared__WEBPACK_IMPORTED_MODULE_0__["createHostComponent"])('web-view');

/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/hostComponents/index.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/hostComponents/index.js ***!
  \*******************************************************************************************************************/
/*! exports provided: View, Input, Textarea, Video, Swiper, ScrollView, SwiperItem, MovableView, MovableArea, CoverView, CoverImage, Icon, Text, RichText, Progress, Button, CheckboxGroup, Checkbox, Form, Label, Picker, PickerView, PickerViewColumn, RadioGroup, Radio, Slider, Switch, Navigator, Image, LivePlayer, LivePusher, Map, Canvas, OpenData, OfficialAccount, Editor, Audio, Ad, WebView, FunctionalPageNavigator, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "../../node_modules/@remax/wechat/esm/hostComponents/View/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _View__WEBPACK_IMPORTED_MODULE_0__["View"]; });

/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ "../../node_modules/@remax/wechat/esm/hostComponents/Input/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_1__["Input"]; });

/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Textarea */ "../../node_modules/@remax/wechat/esm/hostComponents/Textarea/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _Textarea__WEBPACK_IMPORTED_MODULE_2__["Textarea"]; });

/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Video */ "../../node_modules/@remax/wechat/esm/hostComponents/Video/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return _Video__WEBPACK_IMPORTED_MODULE_3__["Video"]; });

/* harmony import */ var _Swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Swiper */ "../../node_modules/@remax/wechat/esm/hostComponents/Swiper/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return _Swiper__WEBPACK_IMPORTED_MODULE_4__["Swiper"]; });

/* harmony import */ var _ScrollView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ScrollView */ "../../node_modules/@remax/wechat/esm/hostComponents/ScrollView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return _ScrollView__WEBPACK_IMPORTED_MODULE_5__["ScrollView"]; });

/* harmony import */ var _SwiperItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SwiperItem */ "../../node_modules/@remax/wechat/esm/hostComponents/SwiperItem/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return _SwiperItem__WEBPACK_IMPORTED_MODULE_6__["SwiperItem"]; });

/* harmony import */ var _MovableView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MovableView */ "../../node_modules/@remax/wechat/esm/hostComponents/MovableView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableView", function() { return _MovableView__WEBPACK_IMPORTED_MODULE_7__["MovableView"]; });

/* harmony import */ var _MovableArea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MovableArea */ "../../node_modules/@remax/wechat/esm/hostComponents/MovableArea/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableArea", function() { return _MovableArea__WEBPACK_IMPORTED_MODULE_8__["MovableArea"]; });

/* harmony import */ var _CoverView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CoverView */ "../../node_modules/@remax/wechat/esm/hostComponents/CoverView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverView", function() { return _CoverView__WEBPACK_IMPORTED_MODULE_9__["CoverView"]; });

/* harmony import */ var _CoverImage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CoverImage */ "../../node_modules/@remax/wechat/esm/hostComponents/CoverImage/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return _CoverImage__WEBPACK_IMPORTED_MODULE_10__["CoverImage"]; });

/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Icon */ "../../node_modules/@remax/wechat/esm/hostComponents/Icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _Icon__WEBPACK_IMPORTED_MODULE_11__["Icon"]; });

/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Text */ "../../node_modules/@remax/wechat/esm/hostComponents/Text/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _Text__WEBPACK_IMPORTED_MODULE_12__["Text"]; });

/* harmony import */ var _RichText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RichText */ "../../node_modules/@remax/wechat/esm/hostComponents/RichText/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return _RichText__WEBPACK_IMPORTED_MODULE_13__["RichText"]; });

/* harmony import */ var _Progress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Progress */ "../../node_modules/@remax/wechat/esm/hostComponents/Progress/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _Progress__WEBPACK_IMPORTED_MODULE_14__["Progress"]; });

/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Button */ "../../node_modules/@remax/wechat/esm/hostComponents/Button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_15__["Button"]; });

/* harmony import */ var _CheckboxGroup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./CheckboxGroup */ "../../node_modules/@remax/wechat/esm/hostComponents/CheckboxGroup/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return _CheckboxGroup__WEBPACK_IMPORTED_MODULE_16__["CheckboxGroup"]; });

/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Checkbox */ "../../node_modules/@remax/wechat/esm/hostComponents/Checkbox/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _Checkbox__WEBPACK_IMPORTED_MODULE_17__["Checkbox"]; });

/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Form */ "../../node_modules/@remax/wechat/esm/hostComponents/Form/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_18__["Form"]; });

/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Label */ "../../node_modules/@remax/wechat/esm/hostComponents/Label/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _Label__WEBPACK_IMPORTED_MODULE_19__["Label"]; });

/* harmony import */ var _Picker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Picker */ "../../node_modules/@remax/wechat/esm/hostComponents/Picker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _Picker__WEBPACK_IMPORTED_MODULE_20__["Picker"]; });

/* harmony import */ var _PickerView__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./PickerView */ "../../node_modules/@remax/wechat/esm/hostComponents/PickerView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return _PickerView__WEBPACK_IMPORTED_MODULE_21__["PickerView"]; });

/* harmony import */ var _PickerViewColumn__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./PickerViewColumn */ "../../node_modules/@remax/wechat/esm/hostComponents/PickerViewColumn/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return _PickerViewColumn__WEBPACK_IMPORTED_MODULE_22__["PickerViewColumn"]; });

/* harmony import */ var _RadioGroup__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./RadioGroup */ "../../node_modules/@remax/wechat/esm/hostComponents/RadioGroup/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _RadioGroup__WEBPACK_IMPORTED_MODULE_23__["RadioGroup"]; });

/* harmony import */ var _Radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Radio */ "../../node_modules/@remax/wechat/esm/hostComponents/Radio/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _Radio__WEBPACK_IMPORTED_MODULE_24__["Radio"]; });

/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Slider */ "../../node_modules/@remax/wechat/esm/hostComponents/Slider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _Slider__WEBPACK_IMPORTED_MODULE_25__["Slider"]; });

/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Switch */ "../../node_modules/@remax/wechat/esm/hostComponents/Switch/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _Switch__WEBPACK_IMPORTED_MODULE_26__["Switch"]; });

/* harmony import */ var _Navigator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Navigator */ "../../node_modules/@remax/wechat/esm/hostComponents/Navigator/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _Navigator__WEBPACK_IMPORTED_MODULE_27__["Navigator"]; });

/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Image */ "../../node_modules/@remax/wechat/esm/hostComponents/Image/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _Image__WEBPACK_IMPORTED_MODULE_28__["Image"]; });

/* harmony import */ var _LivePlayer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./LivePlayer */ "../../node_modules/@remax/wechat/esm/hostComponents/LivePlayer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivePlayer", function() { return _LivePlayer__WEBPACK_IMPORTED_MODULE_29__["LivePlayer"]; });

/* harmony import */ var _LivePusher__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./LivePusher */ "../../node_modules/@remax/wechat/esm/hostComponents/LivePusher/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivePusher", function() { return _LivePusher__WEBPACK_IMPORTED_MODULE_30__["LivePusher"]; });

/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Map */ "../../node_modules/@remax/wechat/esm/hostComponents/Map/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _Map__WEBPACK_IMPORTED_MODULE_31__["Map"]; });

/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Canvas */ "../../node_modules/@remax/wechat/esm/hostComponents/Canvas/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _Canvas__WEBPACK_IMPORTED_MODULE_32__["Canvas"]; });

/* harmony import */ var _OpenData__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./OpenData */ "../../node_modules/@remax/wechat/esm/hostComponents/OpenData/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenData", function() { return _OpenData__WEBPACK_IMPORTED_MODULE_33__["OpenData"]; });

/* harmony import */ var _OfficialAccount__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./OfficialAccount */ "../../node_modules/@remax/wechat/esm/hostComponents/OfficialAccount/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OfficialAccount", function() { return _OfficialAccount__WEBPACK_IMPORTED_MODULE_34__["OfficialAccount"]; });

/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Editor */ "../../node_modules/@remax/wechat/esm/hostComponents/Editor/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _Editor__WEBPACK_IMPORTED_MODULE_35__["Editor"]; });

/* harmony import */ var _Audio__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Audio */ "../../node_modules/@remax/wechat/esm/hostComponents/Audio/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return _Audio__WEBPACK_IMPORTED_MODULE_36__["Audio"]; });

/* harmony import */ var _Ad__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Ad */ "../../node_modules/@remax/wechat/esm/hostComponents/Ad/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ad", function() { return _Ad__WEBPACK_IMPORTED_MODULE_37__["Ad"]; });

/* harmony import */ var _WebView__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./WebView */ "../../node_modules/@remax/wechat/esm/hostComponents/WebView/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _WebView__WEBPACK_IMPORTED_MODULE_38__["WebView"]; });

/* harmony import */ var _FunctionalPageNavigator__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./FunctionalPageNavigator */ "../../node_modules/@remax/wechat/esm/hostComponents/FunctionalPageNavigator/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionalPageNavigator", function() { return _FunctionalPageNavigator__WEBPACK_IMPORTED_MODULE_39__["FunctionalPageNavigator"]; });

/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Camera */ "../../node_modules/@remax/wechat/esm/hostComponents/Camera/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _Camera__WEBPACK_IMPORTED_MODULE_40__["Camera"]; });











































/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/index.js":
/*!****************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/index.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hostComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hostComponents */ "../../node_modules/@remax/wechat/esm/hostComponents/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["View"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Textarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Video"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Swiper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["ScrollView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["SwiperItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["MovableView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableArea", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["MovableArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["CoverView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["CoverImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Icon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["RichText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Progress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["CheckboxGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Picker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["PickerView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["PickerViewColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["RadioGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Radio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Slider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Switch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Navigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivePlayer", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["LivePlayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LivePusher", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["LivePusher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Canvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenData", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["OpenData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OfficialAccount", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["OfficialAccount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Editor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Audio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ad", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Ad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["WebView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionalPageNavigator", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["FunctionalPageNavigator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _hostComponents__WEBPACK_IMPORTED_MODULE_0__["Camera"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "../../node_modules/@remax/wechat/esm/api/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAppStub", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getAppStub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canIUse", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["canIUse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "base64ToArrayBuffer", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["base64ToArrayBuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayBufferToBase64", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["arrayBufferToBase64"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfoSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSystemInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystemInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSystemInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUpdateManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getUpdateManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLaunchOptionsSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getLaunchOptionsSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onPageNotFound", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onPageNotFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onError", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAudioInterruptionEnd", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onAudioInterruptionEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAppShow", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onAppShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAppHide", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onAppHide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offPageNotFound", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offPageNotFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offError", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAudioInterruptionEnd", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offAudioInterruptionEnd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAudioInterruptionBegin", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offAudioInterruptionBegin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAppShow", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offAppShow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offAppHide", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offAppHide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setEnableDebug", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setEnableDebug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLogManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getLogManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["switchTab"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reLaunch", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["reLaunch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["redirectTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBack", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateBack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showToast", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showActionSheet", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showActionSheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideToast", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showNavigationBarLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showNavigationBarLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setNavigationBarTitle", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setNavigationBarTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setNavigationBarColor", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setNavigationBarColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideNavigationBarLoading", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideNavigationBarLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBackgroundTextStyle", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setBackgroundTextStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBackgroundColor", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setBackgroundColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showTabBarRedDot", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showTabBarRedDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showTabBar", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showTabBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarStyle", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setTabBarStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarItem", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setTabBarItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTabBarBadge", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setTabBarBadge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeTabBarBadge", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["removeTabBarBadge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideTabBarRedDot", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideTabBarRedDot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideTabBar", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideTabBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadFontFace", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["loadFontFace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopPullDownRefresh", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startPullDownRefresh", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startPullDownRefresh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pageScrollTo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["pageScrollTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAnimation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTopBarText", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setTopBarText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["nextTick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMenuButtonBoundingClientRect", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getMenuButtonBoundingClientRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onWindowResize", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onWindowResize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offWindowResize", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offWindowResize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onKeyboardHeightChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onKeyboardHeightChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSelectedTextRange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSelectedTextRange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "request", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["request"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["downloadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["uploadFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendSocketMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["sendSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketOpen", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onSocketOpen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onSocketMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketError", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onSocketError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onSocketClose", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onSocketClose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectSocket", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["connectSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeSocket", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["closeSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopLocalServiceDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopLocalServiceDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startLocalServiceDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startLocalServiceDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceResolveFail", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onLocalServiceResolveFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceLost", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onLocalServiceLost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceFound", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onLocalServiceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocalServiceDiscoveryStop", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onLocalServiceDiscoveryStop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceResolveFail", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offLocalServiceResolveFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceLost", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offLocalServiceLost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceFound", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offLocalServiceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offLocalServiceDiscoveryStop", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["offLocalServiceDiscoveryStop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUDPSocket", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createUDPSocket"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStorageSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStorage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStorageSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["removeStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStorage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["removeStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageInfoSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getStorageInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorageInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getStorageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStorageSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["clearStorageSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStorage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["clearStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMapContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createMapContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveImageToPhotosAlbum", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["saveImageToPhotosAlbum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["previewImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImageInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getImageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compressImage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["compressImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseMessageFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseMessageFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseImage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveVideoToPhotosAlbum", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["saveVideoToPhotosAlbum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createVideoContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createVideoContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseVideo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseVideo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseMedia", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopVoice", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopVoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setInnerAudioOption", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setInnerAudioOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "playVoice", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["playVoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pauseVoice", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["pauseVoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAvailableAudioSources", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getAvailableAudioSources"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInnerAudioContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createInnerAudioContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAudioContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createAudioContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBackgroundAudio", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seekBackgroundAudio", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["seekBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "playBackgroundAudio", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["playBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pauseBackgroundAudio", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["pauseBackgroundAudio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioStop", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBackgroundAudioStop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioPlay", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBackgroundAudioPlay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBackgroundAudioPause", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBackgroundAudioPause"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBackgroundAudioPlayerState", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBackgroundAudioPlayerState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBackgroundAudioManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBackgroundAudioManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLivePusherContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createLivePusherContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLivePlayerContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createLivePlayerContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopRecord", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopRecord"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startRecord", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startRecord"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRecorderManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getRecorderManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCameraContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createCameraContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopLocationUpdate", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopLocationUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startLocationUpdateBackground", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startLocationUpdateBackground"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startLocationUpdate", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startLocationUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openLocation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocationChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onLocationChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseLocation", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateShareMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["updateShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showShareMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["showShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideShareMenu", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideShareMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getShareInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getShareInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createOffscreenCanvas", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createOffscreenCanvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCanvasContext", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createCanvasContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvasToTempFilePath", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["canvasToTempFilePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvasPutImageData", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["canvasPutImageData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canvasGetImageData", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["canvasGetImageData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["saveFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeSavedFile", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["removeSavedFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openDocument", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedFileList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSavedFileList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedFileInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSavedFileInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFileSystemManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getFileSystemManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFileInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getFileInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkSession", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["checkSession"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateToMiniProgram", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateToMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateBackMiniProgram", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["navigateBackMiniProgram"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAccountInfoSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getAccountInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getUserInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportMonitor", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["reportMonitor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportAnalytics", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["reportAnalytics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestPayment", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["requestPayment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authorize", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["authorize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openSetting", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetting", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseAddress", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseAddress"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openCard", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCard", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["addCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseInvoiceTitle", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseInvoiceTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseInvoice", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["chooseInvoice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startSoterAuthentication", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startSoterAuthentication"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkIsSupportSoterAuthentication", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["checkIsSupportSoterAuthentication"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkIsSoterEnrolledInDevice", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["checkIsSoterEnrolledInDevice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWeRunData", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getWeRunData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBeaconDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopBeaconDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startBeaconDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startBeaconDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeaconUpdate", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBeaconUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeaconServiceChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBeaconServiceChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBeacons", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBeacons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopWifi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startWifi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWifiList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setWifiList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onWifiConnected", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onWifiConnected"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onGetWifiList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onGetWifiList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWifiList", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getWifiList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConnectedWifi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getConnectedWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectWifi", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["connectWifi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPhoneContact", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["addPhoneContact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "writeBLECharacteristicValue", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["writeBLECharacteristicValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readBLECharacteristicValue", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["readBLECharacteristicValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBLEConnectionStateChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBLEConnectionStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBLECharacteristicValueChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyBLECharacteristicValueChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["notifyBLECharacteristicValueChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceServices", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBLEDeviceServices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBLEDeviceCharacteristics", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBLEDeviceCharacteristics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBLEConnection", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createBLEConnection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeBLEConnection", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["closeBLEConnection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopBluetoothDevicesDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopBluetoothDevicesDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startBluetoothDevicesDiscovery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startBluetoothDevicesDiscovery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openBluetoothAdapter", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["openBluetoothAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBluetoothDeviceFound", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBluetoothDeviceFound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBluetoothAdapterStateChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onBluetoothAdapterStateChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConnectedBluetoothDevices", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getConnectedBluetoothDevices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBluetoothDevices", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBluetoothDevices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBluetoothAdapterState", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBluetoothAdapterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "closeBluetoothAdapter", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["closeBluetoothAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfoSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBatteryInfoSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBatteryInfo", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getBatteryInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setClipboardData", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setClipboardData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClipboardData", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getClipboardData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopHCE", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopHCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startHCE", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startHCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendHCEMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["sendHCEMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onHCEMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onHCEMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHCEState", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getHCEState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onNetworkStatusChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onNetworkStatusChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNetworkType", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getNetworkType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setScreenBrightness", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setScreenBrightness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setKeepScreenOn", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["setKeepScreenOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUserCaptureScreen", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onUserCaptureScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScreenBrightness", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getScreenBrightness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makePhoneCall", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["makePhoneCall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopAccelerometer", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopAccelerometer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startAccelerometer", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startAccelerometer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onAccelerometerChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onAccelerometerChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopCompass", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopCompass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startCompass", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startCompass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onCompassChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onCompassChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopDeviceMotionListening", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopDeviceMotionListening"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startDeviceMotionListening", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startDeviceMotionListening"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDeviceMotionChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onDeviceMotionChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stopGyroscope", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["stopGyroscope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startGyroscope", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["startGyroscope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onGyroscopeChange", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onGyroscopeChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMemoryWarning", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["onMemoryWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scanCode", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["scanCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateShort", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["vibrateShort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vibrateLong", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["vibrateLong"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWorker", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createWorker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExtConfigSync", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getExtConfigSync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getExtConfig", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getExtConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSelectorQuery", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createSelectorQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createIntersectionObserver", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createIntersectionObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRewardedVideoAd", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createRewardedVideoAd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInterstitialAd", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createInterstitialAd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloud", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["cloud"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestSubscribeMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["requestSubscribeMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideHomeButton", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideHomeButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRealtimeLogManager", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["getRealtimeLogManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideKeyboard", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["hideKeyboard"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "../../node_modules/@remax/wechat/esm/types/index.js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_2__) if(["View","Input","Textarea","Video","Swiper","ScrollView","SwiperItem","MovableView","MovableArea","CoverView","CoverImage","Icon","Text","RichText","Progress","Button","CheckboxGroup","Checkbox","Form","Label","Picker","PickerView","PickerViewColumn","RadioGroup","Radio","Slider","Switch","Navigator","Image","LivePlayer","LivePusher","Map","Canvas","OpenData","OfficialAccount","Editor","Audio","Ad","WebView","FunctionalPageNavigator","Camera","getAppStub","canIUse","base64ToArrayBuffer","arrayBufferToBase64","getSystemInfoSync","getSystemInfo","getUpdateManager","getLaunchOptionsSync","onPageNotFound","onError","onAudioInterruptionEnd","onAppShow","onAppHide","offPageNotFound","offError","offAudioInterruptionEnd","offAudioInterruptionBegin","offAppShow","offAppHide","setEnableDebug","getLogManager","switchTab","reLaunch","redirectTo","navigateTo","navigateBack","showToast","showModal","showLoading","showActionSheet","hideToast","hideLoading","showNavigationBarLoading","setNavigationBarTitle","setNavigationBarColor","hideNavigationBarLoading","setBackgroundTextStyle","setBackgroundColor","showTabBarRedDot","showTabBar","setTabBarStyle","setTabBarItem","setTabBarBadge","removeTabBarBadge","hideTabBarRedDot","hideTabBar","loadFontFace","stopPullDownRefresh","startPullDownRefresh","pageScrollTo","createAnimation","setTopBarText","nextTick","getMenuButtonBoundingClientRect","onWindowResize","offWindowResize","onKeyboardHeightChange","getSelectedTextRange","request","downloadFile","uploadFile","sendSocketMessage","onSocketOpen","onSocketMessage","onSocketError","onSocketClose","connectSocket","closeSocket","stopLocalServiceDiscovery","startLocalServiceDiscovery","onLocalServiceResolveFail","onLocalServiceLost","onLocalServiceFound","onLocalServiceDiscoveryStop","offLocalServiceResolveFail","offLocalServiceLost","offLocalServiceFound","offLocalServiceDiscoveryStop","createUDPSocket","setStorageSync","setStorage","removeStorageSync","removeStorage","getStorageSync","getStorageInfoSync","getStorageInfo","getStorage","clearStorageSync","clearStorage","createMapContext","saveImageToPhotosAlbum","previewImage","getImageInfo","compressImage","chooseMessageFile","chooseImage","saveVideoToPhotosAlbum","createVideoContext","chooseVideo","chooseMedia","stopVoice","setInnerAudioOption","playVoice","pauseVoice","getAvailableAudioSources","createInnerAudioContext","createAudioContext","stopBackgroundAudio","seekBackgroundAudio","playBackgroundAudio","pauseBackgroundAudio","onBackgroundAudioStop","onBackgroundAudioPlay","onBackgroundAudioPause","getBackgroundAudioPlayerState","getBackgroundAudioManager","createLivePusherContext","createLivePlayerContext","stopRecord","startRecord","getRecorderManager","createCameraContext","stopLocationUpdate","startLocationUpdateBackground","startLocationUpdate","openLocation","onLocationChange","getLocation","chooseLocation","updateShareMenu","showShareMenu","hideShareMenu","getShareInfo","createOffscreenCanvas","createCanvasContext","canvasToTempFilePath","canvasPutImageData","canvasGetImageData","saveFile","removeSavedFile","openDocument","getSavedFileList","getSavedFileInfo","getFileSystemManager","getFileInfo","login","checkSession","navigateToMiniProgram","navigateBackMiniProgram","getAccountInfoSync","getUserInfo","reportMonitor","reportAnalytics","requestPayment","authorize","openSetting","getSetting","chooseAddress","openCard","addCard","chooseInvoiceTitle","chooseInvoice","startSoterAuthentication","checkIsSupportSoterAuthentication","checkIsSoterEnrolledInDevice","getWeRunData","stopBeaconDiscovery","startBeaconDiscovery","onBeaconUpdate","onBeaconServiceChange","getBeacons","stopWifi","startWifi","setWifiList","onWifiConnected","onGetWifiList","getWifiList","getConnectedWifi","connectWifi","addPhoneContact","writeBLECharacteristicValue","readBLECharacteristicValue","onBLEConnectionStateChange","onBLECharacteristicValueChange","notifyBLECharacteristicValueChange","getBLEDeviceServices","getBLEDeviceCharacteristics","createBLEConnection","closeBLEConnection","stopBluetoothDevicesDiscovery","startBluetoothDevicesDiscovery","openBluetoothAdapter","onBluetoothDeviceFound","onBluetoothAdapterStateChange","getConnectedBluetoothDevices","getBluetoothDevices","getBluetoothAdapterState","closeBluetoothAdapter","getBatteryInfoSync","getBatteryInfo","setClipboardData","getClipboardData","stopHCE","startHCE","sendHCEMessage","onHCEMessage","getHCEState","onNetworkStatusChange","getNetworkType","setScreenBrightness","setKeepScreenOn","onUserCaptureScreen","getScreenBrightness","makePhoneCall","stopAccelerometer","startAccelerometer","onAccelerometerChange","stopCompass","startCompass","onCompassChange","stopDeviceMotionListening","startDeviceMotionListening","onDeviceMotionChange","stopGyroscope","startGyroscope","onGyroscopeChange","onMemoryWarning","scanCode","vibrateShort","vibrateLong","createWorker","getExtConfigSync","getExtConfig","createSelectorQuery","createIntersectionObserver","createRewardedVideoAd","createInterstitialAd","cloud","requestSubscribeMessage","hideHomeButton","getRealtimeLogManager","hideKeyboard","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/types/config.js":
/*!***********************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/types/config.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* istanbul ignore next */


/***/ }),

/***/ "../../node_modules/@remax/wechat/esm/types/index.js":
/*!**********************************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/@remax/wechat/esm/types/index.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "../../node_modules/@remax/wechat/esm/types/config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _config__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _config__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "../../node_modules/classnames/index.js":
/*!*********************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/classnames/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* istanbul ignore next */
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

/* global define */
(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;

      var argType = _typeof(arg);

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classNames.apply(null, arg);

        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if ( true && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if ( true && _typeof(__webpack_require__(/*! !webpack amd options */ "../../node_modules/webpack/buildin/amd-options.js")) === 'object' && __webpack_require__(/*! !webpack amd options */ "../../node_modules/webpack/buildin/amd-options.js")) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    window.classNames = classNames;
  }
})();

/***/ }),

/***/ "../../node_modules/remax/one.js":
/*!**************************************************************************************!*\
  !*** /Users/ben/Documents/w/code/myproject/library/egg-ui/node_modules/remax/one.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/one */ "../../node_modules/@remax/one/esm/index.js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _remax_one__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _remax_one__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "../../node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* istanbul ignore next */
/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "../library/dist/components/button/index.css":
/*!***************************************************!*\
  !*** ../library/dist/components/button/index.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../library/dist/components/button/index.jsx":
/*!***************************************************!*\
  !*** ../library/dist/components/button/index.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EggButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/one */ "../../node_modules/remax/one.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "../library/dist/components/button/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);




function EggButton(props) {
  var children = props.children,
      _props$size = props.size,
      size = _props$size === void 0 ? 'large' : _props$size,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      onClick = props.onClick,
      _props$disable = props.disable,
      disable = _props$disable === void 0 ? false : _props$disable,
      _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      _props$shape = props.shape,
      shape = _props$shape === void 0 ? "" : _props$shape; // const [hover, setHover] = useState<string>('');

  var classNameProp = classnames__WEBPACK_IMPORTED_MODULE_2___default()('egg-button', className, size, type, shape, {
    'disable': disable
  });

  var handleClick = function handleClick() {
    if (!disable) {
      // setHover('heartBeat');
      onClick && onClick();
      var timer = setTimeout(function () {
        // setHover('');
        clearTimeout(timer);
      }, 600);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: classNameProp,
    onTap: handleClick
  }, children);
}

/***/ }),

/***/ "../library/dist/index.js":
/*!********************************!*\
  !*** ../library/dist/index.js ***!
  \********************************/
/*! exports provided: EggButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/button */ "../library/dist/components/button/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EggButton", function() { return _components_button__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "../../node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redchili_egg_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redchili/egg-ui */ "../library/dist/index.js");
/* harmony import */ var remax_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/one */ "../../node_modules/remax/one.js");
/* harmony import */ var _util_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/styled */ "./src/util/styled.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      height: 1000rpx;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      align-items: center;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var _page = function _page() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_one__WEBPACK_IMPORTED_MODULE_3__["View"], {
    style: Object(_util_styled__WEBPACK_IMPORTED_MODULE_4__["styled"])(_templateObject())
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_redchili_egg_ui__WEBPACK_IMPORTED_MODULE_2__["EggButton"], null, "\u63D0\u4EA4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_redchili_egg_ui__WEBPACK_IMPORTED_MODULE_2__["EggButton"], {
    shape: "round"
  }, "\u63D0\u4EA4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_redchili_egg_ui__WEBPACK_IMPORTED_MODULE_2__["EggButton"], {
    size: "medium"
  }, "\u63D0\u4EA4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_redchili_egg_ui__WEBPACK_IMPORTED_MODULE_2__["EggButton"], {
    size: "medium",
    shape: "round"
  }, "\u63D0\u4EA4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_redchili_egg_ui__WEBPACK_IMPORTED_MODULE_2__["EggButton"], {
    size: "small"
  }, "\u63D0\u4EA4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_redchili_egg_ui__WEBPACK_IMPORTED_MODULE_2__["EggButton"], {
    size: "medium",
    type: "light"
  }, "\u63D0\u4EA4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_redchili_egg_ui__WEBPACK_IMPORTED_MODULE_2__["EggButton"], {
    size: "medium",
    type: "reverse"
  }, "\u63D0\u4EA4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_redchili_egg_ui__WEBPACK_IMPORTED_MODULE_2__["EggButton"], {
    size: "small",
    disable: true
  }, "\u63D0\u4EA4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_redchili_egg_ui__WEBPACK_IMPORTED_MODULE_2__["EggButton"], {
    size: "small",
    type: "reverse",
    disable: true
  }, "\u63D0\u4EA4"));
};

/* harmony default export */ __webpack_exports__["default"] = (Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_page, "pages/index/index")));

/***/ }),

/***/ "./src/util/styled.ts":
/*!****************************!*\
  !*** ./src/util/styled.ts ***!
  \****************************/
/*! exports provided: styled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return styled; });
function toCamel(str) {
  return str.replace(/^-/, '').replace(/-(\w)(\w+)/g, function (a, b, c) {
    return b.toUpperCase() + c.toLowerCase();
  });
}

function styled(staticContent) {
  var res = '';

  for (var i = 0; i < staticContent.length; i += 1) {
    res += "".concat(staticContent[i]).concat(i < staticContent.length - 1 ? i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1] : "");
  }

  var tmp = res.trim();
  var tmpArr = tmp.split(';');
  var result = {};
  tmpArr.forEach(function (item) {
    if (item) {
      var arr = item.split(':');
      result[toCamel(arr[0]).trim()] = arr[1].trim();
    }
  });
  return result;
}

/***/ }),

/***/ 1:
/*!*****************************************!*\
  !*** multi ./src/pages/index/index.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ben/Documents/w/code/myproject/library/egg-ui/packages/weapp-demo/src/pages/index/index.tsx */"./src/pages/index/index.tsx");


/***/ })

},[[1,"runtime","remax-vendors"]]]);
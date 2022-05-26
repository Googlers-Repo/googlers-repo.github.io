/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 4335:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/jss/dist/jss.esm.js + 1 modules
var jss_esm = __webpack_require__(5668);
// EXTERNAL MODULE: ./node_modules/jss-preset-default/dist/jss-preset-default.esm.js + 20 modules
var jss_preset_default_esm = __webpack_require__(8121);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-onsenui/dist/react-onsenui.js
var react_onsenui = __webpack_require__(3057);
;// CONCATENATED MODULE: ./src/components/icons/SettingsIcon.jsx


class SettingsIcon extends react.Component {
  render() {
    var {
      color,
      size,
      className
    } = this.props;
    return /*#__PURE__*/react.createElement("svg", {
      "aria-hidden": "true",
      height: size,
      viewBox: "0 0 16 16",
      version: "1.1",
      width: size,
      "data-view-component": "true",
      class: "octicon octicon-gear " + className
    }, /*#__PURE__*/react.createElement("path", {
      fill: color,
      "fill-rule": "evenodd",
      d: "M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z"
    }));
  }

}

SettingsIcon.defaultProps = {
  size: "16"
};
/* harmony default export */ const icons_SettingsIcon = (SettingsIcon);
;// CONCATENATED MODULE: ./src/native/Constants.ts
var Constants = /** @class */ (function () {
    function Constants() {
    }
    /**
     * @deprecated
     */
    Constants.isAndroidIf = function (_if, _else) {
        if (this.isAndroid === true) {
            return _if;
        }
        else {
            return _else;
        }
    };
    var _a;
    _a = Constants;
    Constants.userAgentAndroid = "MMRL";
    Constants.userAgent = window.navigator.userAgent;
    /**
     * Checks if the app is on Android
     */
    Constants.isAndroid = _a.userAgentAndroid === _a.userAgent ? true : false;
    /**
     * string, null & undefined
     */
    Constants.undefined =  false || undefined;
    return Constants;
}());
/* harmony default export */ const native_Constants = (Constants);

;// CONCATENATED MODULE: ./src/activitys/AppCompatActivity.tsx
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var AppCompatActivity = /** @class */ (function (_super) {
    __extends(AppCompatActivity, _super);
    function AppCompatActivity(props) {
        var _this = _super.call(this, props) || this;
        _this.onlyAndroid();
        return _this;
    }
    AppCompatActivity.prototype.onlyAndroid = function () {
        if (native_Constants.isAndroid) {
            android.setStatusbarColor(this.setStatusbarColor());
        }
    };
    AppCompatActivity.prototype.componentDidMount = function () {
        this.onlyAndroid();
    };
    AppCompatActivity.prototype.componentDidUpdate = function () {
        this.onlyAndroid();
    };
    AppCompatActivity.prototype.componentWillUnmount = function () {
        if (native_Constants.isAndroid) {
            android.setStatusbarColor("#4a148c");
        }
    };
    /**
     * Sets an custom status bar color for the activity
     */
    AppCompatActivity.prototype.setStatusbarColor = function () {
        return "#4a148c";
    };
    /**
     * Creates the activity
     */
    AppCompatActivity.prototype.onCreate = function () {
        return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
    };
    /**
     * Renders the Toolbar
     */
    AppCompatActivity.prototype.onCreateToolbar = function () {
        return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
    };
    AppCompatActivity.prototype.onCreateModal = function () {
        return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
    };
    AppCompatActivity.prototype.onCreateBottomToolbar = function () {
        return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
    };
    AppCompatActivity.prototype.onCreateFAB = function () {
        return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
    };
    AppCompatActivity.prototype.onInit = function () { };
    AppCompatActivity.prototype.onShow = function () { };
    AppCompatActivity.prototype.onHide = function () { };
    AppCompatActivity.prototype.onInfiniteScroll = function () { };
    /**
     * @deprecated
     */
    AppCompatActivity.prototype.render = function () {
        return ((0,jsx_runtime.jsx)(react_onsenui.Page, __assign({ renderBottomToolbar: this.onCreateBottomToolbar, renderFixed: this.onCreateFAB, renderModal: this.onCreateModal, onInfiniteScroll: this.onInfiniteScroll, onHide: this.onHide, onShow: this.onShow, onInit: this.onInit, renderToolbar: this.onCreateToolbar }, { children: (0,jsx_runtime.jsx)(this.onCreate, {}) })));
    };
    return AppCompatActivity;
}(react.PureComponent));
/* harmony default export */ const activitys_AppCompatActivity = (AppCompatActivity);

;// CONCATENATED MODULE: ./src/builders/Log.ts

var Log = /** @class */ (function () {
    function Log(tag) {
        this.tag = tag;
    }
    Log.prototype.i = function (message) {
        if (native_Constants.isAndroid) {
            android.log(this.tag, message);
        }
        else {
            console.info("%c[".concat(this.tag, "]"), "color: #0693e3", message);
        }
    };
    Log.prototype.w = function (message) {
        if (native_Constants.isAndroid) {
            android.log(this.tag, message);
        }
        else {
            console.info("%c[".concat(this.tag, "]"), "color: orange", message);
        }
    };
    Log.prototype.e = function (message) {
        if (native_Constants.isAndroid) {
            android.log(this.tag, message);
        }
        else {
            console.info("%c[".concat(this.tag, "]"), "color: #d44950", message);
        }
    };
    Log.i = function (tag, message) {
        if (native_Constants.isAndroid) {
            android.log(tag, message);
        }
        else {
            console.info("%c[".concat(tag, "]"), "color: #0693e3", message);
        }
    };
    Log.w = function (tag, message) {
        if (native_Constants.isAndroid) {
            android.log(tag, message);
        }
        else {
            console.info("%c[".concat(tag, "]"), "color: orange", message);
        }
    };
    Log.e = function (tag, message) {
        if (native_Constants.isAndroid) {
            android.log(tag, message);
        }
        else {
            console.info("%c[".concat(tag, "]"), "color: #d44950", message);
        }
    };
    return Log;
}());
/* harmony default export */ const builders_Log = (Log);

;// CONCATENATED MODULE: ./src/builders/ShellBuilder.ts


var ShellBuilder = /** @class */ (function () {
    function ShellBuilder() {
        this.log = new builders_Log(this.constructor.name);
        this.dialog = {
            command: "",
        };
    }
    /**
     * Runs an Android native shell cmd
     * Should never used multiple
     */
    ShellBuilder.prototype.cmd = function (cmd) {
        this.dialog.command = cmd;
        return this;
    };
    /**
     * Executes an command without result
     */
    ShellBuilder.prototype.exec = function () {
        var command = this.dialog.command;
        if (native_Constants.isAndroid) {
            android.exec(command);
        }
        else {
            this.log.w(command);
        }
    };
    /**
     * Executes an command with result
     */
    ShellBuilder.prototype.result = function () {
        var command = this.dialog.command;
        if (native_Constants.isAndroid) {
            return android.execResult(command);
        }
        else {
            return command;
        }
    };
    return ShellBuilder;
}());
var Shell = new ShellBuilder();
/* harmony default export */ const builders_ShellBuilder = (Shell);

;// CONCATENATED MODULE: ./src/components/DeviceModule.tsx
var DeviceModule_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DeviceModule_assign = (undefined && undefined.__assign) || function () {
    DeviceModule_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return DeviceModule_assign.apply(this, arguments);
};




var DeviceModule = /** @class */ (function (_super) {
    DeviceModule_extends(DeviceModule, _super);
    function DeviceModule(props) {
        var _this = _super.call(this, props) || this;
        _this.render = function () {
            return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsx)("div", { children: (0,jsx_runtime.jsx)(react_onsenui.Card, DeviceModule_assign({ id: "id", 
                        //@ts-ignore
                        style: { marginTop: "4px", marginBottom: "4px" } }, { children: (0,jsx_runtime.jsxs)("item-card-wrapper", { children: [(0,jsx_runtime.jsx)("item-title", DeviceModule_assign({ className: "title" }, { children: (0,jsx_runtime.jsx)("item-module-name", { children: "name" }) })), (0,jsx_runtime.jsxs)("div", DeviceModule_assign({ className: "content" }, { children: [(0,jsx_runtime.jsx)("item-version-author", { children: "version / author" }), (0,jsx_runtime.jsx)("item-description", { children: "description" })] }))] }) }), "id") }) }));
        };
        _this.state = {
            props: {},
        };
        return _this;
    }
    DeviceModule.prototype.grep = function (prop) {
        var module = this.props.module;
        var readProp = builders_ShellBuilder.cmd("cat /data/adb/modules/".concat(module, "/module.prop | sed -n \"s|^").concat(prop, "=||p\"")).result();
        return readProp;
    };
    return DeviceModule;
}(react.Component));
/* harmony default export */ const components_DeviceModule = (DeviceModule);

;// CONCATENATED MODULE: ./src/activitys/fragments/DeviceModuleFragment.tsx
var DeviceModuleFragment_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DeviceModuleFragment_assign = (undefined && undefined.__assign) || function () {
    DeviceModuleFragment_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return DeviceModuleFragment_assign.apply(this, arguments);
};




var DeviceModuleFragment = /** @class */ (function (_super) {
    DeviceModuleFragment_extends(DeviceModuleFragment, _super);
    function DeviceModuleFragment(props) {
        var _this = _super.call(this, props) || this;
        _this.componentDidMount = function () {
            _this.setState({ modules: android.readModules().split(",") });
        };
        _this.render = function () {
            var moduels = _this.state.modules.map(function (item) {
                return (0,jsx_runtime.jsx)(components_DeviceModule, { module: item });
            });
            return ((0,jsx_runtime.jsx)(react_onsenui.Page, { children: (0,jsx_runtime.jsx)("div", DeviceModuleFragment_assign({ style: {
                        paddingBottom: "4px",
                    } }, { children: moduels })) }));
        };
        _this.state = {
            modules: [],
        };
        return _this;
    }
    return DeviceModuleFragment;
}(react.Component));
/* harmony default export */ const fragments_DeviceModuleFragment = (DeviceModuleFragment);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./src/native/SharedPreferences.ts

/**
 * Simple class to manage the web local sotrage and the Android native preferences
 */
var SharedPreferences = /** @class */ (function () {
    function SharedPreferences() {
        this.webStorage = localStorage;
    }
    /** Returns the current value associated with the given key, or null if the given key does not exist. */ // @ts-ignore
    SharedPreferences.prototype.getPref = function (key) {
        if (native_Constants.isAndroid) {
            var get = android.getPref(key);
            if (get === undefined || get === null || get === "") {
                return undefined;
            }
            else {
                return get;
            }
        }
        else {
            var get = this.webStorage.getItem(key);
            if (get === undefined || get === null || get === "") {
                return undefined;
            }
            else {
                return get;
            }
        }
    };
    /**
     * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
     *
     * Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. (Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.)
     *
     * Dispatches a storage event on Window objects holding an equivalent Storage object.
     */
    SharedPreferences.prototype.setPref = function (key, value) {
        if (native_Constants.isAndroid) {
            android.setPref(key, value);
        }
        else {
            this.webStorage.setItem(key, value);
        }
    };
    /**
     * Removes the key/value pair with the given key, if a key/value pair with the given key exists.
     *
     * Dispatches a storage event on Window objects holding an equivalent Storage object.
     */
    SharedPreferences.prototype.removePref = function (key) {
        if (native_Constants.isAndroid) {
            android.removePref(key);
        }
        else {
            this.webStorage.removeItem(key);
        }
    };
    /**
     * Removes all key/value pairs, if there are any.
     *
     * Dispatches a storage event on Window objects holding an equivalent Storage object.
     */
    SharedPreferences.prototype.clearPrefs = function () {
        if (native_Constants.isAndroid) {
            android.clearPrefs();
        }
        else {
            this.webStorage.clear();
        }
    };
    return SharedPreferences;
}());
/* harmony default export */ const native_SharedPreferences = (SharedPreferences);

;// CONCATENATED MODULE: ./src/utils/tools.ts

var tools = /** @class */ (function () {
    function tools() {
    }
    /**
     * Retuns the current page link
     * @param url string
     * @returns {string} string
     */
    tools.getSubPath = function (url) {
        return window.location.href.replace(/(\?(.*?)=(.*)|\?)/gm, "") + url;
    };
    tools.getUrlParam = function (param) {
        param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
        var regex = new RegExp("[?&]" + param + "=([^&#]*)");
        var url = decodeURIComponent(window.location.href);
        var match = regex.exec(url);
        return match ? match[1] : "";
    };
    /**
     * @param id Given element or ref
     * @param callback HTMLElement or React.RefObject
     *
     * @description
     * Usage
     * ```ts
     * // Id's
     * tools.ref("element", (element: HTMLElement) => { element.style.display = "none" })
     *
     * // Refs
     * tools.ref(this.myRef, (ref: HTMLElement) => { ref.style.display = "none" })
     * ```
     */
    tools.ref = function (id, callback) {
        if (typeof id == "string") {
            var element;
            if ((element = document.getElementById(id))) {
                if (typeof callback == "function") {
                    callback(element);
                }
            }
        }
        else {
            var reff;
            if ((reff = id)) {
                if (reff && reff.current) {
                    if (typeof callback == "function") {
                        callback(reff.current);
                    }
                }
            }
        }
    };
    /**
     * Checks if an string link is valid
     * @param input string
     * @returns {boolean} boolean
     */
    tools.validURL = function (input) {
        var pattern = new RegExp("^(https?:\\/\\/)?" + // protocol
            "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
            "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
            "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
            "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
            "(\\#[-a-z\\d_]*)?$", "i"); // fragment locator
        return !!pattern.test(input);
    };
    tools.stringToBoolean = function (value) {
        if (typeof value == "boolean")
            return value;
        switch (value) {
            case "true":
            case "yes":
            case "1":
                return true;
            case "false":
            case "no":
            case "0":
            case null:
                return false;
            default:
                return Boolean(value);
        }
    };
    /**
     * @deprecated
     */
    tools.typeIF = function (_, __, ___) {
        if (this.stringToBoolean(_)) {
            return __;
        }
        else {
            return ___;
        }
    };
    tools.typeCheck = function (_, __) {
        if (_ === undefined || _ === null || _ === "" || __ === 0 || _ === "0" || _ === false || _ === "false") {
            return __;
        }
        else {
            return _;
        }
    };
    tools.getSettingsSwitch = function (key) {
        if (new native_SharedPreferences().getPref(key) === "true") {
            return true;
        }
        else {
            return false;
        }
    };
    tools.returnUndefined = function (value, theReturn) {
        if (value === undefined) {
            return theReturn;
        }
        else {
            return false;
        }
    };
    return tools;
}());
/* harmony default export */ const utils_tools = (tools);

;// CONCATENATED MODULE: ./src/components/MDIcon.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class MDIcon extends react.Component {
  render() {
    var {
      icon,
      size,
      disabled,
      isInList,
      isInToolbar,
      theme,
      style
    } = this.props;
    return /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("span", {
      className: "material-icons-round " + utils_tools.typeIF(isInList, "list-item__icon", "") + " ons-icon " + "material-icons md-" + size + " md-" + theme + " " + utils_tools.typeIF(disabled, "md-inactive ", ""),
      style: _objectSpread({
        textAlign: "center",
        height: utils_tools.typeIF(isInToolbar, "56px", "100%"),
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }, style)
    }, icon));
  }

}

/* harmony default export */ const components_MDIcon = (MDIcon);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.js
var react_toastify_esm = __webpack_require__(2132);
// EXTERNAL MODULE: ./node_modules/onsenui/esm/index.js + 9 modules
var esm = __webpack_require__(6566);
// EXTERNAL MODULE: ./node_modules/@js.properties/properties/cjs/index.js
var cjs = __webpack_require__(8759);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);
// EXTERNAL MODULE: ./node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(461);
// EXTERNAL MODULE: ./node_modules/markdown-to-jsx/dist/index.modern.js
var index_modern = __webpack_require__(6243);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Alert.js + 46 modules
var Alert = __webpack_require__(6224);
;// CONCATENATED MODULE: ./src/components/icons/VerfifiedIcon.jsx


class VerifiedIcon extends react.Component {
  render() {
    var {
      color,
      size,
      className
    } = this.props;
    return /*#__PURE__*/react.createElement("svg", {
      "aria-hidden": "true",
      height: size,
      viewBox: "0 0 16 16",
      version: "1.1",
      width: size,
      "data-view-component": "true",
      className: "octicon octicon-verified ml-1 " + className
    }, /*#__PURE__*/react.createElement("path", {
      fill: color,
      d: "M9.585.52a2.678 2.678 0 00-3.17 0l-.928.68a1.178 1.178 0 01-.518.215L3.83 1.59a2.678 2.678 0 00-2.24 2.24l-.175 1.14a1.178 1.178 0 01-.215.518l-.68.928a2.678 2.678 0 000 3.17l.68.928c.113.153.186.33.215.518l.175 1.138a2.678 2.678 0 002.24 2.24l1.138.175c.187.029.365.102.518.215l.928.68a2.678 2.678 0 003.17 0l.928-.68a1.17 1.17 0 01.518-.215l1.138-.175a2.678 2.678 0 002.241-2.241l.175-1.138c.029-.187.102-.365.215-.518l.68-.928a2.678 2.678 0 000-3.17l-.68-.928a1.179 1.179 0 01-.215-.518L14.41 3.83a2.678 2.678 0 00-2.24-2.24l-1.138-.175a1.179 1.179 0 01-.518-.215L9.585.52zM7.303 1.728c.415-.305.98-.305 1.394 0l.928.68c.348.256.752.423 1.18.489l1.136.174c.51.078.909.478.987.987l.174 1.137c.066.427.233.831.489 1.18l.68.927c.305.415.305.98 0 1.394l-.68.928a2.678 2.678 0 00-.489 1.18l-.174 1.136a1.178 1.178 0 01-.987.987l-1.137.174a2.678 2.678 0 00-1.18.489l-.927.68c-.415.305-.98.305-1.394 0l-.928-.68a2.678 2.678 0 00-1.18-.489l-1.136-.174a1.178 1.178 0 01-.987-.987l-.174-1.137a2.678 2.678 0 00-.489-1.18l-.68-.927a1.178 1.178 0 010-1.394l.68-.928c.256-.348.423-.752.489-1.18l.174-1.136c.078-.51.478-.909.987-.987l1.137-.174a2.678 2.678 0 001.18-.489l.927-.68zM11.28 6.78a.75.75 0 00-1.06-1.06L7 8.94 5.78 7.72a.75.75 0 00-1.06 1.06l1.75 1.75a.75.75 0 001.06 0l3.75-3.75z"
    }));
  }

}

VerifiedIcon.defaultProps = {
  size: "16"
};
/* harmony default export */ const VerfifiedIcon = (VerifiedIcon);
;// CONCATENATED MODULE: ./src/components/icons/WarningIcon.jsx


class Warningicon extends react.Component {
  render() {
    var {
      color,
      size,
      className
    } = this.props;
    return /*#__PURE__*/react.createElement("svg", {
      "aria-hidden": "true",
      height: size,
      viewBox: "0 0 16 16",
      version: "1.1",
      width: size,
      "data-view-component": "true",
      className: "octicon octicon-report " + className
    }, /*#__PURE__*/react.createElement("path", {
      fill: color,
      "fill-rule": "evenodd",
      d: "M1.75 1.5a.25.25 0 00-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h6.5a.25.25 0 00.25-.25v-9.5a.25.25 0 00-.25-.25H1.75zM0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0114.25 13H8.06l-2.573 2.573A1.457 1.457 0 013 14.543V13H1.75A1.75 1.75 0 010 11.25v-9.5zM9 9a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"
    }));
  }

}

Warningicon.defaultProps = {
  size: "16"
};
/* harmony default export */ const WarningIcon = (Warningicon);
// EXTERNAL MODULE: ./node_modules/@mui/material/Accordion/Accordion.js + 7 modules
var Accordion = __webpack_require__(3731);
// EXTERNAL MODULE: ./node_modules/@mui/material/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/@mui/material/AccordionDetails/AccordionDetails.js + 1 modules
var AccordionDetails = __webpack_require__(5092);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ExpandMore.js
var ExpandMore = __webpack_require__(3508);
;// CONCATENATED MODULE: ./src/components/dapi/Changelog.jsx






class Changelog extends react.Component {
  render() {
    var {
      version,
      children
    } = this.props;
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Accordion/* default */.Z, null, /*#__PURE__*/react.createElement(AccordionSummary/* default */.Z, {
      expandIcon: /*#__PURE__*/react.createElement(ExpandMore/* default */.Z, null),
      "aria-controls": "panel1a-content",
      id: version
    }, /*#__PURE__*/react.createElement("span", null, version)), /*#__PURE__*/react.createElement(AccordionDetails/* default */.Z, null, /*#__PURE__*/react.createElement("span", null, children))));
  }

}

/* harmony default export */ const dapi_Changelog = (Changelog);
;// CONCATENATED MODULE: ./src/components/icons/CheckIcon.jsx


class CheckIcon extends react.Component {
  render() {
    var {
      color,
      size,
      className
    } = this.props;
    return /*#__PURE__*/react.createElement("svg", {
      width: size,
      viewBox: "0 0 16 16",
      version: "1.1",
      height: size,
      "aria-hidden": "true",
      className: "octicon octicon-check color-fg-success ml-n3 v-align-middle " + className
    }, /*#__PURE__*/react.createElement("path", {
      fill: color,
      "fill-rule": "evenodd",
      d: "M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
    }));
  }

}

CheckIcon.defaultProps = {
  size: "14",
  color: "#1a7f37"
};
/* harmony default export */ const icons_CheckIcon = (CheckIcon);
;// CONCATENATED MODULE: ./src/components/icons/DangerIcon.jsx


class DangerIcon extends react.Component {
  render() {
    var {
      color,
      size,
      className
    } = this.props;
    return /*#__PURE__*/react.createElement("svg", {
      width: size,
      viewBox: "0 0 16 16",
      version: "1.1",
      height: size,
      "aria-hidden": "true",
      className: "octicon octicon-x color-fg-danger ml-n3 v-align-middle " + className
    }, /*#__PURE__*/react.createElement("path", {
      fill: color,
      "fill-rule": "evenodd",
      d: "M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
    }));
  }

}

DangerIcon.defaultProps = {
  size: "14",
  color: "#cf222e"
};
/* harmony default export */ const icons_DangerIcon = (DangerIcon);
;// CONCATENATED MODULE: ./src/native/LinkManager.ts

var LinkManager = /** @class */ (function () {
    function LinkManager() {
    }
    LinkManager.open = function (link, target) {
        if (native_Constants.isAndroid) {
            android.open(link);
        }
        else {
            window.open(link, target);
        }
    };
    LinkManager.downloadFile = function (url, output) {
        if (native_Constants.isAndroid) {
            android.downloadFile(url, output);
        }
        else {
            window.open(url, "_parent");
        }
    };
    return LinkManager;
}());
/* harmony default export */ const native_LinkManager = (LinkManager);

;// CONCATENATED MODULE: ./src/components/dapi/A.tsx
var A_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A_assign = (undefined && undefined.__assign) || function () {
    A_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return A_assign.apply(this, arguments);
};




var A = /** @class */ (function (_super) {
    A_extends(A, _super);
    function A() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    A.prototype.render = function () {
        var _a = this.props, download = _a.download, href = _a.href, hrefLang = _a.hrefLang, media = _a.media, ping = _a.ping, rel = _a.rel, target = _a.target, type = _a.type, children = _a.children;
        return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsx)("a", A_assign({ download: download, hrefLang: hrefLang, media: media, ping: ping, rel: rel, target: utils_tools.typeCheck(target, "_blank"), type: type, title: "Open " + href, onClick: function () {
                    native_LinkManager.open(href);
                }, style: { cursor: "pointer", color: "#4a148c" } }, { children: children })) }));
    };
    return A;
}(react.Component));
/* harmony default export */ const dapi_A = (A);

// EXTERNAL MODULE: ./node_modules/react-device-detect/dist/lib.js
var lib = __webpack_require__(5518);
;// CONCATENATED MODULE: ./src/components/dapi/Video.tsx
var Video_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Video_assign = (undefined && undefined.__assign) || function () {
    Video_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Video_assign.apply(this, arguments);
};




var Video = /** @class */ (function (_super) {
    Video_extends(Video, _super);
    function Video() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Video.prototype.render = function () {
        var _a = this.props, src = _a.src, type = _a.type, controls = _a.controls, noSupportText = _a.noSupportText, style = _a.style, poster = _a.poster;
        var Style = {
            width: "100%",
            height: utils_tools.typeIF(lib/* isDesktop */.nI, "445px", "181.500px"),
            padding: "0px",
            margin: "0px",
        };
        if (type === "video/youtube") {
            return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsx)("iframe", { className: "Video--Custom card", style: utils_tools.typeCheck(style, Style), src: "https://www.youtube.com/embed/".concat(src.replace("https://www.youtube.com/watch?v=", "")) }) }));
        }
        return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsxs)("video", Video_assign({ className: "Video--Custom card", style: utils_tools.typeCheck(style, Style), controls: utils_tools.typeCheck(controls, true), poster: poster }, { children: [(0,jsx_runtime.jsx)("source", { src: src, type: utils_tools.typeCheck(type, "video/mp4") }), utils_tools.typeCheck(noSupportText, "Your browser does not support HTML video.")] })) }));
    };
    return Video;
}(react.Component));
/* harmony default export */ const dapi_Video = (Video);

;// CONCATENATED MODULE: ./src/components/dapi/DiscordWidget.tsx
var DiscordWidget_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var DiscordWidget = /** @class */ (function (_super) {
    DiscordWidget_extends(DiscordWidget, _super);
    function DiscordWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiscordWidget.prototype.render = function () {
        var _a = this.props, token = _a.token, width = _a.width, height = _a.height, theme = _a.theme;
        return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsx)("iframe", { className: "DiscordWidget--Custom card", style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "0px",
                }, src: "https://discord.com/widget?id=" + utils_tools.typeCheck(token, "753360232515764255") + " &theme=" + utils_tools.typeCheck(theme, "dark"), width: utils_tools.typeCheck(width, 350), height: utils_tools.typeCheck(height, 500), allowTransparency: true, frameBorder: "0", sandbox: "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" }) }));
    };
    return DiscordWidget;
}(react.Component));
/* harmony default export */ const dapi_DiscordWidget = (DiscordWidget);

;// CONCATENATED MODULE: ./src/activitys/ViewModuleActivity.tsx
var ViewModuleActivity_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ViewModuleActivity_assign = (undefined && undefined.__assign) || function () {
    ViewModuleActivity_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return ViewModuleActivity_assign.apply(this, arguments);
};


















var ViewModuleActivity = /** @class */ (function (_super) {
    ViewModuleActivity_extends(ViewModuleActivity, _super);
    function ViewModuleActivity(props) {
        var _this = _super.call(this, props) || this;
        _this.componentDidMount = function () {
            var _a;
            axios_default().get((_a = _this.props.extra) === null || _a === void 0 ? void 0 : _a.notes)
                .then(function (response) {
                _this.setState({
                    notes: response.data,
                });
            })
                .catch(function (error) {
                if (error.response.status === 404) {
                    _this.setState({
                        notes: "# 404: Not Found\n\n The author doesn't have created or uploaded an `README.md`, please try again later.\n\n\n## About Readme's\n\n- <dangericon color=\"#cf222e\" size=\"16\"/> readme.md\n- <checkicon color=\"#1a7f37\" size=\"16\"/> README.md",
                    });
                }
            })
                .then(function () {
                // always executed
            });
        };
        _this.renderToolbar = function () {
            var _a;
            var _b = (_a = _this.props.extra) === null || _a === void 0 ? void 0 : _a.moduleProps, minMagisk = _b.minMagisk, minApi = _b.minApi, maxApi = _b.maxApi, needRamdisk = _b.needRamdisk, changeBoot = _b.changeBoot;
            return (
            // @ts-ignore
            (0,jsx_runtime.jsxs)(react_onsenui.Toolbar, { children: [(0,jsx_runtime.jsx)("div", ViewModuleActivity_assign({ className: "left" }, { children: (0,jsx_runtime.jsx)(react_onsenui.BackButton
                        // @ts-ignore
                        , { 
                            // @ts-ignore
                            onClick: function () {
                                _this.props.popPage();
                            } }) })), 
                    /*
                  // @ts-ignore */
                    (function () {
                        // Don't show up if nothing ot these exists
                        if ((minMagisk || minApi || maxApi || needRamdisk || changeBoot) != ( false || undefined)) {
                            return ((0,jsx_runtime.jsx)("div", ViewModuleActivity_assign({ className: "right" }, { children: (0,jsx_runtime.jsx)(react_onsenui.ToolbarButton, ViewModuleActivity_assign({ style: { padding: "0px 10px" }, onClick: _this.showDialog }, { children: (0,jsx_runtime.jsx)(components_MDIcon, { icon: "info", isInToolbar: true, theme: "white", size: "24" }) })) })));
                        }
                    })(), (0,jsx_runtime.jsx)("div", ViewModuleActivity_assign({ className: "center" }, { children: _this.props.extra.name }))] }));
        };
        _this.showDialog = function () {
            _this.setState({ dialogShown: true });
        };
        _this.hideDialog = function () {
            _this.setState({ dialogShown: false });
        };
        _this.render = function () {
            var _a, _b;
            var _c = (_a = _this.props.extra) === null || _a === void 0 ? void 0 : _a.moduleProps, minMagisk = _c.minMagisk, minApi = _c.minApi, maxApi = _c.maxApi, needRamdisk = _c.needRamdisk, changeBoot = _c.changeBoot, name = _c.name, stars = _c.stars, alpahMMRLinstall = _c.alpahMMRLinstall;
            var _d = _this.props.extra, download = _d.download, id = _d.id;
            var _e = (_b = _this.props.extra) === null || _b === void 0 ? void 0 : _b.moduleOptions, verified = _e.verified, low = _e.low;
            return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsxs)(react_onsenui.Page, ViewModuleActivity_assign({ renderToolbar: _this.renderToolbar }, { children: [(0,jsx_runtime.jsxs)("div", ViewModuleActivity_assign({ style: { padding: "8px", marginBottom: "56px" }, className: "markdown-body-light" }, { children: [
                                /*
                              // @ts-ignore */
                                (function () {
                                    if (verified) {
                                        return ((0,jsx_runtime.jsxs)(Alert/* default */.Z, ViewModuleActivity_assign({ variant: "success" }, { children: [(0,jsx_runtime.jsx)("strong", { children: (0,jsx_runtime.jsx)(VerfifiedIcon, { color: "#0f5132" }) }), " ", "This module has been verified!"] }), "verified-module"));
                                    }
                                })(), 
                                /*
                              // @ts-ignore */
                                (function () {
                                    if (low) {
                                        return ((0,jsx_runtime.jsxs)(Alert/* default */.Z, ViewModuleActivity_assign({ variant: "warning" }, { children: [(0,jsx_runtime.jsx)("strong", { children: (0,jsx_runtime.jsx)(WarningIcon, { color: "#664d03" }) }), " ", "This is an low-quality module!"] }), "low-module"));
                                    }
                                })(), (0,jsx_runtime.jsx)(index_modern/* default */.Z, ViewModuleActivity_assign({ options: {
                                        overrides: {
                                            a: {
                                                component: dapi_A,
                                            },
                                            video: {
                                                component: dapi_Video,
                                            },
                                            discordwidget: {
                                                component: dapi_DiscordWidget,
                                            },
                                            changelog: {
                                                component: dapi_Changelog,
                                            },
                                            checkicon: {
                                                component: icons_CheckIcon,
                                            },
                                            dangericon: {
                                                component: icons_DangerIcon,
                                            },
                                        },
                                    } }, { children: _this.state.notes }))] })), (0,jsx_runtime.jsxs)("div", ViewModuleActivity_assign({ style: {
                                position: "fixed",
                                display: "flex",
                                left: 0,
                                padding: "8px",
                                bottom: 0,
                                width: "100%",
                                textAlign: "center",
                                backgroundColor: "rgba(256, 256, 256, .85)",
                            } }, { children: [(0,jsx_runtime.jsx)(react_onsenui.Button, ViewModuleActivity_assign({ modifier: "large", onClick: function () {
                                        native_LinkManager.downloadFile(download, "".concat(id, ".zip"));
                                    } }, { children: "Download" })), (0,jsx_runtime.jsx)("div", { style: { padding: "4px", display: !native_Constants.isAndroid ? "none" : "" } }), (0,jsx_runtime.jsx)(react_onsenui.Button, ViewModuleActivity_assign({ modifier: "large", disabled: !native_Constants.isAndroid, style: {
                                        display: !native_Constants.isAndroid ? "none" : "",
                                    }, onClick: function () {
                                        esm["default"].notification.alert("The option will be available in the future");
                                    } }, { children: "Install" }))] })), (0,jsx_runtime.jsx)(react_onsenui.Dialog, ViewModuleActivity_assign({ visible: _this.state.dialogShown, cancelable: true, onDialogCancel: _this.hideDialog }, { children: (0,jsx_runtime.jsx)("div", ViewModuleActivity_assign({ style: { margin: "20px" }, className: "markdown-body-light" }, { children: (0,jsx_runtime.jsxs)("table", ViewModuleActivity_assign({ style: { width: "100%" } }, { children: [(0,jsx_runtime.jsx)("th", { children: "Informations" }), (function () {
                                            if (minMagisk != ( false || undefined)) {
                                                return ((0,jsx_runtime.jsxs)("tr", { children: [(0,jsx_runtime.jsx)("td", ViewModuleActivity_assign({ style: { width: "100%" } }, { children: "Min. Magisk" })), (0,jsx_runtime.jsx)("td", { children: minMagisk })] }));
                                            }
                                            else {
                                                return null;
                                            }
                                        })(), (function () {
                                            if (minApi != ( false || undefined)) {
                                                return ((0,jsx_runtime.jsxs)("tr", { children: [(0,jsx_runtime.jsx)("td", ViewModuleActivity_assign({ style: { width: "100%" } }, { children: "Min. Android" })), (0,jsx_runtime.jsx)("td", { children: minApi })] }));
                                            }
                                            else {
                                                return null;
                                            }
                                        })(), (function () {
                                            if (maxApi != ( false || undefined)) {
                                                return ((0,jsx_runtime.jsxs)("tr", { children: [(0,jsx_runtime.jsx)("td", ViewModuleActivity_assign({ style: { width: "100%" } }, { children: "Max. Android" })), (0,jsx_runtime.jsx)("td", { children: maxApi })] }));
                                            }
                                            else {
                                                return null;
                                            }
                                        })(), (function () {
                                            if (needRamdisk != ( false || undefined)) {
                                                return ((0,jsx_runtime.jsxs)("tr", { children: [(0,jsx_runtime.jsx)("td", ViewModuleActivity_assign({ style: { width: "100%" } }, { children: "needsRamdisk" })), (0,jsx_runtime.jsx)("td", { children: needRamdisk })] }));
                                            }
                                            else {
                                                return null;
                                            }
                                        })(), (function () {
                                            if (changeBoot != ( false || undefined)) {
                                                return ((0,jsx_runtime.jsxs)("tr", { children: [(0,jsx_runtime.jsx)("td", ViewModuleActivity_assign({ style: { width: "100%" } }, { children: "changeBoot" })), (0,jsx_runtime.jsx)("td", { children: changeBoot })] }));
                                            }
                                            else {
                                                return null;
                                            }
                                        })()] })) })) }))] })) }));
        };
        _this.state = {
            notes: "",
            dialogShown: false,
        };
        return _this;
    }
    return ViewModuleActivity;
}(react.Component));
/* harmony default export */ const activitys_ViewModuleActivity = (ViewModuleActivity);

;// CONCATENATED MODULE: ./src/components/ExploreModule.tsx
var ExploreModule_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ExploreModule_assign = (undefined && undefined.__assign) || function () {
    ExploreModule_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return ExploreModule_assign.apply(this, arguments);
};












var ExploreModule = /** @class */ (function (_super) {
    ExploreModule_extends(ExploreModule, _super);
    function ExploreModule(props) {
        var _this = _super.call(this, props) || this;
        _this.componentDidMount = function () {
            var propsUrl = _this.props.propsUrl;
            axios_default().get(propsUrl).then(function (response) {
                _this.setState({
                    props: cjs_default().parseToProperties(response.data),
                });
            });
        };
        _this.openReadmeFromParam = function (e) {
            _this.componentDidMount;
            var getId = _this.props.getId;
            try {
                var modul = utils_tools.getUrlParam("module");
                if (modul == getId) {
                    setTimeout(function () {
                        _this.log.i("Module found! Open ".concat(_this.state.props.name));
                        e.click();
                    }, 2000);
                }
            }
            catch (error) {
                _this.log.w("Failed to open given module");
            }
        };
        _this.render = function () {
            var _a, _b, _c;
            var _d = _this.props, notesUrl = _d.notesUrl, downloadUrl = _d.downloadUrl, pushPage = _d.pushPage, moduleOptions = _d.moduleOptions, stars = _d.stars, last_update = _d.last_update, getId = _d.getId;
            var props = _this.state.props;
            var isLQModule = (_a = moduleOptions[getId]) === null || _a === void 0 ? void 0 : _a.low;
            var isVerified = (_b = moduleOptions[getId]) === null || _b === void 0 ? void 0 : _b.verified;
            var _display = (_c = moduleOptions[getId]) === null || _c === void 0 ? void 0 : _c.display;
            var getMagiskVersion = native_Constants.isAndroid ? android.getMagiskVersionCode() : 0;
            return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsx)("div", ExploreModule_assign({ ref: _this.openReadmeFromParam, onClick: function () {
                        pushPage({
                            key: "view_".concat(props.id),
                            activity: activitys_ViewModuleActivity,
                            extra: {
                                name: props.name,
                                download: downloadUrl,
                                id: getId,
                                author: props.author,
                                notes: notesUrl,
                                stars: stars,
                                moduleOptions: {
                                    verified: isVerified,
                                    low: isLQModule,
                                },
                                moduleProps: {
                                    minMagisk: props.minMagisk,
                                    minApi: props.minApi,
                                    maxApi: props.maxApi,
                                    needRamdisk: props === null || props === void 0 ? void 0 : props.needRamdisk,
                                    changeBoot: props.changeBoot,
                                },
                            },
                        });
                    } }, { children: (0,jsx_runtime.jsx)(react_onsenui.Card, ExploreModule_assign({ id: getId, ref: _this.searchedCard, 
                        //@ts-ignore
                        style: { display: _display, marginTop: "4px", marginBottom: "4px" } }, { children: (0,jsx_runtime.jsxs)("item-card-wrapper", { children: [(0,jsx_runtime.jsxs)("item-title", ExploreModule_assign({ className: "title" }, { children: [(function () {
                                            if (isLQModule) {
                                                if (utils_tools.getSettingsSwitch("disable_lq_modules")) {
                                                    return null;
                                                }
                                                else {
                                                    return ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)(Chip/* default */.Z, { onClick: function () {
                                                                    esm["default"].notification.alert("This module has a bad module.prop");
                                                                }, variant: "outlined", color: "warning", size: "small", label: "Low-quality module" }), " "] }));
                                                }
                                            }
                                            else {
                                                return null;
                                            }
                                        })(), (0,jsx_runtime.jsx)("item-module-name", ExploreModule_assign({ ref: _this.cardName }, { children: props.name })), (function () {
                                            if (isVerified) {
                                                return ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [" ", (0,jsx_runtime.jsx)(VerfifiedIcon, { color: "#4a148c" })] }));
                                            }
                                            else {
                                                return null;
                                            }
                                        })()] })), (0,jsx_runtime.jsxs)("div", ExploreModule_assign({ className: "content" }, { children: [(0,jsx_runtime.jsx)("item-version-author", ExploreModule_assign({ style: {
                                                marginTop: isLQModule && !utils_tools.getSettingsSwitch("disable_lq_modules") ? "4px" : "",
                                            } }, { children: props.version + " / " + props.author })), (0,jsx_runtime.jsx)("item-description", { children: props.description }), (0,jsx_runtime.jsxs)("item-last-update", { children: ["Last update: ", _this.formatDate(new Date(last_update))] })] }))] }) }), getId) })) }));
        };
        _this.state = {
            props: {},
        };
        _this.searchedCard = react.createRef();
        _this.cardName = react.createRef();
        _this.log = new builders_Log(_this.constructor.name);
        return _this;
    }
    ExploreModule.prototype.componentDidUpdate = function () {
        var _this = this;
        var searchState = this.props.searchState;
        utils_tools.ref(this.cardName, function (ref) {
            if (searchState != "") {
                var search = ref.textContent || ref.innerText;
                if (search.toLowerCase().indexOf(searchState) > -1) {
                    utils_tools.ref(_this.searchedCard, function (ref) {
                        ref.style.display = "";
                    });
                }
                else {
                    utils_tools.ref(_this.searchedCard, function (ref) {
                        ref.style.display = "none";
                    });
                }
            }
            else {
                utils_tools.ref(_this.searchedCard, function (ref) {
                    ref.style.display = "";
                });
            }
        });
    };
    ExploreModule.prototype.formatDate = function (date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        // @ts-ignore
        minutes = minutes < 10 ? "0" + minutes : minutes;
        var strTime = hours + ":" + minutes + " " + ampm;
        return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime;
    };
    return ExploreModule;
}(react.Component));
/* harmony default export */ const components_ExploreModule = (ExploreModule);

;// CONCATENATED MODULE: ./src/activitys/fragments/ExploreModuleFragment.tsx
var ExploreModuleFragment_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ExploreModuleFragment_assign = (undefined && undefined.__assign) || function () {
    ExploreModuleFragment_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return ExploreModuleFragment_assign.apply(this, arguments);
};









var ExploreModuleFragment = /** @class */ (function (_super) {
    ExploreModuleFragment_extends(ExploreModuleFragment, _super);
    function ExploreModuleFragment(props) {
        var _this = _super.call(this, props) || this;
        _this.componentDidMount = function () {
            var moduels = utils_tools.getUrlParam("module");
            if (moduels != ( false || "")) {
                react_toastify_esm/* toast.info */.Am.info("Please wait 2 seconds after the loading screen is gone", {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            setTimeout(function () {
                _this.setState({ loading: false });
            }, 2000);
            axios_default().get(_this.prefManager.getPref("repo"))
                .then(function (response) {
                var modules = response.data.modules;
                _this.setState({
                    modulesIndex: modules,
                    status: "success",
                });
            })
                .catch(function (error) {
                _this.setState({
                    modulesIndex: [],
                    status: "error",
                });
            })
                .then(function () {
                // always executed
            });
            axios_default().get("https://repo.dergoogler.com/moduleOptions.json").then(function (response) {
                _this.setState({
                    moduleOptions: response.data,
                });
            });
        };
        _this.componentDidCatch = function () { };
        _this.filter = function (e) {
            _this.setState({ currentSerachText: e.target.value.toLowerCase() });
        };
        _this.triggerSearch = function () {
            var currentSerachText = _this.state.currentSerachText;
            _this.setState({ search: currentSerachText });
        };
        _this.render = function () {
            var _a = _this.state, search = _a.search, loading = _a.loading;
            var modules = _this.state.modulesIndex.map(function (item) {
                return ((0,jsx_runtime.jsx)(components_ExploreModule, { getId: item.id, propsUrl: item.prop_url, notesUrl: item.notes_url, downloadUrl: item.zip_url, pushPage: _this.props.pushPage, searchState: search, moduleOptions: _this.state.moduleOptions, last_update: item.last_update }, item.id));
            });
            return ((0,jsx_runtime.jsx)(react_onsenui.Page, { children: (0,jsx_runtime.jsxs)("div", ExploreModuleFragment_assign({ style: {
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        padding: "0px",
                        paddingBottom: "0px",
                        flexDirection: "column",
                    } }, { children: [(0,jsx_runtime.jsxs)("div", ExploreModuleFragment_assign({ style: {
                                textAlign: "center",
                                display: "inline-flex",
                                justifyContent: "center",
                                padding: "8px 8px 4px",
                            } }, { children: [(0,jsx_runtime.jsx)(react_onsenui.SearchInput
                                // @ts-ignore
                                , { 
                                    // @ts-ignore
                                    placeholder: "Search modules", ref: _this.searchBar, style: {
                                        borderRadius: "8px",
                                        width: "100%",
                                        marginRight: "4px",
                                    }, onChange: _this.filter }), (0,jsx_runtime.jsx)(react_onsenui.Button, ExploreModuleFragment_assign({ onClick: _this.triggerSearch, style: {
                                        textAlign: "center",
                                        display: "flex",
                                        justifyContent: "center",
                                        marginLeft: "4px",
                                        borderRadius: "8px",
                                    } }, { children: (0,jsx_runtime.jsx)(components_MDIcon, { icon: "search", size: "24", ignoreDarkmode: true }) }))] })), (0,jsx_runtime.jsx)("module-container", ExploreModuleFragment_assign({ style: {
                                paddingBottom: "4px",
                            } }, { children: (function () {
                                if (loading) {
                                    return ((0,jsx_runtime.jsx)(react_onsenui.ProgressCircular, { indeterminate: true, style: {
                                            position: "absolute",
                                            left: "50%",
                                            top: "50%",
                                            WebkitTransform: "translate(-50%, -50%)",
                                            transform: "translate(-50%, -50%)",
                                        } }));
                                }
                                else {
                                    return modules;
                                }
                            })() }))] })) }));
        };
        _this.state = {
            modulesIndex: [],
            currentSerachText: "",
            search: "",
            moduleOptions: {},
            loading: true,
        };
        _this.prefManager = new native_SharedPreferences();
        return _this;
    }
    return ExploreModuleFragment;
}(react.Component));
/* harmony default export */ const fragments_ExploreModuleFragment = (ExploreModuleFragment);

;// CONCATENATED MODULE: ./src/components/Gesture.tsx
var Gesture_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Gesture_assign = (undefined && undefined.__assign) || function () {
    Gesture_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Gesture_assign.apply(this, arguments);
};



var Gesture = /** @class */ (function (_super) {
    Gesture_extends(Gesture, _super);
    function Gesture(props) {
        var _this = _super.call(this, props) || this;
        _this.gerstureID = react.createRef();
        return _this;
    }
    Gesture.prototype.componentDidMount = function () {
        var _a = this.props, callback = _a.callback, event = _a.event;
        utils_tools.ref(this.gerstureID, function (ref) {
            ref.addEventListener(event, callback);
        });
    };
    Gesture.prototype.render = function () {
        var children = this.props.children;
        return (0,jsx_runtime.jsx)("div", Gesture_assign({ ref: this.gerstureID }, { children: children }));
    };
    return Gesture;
}(react.Component));
/* harmony default export */ const components_Gesture = (Gesture);

;// CONCATENATED MODULE: ./src/builders/ListViewBuilder.tsx
var ListViewBuilder_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ListViewBuilder_assign = (undefined && undefined.__assign) || function () {
    ListViewBuilder_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return ListViewBuilder_assign.apply(this, arguments);
};








var ListViewBuilder = /** @class */ (function (_super) {
    ListViewBuilder_extends(ListViewBuilder, _super);
    function ListViewBuilder(props) {
        var _this = _super.call(this, props) || this;
        _this.prefManager = new native_SharedPreferences();
        return _this;
    }
    /**
     * Check if an key is there
     * @param key
     * @returns {Boolean}
     */
    ListViewBuilder.prototype.getSettingSwitch = function (key) {
        var get = this.getPref(key);
        if (get === undefined || get === null || get === "" || get === "false") {
            return false;
        }
        else {
            return true;
        }
    };
    ListViewBuilder.prototype.getSettingSelect = function (key) {
        var get = this.getPref(key);
        if (get === undefined || get === null || get === "") {
            return "en";
        }
        else {
            return get;
        }
    };
    ListViewBuilder.prototype.getPref = function (key) {
        return this.prefManager.getPref(key);
    };
    ListViewBuilder.prototype.setPref = function (key, content) {
        this.prefManager.setPref(key, content);
    };
    ListViewBuilder.prototype.setSetting = function (key, data) {
        this.setPref(key, data);
    };
    ListViewBuilder.prototype.default = function (_, __, ___) {
        if (_ === undefined || _ === null) {
            return __;
        }
        else if (_ === undefined || _ === null) {
            return ___;
        }
    };
    ListViewBuilder.prototype.render = function () {
        var _this = this;
        var _a = this.props, data = _a.data, pushPage = _a.pushPage;
        var list = data.map(function (header) { return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsxs)("section", ListViewBuilder_assign({ id: header.id, className: header.className, style: header.style }, { children: [(0,jsx_runtime.jsx)(react_onsenui.ListTitle, { children: header.title }), header.content.map(function (item) { return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsxs)(react_onsenui.ListItem, ListViewBuilder_assign({ modifier: utils_tools.typeCheck(item.modifier, ""), tappable: utils_tools.typeCheck(item.tappable, false), id: item.key + "-ListItem", style: item.style, onClick: function () {
                                if (typeof item.onClick == "function") {
                                    var key = item.key;
                                    item.onClick(key, pushPage);
                                }
                            } }, { children: [(function () {
                                    if (item.icon === ( false || undefined)) {
                                        return;
                                    }
                                    else {
                                        if (react.isValidElement(item.icon)) {
                                            return (0,jsx_runtime.jsx)("div", ListViewBuilder_assign({ className: "left" }, { children: item.icon }));
                                        }
                                        else {
                                            return ((0,jsx_runtime.jsx)("div", ListViewBuilder_assign({ className: "left" }, { children: (0,jsx_runtime.jsx)(components_MDIcon, { icon: item.icon, size: "24", isInList: true }) })));
                                        }
                                    }
                                })(), (0,jsx_runtime.jsx)(components_Gesture, ListViewBuilder_assign({ event: "hold", callback: function () {
                                        var _a, _b;
                                        esm["default"].notification.alert({
                                            message: (_a = item.helper) === null || _a === void 0 ? void 0 : _a.text,
                                            title: "Info",
                                            buttonLabels: ["Ok"],
                                            animation: "default",
                                            primaryButtonIndex: 1,
                                            cancelable: utils_tools.typeCheck((_b = item.helper) === null || _b === void 0 ? void 0 : _b.cancelable, true),
                                        });
                                    } }, { children: (0,jsx_runtime.jsx)("div", ListViewBuilder_assign({ className: "center" }, { children: item.text })) })), (0,jsx_runtime.jsx)("div", ListViewBuilder_assign({ className: "right" }, { children: (function () {
                                        var _a;
                                        switch (item.type) {
                                            case "switch":
                                                return ((0,jsx_runtime.jsx)(react_onsenui.Switch, { checked: _this.default(item.switchDefaultValue, _this.getSettingSwitch(item.key), false), disabled: Boolean(item.disabled), onChange: function (e) {
                                                        /**
                                                         * This will keep the default funtion
                                                         */
                                                        var keepDefaultFuntion = function () { return _this.setSetting(item.key, e.target.checked); };
                                                        if (typeof item.callback == "function") {
                                                            var key = item.key;
                                                            item.callback(e, key, keepDefaultFuntion());
                                                        }
                                                        else {
                                                            keepDefaultFuntion();
                                                        }
                                                    } }));
                                            case "select":
                                                return ((0,jsx_runtime.jsxs)(react_onsenui.Select, ListViewBuilder_assign({ id: "choose-sel", disabled: Boolean(item.disabled), value: utils_tools.typeCheck(_this.getSettingSelect(item.key), utils_tools.typeCheck(item.selectDefaultValue, "")), onChange: function (e) {
                                                        /**
                                                         * This will keep the default funtion
                                                         */
                                                        var keepDefaultFuntion = function () { return _this.setSetting(item.key, e.target.value); };
                                                        if (typeof item.callback == "function") {
                                                            var key = item.key;
                                                            item.callback(e, key, keepDefaultFuntion());
                                                        }
                                                        else {
                                                            keepDefaultFuntion();
                                                        }
                                                    } }, { children: [(0,jsx_runtime.jsx)("option", ListViewBuilder_assign({ value: "", selected: true, disabled: true, hidden: true }, { children: "Choose" })), (_a = item.selectValue) === null || _a === void 0 ? void 0 : _a.map(function (select) { return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsx)("option", ListViewBuilder_assign({ value: select.value, disabled: select.disabled }, { children: select.text })) })); })] })));
                                            default:
                                                return;
                                        }
                                    })() }))] })) })); })] })) })); });
        return list;
    };
    return ListViewBuilder;
}(react.Component));


;// CONCATENATED MODULE: ./licenseBuild/licenses.json
const licenses_namespaceObject = JSON.parse('{"@ampproject/remapping@2.2.0":{"licenses":"Apache-2.0","repository":"https://github.com/ampproject/remapping","publisher":"Justin Ridgewell","name":"@ampproject/remapping","version":"2.2.0","description":"Remap sequential sourcemaps through transformations to point at the original source code"},"@babel/code-frame@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/code-frame","version":"7.16.7","description":"Generate errors that contain a code frame that point to source locations."},"@babel/compat-data@7.17.10":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/compat-data","version":"7.17.10","description":">"},"@babel/core@7.18.2":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/core","version":"7.18.2","description":"Babel compiler core."},"@babel/generator@7.18.2":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/generator","version":"7.18.2","description":"Turns an AST into code."},"@babel/helper-annotate-as-pure@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/helper-annotate-as-pure","version":"7.16.7","description":"Helper function to annotate paths and nodes with #__PURE__ comment"},"@babel/helper-builder-binary-assignment-operator-visitor@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/helper-builder-binary-assignment-operator-visitor","version":"7.16.7","description":"Helper function to build binary assignment operator visitors"},"@babel/helper-compilation-targets@7.18.2":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/helper-compilation-targets","version":"7.18.2","description":"Helper functions on Babel compilation targets"},"@babel/helper-create-class-features-plugin@7.18.0":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/helper-create-class-features-plugin","version":"7.18.0","description":"Compile class public and private fields, private methods and decorators to ES6"},"@babel/helper-create-regexp-features-plugin@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/helper-create-regexp-features-plugin","version":"7.17.12","description":"Compile ESNext Regular Expressions to ES5"},"@babel/helper-define-polyfill-provider@0.3.1":{"licenses":"MIT","repository":"https://github.com/babel/babel-polyfills","name":"@babel/helper-define-polyfill-provider","author":"","version":"0.3.1","description":"Babel helper to create your own polyfill provider"},"@babel/helper-environment-visitor@7.18.2":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/helper-environment-visitor","version":"7.18.2","description":"Helper visitor to only visit nodes in the current \'this\' context"},"@babel/helper-explode-assignable-expression@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/helper-explode-assignable-expression","version":"7.16.7","description":"Helper function to explode an assignable expression"},"@babel/helper-function-name@7.17.9":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/helper-function-name","version":"7.17.9","description":"Helper function to change the property \'name\' of every function"},"@babel/helper-hoist-variables@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/helper-hoist-variables","version":"7.16.7","description":"Helper function to hoist variables"},"@babel/helper-member-expression-to-functions@7.17.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/helper-member-expression-to-functions","version":"7.17.7","description":"Helper function to replace certain member expressions with function calls"},"@babel/helper-module-imports@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/helper-module-imports","version":"7.16.7","description":"Babel helper functions for inserting module loads"},"@babel/helper-module-transforms@7.18.0":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/helper-module-transforms","version":"7.18.0","description":"Babel helper functions for implementing ES6 module transformations"},"@babel/helper-optimise-call-expression@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/helper-optimise-call-expression","version":"7.16.7","description":"Helper function to optimise call expression"},"@babel/helper-plugin-utils@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/helper-plugin-utils","version":"7.17.12","description":"General utilities for plugins to use"},"@babel/helper-remap-async-to-generator@7.16.8":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/helper-remap-async-to-generator","version":"7.16.8","description":"Helper function to remap async functions to generators"},"@babel/helper-replace-supers@7.18.2":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/helper-replace-supers","version":"7.18.2","description":"Helper function to replace supers"},"@babel/helper-simple-access@7.18.2":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/helper-simple-access","version":"7.18.2","description":"Babel helper for ensuring that access to a given value is performed through simple accesses"},"@babel/helper-skip-transparent-expression-wrappers@7.16.0":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/helper-skip-transparent-expression-wrappers","version":"7.16.0","description":"Helper which skips types and parentheses"},"@babel/helper-split-export-declaration@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/helper-split-export-declaration","version":"7.16.7","description":">"},"@babel/helper-validator-identifier@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/helper-validator-identifier","version":"7.16.7","description":"Validate identifier/keywords name"},"@babel/helper-validator-option@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/helper-validator-option","version":"7.16.7","description":"Validate plugin/preset options"},"@babel/helper-wrap-function@7.16.8":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/helper-wrap-function","version":"7.16.8","description":"Helper to wrap functions inside a function call."},"@babel/helpers@7.18.2":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/helpers","version":"7.18.2","description":"Collection of helper functions used by Babel transforms."},"@babel/highlight@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/highlight","version":"7.17.12","description":"Syntax highlight JavaScript strings for output in terminals."},"@babel/parser@7.18.3":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/parser","version":"7.18.3","description":"A JavaScript parser"},"@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression","version":"7.17.12","description":"Rename destructuring parameter to workaround https://bugs.webkit.org/show_bug.cgi?id=220517"},"@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining","version":"7.17.12","description":"Transform optional chaining operators to workaround https://crbug.com/v8/11558"},"@babel/plugin-proposal-async-generator-functions@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-proposal-async-generator-functions","version":"7.17.12","description":"Turn async generator functions into ES2015 generators"},"@babel/plugin-proposal-class-properties@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-proposal-class-properties","version":"7.17.12","description":"This plugin transforms static class properties as well as properties declared with the property initializer syntax"},"@babel/plugin-proposal-class-static-block@7.18.0":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-proposal-class-static-block","version":"7.18.0","description":"Transform class static blocks"},"@babel/plugin-proposal-dynamic-import@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-proposal-dynamic-import","version":"7.16.7","description":"Transform import() expressions"},"@babel/plugin-proposal-export-namespace-from@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-proposal-export-namespace-from","version":"7.17.12","description":"Compile export namespace to ES2015"},"@babel/plugin-proposal-json-strings@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-proposal-json-strings","version":"7.17.12","description":"Escape U+2028 LINE SEPARATOR and U+2029 PARAGRAPH SEPARATOR in JS strings"},"@babel/plugin-proposal-logical-assignment-operators@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-proposal-logical-assignment-operators","version":"7.17.12","description":"Transforms logical assignment operators into short-circuited assignments"},"@babel/plugin-proposal-nullish-coalescing-operator@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-proposal-nullish-coalescing-operator","version":"7.17.12","description":"Remove nullish coalescing operator"},"@babel/plugin-proposal-numeric-separator@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-proposal-numeric-separator","version":"7.16.7","description":"Remove numeric separators from Decimal, Binary, Hex and Octal literals"},"@babel/plugin-proposal-object-rest-spread@7.18.0":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-proposal-object-rest-spread","version":"7.18.0","description":"Compile object rest and spread to ES5"},"@babel/plugin-proposal-optional-catch-binding@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-proposal-optional-catch-binding","version":"7.16.7","description":"Compile optional catch bindings"},"@babel/plugin-proposal-optional-chaining@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-proposal-optional-chaining","version":"7.17.12","description":"Transform optional chaining operators into a series of nil checks"},"@babel/plugin-proposal-private-methods@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-proposal-private-methods","version":"7.17.12","description":"This plugin transforms private class methods"},"@babel/plugin-proposal-private-property-in-object@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-proposal-private-property-in-object","version":"7.17.12","description":"This plugin transforms checks for a private property in an object"},"@babel/plugin-proposal-unicode-property-regex@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-proposal-unicode-property-regex","version":"7.17.12","description":"Compile Unicode property escapes in Unicode regular expressions to ES5."},"@babel/plugin-syntax-async-generators@7.8.4":{"licenses":"MIT","repository":"https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-async-generators","name":"@babel/plugin-syntax-async-generators","author":"","version":"7.8.4","description":"Allow parsing of async generator functions"},"@babel/plugin-syntax-class-properties@7.12.13":{"licenses":"MIT","repository":"https://github.com/babel/babel","name":"@babel/plugin-syntax-class-properties","author":"","version":"7.12.13","description":"Allow parsing of class properties"},"@babel/plugin-syntax-class-static-block@7.14.5":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-syntax-class-static-block","version":"7.14.5","description":"Allow parsing of class static blocks"},"@babel/plugin-syntax-dynamic-import@7.8.3":{"licenses":"MIT","repository":"https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-dynamic-import","name":"@babel/plugin-syntax-dynamic-import","author":"","version":"7.8.3","description":"Allow parsing of import()"},"@babel/plugin-syntax-export-namespace-from@7.8.3":{"licenses":"MIT","repository":"https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-export-namespace-from","name":"@babel/plugin-syntax-export-namespace-from","author":"","version":"7.8.3","description":"Allow parsing of export namespace from"},"@babel/plugin-syntax-import-assertions@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-syntax-import-assertions","version":"7.17.12","description":"Allow parsing of the module assertion attributes in the import statement"},"@babel/plugin-syntax-json-strings@7.8.3":{"licenses":"MIT","repository":"https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-json-strings","name":"@babel/plugin-syntax-json-strings","author":"","version":"7.8.3","description":"Allow parsing of the U+2028 LINE SEPARATOR and U+2029 PARAGRAPH SEPARATOR in JS strings"},"@babel/plugin-syntax-jsx@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-syntax-jsx","version":"7.17.12","description":"Allow parsing of jsx"},"@babel/plugin-syntax-logical-assignment-operators@7.10.4":{"licenses":"MIT","repository":"https://github.com/babel/babel","name":"@babel/plugin-syntax-logical-assignment-operators","author":"","version":"7.10.4","description":"Allow parsing of the logical assignment operators"},"@babel/plugin-syntax-nullish-coalescing-operator@7.8.3":{"licenses":"MIT","repository":"https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-nullish-coalescing-operator","name":"@babel/plugin-syntax-nullish-coalescing-operator","author":"","version":"7.8.3","description":"Allow parsing of the nullish-coalescing operator"},"@babel/plugin-syntax-numeric-separator@7.10.4":{"licenses":"MIT","repository":"https://github.com/babel/babel","name":"@babel/plugin-syntax-numeric-separator","author":"","version":"7.10.4","description":"Allow parsing of Decimal, Binary, Hex and Octal literals that contain a Numeric Literal Separator"},"@babel/plugin-syntax-object-rest-spread@7.8.3":{"licenses":"MIT","repository":"https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-object-rest-spread","name":"@babel/plugin-syntax-object-rest-spread","author":"","version":"7.8.3","description":"Allow parsing of object rest/spread"},"@babel/plugin-syntax-optional-catch-binding@7.8.3":{"licenses":"MIT","repository":"https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-optional-catch-binding","name":"@babel/plugin-syntax-optional-catch-binding","author":"","version":"7.8.3","description":"Allow parsing of optional catch bindings"},"@babel/plugin-syntax-optional-chaining@7.8.3":{"licenses":"MIT","repository":"https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-optional-chaining","name":"@babel/plugin-syntax-optional-chaining","author":"","version":"7.8.3","description":"Allow parsing of optional properties"},"@babel/plugin-syntax-private-property-in-object@7.14.5":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-syntax-private-property-in-object","version":"7.14.5","description":"Allow parsing of \'#foo in obj\' brand checks"},"@babel/plugin-syntax-top-level-await@7.14.5":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-syntax-top-level-await","version":"7.14.5","description":"Allow parsing of top-level await in modules"},"@babel/plugin-transform-arrow-functions@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-arrow-functions","version":"7.17.12","description":"Compile ES2015 arrow functions to ES5"},"@babel/plugin-transform-async-to-generator@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-async-to-generator","version":"7.17.12","description":"Turn async functions into ES2015 generators"},"@babel/plugin-transform-block-scoped-functions@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-block-scoped-functions","version":"7.16.7","description":"Babel plugin to ensure function declarations at the block level are block scoped"},"@babel/plugin-transform-block-scoping@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-block-scoping","version":"7.17.12","description":"Compile ES2015 block scoping (const and let) to ES5"},"@babel/plugin-transform-classes@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-classes","version":"7.17.12","description":"Compile ES2015 classes to ES5"},"@babel/plugin-transform-computed-properties@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-computed-properties","version":"7.17.12","description":"Compile ES2015 computed properties to ES5"},"@babel/plugin-transform-destructuring@7.18.0":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-destructuring","version":"7.18.0","description":"Compile ES2015 destructuring to ES5"},"@babel/plugin-transform-dotall-regex@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-dotall-regex","version":"7.16.7","description":"Compile regular expressions using the `s` (`dotAll`) flag to ES5."},"@babel/plugin-transform-duplicate-keys@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-duplicate-keys","version":"7.17.12","description":"Compile objects with duplicate keys to valid strict ES5"},"@babel/plugin-transform-exponentiation-operator@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-exponentiation-operator","version":"7.16.7","description":"Compile exponentiation operator to ES5"},"@babel/plugin-transform-for-of@7.18.1":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-for-of","version":"7.18.1","description":"Compile ES2015 for...of to ES5"},"@babel/plugin-transform-function-name@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-function-name","version":"7.16.7","description":"Apply ES2015 function.name semantics to all functions"},"@babel/plugin-transform-literals@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-literals","version":"7.17.12","description":"Compile ES2015 unicode string and number literals to ES5"},"@babel/plugin-transform-member-expression-literals@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-member-expression-literals","version":"7.16.7","description":"Ensure that reserved words are quoted in property accesses"},"@babel/plugin-transform-modules-amd@7.18.0":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-modules-amd","version":"7.18.0","description":"This plugin transforms ES2015 modules to AMD"},"@babel/plugin-transform-modules-commonjs@7.18.2":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-modules-commonjs","version":"7.18.2","description":"This plugin transforms ES2015 modules to CommonJS"},"@babel/plugin-transform-modules-systemjs@7.18.0":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-modules-systemjs","version":"7.18.0","description":"This plugin transforms ES2015 modules to SystemJS"},"@babel/plugin-transform-modules-umd@7.18.0":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-modules-umd","version":"7.18.0","description":"This plugin transforms ES2015 modules to UMD"},"@babel/plugin-transform-named-capturing-groups-regex@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-named-capturing-groups-regex","version":"7.17.12","description":"Compile regular expressions using named groups to ES5."},"@babel/plugin-transform-new-target@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-new-target","version":"7.17.12","description":"Transforms new.target meta property"},"@babel/plugin-transform-object-super@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-object-super","version":"7.16.7","description":"Compile ES2015 object super to ES5"},"@babel/plugin-transform-parameters@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-parameters","version":"7.17.12","description":"Compile ES2015 default and rest parameters to ES5"},"@babel/plugin-transform-property-literals@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-property-literals","version":"7.16.7","description":"Ensure that reserved words are quoted in object property keys"},"@babel/plugin-transform-react-display-name@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-react-display-name","version":"7.16.7","description":"Add displayName to React.createClass calls"},"@babel/plugin-transform-react-jsx-development@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-react-jsx-development","version":"7.16.7","description":"Turn JSX into React function calls in development"},"@babel/plugin-transform-react-jsx@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-react-jsx","version":"7.17.12","description":"Turn JSX into React function calls"},"@babel/plugin-transform-react-pure-annotations@7.18.0":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-react-pure-annotations","version":"7.18.0","description":"Mark top-level React method calls as pure for tree shaking"},"@babel/plugin-transform-regenerator@7.18.0":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-regenerator","version":"7.18.0","description":"Explode async and generator functions into a state machine."},"@babel/plugin-transform-reserved-words@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-reserved-words","version":"7.17.12","description":"Ensure that no reserved words are used."},"@babel/plugin-transform-shorthand-properties@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-shorthand-properties","version":"7.16.7","description":"Compile ES2015 shorthand properties to ES5"},"@babel/plugin-transform-spread@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-spread","version":"7.17.12","description":"Compile ES2015 spread to ES5"},"@babel/plugin-transform-sticky-regex@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-sticky-regex","version":"7.16.7","description":"Compile ES2015 sticky regex to an ES5 RegExp constructor"},"@babel/plugin-transform-template-literals@7.18.2":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-template-literals","version":"7.18.2","description":"Compile ES2015 template literals to ES5"},"@babel/plugin-transform-typeof-symbol@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-typeof-symbol","version":"7.17.12","description":"This transformer wraps all typeof expressions with a method that replicates native behaviour. (ie. returning “symbol” for symbols)"},"@babel/plugin-transform-unicode-escapes@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-unicode-escapes","version":"7.16.7","description":"Compile ES2015 Unicode escapes to ES5"},"@babel/plugin-transform-unicode-regex@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/plugin-transform-unicode-regex","version":"7.16.7","description":"Compile ES2015 Unicode regex to ES5"},"@babel/preset-env@7.18.2":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/preset-env","version":"7.18.2","description":"A Babel preset for each environment."},"@babel/preset-modules@0.1.5":{"licenses":"MIT","repository":"https://github.com/babel/preset-modules","name":"@babel/preset-modules","author":"","version":"0.1.5","description":"A Babel preset that targets modern browsers by fixing engine bugs."},"@babel/preset-react@7.17.12":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/preset-react","version":"7.17.12","description":"Babel preset for all React plugins."},"@babel/runtime@7.18.3":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/runtime","version":"7.18.3","description":"babel\'s modular runtime helpers"},"@babel/template@7.16.7":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/template","version":"7.16.7","description":"Generate an AST from a string template."},"@babel/traverse@7.18.2":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/traverse","version":"7.18.2","description":"The Babel Traverse module maintains the overall tree state, and is responsible for replacing, removing, and adding nodes"},"@babel/types@7.18.2":{"licenses":"MIT","repository":"https://github.com/babel/babel","publisher":"The Babel Team","name":"@babel/types","version":"7.18.2","description":"Babel Types is a Lodash-esque utility library for AST nodes"},"@discoveryjs/json-ext@0.5.7":{"licenses":"MIT","repository":"https://github.com/discoveryjs/json-ext","publisher":"Roman Dvornov","name":"@discoveryjs/json-ext","version":"0.5.7","description":"A set of utilities that extend the use of JSON"},"@emotion/babel-plugin@11.9.2":{"licenses":"MIT","repository":"https://github.com/emotion-js/emotion/tree/main/packages/babel-plugin","publisher":"Kye Hohenberger","name":"@emotion/babel-plugin","version":"11.9.2","description":"A recommended babel preprocessing plugin for emotion, The Next Generation of CSS-in-JS."},"@emotion/cache@11.7.1":{"licenses":"MIT","repository":"https://github.com/emotion-js/emotion/tree/main/packages/cache","name":"@emotion/cache","author":"","version":"11.7.1","description":"emotion\'s cache"},"@emotion/hash@0.8.0":{"licenses":"MIT","repository":"https://github.com/emotion-js/emotion/tree/master/packages/hash","name":"@emotion/hash","author":"","version":"0.8.0","description":"A MurmurHash2 implementation"},"@emotion/is-prop-valid@1.1.2":{"licenses":"MIT","repository":"https://github.com/emotion-js/emotion/tree/main/packages/is-prop-valid","name":"@emotion/is-prop-valid","author":"","version":"1.1.2","description":"A function to check whether a prop is valid for HTML and SVG elements"},"@emotion/memoize@0.7.5":{"licenses":"MIT","repository":"https://github.com/emotion-js/emotion/tree/master/packages/memoize","name":"@emotion/memoize","author":"","version":"0.7.5","description":"emotion\'s memoize utility"},"@emotion/react@11.9.0":{"licenses":"MIT","repository":"https://github.com/emotion-js/emotion/tree/main/packages/react","publisher":"Emotion Contributors","name":"@emotion/react","version":"11.9.0","description":"> Simple styling in React."},"@emotion/serialize@1.0.3":{"licenses":"MIT","repository":"https://github.com/emotion-js/emotion/tree/main/packages/serialize","name":"@emotion/serialize","author":"","version":"1.0.3","description":"serialization utils for emotion"},"@emotion/sheet@1.1.0":{"licenses":"MIT","repository":"https://github.com/emotion-js/emotion/tree/main/packages/sheet","name":"@emotion/sheet","author":"","version":"1.1.0","description":"emotion\'s stylesheet"},"@emotion/styled@11.8.1":{"licenses":"MIT","repository":"https://github.com/emotion-js/emotion/tree/main/packages/styled","name":"@emotion/styled","author":"","version":"11.8.1","description":"styled API for emotion"},"@emotion/unitless@0.7.5":{"licenses":"MIT","repository":"https://github.com/emotion-js/emotion/tree/master/packages/unitless","name":"@emotion/unitless","author":"","version":"0.7.5","description":"An object of css properties that don\'t accept values with units"},"@emotion/utils@1.1.0":{"licenses":"MIT","repository":"https://github.com/emotion-js/emotion/tree/main/packages/utils","name":"@emotion/utils","author":"","version":"1.1.0","description":"internal utils for emotion"},"@emotion/weak-memoize@0.2.5":{"licenses":"MIT","repository":"https://github.com/emotion-js/emotion/tree/master/packages/weak-memoize","name":"@emotion/weak-memoize","author":"","version":"0.2.5","description":"A memoization function that uses a WeakMap"},"@jridgewell/gen-mapping@0.1.1":{"licenses":"MIT","repository":"https://github.com/jridgewell/gen-mapping","publisher":"Justin Ridgewell","name":"@jridgewell/gen-mapping","version":"0.1.1","description":"Generate source maps"},"@jridgewell/gen-mapping@0.3.1":{"licenses":"MIT","repository":"https://github.com/jridgewell/gen-mapping","publisher":"Justin Ridgewell","name":"@jridgewell/gen-mapping","version":"0.3.1","description":"Generate source maps"},"@jridgewell/resolve-uri@3.0.7":{"licenses":"MIT","repository":"https://github.com/jridgewell/resolve-uri","publisher":"Justin Ridgewell","name":"@jridgewell/resolve-uri","version":"3.0.7","description":"Resolve a URI relative to an optional base URI"},"@jridgewell/set-array@1.1.1":{"licenses":"MIT","repository":"https://github.com/jridgewell/set-array","publisher":"Justin Ridgewell","name":"@jridgewell/set-array","version":"1.1.1","description":"Like a Set, but provides the index of the `key` in the backing array"},"@jridgewell/sourcemap-codec@1.4.13":{"licenses":"MIT","repository":"https://github.com/jridgewell/sourcemap-codec","publisher":"Rich Harris","name":"@jridgewell/sourcemap-codec","version":"1.4.13","description":"Encode/decode sourcemap mappings"},"@jridgewell/trace-mapping@0.3.13":{"licenses":"MIT","repository":"https://github.com/jridgewell/trace-mapping","publisher":"Justin Ridgewell","name":"@jridgewell/trace-mapping","version":"0.3.13","description":"Trace the original position through a source map"},"@js.properties/properties@0.5.4":{"licenses":"MIT","repository":"https://github.com/jsproperties/properties","publisher":"pallxk","name":"@js.properties/properties","version":"0.5.4","description":"JavaScript .properties parser and stringifier"},"@mui/base@5.0.0-alpha.82":{"licenses":"MIT","repository":"https://github.com/mui/material-ui","publisher":"MUI Team","name":"@mui/base","version":"5.0.0-alpha.82","description":"Unstyled React components and low-level hooks."},"@mui/icons-material@5.8.0":{"licenses":"MIT","repository":"https://github.com/mui/material-ui","publisher":"MUI Team","name":"@mui/icons-material","version":"5.8.0","description":"Material Design icons distributed as SVG React components."},"@mui/material@5.8.1":{"licenses":"MIT","repository":"https://github.com/mui/material-ui","publisher":"MUI Team","name":"@mui/material","version":"5.8.1","description":"React components that implement Google\'s Material Design."},"@mui/private-theming@5.8.0":{"licenses":"MIT","repository":"https://github.com/mui/material-ui","publisher":"MUI Team","name":"@mui/private-theming","version":"5.8.0","description":"Private - The React theme context to be shared between `@mui/styles` and `@mui/material`."},"@mui/styled-engine@5.8.0":{"licenses":"MIT","repository":"https://github.com/mui/material-ui","publisher":"MUI Team","name":"@mui/styled-engine","version":"5.8.0","description":"styled() API wrapper package for emotion."},"@mui/system@5.8.1":{"licenses":"MIT","repository":"https://github.com/mui/material-ui","publisher":"MUI Team","name":"@mui/system","version":"5.8.1","description":"CSS utilities for rapidly laying out custom designs."},"@mui/types@7.1.3":{"licenses":"MIT","repository":"https://github.com/mui/material-ui","publisher":"MUI Team","name":"@mui/types","version":"7.1.3","description":"Utility types for MUI."},"@mui/utils@5.8.0":{"licenses":"MIT","repository":"https://github.com/mui/material-ui","publisher":"MUI Team","name":"@mui/utils","version":"5.8.0","description":"Utility functions for React components."},"@popperjs/core@2.11.5":{"licenses":"MIT","repository":"https://github.com/popperjs/popper-core","publisher":"Federico Zivolo","name":"@popperjs/core","version":"2.11.5","description":"Tooltip and Popover Positioning Engine"},"@react-aria/ssr@3.1.2":{"licenses":"Apache-2.0","repository":"https://github.com/adobe/react-spectrum","name":"@react-aria/ssr","author":"","version":"3.1.2","description":"Spectrum UI components in React"},"@restart/hooks@0.4.7":{"licenses":"MIT","repository":"https://github.com/jquense/react-common-hooks","publisher":"Jason Quense","name":"@restart/hooks","version":"0.4.7","description":"A set of utility and general-purpose React hooks."},"@restart/ui@1.2.0":{"licenses":"MIT","repository":"https://github.com/react-restart/ui","publisher":"Jason Quense","name":"@restart/ui","version":"1.2.0","description":"Utilities for creating robust overlay components"},"@trysound/sax@0.2.0":{"licenses":"ISC","repository":"https://github.com/svg/sax","publisher":"Isaac Z. Schlueter","name":"@trysound/sax","version":"0.2.0","description":"An evented streaming XML parser in JavaScript"},"@types/eslint-scope@3.7.3":{"licenses":"MIT","repository":"https://github.com/DefinitelyTyped/DefinitelyTyped","name":"@types/eslint-scope","author":"","version":"3.7.3","description":"TypeScript definitions for eslint-scope"},"@types/eslint@8.4.2":{"licenses":"MIT","repository":"https://github.com/DefinitelyTyped/DefinitelyTyped","name":"@types/eslint","author":"","version":"8.4.2","description":"TypeScript definitions for eslint"},"@types/estree@0.0.50":{"licenses":"MIT","repository":"https://github.com/DefinitelyTyped/DefinitelyTyped","name":"@types/estree","author":"","version":"0.0.50","description":"TypeScript definitions for ESTree AST specification"},"@types/json-schema@7.0.11":{"licenses":"MIT","repository":"https://github.com/DefinitelyTyped/DefinitelyTyped","name":"@types/json-schema","author":"","version":"7.0.11","description":"TypeScript definitions for json-schema 4.0, 6.0 and"},"@types/node@17.0.35":{"licenses":"MIT","repository":"https://github.com/DefinitelyTyped/DefinitelyTyped","name":"@types/node","author":"","version":"17.0.35","description":"TypeScript definitions for Node.js"},"@types/parse-json@4.0.0":{"licenses":"MIT","repository":"https://github.com/DefinitelyTyped/DefinitelyTyped","name":"@types/parse-json","author":"","version":"4.0.0","description":"TypeScript definitions for parse-json"},"@types/prop-types@15.7.5":{"licenses":"MIT","repository":"https://github.com/DefinitelyTyped/DefinitelyTyped","name":"@types/prop-types","author":"","version":"15.7.5","description":"TypeScript definitions for prop-types"},"@types/react-dom@18.0.5":{"licenses":"MIT","repository":"https://github.com/DefinitelyTyped/DefinitelyTyped","name":"@types/react-dom","author":"","version":"18.0.5","description":"TypeScript definitions for React (react-dom)"},"@types/react-is@17.0.3":{"licenses":"MIT","repository":"https://github.com/DefinitelyTyped/DefinitelyTyped","name":"@types/react-is","author":"","version":"17.0.3","description":"TypeScript definitions for react-is"},"@types/react-onsenui@2.9.17":{"licenses":"MIT","repository":"https://github.com/DefinitelyTyped/DefinitelyTyped","name":"@types/react-onsenui","author":"","version":"2.9.17","description":"TypeScript definitions for React Onsen UI (react-onsenui)"},"@types/react-transition-group@4.4.4":{"licenses":"MIT","repository":"https://github.com/DefinitelyTyped/DefinitelyTyped","name":"@types/react-transition-group","author":"","version":"4.4.4","description":"TypeScript definitions for react-transition-group"},"@types/react@18.0.9":{"licenses":"MIT","repository":"https://github.com/DefinitelyTyped/DefinitelyTyped","name":"@types/react","author":"","version":"18.0.9","description":"TypeScript definitions for React"},"@types/scheduler@0.16.2":{"licenses":"MIT","repository":"https://github.com/DefinitelyTyped/DefinitelyTyped","name":"@types/scheduler","author":"","version":"0.16.2","description":"TypeScript definitions for scheduler"},"@types/warning@3.0.0":{"licenses":"MIT","repository":"https://github.com/DefinitelyTyped/DefinitelyTyped","publisher":"Chi Vinh Le","name":"@types/warning","version":"3.0.0","description":"TypeScript definitions for warning"},"@webassemblyjs/ast@1.11.1":{"licenses":"MIT","repository":"https://github.com/xtuc/webassemblyjs","publisher":"Sven Sauleau","name":"@webassemblyjs/ast","version":"1.11.1","description":"AST utils for webassemblyjs"},"@webassemblyjs/floating-point-hex-parser@1.11.1":{"licenses":"MIT","repository":"https://github.com/xtuc/webassemblyjs","publisher":"Mauro Bringolf","name":"@webassemblyjs/floating-point-hex-parser","version":"1.11.1","description":"A function to parse floating point hexadecimal strings as defined by the WebAssembly specification"},"@webassemblyjs/helper-api-error@1.11.1":{"licenses":"MIT","repository":"https://github.com/xtuc/webassemblyjs","publisher":"Sven Sauleau","name":"@webassemblyjs/helper-api-error","version":"1.11.1","description":"Common API errors"},"@webassemblyjs/helper-buffer@1.11.1":{"licenses":"MIT","repository":"https://github.com/xtuc/webassemblyjs","publisher":"Sven Sauleau","name":"@webassemblyjs/helper-buffer","version":"1.11.1","description":"Buffer manipulation utility"},"@webassemblyjs/helper-numbers@1.11.1":{"licenses":"MIT","repository":"https://github.com/xtuc/webassemblyjs","publisher":"Sven Sauleau","name":"@webassemblyjs/helper-numbers","version":"1.11.1","description":"Number parsing utility"},"@webassemblyjs/helper-wasm-bytecode@1.11.1":{"licenses":"MIT","repository":"https://github.com/xtuc/webassemblyjs","publisher":"Sven Sauleau","name":"@webassemblyjs/helper-wasm-bytecode","version":"1.11.1","description":"WASM\'s Bytecode constants"},"@webassemblyjs/helper-wasm-section@1.11.1":{"licenses":"MIT","repository":"https://github.com/xtuc/webassemblyjs","publisher":"Sven Sauleau","name":"@webassemblyjs/helper-wasm-section","version":"1.11.1","description":""},"@webassemblyjs/ieee754@1.11.1":{"licenses":"MIT","repository":"https://github.com/xtuc/webassemblyjs","name":"@webassemblyjs/ieee754","author":"","version":"1.11.1","description":"IEEE754 decoder and encoder"},"@webassemblyjs/leb128@1.11.1":{"licenses":"Apache-2.0","repository":"https://github.com/xtuc/webassemblyjs","name":"@webassemblyjs/leb128","author":"","version":"1.11.1","description":"LEB128 decoder and encoder"},"@webassemblyjs/utf8@1.11.1":{"licenses":"MIT","repository":"https://github.com/xtuc/webassemblyjs","publisher":"Sven Sauleau","name":"@webassemblyjs/utf8","version":"1.11.1","description":"UTF8 encoder/decoder for WASM"},"@webassemblyjs/wasm-edit@1.11.1":{"licenses":"MIT","repository":"https://github.com/xtuc/webassemblyjs","publisher":"Sven Sauleau","name":"@webassemblyjs/wasm-edit","version":"1.11.1","description":"> Rewrite a WASM binary"},"@webassemblyjs/wasm-gen@1.11.1":{"licenses":"MIT","repository":"https://github.com/xtuc/webassemblyjs","publisher":"Sven Sauleau","name":"@webassemblyjs/wasm-gen","version":"1.11.1","description":"WebAssembly binary format printer"},"@webassemblyjs/wasm-opt@1.11.1":{"licenses":"MIT","repository":"https://github.com/xtuc/webassemblyjs","publisher":"Sven Sauleau","name":"@webassemblyjs/wasm-opt","version":"1.11.1","description":""},"@webassemblyjs/wasm-parser@1.11.1":{"licenses":"MIT","repository":"https://github.com/xtuc/webassemblyjs","publisher":"Sven Sauleau","name":"@webassemblyjs/wasm-parser","version":"1.11.1","description":"WebAssembly binary format parser"},"@webassemblyjs/wast-printer@1.11.1":{"licenses":"MIT","repository":"https://github.com/xtuc/webassemblyjs","publisher":"Sven Sauleau","name":"@webassemblyjs/wast-printer","version":"1.11.1","description":"WebAssembly text format printer"},"@webpack-cli/configtest@1.1.1":{"licenses":"MIT","repository":"https://github.com/webpack/webpack-cli","name":"@webpack-cli/configtest","author":"","version":"1.1.1","description":"Validate a webpack configuration."},"@webpack-cli/info@1.4.1":{"licenses":"MIT","repository":"https://github.com/webpack/webpack-cli","name":"@webpack-cli/info","author":"","version":"1.4.1","description":"Outputs info about system and webpack config"},"@webpack-cli/serve@1.6.1":{"licenses":"MIT","repository":"https://github.com/webpack/webpack-cli","name":"@webpack-cli/serve","author":"","version":"1.6.1","description":"[![NPM Downloads][downloads]][downloads-url]"},"@xtuc/ieee754@1.2.0":{"licenses":"BSD-3-Clause","repository":"https://github.com/feross/ieee754","publisher":"Feross Aboukhadijeh","name":"@xtuc/ieee754","version":"1.2.0","description":"Read/write IEEE754 floating point numbers from/to a Buffer or array-like object"},"@xtuc/long@4.2.2":{"licenses":"Apache-2.0","repository":"https://github.com/dcodeIO/long.js","publisher":"Daniel Wirtz","name":"@xtuc/long","version":"4.2.2","description":"A Long class for representing a 64-bit two\'s-complement integer value."},"abbrev@1.1.1":{"licenses":"ISC","repository":"https://github.com/isaacs/abbrev-js","publisher":"Isaac Z. Schlueter","name":"abbrev","version":"1.1.1","description":"Like ruby\'s abbrev module, but in js"},"acorn-import-assertions@1.8.0":{"licenses":"MIT","repository":"https://github.com/xtuc/acorn-import-assertions","publisher":"Sven Sauleau","name":"acorn-import-assertions","version":"1.8.0","description":"Support for import assertions in acorn"},"acorn@8.7.1":{"licenses":"MIT","repository":"https://github.com/acornjs/acorn","name":"acorn","author":"","version":"8.7.1","description":"ECMAScript parser"},"ajv-formats@2.1.1":{"licenses":"MIT","repository":"https://github.com/ajv-validator/ajv-formats","publisher":"Evgeny Poberezkin","name":"ajv-formats","version":"2.1.1","description":"Format validation for Ajv v7+"},"ajv-keywords@3.5.2":{"licenses":"MIT","repository":"https://github.com/epoberezkin/ajv-keywords","publisher":"Evgeny Poberezkin","name":"ajv-keywords","version":"3.5.2","description":"Custom JSON-Schema keywords for Ajv validator"},"ajv-keywords@5.1.0":{"licenses":"MIT","repository":"https://github.com/epoberezkin/ajv-keywords","publisher":"Evgeny Poberezkin","name":"ajv-keywords","version":"5.1.0","description":"Additional JSON-Schema keywords for Ajv JSON validator"},"ajv@6.12.6":{"licenses":"MIT","repository":"https://github.com/ajv-validator/ajv","publisher":"Evgeny Poberezkin","name":"ajv","version":"6.12.6","description":"Another JSON Schema Validator"},"ajv@8.11.0":{"licenses":"MIT","repository":"https://github.com/ajv-validator/ajv","publisher":"Evgeny Poberezkin","name":"ajv","version":"8.11.0","description":"Another JSON Schema Validator"},"ansi-styles@3.2.1":{"licenses":"MIT","repository":"https://github.com/chalk/ansi-styles","publisher":"Sindre Sorhus","name":"ansi-styles","version":"3.2.1","description":"ANSI escape codes for styling strings in the terminal"},"ansi-styles@4.3.0":{"licenses":"MIT","repository":"https://github.com/chalk/ansi-styles","publisher":"Sindre Sorhus","name":"ansi-styles","version":"4.3.0","description":"ANSI escape codes for styling strings in the terminal"},"anymatch@3.1.2":{"licenses":"ISC","repository":"https://github.com/micromatch/anymatch","publisher":"Elan Shanker","name":"anymatch","version":"3.1.2","description":"Matches strings against configurable strings, globs, regular expressions, and/or functions"},"argparse@1.0.10":{"licenses":"MIT","repository":"https://github.com/nodeca/argparse","name":"argparse","author":"","version":"1.0.10","description":"Very powerful CLI arguments parser. Native port of argparse - python\'s options parsing library"},"array-find-index@1.0.2":{"licenses":"MIT","repository":"https://github.com/sindresorhus/array-find-index","publisher":"Sindre Sorhus","name":"array-find-index","version":"1.0.2","description":"ES2015 `Array#findIndex()` ponyfill"},"asap@2.0.6":{"licenses":"MIT","repository":"https://github.com/kriskowal/asap","name":"asap","author":"","version":"2.0.6","description":"High-priority task queue for Node.js and browsers"},"axios@0.26.1":{"licenses":"MIT","repository":"https://github.com/axios/axios","publisher":"Matt Zabriskie","name":"axios","version":"0.26.1","description":"Promise based HTTP client for the browser and node.js"},"babel-loader@8.2.5":{"licenses":"MIT","repository":"https://github.com/babel/babel-loader","publisher":"Luis Couto","name":"babel-loader","version":"8.2.5","description":"babel module loader for webpack"},"babel-plugin-dynamic-import-node@2.3.3":{"licenses":"MIT","repository":"https://github.com/airbnb/babel-plugin-dynamic-import-node","publisher":"Jordan Gensler","name":"babel-plugin-dynamic-import-node","version":"2.3.3","description":"Babel plugin to transpile import() to a deferred require(), for node"},"babel-plugin-macros@2.8.0":{"licenses":"MIT","repository":"https://github.com/kentcdodds/babel-plugin-macros","publisher":"Kent C. Dodds","name":"babel-plugin-macros","version":"2.8.0","description":"Allows you to build compile-time libraries"},"babel-plugin-polyfill-corejs2@0.3.1":{"licenses":"MIT","repository":"https://github.com/babel/babel-polyfills","name":"babel-plugin-polyfill-corejs2","author":"","version":"0.3.1","description":"A Babel plugin to inject imports to core-js@2 polyfills"},"babel-plugin-polyfill-corejs3@0.5.2":{"licenses":"MIT","repository":"https://github.com/babel/babel-polyfills","name":"babel-plugin-polyfill-corejs3","author":"","version":"0.5.2","description":"A Babel plugin to inject imports to core-js@3 polyfills"},"babel-plugin-polyfill-regenerator@0.3.1":{"licenses":"MIT","repository":"https://github.com/babel/babel-polyfills","name":"babel-plugin-polyfill-regenerator","author":"","version":"0.3.1","description":"A Babel plugin to inject imports to regenerator-runtime"},"balanced-match@1.0.2":{"licenses":"MIT","repository":"https://github.com/juliangruber/balanced-match","publisher":"Julian Gruber","name":"balanced-match","version":"1.0.2","description":"Match balanced character pairs, like \\"{\\" and \\"}\\""},"big.js@5.2.2":{"licenses":"MIT","repository":"https://github.com/MikeMcl/big.js","publisher":"Michael Mclaughlin","name":"big.js","version":"5.2.2","description":"A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic"},"binary-extensions@2.2.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/binary-extensions","publisher":"Sindre Sorhus","name":"binary-extensions","version":"2.2.0","description":"List of binary file extensions"},"boolbase@1.0.0":{"licenses":"ISC","repository":"https://github.com/fb55/boolbase","publisher":"Felix Boehm","name":"boolbase","version":"1.0.0","description":"two functions: One that returns true, one that returns false"},"bootstrap@5.1.3":{"licenses":"MIT","repository":"https://github.com/twbs/bootstrap","publisher":"The Bootstrap Authors","name":"bootstrap","version":"5.1.3","description":"The most popular front-end framework for developing responsive, mobile first projects on the web."},"brace-expansion@1.1.11":{"licenses":"MIT","repository":"https://github.com/juliangruber/brace-expansion","publisher":"Julian Gruber","name":"brace-expansion","version":"1.1.11","description":"Brace expansion as known from sh/bash"},"braces@3.0.2":{"licenses":"MIT","repository":"https://github.com/micromatch/braces","publisher":"Jon Schlinkert","name":"braces","version":"3.0.2","description":"Bash-like brace expansion, implemented in JavaScript. Safer than other brace expansion libs, with complete support for the Bash 4.3 braces specification, without sacrificing speed."},"browserslist@4.20.3":{"licenses":"MIT","repository":"https://github.com/browserslist/browserslist","publisher":"Andrey Sitnik","name":"browserslist","version":"4.20.3","description":"Share target browsers between different front-end tools, like Autoprefixer, Stylelint and babel-env-preset"},"buffer-from@1.1.2":{"licenses":"MIT","repository":"https://github.com/LinusU/buffer-from","name":"buffer-from","author":"","version":"1.1.2","description":"A [ponyfill](https://ponyfill.com) for `Buffer.from`, uses native implementation if available."},"call-bind@1.0.2":{"licenses":"MIT","repository":"https://github.com/ljharb/call-bind","publisher":"Jordan Harband","name":"call-bind","version":"1.0.2","description":"Robustly `.call.bind()` a function"},"callsites@3.1.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/callsites","publisher":"Sindre Sorhus","name":"callsites","version":"3.1.0","description":"Get callsites from the V8 stack trace API"},"caniuse-api@3.0.0":{"licenses":"MIT","repository":"https://github.com/nyalab/caniuse-api","name":"caniuse-api","author":"","version":"3.0.0","description":"request the caniuse data to check browsers compatibilities"},"caniuse-lite@1.0.30001343":{"licenses":"CC-BY-4.0","repository":"https://github.com/browserslist/caniuse-lite","publisher":"Ben Briggs","name":"caniuse-lite","version":"1.0.30001343","description":"A smaller version of caniuse-db, with only the essentials!"},"chalk@2.4.2":{"licenses":"MIT","repository":"https://github.com/chalk/chalk","name":"chalk","author":"","version":"2.4.2","description":"Terminal string styling done right"},"chalk@4.1.2":{"licenses":"MIT","repository":"https://github.com/chalk/chalk","name":"chalk","author":"","version":"4.1.2","description":"Terminal string styling done right"},"chokidar@3.5.3":{"licenses":"MIT","repository":"https://github.com/paulmillr/chokidar","publisher":"Paul Miller","name":"chokidar","version":"3.5.3","description":"Minimal and efficient cross-platform file watching library"},"chrome-trace-event@1.0.3":{"licenses":"MIT","repository":"https://github.com/samccone/chrome-trace-event","publisher":"Trent Mick, Sam Saccone","name":"chrome-trace-event","version":"1.0.3","description":"A library to create a trace of your node app per Google\'s Trace Event format."},"classnames@2.3.1":{"licenses":"MIT","repository":"https://github.com/JedWatson/classnames","publisher":"Jed Watson","name":"classnames","version":"2.3.1","description":"A simple utility for conditionally joining classNames together"},"clone-deep@4.0.1":{"licenses":"MIT","repository":"https://github.com/jonschlinkert/clone-deep","publisher":"Jon Schlinkert","name":"clone-deep","version":"4.0.1","description":"Recursively (deep) clone JavaScript native types, like Object, Array, RegExp, Date as well as primitives."},"clsx@1.1.1":{"licenses":"MIT","repository":"https://github.com/lukeed/clsx","publisher":"Luke Edwards","name":"clsx","version":"1.1.1","description":"A tiny (228B) utility for constructing className strings conditionally."},"color-convert@1.9.3":{"licenses":"MIT","repository":"https://github.com/Qix-/color-convert","publisher":"Heather Arthur","name":"color-convert","version":"1.9.3","description":"Plain color conversion functions"},"color-convert@2.0.1":{"licenses":"MIT","repository":"https://github.com/Qix-/color-convert","publisher":"Heather Arthur","name":"color-convert","version":"2.0.1","description":"Plain color conversion functions"},"color-name@1.1.3":{"licenses":"MIT","repository":"https://github.com/dfcreative/color-name","publisher":"DY","name":"color-name","version":"1.1.3","description":"A list of color names and its values"},"color-name@1.1.4":{"licenses":"MIT","repository":"https://github.com/colorjs/color-name","publisher":"DY","name":"color-name","version":"1.1.4","description":"A list of color names and its values"},"colord@2.9.2":{"licenses":"MIT","repository":"https://github.com/omgovich/colord","publisher":"Vlad Shilov","name":"colord","version":"2.9.2","description":"👑 A tiny yet powerful tool for high-performance color manipulations and conversions"},"colorette@2.0.16":{"licenses":"MIT","repository":"https://github.com/jorgebucaran/colorette","publisher":"Jorge Bucaran","name":"colorette","version":"2.0.16","description":"🌈Easily set your terminal text color & styles."},"commander@2.20.3":{"licenses":"MIT","repository":"https://github.com/tj/commander.js","publisher":"TJ Holowaychuk","name":"commander","version":"2.20.3","description":"the complete solution for node.js command-line programs"},"commander@7.2.0":{"licenses":"MIT","repository":"https://github.com/tj/commander.js","publisher":"TJ Holowaychuk","name":"commander","version":"7.2.0","description":"the complete solution for node.js command-line programs"},"commondir@1.0.1":{"licenses":"MIT","repository":"https://github.com/substack/node-commondir","publisher":"James Halliday","name":"commondir","version":"1.0.1","description":"compute the closest common parent for file paths"},"concat-map@0.0.1":{"licenses":"MIT","repository":"https://github.com/substack/node-concat-map","publisher":"James Halliday","name":"concat-map","version":"0.0.1","description":"concatenative mapdashery"},"convert-source-map@1.8.0":{"licenses":"MIT","repository":"https://github.com/thlorenz/convert-source-map","publisher":"Thorsten Lorenz","name":"convert-source-map","version":"1.8.0","description":"Converts a source-map from/to  different formats and allows adding/changing properties."},"core-js-compat@3.22.7":{"licenses":"MIT","repository":"https://github.com/zloirock/core-js","name":"core-js-compat","author":"","version":"3.22.7","description":"core-js compat"},"cosmiconfig@6.0.0":{"licenses":"MIT","repository":"https://github.com/davidtheclark/cosmiconfig","publisher":"David Clark","name":"cosmiconfig","version":"6.0.0","description":"Find and load configuration from a package.json property, rc file, or CommonJS module"},"cosmiconfig@7.0.1":{"licenses":"MIT","repository":"https://github.com/davidtheclark/cosmiconfig","publisher":"David Clark","name":"cosmiconfig","version":"7.0.1","description":"Find and load configuration from a package.json property, rc file, or CommonJS module"},"cross-spawn@7.0.3":{"licenses":"MIT","repository":"https://github.com/moxystudio/node-cross-spawn","publisher":"André Cruz","name":"cross-spawn","version":"7.0.3","description":"Cross platform child_process#spawn and child_process#spawnSync"},"css-declaration-sorter@6.2.2":{"licenses":"ISC","repository":"https://github.com/Siilwyn/css-declaration-sorter","publisher":"Selwyn","name":"css-declaration-sorter","version":"6.2.2","description":"Sorts CSS declarations fast and automatically in a certain order."},"css-loader@6.7.1":{"licenses":"MIT","repository":"https://github.com/webpack-contrib/css-loader","publisher":"Tobias Koppers @sokra","name":"css-loader","version":"6.7.1","description":"css loader module for webpack"},"css-minimizer-webpack-plugin@3.4.1":{"licenses":"MIT","repository":"https://github.com/webpack-contrib/css-minimizer-webpack-plugin","publisher":"Loann Neveu","name":"css-minimizer-webpack-plugin","version":"3.4.1","description":"cssnano plugin for Webpack"},"css-select@4.3.0":{"licenses":"BSD-2-Clause","repository":"https://github.com/fb55/css-select","publisher":"Felix Boehm","name":"css-select","version":"4.3.0","description":"a CSS selector compiler/engine"},"css-tree@1.1.3":{"licenses":"MIT","repository":"https://github.com/csstree/csstree","publisher":"Roman Dvornov","name":"css-tree","version":"1.1.3","description":"A tool set for CSS: fast detailed parser (CSS → AST), walker (AST traversal), generator (AST → CSS) and lexer (validation and matching) based on specs and browser implementations"},"css-vendor@2.0.8":{"licenses":"MIT","repository":"https://github.com/cssinjs/css-vendor","publisher":"Oleg Slobodskoi","name":"css-vendor","version":"2.0.8","description":"CSS vendor prefix detection and property feature testing."},"css-what@6.1.0":{"licenses":"BSD-2-Clause","repository":"https://github.com/fb55/css-what","publisher":"Felix Böhm","name":"css-what","version":"6.1.0","description":"a CSS selector parser"},"cssesc@3.0.0":{"licenses":"MIT","repository":"https://github.com/mathiasbynens/cssesc","publisher":"Mathias Bynens","name":"cssesc","version":"3.0.0","description":"A JavaScript library for escaping CSS strings and identifiers while generating the shortest possible ASCII-only output."},"cssnano-preset-default@5.2.9":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Ben Briggs","name":"cssnano-preset-default","version":"5.2.9","description":"Safe defaults for cssnano which require minimal configuration."},"cssnano-utils@3.1.0":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","name":"cssnano-utils","author":"","version":"3.1.0","description":"Utility methods and plugin for cssnano projects"},"cssnano@5.1.9":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Ben Briggs","name":"cssnano","version":"5.1.9","description":"A modular minifier, built on top of the PostCSS ecosystem."},"csso@4.2.0":{"licenses":"MIT","repository":"https://github.com/css/csso","publisher":"Sergey Kryzhanovsky","name":"csso","version":"4.2.0","description":"CSS minifier with structural optimisations"},"csstype@3.1.0":{"licenses":"MIT","repository":"https://github.com/frenic/csstype","publisher":"Fredrik Nicol","name":"csstype","version":"3.1.0","description":"Strict TypeScript and Flow types for style based on MDN data"},"debug@3.2.7":{"licenses":"MIT","repository":"https://github.com/visionmedia/debug","publisher":"TJ Holowaychuk","name":"debug","version":"3.2.7","description":"small debugging utility"},"debug@4.3.4":{"licenses":"MIT","repository":"https://github.com/debug-js/debug","publisher":"Josh Junon","name":"debug","version":"4.3.4","description":"Lightweight debugging utility for Node.js and the browser"},"debuglog@1.0.1":{"licenses":"MIT","repository":"https://github.com/sam-github/node-debuglog","publisher":"Sam Roberts","name":"debuglog","version":"1.0.1","description":"backport of util.debuglog from node v0.11"},"define-properties@1.1.4":{"licenses":"MIT","repository":"https://github.com/ljharb/define-properties","publisher":"Jordan Harband","name":"define-properties","version":"1.1.4","description":"Define multiple non-enumerable properties at once. Uses `Object.defineProperty` when available; falls back to standard assignment in older engines."},"dequal@2.0.2":{"licenses":"MIT","repository":"https://github.com/lukeed/dequal","publisher":"Luke Edwards","name":"dequal","version":"2.0.2","description":"A tiny (304B to 489B) utility for check for deep equality"},"dezalgo@1.0.4":{"licenses":"ISC","repository":"https://github.com/npm/dezalgo","publisher":"Isaac Z. Schlueter","name":"dezalgo","version":"1.0.4","description":"Contain async insanity so that the dark pony lord doesn\'t eat souls"},"dom-helpers@5.2.1":{"licenses":"MIT","repository":"https://github.com/react-bootstrap/dom-helpers","publisher":"Jason Quense","name":"dom-helpers","version":"5.2.1","description":"tiny modular DOM lib for ie9+"},"dom-serializer@1.4.1":{"licenses":"MIT","repository":"https://github.com/cheeriojs/dom-renderer","publisher":"Felix Boehm","name":"dom-serializer","version":"1.4.1","description":"render domhandler DOM nodes to a string"},"domelementtype@2.3.0":{"licenses":"BSD-2-Clause","repository":"https://github.com/fb55/domelementtype","publisher":"Felix Boehm","name":"domelementtype","version":"2.3.0","description":"all the types of nodes in htmlparser2\'s dom"},"domhandler@4.3.1":{"licenses":"BSD-2-Clause","repository":"https://github.com/fb55/domhandler","publisher":"Felix Boehm","name":"domhandler","version":"4.3.1","description":"Handler for htmlparser2 that turns pages into a dom"},"domutils@2.8.0":{"licenses":"BSD-2-Clause","repository":"https://github.com/fb55/domutils","publisher":"Felix Boehm","name":"domutils","version":"2.8.0","description":"Utilities for working with htmlparser2\'s dom"},"dot-properties@1.0.1":{"licenses":"MIT","repository":"https://github.com/eemeli/dot-properties","publisher":"Eemeli Aro","name":"dot-properties","version":"1.0.1","description":"Parse & stringify .properties files"},"electron-to-chromium@1.4.139":{"licenses":"ISC","repository":"https://github.com/kilian/electron-to-chromium","publisher":"Kilian Valkhof","name":"electron-to-chromium","version":"1.4.139","description":"Provides a list of electron-to-chromium version mappings"},"emojis-list@3.0.0":{"licenses":"MIT","repository":"https://github.com/kikobeats/emojis-list","publisher":"Kiko Beats","name":"emojis-list","version":"3.0.0","description":"Complete list of standard emojis."},"enhanced-resolve@5.9.3":{"licenses":"MIT","repository":"https://github.com/webpack/enhanced-resolve","publisher":"Tobias Koppers @sokra","name":"enhanced-resolve","version":"5.9.3","description":"Offers a async require.resolve function. It\'s highly configurable."},"entities@2.2.0":{"licenses":"BSD-2-Clause","repository":"https://github.com/fb55/entities","publisher":"Felix Boehm","name":"entities","version":"2.2.0","description":"Encode & decode XML and HTML entities with ease"},"envinfo@7.8.1":{"licenses":"MIT","repository":"https://github.com/tabrindle/envinfo","publisher":"tabrindle@gmail.com","name":"envinfo","version":"7.8.1","description":"Info about your dev environment for debugging purposes"},"error-ex@1.3.2":{"licenses":"MIT","repository":"https://github.com/qix-/node-error-ex","name":"error-ex","author":"","version":"1.3.2","description":"Easy error subclassing and stack customization"},"es-module-lexer@0.9.3":{"licenses":"MIT","repository":"https://github.com/guybedford/es-module-lexer","publisher":"Guy Bedford","name":"es-module-lexer","version":"0.9.3","description":"Lexes ES modules returning their import/export metadata"},"escalade@3.1.1":{"licenses":"MIT","repository":"https://github.com/lukeed/escalade","publisher":"Luke Edwards","name":"escalade","version":"3.1.1","description":"A tiny (183B to 210B) and fast utility to ascend parent directories"},"escape-string-regexp@1.0.5":{"licenses":"MIT","repository":"https://github.com/sindresorhus/escape-string-regexp","publisher":"Sindre Sorhus","name":"escape-string-regexp","version":"1.0.5","description":"Escape RegExp special characters"},"escape-string-regexp@4.0.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/escape-string-regexp","publisher":"Sindre Sorhus","name":"escape-string-regexp","version":"4.0.0","description":"Escape RegExp special characters"},"eslint-scope@5.1.1":{"licenses":"BSD-2-Clause","repository":"https://github.com/eslint/eslint-scope","name":"eslint-scope","author":"","version":"5.1.1","description":"ECMAScript scope analyzer for ESLint"},"esprima@4.0.1":{"licenses":"BSD-2-Clause","repository":"https://github.com/jquery/esprima","publisher":"Ariya Hidayat","name":"esprima","version":"4.0.1","description":"ECMAScript parsing infrastructure for multipurpose analysis"},"esrecurse@4.3.0":{"licenses":"BSD-2-Clause","repository":"https://github.com/estools/esrecurse","name":"esrecurse","author":"","version":"4.3.0","description":"ECMAScript AST recursive visitor"},"estraverse@4.3.0":{"licenses":"BSD-2-Clause","repository":"https://github.com/estools/estraverse","name":"estraverse","author":"","version":"4.3.0","description":"ECMAScript JS AST traversal functions"},"estraverse@5.3.0":{"licenses":"BSD-2-Clause","repository":"https://github.com/estools/estraverse","name":"estraverse","author":"","version":"5.3.0","description":"ECMAScript JS AST traversal functions"},"esutils@2.0.3":{"licenses":"BSD-2-Clause","repository":"https://github.com/estools/esutils","name":"esutils","author":"","version":"2.0.3","description":"utility box for ECMAScript language tools"},"events@3.3.0":{"licenses":"MIT","repository":"https://github.com/Gozala/events","publisher":"Irakli Gozalishvili","name":"events","version":"3.3.0","description":"Node\'s event emitter for all engines."},"execa@5.1.1":{"licenses":"MIT","repository":"https://github.com/sindresorhus/execa","publisher":"Sindre Sorhus","name":"execa","version":"5.1.1","description":"Process execution for humans"},"fast-deep-equal@3.1.3":{"licenses":"MIT","repository":"https://github.com/epoberezkin/fast-deep-equal","publisher":"Evgeny Poberezkin","name":"fast-deep-equal","version":"3.1.3","description":"Fast deep equal"},"fast-json-stable-stringify@2.1.0":{"licenses":"MIT","repository":"https://github.com/epoberezkin/fast-json-stable-stringify","publisher":"James Halliday","name":"fast-json-stable-stringify","version":"2.1.0","description":"deterministic `JSON.stringify()` - a faster version of substack\'s json-stable-strigify without jsonify"},"fastest-levenshtein@1.0.12":{"licenses":"MIT","repository":"https://github.com/ka-weihe/fastest-levenshtein","publisher":"Kasper U. Weihe","name":"fastest-levenshtein","version":"1.0.12","description":"Fastest Levenshtein distance implementation in JS."},"file-loader@6.2.0":{"licenses":"MIT","repository":"https://github.com/webpack-contrib/file-loader","publisher":"Tobias Koppers @sokra","name":"file-loader","version":"6.2.0","description":"A file loader module for webpack"},"fill-range@7.0.1":{"licenses":"MIT","repository":"https://github.com/jonschlinkert/fill-range","publisher":"Jon Schlinkert","name":"fill-range","version":"7.0.1","description":"Fill in a range of numbers or letters, optionally passing an increment or `step` to use, or create a regex-compatible range with `options.toRegex`"},"find-cache-dir@3.3.2":{"licenses":"MIT","repository":"https://github.com/avajs/find-cache-dir","name":"find-cache-dir","author":"","version":"3.3.2","description":"Finds the common standard cache directory"},"find-root@1.1.0":{"licenses":"MIT","repository":"https://github.com/js-n/find-root","publisher":"jsdnxx","name":"find-root","version":"1.1.0","description":"find the closest package.json"},"find-up@4.1.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/find-up","publisher":"Sindre Sorhus","name":"find-up","version":"4.1.0","description":"Find a file or directory by walking up parent directories"},"follow-redirects@1.15.0":{"licenses":"MIT","repository":"https://github.com/follow-redirects/follow-redirects","publisher":"Ruben Verborgh","name":"follow-redirects","version":"1.15.0","description":"HTTP and HTTPS modules that follow redirects."},"fs.realpath@1.0.0":{"licenses":"ISC","repository":"https://github.com/isaacs/fs.realpath","publisher":"Isaac Z. Schlueter","name":"fs.realpath","version":"1.0.0","description":"Use node\'s fs.realpath, but fall back to the JS implementation if the native one fails"},"function-bind@1.1.1":{"licenses":"MIT","repository":"https://github.com/Raynos/function-bind","publisher":"Raynos","name":"function-bind","version":"1.1.1","description":"Implementation of Function.prototype.bind"},"gensync@1.0.0-beta.2":{"licenses":"MIT","repository":"https://github.com/loganfsmyth/gensync","publisher":"Logan Smyth","name":"gensync","version":"1.0.0-beta.2","description":"Allows users to use generators in order to write common functions that can be both sync or async."},"get-intrinsic@1.1.1":{"licenses":"MIT","repository":"https://github.com/ljharb/get-intrinsic","publisher":"Jordan Harband","name":"get-intrinsic","version":"1.1.1","description":"Get and robustly cache all JS language-level intrinsics at first require time"},"get-stream@6.0.1":{"licenses":"MIT","repository":"https://github.com/sindresorhus/get-stream","publisher":"Sindre Sorhus","name":"get-stream","version":"6.0.1","description":"Get a stream as a string, buffer, or array"},"glob-parent@5.1.2":{"licenses":"ISC","repository":"https://github.com/gulpjs/glob-parent","publisher":"Gulp Team","name":"glob-parent","version":"5.1.2","description":"Extract the non-magic parent path from a glob string."},"glob-to-regexp@0.4.1":{"licenses":"BSD-2-Clause","repository":"https://github.com/fitzgen/glob-to-regexp","publisher":"Nick Fitzgerald","name":"glob-to-regexp","version":"0.4.1","description":"Convert globs to regular expressions"},"glob@7.2.3":{"licenses":"ISC","repository":"https://github.com/isaacs/node-glob","publisher":"Isaac Z. Schlueter","name":"glob","version":"7.2.3","description":"a little globber"},"globals@11.12.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/globals","publisher":"Sindre Sorhus","name":"globals","version":"11.12.0","description":"Global identifiers from different JavaScript environments"},"graceful-fs@4.2.10":{"licenses":"ISC","repository":"https://github.com/isaacs/node-graceful-fs","name":"graceful-fs","author":"","version":"4.2.10","description":"A drop-in replacement for fs, making various improvements."},"has-flag@3.0.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/has-flag","publisher":"Sindre Sorhus","name":"has-flag","version":"3.0.0","description":"Check if argv has a specific flag"},"has-flag@4.0.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/has-flag","publisher":"Sindre Sorhus","name":"has-flag","version":"4.0.0","description":"Check if argv has a specific flag"},"has-property-descriptors@1.0.0":{"licenses":"MIT","repository":"https://github.com/inspect-js/has-property-descriptors","publisher":"Jordan Harband","name":"has-property-descriptors","version":"1.0.0","description":"Does the environment have full property descriptor support? Handles IE 8\'s broken defineProperty/gOPD."},"has-symbols@1.0.3":{"licenses":"MIT","repository":"https://github.com/inspect-js/has-symbols","publisher":"Jordan Harband","name":"has-symbols","version":"1.0.3","description":"Determine if the JS environment has Symbol support. Supports spec, or shams."},"has@1.0.3":{"licenses":"MIT","repository":"https://github.com/tarruda/has","publisher":"Thiago de Arruda","name":"has","version":"1.0.3","description":"Object.prototype.hasOwnProperty.call shortcut"},"hoist-non-react-statics@3.3.2":{"licenses":"BSD-3-Clause","repository":"https://github.com/mridgway/hoist-non-react-statics","publisher":"Michael Ridgway","name":"hoist-non-react-statics","version":"3.3.2","description":"Copies non-react specific statics from a child component to a parent component"},"hosted-git-info@2.8.9":{"licenses":"ISC","repository":"https://github.com/npm/hosted-git-info","publisher":"Rebecca Turner","name":"hosted-git-info","version":"2.8.9","description":"Provides metadata and conversions from repository urls for Github, Bitbucket and Gitlab"},"human-signals@2.1.0":{"licenses":"Apache-2.0","repository":"https://github.com/ehmicky/human-signals","publisher":"ehmicky","name":"human-signals","version":"2.1.0","description":"Human-friendly process signals"},"hyphenate-style-name@1.0.4":{"licenses":"BSD-3-Clause","repository":"https://github.com/rexxars/hyphenate-style-name","publisher":"Espen Hovlandsdal","name":"hyphenate-style-name","version":"1.0.4","description":"Hyphenates a camelcased CSS property name"},"icss-utils@5.1.0":{"licenses":"ISC","repository":"https://github.com/css-modules/icss-utils","publisher":"Glen Maddern","name":"icss-utils","version":"5.1.0","description":"ICSS utils for postcss ast"},"immutable@4.1.0":{"licenses":"MIT","repository":"https://github.com/immutable-js/immutable-js","publisher":"Lee Byron","name":"immutable","version":"4.1.0","description":"Immutable Data Collections"},"import-fresh@3.3.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/import-fresh","publisher":"Sindre Sorhus","name":"import-fresh","version":"3.3.0","description":"Import a module while bypassing the cache"},"import-local@3.1.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/import-local","publisher":"Sindre Sorhus","name":"import-local","version":"3.1.0","description":"Let a globally installed package use a locally installed version of itself if available"},"inflight@1.0.6":{"licenses":"ISC","repository":"https://github.com/npm/inflight","publisher":"Isaac Z. Schlueter","name":"inflight","version":"1.0.6","description":"Add callbacks to requests in flight to avoid async duplication"},"inherits@2.0.4":{"licenses":"ISC","repository":"https://github.com/isaacs/inherits","name":"inherits","author":"","version":"2.0.4","description":"Browser-friendly inheritance fully compatible with standard node.js inherits()"},"interpret@2.2.0":{"licenses":"MIT","repository":"https://github.com/gulpjs/interpret","publisher":"Gulp Team","name":"interpret","version":"2.2.0","description":"A dictionary of file extensions and associated module loaders."},"invariant@2.2.4":{"licenses":"MIT","repository":"https://github.com/zertosh/invariant","publisher":"Andres Suarez","name":"invariant","version":"2.2.4","description":"invariant"},"is-arrayish@0.2.1":{"licenses":"MIT","repository":"https://github.com/qix-/node-is-arrayish","publisher":"Qix","name":"is-arrayish","version":"0.2.1","description":"Determines if an object can be used as an array"},"is-binary-path@2.1.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/is-binary-path","publisher":"Sindre Sorhus","name":"is-binary-path","version":"2.1.0","description":"Check if a file path is a binary file"},"is-core-module@2.9.0":{"licenses":"MIT","repository":"https://github.com/inspect-js/is-core-module","publisher":"Jordan Harband","name":"is-core-module","version":"2.9.0","description":"Is this specifier a node.js core module?"},"is-extglob@2.1.1":{"licenses":"MIT","repository":"https://github.com/jonschlinkert/is-extglob","publisher":"Jon Schlinkert","name":"is-extglob","version":"2.1.1","description":"Returns true if a string has an extglob."},"is-glob@4.0.3":{"licenses":"MIT","repository":"https://github.com/micromatch/is-glob","publisher":"Jon Schlinkert","name":"is-glob","version":"4.0.3","description":"Returns `true` if the given string looks like a glob pattern or an extglob pattern. This makes it easy to create code that only uses external modules like node-glob when necessary, resulting in much faster code execution and initialization time, and a better user experience."},"is-in-browser@1.1.3":{"licenses":"MIT","repository":"https://github.com/tuxsudo/is-in-browser","publisher":"Jared Anderson","name":"is-in-browser","version":"1.1.3","description":"Simple check to see if current app is running in browser"},"is-number@7.0.0":{"licenses":"MIT","repository":"https://github.com/jonschlinkert/is-number","publisher":"Jon Schlinkert","name":"is-number","version":"7.0.0","description":"Returns true if a number or string value is a finite number. Useful for regex matches, parsing, user input, etc."},"is-plain-object@2.0.4":{"licenses":"MIT","repository":"https://github.com/jonschlinkert/is-plain-object","publisher":"Jon Schlinkert","name":"is-plain-object","version":"2.0.4","description":"Returns true if an object was created by the `Object` constructor."},"is-stream@2.0.1":{"licenses":"MIT","repository":"https://github.com/sindresorhus/is-stream","publisher":"Sindre Sorhus","name":"is-stream","version":"2.0.1","description":"Check if something is a Node.js stream"},"isexe@2.0.0":{"licenses":"ISC","repository":"https://github.com/isaacs/isexe","publisher":"Isaac Z. Schlueter","name":"isexe","version":"2.0.0","description":"Minimal module to check if a file is executable."},"isobject@3.0.1":{"licenses":"MIT","repository":"https://github.com/jonschlinkert/isobject","publisher":"Jon Schlinkert","name":"isobject","version":"3.0.1","description":"Returns true if the value is an object and not an array or null."},"jest-worker@27.5.1":{"licenses":"MIT","repository":"https://github.com/facebook/jest","name":"jest-worker","author":"","version":"27.5.1","description":"Module for executing heavy tasks under forked processes in parallel, by providing a `Promise` based interface, minimum overhead, and bound workers."},"js-tokens@4.0.0":{"licenses":"MIT","repository":"https://github.com/lydell/js-tokens","publisher":"Simon Lydell","name":"js-tokens","version":"4.0.0","description":"A regex that tokenizes JavaScript."},"js-yaml-loader@1.2.2":{"licenses":"MIT","repository":"https://github.com/wwilsman/js-yaml-loader","publisher":"Wil Wilsman","name":"js-yaml-loader","version":"1.2.2","description":"YAML loader for webpack"},"js-yaml@3.14.1":{"licenses":"MIT","repository":"https://github.com/nodeca/js-yaml","publisher":"Vladimir Zapparov","name":"js-yaml","version":"3.14.1","description":"YAML 1.2 parser and serializer"},"jsesc@0.5.0":{"licenses":"MIT","repository":"https://github.com/mathiasbynens/jsesc","publisher":"Mathias Bynens","name":"jsesc","version":"0.5.0","description":"A JavaScript library for escaping JavaScript strings while generating the shortest possible valid output."},"jsesc@2.5.2":{"licenses":"MIT","repository":"https://github.com/mathiasbynens/jsesc","publisher":"Mathias Bynens","name":"jsesc","version":"2.5.2","description":"Given some data, jsesc returns the shortest possible stringified & ASCII-safe representation of that data."},"json-parse-better-errors@1.0.2":{"licenses":"MIT","repository":"https://github.com/zkat/json-parse-better-errors","publisher":"Kat Marchán","name":"json-parse-better-errors","version":"1.0.2","description":"JSON.parse with context information on error"},"json-parse-even-better-errors@2.3.1":{"licenses":"MIT","repository":"https://github.com/npm/json-parse-even-better-errors","publisher":"Kat Marchán","name":"json-parse-even-better-errors","version":"2.3.1","description":"JSON.parse with context information on error"},"json-schema-traverse@0.4.1":{"licenses":"MIT","repository":"https://github.com/epoberezkin/json-schema-traverse","publisher":"Evgeny Poberezkin","name":"json-schema-traverse","version":"0.4.1","description":"Traverse JSON Schema passing each schema object to callback"},"json-schema-traverse@1.0.0":{"licenses":"MIT","repository":"https://github.com/epoberezkin/json-schema-traverse","publisher":"Evgeny Poberezkin","name":"json-schema-traverse","version":"1.0.0","description":"Traverse JSON Schema passing each schema object to callback"},"json5@1.0.1":{"licenses":"MIT","repository":"https://github.com/json5/json5","publisher":"Aseem Kishore","name":"json5","version":"1.0.1","description":"JSON for humans."},"json5@2.2.1":{"licenses":"MIT","repository":"https://github.com/json5/json5","publisher":"Aseem Kishore","name":"json5","version":"2.2.1","description":"JSON for humans."},"jss-plugin-camel-case@10.9.0":{"licenses":"MIT","repository":"https://github.com/cssinjs/jss","publisher":"JSS Team","name":"jss-plugin-camel-case","version":"10.9.0","description":"JSS plugin that allows to write camel cased rule properties"},"jss-plugin-compose@10.9.0":{"licenses":"MIT","repository":"https://github.com/cssinjs/jss","publisher":"JSS Team","name":"jss-plugin-compose","version":"10.9.0","description":"JSS plugin for classes composition"},"jss-plugin-default-unit@10.9.0":{"licenses":"MIT","repository":"https://github.com/cssinjs/jss","publisher":"JSS Team","name":"jss-plugin-default-unit","version":"10.9.0","description":"JSS plugin that adds default custom unit to numeric values where needed"},"jss-plugin-expand@10.9.0":{"licenses":"MIT","repository":"https://github.com/cssinjs/jss","publisher":"JSS Team","name":"jss-plugin-expand","version":"10.9.0","description":"JSS plugin that gives you a better syntax than CSS."},"jss-plugin-extend@10.9.0":{"licenses":"MIT","repository":"https://github.com/cssinjs/jss","publisher":"JSS Team","name":"jss-plugin-extend","version":"10.9.0","description":"JSS plugin that enables mixing in styles."},"jss-plugin-global@10.9.0":{"licenses":"MIT","repository":"https://github.com/cssinjs/jss","publisher":"JSS Team","name":"jss-plugin-global","version":"10.9.0","description":"Global styles for JSS"},"jss-plugin-nested@10.9.0":{"licenses":"MIT","repository":"https://github.com/cssinjs/jss","publisher":"JSS Team","name":"jss-plugin-nested","version":"10.9.0","description":"JSS plugin that enables support for nested selectors"},"jss-plugin-props-sort@10.9.0":{"licenses":"MIT","repository":"https://github.com/cssinjs/jss","publisher":"JSS Team","name":"jss-plugin-props-sort","version":"10.9.0","description":"JSS plugin that ensures style properties extend each other instead of override"},"jss-plugin-rule-value-function@10.9.0":{"licenses":"MIT","repository":"https://github.com/cssinjs/jss","publisher":"JSS Team","name":"jss-plugin-rule-value-function","version":"10.9.0","description":"JSS plugin for function value and rule syntax"},"jss-plugin-rule-value-observable@10.9.0":{"licenses":"MIT","repository":"https://github.com/cssinjs/jss","publisher":"JSS Team","name":"jss-plugin-rule-value-observable","version":"10.9.0","description":"JSS plugin for TC39 Observables support"},"jss-plugin-template@10.9.0":{"licenses":"MIT","repository":"https://github.com/cssinjs/jss","publisher":"JSS Team","name":"jss-plugin-template","version":"10.9.0","description":"JSS plugin enables string templates"},"jss-plugin-vendor-prefixer@10.9.0":{"licenses":"MIT","repository":"https://github.com/cssinjs/jss","publisher":"JSS Team","name":"jss-plugin-vendor-prefixer","version":"10.9.0","description":"JSS plugin that handles vendor prefixes in the browser"},"jss-preset-default@10.9.0":{"licenses":"MIT","repository":"https://github.com/cssinjs/jss","publisher":"JSS Team","name":"jss-preset-default","version":"10.9.0","description":"Default preset for JSS with selected plugins."},"jss@10.9.0":{"licenses":"MIT","repository":"https://github.com/cssinjs/jss","publisher":"JSS Team","name":"jss","version":"10.9.0","description":"A lib for generating Style Sheets with JavaScript."},"kind-of@6.0.3":{"licenses":"MIT","repository":"https://github.com/jonschlinkert/kind-of","publisher":"Jon Schlinkert","name":"kind-of","version":"6.0.3","description":"Get the native type of a value."},"klona@2.0.5":{"licenses":"MIT","repository":"https://github.com/lukeed/klona","publisher":"Luke Edwards","name":"klona","version":"2.0.5","description":"A tiny (240B to 501B) and fast utility to \\"deep clone\\" Objects, Arrays, Dates, RegExps, and more!"},"license-checker@25.0.1":{"licenses":"BSD-3-Clause","repository":"https://github.com/davglass/license-checker","publisher":"Dav Glass","name":"license-checker","version":"25.0.1","description":"Check license info for a package"},"lilconfig@2.0.5":{"licenses":"MIT","repository":"https://github.com/antonk52/lilconfig","publisher":"antonk52","name":"lilconfig","version":"2.0.5","description":"A zero-dependency alternative to cosmiconfig"},"lines-and-columns@1.2.4":{"licenses":"MIT","repository":"https://github.com/eventualbuddha/lines-and-columns","publisher":"Brian Donovan","name":"lines-and-columns","version":"1.2.4","description":"Maps lines and columns to character offsets and back."},"loader-runner@4.3.0":{"licenses":"MIT","repository":"https://github.com/webpack/loader-runner","publisher":"Tobias Koppers @sokra","name":"loader-runner","version":"4.3.0","description":"Runs (webpack) loaders"},"loader-utils@1.4.0":{"licenses":"MIT","repository":"https://github.com/webpack/loader-utils","publisher":"Tobias Koppers @sokra","name":"loader-utils","version":"1.4.0","description":"utils for webpack loaders"},"loader-utils@2.0.2":{"licenses":"MIT","repository":"https://github.com/webpack/loader-utils","publisher":"Tobias Koppers @sokra","name":"loader-utils","version":"2.0.2","description":"utils for webpack loaders"},"locate-path@5.0.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/locate-path","publisher":"Sindre Sorhus","name":"locate-path","version":"5.0.0","description":"Get the first path that exists on disk of multiple paths"},"lodash.debounce@4.0.8":{"licenses":"MIT","repository":"https://github.com/lodash/lodash","publisher":"John-David Dalton","name":"lodash.debounce","version":"4.0.8","description":"The lodash method `_.debounce` exported as a module."},"lodash.memoize@4.1.2":{"licenses":"MIT","repository":"https://github.com/lodash/lodash","publisher":"John-David Dalton","name":"lodash.memoize","version":"4.1.2","description":"The lodash method `_.memoize` exported as a module."},"lodash.sortby@4.7.0":{"licenses":"MIT","repository":"https://github.com/lodash/lodash","publisher":"John-David Dalton","name":"lodash.sortby","version":"4.7.0","description":"The lodash method `_.sortBy` exported as a module."},"lodash.uniq@4.5.0":{"licenses":"MIT","repository":"https://github.com/lodash/lodash","publisher":"John-David Dalton","name":"lodash.uniq","version":"4.5.0","description":"The lodash method `_.uniq` exported as a module."},"loose-envify@1.4.0":{"licenses":"MIT","repository":"https://github.com/zertosh/loose-envify","publisher":"Andres Suarez","name":"loose-envify","version":"1.4.0","description":"Fast (and loose) selective `process.env` replacer using js-tokens instead of an AST"},"lru-cache@6.0.0":{"licenses":"ISC","repository":"https://github.com/isaacs/node-lru-cache","publisher":"Isaac Z. Schlueter","name":"lru-cache","version":"6.0.0","description":"A cache object that deletes the least-recently-used items."},"make-dir@3.1.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/make-dir","publisher":"Sindre Sorhus","name":"make-dir","version":"3.1.0","description":"Make a directory and its parents if needed - Think `mkdir -p`"},"markdown-to-jsx@7.1.7":{"licenses":"MIT","repository":"https://github.com/probablyup/markdown-to-jsx","publisher":"Evan Jacobs","name":"markdown-to-jsx","version":"7.1.7","description":"Convert markdown to JSX with ease for React and React-like projects. Super lightweight and highly configurable."},"material-icons@1.11.0":{"licenses":"Apache-2.0","repository":"https://github.com/marella/material-icons","name":"material-icons","author":"","version":"1.11.0","description":"Latest icon fonts and CSS for self-hosting material design icons."},"mdn-data@2.0.14":{"licenses":"CC0-1.0","repository":"https://github.com/mdn/data","publisher":"Mozilla Developer Network","name":"mdn-data","version":"2.0.14","description":"Open Web data by the Mozilla Developer Network"},"merge-stream@2.0.0":{"licenses":"MIT","repository":"https://github.com/grncdr/merge-stream","publisher":"Stephen Sugden","name":"merge-stream","version":"2.0.0","description":"Create a stream that emits events from multiple other streams"},"micromatch@4.0.5":{"licenses":"MIT","repository":"https://github.com/micromatch/micromatch","publisher":"Jon Schlinkert","name":"micromatch","version":"4.0.5","description":"Glob matching for javascript/node.js. A replacement and faster alternative to minimatch and multimatch."},"mime-db@1.52.0":{"licenses":"MIT","repository":"https://github.com/jshttp/mime-db","name":"mime-db","author":"","version":"1.52.0","description":"Media Type Database"},"mime-types@2.1.35":{"licenses":"MIT","repository":"https://github.com/jshttp/mime-types","name":"mime-types","author":"","version":"2.1.35","description":"The ultimate javascript content-type utility."},"mimic-fn@2.1.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/mimic-fn","publisher":"Sindre Sorhus","name":"mimic-fn","version":"2.1.0","description":"Make a function mimic another one"},"mini-css-extract-plugin@2.6.0":{"licenses":"MIT","repository":"https://github.com/webpack-contrib/mini-css-extract-plugin","publisher":"Tobias Koppers @sokra","name":"mini-css-extract-plugin","version":"2.6.0","description":"extracts CSS into separate files"},"minimatch@3.1.2":{"licenses":"ISC","repository":"https://github.com/isaacs/minimatch","publisher":"Isaac Z. Schlueter","name":"minimatch","version":"3.1.2","description":"a glob matcher in javascript"},"minimist@1.2.6":{"licenses":"MIT","repository":"https://github.com/substack/minimist","publisher":"James Halliday","name":"minimist","version":"1.2.6","description":"parse argument options"},"mkdirp@0.5.6":{"licenses":"MIT","repository":"https://github.com/substack/node-mkdirp","publisher":"James Halliday","name":"mkdirp","version":"0.5.6","description":"Recursively mkdir, like `mkdir -p`"},"ms@2.1.2":{"licenses":"MIT","repository":"https://github.com/zeit/ms","name":"ms","author":"","version":"2.1.2","description":"Tiny millisecond conversion utility"},"nanoid@3.3.4":{"licenses":"MIT","repository":"https://github.com/ai/nanoid","publisher":"Andrey Sitnik","name":"nanoid","version":"3.3.4","description":"A tiny (116 bytes), secure URL-friendly unique string ID generator"},"neo-async@2.6.2":{"licenses":"MIT","repository":"https://github.com/suguru03/neo-async","name":"neo-async","author":"","version":"2.6.2","description":"Neo-Async is a drop-in replacement for Async, it almost fully covers its functionality and runs faster "},"node-releases@2.0.5":{"licenses":"MIT","repository":"https://github.com/chicoxyzzy/node-releases","publisher":"Sergey Rubanov","name":"node-releases","version":"2.0.5","description":"Node.js releases data"},"nopt@4.0.3":{"licenses":"ISC","repository":"https://github.com/npm/nopt","publisher":"Isaac Z. Schlueter","name":"nopt","version":"4.0.3","description":"Option parsing for Node, supporting types, shorthands, etc. Used by npm."},"normalize-package-data@2.5.0":{"licenses":"BSD-2-Clause","repository":"https://github.com/npm/normalize-package-data","publisher":"Meryn Stol","name":"normalize-package-data","version":"2.5.0","description":"Normalizes data that can be found in package.json files."},"normalize-path@3.0.0":{"licenses":"MIT","repository":"https://github.com/jonschlinkert/normalize-path","publisher":"Jon Schlinkert","name":"normalize-path","version":"3.0.0","description":"Normalize slashes in a file path to be posix/unix-like forward slashes. Also condenses repeat slashes to a single slash and removes and trailing slashes, unless disabled."},"normalize-url@6.1.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/normalize-url","publisher":"Sindre Sorhus","name":"normalize-url","version":"6.1.0","description":"Normalize a URL"},"npm-normalize-package-bin@1.0.1":{"licenses":"ISC","repository":"https://github.com/npm/npm-normalize-package-bin","publisher":"Isaac Z. Schlueter","name":"npm-normalize-package-bin","version":"1.0.1","description":"Turn any flavor of allowable package.json bin into a normalized object"},"npm-run-path@4.0.1":{"licenses":"MIT","repository":"https://github.com/sindresorhus/npm-run-path","publisher":"Sindre Sorhus","name":"npm-run-path","version":"4.0.1","description":"Get your PATH prepended with locally installed binaries"},"nth-check@2.1.1":{"licenses":"BSD-2-Clause","repository":"https://github.com/fb55/nth-check","publisher":"Felix Boehm","name":"nth-check","version":"2.1.1","description":"Parses and compiles CSS nth-checks to highly optimized functions."},"object-assign@4.1.1":{"licenses":"MIT","repository":"https://github.com/sindresorhus/object-assign","publisher":"Sindre Sorhus","name":"object-assign","version":"4.1.1","description":"ES2015 `Object.assign()` ponyfill"},"object-keys@1.1.1":{"licenses":"MIT","repository":"https://github.com/ljharb/object-keys","publisher":"Jordan Harband","name":"object-keys","version":"1.1.1","description":"An Object.keys replacement, in case Object.keys is not available. From https://github.com/es-shims/es5-shim"},"object.assign@4.1.2":{"licenses":"MIT","repository":"https://github.com/ljharb/object.assign","publisher":"Jordan Harband","name":"object.assign","version":"4.1.2","description":"ES6 spec-compliant Object.assign shim. From https://github.com/es-shims/es6-shim"},"once@1.4.0":{"licenses":"ISC","repository":"https://github.com/isaacs/once","publisher":"Isaac Z. Schlueter","name":"once","version":"1.4.0","description":"Run a function exactly one time"},"onetime@5.1.2":{"licenses":"MIT","repository":"https://github.com/sindresorhus/onetime","publisher":"Sindre Sorhus","name":"onetime","version":"5.1.2","description":"Ensure a function is only called once"},"onsenui@2.12.0":{"licenses":"Apache-2.0","repository":"https://github.com/OnsenUI/OnsenUI","name":"onsenui","author":"","version":"2.12.0","description":"HTML5 Mobile Framework & UI Components"},"os-homedir@1.0.2":{"licenses":"MIT","repository":"https://github.com/sindresorhus/os-homedir","publisher":"Sindre Sorhus","name":"os-homedir","version":"1.0.2","description":"Node.js 4 `os.homedir()` ponyfill"},"os-tmpdir@1.0.2":{"licenses":"MIT","repository":"https://github.com/sindresorhus/os-tmpdir","publisher":"Sindre Sorhus","name":"os-tmpdir","version":"1.0.2","description":"Node.js os.tmpdir() ponyfill"},"osenv@0.1.5":{"licenses":"ISC","repository":"https://github.com/npm/osenv","publisher":"Isaac Z. Schlueter","name":"osenv","version":"0.1.5","description":"Look up environment settings specific to different operating systems"},"p-limit@2.3.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/p-limit","publisher":"Sindre Sorhus","name":"p-limit","version":"2.3.0","description":"Run multiple promise-returning & async functions with limited concurrency"},"p-locate@4.1.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/p-locate","publisher":"Sindre Sorhus","name":"p-locate","version":"4.1.0","description":"Get the first fulfilled promise that satisfies the provided testing function"},"p-try@2.2.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/p-try","publisher":"Sindre Sorhus","name":"p-try","version":"2.2.0","description":"`Start a promise chain"},"parent-module@1.0.1":{"licenses":"MIT","repository":"https://github.com/sindresorhus/parent-module","publisher":"Sindre Sorhus","name":"parent-module","version":"1.0.1","description":"Get the path of the parent module"},"parse-json@5.2.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/parse-json","publisher":"Sindre Sorhus","name":"parse-json","version":"5.2.0","description":"Parse JSON with more helpful errors"},"path-exists@4.0.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/path-exists","publisher":"Sindre Sorhus","name":"path-exists","version":"4.0.0","description":"Check if a path exists"},"path-is-absolute@1.0.1":{"licenses":"MIT","repository":"https://github.com/sindresorhus/path-is-absolute","publisher":"Sindre Sorhus","name":"path-is-absolute","version":"1.0.1","description":"Node.js 0.12 path.isAbsolute() ponyfill"},"path-key@3.1.1":{"licenses":"MIT","repository":"https://github.com/sindresorhus/path-key","publisher":"Sindre Sorhus","name":"path-key","version":"3.1.1","description":"Get the PATH environment variable key cross-platform"},"path-parse@1.0.7":{"licenses":"MIT","repository":"https://github.com/jbgutierrez/path-parse","publisher":"Javier Blanco","name":"path-parse","version":"1.0.7","description":"Node.js path.parse() ponyfill"},"path-type@4.0.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/path-type","publisher":"Sindre Sorhus","name":"path-type","version":"4.0.0","description":"Check if a path is a file, directory, or symlink"},"picocolors@1.0.0":{"licenses":"ISC","repository":"https://github.com/alexeyraspopov/picocolors","publisher":"Alexey Raspopov","name":"picocolors","version":"1.0.0","description":"The tiniest and the fastest library for terminal output formatting with ANSI colors"},"picomatch@2.3.1":{"licenses":"MIT","repository":"https://github.com/micromatch/picomatch","publisher":"Jon Schlinkert","name":"picomatch","version":"2.3.1","description":"Blazing fast and accurate glob matcher written in JavaScript, with no dependencies and full support for standard and extended Bash glob features, including braces, extglobs, POSIX brackets, and regular expressions."},"pkg-dir@4.2.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/pkg-dir","publisher":"Sindre Sorhus","name":"pkg-dir","version":"4.2.0","description":"Find the root directory of a Node.js project or npm package"},"postcss-calc@8.2.4":{"licenses":"MIT","repository":"https://github.com/postcss/postcss-calc","publisher":"Andy Jansson","name":"postcss-calc","version":"8.2.4","description":"PostCSS plugin to reduce calc()"},"postcss-colormin@5.3.0":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Ben Briggs","name":"postcss-colormin","version":"5.3.0","description":"Minify colors in your CSS files with PostCSS."},"postcss-convert-values@5.1.1":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Ben Briggs","name":"postcss-convert-values","version":"5.1.1","description":"Convert values with PostCSS (e.g. ms -> s)"},"postcss-discard-comments@5.1.1":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Ben Briggs","name":"postcss-discard-comments","version":"5.1.1","description":"Discard comments in your CSS files with PostCSS."},"postcss-discard-duplicates@5.1.0":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Ben Briggs","name":"postcss-discard-duplicates","version":"5.1.0","description":"Discard duplicate rules in your CSS files with PostCSS."},"postcss-discard-empty@5.1.1":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Ben Briggs","name":"postcss-discard-empty","version":"5.1.1","description":"Discard empty rules and values with PostCSS."},"postcss-discard-overridden@5.1.0":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Justineo","name":"postcss-discard-overridden","version":"5.1.0","description":"PostCSS plugin to discard overridden @keyframes or @counter-style."},"postcss-loader@6.2.1":{"licenses":"MIT","repository":"https://github.com/webpack-contrib/postcss-loader","publisher":"Andrey Sitnik","name":"postcss-loader","version":"6.2.1","description":"PostCSS loader for webpack"},"postcss-merge-longhand@5.1.5":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Ben Briggs","name":"postcss-merge-longhand","version":"5.1.5","description":"Merge longhand properties into shorthand with PostCSS."},"postcss-merge-rules@5.1.1":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Ben Briggs","name":"postcss-merge-rules","version":"5.1.1","description":"Merge CSS rules with PostCSS."},"postcss-minify-font-values@5.1.0":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Bogdan Chadkin","name":"postcss-minify-font-values","version":"5.1.0","description":"Minify font declarations with PostCSS"},"postcss-minify-gradients@5.1.1":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Ben Briggs","name":"postcss-minify-gradients","version":"5.1.1","description":"Minify gradient parameters with PostCSS."},"postcss-minify-params@5.1.3":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Bogdan Chadkin","name":"postcss-minify-params","version":"5.1.3","description":"Minify at-rule params with PostCSS"},"postcss-minify-selectors@5.2.0":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Ben Briggs","name":"postcss-minify-selectors","version":"5.2.0","description":"Minify selectors with PostCSS."},"postcss-modules-extract-imports@3.0.0":{"licenses":"ISC","repository":"https://github.com/css-modules/postcss-modules-extract-imports","publisher":"Glen Maddern","name":"postcss-modules-extract-imports","version":"3.0.0","description":"A CSS Modules transform to extract local aliases for inline imports"},"postcss-modules-local-by-default@4.0.0":{"licenses":"MIT","repository":"https://github.com/css-modules/postcss-modules-local-by-default","publisher":"Mark Dalgleish","name":"postcss-modules-local-by-default","version":"4.0.0","description":"A CSS Modules transform to make local scope the default"},"postcss-modules-scope@3.0.0":{"licenses":"ISC","repository":"https://github.com/css-modules/postcss-modules-scope","publisher":"Glen Maddern","name":"postcss-modules-scope","version":"3.0.0","description":"A CSS Modules transform to extract export statements from local-scope classes"},"postcss-modules-values@4.0.0":{"licenses":"ISC","repository":"https://github.com/css-modules/postcss-modules-values","publisher":"Glen Maddern","name":"postcss-modules-values","version":"4.0.0","description":"PostCSS plugin for CSS Modules to pass arbitrary values between your module files"},"postcss-normalize-charset@5.1.0":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Bogdan Chadkin","name":"postcss-normalize-charset","version":"5.1.0","description":"Add necessary or remove extra charset with PostCSS"},"postcss-normalize-display-values@5.1.0":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Ben Briggs","name":"postcss-normalize-display-values","version":"5.1.0","description":"Normalize multiple value display syntaxes into single values."},"postcss-normalize-positions@5.1.0":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Ben Briggs","name":"postcss-normalize-positions","version":"5.1.0","description":"Normalize keyword values for position into length values."},"postcss-normalize-repeat-style@5.1.0":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Ben Briggs","name":"postcss-normalize-repeat-style","version":"5.1.0","description":"Convert two value syntax for repeat-style into one value."},"postcss-normalize-string@5.1.0":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Ben Briggs","name":"postcss-normalize-string","version":"5.1.0","description":"Normalize wrapping quotes for CSS string literals."},"postcss-normalize-timing-functions@5.1.0":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Ben Briggs","name":"postcss-normalize-timing-functions","version":"5.1.0","description":"Normalize CSS animation/transition timing functions."},"postcss-normalize-unicode@5.1.0":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Ben Briggs","name":"postcss-normalize-unicode","version":"5.1.0","description":"Normalize unicode-range descriptors, and can convert to wildcard ranges."},"postcss-normalize-url@5.1.0":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Ben Briggs","name":"postcss-normalize-url","version":"5.1.0","description":"Normalize URLs with PostCSS"},"postcss-normalize-whitespace@5.1.1":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Ben Briggs","name":"postcss-normalize-whitespace","version":"5.1.1","description":"Trim whitespace inside and around CSS rules & declarations."},"postcss-ordered-values@5.1.1":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Ben Briggs","name":"postcss-ordered-values","version":"5.1.1","description":"Ensure values are ordered consistently in your CSS."},"postcss-reduce-initial@5.1.0":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Ben Briggs","name":"postcss-reduce-initial","version":"5.1.0","description":"Reduce initial definitions to the actual initial value, where possible."},"postcss-reduce-transforms@5.1.0":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Ben Briggs","name":"postcss-reduce-transforms","version":"5.1.0","description":"Reduce transform functions with PostCSS."},"postcss-selector-parser@6.0.10":{"licenses":"MIT","repository":"https://github.com/postcss/postcss-selector-parser","name":"postcss-selector-parser","author":"","version":"6.0.10","description":"> Selector parser with built in methods for working with selector strings."},"postcss-svgo@5.1.0":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Ben Briggs","name":"postcss-svgo","version":"5.1.0","description":"Optimise inline SVG with PostCSS."},"postcss-unique-selectors@5.1.1":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Ben Briggs","name":"postcss-unique-selectors","version":"5.1.1","description":"Ensure CSS selectors are unique."},"postcss-value-parser@4.2.0":{"licenses":"MIT","repository":"https://github.com/TrySound/postcss-value-parser","publisher":"Bogdan Chadkin","name":"postcss-value-parser","version":"4.2.0","description":"Transforms css values and at-rule params into the tree"},"postcss@8.4.14":{"licenses":"MIT","repository":"https://github.com/postcss/postcss","publisher":"Andrey Sitnik","name":"postcss","version":"8.4.14","description":"Tool for transforming styles with JS plugins"},"prop-types-extra@1.1.1":{"licenses":"MIT","repository":"https://github.com/react-bootstrap/prop-types-extra","publisher":"Matthew L Smith","name":"prop-types-extra","version":"1.1.1","description":"React PropType Utilities"},"prop-types@15.8.1":{"licenses":"MIT","repository":"https://github.com/facebook/prop-types","name":"prop-types","author":"","version":"15.8.1","description":"Runtime type checking for React props and similar objects."},"punycode@2.1.1":{"licenses":"MIT","repository":"https://github.com/bestiejs/punycode.js","publisher":"Mathias Bynens","name":"punycode","version":"2.1.1","description":"A robust Punycode converter that fully complies to RFC 3492 and RFC 5891, and works on nearly all JavaScript platforms."},"randombytes@2.1.0":{"licenses":"MIT","repository":"https://github.com/crypto-browserify/randombytes","name":"randombytes","author":"","version":"2.1.0","description":"random bytes from browserify stand alone"},"react-bootstrap@2.4.0":{"licenses":"MIT","repository":"https://github.com/react-bootstrap/react-bootstrap","publisher":"Stephen J. Collings","name":"react-bootstrap","version":"2.4.0","description":"Bootstrap 5 components built with React"},"react-device-detect@2.2.2":{"licenses":"MIT","repository":"https://github.com/duskload/react-device-detect","publisher":"Michael Laktionov","name":"react-device-detect","version":"2.2.2","description":"Detect device type and render your component according to it"},"react-dom@17.0.2":{"licenses":"MIT","repository":"https://github.com/facebook/react","name":"react-dom","author":"","version":"17.0.2","description":"React package for working with the DOM."},"react-is@16.13.1":{"licenses":"MIT","repository":"https://github.com/facebook/react","name":"react-is","author":"","version":"16.13.1","description":"Brand checking of React Elements."},"react-is@17.0.2":{"licenses":"MIT","repository":"https://github.com/facebook/react","name":"react-is","author":"","version":"17.0.2","description":"Brand checking of React Elements."},"react-lifecycles-compat@3.0.4":{"licenses":"MIT","repository":"https://github.com/reactjs/react-lifecycles-compat","name":"react-lifecycles-compat","author":"","version":"3.0.4","description":"Backwards compatibility polyfill for React class components"},"react-onsenui@1.12.0":{"licenses":"Apache-2.0","repository":"https://github.com/OnsenUI/OnsenUI","publisher":"Onsen UI Team","name":"react-onsenui","version":"1.12.0","description":"Onsen UI - React Components for Hybrid Cordova/PhoneGap Apps with Material Design and iOS UI components"},"react-toastify@9.0.1":{"licenses":"MIT","repository":"https://github.com/fkhadra/react-toastify","publisher":"Fadi Khadra","name":"react-toastify","version":"9.0.1","description":"React notification made easy"},"react-transition-group@4.4.2":{"licenses":"BSD-3-Clause","repository":"https://github.com/reactjs/react-transition-group","name":"react-transition-group","author":"","version":"4.4.2","description":"A react component toolset for managing animations"},"react@17.0.2":{"licenses":"MIT","repository":"https://github.com/facebook/react","name":"react","author":"","version":"17.0.2","description":"React is a JavaScript library for building user interfaces."},"read-installed@4.0.3":{"licenses":"ISC","repository":"https://github.com/isaacs/read-installed","publisher":"Isaac Z. Schlueter","name":"read-installed","version":"4.0.3","description":"Read all the installed packages in a folder, and return a tree structure with all the data."},"read-package-json@2.1.2":{"licenses":"ISC","repository":"https://github.com/npm/read-package-json","publisher":"Isaac Z. Schlueter","name":"read-package-json","version":"2.1.2","description":"The thing npm uses to read package.json files with semantics and defaults and validation"},"readdir-scoped-modules@1.1.0":{"licenses":"ISC","repository":"https://github.com/npm/readdir-scoped-modules","publisher":"Isaac Z. Schlueter","name":"readdir-scoped-modules","version":"1.1.0","description":"Like `fs.readdir` but handling `@org/module` dirs as if they were a single entry."},"readdirp@3.6.0":{"licenses":"MIT","repository":"https://github.com/paulmillr/readdirp","publisher":"Thorsten Lorenz","name":"readdirp","version":"3.6.0","description":"Recursive version of fs.readdir with streaming API."},"rechoir@0.7.1":{"licenses":"MIT","repository":"https://github.com/gulpjs/rechoir","publisher":"Gulp Team","name":"rechoir","version":"0.7.1","description":"Prepare a node environment to require files with different extensions."},"regenerate-unicode-properties@10.0.1":{"licenses":"MIT","repository":"https://github.com/mathiasbynens/regenerate-unicode-properties","publisher":"Mathias Bynens","name":"regenerate-unicode-properties","version":"10.0.1","description":"Regenerate sets for Unicode properties and values."},"regenerate@1.4.2":{"licenses":"MIT","repository":"https://github.com/mathiasbynens/regenerate","publisher":"Mathias Bynens","name":"regenerate","version":"1.4.2","description":"Generate JavaScript-compatible regular expressions based on a given set of Unicode symbols or code points."},"regenerator-runtime@0.13.9":{"licenses":"MIT","repository":"https://github.com/facebook/regenerator/tree/master/packages/runtime","publisher":"Ben Newman","name":"regenerator-runtime","version":"0.13.9","description":"Runtime for Regenerator-compiled generator and async functions."},"regenerator-transform@0.15.0":{"licenses":"MIT","repository":"https://github.com/facebook/regenerator/tree/master/packages/transform","publisher":"Ben Newman","name":"regenerator-transform","version":"0.15.0","description":"Explode async and generator functions into a state machine."},"regexpu-core@5.0.1":{"licenses":"MIT","repository":"https://github.com/mathiasbynens/regexpu-core","publisher":"Mathias Bynens","name":"regexpu-core","version":"5.0.1","description":"regexpu’s core functionality (i.e. `rewritePattern(pattern, flag)`), capable of translating ES6 Unicode regular expressions to ES5."},"regjsgen@0.6.0":{"licenses":"MIT","repository":"https://github.com/bnjmnt4n/regjsgen","publisher":"Benjamin Tan","name":"regjsgen","version":"0.6.0","description":"Generate regular expressions from regjsparser’s AST."},"regjsparser@0.8.4":{"licenses":"BSD-2-Clause","repository":"https://github.com/jviereck/regjsparser","publisher":"\'Julian Viereck\'","name":"regjsparser","version":"0.8.4","description":"Parsing the JavaScript\'s RegExp in JavaScript."},"require-from-string@2.0.2":{"licenses":"MIT","repository":"https://github.com/floatdrop/require-from-string","publisher":"Vsevolod Strukchinsky","name":"require-from-string","version":"2.0.2","description":"Require module from string"},"resolve-cwd@3.0.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/resolve-cwd","publisher":"Sindre Sorhus","name":"resolve-cwd","version":"3.0.0","description":"Resolve the path of a module like `require.resolve()` but from the current working directory"},"resolve-from@4.0.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/resolve-from","publisher":"Sindre Sorhus","name":"resolve-from","version":"4.0.0","description":"Resolve the path of a module like `require.resolve()` but from a given path"},"resolve-from@5.0.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/resolve-from","publisher":"Sindre Sorhus","name":"resolve-from","version":"5.0.0","description":"Resolve the path of a module like `require.resolve()` but from a given path"},"resolve@1.22.0":{"licenses":"MIT","repository":"https://github.com/browserify/resolve","publisher":"James Halliday","name":"resolve","version":"1.22.0","description":"resolve like require.resolve() on behalf of files asynchronously and synchronously"},"safe-buffer@5.1.2":{"licenses":"MIT","repository":"https://github.com/feross/safe-buffer","publisher":"Feross Aboukhadijeh","name":"safe-buffer","version":"5.1.2","description":"Safer Node.js Buffer API"},"sass-loader@12.6.0":{"licenses":"MIT","repository":"https://github.com/webpack-contrib/sass-loader","publisher":"J. Tangelder","name":"sass-loader","version":"12.6.0","description":"Sass loader for webpack"},"sass@1.52.1":{"licenses":"MIT","repository":"https://github.com/sass/dart-sass","publisher":"Natalie Weizenbaum","name":"sass","version":"1.52.1","description":"A pure JavaScript implementation of Sass."},"scheduler@0.20.2":{"licenses":"MIT","repository":"https://github.com/facebook/react","name":"scheduler","author":"","version":"0.20.2","description":"Cooperative scheduler for the browser environment."},"schema-utils@2.7.1":{"licenses":"MIT","repository":"https://github.com/webpack/schema-utils","publisher":"webpack Contrib","name":"schema-utils","version":"2.7.1","description":"webpack Validation Utils"},"schema-utils@3.1.1":{"licenses":"MIT","repository":"https://github.com/webpack/schema-utils","publisher":"webpack Contrib","name":"schema-utils","version":"3.1.1","description":"webpack Validation Utils"},"schema-utils@4.0.0":{"licenses":"MIT","repository":"https://github.com/webpack/schema-utils","publisher":"webpack Contrib","name":"schema-utils","version":"4.0.0","description":"webpack Validation Utils"},"semver@5.7.1":{"licenses":"ISC","repository":"https://github.com/npm/node-semver","name":"semver","author":"","version":"5.7.1","description":"The semantic version parser used by npm."},"semver@6.3.0":{"licenses":"ISC","repository":"https://github.com/npm/node-semver","name":"semver","author":"","version":"6.3.0","description":"The semantic version parser used by npm."},"semver@7.0.0":{"licenses":"ISC","repository":"https://github.com/npm/node-semver","name":"semver","author":"","version":"7.0.0","description":"The semantic version parser used by npm."},"semver@7.3.7":{"licenses":"ISC","repository":"https://github.com/npm/node-semver","publisher":"GitHub Inc.","name":"semver","version":"7.3.7","description":"The semantic version parser used by npm."},"serialize-javascript@6.0.0":{"licenses":"BSD-3-Clause","repository":"https://github.com/yahoo/serialize-javascript","publisher":"Eric Ferraiuolo","name":"serialize-javascript","version":"6.0.0","description":"Serialize JavaScript to a superset of JSON that includes regular expressions and functions."},"shallow-clone@3.0.1":{"licenses":"MIT","repository":"https://github.com/jonschlinkert/shallow-clone","publisher":"Jon Schlinkert","name":"shallow-clone","version":"3.0.1","description":"Creates a shallow clone of any JavaScript value."},"shebang-command@2.0.0":{"licenses":"MIT","repository":"https://github.com/kevva/shebang-command","publisher":"Kevin Mårtensson","name":"shebang-command","version":"2.0.0","description":"Get the command from a shebang"},"shebang-regex@3.0.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/shebang-regex","publisher":"Sindre Sorhus","name":"shebang-regex","version":"3.0.0","description":"Regular expression for matching a shebang line"},"signal-exit@3.0.7":{"licenses":"ISC","repository":"https://github.com/tapjs/signal-exit","publisher":"Ben Coe","name":"signal-exit","version":"3.0.7","description":"when you want to fire an event no matter how a process exits."},"slide@1.1.6":{"licenses":"ISC","repository":"https://github.com/isaacs/slide-flow-control","publisher":"Isaac Z. Schlueter","name":"slide","version":"1.1.6","description":"A flow control lib small enough to fit on in a slide presentation. Derived live at Oak.JS"},"source-map-js@1.0.2":{"licenses":"BSD-3-Clause","repository":"https://github.com/7rulnik/source-map-js","publisher":"Valentin 7rulnik Semirulnik","name":"source-map-js","version":"1.0.2","description":"Generates and consumes source maps"},"source-map-support@0.5.21":{"licenses":"MIT","repository":"https://github.com/evanw/node-source-map-support","name":"source-map-support","author":"","version":"0.5.21","description":"Fixes stack traces for files with source maps"},"source-map@0.5.7":{"licenses":"BSD-3-Clause","repository":"https://github.com/mozilla/source-map","publisher":"Nick Fitzgerald","name":"source-map","version":"0.5.7","description":"Generates and consumes source maps"},"source-map@0.6.1":{"licenses":"BSD-3-Clause","repository":"https://github.com/mozilla/source-map","publisher":"Nick Fitzgerald","name":"source-map","version":"0.6.1","description":"Generates and consumes source maps"},"source-map@0.8.0-beta.0":{"licenses":"BSD-3-Clause","repository":"https://github.com/mozilla/source-map","publisher":"Nick Fitzgerald","name":"source-map","version":"0.8.0-beta.0","description":"Generates and consumes source maps"},"spdx-compare@1.0.0":{"licenses":"MIT","repository":"https://github.com/kemitchell/spdx-compare.js","publisher":"Kyle E. Mitchell","name":"spdx-compare","version":"1.0.0","description":"compare SPDX license expressions"},"spdx-correct@3.1.1":{"licenses":"Apache-2.0","repository":"https://github.com/jslicense/spdx-correct.js","publisher":"Kyle E. Mitchell","name":"spdx-correct","version":"3.1.1","description":"correct invalid SPDX expressions"},"spdx-exceptions@2.3.0":{"licenses":"CC-BY-3.0","repository":"https://github.com/kemitchell/spdx-exceptions.json","publisher":"The Linux Foundation","name":"spdx-exceptions","version":"2.3.0","description":"list of SPDX standard license exceptions"},"spdx-expression-parse@3.0.1":{"licenses":"MIT","repository":"https://github.com/jslicense/spdx-expression-parse.js","publisher":"Kyle E. Mitchell","name":"spdx-expression-parse","version":"3.0.1","description":"parse SPDX license expressions"},"spdx-license-ids@3.0.11":{"licenses":"CC0-1.0","repository":"https://github.com/jslicense/spdx-license-ids","publisher":"Shinnosuke Watanabe","name":"spdx-license-ids","version":"3.0.11","description":"A list of SPDX license identifiers"},"spdx-ranges@2.1.1":{"licenses":"(MIT AND CC-BY-3.0)","repository":"https://github.com/kemitchell/spdx-ranges.js","publisher":"The Linux Foundation","name":"spdx-ranges","version":"2.1.1","description":"list of SPDX standard license ranges"},"spdx-satisfies@4.0.1":{"licenses":"MIT","repository":"https://github.com/kemitchell/spdx-satisfies.js","publisher":"Kyle E. Mitchell","name":"spdx-satisfies","version":"4.0.1","description":"test whether SPDX expressions satisfy licensing criteria"},"sprintf-js@1.0.3":{"licenses":"BSD-3-Clause","repository":"https://github.com/alexei/sprintf.js","publisher":"Alexandru Marasteanu","name":"sprintf-js","version":"1.0.3","description":"JavaScript sprintf implementation"},"stable@0.1.8":{"licenses":"MIT","repository":"https://github.com/Two-Screen/stable","publisher":"Angry Bytes","name":"stable","version":"0.1.8","description":"A stable array sort for JavaScript"},"strip-final-newline@2.0.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/strip-final-newline","publisher":"Sindre Sorhus","name":"strip-final-newline","version":"2.0.0","description":"Strip the final newline character from a string/buffer"},"style-loader@3.3.1":{"licenses":"MIT","repository":"https://github.com/webpack-contrib/style-loader","publisher":"Tobias Koppers @sokra","name":"style-loader","version":"3.3.1","description":"style loader module for webpack"},"stylehacks@5.1.0":{"licenses":"MIT","repository":"https://github.com/cssnano/cssnano","publisher":"Ben Briggs","name":"stylehacks","version":"5.1.0","description":"Detect/remove browser hacks from CSS files."},"stylis@4.0.13":{"licenses":"MIT","repository":"https://github.com/thysultan/stylis.js","publisher":"Sultan Tarimo","name":"stylis","version":"4.0.13","description":"A Light–weight CSS Preprocessor"},"supports-color@5.5.0":{"licenses":"MIT","repository":"https://github.com/chalk/supports-color","publisher":"Sindre Sorhus","name":"supports-color","version":"5.5.0","description":"Detect whether a terminal supports color"},"supports-color@7.2.0":{"licenses":"MIT","repository":"https://github.com/chalk/supports-color","publisher":"Sindre Sorhus","name":"supports-color","version":"7.2.0","description":"Detect whether a terminal supports color"},"supports-color@8.1.1":{"licenses":"MIT","repository":"https://github.com/chalk/supports-color","publisher":"Sindre Sorhus","name":"supports-color","version":"8.1.1","description":"Detect whether a terminal supports color"},"supports-preserve-symlinks-flag@1.0.0":{"licenses":"MIT","repository":"https://github.com/inspect-js/node-supports-preserve-symlinks-flag","publisher":"Jordan Harband","name":"supports-preserve-symlinks-flag","version":"1.0.0","description":"Determine if the current node version supports the `--preserve-symlinks` flag."},"svgo@2.8.0":{"licenses":"MIT","repository":"https://github.com/svg/svgo","publisher":"Kir Belevich","name":"svgo","version":"2.8.0","description":"Nodejs-based tool for optimizing SVG vector graphics files"},"symbol-observable@1.2.0":{"licenses":"MIT","repository":"https://github.com/blesh/symbol-observable","publisher":"Ben Lesh","name":"symbol-observable","version":"1.2.0","description":"Symbol.observable ponyfill"},"tapable@2.2.1":{"licenses":"MIT","repository":"https://github.com/webpack/tapable","publisher":"Tobias Koppers @sokra","name":"tapable","version":"2.2.1","description":"Just a little module for plugins."},"terser-webpack-plugin@5.3.1":{"licenses":"MIT","repository":"https://github.com/webpack-contrib/terser-webpack-plugin","publisher":"webpack Contrib Team","name":"terser-webpack-plugin","version":"5.3.1","description":"Terser plugin for webpack"},"terser@5.13.1":{"licenses":"BSD-2-Clause","repository":"https://github.com/terser/terser","publisher":"Mihai Bazon","name":"terser","version":"5.13.1","description":"JavaScript parser, mangler/compressor and beautifier toolkit for ES6+"},"tiny-warning@1.0.3":{"licenses":"MIT","repository":"https://github.com/alexreardon/tiny-warning","publisher":"Alex Reardon","name":"tiny-warning","version":"1.0.3","description":"A tiny warning function"},"to-fast-properties@2.0.0":{"licenses":"MIT","repository":"https://github.com/sindresorhus/to-fast-properties","publisher":"Sindre Sorhus","name":"to-fast-properties","version":"2.0.0","description":"Force V8 to use fast properties for an object"},"to-regex-range@5.0.1":{"licenses":"MIT","repository":"https://github.com/micromatch/to-regex-range","publisher":"Jon Schlinkert","name":"to-regex-range","version":"5.0.1","description":"Pass two numbers, get a regex-compatible source string for matching ranges. Validated against more than 2.78 million test assertions."},"tr46@1.0.1":{"licenses":"MIT","repository":"https://github.com/Sebmaster/tr46.js","publisher":"Sebastian Mayr","name":"tr46","version":"1.0.1","description":"An implementation of the Unicode TR46 spec"},"treeify@1.1.0":{"licenses":"MIT","repository":"https://github.com/notatestuser/treeify","publisher":"Luke Plaster","name":"treeify","version":"1.1.0","description":"converts a JS object into a nice and readable tree structure for the console"},"ts-loader@9.3.0":{"licenses":"MIT","repository":"https://github.com/TypeStrong/ts-loader","publisher":"John Reilly","name":"ts-loader","version":"9.3.0","description":"TypeScript loader for webpack"},"typescript@4.7.2":{"licenses":"Apache-2.0","repository":"https://github.com/Microsoft/TypeScript","publisher":"Microsoft Corp.","name":"typescript","version":"4.7.2","description":"TypeScript is a language for application scale JavaScript development"},"ua-parser-js@1.0.2":{"licenses":"MIT","repository":"https://github.com/faisalman/ua-parser-js","publisher":"Faisal Salman","name":"ua-parser-js","version":"1.0.2","description":"Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data. Supports browser & node.js environment"},"un-eval@1.2.0":{"licenses":"MIT","repository":"https://github.com/tiansh/un_eval.js","publisher":"ts","name":"un-eval","version":"1.2.0","description":"un_eval converts an Object to its source"},"uncontrollable@7.2.1":{"licenses":"MIT","repository":"https://github.com/jquense/uncontrollable","publisher":"Jason Quense","name":"uncontrollable","version":"7.2.1","description":"Wrap a controlled react component, to allow specific prop/handler pairs to be uncontrolled"},"unicode-canonical-property-names-ecmascript@2.0.0":{"licenses":"MIT","repository":"https://github.com/mathiasbynens/unicode-canonical-property-names-ecmascript","publisher":"Mathias Bynens","name":"unicode-canonical-property-names-ecmascript","version":"2.0.0","description":"The set of canonical Unicode property names supported in ECMAScript RegExp property escapes."},"unicode-match-property-ecmascript@2.0.0":{"licenses":"MIT","repository":"https://github.com/mathiasbynens/unicode-match-property-ecmascript","publisher":"Mathias Bynens","name":"unicode-match-property-ecmascript","version":"2.0.0","description":"Match a Unicode property or property alias to its canonical property name per the algorithm used for RegExp Unicode property escapes in ECMAScript."},"unicode-match-property-value-ecmascript@2.0.0":{"licenses":"MIT","repository":"https://github.com/mathiasbynens/unicode-match-property-value-ecmascript","publisher":"Mathias Bynens","name":"unicode-match-property-value-ecmascript","version":"2.0.0","description":"Match a Unicode property or property alias to its canonical property name per the algorithm used for RegExp Unicode property escapes in ECMAScript."},"unicode-property-aliases-ecmascript@2.0.0":{"licenses":"MIT","repository":"https://github.com/mathiasbynens/unicode-property-aliases-ecmascript","publisher":"Mathias Bynens","name":"unicode-property-aliases-ecmascript","version":"2.0.0","description":"Unicode property alias mappings in JavaScript format for property names that are supported in ECMAScript RegExp property escapes."},"uri-js@4.4.1":{"licenses":"BSD-2-Clause","repository":"https://github.com/garycourt/uri-js","publisher":"Gary Court","name":"uri-js","version":"4.4.1","description":"An RFC 3986/3987 compliant, scheme extendable URI/IRI parsing/validating/resolving library for JavaScript."},"url-loader@4.1.1":{"licenses":"MIT","repository":"https://github.com/webpack-contrib/url-loader","publisher":"Tobias Koppers @sokra","name":"url-loader","version":"4.1.1","description":"A loader for webpack which transforms files into base64 URIs"},"util-deprecate@1.0.2":{"licenses":"MIT","repository":"https://github.com/TooTallNate/util-deprecate","publisher":"Nathan Rajlich","name":"util-deprecate","version":"1.0.2","description":"The Node.js `util.deprecate()` function with browser support"},"util-extend@1.0.3":{"licenses":"MIT","repository":"https://github.com/isaacs/util-extend","name":"util-extend","author":"","version":"1.0.3","description":"Node\'s internal object extension function"},"validate-npm-package-license@3.0.4":{"licenses":"Apache-2.0","repository":"https://github.com/kemitchell/validate-npm-package-license.js","publisher":"Kyle E. Mitchell","name":"validate-npm-package-license","version":"3.0.4","description":"Give me a string and I\'ll tell you if it\'s a valid npm package license string"},"warning@4.0.3":{"licenses":"MIT","repository":"https://github.com/BerkeleyTrue/warning","publisher":"Berkeley Martinez","name":"warning","version":"4.0.3","description":"A mirror of Facebook\'s Warning"},"watchpack@2.3.1":{"licenses":"MIT","repository":"https://github.com/webpack/watchpack","publisher":"Tobias Koppers @sokra","name":"watchpack","version":"2.3.1","description":"Wrapper library for directory and file watching."},"webidl-conversions@4.0.2":{"licenses":"BSD-2-Clause","repository":"https://github.com/jsdom/webidl-conversions","publisher":"Domenic Denicola","name":"webidl-conversions","version":"4.0.2","description":"Implements the WebIDL algorithms for converting to and from JavaScript values"},"webpack-cli@4.9.2":{"licenses":"MIT","repository":"https://github.com/webpack/webpack-cli","name":"webpack-cli","author":"","version":"4.9.2","description":"CLI for webpack & friends"},"webpack-merge@5.8.0":{"licenses":"MIT","repository":"https://github.com/survivejs/webpack-merge","publisher":"Juho Vepsalainen","name":"webpack-merge","version":"5.8.0","description":"Variant of merge that\'s useful for webpack configuration"},"webpack-sources@3.2.3":{"licenses":"MIT","repository":"https://github.com/webpack/webpack-sources","publisher":"Tobias Koppers @sokra","name":"webpack-sources","version":"3.2.3","description":"Source code handling classes for webpack"},"webpack@5.65.0":{"licenses":"MIT","repository":"https://github.com/webpack/webpack","publisher":"Tobias Koppers @sokra","name":"webpack","version":"5.65.0","description":"Packs CommonJs/AMD modules for the browser. Allows to split your codebase into multiple bundles, which can be loaded on demand. Support loaders to preprocess files, i.e. json, jsx, es7, css, less, ... and your custom stuff."},"whatwg-url@7.1.0":{"licenses":"MIT","repository":"https://github.com/jsdom/whatwg-url","publisher":"Sebastian Mayr","name":"whatwg-url","version":"7.1.0","description":"An implementation of the WHATWG URL Standard\'s URL API and parsing machinery"},"which@2.0.2":{"licenses":"ISC","repository":"https://github.com/isaacs/node-which","publisher":"Isaac Z. Schlueter","name":"which","version":"2.0.2","description":"Like which(1) unix command. Find the first instance of an executable in the PATH."},"wildcard@2.0.0":{"licenses":"MIT","repository":"https://github.com/DamonOehlman/wildcard","publisher":"Damon Oehlman","name":"wildcard","version":"2.0.0","description":"Wildcard matching tools"},"wrappy@1.0.2":{"licenses":"ISC","repository":"https://github.com/npm/wrappy","publisher":"Isaac Z. Schlueter","name":"wrappy","version":"1.0.2","description":"Callback wrapping utility"},"yallist@4.0.0":{"licenses":"ISC","repository":"https://github.com/isaacs/yallist","publisher":"Isaac Z. Schlueter","name":"yallist","version":"4.0.0","description":"Yet Another Linked List"},"yaml-loader@0.6.0":{"licenses":"MIT","repository":"https://github.com/eemeli/yaml-loader","name":"yaml-loader","author":"","version":"0.6.0","description":"YAML loader for Webpack"},"yaml@1.10.2":{"licenses":"ISC","repository":"https://github.com/eemeli/yaml","publisher":"Eemeli Aro","name":"yaml","version":"1.10.2","description":"JavaScript parser and stringifier for YAML"}}');
;// CONCATENATED MODULE: ./src/activitys/AcknowledgementsActivity.tsx
var AcknowledgementsActivity_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AcknowledgementsActivity_assign = (undefined && undefined.__assign) || function () {
    AcknowledgementsActivity_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return AcknowledgementsActivity_assign.apply(this, arguments);
};





var AcknowledgementsActivity = /** @class */ (function (_super) {
    AcknowledgementsActivity_extends(AcknowledgementsActivity, _super);
    function AcknowledgementsActivity(props) {
        var _this = _super.call(this, props) || this;
        _this.componentDidMount = function () {
            _super.prototype.componentDidMount;
            _this.setState({ libs: Object.values(licenses_namespaceObject) });
        };
        _this.onCreateToolbar = function () {
            return (
            // @ts-ignore
            (0,jsx_runtime.jsxs)(react_onsenui.Toolbar, { children: [(0,jsx_runtime.jsx)("div", AcknowledgementsActivity_assign({ className: "left" }, { children: (0,jsx_runtime.jsx)(react_onsenui.BackButton
                        // @ts-ignore
                        , { 
                            // @ts-ignore
                            onClick: function () {
                                _this.props.popPage();
                            } }) })), (0,jsx_runtime.jsx)("div", AcknowledgementsActivity_assign({ className: "center" }, { children: "Acknowledgements" }))] }));
        };
        _this.onCreate = function () {
            var libs = _this.state.libs.map(function (item) {
                return (
                // @ts-ignore
                (0,jsx_runtime.jsx)(react_onsenui.Card, AcknowledgementsActivity_assign({ onClick: function () {
                        native_LinkManager.open(item.repository);
                    }, style: { marginTop: "4px", marginBottom: "4px" } }, { children: (0,jsx_runtime.jsxs)("license-card-wrapper", { children: [(0,jsx_runtime.jsxs)("license-card-title", AcknowledgementsActivity_assign({ className: "title" }, { children: [(0,jsx_runtime.jsx)("license-card-name", { children: item.name }), (0,jsx_runtime.jsx)("license-card-author", { children: item.publisher })] })), (0,jsx_runtime.jsxs)("div", AcknowledgementsActivity_assign({ className: "content" }, { children: [(0,jsx_runtime.jsx)("license-card-description", { children: item.description }), (0,jsx_runtime.jsx)("hr", { className: "license-card-diver" }), (0,jsx_runtime.jsxs)("license-card-infos", { children: [(0,jsx_runtime.jsx)("license-card-version", { children: item.version }), (0,jsx_runtime.jsx)("license-card-license", { children: item.licenses })] })] }))] }) })));
            });
            return ((0,jsx_runtime.jsx)("lib-container", AcknowledgementsActivity_assign({ style: {
                    paddingBottom: "4px",
                } }, { children: libs })));
        };
        _this.state = {
            libs: [],
        };
        return _this;
    }
    return AcknowledgementsActivity;
}(activitys_AppCompatActivity));
/* harmony default export */ const activitys_AcknowledgementsActivity = (AcknowledgementsActivity);

;// CONCATENATED MODULE: ./src/builders/AlertBuilder.ts

var AlertBuilder = /** @class */ (function () {
    function AlertBuilder() {
        this.dialog = {
            title: "",
            message: "",
            cancelable: true,
            callback: function () { },
            buttons: {
                positive: {
                    title: "",
                    callback: function () { },
                },
                negative: {
                    title: "",
                    callback: function () { },
                },
            },
        };
    }
    /**
     * @prompt Not supported
     */
    AlertBuilder.prototype.setTitle = function (value) {
        this.dialog.title = value;
        return this;
    };
    AlertBuilder.prototype.setMessage = function (value) {
        this.dialog.message = value;
        return this;
    };
    /**
     * @prompt Not supported
     */
    AlertBuilder.prototype.setPositiveButton = function (title, callback) {
        this.dialog.buttons.positive.title = title;
        this.dialog.buttons.positive.callback = callback;
        return this;
    };
    /**
     * @prompt Not supported
     */
    AlertBuilder.prototype.setNegativeButtom = function (title, callback) {
        this.dialog.buttons.negative.title = title;
        this.dialog.buttons.negative.callback = callback;
        return this;
    };
    /**
     * Creates an custom callback for an prompt dialog
     * @alert Not supported
     */
    AlertBuilder.prototype.setPromptCallback = function (callback) {
        this.dialog.callback = callback;
        return this;
    };
    AlertBuilder.prototype.setCancelable = function (cancel) {
        this.dialog.cancelable = cancel;
        return this;
    };
    AlertBuilder.prototype.showAlert = function () {
        var _a = this.dialog.buttons, positive = _a.positive, negative = _a.negative;
        esm["default"].notification.confirm({
            message: this.dialog.message,
            title: this.dialog.title,
            buttonLabels: [this.dialog.buttons.positive.title, this.dialog.buttons.negative.title],
            animation: "default",
            primaryButtonIndex: 0,
            cancelable: true,
            callback: function (index) {
                switch (index) {
                    case 0:
                        if (typeof positive.callback == "function")
                            positive.callback();
                        break;
                    case 1:
                        if (typeof negative.callback == "function")
                            negative.callback();
                        break;
                    default:
                        // Nothing
                        break;
                }
            },
        });
    };
    AlertBuilder.prototype.showPrompt = function () {
        var _a = this.dialog, callback = _a.callback, message = _a.message, cancelable = _a.cancelable;
        esm["default"].notification.prompt(message).then(function (input) {
            if (typeof callback == "function") {
                callback(input);
            }
        });
    };
    return AlertBuilder;
}());
/* harmony default export */ const builders_AlertBuilder = (AlertBuilder);

;// CONCATENATED MODULE: ./src/components/icons/IssuesIscon.jsx


class IssuesIcon extends react.Component {
  render() {
    var {
      color,
      size,
      className
    } = this.props;
    return /*#__PURE__*/react.createElement("svg", {
      "aria-hidden": "true",
      height: size,
      viewBox: "0 0 24 24",
      version: "1.1",
      width: size,
      "data-view-component": "true",
      className: "octicon octicon-issue-opened blankslate-icon " + className
    }, /*#__PURE__*/react.createElement("path", {
      fill: color,
      "fill-rule": "evenodd",
      d: "M2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0zM12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 13a2 2 0 100-4 2 2 0 000 4z"
    }));
  }

}

IssuesIcon.defaultProps = {
  size: "16"
};
/* harmony default export */ const IssuesIscon = (IssuesIcon);
;// CONCATENATED MODULE: ./src/components/icons/LogsIcon.jsx


class LogsIcon extends react.Component {
  render() {
    var {
      color,
      size,
      className
    } = this.props;
    return /*#__PURE__*/react.createElement("svg", {
      "aria-hidden": "true",
      height: size,
      viewBox: "0 0 16 16",
      version: "1.1",
      width: size,
      "data-view-component": "true",
      class: "octicon octicon-log " + className
    }, /*#__PURE__*/react.createElement("path", {
      d: "M5 8.25a.75.75 0 01.75-.75h4a.75.75 0 010 1.5h-4A.75.75 0 015 8.25zM4 10.5A.75.75 0 004 12h4a.75.75 0 000-1.5H4z"
    }), /*#__PURE__*/react.createElement("path", {
      fill: color,
      "fill-rule": "evenodd",
      d: "M13-.005H3a3 3 0 00-3 3c0 .676.224 1.254.603 1.722.526.65 1.331.783 1.907.783h1.177c-.364.662-.814 1.339-1.287 2.048-.205.309-.414.624-.623.946C.891 9.865 0 11.418 0 13a3 3 0 003 3h10a3 3 0 001.667-5.494.75.75 0 00-.834 1.246A1.5 1.5 0 1111.5 13c0-.642.225-1.347.623-2.136.397-.787.933-1.593 1.501-2.446l.011-.017c.554-.83 1.139-1.709 1.582-2.588.445-.885.783-1.836.783-2.818 0-1.672-1.346-3-3-3zm-10 1.5a1.5 1.5 0 00-1.5 1.5c0 .321.1.569.27.778.097.12.325.227.74.227h7.674A2.737 2.737 0 0110 2.995c0-.546.146-1.059.401-1.5H3zm10 0c.831 0 1.5.662 1.5 1.5 0 .646-.225 1.353-.623 2.143-.398.79-.933 1.595-1.501 2.448l-.017.026c-.552.828-1.134 1.702-1.575 2.576C10.338 11.072 10 12.021 10 13c0 .546.146 1.059.401 1.5H3A1.5 1.5 0 011.5 13c0-1.084.63-2.289 1.537-3.692.177-.274.366-.556.558-.845.632-.948 1.306-1.96 1.773-2.963h6.382a.75.75 0 00.417-1.373c-.444-.298-.667-.656-.667-1.132a1.5 1.5 0 011.5-1.5z"
    }));
  }

}

LogsIcon.defaultProps = {
  size: "16"
};
/* harmony default export */ const icons_LogsIcon = (LogsIcon);
;// CONCATENATED MODULE: ./src/components/icons/RepoIcon.jsx


class RepoIcon extends react.Component {
  render() {
    var {
      color,
      size,
      className
    } = this.props;
    return /*#__PURE__*/react.createElement("svg", {
      "aria-hidden": "true",
      height: size,
      viewBox: "0 0 16 16",
      version: "1.1",
      width: size,
      "data-view-component": "true",
      className: "octicon octicon-repo color-fg-muted mr-2 " + className
    }, /*#__PURE__*/react.createElement("path", {
      fill: color,
      "fill-rule": "evenodd",
      d: "M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
    }));
  }

}

RepoIcon.defaultProps = {
  size: "16"
};
/* harmony default export */ const icons_RepoIcon = (RepoIcon);
;// CONCATENATED MODULE: ./package.json
const package_namespaceObject = JSON.parse('{"u2":"com.dergoogler.mmrl.web","i8":"1.4.0@alpha-1","HO":{"@emotion/react":"^11.9.0","@emotion/styled":"^11.8.1","@js.properties/properties":"^0.5.4","@mui/icons-material":"^5.8.0","@mui/material":"^5.8.0","axios":"^0.26.1","bootstrap":"^5.1.3","dot-properties":"^1.0.1","jss":"^10.9.0","jss-preset-default":"^10.9.0","markdown-to-jsx":"^7.1.7","material-icons":"^1.10.8","onsenui":"^2.12.0","react":"^17.0.2","react-bootstrap":"^2.3.1","react-device-detect":"^2.2.2","react-dom":"^17.0.2","react-onsenui":"^1.12.0","react-toastify":"^9.0.1"}}');
;// CONCATENATED MODULE: ./src/native/PackageManager.ts



var PackageManager = /** @class */ (function () {
    function PackageManager() {
    }
    Object.defineProperty(PackageManager, "getAppPackageId", {
        get: function () {
            if (native_Constants.isAndroid) {
                return android.getAppPackageId();
            }
            else {
                return package_namespaceObject.u2;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PackageManager, "getAppVersionName", {
        get: function () {
            if (native_Constants.isAndroid) {
                return android.getAppVersionName();
            }
            else {
                return package_namespaceObject.i8;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PackageManager, "getAppVersionCode", {
        get: function () {
            if (native_Constants.isAndroid) {
                return android.getAppVersionCode();
            }
            else {
                return Number(package_namespaceObject.i8.replace(".", ""));
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PackageManager, "getMagiskVersionCode", {
        get: function () {
            if (native_Constants.isAndroid) {
                return builders_ShellBuilder.cmd("su -V").result();
            }
            else {
                return "0";
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PackageManager, "getMagiskVersionName", {
        get: function () {
            if (native_Constants.isAndroid) {
                return builders_ShellBuilder.cmd("su -v").result();
            }
            else {
                return "0:MAGISKSU";
            }
        },
        enumerable: false,
        configurable: true
    });
    return PackageManager;
}());
/* harmony default export */ const native_PackageManager = (PackageManager);

;// CONCATENATED MODULE: ./src/utils/settings.tsx












var prefManager = new native_SharedPreferences();
var settings = [
    {
        title: "Repo",
        content: [
            {
                key: "repo",
                type: "",
                icon: (0,jsx_runtime.jsx)(icons_RepoIcon, { size: "24" }),
                text: "Custom repo",
                onClick: function (key) {
                    new builders_AlertBuilder()
                        .setMessage("Custom repo")
                        .setPromptCallback(function (input) {
                        if (utils_tools.validURL(input)) {
                            prefManager.setPref("repo", input);
                            esm["default"].notification.alert("Repo changed, please refresh the app");
                        }
                        else {
                            esm["default"].notification.alert("Invalid input");
                        }
                    })
                        .showPrompt();
                },
            },
        ],
    },
    {
        title: "Appearance",
        content: [
            {
                key: "disable_lq_modules",
                type: "switch",
                text: "Disable low-quality module badge",
            },
        ],
    },
    {
        title: "Info",
        content: [
            {
                type: "",
                icon: (0,jsx_runtime.jsx)(icons_RepoIcon, { size: "24" }),
                text: "Source code",
                onClick: function () {
                    native_LinkManager.open("https://github.com/DerGoogler/MMRL/", "_blank");
                },
            },
            {
                type: "",
                icon: (0,jsx_runtime.jsx)(icons_LogsIcon, { size: "24" }),
                text: "Acknowledgements",
                onClick: function (key, pushPage) {
                    pushPage({
                        key: "acknowledgements",
                        activity: activitys_AcknowledgementsActivity,
                    });
                },
            },
            {
                type: "",
                icon: (0,jsx_runtime.jsx)(IssuesIscon, { size: "24" }),
                text: "Issues",
                onClick: function (key, pushPage) {
                    native_LinkManager.open("https://github.com/DerGoogler/DG-Repo/issues", "_blank");
                },
            },
            {
                type: "",
                text: ((0,jsx_runtime.jsxs)("span", { children: [native_PackageManager.getAppPackageId, " v", native_PackageManager.getAppVersionName, " (", native_PackageManager.getAppVersionCode, ")", (0,jsx_runtime.jsx)("br", {}), native_Constants.isAndroid ? "".concat(native_PackageManager.getMagiskVersionName, " (").concat(native_PackageManager.getMagiskVersionCode, ")") : ""] })),
                style: {
                    // display: !Constants.isAndroid ? "none" : "",
                    color: "dimgray",
                    fontSize: "15px",
                },
            },
        ],
    },
];
/* harmony default export */ const utils_settings = (settings);

;// CONCATENATED MODULE: ./src/activitys/SettingsActivity.tsx
var SettingsActivity_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SettingsActivity_assign = (undefined && undefined.__assign) || function () {
    SettingsActivity_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return SettingsActivity_assign.apply(this, arguments);
};






var SettingsActivity = /** @class */ (function (_super) {
    SettingsActivity_extends(SettingsActivity, _super);
    function SettingsActivity(props) {
        var _this = _super.call(this, props) || this;
        _this.componentDidMount = function () {
            _super.prototype.componentDidMount;
            _this.setState({ libs: Object.keys(package_namespaceObject.HO) });
        };
        _this.onCreateToolbar = function () {
            return (
            // @ts-ignore
            (0,jsx_runtime.jsxs)(react_onsenui.Toolbar, { children: [(0,jsx_runtime.jsx)("div", SettingsActivity_assign({ className: "left" }, { children: (0,jsx_runtime.jsx)(react_onsenui.BackButton
                        // @ts-ignore
                        , { 
                            // @ts-ignore
                            onClick: function () {
                                _this.props.popPage();
                            } }) })), (0,jsx_runtime.jsx)("div", SettingsActivity_assign({ className: "center" }, { children: "Settings" }))] }));
        };
        _this.onCreate = function () {
            return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (0,jsx_runtime.jsx)("settings-container", { children: (0,jsx_runtime.jsx)(react_onsenui.List, { children: (0,jsx_runtime.jsx)(ListViewBuilder, { data: utils_settings, pushPage: _this.props.pushPage }) }) }) }));
        };
        _this.state = {
            libs: [],
        };
        return _this;
    }
    return SettingsActivity;
}(activitys_AppCompatActivity));
/* harmony default export */ const activitys_SettingsActivity = (SettingsActivity);

;// CONCATENATED MODULE: ./src/activitys/MainApplication.tsx
var MainApplication_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MainApplication_assign = (undefined && undefined.__assign) || function () {
    MainApplication_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return MainApplication_assign.apply(this, arguments);
};








var MainApplication = /** @class */ (function (_super) {
    MainApplication_extends(MainApplication, _super);
    function MainApplication(props) {
        var _this = _super.call(this, props) || this;
        _this.onCreateToolbar = function () {
            return (
            // @ts-ignore
            (0,jsx_runtime.jsxs)(react_onsenui.Toolbar, { children: [(0,jsx_runtime.jsx)("div", MainApplication_assign({ className: "center" }, { children: "Magisk Module Repo Loader" })), (0,jsx_runtime.jsx)("div", MainApplication_assign({ className: "right" }, { children: (0,jsx_runtime.jsx)(react_onsenui.ToolbarButton, MainApplication_assign({ className: "back-button--material__icon", onClick: _this.openSettings }, { children: (0,jsx_runtime.jsx)(icons_SettingsIcon, { size: "24" }) })) }))] }));
        };
        _this.openSettings = function () {
            _this.props.pushPage({
                key: "settings",
                activity: activitys_SettingsActivity,
            });
        };
        _this.renderTabs = function () {
            return [
                {
                    content: (0,jsx_runtime.jsx)(fragments_ExploreModuleFragment, { pushPage: _this.props.pushPage }),
                    tab: (0,jsx_runtime.jsx)(react_onsenui.Tab, { label: "Explore" }),
                },
                {
                    content: (0,jsx_runtime.jsx)(fragments_DeviceModuleFragment, { pushPage: _this.props.pushPage }),
                    tab: (0,jsx_runtime.jsx)(react_onsenui.Tab, { label: "Installed" }),
                },
            ];
        };
        _this.onCreate = function () {
            return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: (function () {
                    if (native_Constants.isAndroid) {
                        //@ts-ignore
                        return (0,jsx_runtime.jsx)(react_onsenui.Tabbar, { swipeable: false, position: "auto", renderTabs: _this.renderTabs });
                    }
                    else {
                        return (0,jsx_runtime.jsx)(fragments_ExploreModuleFragment, { pushPage: _this.props.pushPage });
                    }
                })() }));
        };
        _this.state = {};
        return _this;
    }
    return MainApplication;
}(activitys_AppCompatActivity));
/* harmony default export */ const activitys_MainApplication = (MainApplication);

;// CONCATENATED MODULE: ./src/activitys/MainActivity.tsx
var MainActivity_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MainActivity_assign = (undefined && undefined.__assign) || function () {
    MainActivity_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return MainActivity_assign.apply(this, arguments);
};




var MainActivity = /** @class */ (function (_super) {
    MainActivity_extends(MainActivity, _super);
    function MainActivity(props) {
        var _this = _super.call(this, props) || this;
        _this.componentDidMount = function () {
            window.addEventListener("load", _this.windowLoadPush);
        };
        _this.componentWillUnmount = function () {
            window.removeEventListener("load", _this.windowLoadPush);
        };
        _this.windowLoadPush = function () {
            if (typeof history.pushState === "function") {
                history.pushState("jibberish", "", null);
                window.onpopstate = function () {
                    history.pushState("newjibberish", "", null);
                    if (_this.state.currentPage === "main") {
                        // Will added later
                        // native.close();
                    }
                    else {
                        _this.popPage();
                    }
                };
            }
            else {
                var ignoreHashChange = true;
                window.onhashchange = function () {
                    if (!ignoreHashChange) {
                        ignoreHashChange = true;
                        window.location.hash = Math.random().toString();
                    }
                    else {
                        ignoreHashChange = false;
                    }
                };
            }
        };
        _this.pushPage = function (props) {
            var route = {
                component: props.activity,
                props: {
                    key: props.key,
                    extra: props === null || props === void 0 ? void 0 : props.extra,
                    popPage: function () { return _this.popPage(); },
                    pushPage: function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return _this.pushPage.apply(null, args);
                    },
                },
            };
            var routeConfig = _this.state.routeConfig;
            routeConfig = react_onsenui.RouterUtil.push({
                routeConfig: routeConfig,
                route: route,
            });
            _this.setState({ routeConfig: routeConfig, currentPage: props.key });
        };
        _this.popPage = function (options) {
            if (options === void 0) { options = {}; }
            var routeConfig = _this.state.routeConfig;
            routeConfig = react_onsenui.RouterUtil.pop({
                routeConfig: routeConfig,
                options: MainActivity_assign(MainActivity_assign({}, options), { animationOptions: {
                        duration: 0.2,
                        timing: "ease-in",
                        animation: "fade-md",
                    } }),
            });
            _this.setState({ routeConfig: routeConfig });
            _this.setState({ currentPage: "main" });
        };
        _this.onPostPush = function () {
            var routeConfig = react_onsenui.RouterUtil.postPush(_this.state.routeConfig);
            _this.setState({ routeConfig: routeConfig });
        };
        _this.onPostPop = function () {
            var routeConfig = react_onsenui.RouterUtil.postPop(_this.state.routeConfig);
            _this.setState({ routeConfig: routeConfig });
        };
        _this.renderPage = function (route) {
            var props = route.props || {};
            return (0,jsx_runtime.jsx)(route.component, MainActivity_assign({}, props));
        };
        _this.renderToolbar = function () {
            return (
            // @ts-ignore
            (0,jsx_runtime.jsxs)(react_onsenui.Toolbar, { children: [(0,jsx_runtime.jsx)("div", MainActivity_assign({ className: "left" }, { children: (0,jsx_runtime.jsx)(react_onsenui.BackButton, {}) })), (0,jsx_runtime.jsx)("div", MainActivity_assign({ className: "center" }, { children: "Stateless Navigator" }))] }));
        };
        _this.render = function () {
            return ((0,jsx_runtime.jsx)(react_onsenui.Page, { children: (0,jsx_runtime.jsx)(react_onsenui.RouterNavigator, { swipeable: true, 
                    // @ts-ignore
                    swipePop: function (options) { return _this.popPage(options); }, routeConfig: _this.state.routeConfig, renderPage: _this.renderPage, onPostPush: function () { return _this.onPostPush(); }, onPostPop: function () { return _this.onPostPop(); } }) }));
        };
        var routeConfig = react_onsenui.RouterUtil.init([
            {
                //component: MainApplication,
                component: activitys_MainApplication,
                props: {
                    key: "main",
                    pushPage: function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return _this.pushPage.apply(null, args);
                    },
                },
            },
        ]);
        _this.state = { routeConfig: routeConfig, currentPage: "main" };
        return _this;
    }
    return MainActivity;
}(react.Component));
/* harmony default export */ const activitys_MainActivity = (MainActivity);

;// CONCATENATED MODULE: ./src/styles/theme.ts
var theme = {
    "@global": {
        ":root": {},
        html: {
            height: "100%",
            width: "100%",
        },
        body: {
            position: "absolute",
            overflow: "hidden",
            top: "0",
            right: "0",
            left: "0",
            bottom: "0",
            padding: "0",
            margin: "0",
            webkitTextSizeAdjust: "100%",
            touchAction: "manipulation",
        },
        "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video": {
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            webkitTapHighlightColor: "transparent",
            webkitTouchCallout: "none",
        },
        "input, textarea, select": {
            webkitUserSelect: "auto",
            msUserSelect: "auto",
            userSelect: "auto",
            mozUserSelect: "text",
            webkitTouchCallout: "none",
        },
        "a, button, input, textarea, select": {
            touchAction: "manipulation",
        },
        "input:active, input:focus, textarea:active, textarea:focus, select:active, select:focus": {
            outline: "none",
        },
        h1: {
            fontSize: "36px",
        },
        h2: {
            fontSize: "30px",
        },
        h3: {
            fontSize: "24px",
        },
        "h4, h5, h6": {
            fontSize: "18px",
        },
        ".page": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            backgroundColor: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    // @ts-ignore
                    webkitFontSmoothing: "antialiased",
                },
                {
                    backgroundColor: "#ffffff",
                },
            ],
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            overflowX: "visible",
            overflowY: "hidden",
            color: "#1f1f21",
            msOverflowStyle: "none",
        },
        ".page::-webkit-scrollbar": {
            display: "none",
        },
        ".page__content": {
            backgroundColor: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    bottom: "0",
                },
                {
                    top: "0",
                },
                {
                    backgroundColor: "#ffffff",
                },
            ],
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            boxSizing: "border-box",
            paddingTop: "0",
        },
        ".page__background": {
            backgroundColor: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    backgroundColor: "#ffffff",
                },
            ],
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            boxSizing: "border-box",
        },
        ".page--material": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            backgroundColor: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    backgroundColor: "#ffffff",
                },
            ],
        },
        ".page--material__content": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
        },
        ".page__content h1, .page__content h2, .page__content h3, .page__content h4, .page__content h5": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            margin: "0.6em 0",
            padding: "0",
        },
        ".page__content h1": {
            fontSize: "28px",
        },
        ".page__content h2": {
            fontSize: "24px",
        },
        ".page__content h3": {
            fontSize: "20px",
        },
        ".page--material__content h1, .page--material__content h2, .page--material__content h3, .page--material__content h4, .page--material__content h5": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            margin: "0.6em 0",
            padding: "0",
        },
        ".page--material__content h1": {
            fontSize: "28px",
        },
        ".page--material__content h2": {
            fontSize: "24px",
        },
        ".page--material__content h3": {
            fontSize: "20px",
        },
        ".page--material__background": {
            backgroundColor: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    backgroundColor: "#ffffff",
                },
            ],
        },
        ".switch": {
            display: "inline-block",
            verticalAlign: "top",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            position: "relative",
            minWidth: "51px",
            fontSize: "17px",
            padding: "0 20px",
            border: "none",
            overflow: "visible",
            width: "51px",
            height: "32px",
            zIndex: "0",
            textAlign: "left",
        },
        ".switch__input": {
            position: "absolute",
            right: "0",
            top: "0",
            left: "0",
            bottom: "0",
            padding: "0",
            border: "0",
            backgroundColor: "transparent",
            zIndex: "0",
            verticalAlign: "top",
            outline: "none",
            width: "100%",
            height: "100%",
            margin: "0",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            fallbacks: [
                {
                    zIndex: "1",
                },
            ],
        },
        ".switch__toggle": {
            backgroundColor: "white",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            borderRadius: "30px",
            transitionProperty: "all",
            transitionDuration: "0.35s",
            transitionTimingFunction: "ease-out",
            boxShadow: "inset 0 0 0 2px #e5e5e5",
        },
        ".switch__handle": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            position: "absolute",
            content: '""',
            borderRadius: "28px",
            height: "28px",
            width: "28px",
            backgroundColor: "white",
            left: "1px",
            top: "2px",
            transitionProperty: "all",
            transitionDuration: "0.35s",
            transitionTimingFunction: "cubic-bezier(0.59, 0.01, 0.5, 0.99)",
            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.25), 0 3px 2px rgba(0, 0, 0, 0.25)",
        },
        ".switch--active__handle": {
            transition: "none",
        },
        ":checked + .switch__toggle": {
            boxShadow: "inset 0 0 0 2px #44db5e",
            backgroundColor: "#44db5e",
        },
        ":checked + .switch__toggle > .switch__handle": {
            left: "21px",
            boxShadow: "0 3px 2px rgba(0, 0, 0, 0.25)",
        },
        ":disabled + .switch__toggle": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".switch__touch": {
            position: "absolute",
            top: "-5px",
            bottom: "-5px",
            left: "-10px",
            right: "-10px",
        },
        ".switch--material": {
            width: "36px",
            height: "24px",
            padding: "0 10px",
            minWidth: "36px",
        },
        ".switch--material__toggle": {
            backgroundColor: "#b0afaf",
            marginTop: "5px",
            height: "14px",
            boxShadow: "none",
        },
        ".switch--material__input": {
            position: "absolute",
            right: "0",
            top: "0",
            left: "0",
            bottom: "0",
            padding: "0",
            border: "0",
            backgroundColor: "transparent",
            zIndex: "0",
            verticalAlign: "top",
            outline: "none",
            width: "100%",
            height: "100%",
            margin: "0",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            fallbacks: [
                {
                    zIndex: "1",
                },
            ],
        },
        ".switch--material__handle": {
            backgroundColor: "#f1f1f1",
            left: "0",
            marginTop: "-5px",
            width: "20px",
            height: "20px",
            boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),\r\n    0 2px 4px -1px rgba(0, 0, 0, 0.4)",
        },
        ":checked + .switch--material__toggle": {
            backgroundColor: "#7c43bd",
            boxShadow: "none",
        },
        ":checked + .switch--material__toggle > .switch--material__handle": {
            left: "16px",
            backgroundColor: "#4a148c",
            boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 1px -2px rgba(0, 0, 0, 0.2)",
        },
        ":disabled + .switch--material__toggle": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".switch--material__handle:before": {
            background: "transparent",
            content: '""',
            display: "block",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            zIndex: "0",
            boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.12)",
            transition: "box-shadow 0.1s linear",
        },
        ".switch--material__toggle > .switch--active__handle:before": {
            boxShadow: "0 0 0 14px rgba(0, 0, 0, 0.12)",
        },
        ":checked + .switch--material__toggle > .switch--active__handle:before": {
            boxShadow: "0 0 0 14px color-mod(#4a148c alpha(20%))",
        },
        ".switch--material__touch": {
            position: "absolute",
            top: "-10px",
            bottom: "-10px",
            left: "-15px",
            right: "-15px",
        },
        ".range": {
            display: "inline-block",
            position: "relative",
            width: "100px",
            height: "30px",
            margin: "0",
            padding: "0",
            backgroundImage: "linear-gradient(#a4aab3, #a4aab3)",
            backgroundPosition: "left center",
            backgroundSize: "100% 2px",
            backgroundRepeat: "no-repeat",
            backgroundColor: "transparent",
        },
        ".range__input": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "transparent",
            border: "none",
            verticalAlign: "top",
            outline: "none",
            lineHeight: "1",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            backgroundImage: "linear-gradient(#4a148c, #4a148c)",
            backgroundPosition: "left center",
            backgroundSize: "0% 2px",
            backgroundRepeat: "no-repeat",
            height: "30px",
            position: "relative",
            zIndex: "1",
            width: "100%",
        },
        ".range__input::-moz-range-track": {
            position: "relative",
            border: "none",
            background: "none",
            boxShadow: "none",
            top: "0",
            margin: "0",
            padding: "0",
        },
        ".range__input::-ms-track": {
            position: "relative",
            border: "none",
            backgroundColor: "#a4aab3",
            height: "0",
            borderRadius: "50%",
        },
        ".range__input::-webkit-slider-thumb": {
            position: "relative",
            height: "28px",
            width: "28px",
            backgroundColor: "#fff",
            border: "none",
            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.25), 0 3px 2px rgba(0, 0, 0, 0.25)",
            borderRadius: "50%",
            margin: "0",
            padding: "0",
            boxSizing: "border-box",
            webkitAppearance: "none",
            appearance: "none",
            top: "0",
            zIndex: "1",
        },
        ".range__input::-moz-range-thumb": {
            position: "relative",
            height: "28px",
            width: "28px",
            backgroundColor: "#fff",
            border: "none",
            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.25), 0 3px 2px rgba(0, 0, 0, 0.25)",
            borderRadius: "50%",
            margin: "0",
            padding: "0",
        },
        ".range__input::-ms-thumb": {
            position: "relative",
            height: "28px",
            width: "28px",
            backgroundColor: "#fff",
            border: "none",
            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.25), 0 3px 2px rgba(0, 0, 0, 0.25)",
            borderRadius: "50%",
            margin: "0",
            padding: "0",
            top: "0",
        },
        ".range__input::-ms-fill-lower": {
            height: "2px",
            backgroundColor: "#4a148c",
        },
        ".range__input::-ms-tooltip": {
            display: "none",
        },
        ".range__input:disabled": {
            opacity: "1",
            pointerEvents: "none",
        },
        ".range__focus-ring": {
            pointerEvents: "none",
            top: "0",
            left: "0",
            display: "none",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "none",
            border: "none",
            verticalAlign: "top",
            outline: "none",
            lineHeight: "1",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            fallbacks: [
                {
                    background: "transparent",
                },
            ],
            height: "30px",
            position: "absolute",
            zIndex: "0",
            width: "100%",
        },
        ".range--disabled": {
            opacity: "0.3",
            pointerEvents: "none",
            fallbacks: [
                {
                    pointerEvents: "none",
                },
            ],
        },
        ".range--material": {
            position: "relative",
            backgroundImage: "linear-gradient(#bdbdbd, #bdbdbd)",
        },
        ".range--material__input": {
            backgroundImage: "linear-gradient(#4a148c, #4a148c)",
            backgroundPosition: "center left",
            backgroundSize: "0% 2px",
        },
        ".range--material__focus-ring": {
            display: "block",
        },
        ".range--material__focus-ring::-webkit-slider-thumb": {
            webkitAppearance: "none",
            appearance: "none",
            width: "14px",
            height: "14px",
            border: "none",
            boxShadow: "0 0 0 9px #4a148c",
            backgroundColor: "#4a148c",
            borderRadius: "50%",
            opacity: "0",
            transition: "opacity 0.25s ease-out, transform 0.25s ease-out, -webkit-transform 0.25s ease-out",
            fallbacks: [
                {
                    transition: "opacity 0.25s ease-out, transform 0.25s ease-out",
                },
                {
                    transition: "opacity 0.25s ease-out, -webkit-transform 0.25s ease-out",
                },
            ],
        },
        ".range--material__input.range__input--active + .range--material__focus-ring::-webkit-slider-thumb": {
            opacity: "0.2",
            webkitTransform: "scale(1.5, 1.5, 1.5)",
            transform: "scale(1.5, 1.5, 1.5)",
        },
        ".range--material__input::-webkit-slider-thumb": {
            position: "relative",
            boxSizing: "border-box",
            border: "none",
            backgroundColor: "transparent",
            width: "14px",
            height: "32px",
            borderRadius: "0",
            boxShadow: "none",
            backgroundImage: "radial-gradient(\r\n    circle farthest-corner,\r\n    #4a148c 0%,\r\n    #4a148c 6.6px,\r\n    transparent 7px\r\n  )",
            transition: "transform 0.1s linear, -webkit-transform 0.1s linear",
            fallbacks: [
                {
                    transition: "transform 0.1s linear",
                },
                {
                    transition: "-webkit-transform 0.1s linear",
                },
            ],
            overflow: "visible",
        },
        ".range--material__input[_zero]::-webkit-slider-thumb": {
            backgroundImage: "radial-gradient(\r\n    circle farthest-corner,\r\n    #f2f2f2 0%,\r\n    #f2f2f2 4px,\r\n    #bdbdbd 4px,\r\n    #bdbdbd 6.4px,\r\n    transparent 7px\r\n  )",
        },
        ".range--material__input[_zero] + .range--material__focus-ring::-webkit-slider-thumb": {
            boxShadow: "0 0 0 9px #bdbdbd",
        },
        ".range--material__input::-moz-range-track": {
            background: "none",
        },
        ".range--material__input::-moz-range-thumb, .range--material__input:focus::-moz-range-thumb": {
            boxSizing: "border-box",
            border: "none",
            width: "14px",
            height: "32px",
            borderRadius: "0",
            backgroundColor: "transparent",
            backgroundImage: "-moz-radial-gradient(\r\n    circle farthest-corner,\r\n    #4a148c 0%,\r\n    #4a148c 6.6px,\r\n    transparent 7px\r\n  )",
            boxShadow: "none",
        },
        ".range--material__input:active::-webkit-slider-thumb, .range--material__input.range__input--active::-webkit-slider-thumb": {
            webkitTransform: "scale(1.5)",
            transform: "scale(1.5)",
            transition: "transform 0.1s linear, -webkit-transform 0.1s linear",
            fallbacks: [
                {
                    transition: "transform 0.1s linear",
                },
                {
                    transition: "-webkit-transform 0.1s linear",
                },
            ],
        },
        ".range--disabled.range--material": {
            opacity: "1",
        },
        ".range--disabled > .range--material__input": {
            backgroundImage: "none",
        },
        ".range--material__input:disabled::-webkit-slider-thumb": {
            backgroundImage: "radial-gradient(\r\n    circle farthest-corner,\r\n    #b0b0b0 0%,\r\n    #b0b0b0 4px,\r\n    #eeeeee 4.4px,\r\n    #eeeeee 7.6px,\r\n    transparent 7.6px\r\n  )",
            transition: "none",
        },
        ".range--material__input:disabled::-moz-range-thumb": {
            backgroundImage: "-moz-radial-gradient(\r\n    circle farthest-corner,\r\n    #b0b0b0 0%,\r\n    #b0b0b0 4px,\r\n    #eeeeee 4.4px,\r\n    #eeeeee 7.6px,\r\n    transparent 7.6px\r\n  )",
            transition: "none",
        },
        ".notification": {
            position: "relative",
            display: "inline-block",
            verticalAlign: "top",
            font: "inherit",
            border: "none",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0 4px",
            margin: "0",
            fallbacks: [
                {
                    fontWeight: "400",
                },
                {
                    lineHeight: "normal",
                },
                {
                    color: "inherit",
                },
                {
                    padding: "0",
                },
                {
                    margin: "0",
                },
                {
                    border: "none",
                },
                {
                    font: "inherit",
                },
            ],
            color: "white",
            background: "transparent",
            lineHeight: "19px",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textDecoration: "none",
            width: "auto",
            height: "19px",
            borderRadius: "19px",
            backgroundColor: "#fe3824",
            textAlign: "center",
            fontSize: "16px",
            minWidth: "19px",
        },
        ".notification:empty": {
            display: "none",
        },
        ".notification--material": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            backgroundColor: "#4a148c",
            fontSize: "16px",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            color: "white",
        },
        ".toolbar": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            whiteSpace: "nowrap",
            overflow: "hidden",
            wordSpacing: "0",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#1f1f21",
            background: "#fafafa",
            border: "none",
            lineHeight: "normal",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            zIndex: "2",
            display: "flex",
            fallbacks: [
                {
                    boxSizing: "border-box",
                },
                {
                    whiteSpace: "nowrap",
                },
                {
                    fontWeight: "400",
                },
                {
                    color: "inherit",
                },
                {
                    background: "transparent",
                },
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            webkitBoxAlign: "stretch",
            webkitAlignItems: "stretch",
            alignItems: "stretch",
            webkitFlexWrap: "nowrap",
            flexWrap: "nowrap",
            height: "44px",
            paddingLeft: "0",
            paddingRight: "0",
            boxShadow: "none",
            width: "100%",
            borderBottom: "none",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #b2b2b2, #b2b2b2 100%)",
            top: "0",
            paddingTop: "0",
        },
        "@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)": {
            ".toolbar": {
                backgroundImage: "linear-gradient(0deg, #b2b2b2, #b2b2b2 50%, transparent 50%)",
            },
            ".bottom-bar": {
                backgroundImage: "linear-gradient(180deg, #b2b2b2, #b2b2b2 50%, transparent 50%)",
            },
            ".tabbar": {
                borderTop: "none",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
                backgroundImage: "linear-gradient(180deg, #ccc, #ccc 50%, transparent 50%)",
            },
            ".tabbar__button": {
                borderTop: "none",
            },
            ".tabbar--top": {
                borderBottom: "none",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%)",
            },
            ".list": {
                backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%),\r\n      linear-gradient(180deg, #ccc, #ccc 50%, transparent 50%)",
            },
            ".list-item--expandable": {
                backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%)",
            },
            ".list-item__center": {
                backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%)",
            },
            ".list-item__right": {
                backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%)",
            },
            ".list-header": {
                backgroundImage: "linear-gradient(180deg, #ccc, #ccc 50%, transparent 50%)",
            },
            ".list-item--material__left:empty, .list-item--material__center": {
                backgroundImage: "linear-gradient(0deg, #eee, #eee 50%, transparent 50%)",
            },
            ".list-item--material__right": {
                backgroundImage: "linear-gradient(0deg, #eee, #eee 50%, transparent 50%)",
            },
            ".list-item--material.list-item--expandable": {
                backgroundImage: "linear-gradient(0deg, #eee, #eee 50%, transparent 50%)",
            },
            ".list-item--material.list-item--longdivider, .list-item--material.list-item--expandable.list-item--longdivider": {
                backgroundImage: "linear-gradient(0deg, #eee, #eee 50%, transparent 50%)",
            },
            ".list-header--material:not(:first-of-type)": {
                backgroundImage: "linear-gradient(180deg, #eee, #eee 50%, transparent 50%)",
            },
            ".list-item--longdivider": {
                backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%)",
            },
            ".alert-dialog-button": {
                borderTop: "none",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
                backgroundImage: "linear-gradient(180deg, #ddd, #ddd 50%, transparent 50%)",
            },
            ".alert-dialog-button--rowfooter": {
                borderTop: "none",
                borderLeft: "none",
                backgroundSize: "100% 1px, 1px 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top, left",
                backgroundImage: "linear-gradient(0deg, transparent, transparent 50%, #ddd 50%),\r\n      linear-gradient(90deg, transparent, transparent 50%, #ddd 50%)",
            },
            ".alert-dialog-button--rowfooter:first-child": {
                borderTop: "none",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top, left",
                backgroundImage: "linear-gradient(0deg, transparent, transparent 50%, #ddd 50%)",
            },
            ".alert-dialog-button--material": {
                background: "none",
            },
            ".alert-dialog-button--rowfooter--material, .alert-dialog-button--rowfooter--material:first-child": {
                background: "none",
            },
            ".alert-dialog-button--primal--material": {
                background: "none",
            },
            ".action-sheet-button": {
                backgroundImage: "linear-gradient(\r\n      0deg,\r\n      rgba(0, 0, 0, 0.1),\r\n      rgba(0, 0, 0, 0.1) 50%,\r\n      transparent 50%\r\n    )",
            },
            ".action-sheet-title": {
                backgroundImage: "linear-gradient(\r\n      0deg,\r\n      rgba(0, 0, 0, 0.1),\r\n      rgba(0, 0, 0, 0.1) 50%,\r\n      transparent 50%\r\n    )",
            },
        },
        ".toolbar__bg": {
            background: "#fafafa",
        },
        ".toolbar__item": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "transparent",
            border: "none",
            lineHeight: "normal",
            height: "44px",
            overflow: "visible",
            display: "block",
            verticalAlign: "middle",
        },
        ".toolbar__left": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "transparent",
            border: "none",
            lineHeight: "44px",
            maxWidth: "50%",
            width: "27%",
            textAlign: "left",
            fallbacks: [
                {
                    lineHeight: "normal",
                },
            ],
        },
        ".toolbar__right": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "transparent",
            border: "none",
            lineHeight: "44px",
            maxWidth: "50%",
            width: "27%",
            textAlign: "right",
            fallbacks: [
                {
                    lineHeight: "normal",
                },
            ],
        },
        ".toolbar__center": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#1f1f21",
            background: "transparent",
            border: "none",
            lineHeight: "44px",
            width: "46%",
            textAlign: "center",
            fallbacks: [
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
            ],
            fontSize: "17px",
            fontWeight: "500",
        },
        ".toolbar__title": {
            lineHeight: "44px",
            fontSize: "17px",
            fontWeight: "500",
            color: "#1f1f21",
            margin: "0",
            padding: "0",
            overflow: "visible",
        },
        ".toolbar__center:first-child:last-child": {
            width: "100%",
        },
        ".bottom-bar": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            whiteSpace: "nowrap",
            overflow: "hidden",
            wordSpacing: "0",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#1f1f21",
            background: "#fafafa",
            border: "none",
            lineHeight: "normal",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            zIndex: "2",
            display: "block",
            height: "44px",
            paddingLeft: "0",
            paddingRight: "0",
            fallbacks: [
                {
                    boxSizing: "border-box",
                },
                {
                    bottom: "0",
                },
                {
                    borderTop: "1px solid #b2b2b2",
                },
                {
                    fontWeight: "400",
                },
                {
                    color: "inherit",
                },
                {
                    background: "transparent",
                },
            ],
            boxShadow: "none",
            borderBottom: "none",
            borderTop: "none",
            position: "absolute",
            bottom: "0",
            right: "0",
            left: "0",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            backgroundImage: "linear-gradient(180deg, #b2b2b2, #b2b2b2 100%)",
            paddingBottom: "0",
        },
        ".bottom-bar__line-height": {
            lineHeight: "44px",
            paddingBottom: "0",
            paddingTop: "0",
        },
        ".bottom-bar--aligned": {
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            webkitFlexWrap: "nowrap",
            flexWrap: "nowrap",
            lineHeight: "44px",
        },
        ".bottom-bar--transparent": {
            backgroundColor: "transparent",
            backgroundImage: "none",
            border: "none",
        },
        ".toolbar--material": {
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            webkitFlexWrap: "nowrap",
            flexWrap: "nowrap",
            webkitBoxPack: "justify",
            webkitJustifyContent: "space-between",
            justifyContent: "space-between",
            height: "56px",
            borderBottom: "0",
            boxShadow: "0 1px 5px rgba(0, 0, 0, 0.3)",
            padding: "0",
            backgroundColor: "#4a148c",
            backgroundSize: "0",
        },
        ".toolbar--noshadow": {
            boxShadow: "none",
            backgroundImage: "none",
            borderBottom: "none",
        },
        ".toolbar--material__left, .toolbar--material__right": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            fontSize: "20px",
            fallbacks: [
                {
                    color: "#ffffff",
                },
                {
                    fontWeight: "400",
                },
            ],
            color: "rgba(255, 255, 255, 1)",
            height: "56px",
            minWidth: "72px",
            width: "auto",
            lineHeight: "56px",
        },
        ".toolbar--material__center": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            fontSize: "20px",
            fallbacks: [
                {
                    color: "#ffffff",
                },
                {
                    fontWeight: "400",
                },
            ],
            color: "rgba(255, 255, 255, 1)",
            height: "56px",
            width: "auto",
            webkitBoxFlex: "1",
            webkitFlexGrow: "1",
            flexGrow: "1",
            overflow: "hidden",
            textOverflow: "ellipsis",
            textAlign: "left",
            lineHeight: "56px",
        },
        ".toolbar--material__center:first-child": {
            marginLeft: "16px",
        },
        ".toolbar--material__center:last-child": {
            marginRight: "16px",
        },
        ".toolbar--material__left:empty, .toolbar--material__right:empty": {
            minWidth: "16px",
        },
        ".toolbar--transparent": {
            backgroundColor: "transparent",
            boxShadow: "none",
            backgroundImage: "none",
            borderBottom: "none",
        },
        ".button": {
            position: "relative",
            display: "inline-block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "4px 10px",
            margin: "0",
            font: "inherit",
            color: "white",
            background: "transparent",
            border: "0 solid currentColor",
            lineHeight: "32px",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            height: "auto",
            textDecoration: "none",
            fallbacks: [
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
                {
                    padding: "0",
                },
            ],
            fontSize: "17px",
            letterSpacing: "0",
            verticalAlign: "middle",
            backgroundColor: "#4a148c",
            borderRadius: "3px",
            transition: "none",
        },
        ".button::-moz-focus-inner": {
            outline: "0",
        },
        ".button:hover": {
            transition: "none",
        },
        ".button:active": {
            backgroundColor: "#4a148c",
            transition: "none",
            opacity: "0.2",
        },
        ".button:focus": {
            outline: "0",
        },
        ".button:disabled, .button[disabled]": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".button--outline": {
            backgroundColor: "transparent",
            border: "1px solid #4a148c",
            color: "#4a148c",
        },
        ".button--outline:active": {
            backgroundColor: "color-mod(#4a148c tint(70%))",
            border: "1px solid #4a148c",
            color: "#4a148c",
            opacity: "1",
        },
        ".button--outline:hover": {
            border: "1px solid #4a148c",
            transition: "0",
        },
        ".button--light": {
            backgroundColor: "transparent",
            color: "color-mod(black a(40%))",
            border: "1px solid color-mod(black a(20%))",
        },
        ".button--light:active": {
            backgroundColor: "color-mod(black a(5%))",
            color: "color-mod(black a(40%))",
            border: "1px solid color-mod(black a(20%))",
            opacity: "1",
        },
        ".button--quiet": {
            position: "relative",
            display: "inline-block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "4px 10px",
            margin: "0",
            font: "inherit",
            color: "#4a148c",
            background: "transparent",
            border: "none",
            lineHeight: "32px",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            height: "auto",
            textDecoration: "none",
            fallbacks: [
                {
                    border: "1px solid transparent",
                },
                {
                    color: "white",
                },
                {
                    background: "transparent",
                },
                {
                    border: "0 solid currentColor",
                },
                {
                    background: "transparent",
                },
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
                {
                    padding: "0",
                },
            ],
            fontSize: "17px",
            letterSpacing: "0",
            verticalAlign: "middle",
            backgroundColor: "#4a148c",
            borderRadius: "3px",
            transition: "none",
            boxShadow: "none",
        },
        ".button--quiet:disabled, .button--quiet[disabled]": {
            opacity: "0.3",
            pointerEvents: "none",
            border: "none",
        },
        ".button--quiet:hover": {
            transition: "none",
        },
        ".button--quiet:focus": {
            outline: "0",
        },
        ".button--quiet:active": {
            backgroundColor: "transparent",
            border: "none",
            transition: "none",
            opacity: "0.2",
            color: "#4a148c",
        },
        ".button--cta": {
            position: "relative",
            display: "inline-block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "4px 10px",
            margin: "0",
            font: "inherit",
            color: "white",
            background: "transparent",
            border: "none",
            lineHeight: "32px",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            height: "auto",
            textDecoration: "none",
            fallbacks: [
                {
                    color: "white",
                },
                {
                    backgroundColor: "#4a148c",
                },
                {
                    border: "0 solid currentColor",
                },
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
                {
                    padding: "0",
                },
            ],
            fontSize: "17px",
            letterSpacing: "0",
            verticalAlign: "middle",
            backgroundColor: "#7c43bd",
            borderRadius: "3px",
            transition: "none",
        },
        ".button--cta:hover": {
            transition: "none",
        },
        ".button--cta:focus": {
            outline: "0",
        },
        ".button--cta:active": {
            color: "white",
            backgroundColor: "#7c43bd",
            transition: "none",
            opacity: "0.2",
        },
        ".button--cta:disabled, .button--cta[disabled]": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".button--large": {
            fontSize: "17px",
            fontWeight: "500",
            lineHeight: "36px",
            padding: "4px 12px",
            display: "block",
            width: "100%",
            textAlign: "center",
        },
        ".button--large:active": {
            backgroundColor: "#4a148c",
            transition: "none",
            opacity: "0.2",
            fallbacks: [
                {
                    transition: "none",
                },
            ],
        },
        ".button--large:disabled, .button--large[disabled]": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".button--large:hover": {
            transition: "none",
        },
        ".button--large:focus": {
            outline: "0",
        },
        ".button--large--quiet": {
            position: "relative",
            display: "block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "4px 12px",
            margin: "0",
            font: "inherit",
            color: "#4a148c",
            background: "transparent",
            border: "1px solid transparent",
            lineHeight: "36px",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "500",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            height: "auto",
            textDecoration: "none",
            fallbacks: [
                {
                    color: "white",
                },
                {
                    border: "0 solid currentColor",
                },
                {
                    background: "transparent",
                },
                {
                    display: "inline-block",
                },
                {
                    padding: "4px 10px",
                },
                {
                    lineHeight: "32px",
                },
                {
                    fontWeight: "400",
                },
                {
                    fontSize: "17px",
                },
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
                {
                    padding: "0",
                },
            ],
            fontSize: "17px",
            letterSpacing: "0",
            verticalAlign: "middle",
            backgroundColor: "#4a148c",
            borderRadius: "3px",
            transition: "none",
            width: "100%",
            boxShadow: "none",
            textAlign: "center",
        },
        ".button--large--quiet:active": {
            transition: "none",
            opacity: "0.2",
            color: "#4a148c",
            background: "transparent",
            border: "1px solid transparent",
            boxShadow: "none",
        },
        ".button--large--quiet:disabled, .button--large--quiet[disabled]": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".button--large--quiet:hover": {
            transition: "none",
        },
        ".button--large--quiet:focus": {
            outline: "0",
        },
        ".button--large--cta": {
            position: "relative",
            display: "block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "4px 12px",
            margin: "0",
            font: "inherit",
            color: "white",
            background: "transparent",
            border: "none",
            lineHeight: "36px",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "500",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            height: "auto",
            textDecoration: "none",
            fallbacks: [
                {
                    display: "inline-block",
                },
                {
                    padding: "4px 10px",
                },
                {
                    lineHeight: "32px",
                },
                {
                    fontWeight: "400",
                },
                {
                    fontSize: "17px",
                },
                {
                    color: "white",
                },
                {
                    backgroundColor: "#4a148c",
                },
                {
                    border: "0 solid currentColor",
                },
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
                {
                    padding: "0",
                },
            ],
            fontSize: "17px",
            letterSpacing: "0",
            verticalAlign: "middle",
            backgroundColor: "#7c43bd",
            borderRadius: "3px",
            transition: "none",
            width: "100%",
            textAlign: "center",
        },
        ".button--large--cta:hover": {
            transition: "none",
        },
        ".button--large--cta:focus": {
            outline: "0",
        },
        ".button--large--cta:active": {
            color: "white",
            backgroundColor: "#7c43bd",
            transition: "none",
            opacity: "0.2",
        },
        ".button--large--cta:disabled, .button--large--cta[disabled]": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".button--material": {
            position: "relative",
            display: "inline-block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0 16px",
            margin: "0",
            font: "inherit",
            color: "#ffffff",
            background: "transparent",
            border: "0 solid currentColor",
            lineHeight: "36px",
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "500",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            height: "auto",
            textDecoration: "none",
            fallbacks: [
                {
                    transition: "background-color 0.25s linear",
                },
                {
                    transition: "none",
                },
                {
                    fontWeight: "400",
                },
                {
                    color: "white",
                },
                {
                    backgroundColor: "#4a148c",
                },
                {
                    fontSize: "17px",
                },
                {
                    padding: "4px 10px",
                },
                {
                    lineHeight: "32px",
                },
                {
                    fontWeight: "400",
                },
                {
                    webkitFontSmoothing: "antialiased",
                },
                {
                    fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                },
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
                {
                    padding: "0",
                },
            ],
            fontSize: "14px",
            letterSpacing: "0",
            verticalAlign: "middle",
            backgroundColor: "#4a148c",
            borderRadius: "8px",
            transition: "all 0.25s linear",
            boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 1px -2px rgba(0, 0, 0, 0.2)",
            minHeight: "36px",
            textAlign: "center",
            webkitTransform: "translate3d(0, 0, 0)",
            transform: "translate3d(0, 0, 0)",
            textTransform: "uppercase",
            opacity: "1",
        },
        ".button--material:hover": {
            transition: "all 0.25s linear",
        },
        ".button--material:active": {
            boxShadow: "0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 5px -1px rgba(0, 0, 0, 0.4)",
            backgroundColor: "#4a148c",
            opacity: "0.9",
            transition: "all 0.25s linear",
        },
        ".button--material:focus": {
            outline: "0",
        },
        ".button--material:disabled, .button--material[disabled]": {
            transition: "none",
            boxShadow: "none",
            backgroundColor: "#330f5e",
            color: "color-mod(black a(26%))",
            opacity: "1",
        },
        ".button--material--flat": {
            position: "relative",
            display: "inline-block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0 16px",
            margin: "0",
            font: "inherit",
            color: "#4a148c",
            background: "transparent",
            border: "0 solid currentColor",
            lineHeight: "36px",
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "500",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            height: "auto",
            textDecoration: "none",
            fallbacks: [
                {
                    transition: "background-color 0.25s linear",
                },
                {
                    color: "#ffffff",
                },
                {
                    backgroundColor: "#4a148c",
                },
                {
                    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 1px -2px rgba(0, 0, 0, 0.2)",
                },
                {
                    transition: "none",
                },
                {
                    fontWeight: "400",
                },
                {
                    color: "white",
                },
                {
                    backgroundColor: "#4a148c",
                },
                {
                    fontSize: "17px",
                },
                {
                    padding: "4px 10px",
                },
                {
                    lineHeight: "32px",
                },
                {
                    fontWeight: "400",
                },
                {
                    webkitFontSmoothing: "antialiased",
                },
                {
                    fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                },
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
                {
                    padding: "0",
                },
            ],
            fontSize: "14px",
            letterSpacing: "0",
            verticalAlign: "middle",
            backgroundColor: "transparent",
            borderRadius: "3px",
            transition: "all 0.25s linear",
            boxShadow: "none",
            minHeight: "36px",
            textAlign: "center",
            webkitTransform: "translate3d(0, 0, 0)",
            transform: "translate3d(0, 0, 0)",
            textTransform: "uppercase",
        },
        ".button--material--flat:hover": {
            transition: "all 0.25s linear",
        },
        ".button--material--flat:focus": {
            boxShadow: "none",
            backgroundColor: "transparent",
            color: "#4a148c",
            outline: "0",
            opacity: "1",
            border: "none",
        },
        ".button--material--flat:active": {
            boxShadow: "none",
            outline: "0",
            opacity: "1",
            border: "none",
            backgroundColor: "color-mod(#999 a(20%))",
            color: "#4a148c",
            transition: "all 0.25s linear",
        },
        ".button--material--flat:disabled, .button--material--flat[disabled]": {
            transition: "none",
            opacity: "1",
            boxShadow: "none",
            backgroundColor: "transparent",
            color: "color-mod(black a(26%))",
        },
        ".button-bar": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            display: "inline-flex",
            fallbacks: [
                {
                    display: "-webkit-inline-flex",
                },
                {
                    display: "-webkit-inline-box",
                },
            ],
            webkitBoxAlign: "stretch",
            webkitAlignItems: "stretch",
            alignItems: "stretch",
            webkitAlignContent: "stretch",
            alignContent: "stretch",
            webkitFlexWrap: "nowrap",
            flexWrap: "nowrap",
            margin: "0",
            padding: "0",
            border: "none",
        },
        ".button-bar__item": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            borderRadius: "0",
            width: "100%",
            padding: "0",
            margin: "0",
            position: "relative",
            overflow: "hidden",
            boxSizing: "border-box",
        },
        ".button-bar__button": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            borderRadius: "0",
            backgroundColor: "transparent",
            color: "#4a148c",
            border: "1px solid #4a148c",
            borderTopWidth: "1px",
            borderBottomWidth: "1px",
            borderRightWidth: "1px",
            borderLeftWidth: "0",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            padding: "0",
            fontSize: "13px",
            height: "27px",
            lineHeight: "27px",
            width: "100%",
            transition: "background-color 0.2s linear, color 0.2s linear",
            boxSizing: "border-box",
        },
        ".button-bar__button:disabled": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".button-bar__button:hover": {
            transition: "none",
        },
        ".button-bar__button:focus": {
            outline: "0",
        },
        ":checked + .button-bar__button": {
            backgroundColor: "#4a148c",
            color: "#fff",
            transition: "none",
        },
        ".button-bar__button:active, :active + .button-bar__button": {
            backgroundColor: "color-mod(#4a148c tint(70%))",
            border: "0 solid #4a148c",
            borderTop: "1px solid #4a148c",
            borderBottom: "1px solid #4a148c",
            borderRight: "1px solid #4a148c",
            fontSize: "13px",
            width: "100%",
            transition: "none",
        },
        ".button-bar__item:first-child > .button-bar__button": {
            borderLeftWidth: "1px",
            borderRadius: "4px 0 0 4px",
        },
        ".button-bar__item:last-child > .button-bar__button": {
            borderRightWidth: "1px",
            borderRadius: "0 4px 4px 0",
        },
        ".segment": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            display: "inline-flex",
            fallbacks: [
                {
                    display: "-webkit-inline-flex",
                },
                {
                    display: "-webkit-inline-box",
                },
            ],
            webkitBoxAlign: "stretch",
            webkitAlignItems: "stretch",
            alignItems: "stretch",
            webkitAlignContent: "stretch",
            alignContent: "stretch",
            webkitFlexWrap: "nowrap",
            flexWrap: "nowrap",
            margin: "0",
            padding: "0",
            border: "none",
        },
        ".segment__item": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            borderRadius: "0",
            width: "100%",
            padding: "0",
            margin: "0",
            position: "relative",
            overflow: "hidden",
            boxSizing: "border-box",
            display: "block",
            backgroundColor: "transparent",
            border: "none",
        },
        ".segment__input": {
            position: "absolute",
            right: "0",
            top: "0",
            left: "0",
            bottom: "0",
            padding: "0",
            border: "0",
            backgroundColor: "transparent",
            zIndex: "1",
            verticalAlign: "top",
            outline: "none",
            width: "100%",
            height: "100%",
            margin: "0",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
        },
        ".segment__button": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            borderRadius: "0",
            backgroundColor: "transparent",
            color: "#4a148c",
            border: "1px solid #4a148c",
            borderTopWidth: "1px",
            borderBottomWidth: "1px",
            borderRightWidth: "1px",
            borderLeftWidth: "0",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            padding: "0",
            fontSize: "13px",
            height: "29px",
            lineHeight: "29px",
            width: "100%",
            transition: "background-color 0.2s linear, color 0.2s linear",
            boxSizing: "border-box",
            textAlign: "center",
        },
        ".segment__item:disabled": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".segment__button:hover": {
            transition: "none",
        },
        ".segment__button:focus": {
            outline: "0",
        },
        ":active + .segment__button": {
            backgroundColor: "color-mod(#4a148c tint(70%))",
            border: "0 solid #4a148c",
            borderTop: "1px solid #4a148c",
            borderBottom: "1px solid #4a148c",
            borderRight: "1px solid #4a148c",
            fontSize: "13px",
            width: "100%",
            transition: "none",
        },
        ":checked + .segment__button": {
            backgroundColor: "#4a148c",
            color: "#fff",
            transition: "none",
        },
        ".segment__item:first-child > .segment__button": {
            borderLeftWidth: "1px",
            borderRadius: "4px 0 0 4px",
        },
        ".segment__item:last-child > .segment__button": {
            borderRightWidth: "1px",
            borderRadius: "0 4px 4px 0",
        },
        ".segment--material": {
            borderRadius: "2px",
            overflow: "hidden",
            boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)",
        },
        ".segment--material__button": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            fontSize: "14px",
            height: "32px",
            lineHeight: "32px",
            borderWidth: "0",
            color: "color-mod(black a(38%))",
            borderRadius: "0",
            backgroundColor: "#fafafa",
        },
        ":active + .segment--material__button": {
            backgroundColor: "#fafafa",
            borderRadius: "0",
            borderWidth: "0",
            fontSize: "14px",
            transition: "none",
            color: "color-mod(black a(38%))",
        },
        ":checked + .segment--material__button": {
            backgroundColor: "#c8c8c8",
            color: "#353535",
            borderRadius: "0",
            borderWidth: "0",
        },
        ".segment--material__item:first-child > .segment--material__button, .segment--material__item:last-child > .segment--material__button": {
            borderRadius: "0",
            borderWidth: "0",
        },
        ".tabbar": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            whiteSpace: "nowrap",
            margin: "0",
            padding: "0",
            height: "49px",
            backgroundColor: "#fafafa",
            borderTop: "none",
            width: "100%",
        },
        ".tabbar__item": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            position: "relative",
            webkitBoxFlex: "1",
            webkitFlexGrow: "1",
            flexGrow: "1",
            webkitFlexBasis: "0",
            flexBasis: "0",
            width: "auto",
            borderRadius: "0",
        },
        ".tabbar__item > input": {
            position: "absolute",
            right: "0",
            top: "0",
            left: "0",
            bottom: "0",
            padding: "0",
            border: "0",
            backgroundColor: "transparent",
            zIndex: "1",
            verticalAlign: "top",
            outline: "none",
            width: "100%",
            height: "100%",
            margin: "0",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
        },
        ".tabbar__button": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#999",
            background: "transparent",
            border: "none",
            lineHeight: "49px",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            position: "relative",
            display: "inline-block",
            textDecoration: "none",
            fallbacks: [
                {
                    lineHeight: "normal",
                },
                {
                    fontWeight: "400",
                },
                {
                    color: "inherit",
                },
                {
                    padding: "0",
                },
            ],
            height: "49px",
            letterSpacing: "0",
            verticalAlign: "top",
            backgroundColor: "transparent",
            borderTop: "none",
            width: "100%",
        },
        ".tabbar__icon": {
            fontSize: "24px",
            padding: "0",
            margin: "0",
            lineHeight: "26px",
            display: "block !important",
            height: "28px",
        },
        ".tabbar__label": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            display: "inline-block",
        },
        ".tabbar__badge.notification": {
            verticalAlign: "text-bottom",
            top: "-1px",
            marginLeft: "5px",
            zIndex: "10",
            fontSize: "12px",
            height: "16px",
            minWidth: "16px",
            lineHeight: "16px",
            borderRadius: "8px",
        },
        ".tabbar__icon ~ .tabbar__badge.notification": {
            position: "absolute",
            top: "5px",
            marginLeft: "0",
        },
        ".tabbar__icon + .tabbar__label": {
            display: "block",
            fontSize: "10px",
            lineHeight: "1",
            margin: "0",
            fontWeight: "400",
        },
        ".tabbar__label:first-child": {
            fontSize: "16px",
            lineHeight: "49px",
            margin: "0",
            padding: "0",
        },
        ":checked + .tabbar__button": {
            color: "#4a148c",
            backgroundColor: "transparent",
            boxShadow: "none",
            borderTop: "none",
        },
        ".tabbar__button:disabled": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".tabbar__button:focus": {
            zIndex: "1",
            borderTop: "none",
            boxShadow: "none",
            outline: "0",
        },
        ".tabbar__content": {
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "49px",
            zIndex: "0",
        },
        ".tabbar--autogrow .tabbar__item": {
            webkitFlexBasis: "auto",
            flexBasis: "auto",
        },
        ".tabbar--top": {
            position: "relative",
            top: "0",
            left: "0",
            right: "0",
            bottom: "auto",
            borderTop: "none",
            borderBottom: "1px solid #ccc",
            paddingTop: "0",
        },
        ".tabbar--top__content": {
            top: "49px",
            left: "0",
            right: "0",
            bottom: "0",
            zIndex: "0",
        },
        ".tabbar--top-border__button": {
            backgroundColor: "transparent",
            borderBottom: "4px solid transparent",
        },
        ":checked + .tabbar--top-border__button": {
            backgroundColor: "transparent",
            borderBottom: "4px solid #4a148c",
        },
        ".tabbar__border": {
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "0",
            height: "4px",
            backgroundColor: "#4a148c",
        },
        ".tabbar--material": {
            background: "none",
            backgroundColor: "#4a148c",
            borderBottomWidth: "0",
            boxShadow: "0 4px 2px -2px rgba(0, 0, 0, 0.14), 0 3px 5px -2px rgba(0, 0, 0, 0.12),\r\n    0 5px 1px -4px rgba(0, 0, 0, 0.2)",
        },
        ".tabbar--material__button": {
            backgroundColor: "transparent",
            color: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    fontWeight: "500",
                },
                {
                    color: "#ffffff",
                },
            ],
            textTransform: "uppercase",
            fontSize: "14px",
            fontWeight: "400",
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
        },
        ".tabbar--material__button:after": {
            content: '""',
            display: "block",
            width: "0",
            height: "2px",
            bottom: "0",
            position: "absolute",
            marginTop: "-2px",
            backgroundColor: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    backgroundColor: "#ffffff",
                },
            ],
        },
        ":checked + .tabbar--material__button:after": {
            width: "100%",
            transition: "width 0.2s ease-in-out",
        },
        ":checked + .tabbar--material__button": {
            backgroundColor: "transparent",
            color: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    color: "#ffffff",
                },
            ],
        },
        ".tabbar--material__item:not([ripple]):active": {
            backgroundColor: "rgba(49, 49, 58, 0.1)",
            fallbacks: [
                {
                    backgroundColor: "#31313a",
                },
            ],
        },
        ".tabbar--material__border": {
            height: "2px",
            backgroundColor: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    backgroundColor: "#ffffff",
                },
            ],
        },
        ".tabbar--material__icon": {
            fontSize: "22px !important",
            lineHeight: "36px",
        },
        ".tabbar--material__label": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
        },
        ".tabbar--material__label:first-child": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            letterSpacing: "0.015em",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            fontSize: "14px",
        },
        ".tabbar--material__icon + .tabbar--material__label": {
            fontSize: "10px",
        },
        ".toolbar-button": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            padding: "4px 10px",
            letterSpacing: "0",
            color: "#4a148c",
            backgroundColor: "rgba(0, 0, 0, 0)",
            fallbacks: [
                {
                    fontWeight: "400",
                },
                {
                    backgroundColor: "#000000",
                },
            ],
            borderRadius: "2px",
            border: "1px solid transparent",
            fontSize: "17px",
            transition: "none",
        },
        ".toolbar-button:active": {
            backgroundColor: "rgba(0, 0, 0, 0)",
            fallbacks: [
                {
                    backgroundColor: "#000000",
                },
            ],
            transition: "none",
            opacity: "0.2",
        },
        ".toolbar-button:disabled, .toolbar-button[disabled]": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".toolbar-button:focus": {
            outline: "0",
            transition: "none",
        },
        ".toolbar-button:hover": {
            transition: "none",
        },
        ".toolbar-button--outline": {
            border: "1px solid #4a148c",
            margin: "auto 8px",
            paddingLeft: "6px",
            paddingRight: "6px",
        },
        ".toolbar-button--material": {
            fontSize: "22px",
            color: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    verticalAlign: "baseline",
                },
                {
                    color: "#ffffff",
                },
            ],
            display: "inline-block",
            height: "100%",
            margin: "0",
            border: "none",
            borderRadius: "0",
            verticalAlign: "initial",
            transition: "background-color 0.25s linear",
        },
        ".toolbar-button--material:first-of-type": {
            marginLeft: "4px",
        },
        ".toolbar-button--material:last-of-type": {
            marginRight: "4px",
        },
        ".toolbar-button--material:active": {
            opacity: "1",
            transition: "background-color 0.25s linear",
        },
        ".back-button": {
            height: "44px",
            lineHeight: "44px",
            paddingLeft: "8px",
            color: "#4a148c",
            backgroundColor: "rgba(0, 0, 0, 0)",
            fallbacks: [
                {
                    backgroundColor: "#000000",
                },
            ],
            display: "inline-block",
        },
        ".back-button:active": {
            opacity: "0.2",
        },
        ".back-button__label": {
            display: "inline-block",
            height: "100%",
            verticalAlign: "top",
            lineHeight: "44px",
            fontSize: "17px",
            fontWeight: "500",
        },
        ".back-button__icon": {
            marginRight: "6px",
            display: "inline-flex",
            fallbacks: [
                {
                    display: "-webkit-inline-flex",
                },
                {
                    display: "-webkit-inline-box",
                },
            ],
            fill: "#4a148c",
            webkitBoxAlign: "center",
            webkitAlignItems: "center",
            alignItems: "center",
            height: "100%",
        },
        ".back-button--material": {
            fontSize: "22px",
            color: "rgba(255, 255, 255, 1)",
            fallbacks: [
                {
                    verticalAlign: "baseline",
                },
                {
                    color: "#ffffff",
                },
            ],
            display: "inline-block",
            padding: "0 12px",
            height: "100%",
            margin: "0 0 0 4px",
            border: "none",
            borderRadius: "0",
            verticalAlign: "initial",
            lineHeight: "56px",
        },
        ".back-button--material__label": {
            display: "none",
            fontSize: "20px",
        },
        ".back-button--material__icon": {
            display: "inline-flex",
            fallbacks: [
                {
                    display: "-webkit-inline-flex",
                },
                {
                    display: "-webkit-inline-box",
                },
            ],
            fill: "rgba(255, 255, 255, 1)",
            webkitBoxAlign: "center",
            webkitAlignItems: "center",
            alignItems: "center",
            height: "100%",
        },
        ".back-button--material:active": {
            opacity: "1",
        },
        ".checkbox": {
            position: "relative",
            display: "inline-block",
            verticalAlign: "top",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            lineHeight: "22px",
        },
        ".checkbox__checkmark": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            position: "relative",
            display: "inline-block",
            verticalAlign: "top",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            fallbacks: [
                {
                    position: "relative",
                },
            ],
            height: "22px",
            width: "22px",
            pointerEvents: "none",
        },
        ".checkbox__input, .checkbox__input:checked": {
            position: "absolute",
            right: "0",
            top: "0",
            left: "0",
            bottom: "0",
            padding: "0",
            border: "0",
            backgroundColor: "transparent",
            zIndex: "1",
            verticalAlign: "top",
            outline: "none",
            width: "100%",
            height: "100%",
            margin: "0",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
        },
        ".checkbox__checkmark:before": {
            content: '""',
            position: "absolute",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            width: "22px",
            height: "22px",
            background: "transparent",
            border: "1px solid #c7c7cd",
            borderRadius: "22px",
            left: "0",
        },
        ".checkbox__checkmark:after": {
            content: '""',
            position: "absolute",
            top: "7px",
            left: "5px",
            width: "11px",
            height: "5px",
            background: "transparent",
            border: "2px solid #fff",
            borderWidth: "1px",
            borderTop: "none",
            borderRight: "none",
            borderRadius: "0",
            webkitTransform: "rotate(-45deg)",
            transform: "rotate(-45deg)",
            opacity: "0",
        },
        ":checked + .checkbox__checkmark:before": {
            background: "#4a148c",
            border: "none",
        },
        ":checked + .checkbox__checkmark:after": {
            opacity: "1",
        },
        ":disabled + .checkbox__checkmark": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ":disabled:active + .checkbox__checkmark:before": {
            background: "transparent",
        },
        ".checkbox--noborder": {
            position: "relative",
            display: "inline-block",
            verticalAlign: "top",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            lineHeight: "22px",
            fallbacks: [
                {
                    position: "relative",
                },
            ],
        },
        ".checkbox--noborder__input": {
            position: "absolute",
            right: "0",
            top: "0",
            left: "0",
            bottom: "0",
            padding: "0",
            border: "0",
            backgroundColor: "transparent",
            zIndex: "1",
            verticalAlign: "top",
            outline: "none",
            width: "100%",
            height: "100%",
            margin: "0",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
        },
        ".checkbox--noborder__checkmark": {
            position: "relative",
            display: "inline-block",
            verticalAlign: "top",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            width: "22px",
            height: "22px",
            background: "transparent",
            border: "none",
        },
        ".checkbox--noborder__checkmark:before": {
            content: '""',
            position: "absolute",
            width: "22px",
            height: "22px",
            background: "transparent",
            border: "none",
            borderRadius: "22px",
            left: "0",
        },
        ".checkbox--noborder__checkmark:after": {
            content: '""',
            position: "absolute",
            top: "7px",
            left: "4px",
            opacity: "0",
            width: "11px",
            height: "4px",
            background: "transparent",
            border: "2px solid #4a148c",
            borderTop: "none",
            borderRight: "none",
            borderRadius: "0",
            webkitTransform: "rotate(-45deg)",
            transform: "rotate(-45deg)",
        },
        ":checked + .checkbox--noborder__checkmark:before": {
            background: "transparent",
            border: "none",
        },
        ":checked + .checkbox--noborder__checkmark:after": {
            opacity: "1",
        },
        ":focus + .checkbox--noborder__checkmark:before": {
            border: "none",
        },
        ":disabled + .checkbox--noborder__checkmark": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ":disabled:active + .checkbox--noborder__checkmark:before": {
            background: "transparent",
            border: "none",
        },
        ".checkbox--material": {
            lineHeight: "18px",
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            overflow: "visible",
        },
        ".checkbox--material__checkmark": {
            width: "18px",
            height: "18px",
        },
        ".checkbox--material__checkmark:before": {
            borderRadius: "2px",
            height: "18px",
            width: "18px",
            border: "2px solid #717171",
            transition: "background-color 0.1s linear 0.2s, border-color 0.1s linear 0.2s",
            backgroundColor: "transparent",
        },
        ":checked + .checkbox--material__checkmark:before": {
            border: "2px solid #4a148c",
            backgroundColor: "#4a148c",
            transition: "background-color 0.1s linear, border-color 0.1s linear",
        },
        ".checkbox--material__checkmark:after": {
            borderColor: "#ffffff",
            transition: "transform 0.2s ease 0, -webkit-transform 0.2s ease 0",
            fallbacks: [
                {
                    transition: "transform 0.2s ease 0",
                },
                {
                    transition: "-webkit-transform 0.2s ease 0",
                },
            ],
            width: "10px",
            height: "5px",
            top: "4px",
            left: "3px",
            webkitTransform: "scale(0) rotate(-45deg)",
            transform: "scale(0) rotate(-45deg)",
            borderWidth: "2px",
        },
        ":checked + .checkbox--material__checkmark:after": {
            transition: "transform 0.2s ease 0.2s, -webkit-transform 0.2s ease 0.2s",
            fallbacks: [
                {
                    transition: "transform 0.2s ease 0.2s",
                },
                {
                    transition: "-webkit-transform 0.2s ease 0.2s",
                },
            ],
            width: "10px",
            height: "5px",
            top: "4px",
            left: "3px",
            webkitTransform: "scale(1) rotate(-45deg)",
            transform: "scale(1) rotate(-45deg)",
            borderWidth: "2px",
        },
        ".checkbox--material__input:before": {
            content: '""',
            opacity: "0",
            position: "absolute",
            top: "0",
            left: "0",
            width: "18px",
            height: "18px",
            boxShadow: "0 0 0 11px #717171",
            boxSizing: "border-box",
            borderRadius: "50%",
            backgroundColor: "#717171",
            pointerEvents: "none",
            display: "block",
            webkitTransform: "scale3d(0.2, 0.2, 0.2)",
            transform: "scale3d(0.2, 0.2, 0.2)",
            transition: "opacity 0.25s ease-out, transform 0.1s ease-out, -webkit-transform 0.1s ease-out",
            fallbacks: [
                {
                    transition: "opacity 0.25s ease-out, transform 0.1s ease-out",
                },
                {
                    transition: "opacity 0.25s ease-out, -webkit-transform 0.1s ease-out",
                },
            ],
        },
        ".checkbox--material__input:checked:before": {
            boxShadow: "0 0 0 11px #4a148c",
            backgroundColor: "#4a148c",
        },
        ".checkbox--material__input:active:before": {
            opacity: "0.15",
            webkitTransform: "scale3d(1, 1, 1)",
            transform: "scale3d(1, 1, 1)",
        },
        ":disabled + .checkbox--material__checkmark": {
            opacity: "1",
        },
        ":disabled + .checkbox--material__checkmark:before": {
            borderColor: "#afafaf",
        },
        ":disabled:checked + .checkbox--material__checkmark:before": {
            backgroundColor: "#afafaf",
        },
        ":disabled:checked + .checkbox--material__checkmark:after": {
            borderColor: "#ffffff",
        },
        ".radio-button__input": {
            position: "absolute",
            right: "0",
            top: "0",
            left: "0",
            bottom: "0",
            padding: "0",
            border: "0",
            backgroundColor: "transparent",
            zIndex: "1",
            verticalAlign: "top",
            outline: "none",
            width: "100%",
            height: "100%",
            margin: "0",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
        },
        ".radio-button__input:active, .radio-button__input:focus": {
            outline: "0",
            webkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        },
        ".radio-button": {
            position: "relative",
            display: "inline-block",
            verticalAlign: "top",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fallbacks: [
                {
                    position: "relative",
                },
            ],
            lineHeight: "24px",
            textAlign: "left",
        },
        ".radio-button__checkmark:before": {
            content: '""',
            position: "absolute",
            borderRadius: "22px",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            width: "22px",
            height: "22px",
            background: "transparent",
            border: "none",
            fallbacks: [
                {
                    borderRadius: "100%",
                },
            ],
            left: "0",
        },
        ".radio-button__checkmark": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            position: "relative",
            display: "inline-block",
            verticalAlign: "top",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            fallbacks: [
                {
                    position: "relative",
                },
                {
                    position: "relative",
                },
            ],
            width: "24px",
            height: "24px",
            background: "transparent",
            pointerEvents: "none",
        },
        ".radio-button__checkmark:after": {
            content: '""',
            position: "absolute",
            top: "7px",
            left: "4px",
            opacity: "0",
            width: "11px",
            height: "4px",
            background: "transparent",
            border: "2px solid #4a148c",
            borderTop: "none",
            borderRight: "none",
            borderRadius: "0",
            webkitTransform: "rotate(-45deg)",
            transform: "rotate(-45deg)",
        },
        ":checked + .radio-button__checkmark": {
            background: "rgba(0, 0, 0, 0)",
            fallbacks: [
                {
                    background: "#000000",
                },
            ],
        },
        ":checked + .radio-button__checkmark:after": {
            opacity: "1",
        },
        ":checked + .radio-button__checkmark:before": {
            background: "transparent",
            border: "none",
        },
        ":disabled + .radio-button__checkmark": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".radio-button--material": {
            lineHeight: "22px",
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
        },
        ".radio-button--material__input:before": {
            content: '""',
            position: "absolute",
            top: "0",
            left: "0",
            opacity: "0",
            width: "20px",
            height: "20px",
            boxShadow: "0 0 0 14px #717171",
            border: "none",
            boxSizing: "border-box",
            borderRadius: "50%",
            backgroundColor: "#717171",
            pointerEvents: "none",
            display: "block",
            webkitTransform: "scale3d(0.2, 0.2, 0.2)",
            transform: "scale3d(0.2, 0.2, 0.2)",
            transition: "opacity 0.25s ease-out, transform 0.1s ease-out, -webkit-transform 0.1s ease-out",
            fallbacks: [
                {
                    transition: "opacity 0.25s ease-out, transform 0.1s ease-out",
                },
                {
                    transition: "opacity 0.25s ease-out, -webkit-transform 0.1s ease-out",
                },
            ],
        },
        ".radio-button--material__input:checked:before": {
            boxShadow: "0 0 0 14px #4a148c",
            backgroundColor: "#4a148c",
        },
        ".radio-button--material__input:active:before": {
            opacity: "0.15",
            webkitTransform: "scale3d(1, 1, 1)",
            transform: "scale3d(1, 1, 1)",
        },
        ".radio-button--material__checkmark": {
            width: "20px",
            height: "20px",
            overflow: "visible",
        },
        ".radio-button--material__checkmark:before": {
            background: "transparent",
            border: "2px solid #717171",
            boxSizing: "border-box",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            transition: "border 0.2s ease",
        },
        ".radio-button--material__checkmark:after": {
            transition: "background 0.2s ease, transform 0.2s ease, -webkit-transform 0.2s ease",
            fallbacks: [
                {
                    transition: "background 0.2s ease, transform 0.2s ease",
                },
                {
                    transition: "background 0.2s ease, -webkit-transform 0.2s ease",
                },
            ],
            top: "5px",
            left: "5px",
            width: "10px",
            height: "10px",
            border: "none",
            borderRadius: "50%",
            webkitTransform: "scale(0)",
            transform: "scale(0)",
        },
        ":checked + .radio-button--material__checkmark:before": {
            background: "transparent",
            border: "2px solid #4a148c",
        },
        ".radio-button--material__input + .radio-button__checkmark:after": {
            background: "#717171",
            opacity: "1",
            webkitTransform: "scale(0)",
            transform: "scale(0)",
        },
        ":checked + .radio-button--material__checkmark:after": {
            opacity: "1",
            background: "#4a148c",
            webkitTransform: "scale(1)",
            transform: "scale(1)",
        },
        ":disabled + .radio-button--material__checkmark": {
            opacity: "1",
        },
        ":disabled + .radio-button--material__checkmark:after": {
            backgroundColor: "#afafaf",
            borderColor: "#afafaf",
        },
        ":disabled + .radio-button--material__checkmark:before": {
            borderColor: "#afafaf",
        },
        ".list": {
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "transparent",
            border: "none",
            lineHeight: "normal",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            listStyleType: "none",
            textAlign: "left",
            display: "block",
            webkitOverflowScrolling: "touch",
            overflow: "hidden",
            backgroundImage: "linear-gradient(#ccc, #ccc), linear-gradient(#ccc, #ccc)",
            backgroundSize: "100% 1px, 100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom, top",
            fallbacks: [
                {
                    border: "none",
                },
            ],
            backgroundColor: "#fff",
        },
        ".list-item": {
            position: "relative",
            width: "100%",
            listStyle: "none",
            boxSizing: "border-box",
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            webkitBoxOrient: "horizontal",
            webkitBoxDirection: "normal",
            webkitFlexDirection: "row",
            flexDirection: "row",
            webkitBoxPack: "start",
            webkitJustifyContent: "flex-start",
            justifyContent: "flex-start",
            webkitBoxAlign: "center",
            webkitAlignItems: "center",
            alignItems: "center",
            padding: "0 0 0 14px",
            margin: "0 0 -1px 0",
            color: "#1f1f21",
            transition: "background-color 0.2s linear",
        },
        ".list-item__top": {
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            webkitBoxOrient: "horizontal",
            webkitBoxDirection: "normal",
            webkitFlexDirection: "row",
            flexDirection: "row",
            webkitBoxPack: "start",
            webkitJustifyContent: "flex-start",
            justifyContent: "flex-start",
            webkitBoxAlign: "center",
            webkitAlignItems: "center",
            alignItems: "center",
            webkitBoxOrdinalGroup: "1",
            webkitOrder: "0",
            order: "0",
            width: "100%",
        },
        ".list-item--expandable": {
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            webkitBoxOrient: "vertical",
            webkitBoxDirection: "normal",
            webkitFlexDirection: "column",
            flexDirection: "column",
            borderBottom: "none",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #ccc, #ccc 100%)",
            backgroundPositionX: "14px",
        },
        ".list-item__expandable-content": {
            display: "none",
            width: "100%",
            padding: "12px 14px 12px 0",
            boxSizing: "border-box",
            webkitBoxOrdinalGroup: "2",
            webkitOrder: "1",
            order: "1",
            overflow: "hidden",
        },
        ".list-item.expanded > .list-item__expandable-content": {
            display: "block",
            height: "auto",
        },
        ".list-item__left": {
            boxSizing: "border-box",
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            padding: "12px 14px 12px 0",
            webkitBoxOrdinalGroup: "1",
            webkitOrder: "0",
            order: "0",
            webkitBoxAlign: "center",
            webkitAlignItems: "center",
            alignItems: "center",
            webkitAlignSelf: "stretch",
            alignSelf: "stretch",
            lineHeight: "1.2em",
            minHeight: "44px",
        },
        ".list-item__left:empty": {
            width: "0",
            minWidth: "0",
            padding: "0",
            margin: "0",
        },
        ".list-item__center": {
            boxSizing: "border-box",
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            webkitBoxFlex: "1",
            webkitFlexGrow: "1",
            flexGrow: "1",
            webkitFlexWrap: "wrap",
            flexWrap: "wrap",
            webkitBoxOrient: "horizontal",
            webkitBoxDirection: "normal",
            webkitFlexDirection: "row",
            flexDirection: "row",
            webkitBoxOrdinalGroup: "2",
            webkitOrder: "1",
            order: "1",
            marginRight: "auto",
            webkitBoxAlign: "center",
            webkitAlignItems: "center",
            alignItems: "center",
            webkitAlignSelf: "stretch",
            alignSelf: "stretch",
            marginLeft: "0",
            borderBottom: "none",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #ccc, #ccc 100%)",
            padding: "12px 6px 12px 0",
            lineHeight: "1.2em",
            minHeight: "44px",
        },
        ".list-item__right": {
            boxSizing: "border-box",
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            marginLeft: "auto",
            padding: "12px 12px 12px 0",
            webkitBoxOrdinalGroup: "3",
            webkitOrder: "2",
            order: "2",
            webkitBoxAlign: "center",
            webkitAlignItems: "center",
            alignItems: "center",
            webkitAlignSelf: "stretch",
            alignSelf: "stretch",
            borderBottom: "none",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #ccc, #ccc 100%)",
            lineHeight: "1.2em",
            minHeight: "44px",
        },
        ".list-header": {
            margin: "0",
            listStyle: "none",
            textAlign: "left",
            display: "block",
            boxSizing: "border-box",
            padding: "0 0 0 15px",
            fontSize: "12px",
            fontWeight: "500",
            color: "#1f1f21",
            minHeight: "24px",
            lineHeight: "25px",
            textTransform: "uppercase",
            position: "relative",
            backgroundColor: "#eee",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            backgroundImage: "linear-gradient(0deg, #ccc, #ccc 100%)",
        },
        ".list--noborder": {
            borderTop: "none",
            borderBottom: "none",
            backgroundImage: "none",
        },
        ".list-item--tappable:active": {
            transition: "none",
            backgroundColor: "#d9d9d9",
        },
        ".list--inset": {
            margin: "0 8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundImage: "none",
        },
        ".list-item__label": {
            fontSize: "14px",
            padding: "0 4px",
            opacity: "0.6",
        },
        ".list-item__title": {
            webkitFlexBasis: "100%",
            flexBasis: "100%",
            webkitAlignSelf: "flex-end",
            alignSelf: "flex-end",
            webkitBoxOrdinalGroup: "1",
            webkitOrder: "0",
            order: "0",
        },
        ".list-item__subtitle": {
            opacity: "0.75",
            fontSize: "14px",
            webkitBoxOrdinalGroup: "2",
            webkitOrder: "1",
            order: "1",
            webkitFlexBasis: "100%",
            flexBasis: "100%",
            webkitAlignSelf: "flex-start",
            alignSelf: "flex-start",
        },
        ".list-item__thumbnail": {
            width: "40px",
            height: "40px",
            borderRadius: "6px",
            display: "block",
            margin: "0",
        },
        ".list-item__icon": {
            fontSize: "22px",
            padding: "0 6px",
        },
        ".list--material": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            backgroundImage: "none",
            backgroundColor: "#fff",
        },
        ".list-item--material": {
            border: "0",
            padding: "0 0 0 16px",
            lineHeight: "normal",
        },
        ".list-item--material__subtitle": {
            marginTop: "4px",
        },
        ".list-item--material:first-child": {
            boxShadow: "none",
        },
        ".list-item--material__left": {
            padding: "14px 0",
            minWidth: "56px",
            lineHeight: "1",
            minHeight: "48px",
        },
        ".list-item--material__left:empty, .list-item--material__center": {
            padding: "14px 6px 14px 0",
            borderColor: "#eee",
            borderBottom: "none",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #eee, #eee 100%)",
            minHeight: "48px",
        },
        ".list-item--material__right": {
            padding: "14px 16px 14px 0",
            lineHeight: "1",
            borderColor: "#eee",
            borderBottom: "none",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #eee, #eee 100%)",
            minHeight: "48px",
        },
        ".list-item--material.list-item--expandable": {
            borderBottom: "none",
            fallbacks: [
                {
                    borderBottom: "1px solid #eee",
                },
            ],
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #eee, #eee 100%)",
            backgroundPositionX: "16px",
        },
        ".list-item--material.list-item--longdivider, .list-item--material.list-item--expandable.list-item--longdivider": {
            borderBottom: "none",
            fallbacks: [
                {
                    borderBottom: "1px solid #eee",
                },
            ],
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #eee, #eee 100%)",
        },
        ".list-header--material": {
            background: "#fff",
            border: "none",
            fontSize: "14px",
            textTransform: "none",
            margin: "-1px 0 0 0",
            color: "#757575",
            fontWeight: "500",
            padding: "8px 16px",
        },
        ".list-header--material:not(:first-of-type)": {
            borderTop: "none",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            backgroundImage: "linear-gradient(180deg, #eee, #eee 100%)",
            paddingTop: "16px",
        },
        ".list-item--material__thumbnail": {
            width: "40px",
            height: "40px",
            borderRadius: "100%",
        },
        ".list-item--material__icon": {
            fontSize: "20px",
            padding: "0 4px",
        },
        ".list-item--chevron:before, .list-item__expand-chevron": {
            borderRight: "2px solid #c7c7cc",
            borderBottom: "2px solid #c7c7cc",
            width: "7px",
            height: "7px",
            backgroundColor: "transparent",
            zIndex: "5",
        },
        ".list-item--chevron:before": {
            position: "absolute",
            content: '""',
            right: "16px",
            top: "50%",
            webkitTransform: "translateY(-50%) rotate(-45deg)",
            transform: "translateY(-50%) rotate(-45deg)",
        },
        ".list-item__expand-chevron": {
            webkitTransform: "rotate(45deg)",
            transform: "rotate(45deg)",
            margin: "1px",
        },
        ".list-item--expandable.expanded .list-item__expand-chevron": {
            webkitTransform: "rotate(225deg)",
            transform: "rotate(225deg)",
        },
        ".list-item--chevron__right": {
            paddingRight: "30px",
        },
        ".list-item--nodivider__center, .list-item--nodivider__right, .list-item--nodivider.list-item--expandable, .list-item--expandable .list-item__center, .list-item--expandable .list-item__right": {
            border: "none",
            backgroundImage: "none",
        },
        ".list-item--longdivider": {
            borderBottom: "none",
            fallbacks: [
                {
                    borderBottom: "1px solid #ccc",
                },
            ],
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, #ccc, #ccc 100%)",
        },
        ".list-item--longdivider:last-of-type": {
            border: "none",
            backgroundImage: "none",
        },
        ".list-item--longdivider__center": {
            border: "none",
            backgroundImage: "none",
        },
        ".list-item--longdivider__right": {
            border: "none",
            backgroundImage: "none",
        },
        ".list-title": {
            padding: "0 0 0 16px",
            margin: "0",
            font: "inherit",
            color: "#6d6d72",
            background: "transparent",
            border: "none",
            lineHeight: "24px",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "500",
            display: "block",
            fallbacks: [
                {
                    lineHeight: "normal",
                },
                {
                    fontWeight: "400",
                },
                {
                    margin: "0",
                },
                {
                    padding: "0",
                },
                {
                    color: "inherit",
                },
            ],
            textAlign: "left",
            boxSizing: "border-box",
            fontSize: "13px",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
        },
        ".list-title--material": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            color: "#757575",
            fontSize: "14px",
            margin: "0",
            padding: "12px 0 12px 16px",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            lineHeight: "24px",
        },
        ".search-input": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0 8px 0 28px",
            margin: "0",
            "border-radius": "8px",
            font: "inherit",
            color: "#1f1f21",
            background: "transparent",
            border: "none",
            verticalAlign: "top",
            outline: "none",
            lineHeight: "1.3",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            webkitAppearance: "textfield",
            mozAppearance: "textfield",
            appearance: "textfield",
            fallbacks: [
                {
                    fontWeight: "400",
                },
                {
                    margin: "0",
                },
                {
                    padding: "0",
                },
                {
                    lineHeight: "1",
                },
                {
                    color: "inherit",
                },
                {
                    backgroundColor: "#030303",
                },
                {
                    boxSizing: "border-box",
                },
            ],
            height: "28px",
            fontSize: "14px",
            backgroundColor: "rgba(3, 3, 3, 0.09)",
            boxShadow: "none",
            borderRadius: "5.5px",
            backgroundImage: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTNweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgMTMgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQyICgzNjc4MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+aW9zLXNlYXJjaC1pbnB1dC1pY29uPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9ImNvbXBvbmVudHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpb3Mtc2VhcmNoLWlucHV0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDguMDAwMDAwLCAtNDMuMDAwMDAwKSIgZmlsbD0iIzdBNzk3QiI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAzNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi45OTcyNDgyLDE1LjUwNDE0NjYgQzE3LjA3NzM2NTcsMTUuNTQwNTkzOCAxNy4xNTIyNzMxLDE1LjU5MTYxMjkgMTcuMjE3NzUxNiwxNS42NTcwOTE0IEwyMC42NDk5OTEsMTkuMDg5MzMwOCBDMjAuOTQ0ODQ0OSwxOS4zODQxODQ3IDIwLjk0ODQ3NjQsMTkuODU4NjA2IDIwLjY1MzU0MTIsMjAuMTUzNTQxMiBDMjAuMzYwNjQ4LDIwLjQ0NjQzNDQgMTkuODgxMjcxNiwyMC40NDE5MzE3IDE5LjU4OTMzMDgsMjAuMTQ5OTkxIEwxNi4xNTcwOTE0LDE2LjcxNzc1MTYgQzE2LjA5MTM3LDE2LjY1MjAzMDEgMTYuMDQwMTE3MSwxNi41NzczODc0IDE2LjAwMzQxNDEsMTYuNDk3Nzk5NSBDMTUuMTY3MTY5NCwxNy4xMjcwNDExIDE0LjEyNzEzOTMsMTcuNSAxMywxNy41IEMxMC4yMzg1NzYzLDE3LjUgOCwxNS4yNjE0MjM3IDgsMTIuNSBDOCw5LjczODU3NjI1IDEwLjIzODU3NjMsNy41IDEzLDcuNSBDMTUuNzYxNDIzNyw3LjUgMTgsOS43Mzg1NzYyNSAxOCwxMi41IEMxOCwxMy42Mjc0Njg1IDE3LjYyNjgyMzIsMTQuNjY3Nzc2OCAxNi45OTcyNDgyLDE1LjUwNDE0NjYgWiBNMTMsMTYuNSBDMTUuMjA5MTM5LDE2LjUgMTcsMTQuNzA5MTM5IDE3LDEyLjUgQzE3LDEwLjI5MDg2MSAxNS4yMDkxMzksOC41IDEzLDguNSBDMTAuNzkwODYxLDguNSA5LDEwLjI5MDg2MSA5LDEyLjUgQzksMTQuNzA5MTM5IDEwLjc5MDg2MSwxNi41IDEzLDE2LjUgWiIgaWQ9Imlvcy1zZWFyY2gtaW5wdXQtaWNvbiI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=")',
            backgroundPosition: "8px center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "13px",
            display: "inline-block",
            textIndent: "0",
        },
        ".search-input::-webkit-search-cancel-button": {
            webkitAppearance: "textfield",
            appearance: "textfield",
            display: "none",
        },
        ".search-input::-webkit-search-decoration": {
            display: "none",
        },
        ".search-input:focus": {
            outline: "none",
        },
        ".search-input::-webkit-input-placeholder": {
            color: "#7a797b",
            fontSize: "14px",
            textIndent: "0",
        },
        ".search-input:-ms-input-placeholder": {
            color: "#7a797b",
            fontSize: "14px",
            textIndent: "0",
        },
        ".search-input::-ms-input-placeholder": {
            color: "#7a797b",
            fontSize: "14px",
            textIndent: "0",
        },
        ".search-input::placeholder": {
            color: "#7a797b",
            fontSize: "14px",
            textIndent: "0",
        },
        ".search-input:placeholder-shown": {},
        ".search-input:disabled": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".search-input--material": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            borderRadius: "8px",
            height: "48px",
            backgroundColor: "#fafafa",
            backgroundImage: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjIgKDM5MDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJhbmRyb2lkLXNlYXJjaC1pbnB1dC1pY29uIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9IiM4OTg5ODkiPgogICAgICAgICAgICA8ZyBpZD0iY29tcG9uZW50cyI+CiAgICAgICAgICAgICAgICA8ZyBpZD0ibWF0ZXJpYWwtc2VhcmNoIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0ic2VhcmNoIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ik1hdGVyaWFsL0ljb25zLWJsYWNrL3NlYXJjaCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuNTAyLDYuNDkxIEwxMS43MDgsNi40OTEgTDExLjQzMiw2Ljc2NSBDMTIuNDA3LDcuOTAyIDEzLDkuMzc2IDEzLDEwLjk5MSBDMTMsMTQuNTgxIDEwLjA5LDE3LjQ5MSA2LjUsMTcuNDkxIEMyLjkxLDE3LjQ5MSAwLDE0LjU4MSAwLDEwLjk5MSBDMCw3LjQwMSAyLjkxLDQuNDkxIDYuNSw0LjQ5MSBDOC4xMTUsNC40OTEgOS41ODgsNS4wODMgMTAuNzI1LDYuMDU3IEwxMS4wMDEsNS43ODMgTDExLjAwMSw0Ljk5MSBMMTUuOTk5LDAgTDE3LjQ5LDEuNDkxIEwxMi41MDIsNi40OTEgTDEyLjUwMiw2LjQ5MSBaIE02LjUsNi40OTEgQzQuMDE0LDYuNDkxIDIsOC41MDUgMiwxMC45OTEgQzIsMTMuNDc2IDQuMDE0LDE1LjQ5MSA2LjUsMTUuNDkxIEM4Ljk4NSwxNS40OTEgMTEsMTMuNDc2IDExLDEwLjk5MSBDMTEsOC41MDUgOC45ODUsNi40OTEgNi41LDYuNDkxIEw2LjUsNi40OTEgWiIgaWQ9IlNoYXBlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4Ljc0NTAwMCwgOC43NDU1MDApIHNjYWxlKC0xLCAxKSByb3RhdGUoLTE4MC4wMDAwMDApIHRyYW5zbGF0ZSgtOC43NDUwMDAsIC04Ljc0NTUwMCkgIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==")',
            backgroundSize: "18px",
            backgroundPosition: "18px center",
            fontSize: "14px",
            padding: "0 24px 0 64px",
            boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24),\r\n    0 1px 0 0 rgba(255, 255, 255, 0.06) inset",
        },
        ".text-input": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#1f1f21",
            background: "transparent",
            border: "none",
            verticalAlign: "top",
            outline: "none",
            lineHeight: "1",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            fallbacks: [
                {
                    boxSizing: "border-box",
                },
                {
                    fontWeight: "400",
                },
                {
                    margin: "0",
                },
                {
                    padding: "0",
                },
                {
                    color: "inherit",
                },
                {
                    border: "none",
                },
            ],
            backgroundColor: "transparent",
            letterSpacing: "0",
            boxShadow: "none",
            width: "auto",
            fontSize: "16px",
            height: "31px",
        },
        ".text-input::-ms-clear": {
            display: "none",
        },
        ".text-input:disabled": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".text-input::-webkit-input-placeholder": {
            color: "#999",
        },
        ".text-input:-ms-input-placeholder": {
            color: "#999",
        },
        ".text-input::-ms-input-placeholder": {
            color: "#999",
        },
        ".text-input::placeholder": {
            color: "#999",
        },
        ".text-input:disabled::-webkit-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
        },
        ".text-input:disabled:-ms-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
        },
        ".text-input:disabled::-ms-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
        },
        ".text-input:disabled::placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
        },
        ".text-input:invalid": {
            border: "none",
            backgroundColor: "transparent",
            color: "#1f1f21",
        },
        ".text-input--underbar": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#1f1f21",
            background: "transparent",
            border: "none",
            verticalAlign: "top",
            outline: "none",
            lineHeight: "1",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
                {
                    boxSizing: "border-box",
                },
                {
                    fontWeight: "400",
                },
                {
                    margin: "0",
                },
                {
                    padding: "0",
                },
                {
                    color: "inherit",
                },
                {
                    border: "none",
                },
            ],
            backgroundColor: "transparent",
            letterSpacing: "0",
            boxShadow: "none",
            width: "auto",
            fontSize: "16px",
            height: "31px",
            borderBottom: "1px solid #ccc",
            borderRadius: "0",
        },
        ".text-input--underbar:disabled": {
            opacity: "0.3",
            pointerEvents: "none",
            border: "none",
            backgroundColor: "transparent",
            borderBottom: "1px solid #ccc",
        },
        ".text-input--underbar:disabled::-webkit-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
            ],
        },
        ".text-input--underbar:disabled:-ms-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
            ],
        },
        ".text-input--underbar:disabled::-ms-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
            ],
        },
        ".text-input--underbar:disabled::placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
            ],
        },
        ".text-input--underbar:invalid": {
            border: "none",
            backgroundColor: "transparent",
            color: "#1f1f21",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
            ],
            borderBottom: "1px solid #ccc",
        },
        ".text-input--material": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#212121",
            background: "transparent",
            border: "none",
            verticalAlign: "middle",
            outline: "none",
            lineHeight: "1",
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            fallbacks: [
                {
                    verticalAlign: "top",
                },
                {
                    border: "none",
                },
                {
                    fontWeight: "400",
                },
                {
                    color: "inherit",
                },
                {
                    fontWeight: "400",
                },
                {
                    webkitFontSmoothing: "antialiased",
                },
                {
                    fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                },
            ],
            backgroundImage: "linear-gradient(to top, transparent 1px, #afafaf 1px)",
            backgroundSize: "100% 2px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
            backgroundColor: "transparent",
            fontSize: "16px",
            paddingBottom: "2px",
            borderRadius: "0",
            height: "24px",
            webkitTransform: "translate3d(0, 0, 0)",
        },
        ".text-input--material__label": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            color: "#afafaf",
            position: "absolute",
            left: "0",
            top: "2px",
            fontSize: "16px",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            pointerEvents: "none",
        },
        ".text-input--material__label--active": {
            color: "#3d5afe",
            webkitTransform: "translate(0, -75%) scale(0.75)",
            transform: "translate(0, -75%) scale(0.75)",
            webkitTransformOrigin: "left top",
            transformOrigin: "left top",
            transition: "transform 0.1s ease-in, color 0.1s ease-in, -webkit-transform 0.1s ease-in",
            fallbacks: [
                {
                    transition: "transform 0.1s ease-in, color 0.1s ease-in",
                },
                {
                    transition: "color 0.1s ease-in, -webkit-transform 0.1s ease-in",
                },
            ],
        },
        ".text-input--material:focus": {
            backgroundImage: "linear-gradient(#3d5afe, #3d5afe),\r\n    linear-gradient(to top, transparent 1px, #afafaf 1px)",
            webkitAnimation: "material-text-input-animate 0.3s forwards",
            animation: "material-text-input-animate 0.3s forwards",
        },
        ".text-input--material::-webkit-input-placeholder": {
            color: "#afafaf",
            lineHeight: "20px",
        },
        ".text-input--material:-ms-input-placeholder": {
            color: "#afafaf",
            lineHeight: "20px",
        },
        ".text-input--material::-ms-input-placeholder": {
            color: "#afafaf",
            lineHeight: "20px",
        },
        ".text-input--material::placeholder": {
            color: "#afafaf",
            lineHeight: "20px",
        },
        "@keyframes material-text-input-animate": {
            "0%": {
                backgroundSize: "0% 2px, 100% 2px",
            },
            "100%": {
                backgroundSize: "100% 2px, 100% 2px",
            },
        },
        ".textarea": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "5px 5px 5px 5px",
            margin: "0",
            font: "inherit",
            color: "#1f1f21",
            background: "transparent",
            border: "1px solid #ccc",
            lineHeight: "normal",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            verticalAlign: "top",
            resize: "none",
            outline: "none",
            fallbacks: [
                {
                    color: "inherit",
                },
                {
                    backgroundColor: "#ffffff",
                },
                {
                    border: "none",
                },
                {
                    fontWeight: "400",
                },
                {
                    padding: "0",
                },
            ],
            fontSize: "16px",
            borderRadius: "4px",
            backgroundColor: "rgba(255, 255, 255, 1)",
            letterSpacing: "0",
            boxShadow: "none",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            width: "auto",
        },
        ".textarea:disabled": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".textarea::-webkit-input-placeholder": {
            color: "#999",
        },
        ".textarea:-ms-input-placeholder": {
            color: "#999",
        },
        ".textarea::-ms-input-placeholder": {
            color: "#999",
        },
        ".textarea::placeholder": {
            color: "#999",
        },
        ".textarea--transparent": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "5px 5px 5px 5px",
            margin: "0",
            font: "inherit",
            color: "#1f1f21",
            background: "transparent",
            border: "none",
            lineHeight: "normal",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            verticalAlign: "top",
            resize: "none",
            outline: "none",
            fallbacks: [
                {
                    color: "inherit",
                },
                {
                    border: "none",
                },
                {
                    fontWeight: "400",
                },
                {
                    padding: "0",
                },
            ],
            paddingLeft: "0",
            paddingRight: "0",
            fontSize: "16px",
            borderRadius: "4px",
            backgroundColor: "transparent",
            letterSpacing: "0",
            boxShadow: "none",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            width: "auto",
        },
        ".textarea--transparent:disabled": {
            opacity: "0.3",
            pointerEvents: "none",
        },
        ".textarea--transparent::-webkit-input-placeholder": {
            color: "#999",
        },
        ".textarea--transparent:-ms-input-placeholder": {
            color: "#999",
        },
        ".textarea--transparent::-ms-input-placeholder": {
            color: "#999",
        },
        ".textarea--transparent::placeholder": {
            color: "#999",
        },
        ".dialog": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "auto auto",
            font: "inherit",
            color: "inherit",
            background: "transparent",
            border: "none",
            lineHeight: "normal",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            position: "absolute",
            top: "50%",
            left: "50%",
            webkitTransform: "translate(-50%, -50%)",
            transform: "translate(-50%, -50%)",
            fallbacks: [
                {
                    margin: "0",
                },
            ],
            overflow: "hidden",
            minWidth: "270px",
            minHeight: "100px",
            textAlign: "left",
        },
        ".dialog-container": {
            height: "inherit",
            minHeight: "inherit",
            overflow: "hidden",
            borderRadius: "4px",
            backgroundColor: "#f4f4f4",
            webkitMaskImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC")',
            color: "#1f1f21",
        },
        ".dialog-mask": {
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "transparent",
            border: "none",
            lineHeight: "normal",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            position: "absolute",
            top: "0",
            right: "0",
            left: "0",
            bottom: "0",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            fallbacks: [
                {
                    backgroundColor: "#000000",
                },
            ],
        },
        ".dialog--material": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            textAlign: "left",
            boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12),\r\n    0 8px 10px -5px rgba(0, 0, 0, 0.4)",
        },
        ".dialog-container--material": {
            borderRadius: "8px",
            backgroundColor: "#ffffff",
            color: "#1f1f21",
        },
        ".dialog-mask--material": {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            fallbacks: [
                {
                    backgroundColor: "#000000",
                },
            ],
        },
        ".alert-dialog": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "auto",
            font: "inherit",
            color: "#1f1f21",
            background: "transparent",
            border: "none",
            lineHeight: "normal",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            position: "absolute",
            top: "50%",
            left: "50%",
            webkitTransform: "translate(-50%, -50%)",
            transform: "translate(-50%, -50%)",
            width: "270px",
            fallbacks: [
                {
                    color: "inherit",
                },
                {
                    margin: "0",
                },
            ],
            backgroundColor: "#f4f4f4",
            borderRadius: "8px",
            overflow: "visible",
            maxWidth: "95%",
        },
        ".alert-dialog-container": {
            height: "inherit",
            paddingTop: "16px",
            overflow: "hidden",
        },
        ".alert-dialog-title": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "500",
            fontSize: "17px",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            padding: "0 8px",
            textAlign: "center",
            color: "#1f1f21",
        },
        ".alert-dialog-content": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "4px 12px 8px",
            fontSize: "14px",
            minHeight: "36px",
            textAlign: "center",
            color: "#1f1f21",
        },
        ".alert-dialog-footer": {
            width: "100%",
        },
        ".alert-dialog-button": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0 8px",
            margin: "0",
            font: "inherit",
            color: "#4a148c",
            background: "transparent",
            border: "none",
            lineHeight: "44px",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textDecoration: "none",
            letterSpacing: "0",
            verticalAlign: "middle",
            fallbacks: [
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
                {
                    margin: "0",
                },
                {
                    padding: "0",
                },
                {
                    border: "none",
                },
            ],
            borderTop: "1px solid #ddd",
            fontSize: "16px",
            display: "block",
            width: "100%",
            backgroundColor: "transparent",
            textAlign: "center",
            height: "44px",
            outline: "none",
        },
        ".alert-dialog-button:active": {
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            fallbacks: [
                {
                    backgroundColor: "#000000",
                },
            ],
        },
        ".alert-dialog-button--primal": {
            fontWeight: "500",
        },
        ".alert-dialog-footer--rowfooter": {
            whiteSpace: "nowrap",
            display: "flex",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
            ],
            webkitFlexWrap: "wrap",
            flexWrap: "wrap",
        },
        ".alert-dialog-button--rowfooter": {
            webkitBoxFlex: "1",
            webkitFlex: "1",
            flex: "1",
            display: "block",
            width: "100%",
            borderLeft: "1px solid #ddd",
        },
        ".alert-dialog-button--rowfooter:first-child": {
            borderLeft: "none",
        },
        ".alert-dialog-mask": {
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "transparent",
            border: "none",
            lineHeight: "normal",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            position: "absolute",
            top: "0",
            right: "0",
            left: "0",
            bottom: "0",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            fallbacks: [
                {
                    backgroundColor: "#000000",
                },
            ],
        },
        ".alert-dialog--material": {
            borderRadius: "8px",
            backgroundColor: "#ffffff",
        },
        ".alert-dialog-container--material": {
            borderRadius: "8px",
            padding: "22px 0 0 0",
            boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12),\r\n    0 8px 10px -5px rgba(0, 0, 0, 0.4)",
        },
        ".alert-dialog-title--material": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            textAlign: "left",
            fontSize: "20px",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            padding: "0 24px",
            color: "#31313a",
        },
        ".alert-dialog-content--material": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            textAlign: "left",
            fontSize: "16px",
            fallbacks: [
                {
                    color: "#31313a",
                },
                {
                    fontWeight: "400",
                },
            ],
            lineHeight: "20px",
            padding: "0 24px",
            margin: "24px 0 10px 0",
            minHeight: "0",
            color: "rgba(49, 49, 58, 0.85)",
        },
        ".alert-dialog-footer--material": {
            display: "block",
            padding: "0",
            height: "52px",
            boxSizing: "border-box",
            margin: "0",
            lineHeight: "1",
        },
        ".alert-dialog-button--material": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "500",
            textTransform: "uppercase",
            display: "inline-block",
            width: "auto",
            float: "right",
            background: "none",
            border: "none",
            borderRadius: "2px",
            fontSize: "14px",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            outline: "none",
            height: "36px",
            lineHeight: "36px",
            padding: "0 8px",
            margin: "8px 8px 8px 0",
            boxSizing: "border-box",
            minWidth: "50px",
            color: "#4a148c",
        },
        ".alert-dialog-button--material:active": {
            backgroundColor: "initial",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
            ],
        },
        ".alert-dialog-button--rowfooter--material, .alert-dialog-button--rowfooter--material:first-child": {
            border: "0",
        },
        ".alert-dialog-button--primal--material": {
            fontWeight: "500",
        },
        ".alert-dialog-mask--material": {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            fallbacks: [
                {
                    backgroundColor: "#000000",
                },
            ],
        },
        ".popover": {
            position: "absolute",
            zIndex: "20001",
        },
        ".popover--bottom": {
            bottom: "0",
        },
        ".popover--top": {
            top: "0",
        },
        ".popover--left": {
            left: "0",
        },
        ".popover--right": {
            right: "0",
        },
        ".popover-mask": {
            left: "0",
            right: "0",
            top: "0",
            bottom: "0",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            fallbacks: [
                {
                    backgroundColor: "#000000",
                },
            ],
            position: "absolute",
            zIndex: "19999",
        },
        ".popover__content": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#1f1f21",
            background: "transparent",
            border: "none",
            lineHeight: "normal",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            display: "block",
            width: "220px",
            overflow: "auto",
            minHeight: "100px",
            maxHeight: "100%",
            backgroundColor: "white",
            borderRadius: "8px",
            fallbacks: [
                {
                    color: "inherit",
                },
            ],
            pointerEvents: "auto",
        },
        ".popover--top__content": {},
        ".popover--bottom__content": {},
        ".popover--left__content": {},
        ".popover--right__content": {},
        ".popover__arrow": {
            position: "absolute",
            width: "18px",
            height: "18px",
            webkitTransformOrigin: "50% 50% 0",
            transformOrigin: "50% 50% 0",
            backgroundColor: "transparent",
            backgroundImage: "linear-gradient(45deg, white, white 50%, transparent 50%)",
            borderRadius: "0 0 0 4px",
            margin: "0",
            zIndex: "20001",
        },
        ".popover--bottom__arrow": {
            webkitTransform: "translateY(6px) translateX(-9px) rotate(-45deg)",
            transform: "translateY(6px) translateX(-9px) rotate(-45deg)",
            bottom: "0",
            marginRight: "-18px",
        },
        ".popover--top__arrow": {
            webkitTransform: "translateY(-6px) translateX(-9px) rotate(135deg)",
            transform: "translateY(-6px) translateX(-9px) rotate(135deg)",
            top: "0",
            marginRight: "-18px",
        },
        ".popover--left__arrow": {
            webkitTransform: "translateX(-6px) translateY(-9px) rotate(45deg)",
            transform: "translateX(-6px) translateY(-9px) rotate(45deg)",
            left: "0",
            marginBottom: "-18px",
        },
        ".popover--right__arrow": {
            webkitTransform: "translateX(6px) translateY(-9px) rotate(225deg)",
            transform: "translateX(6px) translateY(-9px) rotate(225deg)",
            right: "0",
            marginBottom: "-18px",
        },
        ".popover--material": {},
        ".popover-mask--material": {
            backgroundColor: "transparent",
        },
        ".popover--material__content": {
            backgroundColor: "#fafafa",
            borderRadius: "2px",
            color: "#1f1f21",
            boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 1px -2px rgba(0, 0, 0, 0.2)",
        },
        ".popover--material__arrow": {
            display: "none",
        },
        ".progress-bar": {
            position: "relative",
            height: "2px",
            display: "block",
            width: "100%",
            backgroundColor: "transparent",
            backgroundClip: "padding-box",
            margin: "0",
            overflow: "hidden",
            borderRadius: "4px",
        },
        ".progress-bar__primary, .progress-bar__secondary": {
            position: "absolute",
            backgroundColor: "#4a148c",
            top: "0",
            bottom: "0",
            transition: "width 0.3s linear",
            zIndex: "100",
            borderRadius: "4px",
        },
        ".progress-bar__secondary": {
            backgroundColor: "#65adff",
            zIndex: "0",
        },
        ".progress-bar--indeterminate:before": {
            content: '""',
            position: "absolute",
            backgroundColor: "#4a148c",
            top: "0",
            left: "0",
            bottom: "0",
            willChange: "left, right",
            webkitAnimation: "progress-bar__indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395)\r\n    infinite",
            animation: "progress-bar__indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite",
            borderRadius: "4px",
        },
        ".progress-bar--indeterminate:after": {
            content: '""',
            position: "absolute",
            backgroundColor: "#4a148c",
            top: "0",
            left: "0",
            bottom: "0",
            willChange: "left, right",
            webkitAnimation: "progress-bar__indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1)\r\n    infinite",
            animation: "progress-bar__indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite",
            webkitAnimationDelay: "1.15s",
            animationDelay: "1.15s",
            borderRadius: "4px",
        },
        "@keyframes progress-bar__indeterminate": {
            "0%": {
                left: "-35%",
                right: "100%",
            },
            "60%": {
                left: "100%",
                right: "-90%",
            },
            "100%": {
                left: "100%",
                right: "-90%",
            },
        },
        "@keyframes progress-bar__indeterminate-short": {
            "0%": {
                left: "-200%",
                right: "100%",
            },
            "60%": {
                left: "107%",
                right: "-8%",
            },
            "100%": {
                left: "107%",
                right: "-8%",
            },
        },
        ".progress-bar--material": {
            height: "4px",
            backgroundColor: "transparent",
            borderRadius: "0",
        },
        ".progress-bar--material__primary, .progress-bar--material__secondary": {
            backgroundColor: "#4a148c",
            borderRadius: "0",
        },
        ".progress-bar--material__secondary": {
            backgroundColor: "#12005e",
            zIndex: "0",
        },
        ".progress-bar--material.progress-bar--indeterminate:before": {
            backgroundColor: "#4a148c",
            borderRadius: "0",
        },
        ".progress-bar--material.progress-bar--indeterminate:after": {
            backgroundColor: "#4a148c",
            borderRadius: "0",
        },
        ".progress-circular": {
            height: "32px",
            position: "relative",
            width: "32px",
            webkitTransform: "rotate(270deg)",
            transform: "rotate(270deg)",
            webkitAnimation: "none",
            animation: "none",
        },
        ".progress-circular__background, .progress-circular__primary, .progress-circular__secondary": {
            cx: "50%",
            cy: "50%",
            r: "40%",
            webkitAnimation: "none",
            animation: "none",
            fill: "none",
            strokeWidth: "5%",
            strokeMiterlimit: "10",
        },
        ".progress-circular__background": {
            stroke: "transparent",
        },
        ".progress-circular__primary": {
            strokeDasharray: "1, 200",
            strokeDashoffset: "0",
            stroke: "#4a148c",
            transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
        },
        ".progress-circular__secondary": {
            stroke: "#65adff",
        },
        ".progress-circular--indeterminate": {
            webkitAnimation: "progress__rotate 2s linear infinite",
            animation: "progress__rotate 2s linear infinite",
            webkitTransform: "none",
            transform: "none",
        },
        ".progress-circular--indeterminate__primary": {
            webkitAnimation: "progress__dash 1.5s ease-in-out infinite",
            animation: "progress__dash 1.5s ease-in-out infinite",
        },
        ".progress-circular--indeterminate__secondary": {
            display: "none",
        },
        "@keyframes progress__rotate": {
            "100%": {
                webkitTransform: "rotate(360deg)",
                transform: "rotate(360deg)",
            },
        },
        "@keyframes progress__dash": {
            "0%": {
                strokeDasharray: "10%, 241.32%",
                strokeDashoffset: "0",
            },
            "50%": {
                strokeDasharray: "201%, 50.322%",
                strokeDashoffset: "-100%",
            },
            "100%": {
                strokeDasharray: "10%, 241.32%",
                strokeDashoffset: "-251.32%",
            },
        },
        ".progress-circular--material__background, .progress-circular--material__primary, .progress-circular--material__secondary": {
            strokeWidth: "9%",
        },
        ".progress-circular--material__background": {
            stroke: "transparent",
        },
        ".progress-circular--material__primary": {
            stroke: "#4a148c",
        },
        ".progress-circular--material__secondary": {
            stroke: "#12005e",
        },
        "ons-fab.fab, ons-speed-dial-item.fab, button.fab": {
            position: "relative",
            display: "inline-block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#ffffff",
            background: "transparent",
            border: "0 solid currentColor",
            lineHeight: "56px",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            width: "56px",
            height: "56px",
            textDecoration: "none",
            fontSize: "25px",
            fallbacks: [
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
            ],
            letterSpacing: "0",
            verticalAlign: "middle",
            textAlign: "center",
            backgroundColor: "#4a148c",
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 3px 6px rgba(0, 0, 0, 0.12)",
            transition: "all 0.1s linear",
        },
        "ons-fab.fab:active, ons-speed-dial-item.fab:active, button.fab:active": {
            boxShadow: "0 0 6 rgba(0, 0, 0, 0.12)",
            backgroundColor: "color-mod(#4a148c a(70%))",
            transition: "all 0.2s ease",
            fallbacks: [
                {
                    boxShadow: "0 3px 6 rgba(0, 0, 0, 0.12)",
                },
            ],
        },
        "ons-fab.fab:focus, ons-speed-dial-item.fab:focus, button.fab:focus": {
            outline: "0",
        },
        "ons-fab.fab:disabled, ons-fab.fab[disabled], ons-speed-dial-item.fab:disabled, ons-speed-dial-item.fab[disabled], button.fab:disabled, button.fab[disabled]": {
            backgroundColor: "color-mod(black alpha(50%))",
            boxShadow: "none",
            opacity: "0.3",
            pointerEvents: "none",
        },
        "ons-fab.fab__icon, ons-speed-dial-item.fab__icon, button.fab__icon": {
            position: "relative",
            overflow: "hidden",
            height: "100%",
            width: "100%",
            display: "block",
            borderRadius: "100%",
            padding: "0",
            zIndex: "100",
            lineHeight: "56px",
        },
        "ons-fab.fab--material, ons-speed-dial-item.fab--material, button.fab--material": {
            position: "relative",
            display: "inline-block",
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "rgba(255, 255, 255, 1)",
            background: "transparent",
            border: "0 solid currentColor",
            lineHeight: "56px",
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            width: "56px",
            height: "56px",
            textDecoration: "none",
            fontSize: "25px",
            fallbacks: [
                {
                    transition: "all 0.1s linear",
                },
                {
                    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.12)",
                },
                {
                    backgroundColor: "#4a148c",
                },
                {
                    color: "#ffffff",
                },
                {
                    color: "#ffffff",
                },
                {
                    lineHeight: "56px",
                },
                {
                    fontSize: "25px",
                },
                {
                    textDecoration: "none",
                },
                {
                    height: "56px",
                },
                {
                    width: "56px",
                },
                {
                    fontWeight: "400",
                },
                {
                    webkitFontSmoothing: "antialiased",
                },
                {
                    fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                },
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "normal",
                },
            ],
            letterSpacing: "0",
            verticalAlign: "middle",
            textAlign: "center",
            backgroundColor: "#4a148c",
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),\r\n    0 2px 4px -1px rgba(0, 0, 0, 0.4)",
            transition: "all 0.2s ease-in-out",
        },
        "ons-fab.fab--material:active, ons-speed-dial-item.fab--material:active, button.fab--material:active": {
            boxShadow: "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12),\r\n    0 5px 5px -3px rgba(0, 0, 0, 0.4)",
            backgroundColor: "rgba(255, 255, 255, 0.75)",
            fallbacks: [
                {
                    backgroundColor: "#ffffff",
                },
            ],
            transition: "all 0.2s ease",
        },
        "ons-fab.fab--material:focus, ons-speed-dial-item.fab--material:focus, button.fab--material:focus": {
            outline: "0",
        },
        "ons-fab.fab--material__icon, ons-speed-dial-item.fab--material__icon, button.fab--material__icon": {
            position: "relative",
            overflow: "hidden",
            height: "100%",
            width: "100%",
            display: "block",
            borderRadius: "100%",
            padding: "0",
            zIndex: "100",
            lineHeight: "56px",
        },
        "ons-fab.fab--material:disabled, ons-fab.fab--material[disabled], ons-speed-dial-item.fab--material:disabled, ons-speed-dial-item.fab--material[disabled], button.fab--material:disabled, button.fab--material[disabled]": {
            backgroundColor: "color-mod(black alpha(50%))",
            boxShadow: "none",
            opacity: "0.3",
            pointerEvents: "none",
        },
        "ons-fab.fab--mini, ons-speed-dial-item.fab--mini, button.fab--mini": {
            width: "40px",
            height: "40px",
            lineHeight: "40px",
        },
        "ons-fab.fab--mini__icon, ons-speed-dial-item.fab--mini__icon, button.fab--mini__icon": {
            lineHeight: "40px",
        },
        "ons-fab.speed-dial__item, ons-speed-dial-item.speed-dial__item, button.speed-dial__item": {
            position: "absolute",
            webkitTransform: "scale(0)",
            transform: "scale(0)",
        },
        "ons-fab.fab--top__right, button.fab--top__right, .speed-dial.fab--top__right": {
            top: "20px",
            bottom: "auto",
            right: "20px",
            left: "auto",
            position: "absolute",
        },
        "ons-fab.fab--bottom__right, button.fab--bottom__right, .speed-dial.fab--bottom__right": {
            top: "auto",
            bottom: "20px",
            right: "20px",
            left: "auto",
            position: "absolute",
        },
        "ons-fab.fab--top__left, button.fab--top__left, .speed-dial.fab--top__left": {
            top: "20px",
            bottom: "auto",
            right: "auto",
            left: "20px",
            position: "absolute",
        },
        "ons-fab.fab--bottom__left, button.fab--bottom__left, .speed-dial.fab--bottom__left": {
            top: "auto",
            bottom: "20px",
            right: "auto",
            left: "20px",
            position: "absolute",
        },
        "ons-fab.fab--top__center, button.fab--top__center, .speed-dial.fab--top__center": {
            top: "20px",
            bottom: "auto",
            marginLeft: "-28px",
            left: "50%",
            right: "auto",
            position: "absolute",
        },
        "ons-fab.fab--bottom__center, button.fab--bottom__center, .speed-dial.fab--bottom__center": {
            top: "auto",
            bottom: "20px",
            marginLeft: "-28px",
            left: "50%",
            right: "auto",
            position: "absolute",
        },
        ".modal": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            whiteSpace: "nowrap",
            overflow: "hidden",
            wordSpacing: "0",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "inherit",
            background: "transparent",
            border: "none",
            lineHeight: "normal",
            fallbacks: [
                {
                    backgroundColor: "#000000",
                },
                {
                    overflow: "hidden",
                },
                {
                    backgroundClip: "padding-box",
                },
                {
                    boxSizing: "border-box",
                },
            ],
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            position: "absolute",
            left: "0",
            right: "0",
            top: "0",
            bottom: "0",
            width: "100%",
            height: "100%",
            display: "table",
            zIndex: "2147483647",
        },
        ".modal__content": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            whiteSpace: "normal",
            overflow: "hidden",
            wordSpacing: "0",
            padding: "0",
            margin: "0",
            font: "inherit",
            color: "#fff",
            background: "transparent",
            border: "none",
            lineHeight: "normal",
            fallbacks: [
                {
                    whiteSpace: "nowrap",
                },
                {
                    color: "inherit",
                },
                {
                    backgroundClip: "padding-box",
                },
                {
                    boxSizing: "border-box",
                },
            ],
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            display: "table-cell",
            verticalAlign: "middle",
            textAlign: "center",
        },
        ".select-input": {
            boxSizing: "border-box",
            backgroundClip: "padding-box",
            padding: "0 20px 0 0",
            margin: "0",
            font: "inherit",
            color: "#1f1f21",
            background: "transparent",
            border: "none",
            verticalAlign: "top",
            outline: "none",
            lineHeight: "32px",
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    padding: "0",
                },
                {
                    border: "none",
                },
                {
                    color: "inherit",
                },
                {
                    lineHeight: "1",
                },
                {
                    border: "none",
                },
            ],
            backgroundColor: "transparent",
            position: "relative",
            fontSize: "17px",
            height: "32px",
            borderColor: "#ccc",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            display: "inline-block",
            borderRadius: "0",
            backgroundImage: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSI1cHgiIHZpZXdCb3g9IjAgMCAxMCA1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0My4yICgzOTA2OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+c2VsZWN0LWFsbG93PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9InNlbGVjdCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imlvcy1zZWxlY3QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTguMDAwMDAwLCAtMTE0LjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0ibWVudS1iYXItKy1vcGVuLW1lbnUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMy4wMDAwMDAsIDEwMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJtZW51LWJhciI+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9InNlbGVjdC1hbGxvdyIgcG9pbnRzPSI3NSAxNCA4MCAxOSA4NSAxNCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            borderBottom: "none",
        },
        ".select-input::-ms-clear": {
            display: "none",
        },
        ".select-input::-webkit-input-placeholder": {
            color: "#999",
        },
        ".select-input:-ms-input-placeholder": {
            color: "#999",
        },
        ".select-input::-ms-input-placeholder": {
            color: "#999",
        },
        ".select-input::placeholder": {
            color: "#999",
        },
        ".select-input:disabled": {
            opacity: "0.3",
            pointerEvents: "none",
            border: "none",
            backgroundColor: "transparent",
        },
        ".select-input:disabled::-webkit-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
        },
        ".select-input:disabled:-ms-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
        },
        ".select-input:disabled::-ms-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
        },
        ".select-input:disabled::placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
        },
        ".select-input:invalid": {
            border: "none",
            backgroundColor: "transparent",
            color: "#1f1f21",
        },
        ".select-input[multiple]": {
            height: "64px",
        },
        ".select-input--material": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            color: "#1f1f21",
            fontSize: "15px",
            backgroundImage: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSI1cHgiIHZpZXdCb3g9IjAgMCAxMCA1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0My4yICgzOTA2OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+c2VsZWN0LWFsbG93PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9InNlbGVjdCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imlvcy1zZWxlY3QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTguMDAwMDAwLCAtMTE0LjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0ibWVudS1iYXItKy1vcGVuLW1lbnUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMy4wMDAwMDAsIDEwMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJtZW51LWJhciI+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9InNlbGVjdC1hbGxvdyIgcG9pbnRzPSI3NSAxNCA4MCAxOSA4NSAxNCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="),\r\n    linear-gradient(to top, color-mod(black a(12%)) 50%, color-mod(black a(12%)) 50%)',
            backgroundSize: "auto, 100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center, left bottom",
            border: "none",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            webkitTransform: "translate3d(0, 0, 0)",
            transform: "translate3d(0, 0, 0)",
        },
        ".select-input--material__label": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            color: "rgba(0, 0, 0, 0.81)",
            fallbacks: [
                {
                    color: "#000000",
                },
            ],
            position: "absolute",
            left: "0",
            top: "2px",
            fontSize: "16px",
            pointerEvents: "none",
        },
        ".select-input--material__label--active": {
            color: "rgba(0, 0, 0, 0.15)",
            fallbacks: [
                {
                    transition: "transform 0.1s ease-in, color 0.1s ease-in",
                },
                {
                    transition: "color 0.1s ease-in, -webkit-transform 0.1s ease-in",
                },
                {
                    color: "#000000",
                },
            ],
            webkitTransform: "translate(0, -75%) scale(0.75)",
            transform: "translate(0, -75%) scale(0.75)",
            webkitTransformOrigin: "left top",
            transformOrigin: "left top",
            transition: "transform 0.1s ease-in, color 0.1s ease-in, -webkit-transform 0.1s ease-in",
        },
        ".select-input--material::-webkit-input-placeholder": {
            color: "rgba(0, 0, 0, 0.81)",
            fallbacks: [
                {
                    color: "#000000",
                },
            ],
            lineHeight: "20px",
        },
        ".select-input--material:-ms-input-placeholder": {
            color: "rgba(0, 0, 0, 0.81)",
            fallbacks: [
                {
                    color: "#000000",
                },
            ],
            lineHeight: "20px",
        },
        ".select-input--material::-ms-input-placeholder": {
            color: "rgba(0, 0, 0, 0.81)",
            fallbacks: [
                {
                    color: "#000000",
                },
            ],
            lineHeight: "20px",
        },
        ".select-input--material::placeholder": {
            color: "rgba(0, 0, 0, 0.81)",
            fallbacks: [
                {
                    color: "#000000",
                },
            ],
            lineHeight: "20px",
        },
        "@keyframes material-select-input-animate": {
            "0%": {
                backgroundSize: "0% 2px, 100% 2px",
            },
            "100%": {
                backgroundSize: "100% 2px, 100% 2px",
            },
        },
        ".select-input--underbar": {
            border: "none",
            borderBottom: "1px solid #ccc",
        },
        ".select-input--underbar:disabled": {
            opacity: "0.3",
            pointerEvents: "none",
            border: "none",
            backgroundColor: "transparent",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
            ],
            borderBottom: "1px solid #ccc",
        },
        ".select-input--underbar:disabled::-webkit-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
            ],
        },
        ".select-input--underbar:disabled:-ms-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
            ],
        },
        ".select-input--underbar:disabled::-ms-input-placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
            ],
        },
        ".select-input--underbar:disabled::placeholder": {
            border: "none",
            backgroundColor: "transparent",
            color: "#999",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
            ],
        },
        ".select-input--underbar:invalid": {
            border: "none",
            backgroundColor: "transparent",
            color: "#1f1f21",
            fallbacks: [
                {
                    backgroundColor: "transparent",
                },
                {
                    border: "none",
                },
            ],
            borderBottom: "1px solid #ccc",
        },
        ".action-sheet": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            position: "absolute",
            left: "10px",
            right: "10px",
            bottom: "10px",
            zIndex: "2",
        },
        ".action-sheet-button": {
            boxSizing: "border-box",
            height: "56px",
            fontSize: "20px",
            textAlign: "center",
            color: "#4a148c",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            fallbacks: [
                {
                    backgroundColor: "#ffffff",
                },
            ],
            borderRadius: "0",
            lineHeight: "56px",
            border: "none",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            display: "block",
            width: "100%",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) 100%)",
        },
        ".action-sheet-button:first-child": {
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
        },
        ".action-sheet-button:active": {
            backgroundColor: "#e9e9e9",
            backgroundImage: "none",
        },
        ".action-sheet-button:focus": {
            outline: "none",
        },
        ".action-sheet-button:nth-last-of-type(2)": {
            borderBottomRightRadius: "12px",
            borderBottomLeftRadius: "12px",
            backgroundImage: "none",
        },
        ".action-sheet-button:last-of-type": {
            borderRadius: "12px",
            margin: "8px 0 0 0",
            backgroundColor: "#fff",
            backgroundImage: "none",
            fontWeight: "600",
        },
        ".action-sheet-button:last-of-type:active": {
            backgroundColor: "#e9e9e9",
        },
        ".action-sheet-button--destructive": {
            color: "#fe3824",
        },
        ".action-sheet-title": {
            boxSizing: "border-box",
            height: "56px",
            fontSize: "13px",
            color: "#8f8e94",
            textAlign: "center",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            fallbacks: [
                {
                    backgroundColor: "#ffffff",
                },
            ],
            lineHeight: "56px",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) 100%)",
        },
        ".action-sheet-title:first-child": {
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
        },
        ".action-sheet-icon": {
            display: "none",
        },
        ".action-sheet-mask": {
            position: "absolute",
            left: "0",
            top: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            fallbacks: [
                {
                    backgroundColor: "#000000",
                },
            ],
            zIndex: "1",
        },
        ".action-sheet--material": {
            left: "0",
            right: "0",
            bottom: "0",
            boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12),\r\n    0 8px 10px -5px rgba(0, 0, 0, 0.4)",
        },
        ".action-sheet-title--material": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            borderRadius: "0",
            backgroundImage: "none",
            textAlign: "left",
            height: "56px",
            lineHeight: "56px",
            fontSize: "16px",
            padding: "0 0 0 16px",
            color: "#686868",
            backgroundColor: "white",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
        },
        ".action-sheet-title--material:first-child": {
            borderRadius: "0",
        },
        ".action-sheet-button--material": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            borderRadius: "0",
            backgroundImage: "none",
            height: "52px",
            lineHeight: "52px",
            textAlign: "left",
            fontSize: "16px",
            padding: "0 0 0 16px",
            color: "#686868",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            backgroundColor: "white",
        },
        ".action-sheet-button--material:first-child": {
            borderRadius: "0",
        },
        ".action-sheet-button--material:nth-last-of-type(2)": {
            borderRadius: "0",
        },
        ".action-sheet-button--material:last-of-type": {
            margin: "0",
            borderRadius: "8px",
            backgroundColor: "white",
        },
        ".action-sheet-icon--material": {
            display: "inline-block",
            float: "left",
            height: "52px",
            lineHeight: "52px",
            marginRight: "32px",
            fontSize: "26px",
            width: "0.8em",
            textAlign: "center",
        },
        ".action-sheet-mask--material": {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            fallbacks: [
                {
                    backgroundColor: "#000000",
                },
            ],
        },
        ".card": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.12)",
            borderRadius: "8px",
            backgroundColor: "white",
            boxSizing: "border-box",
            display: "block",
            margin: "8px",
            padding: "16px",
            textAlign: "left",
            wordWrap: "break-word",
        },
        ".card__content": {
            margin: "0",
            fontSize: "14px",
            lineHeight: "1.4",
            color: "#030303",
        },
        ".card__title": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            fallbacks: [
                {
                    fontWeight: "400",
                },
            ],
            fontSize: "20px",
            margin: "4px 0 8px 0",
            padding: "0",
            display: "block",
            boxSizing: "border-box",
        },
        ".card--material": {
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 1px -2px rgba(0, 0, 0, 0.2)",
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
        },
        ".card--material__content": {
            fontSize: "14px",
            lineHeight: "1.4",
            color: "rgba(0, 0, 0, 0.54)",
            fallbacks: [
                {
                    color: "#000000",
                },
            ],
        },
        ".card--material__title": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            fontSize: "24px",
            margin: "8px 0 12px 0",
        },
        ".toast": {
            fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
            webkitFontSmoothing: "antialiased",
            mozOsxFontSmoothing: "grayscale",
            fontWeight: "400",
            position: "absolute",
            zIndex: "2",
            left: "8px",
            right: "8px",
            bottom: "0",
            margin: "8px 0",
            borderRadius: "8px",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            fallbacks: [
                {
                    display: "-webkit-flex",
                },
                {
                    display: "-webkit-box",
                },
                {
                    backgroundColor: "#000000",
                },
            ],
            display: "flex",
            minHeight: "48px",
            lineHeight: "1.5",
            boxSizing: "border-box",
            padding: "16px 16px",
        },
        ".toast__message": {
            fontSize: "14px",
            color: "white",
            webkitBoxFlex: "1",
            webkitFlexGrow: "1",
            flexGrow: "1",
            textAlign: "left",
            margin: "0 16px 0 0",
            whiteSpace: "normal",
        },
        ".toast__button": {
            fontSize: "14px",
            color: "white",
            webkitBoxFlex: "0",
            webkitFlexGrow: "0",
            flexGrow: "0",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            border: "none",
            backgroundColor: "transparent",
            textTransform: "uppercase",
        },
        ".toast__button:focus": {
            outline: "none",
        },
        ".toast__button:active": {
            opacity: "0.4",
        },
        ".toast--material": {
            left: "0",
            right: "0",
            bottom: "0",
            margin: "0",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            fallbacks: [
                {
                    backgroundColor: "#000000",
                },
            ],
            borderRadius: "0",
            padding: "16px 24px",
        },
        ".toast--material__message": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            margin: "0 24px 0 0",
        },
        ".toast--material__button": {
            fontFamily: '"Roboto", "Noto", sans-serif',
            webkitFontSmoothing: "antialiased",
            fontWeight: "400",
            color: "#4a148c",
        },
        ".toolbar + .page__background": {
            top: "44px",
        },
        ".toolbar + .page__background + .page__content": {
            top: "44px",
            paddingTop: "0",
        },
        ".page-with-bottom-toolbar > .page__content": {
            bottom: "44px",
        },
        ".toolbar.toolbar--material + .page__background": {
            top: "56px",
        },
        ".toolbar.toolbar--material + .page__background + .page__content": {
            top: "56px",
            paddingTop: "0",
        },
        ".toolbar.toolbar--transparent + .page__background": {
            top: "0",
        },
        ".toolbar.toolbar--transparent.toolbar--cover-content + .page__background + .page__content, .toolbar.toolbar--transparent.toolbar--cover-content\r\n  + .page__background\r\n  + .page__content\r\n  .page_content": {
            top: "0",
            paddingTop: "44px",
        },
        ".toolbar.toolbar--material.toolbar--transparent.toolbar--cover-content\r\n  + .page__background\r\n  + .page__content, .toolbar.toolbar--material.toolbar--transparent.toolbar--cover-content\r\n  + .page__background\r\n  + .page__content\r\n  .page_content": {
            top: "0",
            paddingTop: "56px",
        },
        ".tabbar:not(.tabbar--top)": {
            paddingBottom: "0",
        },
        "@media (orientation: landscape)": {
            "html[onsflag-iphonex-landscape] .page__content": {
                paddingLeft: "44px",
                paddingRight: "44px",
                bottom: "0",
                paddingBottom: "21px",
            },
            "html[onsflag-iphonex-landscape] .dialog .page__content, html[onsflag-iphonex-landscape] .modal .page__content": {
                paddingLeft: "0",
                paddingRight: "0",
            },
            "html[onsflag-iphonex-landscape] .toolbar__left": {
                paddingLeft: "44px",
            },
            "html[onsflag-iphonex-landscape] .toolbar__right": {
                paddingRight: "44px",
            },
            "html[onsflag-iphonex-landscape] .bottom-bar": {
                paddingRight: "44px",
                paddingLeft: "44px",
                bottom: "0",
                boxSizing: "content-box",
                paddingBottom: "21px",
            },
            "html[onsflag-iphonex-landscape] .tabbar": {
                paddingLeft: "44px",
                paddingRight: "44px",
                width: "calc(100% - 88px)",
            },
            "html[onsflag-iphonex-landscape] .fab--bottom__left, html[onsflag-iphonex-landscape] .fab--bottom__center, html[onsflag-iphonex-landscape] .fab--bottom__right": {
                bottom: "21px",
            },
            "html[onsflag-iphonex-landscape] .fab--top__left, html[onsflag-iphonex-landscape] .fab--bottom__left": {
                left: "44px",
            },
            "html[onsflag-iphonex-landscape] .fab--top__right, html[onsflag-iphonex-landscape] .fab--bottom__right": {
                right: "44px",
            },
            "html[onsflag-iphonex-landscape] .action-sheet": {
                left: "calc((100vw - 100vh + 20px) / 2)",
                right: "calc((100vw - 100vh + 20px) / 2)",
                bottom: "33px",
            },
            "html[onsflag-iphonex-landscape] .toast": {
                left: "52px",
                right: "52px",
                bottom: "21px",
            },
            "html[onsflag-iphonex-landscape] .dialog .bottom-bar, html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content .bottom-bar, html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) .bottom-bar": {
                bottom: "0",
                boxSizing: "border-box",
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-landscape] .dialog .page__content, html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content .page__content, html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) .page__content, html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content": {
                bottom: "0",
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content": {
                bottom: "65px",
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-landscape] .dialog .page-with-bottom-toolbar > .page__content, html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content .page-with-bottom-toolbar > .page__content, html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) .page-with-bottom-toolbar > .page__content": {
                bottom: "44px",
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-landscape] .tabbar:not(.tabbar--top)": {
                paddingBottom: "21px",
            },
            "html[onsflag-iphonex-landscape] .dialog .tabbar:not(.tabbar--top), html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content .tabbar:not(.tabbar--top), html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) .tabbar:not(.tabbar--top)": {
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content)": {
                bottom: "70px",
            },
            "html[onsflag-iphonex-landscape] .dialog .tabbar__content:not(.tabbar--top__content), html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content .tabbar__content:not(.tabbar--top__content), html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) .tabbar__content:not(.tabbar--top__content)": {
                bottom: "49px",
            },
            "html[onsflag-iphonex-landscape] .page__content > .list:not(.list--inset)": {
                marginLeft: "-44px",
                marginRight: "-44px",
            },
            "html[onsflag-iphonex-landscape] .page__content > .list:not(.list--inset) > .list-header": {
                paddingLeft: "59px",
            },
            "html[onsflag-iphonex-landscape] .page__content > .list:not(.list--inset) > .list-item": {
                paddingLeft: "58px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item--chevron:before": {
                right: "60px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item__center:last-child": {
                paddingRight: "50px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item__right": {
                paddingRight: "56px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item--chevron__right": {
                paddingRight: "74px",
            },
            "html[onsflag-iphonex-landscape] .dialog .page__content > .list:not(.list--inset)": {
                marginLeft: "0",
                marginRight: "0",
            },
            "html[onsflag-iphonex-landscape] .dialog .page__content > .list:not(.list--inset) > .list-header": {
                paddingLeft: "15px",
            },
            "html[onsflag-iphonex-landscape] .dialog .page__content > .list:not(.list--inset) > .list-item": {
                paddingLeft: "14px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item--chevron:before": {
                right: "16px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item__center:last-child": {
                paddingRight: "6px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item__right": {
                paddingRight: "12px",
            },
            "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item--chevron__right": {
                paddingRight: "30px",
            },
        },
        "@media (orientation: portrait)": {
            "html[onsflag-iphonex-portrait] .fab--top__left, html[onsflag-iphonex-portrait] .fab--top__center, html[onsflag-iphonex-portrait] .fab--top__right": {
                top: "64px",
            },
            "html[onsflag-iphonex-portrait] .fab--bottom__left, html[onsflag-iphonex-portrait] .fab--bottom__center, html[onsflag-iphonex-portrait] .fab--bottom__right": {
                bottom: "34px",
            },
            "html[onsflag-iphonex-portrait] .action-sheet": {
                bottom: "48px",
            },
            "html[onsflag-iphonex-portrait] .toast": {
                bottom: "34px",
            },
            "html[onsflag-iphonex-portrait] .toolbar": {
                top: "0",
                boxSizing: "content-box",
                paddingTop: "44px",
            },
            "html[onsflag-iphonex-portrait] .dialog .toolbar, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .toolbar, html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar": {
                top: "0",
                boxSizing: "border-box",
                paddingTop: "0",
            },
            "html[onsflag-iphonex-portrait] .bottom-bar": {
                bottom: "0",
                boxSizing: "content-box",
                paddingBottom: "34px",
            },
            "html[onsflag-iphonex-portrait] .dialog .bottom-bar, html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content .bottom-bar, html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) .bottom-bar": {
                bottom: "0",
                boxSizing: "border-box",
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-portrait] .page__content": {
                top: "0",
                paddingTop: "44px",
                bottom: "0",
                paddingBottom: "34px",
            },
            "html[onsflag-iphonex-portrait] .dialog .page__content, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .page__content, html[onsflag-iphonex-portrait] .tabbar--top__content .page__content, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content": {
                top: "0",
                paddingTop: "0",
            },
            "html[onsflag-iphonex-portrait] .dialog .page__content, html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content .page__content, html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) .page__content, html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content": {
                bottom: "0",
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content) + .page__background, html[onsflag-iphonex-portrait]\r\n    .toolbar:not(.toolbar--cover-content)\r\n    + .page__background\r\n    + .page__content": {
                top: "88px",
                paddingTop: "0",
            },
            "html[onsflag-iphonex-portrait] .dialog .toolbar:not(.toolbar--cover-content)+.page__background, html[onsflag-iphonex-portrait] .dialog .toolbar:not(.toolbar--cover-content)+.page__background+.page__content, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .toolbar:not(.toolbar--cover-content)+.page__background, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .toolbar:not(.toolbar--cover-content)+.page__background+.page__content, html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar:not(.toolbar--cover-content)+.page__background, html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar:not(.toolbar--cover-content)+.page__background+.page__content": {
                top: "44px",
                paddingTop: "0",
            },
            "html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content": {
                bottom: "78px",
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-portrait] .dialog .page-with-bottom-toolbar > .page__content, html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content .page-with-bottom-toolbar > .page__content, html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) .page-with-bottom-toolbar > .page__content": {
                bottom: "44px",
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-portrait]\r\n    .toolbar.toolbar--transparent.toolbar--cover-content\r\n    + .page__background\r\n    + .page__content, html[onsflag-iphonex-portrait]\r\n    .toolbar.toolbar--transparent.toolbar--cover-content\r\n    + .page__background\r\n    + .page__content\r\n    .page_content": {
                top: "0",
                paddingTop: "88px",
            },
            "html[onsflag-iphonex-portrait] .dialog .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content, html[onsflag-iphonex-portrait] .dialog .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content .page_content, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content .page__content, html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content, html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content .page_content": {
                top: "0",
                paddingTop: "44px",
            },
            "html[onsflag-iphonex-portrait] .tabbar--top": {
                paddingTop: "44px",
            },
            "html[onsflag-iphonex-portrait] .dialog .tabbar--top, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .tabbar--top, html[onsflag-iphonex-portrait] .tabbar--top__content .tabbar--top": {
                paddingTop: "0",
            },
            "html[onsflag-iphonex-portrait] .tabbar--top__content": {
                top: "93px",
            },
            "html[onsflag-iphonex-portrait] .dialog .tabbar--top__content, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .tabbar--top__content, html[onsflag-iphonex-portrait] .tabbar--top__content .tabbar--top__content": {
                top: "49px",
            },
            "html[onsflag-iphonex-portrait] .tabbar:not(.tabbar--top):not(.tabbar--top)": {
                paddingBottom: "34px",
            },
            "html[onsflag-iphonex-portrait] .dialog .tabbar:not(.tabbar--top):not(.tabbar--top), html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content .tabbar:not(.tabbar--top), html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) .tabbar:not(.tabbar--top)": {
                paddingBottom: "0",
            },
            "html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content)": {
                bottom: "83px",
            },
            "html[onsflag-iphonex-portrait] .dialog .tabbar__content:not(.tabbar--top__content), html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content .tabbar__content:not(.tabbar--top__content), html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) .tabbar__content:not(.tabbar--top__content)": {
                bottom: "49px",
            },
        },
    },
};
/* harmony default export */ const styles_theme = (theme);

// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(7302);
;// CONCATENATED MODULE: ./src/index.tsx










// Webpack CSS import







var Bootloader = /** @class */ (function () {
    function Bootloader() {
        this.mountNode = document.querySelector("app");
        this.getSharedPreferences = new native_SharedPreferences();
        this.log = new builders_Log(this.constructor.name);
    }
    Bootloader.prototype.loadStyle = function () {
        this.log.i("Setup theme");
        jss_esm/* default.setup */.ZP.setup((0,jss_preset_default_esm/* default */.Z)());
        jss_esm/* default.createStyleSheet */.ZP.createStyleSheet(styles_theme).attach();
    };
    Bootloader.prototype.loadActivity = function () {
        this.log.i("Loading MainActivty");
        react_dom.render((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)(activitys_MainActivity, {}), (0,jsx_runtime.jsx)(react_toastify_esm/* ToastContainer */.Ix, {})] }), this.mountNode);
    };
    Bootloader.prototype.init = function () {
        if (native_Constants.isAndroid) {
            if (!android.hasStoragePermission()) {
                android.requestStoargePermission();
            }
        }
        // Get's removed in non-beta
        var tempConfirm = window.confirm("Note! This app not not ready yet. You using currently the alpha (1) version of MMRL");
        if (tempConfirm) {
            this.getSharedPreferences.setPref("tempConfirm", "true");
        }
        else {
            this.log.w("User has not confirmed the dialog!");
        }
        this.log.i("Intitialze repo");
        if (this.getSharedPreferences.getPref("repo") == native_Constants.undefined) {
            this.log.e("No repo was found, set https://repo.dergoogler.com/modules.json as default repo");
            this.getSharedPreferences.setPref("repo", "https://repo.dergoogler.com/modules.json");
        }
        this.log.i("Selecting platform: Android");
        esm["default"].platform.select("android");
        this.loadStyle();
        this.loadActivity();
    };
    return Bootloader;
}());
new Bootloader().init();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			143: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcom_dergoogler_mmrl_web"] = self["webpackChunkcom_dergoogler_mmrl_web"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(4335)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
"use strict";
var __assign = (this && this.__assign) || function () {
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sandbox = exports.renderSandboxContent = exports.useSandboxScope = exports.useSandbox = void 0;
var react_1 = __importStar(require("react"));
var shared_1 = require("@samagrax/shared");
var react_2 = require("@samagrax/react");
var react_dom_1 = __importDefault(require("react-dom"));
var useSandbox = function (props) {
    var ref = (0, react_1.useRef)();
    var appCls = (0, react_2.usePrefix)('app');
    var designer = (0, react_2.useDesigner)();
    var workspace = (0, react_2.useWorkspace)();
    var layout = (0, react_2.useLayout)();
    var cssAssets = props.cssAssets || [];
    var jsAssets = props.jsAssets || [];
    var getCSSVar = function (name) {
        return getComputedStyle(document.querySelector(".".concat(appCls))).getPropertyValue(name);
    };
    (0, react_1.useEffect)(function () {
        var _a, _b;
        if (ref.current && workspace) {
            var styles = (_a = cssAssets === null || cssAssets === void 0 ? void 0 : cssAssets.map) === null || _a === void 0 ? void 0 : _a.call(cssAssets, function (css) {
                return "<link media=\"all\" rel=\"stylesheet\" href=\"".concat(css, "\" />");
            }).join('\n');
            var scripts = (_b = jsAssets === null || jsAssets === void 0 ? void 0 : jsAssets.map) === null || _b === void 0 ? void 0 : _b.call(jsAssets, function (js) {
                return "<script src=\"".concat(js, "\" type=\"text/javascript\" ></script>");
            }).join('\n');
            ref.current.contentWindow['__DESIGNABLE_SANDBOX_SCOPE__'] = props.scope;
            ref.current.contentWindow['__DESIGNABLE_LAYOUT__'] = layout;
            ref.current.contentWindow['__DESIGNABLE_ENGINE__'] = designer;
            ref.current.contentWindow['__DESIGNABLE_WORKSPACE__'] = workspace;
            ref.current.contentWindow['Formily'] = shared_1.globalThisPolyfill['Formily'];
            ref.current.contentWindow['Designable'] = shared_1.globalThisPolyfill['Designable'];
            ref.current.contentDocument.open();
            ref.current.contentDocument.write("\n      <!DOCTYPE html>\n        <head>\n          ".concat(styles, "\n        </head>\n        <style>\n          html{\n            overflow: overlay;\n          }\n          ::-webkit-scrollbar {\n            width: 5px;\n            height: 5px;\n          }\n          ::-webkit-scrollbar-thumb {\n            background-color:").concat(getCSSVar('--dn-scrollbar-color'), ";\n            border-radius: 0;\n            transition: all .25s ease-in-out;\n          }\n          ::-webkit-scrollbar-thumb:hover {\n            background-color: ").concat(getCSSVar('--dn-scrollbar-hover-color'), ";\n          }\n          body{\n            margin:0;\n            padding:0;\n            overflow-anchor: none;\n            user-select:none;\n            background-color:").concat(layout.theme === 'light' ? '#fff' : 'transparent', " !important;\n          }\n          html{\n            overflow-anchor: none;\n          }\n          .inherit-cusor * {\n            cursor: inherit !important;\n          }\n        </style>\n        <body>\n          <div id=\"__SANDBOX_ROOT__\"></div>\n          ").concat(scripts, "\n        </body>\n      </html>\n      "));
            ref.current.contentDocument.close();
        }
    }, [workspace]);
    return ref;
};
exports.useSandbox = useSandbox;
if (shared_1.globalThisPolyfill.frameElement) {
    //解决iframe内嵌如果iframe被移除，内部React无法回收内存的问题
    shared_1.globalThisPolyfill.addEventListener('unload', function () {
        react_dom_1.default.unmountComponentAtNode(document.getElementById('__SANDBOX_ROOT__'));
    });
}
var useSandboxScope = function () {
    return shared_1.globalThisPolyfill['__DESIGNABLE_SANDBOX_SCOPE__'];
};
exports.useSandboxScope = useSandboxScope;
var renderSandboxContent = function (render) {
    if ((0, shared_1.isFn)(render)) {
        react_dom_1.default.render(render((0, exports.useSandboxScope)()), document.getElementById('__SANDBOX_ROOT__'));
    }
};
exports.renderSandboxContent = renderSandboxContent;
var Sandbox = function (props) {
    var cssAssets = props.cssAssets, jsAssets = props.jsAssets, scope = props.scope, style = props.style, iframeProps = __rest(props, ["cssAssets", "jsAssets", "scope", "style"]);
    return react_1.default.createElement('iframe', __assign(__assign({}, iframeProps), { ref: (0, exports.useSandbox)(props), style: __assign({ height: '100%', width: '100%', border: 'none', display: 'block' }, style) }));
};
exports.Sandbox = Sandbox;

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
import React, { useRef, useEffect } from 'react';
import { isFn, globalThisPolyfill } from '@samagrax/shared';
import { useDesigner, useWorkspace, useLayout, usePrefix, } from '@samagrax/react';
import ReactDOM from 'react-dom';
export var useSandbox = function (props) {
    var ref = useRef();
    var appCls = usePrefix('app');
    var designer = useDesigner();
    var workspace = useWorkspace();
    var layout = useLayout();
    var cssAssets = props.cssAssets || [];
    var jsAssets = props.jsAssets || [];
    var getCSSVar = function (name) {
        return getComputedStyle(document.querySelector(".".concat(appCls))).getPropertyValue(name);
    };
    useEffect(function () {
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
            ref.current.contentWindow['Formily'] = globalThisPolyfill['Formily'];
            ref.current.contentWindow['Designable'] = globalThisPolyfill['Designable'];
            ref.current.contentDocument.open();
            ref.current.contentDocument.write("\n      <!DOCTYPE html>\n        <head>\n          ".concat(styles, "\n        </head>\n        <style>\n          html{\n            overflow: overlay;\n          }\n          ::-webkit-scrollbar {\n            width: 5px;\n            height: 5px;\n          }\n          ::-webkit-scrollbar-thumb {\n            background-color:").concat(getCSSVar('--dn-scrollbar-color'), ";\n            border-radius: 0;\n            transition: all .25s ease-in-out;\n          }\n          ::-webkit-scrollbar-thumb:hover {\n            background-color: ").concat(getCSSVar('--dn-scrollbar-hover-color'), ";\n          }\n          body{\n            margin:0;\n            padding:0;\n            overflow-anchor: none;\n            user-select:none;\n            background-color:").concat(layout.theme === 'light' ? '#fff' : 'transparent', " !important;\n          }\n          html{\n            overflow-anchor: none;\n          }\n          .inherit-cusor * {\n            cursor: inherit !important;\n          }\n        </style>\n        <body>\n          <div id=\"__SANDBOX_ROOT__\"></div>\n          ").concat(scripts, "\n        </body>\n      </html>\n      "));
            ref.current.contentDocument.close();
        }
    }, [workspace]);
    return ref;
};
if (globalThisPolyfill.frameElement) {
    //解决iframe内嵌如果iframe被移除，内部React无法回收内存的问题
    globalThisPolyfill.addEventListener('unload', function () {
        ReactDOM.unmountComponentAtNode(document.getElementById('__SANDBOX_ROOT__'));
    });
}
export var useSandboxScope = function () {
    return globalThisPolyfill['__DESIGNABLE_SANDBOX_SCOPE__'];
};
export var renderSandboxContent = function (render) {
    if (isFn(render)) {
        ReactDOM.render(render(useSandboxScope()), document.getElementById('__SANDBOX_ROOT__'));
    }
};
export var Sandbox = function (props) {
    var cssAssets = props.cssAssets, jsAssets = props.jsAssets, scope = props.scope, style = props.style, iframeProps = __rest(props, ["cssAssets", "jsAssets", "scope", "style"]);
    return React.createElement('iframe', __assign(__assign({}, iframeProps), { ref: useSandbox(props), style: __assign({ height: '100%', width: '100%', border: 'none', display: 'block' }, style) }));
};

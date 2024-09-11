"use strict";
var __extends = (this && this.__extends) || (function () {
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseClickDriver = void 0;
var shared_1 = require("@samagrax/shared");
var events_1 = require("../events");
var MouseClickDriver = /** @class */ (function (_super) {
    __extends(MouseClickDriver, _super);
    function MouseClickDriver() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.onMouseClick = function (e) {
            var target = e.target;
            if (target === null || target === void 0 ? void 0 : target.closest("*[".concat(_this.engine.props.clickStopPropagationAttrName, "]"))) {
                return;
            }
            _this.dispatch(new events_1.MouseClickEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                pageX: e.pageX,
                pageY: e.pageY,
                target: e.target,
                view: e.view,
            }));
        };
        _this.onMouseDoubleClick = function (e) {
            var target = e.target;
            if (target === null || target === void 0 ? void 0 : target.closest("*[".concat(_this.engine.props.clickStopPropagationAttrName, "]"))) {
                return;
            }
            _this.dispatch(new events_1.MouseDoubleClickEvent({
                clientX: e.clientX,
                clientY: e.clientY,
                pageX: e.pageX,
                pageY: e.pageY,
                target: e.target,
                view: e.view,
            }));
        };
        return _this;
    }
    MouseClickDriver.prototype.attach = function () {
        this.addEventListener('click', this.onMouseClick, {
            mode: 'onlyChild',
        });
        this.addEventListener('dblclick', this.onMouseDoubleClick, {
            mode: 'onlyChild',
        });
    };
    MouseClickDriver.prototype.detach = function () {
        this.removeEventListener('click', this.onMouseClick, {
            mode: 'onlyChild',
        });
        this.removeEventListener('dblclick', this.onMouseDoubleClick, {
            mode: 'onlyChild',
        });
    };
    return MouseClickDriver;
}(shared_1.EventDriver));
exports.MouseClickDriver = MouseClickDriver;

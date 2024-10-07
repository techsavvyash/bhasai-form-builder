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
exports.KeyboardDriver = void 0;
var shared_1 = require("@samagrax/shared");
var events_1 = require("../events");
function filter(event) {
    var target = event.target;
    var tagName = target.tagName;
    var flag = true;
    // ignore: isContentEditable === 'true', <input> and <textarea> when readOnly state is false, <select>、Web Components
    if (target['isContentEditable'] ||
        ((tagName === 'INPUT' ||
            tagName === 'TEXTAREA' ||
            tagName === 'SELECT' ||
            customElements.get(tagName.toLocaleLowerCase())) &&
            !target.readOnly)) {
        flag = false;
    }
    return flag;
}
var KeyboardDriver = /** @class */ (function (_super) {
    __extends(KeyboardDriver, _super);
    function KeyboardDriver() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.onKeyDown = function (e) {
            if (!filter(e))
                return;
            _this.dispatch(new events_1.KeyDownEvent(e));
        };
        _this.onKeyUp = function (e) {
            _this.dispatch(new events_1.KeyUpEvent(e));
        };
        return _this;
    }
    KeyboardDriver.prototype.attach = function () {
        this.addEventListener('keydown', this.onKeyDown, {
            mode: 'onlyParent',
        });
        this.addEventListener('keyup', this.onKeyUp, {
            mode: 'onlyParent',
        });
    };
    KeyboardDriver.prototype.detach = function () {
        this.removeEventListener('keydown', this.onKeyDown, {
            mode: 'onlyParent',
        });
        this.removeEventListener('keyup', this.onKeyUp, {
            mode: 'onlyParent',
        });
    };
    return KeyboardDriver;
}(shared_1.EventDriver));
exports.KeyboardDriver = KeyboardDriver;

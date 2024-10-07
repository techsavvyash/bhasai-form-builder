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
import { EventDriver } from '@samagrax/shared';
import { ViewportResizeEvent } from '../events';
import { ResizeObserver } from '@juggle/resize-observer';
import { globalThisPolyfill } from '@samagrax/shared';
var ViewportResizeDriver = /** @class */ (function (_super) {
    __extends(ViewportResizeDriver, _super);
    function ViewportResizeDriver() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.request = null;
        _this.resizeObserver = null;
        _this.onResize = function (e) {
            if (e.preventDefault)
                e.preventDefault();
            _this.request = requestAnimationFrame(function () {
                cancelAnimationFrame(_this.request);
                _this.dispatch(new ViewportResizeEvent({
                    scrollX: _this.contentWindow.scrollX,
                    scrollY: _this.contentWindow.scrollY,
                    width: _this.contentWindow.innerWidth,
                    height: _this.contentWindow.innerHeight,
                    innerHeight: _this.contentWindow.innerHeight,
                    innerWidth: _this.contentWindow.innerWidth,
                    view: _this.contentWindow,
                    target: e.target || _this.container,
                }));
            });
        };
        return _this;
    }
    ViewportResizeDriver.prototype.attach = function () {
        if (this.contentWindow && this.contentWindow !== globalThisPolyfill) {
            this.addEventListener('resize', this.onResize);
        }
        else {
            if (this.container && this.container !== document) {
                this.resizeObserver = new ResizeObserver(this.onResize);
                this.resizeObserver.observe(this.container);
            }
        }
    };
    ViewportResizeDriver.prototype.detach = function () {
        if (this.contentWindow && this.contentWindow !== globalThisPolyfill) {
            this.removeEventListener('resize', this.onResize);
        }
        else if (this.resizeObserver) {
            if (this.container && this.container !== document) {
                this.resizeObserver.unobserve(this.container);
                this.resizeObserver.disconnect();
            }
        }
    };
    return ViewportResizeDriver;
}(EventDriver));
export { ViewportResizeDriver };

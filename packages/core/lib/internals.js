"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrowserLanguage = exports.mergeLocales = exports.lowerSnake = void 0;
var shared_1 = require("@samagrax/shared");
var shared_2 = require("@samagrax/shared");
var lowerSnake = function (str) {
    return String(str).replace(/\s+/g, '_').toLocaleLowerCase();
};
exports.lowerSnake = lowerSnake;
var mergeLocales = function (target, source) {
    if ((0, shared_1.isPlainObj)(target) && (0, shared_1.isPlainObj)(source)) {
        (0, shared_1.each)(source, function (value, key) {
            var token = (0, exports.lowerSnake)(key);
            var messages = (0, exports.mergeLocales)(target[key] || target[token], value);
            target[token] = messages;
        });
        return target;
    }
    else if ((0, shared_1.isPlainObj)(source)) {
        var result_1 = Array.isArray(source) ? [] : {};
        (0, shared_1.each)(source, function (value, key) {
            var messages = (0, exports.mergeLocales)(undefined, value);
            result_1[(0, exports.lowerSnake)(key)] = messages;
        });
        return result_1;
    }
    return source;
};
exports.mergeLocales = mergeLocales;
var getBrowserLanguage = function () {
    var _a;
    /* istanbul ignore next */
    if (!shared_2.globalThisPolyfill.navigator) {
        return 'en';
    }
    return (shared_2.globalThisPolyfill.navigator['browserlanguage'] ||
        ((_a = shared_2.globalThisPolyfill.navigator) === null || _a === void 0 ? void 0 : _a.language) ||
        'en');
};
exports.getBrowserLanguage = getBrowserLanguage;

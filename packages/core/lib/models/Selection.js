"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Selection = void 0;
var reactive_1 = require("@formily/reactive");
var events_1 = require("../events");
var shared_1 = require("@samagrax/shared");
var Selection = /** @class */ (function () {
    function Selection(props) {
        this.selected = [];
        this.indexes = {};
        if (props.selected) {
            this.selected = props.selected;
        }
        if (props.operation) {
            this.operation = props.operation;
        }
        this.makeObservable();
    }
    Selection.prototype.makeObservable = function () {
        (0, reactive_1.define)(this, {
            selected: reactive_1.observable,
            select: reactive_1.action,
            batchSelect: reactive_1.action,
            add: reactive_1.action,
            remove: reactive_1.action,
            clear: reactive_1.action,
            crossAddTo: reactive_1.action,
        });
    };
    Selection.prototype.trigger = function (type) {
        if (type === void 0) { type = events_1.SelectNodeEvent; }
        return this.operation.dispatch(new type({
            target: this.operation.tree,
            source: this.selectedNodes,
        }));
    };
    Selection.prototype.select = function (id) {
        var _a;
        if ((0, shared_1.isStr)(id)) {
            if (this.selected.length === 1 && this.selected.includes(id)) {
                this.trigger(events_1.SelectNodeEvent);
                return;
            }
            this.selected = [id];
            this.indexes = (_a = {}, _a[id] = true, _a);
            this.trigger(events_1.SelectNodeEvent);
        }
        else {
            this.select(id === null || id === void 0 ? void 0 : id.id);
        }
    };
    Selection.prototype.safeSelect = function (id) {
        if (!id)
            return;
        this.select(id);
    };
    Selection.prototype.mapIds = function (ids) {
        return (0, shared_1.isArr)(ids)
            ? ids.map(function (node) { return ((0, shared_1.isStr)(node) ? node : node === null || node === void 0 ? void 0 : node.id); })
            : [];
    };
    Selection.prototype.batchSelect = function (ids) {
        this.selected = this.mapIds(ids);
        this.indexes = this.selected.reduce(function (buf, id) {
            buf[id] = true;
            return buf;
        }, {});
        this.trigger(events_1.SelectNodeEvent);
    };
    Selection.prototype.batchSafeSelect = function (ids) {
        if (!(ids === null || ids === void 0 ? void 0 : ids.length))
            return;
        this.batchSelect(ids);
    };
    Object.defineProperty(Selection.prototype, "selectedNodes", {
        get: function () {
            var _this = this;
            return this.selected.map(function (id) { return _this.operation.tree.findById(id); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "first", {
        get: function () {
            if (this.selected && this.selected.length)
                return this.selected[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "last", {
        get: function () {
            if (this.selected && this.selected.length)
                return this.selected[this.selected.length - 1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "length", {
        get: function () {
            return this.selected.length;
        },
        enumerable: false,
        configurable: true
    });
    Selection.prototype.add = function () {
        var _this = this;
        var ids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ids[_i] = arguments[_i];
        }
        this.mapIds(ids).forEach(function (id) {
            if ((0, shared_1.isStr)(id)) {
                if (!_this.selected.includes(id)) {
                    _this.selected.push(id);
                    _this.indexes[id] = true;
                }
            }
            else {
                _this.add(id === null || id === void 0 ? void 0 : id.id);
            }
        });
        this.trigger();
    };
    Selection.prototype.crossAddTo = function (node) {
        var _this = this;
        if (node.parent) {
            var selectedNodes = this.selectedNodes;
            if (this.has(node)) {
                this.remove(node);
            }
            else {
                var minDistanceNode = selectedNodes.reduce(function (minDistanceNode, item) {
                    return item.distanceTo(node) < minDistanceNode.distanceTo(node)
                        ? item
                        : minDistanceNode;
                }, selectedNodes[0]);
                if (minDistanceNode) {
                    var crossNodes = node.crossSiblings(minDistanceNode);
                    crossNodes.forEach(function (node) {
                        if (!_this.has(node.id)) {
                            _this.selected.push(node.id);
                            _this.indexes[node.id] = true;
                        }
                    });
                }
                if (!this.has(node.id)) {
                    this.selected.push(node.id);
                    this.indexes[node.id] = true;
                }
            }
        }
    };
    Selection.prototype.remove = function () {
        var _this = this;
        var ids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ids[_i] = arguments[_i];
        }
        this.mapIds(ids).forEach(function (id) {
            if ((0, shared_1.isStr)(id)) {
                _this.selected = _this.selected.filter(function (item) { return item !== id; });
                delete _this.indexes[id];
            }
            else {
                _this.remove(id === null || id === void 0 ? void 0 : id.id);
            }
        });
        this.trigger(events_1.UnSelectNodeEvent);
    };
    Selection.prototype.has = function () {
        var _this = this;
        var ids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ids[_i] = arguments[_i];
        }
        return this.mapIds(ids).some(function (id) {
            if ((0, shared_1.isStr)(id)) {
                return _this.indexes[id];
            }
            else {
                if (!(id === null || id === void 0 ? void 0 : id.id))
                    return false;
                return _this.has(id === null || id === void 0 ? void 0 : id.id);
            }
        });
    };
    Selection.prototype.clear = function () {
        this.selected = [];
        this.indexes = {};
        this.trigger(events_1.UnSelectNodeEvent);
    };
    return Selection;
}());
exports.Selection = Selection;

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = void 0;
var TreeNode_1 = require("./TreeNode");
var Workbench_1 = require("./Workbench");
var Cursor_1 = require("./Cursor");
var Keyboard_1 = require("./Keyboard");
var Screen_1 = require("./Screen");
var shared_1 = require("@samagrax/shared");
/**
 * 设计器引擎
 */
var Engine = /** @class */ (function (_super) {
    __extends(Engine, _super);
    function Engine(props) {
        var _this = _super.call(this, props) || this;
        _this.props = __assign(__assign({}, Engine.defaultProps), props);
        _this.init();
        _this.id = (0, shared_1.uid)();
        return _this;
    }
    Engine.prototype.init = function () {
        this.workbench = new Workbench_1.Workbench(this);
        this.screen = new Screen_1.Screen(this);
        this.cursor = new Cursor_1.Cursor(this);
        this.keyboard = new Keyboard_1.Keyboard(this);
    };
    Engine.prototype.setCurrentTree = function (tree) {
        if (this.workbench.currentWorkspace) {
            this.workbench.currentWorkspace.operation.tree.from(tree);
        }
    };
    Engine.prototype.getCurrentTree = function () {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.workbench) === null || _a === void 0 ? void 0 : _a.currentWorkspace) === null || _b === void 0 ? void 0 : _b.operation) === null || _c === void 0 ? void 0 : _c.tree;
    };
    Engine.prototype.getAllSelectedNodes = function () {
        var results = [];
        for (var i = 0; i < this.workbench.workspaces.length; i++) {
            var workspace = this.workbench.workspaces[i];
            results = results.concat(workspace.operation.selection.selectedNodes);
        }
        return results;
    };
    Engine.prototype.findNodeById = function (id) {
        return TreeNode_1.TreeNode.findById(id);
    };
    Engine.prototype.findMovingNodes = function () {
        var results = [];
        this.workbench.eachWorkspace(function (workspace) {
            var _a;
            (_a = workspace.operation.moveHelper.dragNodes) === null || _a === void 0 ? void 0 : _a.forEach(function (node) {
                if (!results.includes(node)) {
                    results.push(node);
                }
            });
        });
        return results;
    };
    Engine.prototype.createNode = function (node, parent) {
        return new TreeNode_1.TreeNode(node, parent);
    };
    Engine.prototype.mount = function () {
        this.attachEvents(shared_1.globalThisPolyfill);
    };
    Engine.prototype.unmount = function () {
        this.detachEvents();
    };
    Engine.defaultProps = {
        shortcuts: [],
        effects: [],
        drivers: [],
        rootComponentName: 'Root',
        sourceIdAttrName: 'data-designer-source-id',
        nodeIdAttrName: 'data-designer-node-id',
        contentEditableAttrName: 'data-content-editable',
        contentEditableNodeIdAttrName: 'data-content-editable-node-id',
        clickStopPropagationAttrName: 'data-click-stop-propagation',
        nodeSelectionIdAttrName: 'data-designer-node-helpers-id',
        nodeDragHandlerAttrName: 'data-designer-node-drag-handler',
        screenResizeHandlerAttrName: 'data-designer-screen-resize-handler',
        nodeResizeHandlerAttrName: 'data-designer-node-resize-handler',
        outlineNodeIdAttrName: 'data-designer-outline-node-id',
        nodeTranslateAttrName: 'data-designer-node-translate-handler',
        defaultScreenType: Screen_1.ScreenType.PC,
    };
    return Engine;
}(shared_1.Event));
exports.Engine = Engine;

import React from 'react';
import { Table } from '@alifd/next';
import { TreeNode, createBehavior, createResource } from '@samagrax/core';
import { useTreeNode, TreeNodeWidget, DroppableWidget, useNodeIdProps, } from '@samagrax/react';
import { ArrayBase } from '@formily/next';
import { observer } from '@formily/react';
import { LoadTemplate } from '../../common/LoadTemplate';
import cls from 'classnames';
import { queryNodesByComponentPath, hasNodeByComponentPath, findNodeByComponentPath, createEnsureTypeItemsNode, } from '../../shared';
import { useDropTemplate } from '../../hooks';
import { createArrayBehavior } from '../ArrayBase';
import './styles.less';
import { createVoidFieldSchema } from '../Field';
import { AllSchemas } from '../../schemas';
import { AllLocales } from '../../locales';
const ensureObjectItemsNode = createEnsureTypeItemsNode('object');
export const ArrayTable = observer((props) => {
    const node = useTreeNode();
    const nodeId = useNodeIdProps();
    useDropTemplate('ArrayTable', (source) => {
        const sortHandleNode = new TreeNode({
            componentName: 'Field',
            props: {
                type: 'void',
                'x-component': 'ArrayTable.Column',
                'x-component-props': {
                    title: `Title`,
                },
            },
            children: [
                {
                    componentName: 'Field',
                    props: {
                        type: 'void',
                        'x-component': 'ArrayTable.SortHandle',
                    },
                },
            ],
        });
        const indexNode = new TreeNode({
            componentName: 'Field',
            props: {
                type: 'void',
                'x-component': 'ArrayTable.Column',
                'x-component-props': {
                    title: `Title`,
                },
            },
            children: [
                {
                    componentName: 'Field',
                    props: {
                        type: 'void',
                        'x-component': 'ArrayTable.Index',
                    },
                },
            ],
        });
        const columnNode = new TreeNode({
            componentName: 'Field',
            props: {
                type: 'void',
                'x-component': 'ArrayTable.Column',
                'x-component-props': {
                    title: `Title`,
                },
            },
            children: source.map((node) => {
                node.props.title = undefined;
                return node;
            }),
        });
        const operationNode = new TreeNode({
            componentName: 'Field',
            props: {
                type: 'void',
                'x-component': 'ArrayTable.Column',
                'x-component-props': {
                    title: `Title`,
                },
            },
            children: [
                {
                    componentName: 'Field',
                    props: {
                        type: 'void',
                        'x-component': 'ArrayTable.Remove',
                    },
                },
                {
                    componentName: 'Field',
                    props: {
                        type: 'void',
                        'x-component': 'ArrayTable.MoveDown',
                    },
                },
                {
                    componentName: 'Field',
                    props: {
                        type: 'void',
                        'x-component': 'ArrayTable.MoveUp',
                    },
                },
            ],
        });
        const objectNode = new TreeNode({
            componentName: 'Field',
            props: {
                type: 'object',
            },
            children: [sortHandleNode, indexNode, columnNode, operationNode],
        });
        const additionNode = new TreeNode({
            componentName: 'Field',
            props: {
                type: 'void',
                title: 'Addition',
                'x-component': 'ArrayTable.Addition',
            },
        });
        return [objectNode, additionNode];
    });
    const columns = queryNodesByComponentPath(node, [
        'ArrayTable',
        '*',
        'ArrayTable.Column',
    ]);
    const additions = queryNodesByComponentPath(node, [
        'ArrayTable',
        'ArrayTable.Addition',
    ]);
    const defaultRowKey = () => {
        return node.id;
    };
    const renderTable = () => {
        if (node.children.length === 0)
            return React.createElement(DroppableWidget, null);
        return (React.createElement(ArrayBase, { disabled: true },
            React.createElement(Table, { size: "small", hasBorder: true, ...props, className: cls('ant-formily-array-table', props.className), style: { marginBottom: 10, ...props.style }, primaryKey: defaultRowKey(), dataSource: [{ id: '1' }] },
                columns.map((node) => {
                    const children = node.children.map((child) => {
                        return React.createElement(TreeNodeWidget, { node: child, key: child.id });
                    });
                    const props = node.props['x-component-props'];
                    return (React.createElement(Table.Column, { ...node.props['x-component-props'], dataIndex: node.id, title: React.createElement("div", { "data-content-editable": "x-component-props.title" }, props.title), className: `data-id:${node.id}`, key: node.id, "data-designer-node-id": node.id, cell: (_, key) => {
                            return (React.createElement(ArrayBase.Item, { key: key, index: key, record: null }, children.length > 0 ? children : 'Droppable'));
                        } }));
                }),
                columns.length === 0 && (React.createElement(Table.Column, { cell: () => React.createElement(DroppableWidget, null) }))),
            additions.map((child) => {
                return React.createElement(TreeNodeWidget, { node: child, key: child.id });
            })));
    };
    useDropTemplate('ArrayTable.Column', (source) => {
        return source.map((node) => {
            node.props.title = undefined;
            return node;
        });
    });
    return (React.createElement("div", { ...nodeId, className: "dn-array-table" },
        renderTable(),
        React.createElement(LoadTemplate, { actions: [
                {
                    title: node.getMessage('addIndex'),
                    icon: 'AddIndex',
                    onClick: () => {
                        if (hasNodeByComponentPath(node, [
                            'ArrayTable',
                            '*',
                            'ArrayTable.Column',
                            'ArrayTable.Index',
                        ]))
                            return;
                        const tableColumn = new TreeNode({
                            componentName: 'Field',
                            props: {
                                type: 'void',
                                'x-component': 'ArrayTable.Column',
                                'x-component-props': {
                                    title: `Title`,
                                },
                            },
                            children: [
                                {
                                    componentName: 'Field',
                                    props: {
                                        type: 'void',
                                        'x-component': 'ArrayTable.Index',
                                    },
                                },
                            ],
                        });
                        const sortNode = findNodeByComponentPath(node, [
                            'ArrayTable',
                            '*',
                            'ArrayTable.Column',
                            'ArrayTable.SortHandle',
                        ]);
                        if (sortNode) {
                            sortNode.parent.insertAfter(tableColumn);
                        }
                        else {
                            ensureObjectItemsNode(node).prepend(tableColumn);
                        }
                    },
                },
                {
                    title: node.getMessage('addColumn'),
                    icon: 'AddColumn',
                    onClick: () => {
                        const operationNode = findNodeByComponentPath(node, [
                            'ArrayTable',
                            '*',
                            'ArrayTable.Column',
                            (name) => {
                                return (name === 'ArrayTable.Remove' ||
                                    name === 'ArrayTable.MoveDown' ||
                                    name === 'ArrayTable.MoveUp');
                            },
                        ]);
                        const tableColumn = new TreeNode({
                            componentName: 'Field',
                            props: {
                                type: 'void',
                                'x-component': 'ArrayTable.Column',
                                'x-component-props': {
                                    title: `Title`,
                                },
                            },
                        });
                        if (operationNode) {
                            operationNode.parent.insertBefore(tableColumn);
                        }
                        else {
                            ensureObjectItemsNode(node).append(tableColumn);
                        }
                    },
                },
                {
                    title: node.getMessage('addOperation'),
                    icon: 'AddOperation',
                    onClick: () => {
                        const oldOperationNode = findNodeByComponentPath(node, [
                            'ArrayTable',
                            '*',
                            'ArrayTable.Column',
                            (name) => {
                                return (name === 'ArrayTable.Remove' ||
                                    name === 'ArrayTable.MoveDown' ||
                                    name === 'ArrayTable.MoveUp');
                            },
                        ]);
                        const oldAdditionNode = findNodeByComponentPath(node, [
                            'ArrayTable',
                            'ArrayTable.Addition',
                        ]);
                        if (!oldOperationNode) {
                            const operationNode = new TreeNode({
                                componentName: 'Field',
                                props: {
                                    type: 'void',
                                    'x-component': 'ArrayTable.Column',
                                    'x-component-props': {
                                        title: `Title`,
                                    },
                                },
                                children: [
                                    {
                                        componentName: 'Field',
                                        props: {
                                            type: 'void',
                                            'x-component': 'ArrayTable.Remove',
                                        },
                                    },
                                    {
                                        componentName: 'Field',
                                        props: {
                                            type: 'void',
                                            'x-component': 'ArrayTable.MoveDown',
                                        },
                                    },
                                    {
                                        componentName: 'Field',
                                        props: {
                                            type: 'void',
                                            'x-component': 'ArrayTable.MoveUp',
                                        },
                                    },
                                ],
                            });
                            ensureObjectItemsNode(node).append(operationNode);
                        }
                        if (!oldAdditionNode) {
                            const additionNode = new TreeNode({
                                componentName: 'Field',
                                props: {
                                    type: 'void',
                                    title: 'Addition',
                                    'x-component': 'ArrayTable.Addition',
                                },
                            });
                            ensureObjectItemsNode(node).insertAfter(additionNode);
                        }
                    },
                },
            ] })));
});
ArrayBase.mixin(ArrayTable);
ArrayTable.Behavior = createBehavior(createArrayBehavior('ArrayTable'), {
    name: 'ArrayTable.Column',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'ArrayTable.Column',
    designerProps: {
        droppable: true,
        allowDrop: (node) => node.props['type'] === 'object' &&
            node.parent?.props?.['x-component'] === 'ArrayTable',
        propsSchema: createVoidFieldSchema(AllSchemas.ArrayTable.Column),
    },
    designerLocales: AllLocales.ArrayTableColumn,
});
ArrayTable.Resource = createResource({
    icon: 'ArrayTableSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'array',
                'x-decorator': 'FormItem',
                'x-component': 'ArrayTable',
            },
        },
    ],
});

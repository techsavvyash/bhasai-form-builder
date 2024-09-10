import React, { Fragment } from 'react';
import { Card } from '@alifd/next';
import { TreeNode, createResource } from '@samagrax/core';
import { useTreeNode, TreeNodeWidget, DroppableWidget, useNodeIdProps, } from '@samagrax/react';
import { ArrayBase } from '@formily/next';
import { observer } from '@formily/react';
import { LoadTemplate } from '../../common/LoadTemplate';
import { useDropTemplate } from '../../hooks';
import { hasNodeByComponentPath, queryNodesByComponentPath, createEnsureTypeItemsNode, findNodeByComponentPath, createNodeId, } from '../../shared';
import { createArrayBehavior } from '../ArrayBase';
import cls from 'classnames';
import './styles.less';
const ensureObjectItemsNode = createEnsureTypeItemsNode('object');
const isArrayCardsOperation = (name) => name === 'ArrayCards.Remove' ||
    name === 'ArrayCards.MoveDown' ||
    name === 'ArrayCards.MoveUp';
export const ArrayCards = observer((props) => {
    const node = useTreeNode();
    const nodeId = useNodeIdProps();
    const designer = useDropTemplate('ArrayCards', (source) => {
        const indexNode = new TreeNode({
            componentName: node.componentName,
            props: {
                type: 'void',
                'x-component': 'ArrayCards.Index',
            },
        });
        const additionNode = new TreeNode({
            componentName: node.componentName,
            props: {
                type: 'void',
                title: 'Addition',
                'x-component': 'ArrayCards.Addition',
            },
        });
        const removeNode = new TreeNode({
            componentName: node.componentName,
            props: {
                type: 'void',
                title: 'Addition',
                'x-component': 'ArrayCards.Remove',
            },
        });
        const moveDownNode = new TreeNode({
            componentName: node.componentName,
            props: {
                type: 'void',
                title: 'Addition',
                'x-component': 'ArrayCards.MoveDown',
            },
        });
        const moveUpNode = new TreeNode({
            componentName: node.componentName,
            props: {
                type: 'void',
                title: 'Addition',
                'x-component': 'ArrayCards.MoveUp',
            },
        });
        const objectNode = new TreeNode({
            componentName: node.componentName,
            props: {
                type: 'object',
            },
            children: [indexNode, ...source, removeNode, moveDownNode, moveUpNode],
        });
        return [objectNode, additionNode];
    });
    const renderCard = () => {
        if (node.children.length === 0)
            return React.createElement(DroppableWidget, null);
        const additions = queryNodesByComponentPath(node, [
            'ArrayCards',
            'ArrayCards.Addition',
        ]);
        const indexes = queryNodesByComponentPath(node, [
            'ArrayCards',
            '*',
            'ArrayCards.Index',
        ]);
        const operations = queryNodesByComponentPath(node, [
            'ArrayCards',
            '*',
            isArrayCardsOperation,
        ]);
        const children = queryNodesByComponentPath(node, [
            'ArrayCards',
            '*',
            (name) => name.indexOf('ArrayCards.') === -1,
        ]);
        return (React.createElement(ArrayBase, { disabled: true },
            React.createElement(ArrayBase.Item, { index: 0, record: null },
                React.createElement(Card, { contentHeight: "auto", ...props, title: React.createElement(Fragment, null,
                        indexes.map((node, key) => (React.createElement(TreeNodeWidget, { key: key, node: node }))),
                        React.createElement("span", { "data-content-editable": "x-component-props.title" }, props.title)), className: cls('ant-formily-array-cards-item', props.className), extra: React.createElement(Fragment, null,
                        operations.map((node) => (React.createElement(TreeNodeWidget, { key: node.id, node: node }))),
                        props.extra) },
                    React.createElement("div", { ...createNodeId(designer, ensureObjectItemsNode(node).id) }, children.length ? (children.map((node) => (React.createElement(TreeNodeWidget, { key: node.id, node: node })))) : (React.createElement(DroppableWidget, null))))),
            additions.map((node) => (React.createElement(TreeNodeWidget, { key: node.id, node: node })))));
    };
    return (React.createElement("div", { ...nodeId, className: "dn-array-cards" },
        renderCard(),
        React.createElement(LoadTemplate, { actions: [
                {
                    title: node.getMessage('addIndex'),
                    icon: 'AddIndex',
                    onClick: () => {
                        if (hasNodeByComponentPath(node, [
                            'ArrayCards',
                            '*',
                            'ArrayCards.Index',
                        ]))
                            return;
                        const indexNode = new TreeNode({
                            componentName: node.componentName,
                            props: {
                                type: 'void',
                                'x-component': 'ArrayCards.Index',
                            },
                        });
                        ensureObjectItemsNode(node).append(indexNode);
                    },
                },
                {
                    title: node.getMessage('addOperation'),
                    icon: 'AddOperation',
                    onClick: () => {
                        const oldAdditionNode = findNodeByComponentPath(node, [
                            'ArrayCards',
                            'ArrayCards.Addition',
                        ]);
                        if (!oldAdditionNode) {
                            const additionNode = new TreeNode({
                                componentName: node.componentName,
                                props: {
                                    type: 'void',
                                    title: 'Addition',
                                    'x-component': 'ArrayCards.Addition',
                                },
                            });
                            ensureObjectItemsNode(node).insertAfter(additionNode);
                        }
                        const oldRemoveNode = findNodeByComponentPath(node, [
                            'ArrayCards',
                            '*',
                            'ArrayCards.Remove',
                        ]);
                        const oldMoveDownNode = findNodeByComponentPath(node, [
                            'ArrayCards',
                            '*',
                            'ArrayCards.MoveDown',
                        ]);
                        const oldMoveUpNode = findNodeByComponentPath(node, [
                            'ArrayCards',
                            '*',
                            'ArrayCards.MoveUp',
                        ]);
                        if (!oldRemoveNode) {
                            ensureObjectItemsNode(node).append(new TreeNode({
                                componentName: node.componentName,
                                props: {
                                    type: 'void',
                                    'x-component': 'ArrayCards.Remove',
                                },
                            }));
                        }
                        if (!oldMoveDownNode) {
                            ensureObjectItemsNode(node).append(new TreeNode({
                                componentName: node.componentName,
                                props: {
                                    type: 'void',
                                    'x-component': 'ArrayCards.MoveDown',
                                },
                            }));
                        }
                        if (!oldMoveUpNode) {
                            ensureObjectItemsNode(node).append(new TreeNode({
                                componentName: node.componentName,
                                props: {
                                    type: 'void',
                                    'x-component': 'ArrayCards.MoveUp',
                                },
                            }));
                        }
                    },
                },
            ] })));
});
ArrayBase.mixin(ArrayCards);
ArrayCards.Behavior = createArrayBehavior('ArrayCards');
ArrayCards.Resource = createResource({
    icon: 'ArrayCardsSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'array',
                'x-decorator': 'FormItem',
                'x-component': 'ArrayCards',
                'x-component-props': {
                    title: `Title`,
                },
            },
        },
    ],
});

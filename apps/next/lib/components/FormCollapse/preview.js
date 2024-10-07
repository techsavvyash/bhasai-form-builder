import React, { Fragment, useState } from 'react';
import { observer } from '@formily/react';
import { Collapse } from '@alifd/next';
import { TreeNode, createBehavior, createResource } from '@samagrax/core';
import { useTreeNode, useNodeIdProps, TreeNodeWidget, DroppableWidget, } from '@samagrax/react';
import { LoadTemplate } from '../../common/LoadTemplate';
import { useDropTemplate } from '../../hooks';
import { createVoidFieldSchema } from '../Field';
import { AllSchemas } from '../../schemas';
import { AllLocales } from '../../locales';
import { matchComponent } from '../../shared';
const parseCollapse = (parent) => {
    const panels = [];
    parent.children.forEach((node) => {
        if (matchComponent(node, 'FormCollapse.CollapsePanel')) {
            panels.push(node);
        }
    });
    return panels;
};
export const FormCollapse = observer((props) => {
    const [expandedKeys, setExpandedKeys] = useState([]);
    const node = useTreeNode();
    const nodeId = useNodeIdProps();
    const designer = useDropTemplate('FormCollapse', (source) => {
        const panelNode = new TreeNode({
            componentName: 'Field',
            props: {
                type: 'void',
                'x-component': 'FormCollapse.CollapsePanel',
                'x-component-props': {
                    title: `Unnamed Title`,
                },
            },
            children: source,
        });
        setExpandedKeys([...expandedKeys, panelNode.id]);
        return [panelNode];
    });
    const panels = parseCollapse(node);
    const renderCollapse = () => {
        if (!node.children?.length)
            return React.createElement(DroppableWidget, null);
        return (React.createElement(Collapse, { ...props, expandedKeys: panels.map((tab) => tab.id) }, panels.map((panel) => {
            const props = panel.props['x-component-props'] || {};
            return (React.createElement(Collapse.Panel, { ...props, style: { ...props.style }, title: React.createElement("span", { "data-content-editable": "x-component-props.title", "data-content-editable-node-id": panel.id }, props.title), key: panel.id }, React.createElement('div', {
                [designer.props.nodeIdAttrName]: panel.id,
                style: {
                    padding: '20px 0',
                },
            }, panel.children.length ? (React.createElement(TreeNodeWidget, { node: panel })) : (React.createElement(DroppableWidget, null)))));
        })));
    };
    return (React.createElement("div", { ...nodeId },
        renderCollapse(),
        React.createElement(LoadTemplate, { actions: [
                {
                    title: node.getMessage('addCollapsePanel'),
                    icon: 'AddPanel',
                    onClick: () => {
                        const collapsePanel = new TreeNode({
                            componentName: 'Field',
                            props: {
                                type: 'void',
                                'x-component': 'FormCollapse.CollapsePanel',
                                'x-component-props': {
                                    title: `Unnamed Title`,
                                },
                            },
                        });
                        node.append(collapsePanel);
                        setExpandedKeys([...expandedKeys, collapsePanel.id]);
                    },
                },
            ] })));
});
FormCollapse.CollapsePanel = (props) => {
    return React.createElement(Fragment, null, props.children);
};
FormCollapse.Behavior = createBehavior({
    name: 'FormCollapse',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'FormCollapse',
    designerProps: {
        droppable: true,
        allowAppend: (target, source) => target.children.length === 0 ||
            source.every((node) => node.props['x-component'] === 'FormCollapse.CollapsePanel'),
        propsSchema: createVoidFieldSchema(AllSchemas.FormCollapse),
    },
    designerLocales: AllLocales.FormCollapse,
}, {
    name: 'FormCollapse.CollapsePanel',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'FormCollapse.CollapsePanel',
    designerProps: {
        droppable: true,
        allowDrop: (node) => node.props['x-component'] === 'FormCollapse',
        propsSchema: createVoidFieldSchema(AllSchemas.FormCollapse.CollapsePanel),
    },
    designerLocales: AllLocales.FormCollapsePanel,
});
FormCollapse.Resource = createResource({
    icon: 'CollapseSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'void',
                'x-component': 'FormCollapse',
            },
        },
    ],
});

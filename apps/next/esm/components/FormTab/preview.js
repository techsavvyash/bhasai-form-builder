import React, { Fragment, useState } from 'react';
import { observer } from '@formily/react';
import { Tab } from '@alifd/next';
import { TreeNode, createBehavior, createResource } from '@samagrax/core';
import { useNodeIdProps, useTreeNode, TreeNodeWidget, DroppableWidget, } from '@samagrax/react';
import { LoadTemplate } from '../../common/LoadTemplate';
import { useDropTemplate } from '../../hooks';
import { createVoidFieldSchema } from '../Field';
import { AllSchemas } from '../../schemas';
import { AllLocales } from '../../locales';
import { matchComponent } from '../../shared';
const parseTabs = (parent) => {
    const tabs = [];
    parent.children.forEach((node) => {
        if (matchComponent(node, 'FormTab.TabPane')) {
            tabs.push(node);
        }
    });
    return tabs;
};
const getCorrectActiveKey = (activeKey, tabs) => {
    if (tabs.length === 0)
        return;
    if (tabs.some((node) => node.id === activeKey))
        return activeKey;
    return tabs[tabs.length - 1].id;
};
export const FormTab = observer((props) => {
    const [activeKey, setActiveKey] = useState();
    const nodeId = useNodeIdProps();
    const node = useTreeNode();
    const designer = useDropTemplate('FormTab', (source) => {
        return [
            new TreeNode({
                componentName: 'Field',
                props: {
                    type: 'void',
                    'x-component': 'FormTab.TabPane',
                    'x-component-props': {
                        title: `Unnamed Title`,
                    },
                },
                children: source,
            }),
        ];
    });
    const tabs = parseTabs(node);
    const renderTabs = () => {
        if (!node.children?.length)
            return React.createElement(DroppableWidget, null);
        return (React.createElement(Tab, { ...props, activeKey: getCorrectActiveKey(activeKey, tabs), onChange: (id) => {
                setActiveKey(id);
            } }, tabs.map((tab) => {
            const props = tab.props['x-component-props'] || {};
            return (React.createElement(Tab.Item, { ...props, style: { ...props.style }, title: React.createElement("span", { "data-content-editable": "x-component-props.title", "data-content-editable-node-id": tab.id }, props.title), key: tab.id }, React.createElement('div', {
                [designer.props.nodeIdAttrName]: tab.id,
                style: {
                    padding: '20px 0',
                },
            }, tab.children.length ? (React.createElement(TreeNodeWidget, { node: tab })) : (React.createElement(DroppableWidget, null)))));
        })));
    };
    return (React.createElement("div", { ...nodeId },
        renderTabs(),
        React.createElement(LoadTemplate, { actions: [
                {
                    title: node.getMessage('addTabPane'),
                    icon: 'AddPanel',
                    onClick: () => {
                        const tabPane = new TreeNode({
                            componentName: 'Field',
                            props: {
                                type: 'void',
                                'x-component': 'FormTab.TabPane',
                                'x-component-props': {
                                    title: `Unnamed Title`,
                                },
                            },
                        });
                        node.append(tabPane);
                        setActiveKey(tabPane.id);
                    },
                },
            ] })));
});
FormTab.TabPane = (props) => {
    return React.createElement(Fragment, null, props.children);
};
FormTab.Behavior = createBehavior({
    name: 'FormTab',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'FormTab',
    designerProps: {
        droppable: true,
        allowAppend: (target, source) => target.children.length === 0 ||
            source.every((node) => node.props['x-component'] === 'FormTab.TabPane'),
        propsSchema: createVoidFieldSchema(AllSchemas.FormTab),
    },
    designerLocales: AllLocales.FormTab,
}, {
    name: 'FormTab.TabPane',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'FormTab.TabPane',
    designerProps: {
        droppable: true,
        allowDrop: (node) => node.props['x-component'] === 'FormTab',
        propsSchema: createVoidFieldSchema(AllSchemas.FormTab.TabPane),
    },
    designerLocales: AllLocales.FormTabPane,
});
FormTab.Resource = createResource({
    icon: 'TabSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'void',
                'x-component': 'FormTab',
            },
        },
    ],
});

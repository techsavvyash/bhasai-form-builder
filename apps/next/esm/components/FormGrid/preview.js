import React from 'react';
import { FormGrid as FormilyGird } from '@formily/next';
import { TreeNode, createBehavior, createResource } from '@samagrax/core';
import { DroppableWidget, useTreeNode, useNodeIdProps, } from '@samagrax/react';
import { observer } from '@formily/reactive-react';
import { LoadTemplate } from '../../common/LoadTemplate';
import { createFieldSchema } from '../Field';
import { AllSchemas } from '../../schemas';
import { AllLocales } from '../../locales';
import './styles.less';
export const FormGrid = observer((props) => {
    const node = useTreeNode();
    const nodeId = useNodeIdProps();
    if (node.children.length === 0)
        return React.createElement(DroppableWidget, { ...props });
    return (React.createElement("div", { ...nodeId, className: "dn-grid" },
        React.createElement(FormilyGird, { ...props }, props.children),
        React.createElement(LoadTemplate, { actions: [
                {
                    title: node.getMessage('addGridColumn'),
                    icon: 'AddColumn',
                    onClick: () => {
                        const column = new TreeNode({
                            componentName: 'Field',
                            props: {
                                type: 'void',
                                'x-component': 'FormGrid.GridColumn',
                            },
                        });
                        node.append(column);
                    },
                },
            ] })));
});
FormGrid.GridColumn = observer(({ gridSpan, ...props }) => {
    return (React.createElement(DroppableWidget, { ...props, "data-grid-span": gridSpan }, props.children));
});
FormGrid.Behavior = createBehavior({
    name: 'FormGrid',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'FormGrid',
    designerProps: {
        droppable: true,
        allowDrop: (node) => node.props['x-component'] !== 'FormGrid',
        propsSchema: createFieldSchema(AllSchemas.FormGrid),
    },
    designerLocales: AllLocales.FormGrid,
}, {
    name: 'FormGrid.GridColumn',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'FormGrid.GridColumn',
    designerProps: {
        droppable: true,
        resizable: {
            width(node) {
                const span = Number(node.props['x-component-props']?.gridSpan ?? 1);
                return {
                    plus: () => {
                        if (span + 1 > 12)
                            return;
                        node.props['x-component-props'] =
                            node.props['x-component-props'] || {};
                        node.props['x-component-props'].gridSpan = span + 1;
                    },
                    minus: () => {
                        if (span - 1 < 1)
                            return;
                        node.props['x-component-props'] =
                            node.props['x-component-props'] || {};
                        node.props['x-component-props'].gridSpan = span - 1;
                    },
                };
            },
        },
        allowDrop: (node) => node.props['x-component'] === 'FormGrid',
        propsSchema: createFieldSchema(AllSchemas.FormGrid.GridColumn),
    },
    designerLocales: AllLocales.FormGridColumn,
});
FormGrid.Resource = createResource({
    icon: 'GridSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'void',
                'x-component': 'FormGrid',
            },
            children: [
                {
                    componentName: 'Field',
                    props: {
                        type: 'void',
                        'x-component': 'FormGrid.GridColumn',
                    },
                },
                {
                    componentName: 'Field',
                    props: {
                        type: 'void',
                        'x-component': 'FormGrid.GridColumn',
                    },
                },
                {
                    componentName: 'Field',
                    props: {
                        type: 'void',
                        'x-component': 'FormGrid.GridColumn',
                    },
                },
            ],
        },
    ],
});

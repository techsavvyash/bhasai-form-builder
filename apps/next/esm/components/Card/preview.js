import React from 'react';
import { Card as NextCard } from '@alifd/next';
import { createBehavior, createResource } from '@samagrax/core';
import { createVoidFieldSchema } from '../Field';
import { AllSchemas } from '../../schemas';
import { AllLocales } from '../../locales';
export const Card = (props) => {
    return (React.createElement(NextCard, { ...props, style: {
            ...props.style,
            minHeight: 300,
        }, contentHeight: "auto", title: React.createElement("span", { "data-content-editable": "x-component-props.title" }, props.title) }, props.children));
};
Card.Behavior = createBehavior({
    name: 'Card',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Card',
    designerProps: {
        droppable: true,
        propsSchema: createVoidFieldSchema(AllSchemas.Card),
    },
    designerLocales: AllLocales.Card,
});
Card.Resource = createResource({
    icon: 'CardSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'void',
                'x-component': 'Card',
                'x-component-props': {
                    title: 'Title',
                },
            },
        },
    ],
});

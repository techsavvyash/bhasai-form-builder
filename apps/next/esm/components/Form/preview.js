import React, { useMemo } from 'react';
import { createBehavior, createResource } from '@samagrax/core';
import { createForm } from '@formily/core';
import { observer } from '@formily/react';
import { Form as FormilyForm } from '@formily/next';
import { usePrefix } from '@samagrax/react';
import { AllSchemas } from '../../schemas';
import { AllLocales } from '../../locales';
import './styles.scss';
export const Form = observer((props) => {
    const prefix = usePrefix('designable-form');
    const form = useMemo(() => createForm({
        designable: true,
    }), []);
    return (React.createElement(FormilyForm, { ...props, style: { ...props.style }, className: prefix, form: form }, props.children));
});
Form.Behavior = createBehavior({
    name: 'Form',
    selector: (node) => node.componentName === 'Form',
    designerProps(node) {
        return {
            draggable: !node.isRoot,
            cloneable: !node.isRoot,
            deletable: !node.isRoot,
            droppable: true,
            propsSchema: {
                type: 'object',
                properties: {
                    ...AllSchemas.FormLayout.properties,
                    style: AllSchemas.CSSStyle,
                },
            },
            defaultProps: {
                labelCol: 6,
                wrapperCol: 12,
            },
        };
    },
    designerLocales: AllLocales.Form,
});
Form.Resource = createResource({
    title: { 'zh-CN': '表单', 'en-US': 'Form' },
    icon: 'FormLayoutSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'object',
                'x-component': 'Form',
            },
        },
    ],
});

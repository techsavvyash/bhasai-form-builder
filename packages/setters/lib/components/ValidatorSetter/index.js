import React from 'react';
import { observer, useField, SchemaContext, Schema, } from '@formily/react';
import { GlobalRegistry } from '@samagrax/core';
import { ArrayItems } from '@formily/antd';
import { FoldItem } from '@samagrax/react-settings-form';
import { Select } from 'antd';
const ValidatorSchema = {
    type: 'array',
    items: {
        type: 'object',
        'x-decorator': 'ArrayItems.Item',
        'x-decorator-props': {
            style: {
                alignItems: 'center',
                borderRadius: 3,
                paddingTop: 6,
                paddingBottom: 6,
            },
        },
        properties: {
            sortable: {
                type: 'void',
                'x-component': 'ArrayItems.SortHandle',
                'x-component-props': { style: { marginRight: 10 } },
            },
            drawer: {
                type: 'void',
                'x-component': 'DrawerSetter',
                properties: {
                    triggerType: {
                        type: 'string',
                        enum: ['onInput', 'onFocus', 'onBlur'],
                        'x-decorator': 'FormItem',
                        'x-component': 'Select',
                    },
                    validator: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'ValueInput',
                        'x-component-props': {
                            include: ['EXPRESSION'],
                        },
                    },
                    message: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'Input.TextArea',
                    },
                    format: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'Select',
                        'x-component-props': {
                            allowClear: true,
                        },
                    },
                    pattern: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-component-props': {
                            prefix: '/',
                            suffix: '/',
                        },
                    },
                    len: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'NumberPicker',
                    },
                    max: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'NumberPicker',
                    },
                    min: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'NumberPicker',
                    },
                    exclusiveMaximum: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'NumberPicker',
                    },
                    exclusiveMinimum: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'NumberPicker',
                    },
                    whitespace: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'Switch',
                    },
                    required: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'Switch',
                    },
                },
            },
            moveDown: {
                type: 'void',
                'x-component': 'ArrayItems.MoveDown',
                'x-component-props': { style: { marginLeft: 10 } },
            },
            moveUp: {
                type: 'void',
                'x-component': 'ArrayItems.MoveUp',
                'x-component-props': { style: { marginLeft: 5 } },
            },
            remove: {
                type: 'void',
                'x-component': 'ArrayItems.Remove',
                'x-component-props': { style: { marginLeft: 5 } },
            },
        },
    },
    properties: {
        addValidatorRules: {
            type: 'void',
            'x-component': 'ArrayItems.Addition',
            'x-component-props': {
                style: {
                    marginBottom: 10,
                },
            },
        },
    },
};
export const ValidatorSetter = observer((props) => {
    const field = useField();
    return (
    // @ts-ignore
    React.createElement(FoldItem, { label: field.title },
        React.createElement(FoldItem.Base, null,
            React.createElement(Select, { value: Array.isArray(props.value) ? undefined : props.value, onChange: props.onChange, allowClear: true, placeholder: GlobalRegistry.getDesignerMessage('SettingComponents.ValidatorSetter.pleaseSelect'), options: GlobalRegistry.getDesignerMessage('SettingComponents.ValidatorSetter.formats') })),
        React.createElement(FoldItem.Extra, null,
            React.createElement(SchemaContext.Provider, { value: new Schema(ValidatorSchema) },
                React.createElement(ArrayItems, null)))));
});

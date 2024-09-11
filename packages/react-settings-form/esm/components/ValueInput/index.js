/*
 * 支持文本、数字、布尔、表达式
 * Todo: JSON、富文本，公式
 */
import React from 'react';
import { createPolyInput } from '../PolyInput';
import { Input, Button, Popover, InputNumber, Select } from 'antd';
import { MonacoInput } from '../MonacoInput';
import { TextWidget } from '@samagrax/react';
const STARTTAG_REX = /<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;
const EXPRESSION_REX = /^\{\{([\s\S]*)\}\}$/;
const isNumber = (value) => typeof value === 'number';
const isBoolean = (value) => typeof value === 'boolean';
const isExpression = (value) => {
    return typeof value === 'string' && EXPRESSION_REX.test(value);
};
const isRichText = (value) => {
    return typeof value === 'string' && STARTTAG_REX.test(value);
};
const isNormalText = (value) => {
    return typeof value === 'string' && !isExpression(value) && !isRichText(value);
};
const takeNumber = (value) => {
    const num = String(value).replace(/[^\d\.]+/, '');
    if (num === '')
        return;
    return Number(num);
};
export const ValueInput = createPolyInput([
    {
        type: 'TEXT',
        icon: 'Text',
        component: Input,
        checker: isNormalText,
    },
    {
        type: 'EXPRESSION',
        icon: 'Expression',
        component: (props) => {
            return (React.createElement(Popover, { content: React.createElement("div", { style: {
                        width: 400,
                        height: 200,
                        marginLeft: -16,
                        marginRight: -16,
                        marginBottom: -12,
                    } },
                    React.createElement(MonacoInput, { ...props, language: "javascript.expression" })), trigger: "click" },
                React.createElement(Button, { block: true },
                    React.createElement(TextWidget, { token: "SettingComponents.ValueInput.expression" }))));
        },
        checker: isExpression,
        toInputValue: (value) => {
            if (!value || value === '{{}}')
                return;
            const matched = String(value).match(EXPRESSION_REX);
            return matched?.[1] || value || '';
        },
        toChangeValue: (value) => {
            if (!value || value === '{{}}')
                return;
            const matched = String(value).match(EXPRESSION_REX);
            return `{{${matched?.[1] || value || ''}}}`;
        },
    },
    {
        type: 'BOOLEAN',
        icon: 'Boolean',
        component: (props) => (React.createElement(Select, { ...props, options: [
                { label: 'True', value: true },
                { label: 'False', value: false },
            ] })),
        checker: isBoolean,
        toInputValue: (value) => {
            return !!value;
        },
        toChangeValue: (value) => {
            return !!value;
        },
    },
    {
        type: 'NUMBER',
        icon: 'Number',
        component: InputNumber,
        checker: isNumber,
        toInputValue: takeNumber,
        toChangeValue: takeNumber,
    },
]);

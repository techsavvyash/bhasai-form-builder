import React, { useState } from 'react';
import { TextWidget, usePrefix } from '@samagrax/react';
import { Menu } from 'antd';
import { MonacoInput } from '@samagrax/react-settings-form';
import { isPlainObj, reduce } from '@formily/shared';
import { FieldProperties } from './properties';
const template = (code) => {
    if (!code)
        return;
    return code.trim();
};
export const FieldPropertySetter = (props) => {
    const [selectKeys, setSelectKeys] = useState(['visible']);
    const prefix = usePrefix('field-property-setter');
    const value = { ...props.value };
    const parseExpression = (expression) => {
        if (!expression)
            return '';
        return String(expression).match(/^\{\{([\s\S]*)\}\}$/)?.[1] || '';
    };
    const filterEmpty = (value) => {
        return reduce(value, (buf, value, key) => {
            if (!value || value === '{{}}')
                return buf;
            buf[key] = value;
            return buf;
        }, {});
    };
    const currentProperty = FieldProperties.find((item) => item.key === selectKeys[0]);
    return (React.createElement("div", { className: prefix },
        React.createElement(Menu, { mode: "vertical", style: {
                width: 200,
                height: 300,
                paddingRight: 4,
                overflowY: 'auto',
                overflowX: 'hidden',
            }, defaultSelectedKeys: selectKeys, selectedKeys: selectKeys, onSelect: ({ selectedKeys }) => {
                setSelectKeys(selectedKeys);
            } }, FieldProperties.map((key) => {
            if (isPlainObj(key)) {
                return (React.createElement(Menu.Item, { key: key.key },
                    React.createElement(TextWidget, { token: `SettingComponents.ReactionsSetter.${
                        // @ts-ignore
                        key.key || key.token}` })));
            }
            return (React.createElement(Menu.Item, { key: key },
                React.createElement(TextWidget, { token: `SettingComponents.ReactionsSetter.${key}` })));
        })),
        React.createElement("div", { className: prefix + '-coder-wrapper' },
            React.createElement("div", { className: prefix + '-coder-start' },
                `$self.${selectKeys[0]} = (`,
                React.createElement("span", { style: {
                        fontSize: 14,
                        marginLeft: 10,
                        color: '#888',
                        fontWeight: 'normal',
                    } },
                    '//',
                    ' ',
                    React.createElement(TextWidget, { token: "SettingComponents.ReactionsSetter.expressionValueTypeIs" }),
                    ' ',
                    '`',
                    currentProperty?.type,
                    '`')),
            React.createElement("div", { className: prefix + '-coder' },
                React.createElement(MonacoInput, { key: selectKeys[0], language: "javascript.expression", extraLib: props.extraLib, helpCode: template(currentProperty?.helpCode), value: parseExpression(value[selectKeys[0]]), options: {
                        lineNumbers: 'off',
                        wordWrap: 'on',
                        glyphMargin: false,
                        folding: false,
                        lineDecorationsWidth: 0,
                        lineNumbersMinChars: 0,
                        minimap: {
                            enabled: false,
                        },
                    }, onChange: (expression) => {
                        props.onChange?.(filterEmpty({
                            ...value,
                            [selectKeys[0]]: `{{${expression}}}`,
                        }));
                    } })),
            React.createElement("div", { className: prefix + '-coder-end' }, `)`))));
};

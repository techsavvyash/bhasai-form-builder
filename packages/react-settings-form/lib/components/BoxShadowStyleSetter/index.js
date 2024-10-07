import React from 'react';
import { usePrefix } from '@samagrax/react';
import { useField, observer } from '@formily/react';
import { FoldItem } from '../FoldItem';
import { ColorInput } from '../ColorInput';
import { SizeInput } from '../SizeInput';
import { InputItems } from '../InputItems';
import cls from 'classnames';
export const BoxShadowStyleSetter = observer((props) => {
    const field = useField();
    const prefix = usePrefix('shadow-style-setter');
    const createBoxShadowConnector = (position) => {
        const splited = String(props.value || '')
            .trim()
            .split(' ');
        return {
            value: splited[position],
            onChange: (value) => {
                splited[position] = value;
                props.onChange?.(`${splited[0] || ''} ${splited[1] || ''} ${splited[2] || ''} ${splited[3] || ''} ${splited[4] || ''}`);
            },
        };
    };
    return (
    // @ts-ignore
    React.createElement(FoldItem, { className: cls(prefix, props.className), style: props.style, label: field.title },
        React.createElement(FoldItem.Base, null,
            React.createElement(ColorInput, { ...createBoxShadowConnector(4) })),
        React.createElement(FoldItem.Extra, null,
            React.createElement(InputItems, { width: "50%" },
                React.createElement(InputItems.Item, { icon: "AxisX" },
                    React.createElement(SizeInput, { exclude: ['inherit', 'auto'], ...createBoxShadowConnector(0) })),
                React.createElement(InputItems.Item, { icon: "AxisY" },
                    React.createElement(SizeInput, { exclude: ['inherit', 'auto'], ...createBoxShadowConnector(1) })),
                React.createElement(InputItems.Item, { icon: "Blur" },
                    React.createElement(SizeInput, { exclude: ['inherit', 'auto'], ...createBoxShadowConnector(2) })),
                React.createElement(InputItems.Item, { icon: "Shadow" },
                    React.createElement(SizeInput, { exclude: ['inherit', 'auto'], ...createBoxShadowConnector(3) }))))));
});

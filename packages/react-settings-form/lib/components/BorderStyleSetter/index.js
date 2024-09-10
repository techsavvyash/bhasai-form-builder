import React, { Fragment, useMemo } from 'react';
import { usePrefix } from '@samagrax/react';
import { camelCase } from '@formily/shared';
import { Select } from '@formily/antd';
import { observable } from '@formily/reactive';
import { useField, Field, observer } from '@formily/react';
import { FoldItem } from '../FoldItem';
import { ColorInput } from '../ColorInput';
import { SizeInput } from '../SizeInput';
import { PositionInput } from '../PositionInput';
import cls from 'classnames';
import './styles.less';
const Positions = ['center', 'top', 'right', 'bottom', 'left'];
const BorderStyleOptions = [
    {
        label: 'None',
        value: 'none',
    },
    {
        label: React.createElement("span", { className: "border-style-solid-line" }),
        value: 'solid',
    },
    {
        label: React.createElement("span", { className: "border-style-dashed-line" }),
        value: 'dashed',
    },
    {
        label: React.createElement("span", { className: "border-style-dotted-line" }),
        value: 'dotted',
    },
];
const createBorderProp = (position, key) => {
    const insert = position === 'center' ? '' : `-${position}`;
    return camelCase(`border${insert}-${key}`);
};
const parseInitPosition = (field) => {
    const basePath = field.address.parent();
    for (let i = 0; i < Positions.length; i++) {
        const position = Positions[i];
        const stylePath = `${basePath}.${createBorderProp(position, 'style')}`;
        const widthPath = `${basePath}.${createBorderProp(position, 'width')}`;
        const colorPath = `${basePath}.${createBorderProp(position, 'color')}`;
        if (field.query(stylePath).value() ||
            field.query(widthPath).value() ||
            field.query(colorPath).value()) {
            return position;
        }
    }
    return 'center';
};
export const BorderStyleSetter = observer(({ className, style }) => {
    const field = useField();
    const currentPosition = useMemo(() => observable({
        value: parseInitPosition(field),
    }), [field.value]);
    const prefix = usePrefix('border-style-setter');
    const createReaction = (position) => (field) => {
        field.display = currentPosition.value === position ? 'visible' : 'hidden';
        if (position !== 'center') {
            const borderStyle = field.query('.borderStyle').value();
            const borderWidth = field.query('.borderWidth').value();
            const borderColor = field.query('.borderColor').value();
            if (borderStyle || borderWidth || borderColor) {
                field.value = undefined;
            }
        }
    };
    return (
    // @ts-ignore
    React.createElement(FoldItem, { label: field.title },
        React.createElement(FoldItem.Extra, null,
            React.createElement("div", { className: cls(prefix, className), style: style },
                React.createElement("div", { className: prefix + '-position' },
                    React.createElement(PositionInput, { value: currentPosition.value, onChange: (value) => {
                            currentPosition.value = value;
                        } })),
                React.createElement("div", { className: prefix + '-input' }, Positions.map((position, key) => {
                    return (React.createElement(Fragment, { key: key },
                        React.createElement(Field, { name: createBorderProp(position, 'style'), basePath: field.address.parent(), dataSource: BorderStyleOptions, reactions: createReaction(position), component: [Select, { placeholder: 'Please Select' }] }),
                        React.createElement(Field, { name: createBorderProp(position, 'width'), basePath: field.address.parent(), reactions: createReaction(position), component: [SizeInput, { exclude: ['auto'] }] }),
                        React.createElement(Field, { name: createBorderProp(position, 'color'), basePath: field.address.parent(), reactions: createReaction(position), component: [ColorInput] })));
                }))))));
});

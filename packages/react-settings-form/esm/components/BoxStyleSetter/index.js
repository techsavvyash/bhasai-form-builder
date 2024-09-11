import React from 'react';
import { useField, observer } from '@formily/react';
import { usePrefix, IconWidget } from '@samagrax/react';
import { FoldItem } from '../FoldItem';
import { SizeInput } from '../SizeInput';
import { InputItems } from '../InputItems';
import cls from 'classnames';
const PositionMap = {
    top: 1,
    right: 2,
    bottom: 3,
    left: 4,
    all: 1,
};
const BoxRex = /([\d\.]+[^\d\s\.+-]+)(?:\s+([\d\.]+[^\d\s\.+-]+)(?:\s+([\d\.]+[^\d\s\.+-]+)(?:\s+([\d\.]+[^\d\s\.+-]+))?)?)?/;
export const BoxStyleSetter = observer((props) => {
    const field = useField();
    const prefix = usePrefix('box-style-setter');
    const createPositionHandler = (position, props) => {
        const matched = String(props.value).match(BoxRex) || [];
        const value = matched[PositionMap[position]];
        const v1 = matched[1];
        const v2 = matched[2];
        const v3 = matched[3];
        const v4 = matched[4];
        const allEqualls = v1 === v2 && v2 === v3 && v3 === v4;
        return {
            ...props,
            value: position === 'all' ? (allEqualls ? v1 : undefined) : value,
            onChange(value) {
                if (position === 'all') {
                    props.onChange?.(`${value || '0px'} ${value || '0px'} ${value || '0px'} ${value || '0px'}`);
                }
                else {
                    matched[PositionMap[position]] = value;
                    props.onChange?.(`${matched[1] || '0px'} ${matched[2] || '0px'} ${matched[3] || '0px'} ${matched[4] || '0px'}`);
                }
            },
        };
    };
    return (
    // @ts-ignore
    React.createElement(FoldItem, { className: cls(prefix, props.className), label: field.title },
        React.createElement(FoldItem.Base, null,
            React.createElement(SizeInput, { ...createPositionHandler('all', props), exclude: ['inherit', 'auto'] })),
        React.createElement(FoldItem.Extra, null,
            React.createElement(InputItems, { width: "50%" },
                React.createElement(InputItems.Item, { icon: props.labels[0] },
                    React.createElement(SizeInput, { ...createPositionHandler('top', props), exclude: ['inherit', 'auto'] })),
                React.createElement(InputItems.Item, { icon: props.labels[1] },
                    React.createElement(SizeInput, { ...createPositionHandler('right', props), exclude: ['inherit', 'auto'] })),
                React.createElement(InputItems.Item, { icon: props.labels[2] },
                    React.createElement(SizeInput, { ...createPositionHandler('bottom', props), exclude: ['inherit', 'auto'] })),
                React.createElement(InputItems.Item, { icon: props.labels[3] },
                    React.createElement(SizeInput, { ...createPositionHandler('left', props), exclude: ['inherit', 'auto'] }))))));
});
BoxStyleSetter.defaultProps = {
    labels: [
        React.createElement(IconWidget, { infer: "Top", size: 16, key: "1" }),
        React.createElement(IconWidget, { infer: "Right", size: 16, key: "2" }),
        React.createElement(IconWidget, { infer: "Bottom", size: 16, key: "3" }),
        React.createElement(IconWidget, { infer: "Left", size: 16, key: "4" }),
    ],
};

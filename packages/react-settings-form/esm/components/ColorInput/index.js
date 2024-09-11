import React, { useRef } from 'react';
import { Input, Popover } from 'antd';
import { usePrefix } from '@samagrax/react';
import { SketchPicker } from 'react-color';
import './styles.less';
export const ColorInput = (props) => {
    const container = useRef();
    const prefix = usePrefix('color-input');
    const color = props.value;
    return (React.createElement("div", { ref: container, className: prefix },
        React.createElement(Input, { value: props.value, onChange: (e) => {
                props.onChange?.(e.target.value);
            }, placeholder: "Color", prefix: React.createElement(Popover, { autoAdjustOverflow: true, trigger: "click", overlayInnerStyle: { padding: 0 }, getPopupContainer: () => container.current, content: React.createElement(SketchPicker, { color: color, onChange: ({ rgb }) => {
                        props.onChange?.(`rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`);
                    } }) },
                React.createElement("div", { className: prefix + '-color-tips', style: {
                        backgroundColor: color,
                    } })) })));
};

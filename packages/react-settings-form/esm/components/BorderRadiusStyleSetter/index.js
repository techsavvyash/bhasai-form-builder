import React from 'react';
import { IconWidget } from '@samagrax/react';
import { BoxStyleSetter } from '../BoxStyleSetter';
export const BorderRadiusStyleSetter = (props) => {
    return (React.createElement(BoxStyleSetter, { ...props, labels: [
            React.createElement(IconWidget, { infer: "TopLeft", size: 16, key: "1" }),
            React.createElement(IconWidget, { infer: "TopRight", size: 16, key: "2" }),
            React.createElement(IconWidget, { infer: "BottomRight", size: 16, key: "3" }),
            React.createElement(IconWidget, { infer: "BottomLeft", size: 16, key: "4" }),
        ] }));
};

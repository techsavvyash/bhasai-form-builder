import React from 'react';
import cls from 'classnames';
import { useDesigner, usePrefix } from '../../hooks';
import { IconWidget } from '../IconWidget';
export const TranslateHandler = (props) => {
    const designer = useDesigner();
    const prefix = usePrefix('aux-node-translate-handler');
    const createHandler = (value) => {
        return {
            [designer.props.nodeTranslateAttrName]: value,
            className: cls(prefix, value),
        };
    };
    const allowTranslate = props.node.allowTranslate();
    if (!allowTranslate)
        return null;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { ...createHandler('translate') },
            React.createElement(IconWidget, { infer: "FreeMove" }))));
};

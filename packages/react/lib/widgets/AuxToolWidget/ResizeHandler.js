import React from 'react';
import cls from 'classnames';
import { useDesigner, usePrefix } from '../../hooks';
export const ResizeHandler = (props) => {
    const designer = useDesigner();
    const prefix = usePrefix('aux-node-resize-handler');
    const createHandler = (value) => {
        return {
            [designer.props.nodeResizeHandlerAttrName]: value,
            className: cls(prefix, value),
        };
    };
    const allowResize = props.node.allowResize();
    if (!allowResize)
        return null;
    const allowX = allowResize.includes('x');
    const allowY = allowResize.includes('y');
    return (React.createElement(React.Fragment, null,
        allowX && React.createElement("div", { ...createHandler('left-center') }),
        allowX && React.createElement("div", { ...createHandler('right-center') }),
        allowY && React.createElement("div", { ...createHandler('center-top') }),
        allowY && React.createElement("div", { ...createHandler('center-bottom') }),
        allowX && allowY && React.createElement("div", { ...createHandler('left-top') }),
        allowY && allowY && React.createElement("div", { ...createHandler('right-top') }),
        allowX && allowY && React.createElement("div", { ...createHandler('left-bottom') }),
        allowY && allowY && React.createElement("div", { ...createHandler('right-bottom') })));
};

import React from 'react';
import { observer } from '@formily/reactive-react';
import { IconWidget } from '../IconWidget';
import { useDesigner, usePrefix } from '../../hooks';
import { Button } from 'antd';
export const DragHandler = observer(({ node, style }) => {
    const designer = useDesigner();
    const prefix = usePrefix('aux-drag-handler');
    if (node === node.root || !node.allowDrag())
        return null;
    const handlerProps = {
        [designer.props.nodeDragHandlerAttrName]: 'true',
    };
    return (React.createElement(Button, { ...handlerProps, className: prefix, style: style, type: "primary" },
        React.createElement(IconWidget, { infer: "Move" })));
});
DragHandler.displayName = 'DragHandler';

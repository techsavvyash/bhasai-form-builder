import React, { Fragment } from 'react';
import { useViewport, useMoveHelper, useCursor, useValidNodeOffsetRect, usePrefix, } from '../../hooks';
import { observer } from '@formily/reactive-react';
import { CursorStatus, ClosestPosition } from '@samagrax/core';
import cls from 'classnames';
const CoverRect = (props) => {
    const prefix = usePrefix('aux-cover-rect');
    const rect = useValidNodeOffsetRect(props.node);
    const createCoverStyle = () => {
        const baseStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none',
        };
        if (rect) {
            baseStyle.transform = `perspective(1px) translate3d(${rect.x}px,${rect.y}px,0)`;
            baseStyle.height = rect.height;
            baseStyle.width = rect.width;
        }
        return baseStyle;
    };
    return (React.createElement("div", { className: cls(prefix, {
            dragging: props.dragging,
            dropping: props.dropping,
        }), style: createCoverStyle() }));
};
export const Cover = observer(() => {
    const viewportMoveHelper = useMoveHelper();
    const viewport = useViewport();
    const cursor = useCursor();
    const renderDropCover = () => {
        if (!viewportMoveHelper.closestNode ||
            !viewportMoveHelper.closestNode?.allowAppend(viewportMoveHelper.dragNodes) ||
            viewportMoveHelper.viewportClosestDirection !== ClosestPosition.Inner)
            return null;
        return React.createElement(CoverRect, { node: viewportMoveHelper.closestNode, dropping: true });
    };
    if (cursor.status !== CursorStatus.Dragging)
        return null;
    return (React.createElement(Fragment, null,
        viewportMoveHelper.dragNodes.map((node) => {
            if (!node)
                return;
            if (!viewport.findElementById(node.id))
                return;
            return React.createElement(CoverRect, { key: node.id, node: node, dragging: true });
        }),
        renderDropCover()));
});
Cover.displayName = 'Cover';

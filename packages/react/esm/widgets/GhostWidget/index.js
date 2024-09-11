import React, { useRef, useEffect } from 'react';
import { useCursor, usePrefix, useDesigner } from '../../hooks';
import { CursorStatus } from '@samagrax/core';
import { autorun } from '@formily/reactive';
import { observer } from '@formily/reactive-react';
import { NodeTitleWidget } from '../NodeTitleWidget';
import './styles.less';
export const GhostWidget = observer(() => {
    const designer = useDesigner();
    const cursor = useCursor();
    const ref = useRef();
    const prefix = usePrefix('ghost');
    const movingNodes = designer.findMovingNodes();
    const firstNode = movingNodes[0];
    useEffect(() => autorun(() => {
        const transform = `perspective(1px) translate3d(${cursor.position?.topClientX - 18}px,${cursor.position?.topClientY - 12}px,0) scale(0.8)`;
        if (!ref.current)
            return;
        ref.current.style.transform = transform;
    }), [designer, cursor]);
    const renderNodes = () => {
        return (React.createElement("span", { style: {
                whiteSpace: 'nowrap',
            } },
            React.createElement(NodeTitleWidget, { node: firstNode }),
            movingNodes.length > 1 ? '...' : ''));
    };
    if (!firstNode)
        return null;
    return cursor.status === CursorStatus.Dragging ? (React.createElement("div", { ref: ref, className: prefix }, renderNodes())) : null;
});
GhostWidget.displayName = 'GhostWidget';

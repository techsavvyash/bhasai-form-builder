import React from 'react';
import { observer } from '@formily/reactive-react';
import { useNodeIdProps, useTreeNode, DroppableWidget } from '@samagrax/react';
import './styles.less';
export const Container = observer((props) => {
    const node = useTreeNode();
    const nodeId = useNodeIdProps();
    if (node.children.length === 0)
        return React.createElement(DroppableWidget, { ...nodeId });
    return React.createElement("div", { ...nodeId }, props.children);
});
export const withContainer = (Target) => {
    return (props) => {
        return (React.createElement(DroppableWidget, null,
            React.createElement(Target, { ...props })));
    };
};

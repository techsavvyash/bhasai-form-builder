import React from 'react';
import { observer } from '@formily/reactive-react';
import { useTreeNode, useNodeIdProps } from '../../hooks';
import { NodeTitleWidget } from '../NodeTitleWidget';
import { NodeActionsWidget, } from '../NodeActionsWidget';
import './styles.less';
export const DroppableWidget = observer(({ node, actions, height, placeholder, style, className, hasChildren: hasChildrenProp, ...props }) => {
    const currentNode = useTreeNode();
    const nodeId = useNodeIdProps(node);
    const target = node ?? currentNode;
    const hasChildren = hasChildrenProp ?? target.children?.length > 0;
    return (React.createElement("div", { ...nodeId, ...props, className: className, style: style },
        hasChildren ? (props.children) : placeholder ? (React.createElement("div", { style: { height }, className: "dn-droppable-placeholder" },
            React.createElement(NodeTitleWidget, { node: target }))) : (props.children),
        actions?.length ? (React.createElement(NodeActionsWidget, null, actions.map((action, key) => (React.createElement(NodeActionsWidget.Action, { ...action, key: key }))))) : null));
});
DroppableWidget.defaultProps = {
    placeholder: true,
};

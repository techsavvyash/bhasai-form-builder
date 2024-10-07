import React from 'react';
import { usePrefix } from '../hooks';
export const WorkspacePanel = (props) => {
    const prefix = usePrefix('workspace-panel');
    return React.createElement("div", { className: prefix }, props.children);
};
WorkspacePanel.Item = (props) => {
    const prefix = usePrefix('workspace-panel-item');
    return (React.createElement("div", { className: prefix, style: {
            ...props.style,
            flexGrow: props.flexable ? 1 : 0,
            flexShrink: props.flexable ? 1 : 0,
        } }, props.children));
};

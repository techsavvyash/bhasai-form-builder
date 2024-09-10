import React from 'react';
import { WorkspacePanel } from './WorkspacePanel';
export const ToolbarPanel = (props) => {
    return (React.createElement(WorkspacePanel.Item, { ...props, style: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 4,
            padding: '0 4px',
            ...props.style,
        } }, props.children));
};

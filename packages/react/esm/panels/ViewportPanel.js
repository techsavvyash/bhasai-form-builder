import React from 'react';
import { WorkspacePanel } from './WorkspacePanel';
import { Simulator } from '../containers';
export const ViewportPanel = (props) => {
    return (React.createElement(WorkspacePanel.Item, { ...props, flexable: true },
        React.createElement(Simulator, null, props.children)));
};

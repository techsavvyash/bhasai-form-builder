import React from 'react';
export interface IWorkspaceItemProps {
    style?: React.CSSProperties;
    flexable?: boolean;
    children?: any;
}
export declare const WorkspacePanel: React.FC<IWorkspaceItemProps> & {
    Item?: React.FC<IWorkspaceItemProps>;
};

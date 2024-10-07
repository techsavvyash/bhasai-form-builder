import React from 'react';
export interface IWorkspaceProps {
    id?: string;
    title?: string;
    description?: string;
    children?: any;
}
export declare const Workspace: React.FC<IWorkspaceProps>;

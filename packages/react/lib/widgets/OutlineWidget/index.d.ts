import React from 'react';
import { TreeNode } from '@samagrax/core';
export interface IOutlineTreeWidgetProps {
    className?: string;
    style?: React.CSSProperties;
    onClose?: () => void;
    renderTitle?: (node: TreeNode) => React.ReactNode;
    renderActions?: (node: TreeNode) => React.ReactNode;
}
export declare const OutlineTreeWidget: React.FC<IOutlineTreeWidgetProps>;

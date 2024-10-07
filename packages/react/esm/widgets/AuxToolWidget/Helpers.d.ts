import React from 'react';
import { TreeNode } from '@samagrax/core';
export interface IHelpersProps {
    node: TreeNode;
    nodeRect: DOMRect;
}
export interface IViewportState {
    viewportWidth?: number;
    viewportHeight?: number;
    viewportScrollX?: number;
    viewportScrollY?: number;
    viewportIsScrollTop?: boolean;
    viewportIsScrollBottom?: boolean;
}
export declare const Helpers: React.FC<IHelpersProps>;

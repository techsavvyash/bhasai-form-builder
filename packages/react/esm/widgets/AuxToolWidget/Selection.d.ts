import React from 'react';
import { TreeNode } from '@samagrax/core';
export interface ISelectionBoxProps {
    node: TreeNode;
    showHelpers: boolean;
}
export declare const SelectionBox: React.FC<ISelectionBoxProps>;
export declare const Selection: React.MemoExoticComponent<import("@formily/reactive-react").ReactFC<unknown>>;

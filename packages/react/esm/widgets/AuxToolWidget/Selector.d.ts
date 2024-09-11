import React from 'react';
import { TreeNode } from '@samagrax/core';
export interface ISelectorProps {
    node: TreeNode;
    style?: React.CSSProperties;
}
export declare const Selector: React.FC<ISelectorProps>;

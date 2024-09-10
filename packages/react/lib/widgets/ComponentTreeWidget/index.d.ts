import React from 'react';
import { IDesignerComponents } from '../../types';
import { TreeNode } from '@samagrax/core';
import './styles.less';
export interface IComponentTreeWidgetProps {
    style?: React.CSSProperties;
    className?: string;
    components: IDesignerComponents;
}
export interface ITreeNodeWidgetProps {
    node: TreeNode;
    children?: any;
}
export declare const TreeNodeWidget: React.FC<ITreeNodeWidgetProps>;
export declare const ComponentTreeWidget: React.FC<IComponentTreeWidgetProps>;

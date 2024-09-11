import React from 'react';
import { TreeNode } from '@samagrax/core';
import { IconWidget } from '../IconWidget';
import { usePrefix } from '../../hooks';
import { Button } from 'antd';
export const Delete = ({ node, style }) => {
    const prefix = usePrefix('aux-copy');
    if (node === node.root)
        return null;
    return (React.createElement(Button, { className: prefix, style: style, type: "primary", onClick: () => {
            TreeNode.remove([node]);
        } },
        React.createElement(IconWidget, { infer: "Remove" })));
};
Delete.displayName = 'Delete';

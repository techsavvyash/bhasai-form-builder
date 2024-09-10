import React from 'react';
import { TreeNode } from '@samagrax/core';
import { usePrefix } from '../../hooks';
import { IconWidget } from '../IconWidget';
import { Button } from 'antd';
export const Copy = ({ node, style }) => {
    const prefix = usePrefix('aux-copy');
    if (node === node.root)
        return null;
    return (React.createElement(Button, { className: prefix, style: style, type: "primary", onClick: () => {
            TreeNode.clone([node]);
        } },
        React.createElement(IconWidget, { infer: "Clone" })));
};
Copy.displayName = 'Copy';

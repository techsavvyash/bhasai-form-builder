import React from 'react';
import { Space, Typography, Divider } from 'antd';
import { observer } from '@formily/reactive-react';
import { usePrefix, useTreeNode, useSelected } from '../../hooks';
import { IconWidget } from '../IconWidget';
import { TextWidget } from '../TextWidget';
import cls from 'classnames';
import './styles.less';
export const NodeActionsWidget = observer((props) => {
    const node = useTreeNode();
    const prefix = usePrefix('node-actions');
    const selected = useSelected();
    if (selected.indexOf(node.id) === -1 && props.activeShown)
        return null;
    return (React.createElement("div", { className: cls(prefix, props.className), style: props.style },
        React.createElement("div", { className: prefix + '-content' },
            React.createElement(Space, { split: React.createElement(Divider, { type: "vertical" }) }, props.children))));
});
NodeActionsWidget.Action = ({ icon, title, ...props }) => {
    const prefix = usePrefix('node-actions-item');
    return (React.createElement(Typography.Link, { ...props, className: cls(props.className, prefix), "data-click-stop-propagation": "true" },
        React.createElement("span", { className: prefix + '-text' },
            React.createElement(IconWidget, { infer: icon }),
            React.createElement(TextWidget, null, title))));
};

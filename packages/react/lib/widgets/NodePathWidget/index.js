import React from 'react';
import { Breadcrumb } from 'antd';
import { useSelectedNode, useSelection, usePrefix, useHover } from '../../hooks';
import { IconWidget } from '../IconWidget';
import { NodeTitleWidget } from '../NodeTitleWidget';
import { observer } from '@formily/reactive-react';
import './styles.less';
export const NodePathWidget = observer((props) => {
    const selected = useSelectedNode(props.workspaceId);
    const selection = useSelection(props.workspaceId);
    const hover = useHover(props.workspaceId);
    const prefix = usePrefix('node-path');
    if (!selected)
        return React.createElement(React.Fragment, null);
    const maxItems = props.maxItems ?? 3;
    const nodes = selected
        .getParents()
        .slice(0, maxItems - 1)
        .reverse()
        .concat(selected);
    return (React.createElement(Breadcrumb, { className: prefix }, nodes.map((node, key) => {
        return (React.createElement(Breadcrumb.Item, { key: key },
            key === 0 && (React.createElement(IconWidget, { infer: "Position", style: { marginRight: 3 } })),
            React.createElement("a", { href: "", onMouseEnter: () => {
                    hover.setHover(node);
                }, onClick: (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    selection.select(node);
                } },
                React.createElement(NodeTitleWidget, { node: node }))));
    })));
});

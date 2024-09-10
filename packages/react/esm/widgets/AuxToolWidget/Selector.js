import React, { useEffect, useState, useRef } from 'react';
import { useHover, useSelection, usePrefix } from '../../hooks';
import { IconWidget } from '../IconWidget';
import { NodeTitleWidget } from '../NodeTitleWidget';
import { Button } from 'antd';
import { observer } from '@formily/reactive-react';
const useMouseHover = (ref, enter, leave) => {
    useEffect(() => {
        let timer = null;
        let unmounted = false;
        const onMouseOver = (e) => {
            const target = e.target;
            clearTimeout(timer);
            timer = setTimeout(() => {
                if (unmounted)
                    return;
                if (ref?.current?.contains(target)) {
                    enter && enter();
                }
                else {
                    leave && leave();
                }
            }, 100);
        };
        document.addEventListener('mouseover', onMouseOver);
        return () => {
            unmounted = true;
            document.removeEventListener('mouseover', onMouseOver);
        };
    }, []);
};
export const Selector = observer(({ node }) => {
    const hover = useHover();
    const [expand, setExpand] = useState(false);
    const ref = useRef(null);
    const selection = useSelection();
    const prefix = usePrefix('aux-selector');
    const renderIcon = (node) => {
        const icon = node.designerProps.icon;
        if (icon) {
            return React.createElement(IconWidget, { infer: icon });
        }
        if (node === node.root) {
            return React.createElement(IconWidget, { infer: "Page" });
        }
        else if (node.designerProps?.droppable) {
            return React.createElement(IconWidget, { infer: "Container" });
        }
        return React.createElement(IconWidget, { infer: "Component" });
    };
    const renderMenu = () => {
        const parents = node.getParents();
        return (React.createElement("div", { className: prefix + '-menu', style: {
                position: 'absolute',
                top: '100%',
                left: 0,
            } }, parents.slice(0, 4).map((parent) => {
            return (React.createElement(Button, { key: parent.id, type: "primary", onClick: () => {
                    selection.select(parent.id);
                }, onMouseEnter: () => {
                    hover.setHover(parent);
                } },
                renderIcon(parent),
                React.createElement("span", { style: { transform: 'scale(0.85)', marginLeft: 2 } },
                    React.createElement(NodeTitleWidget, { node: parent }))));
        })));
    };
    useMouseHover(ref, () => {
        setExpand(true);
    }, () => {
        setExpand(false);
    });
    return (React.createElement("div", { ref: ref, className: prefix },
        React.createElement(Button, { className: prefix + '-title', type: "primary", onMouseEnter: () => {
                hover.setHover(node);
            } },
            renderIcon(node),
            React.createElement("span", null,
                React.createElement(NodeTitleWidget, { node: node }))),
        expand && renderMenu()));
});
Selector.displayName = 'Selector';

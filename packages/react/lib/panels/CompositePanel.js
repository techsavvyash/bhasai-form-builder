import React, { useEffect, useRef, useState } from 'react';
import { isValid } from '@samagrax/shared';
import cls from 'classnames';
import { IconWidget, TextWidget } from '../widgets';
import { usePrefix } from '../hooks';
const parseItems = (children) => {
    const items = [];
    React.Children.forEach(children, (child, index) => {
        if (child?.['type'] === CompositePanel.Item) {
            items.push({ key: child['key'] ?? index, ...child['props'] });
        }
    });
    return items;
};
const findItem = (items, key) => {
    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        if (key === index)
            return item;
        if (key === item.key)
            return item;
    }
};
const getDefaultKey = (children) => {
    const items = parseItems(children);
    return items?.[0].key;
};
export const CompositePanel = (props) => {
    const prefix = usePrefix('composite-panel');
    const [activeKey, setActiveKey] = useState(props.defaultActiveKey ?? getDefaultKey(props.children));
    const activeKeyRef = useRef(null);
    const [pinning, setPinning] = useState(props.defaultPinning ?? false);
    const [visible, setVisible] = useState(props.defaultOpen ?? true);
    const items = parseItems(props.children);
    const currentItem = findItem(items, activeKey);
    const content = currentItem?.children;
    activeKeyRef.current = activeKey;
    useEffect(() => {
        if (isValid(props.activeKey)) {
            if (props.activeKey !== activeKeyRef.current) {
                setActiveKey(props.activeKey);
            }
        }
    }, [props.activeKey]);
    const renderContent = () => {
        if (!content || !visible)
            return;
        return (React.createElement("div", { className: cls(prefix + '-tabs-content', {
                pinning,
            }) },
            React.createElement("div", { className: prefix + '-tabs-header' },
                React.createElement("div", { className: prefix + '-tabs-header-title' },
                    React.createElement(TextWidget, null, currentItem.title)),
                React.createElement("div", { className: prefix + '-tabs-header-actions' },
                    React.createElement("div", { className: prefix + '-tabs-header-extra' }, currentItem.extra),
                    !pinning && (React.createElement(IconWidget, { infer: "PushPinOutlined", className: prefix + '-tabs-header-pin', onClick: () => {
                            setPinning(!pinning);
                        } })),
                    pinning && (React.createElement(IconWidget, { infer: "PushPinFilled", className: prefix + '-tabs-header-pin-filled', onClick: () => {
                            setPinning(!pinning);
                        } })),
                    React.createElement(IconWidget, { infer: "Close", className: prefix + '-tabs-header-close', onClick: () => {
                            setVisible(false);
                        } }))),
            React.createElement("div", { className: prefix + '-tabs-body' }, content)));
    };
    return (React.createElement("div", { className: cls(prefix, {
            [`direction-${props.direction}`]: !!props.direction,
        }) },
        React.createElement("div", { className: prefix + '-tabs' }, items.map((item, index) => {
            const takeTab = () => {
                if (item.href) {
                    return React.createElement("a", { href: item.href }, item.icon);
                }
                return (React.createElement(IconWidget, { tooltip: props.showNavTitle
                        ? null
                        : {
                            title: React.createElement(TextWidget, null, item.title),
                            placement: props.direction === 'right' ? 'left' : 'right',
                        }, infer: item.icon }));
            };
            const shape = item.shape ?? 'tab';
            const Comp = shape === 'link' ? 'a' : 'div';
            return (React.createElement(Comp, { className: cls(prefix + '-tabs-pane', {
                    active: activeKey === item.key,
                }), key: index, href: item.href, onClick: (e) => {
                    if (shape === 'tab') {
                        if (activeKey === item.key) {
                            setVisible(!visible);
                        }
                        else {
                            setVisible(true);
                        }
                        if (!props?.activeKey || !props?.onChange)
                            setActiveKey(item.key);
                    }
                    item.onClick?.(e);
                    props.onChange?.(item.key);
                } },
                takeTab(),
                props.showNavTitle && item.title ? (React.createElement("div", { className: prefix + '-tabs-pane-title' },
                    React.createElement(TextWidget, null, item.title))) : null));
        })),
        renderContent()));
};
CompositePanel.Item = () => {
    return React.createElement(React.Fragment, null);
};

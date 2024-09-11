import React, { Fragment, useRef, useMemo } from 'react';
import { FormItem } from '@formily/antd';
import { useField, observer } from '@formily/react';
import { observable } from '@formily/reactive';
import { IconWidget, usePrefix } from '@samagrax/react';
import cls from 'classnames';
import './styles.less';
const ExpandedMap = new Map();
export const FoldItem = observer(({ className, style, children, ...props }) => {
    const prefix = usePrefix('fold-item');
    const field = useField();
    const expand = useMemo(() => observable.ref(ExpandedMap.get(field.address.toString())), []);
    const slots = useRef({ base: null, extra: null });
    React.Children.forEach(children, (node) => {
        if (React.isValidElement(node)) {
            if (node?.['type']?.['displayName'] === 'FoldItem.Base') {
                slots.current.base = node['props'].children;
            }
            if (node?.['type']?.['displayName'] === 'FoldItem.Extra') {
                slots.current.extra = node['props'].children;
            }
        }
    });
    return (React.createElement("div", { className: cls(prefix, className) },
        React.createElement("div", { className: prefix + '-base', onClick: () => {
                expand.value = !expand.value;
                ExpandedMap.set(field.address.toString(), expand.value);
            } },
            React.createElement(FormItem.BaseItem, { ...props, label: React.createElement("span", { className: cls(prefix + '-title', {
                        expand: expand.value,
                    }) },
                    slots.current.extra && React.createElement(IconWidget, { infer: "Expand", size: 10 }),
                    props.label) },
                React.createElement("div", { style: { width: '100%' }, onClick: (e) => {
                        e.stopPropagation();
                    } }, slots.current.base))),
        expand.value && slots.current.extra && (React.createElement("div", { className: prefix + '-extra' }, slots.current.extra))));
});
const Base = () => {
    return React.createElement(Fragment, null);
};
Base.displayName = 'FoldItem.Base';
const Extra = () => {
    return React.createElement(Fragment, null);
};
Extra.displayName = 'FoldItem.Extra';
FoldItem.Base = Base;
FoldItem.Extra = Extra;

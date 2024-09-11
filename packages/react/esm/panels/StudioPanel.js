import React from 'react';
import { usePrefix, usePosition } from '../hooks';
import { Layout } from '../containers';
import cls from 'classnames';
const StudioPanelInternal = ({ logo, actions, ...props }) => {
    const prefix = usePrefix('main-panel');
    const position = usePosition();
    const classNameBase = cls('root', position, props.className);
    if (logo || actions) {
        return (React.createElement("div", { ...props, className: cls(`${prefix}-container`, classNameBase) },
            React.createElement("div", { className: prefix + '-header' },
                React.createElement("div", { className: prefix + '-header-logo' }, logo),
                React.createElement("div", { className: prefix + '-header-actions' }, actions)),
            React.createElement("div", { className: prefix }, props.children)));
    }
    return (React.createElement("div", { ...props, className: cls(prefix, classNameBase) }, props.children));
};
export const StudioPanel = (props) => {
    return (React.createElement(Layout, { theme: props.theme, prefixCls: props.prefixCls, position: props.position },
        React.createElement(StudioPanelInternal, { ...props })));
};

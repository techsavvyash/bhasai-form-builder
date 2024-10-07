import React, { useContext } from 'react';
import { usePrefix, IconWidget } from '@samagrax/react';
import cls from 'classnames';
import './styles.less';
const InputItemsContext = React.createContext(null);
export const InputItems = (props) => {
    const prefix = usePrefix('input-items');
    return (React.createElement(InputItemsContext.Provider, { value: props },
        React.createElement("div", { className: cls(prefix, props.className), style: props.style }, props.children)));
};
InputItems.defaultProps = {
    width: '100%',
};
InputItems.Item = (props) => {
    const prefix = usePrefix('input-items-item');
    const ctx = useContext(InputItemsContext);
    return (React.createElement("div", { className: cls(prefix, props.className, {
            vertical: props.vertical || ctx.vertical,
        }), style: { width: props.width || ctx.width, ...props.style } },
        props.icon && (React.createElement("div", { className: prefix + '-icon' },
            React.createElement(IconWidget, { infer: props.icon, size: 16 }))),
        props.title && React.createElement("div", { className: prefix + '-title' }, props.title),
        React.createElement("div", { className: prefix + '-controller' }, props.children)));
};

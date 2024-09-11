import React, { useContext, Fragment, useRef, useLayoutEffect } from 'react';
import { each } from '@samagrax/shared';
import { DesignerLayoutContext } from '../context';
import cls from 'classnames';
export const Layout = (props) => {
    const layout = useContext(DesignerLayoutContext);
    const ref = useRef();
    useLayoutEffect(() => {
        if (ref.current) {
            each(props.variables, (value, key) => {
                ref.current.style.setProperty(`--${key}`, value);
            });
        }
    }, []);
    if (layout) {
        return React.createElement(Fragment, null, props.children);
    }
    return (React.createElement("div", { ref: ref, className: cls({
            [`${props.prefixCls}app`]: true,
            [`${props.prefixCls}${props.theme}`]: props.theme,
        }) },
        React.createElement(DesignerLayoutContext.Provider, { value: {
                theme: props.theme,
                prefixCls: props.prefixCls,
                position: props.position,
            } }, props.children)));
};
Layout.defaultProps = {
    theme: 'light',
    prefixCls: 'dn-',
    position: 'fixed',
};

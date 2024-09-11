import React, { useEffect, useRef } from 'react';
import { GlobalRegistry } from '@samagrax/core';
import { DesignerEngineContext } from '../context';
import { GhostWidget } from '../widgets';
import { useDesigner } from '../hooks';
import { Layout } from './Layout';
import * as icons from '../icons';
GlobalRegistry.registerDesignerIcons(icons);
export const Designer = (props) => {
    const engine = useDesigner();
    const ref = useRef();
    useEffect(() => {
        if (props.engine) {
            if (props.engine && ref.current) {
                if (props.engine !== ref.current) {
                    ref.current.unmount();
                }
            }
            props.engine.mount();
            ref.current = props.engine;
        }
        return () => {
            if (props.engine) {
                props.engine.unmount();
            }
        };
    }, [props.engine]);
    if (engine)
        throw new Error('There can only be one Designable Engine Context in the React Tree');
    return (React.createElement(Layout, { ...props },
        React.createElement(DesignerEngineContext.Provider, { value: props.engine },
            props.children,
            React.createElement(GhostWidget, null))));
};
Designer.defaultProps = {
    prefixCls: 'dn-',
    theme: 'light',
};

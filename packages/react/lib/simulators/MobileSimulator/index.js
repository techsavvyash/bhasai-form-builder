import React from 'react';
import { MobileBody } from './body';
import { usePrefix } from '../../hooks';
import cls from 'classnames';
import './styles.less';
export const MobileSimulator = (props) => {
    const prefix = usePrefix('mobile-simulator');
    return (React.createElement("div", { ...props, className: cls(prefix, props.className) },
        React.createElement("div", { className: prefix + '-content' },
            React.createElement(MobileBody, null, props.children))));
};

import React from 'react';
import cls from 'classnames';
import { usePrefix } from '../../hooks';
import './styles.less';
export const PCSimulator = (props) => {
    const prefix = usePrefix('pc-simulator');
    return (React.createElement("div", { ...props, className: cls(prefix, props.className) }, props.children));
};

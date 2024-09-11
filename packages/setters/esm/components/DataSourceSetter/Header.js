import React from 'react';
import { observer } from '@formily/reactive-react';
import { usePrefix } from '@samagrax/react';
import './styles.less';
export const Header = observer(({ extra, title }) => {
    const prefix = usePrefix('data-source-setter');
    return (React.createElement("div", { className: `${prefix + '-layout-item-header'}` },
        React.createElement("div", { className: `${prefix + '-layout-item-title'}` }, title),
        extra));
});

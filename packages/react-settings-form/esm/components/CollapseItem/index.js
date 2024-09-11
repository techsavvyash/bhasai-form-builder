import React, { useState } from 'react';
import { useField, observer } from '@formily/react';
import { usePrefix, IconWidget } from '@samagrax/react';
import cls from 'classnames';
import './styles.less';
export const CollapseItem = observer((props) => {
    const prefix = usePrefix('collapse-item');
    const field = useField();
    const [expand, setExpand] = useState(props.defaultExpand ?? true);
    return (React.createElement("div", { className: cls(prefix, props.className, { expand }), style: props.style },
        React.createElement("div", { className: prefix + '-header', onClick: (e) => {
                e.stopPropagation();
                e.preventDefault();
                setExpand(!expand);
            } },
            React.createElement("div", { className: prefix + '-header-expand' },
                React.createElement(IconWidget, { infer: "Expand", size: 10 })),
            React.createElement("div", { className: prefix + '-header-content' }, field.title)),
        React.createElement("div", { className: prefix + '-content' }, props.children)));
});

import React, { useState } from 'react';
import { isResourceHost, isResourceList, } from '@samagrax/core';
import { isFn } from '@samagrax/shared';
import { observer } from '@formily/reactive-react';
import { usePrefix } from '../../hooks';
import { IconWidget } from '../IconWidget';
import { TextWidget } from '../TextWidget';
import cls from 'classnames';
import './styles.less';
export const ResourceWidget = observer((props) => {
    const prefix = usePrefix('resource');
    const [expand, setExpand] = useState(props.defaultExpand);
    const renderNode = (source) => {
        const { node, icon, title, thumb, span } = source;
        return (React.createElement("div", { className: prefix + '-item', style: { gridColumnStart: `span ${span || 1}` }, key: node.id, "data-designer-source-id": node.id },
            thumb && React.createElement("img", { className: prefix + '-item-thumb', src: thumb }),
            icon && React.isValidElement(icon) ? (React.createElement(React.Fragment, null, icon)) : (React.createElement(IconWidget, { className: prefix + '-item-icon', infer: icon, style: { width: 150, height: 40 } })),
            React.createElement("span", { className: prefix + '-item-text' }, React.createElement(TextWidget, null, title || node.children[0]?.getMessage('title')))));
    };
    const sources = props.sources.reduce((buf, source) => {
        if (isResourceList(source)) {
            return buf.concat(source);
        }
        else if (isResourceHost(source)) {
            return buf.concat(source.Resource);
        }
        return buf;
    }, []);
    const remainItems = sources.reduce((length, source) => {
        return length + (source.span ?? 1);
    }, 0) % 3;
    return (React.createElement("div", { className: cls(prefix, props.className, {
            expand,
        }) },
        React.createElement("div", { className: prefix + '-header', onClick: (e) => {
                e.stopPropagation();
                e.preventDefault();
                setExpand(!expand);
            } },
            React.createElement("div", { className: prefix + '-header-expand' },
                React.createElement(IconWidget, { infer: "Expand", size: 10 })),
            React.createElement("div", { className: prefix + '-header-content' },
                React.createElement(TextWidget, null, props.title))),
        React.createElement("div", { className: prefix + '-content-wrapper' },
            React.createElement("div", { className: prefix + '-content' },
                sources.map(isFn(props.children) ? props.children : renderNode),
                remainItems ? (React.createElement("div", { className: prefix + '-item-remain', style: { gridColumnStart: `span ${3 - remainItems}` } })) : null))));
});
ResourceWidget.defaultProps = {
    defaultExpand: true,
};

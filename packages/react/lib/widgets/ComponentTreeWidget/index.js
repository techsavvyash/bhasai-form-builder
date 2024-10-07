import React, { Fragment, useEffect } from 'react';
import { useTree, usePrefix, useDesigner, useComponents } from '../../hooks';
import { TreeNodeContext, DesignerComponentsContext } from '../../context';
import { GlobalRegistry } from '@samagrax/core';
import { observer } from '@formily/reactive-react';
import cls from 'classnames';
import './styles.less';
export const TreeNodeWidget = observer((props) => {
    const designer = useDesigner(props.node?.designerProps?.effects);
    const components = useComponents();
    const node = props.node;
    const renderChildren = () => {
        if (node?.designerProps?.selfRenderChildren)
            return [];
        return node?.children?.map((child) => {
            return React.createElement(TreeNodeWidget, { key: child.id, node: child });
        });
    };
    const renderProps = (extendsProps = {}) => {
        const props = {
            ...node.designerProps?.defaultProps,
            ...extendsProps,
            ...node.props,
            ...node.designerProps?.getComponentProps?.(node),
        };
        if (node.depth === 0) {
            delete props.style;
        }
        return props;
    };
    const renderComponent = () => {
        const componentName = node.componentName;
        const Component = components[componentName];
        const dataId = {};
        if (Component) {
            if (designer) {
                dataId[designer?.props?.nodeIdAttrName] = node.id;
            }
            return React.createElement(Component, renderProps(dataId), ...renderChildren());
        }
        else {
            if (node?.children?.length) {
                return React.createElement(Fragment, null, renderChildren());
            }
        }
    };
    if (!node)
        return null;
    if (node.hidden)
        return null;
    return React.createElement(TreeNodeContext.Provider, { value: node }, renderComponent());
});
export const ComponentTreeWidget = observer((props) => {
    const tree = useTree();
    const prefix = usePrefix('component-tree');
    const designer = useDesigner();
    const dataId = {};
    if (designer && tree) {
        dataId[designer?.props?.nodeIdAttrName] = tree.id;
    }
    useEffect(() => {
        GlobalRegistry.registerDesignerBehaviors(props.components);
    }, []);
    return (React.createElement("div", { style: { ...props.style, ...tree?.props?.style }, className: cls(prefix, props.className), ...dataId },
        React.createElement(DesignerComponentsContext.Provider, { value: props.components },
            React.createElement(TreeNodeWidget, { node: tree }))));
});
ComponentTreeWidget.displayName = 'ComponentTreeWidget';

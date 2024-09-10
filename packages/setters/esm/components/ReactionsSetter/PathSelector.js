import React from 'react';
import { useSelectedNode } from '@samagrax/react';
import { TreeSelect } from 'antd';
const transformDataSource = (node) => {
    const currentNode = node;
    const dots = (count) => {
        let dots = '';
        for (let i = 0; i < count; i++) {
            dots += '.';
        }
        return dots;
    };
    const targetPath = (parentNode, targetNode) => {
        const path = [];
        const transform = (node) => {
            if (node && node !== parentNode) {
                path.push(node.props.name || node.id);
            }
            else {
                transform(node.parent);
            }
        };
        transform(targetNode);
        return path.reverse().join('.');
    };
    const hasNoVoidChildren = (node) => {
        return node.children?.some((node) => {
            if (node.props.type !== 'void' && node !== currentNode)
                return true;
            return hasNoVoidChildren(node);
        });
    };
    const findRoot = (node) => {
        if (!node?.parent)
            return node;
        if (node?.parent?.componentName !== node.componentName)
            return node.parent;
        return findRoot(node.parent);
    };
    const findArrayParent = (node) => {
        if (!node?.parent)
            return;
        if (node.parent.props.type === 'array')
            return node.parent;
        if (node.parent === root)
            return;
        return findArrayParent(node.parent);
    };
    const transformRelativePath = (arrayNode, targetNode) => {
        if (targetNode.depth === currentNode.depth)
            return `.${targetNode.props.name || targetNode.id}`;
        return `${dots(currentNode.depth - arrayNode.depth)}[].${targetPath(arrayNode, targetNode)}`;
    };
    const transformChildren = (children, path = []) => {
        return children.reduce((buf, node) => {
            if (node === currentNode)
                return buf;
            if (node.props.type === 'array' && !node.contains(currentNode))
                return buf;
            if (node.props.type === 'void' && !hasNoVoidChildren(node))
                return buf;
            const currentPath = path.concat(node.props.name || node.id);
            const arrayNode = findArrayParent(node);
            const label = node.props.title ||
                node.props['x-component-props']?.title ||
                node.props.name ||
                node.designerProps.title;
            const value = arrayNode
                ? transformRelativePath(arrayNode, node)
                : currentPath.join('.');
            return buf.concat({
                label,
                value,
                node,
                children: transformChildren(node.children, currentPath),
            });
        }, []);
    };
    const root = findRoot(node);
    if (root) {
        return transformChildren(root.children);
    }
    return [];
};
export const PathSelector = (props) => {
    const baseNode = useSelectedNode();
    const dataSource = transformDataSource(baseNode);
    const findNode = (dataSource, value) => {
        for (let i = 0; i < dataSource.length; i++) {
            const item = dataSource[i];
            if (item.value === value)
                return item.node;
            if (item.children?.length) {
                const fondedChild = findNode(item.children, value);
                if (fondedChild)
                    return fondedChild;
            }
        }
    };
    return (React.createElement(TreeSelect, { ...props, onChange: (value) => {
            props.onChange(value, findNode(dataSource, value));
        }, treeDefaultExpandAll: true, treeData: dataSource }));
};

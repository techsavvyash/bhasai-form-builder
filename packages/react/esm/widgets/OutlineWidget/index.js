import React, { useRef, useLayoutEffect } from 'react';
import cls from 'classnames';
import { useTree, usePrefix, useOutline, useWorkbench } from '../../hooks';
import { observer } from '@formily/reactive-react';
import { OutlineTreeNode } from './OutlineNode';
import { Insertion } from './Insertion';
import { NodeContext } from './context';
import { globalThisPolyfill } from '@samagrax/shared';
export const OutlineTreeWidget = observer(({ onClose, style, renderActions, renderTitle, className, ...props }) => {
    const ref = useRef();
    const prefix = usePrefix('outline-tree');
    const workbench = useWorkbench();
    const current = workbench?.activeWorkspace || workbench?.currentWorkspace;
    const workspaceId = current?.id;
    const tree = useTree(workspaceId);
    const outline = useOutline(workspaceId);
    const outlineRef = useRef();
    useLayoutEffect(() => {
        if (!workspaceId)
            return;
        if (outlineRef.current && outlineRef.current !== outline) {
            outlineRef.current.onUnmount();
        }
        if (ref.current && outline) {
            outline.onMount(ref.current, globalThisPolyfill);
        }
        outlineRef.current = outline;
        return () => {
            outline.onUnmount();
        };
    }, [workspaceId, outline]);
    if (!outline || !workspaceId)
        return null;
    return (React.createElement(NodeContext.Provider, { value: { renderActions, renderTitle } },
        React.createElement("div", { ...props, className: cls(prefix + '-container', className), style: style },
            React.createElement("div", { className: prefix + '-content', ref: ref },
                React.createElement(OutlineTreeNode, { node: tree, workspaceId: workspaceId }),
                React.createElement("div", { className: prefix + '-aux', style: {
                        pointerEvents: 'none',
                    } },
                    React.createElement(Insertion, { workspaceId: workspaceId }))))));
});

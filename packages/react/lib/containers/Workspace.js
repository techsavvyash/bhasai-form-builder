import React, { useMemo, useRef, Fragment } from 'react';
import { useDesigner } from '../hooks';
import { WorkspaceContext } from '../context';
export const Workspace = ({ id, title, description, ...props }) => {
    const oldId = useRef();
    const designer = useDesigner();
    const workspace = useMemo(() => {
        if (!designer)
            return;
        if (oldId.current && oldId.current !== id) {
            const old = designer.workbench.findWorkspaceById(oldId.current);
            if (old)
                old.viewport.detachEvents();
        }
        const workspace = {
            id: id || 'index',
            title,
            description,
        };
        designer.workbench.ensureWorkspace(workspace);
        oldId.current = workspace.id;
        return workspace;
    }, [id, designer]);
    return (React.createElement(Fragment, null,
        React.createElement(WorkspaceContext.Provider, { value: workspace }, props.children)));
};

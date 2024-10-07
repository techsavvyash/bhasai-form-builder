import React, { useMemo } from 'react';
import { createForm } from '@formily/core';
import { Form } from '@formily/antd';
import { observer } from '@formily/react';
import { requestIdle, cancelIdle } from '@samagrax/shared';
import { usePrefix, useSelected, useOperation, useSelectedNode, useWorkbench, IconWidget, NodePathWidget, } from '@samagrax/react';
import { SchemaField } from './SchemaField';
import { SettingsFormContext } from './shared/context';
import { useLocales, useSnapshot } from './effects';
import { Empty } from 'antd';
import cls from 'classnames';
import './styles.less';
const GlobalState = {
    idleRequest: null,
};
export const SettingsForm = observer((props) => {
    const workbench = useWorkbench();
    const currentWorkspace = workbench?.activeWorkspace || workbench?.currentWorkspace;
    const currentWorkspaceId = currentWorkspace?.id;
    const operation = useOperation(currentWorkspaceId);
    const node = useSelectedNode(currentWorkspaceId);
    const selected = useSelected(currentWorkspaceId);
    const prefix = usePrefix('settings-form');
    const schema = node?.designerProps?.propsSchema;
    const isEmpty = !(node &&
        node.designerProps?.propsSchema &&
        selected.length === 1);
    const form = useMemo(() => {
        return createForm({
            initialValues: node?.designerProps?.defaultProps,
            values: node?.props,
            effects(form) {
                useLocales(node);
                useSnapshot(operation);
                props.effects?.(form);
            },
        });
    }, [node, node?.props, schema, operation, isEmpty]);
    const render = () => {
        if (!isEmpty) {
            return (React.createElement("div", { className: cls(prefix, props.className), style: props.style, key: node.id },
                React.createElement(SettingsFormContext.Provider, { value: props },
                    React.createElement(Form, { form: form, colon: false, labelWidth: 120, labelAlign: "left", wrapperAlign: "right", feedbackLayout: "none", tooltipLayout: "text" },
                        React.createElement(SchemaField, { schema: schema, components: props.components, scope: { $node: node, ...props.scope } })))));
        }
        return (React.createElement("div", { className: prefix + '-empty' },
            React.createElement(Empty, null)));
    };
    return (
    // @ts-ignore
    React.createElement(IconWidget.Provider, { tooltip: true },
        React.createElement("div", { className: prefix + '-wrapper' },
            !isEmpty && React.createElement(NodePathWidget, { workspaceId: currentWorkspaceId }),
            React.createElement("div", { className: prefix + '-content' }, render()))));
}, {
    scheduler: (update) => {
        cancelIdle(GlobalState.idleRequest);
        GlobalState.idleRequest = requestIdle(update, {
            timeout: 500,
        });
    },
});

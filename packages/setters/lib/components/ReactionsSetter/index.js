import React, { useEffect, useMemo, useState } from 'react';
import { clone, uid } from '@formily/shared';
import { createForm, isVoidField } from '@formily/core';
import { createSchemaField } from '@formily/react';
import { GlobalRegistry } from '@samagrax/core';
import { requestIdle } from '@samagrax/shared';
import { usePrefix, TextWidget } from '@samagrax/react';
import { MonacoInput } from '@samagrax/react-settings-form';
import { Form, ArrayTable, Input, Select, FormItem, FormCollapse, } from '@formily/antd';
import { Modal, Card, Button, Tag, Tooltip } from 'antd';
import { PathSelector } from './PathSelector';
import { FieldPropertySetter } from './FieldPropertySetter';
import { initDeclaration } from './declarations';
import './styles.less';
const TypeView = ({ value }) => {
    const text = String(value);
    if (text.length <= 26)
        return React.createElement(Tag, null, text);
    return (React.createElement(Tag, null,
        React.createElement(Tooltip, { title: React.createElement("div", { style: { fontSize: 12 } },
                React.createElement("code", null,
                    React.createElement("pre", { style: { whiteSpace: 'pre-wrap', padding: 0, margin: 0 } }, text))) },
            text.substring(0, 24),
            "...")));
};
const SchemaField = createSchemaField({
    components: {
        Card,
        FormCollapse,
        Input,
        TypeView,
        Select,
        FormItem,
        PathSelector,
        FieldPropertySetter,
        ArrayTable,
        MonacoInput,
    },
});
const FieldStateProperties = [
    'value',
    'initialValue',
    'inputValue',
    'inputValues',
    'modified',
    'initialized',
    'title',
    'description',
    'mounted',
    'unmounted',
    'active',
    'visited',
    'loading',
    'errors',
    'warnings',
    'successes',
    'feedbacks',
    'valid',
    'invalid',
    'pattern',
    'display',
    'disabled',
    'readOnly',
    'readPretty',
    'visible',
    'hidden',
    'editable',
    'validateStatus',
    'validating',
];
const FieldStateValueTypes = {
    modified: 'boolean',
    initialized: 'boolean',
    title: 'string',
    description: 'string',
    mounted: 'boolean',
    unmounted: 'boolean',
    active: 'boolean',
    visited: 'boolean',
    loading: 'boolean',
    errors: 'string[]',
    warnings: 'string[]',
    successes: 'string[]',
    feedbacks: `Array<
  triggerType?: 'onInput' | 'onFocus' | 'onBlur'
  type?: 'error' | 'success' | 'warning'
  code?:
    | 'ValidateError'
    | 'ValidateSuccess'
    | 'ValidateWarning'
    | 'EffectError'
    | 'EffectSuccess'
    | 'EffectWarning'
  messages?: string[]
>
`,
    valid: 'boolean',
    invalid: 'boolean',
    pattern: "'editable' | 'disabled' | 'readOnly' | 'readPretty'",
    display: "'visible' | 'hidden' | 'none'",
    disabled: 'boolean',
    readOnly: 'boolean',
    readPretty: 'boolean',
    visible: 'boolean',
    hidden: 'boolean',
    editable: 'boolean',
    validateStatus: "'error' | 'warning' | 'success' | 'validating'",
    validating: 'boolean',
};
export const ReactionsSetter = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [innerVisible, setInnerVisible] = useState(false);
    const prefix = usePrefix('reactions-setter');
    const form = useMemo(() => {
        return createForm({
            values: clone(props.value),
        });
    }, [modalVisible, props.value]);
    const formCollapse = useMemo(() => FormCollapse.createFormCollapse(['deps', 'state']), [modalVisible]);
    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);
    useEffect(() => {
        if (modalVisible) {
            requestIdle(() => {
                initDeclaration().then(() => {
                    setInnerVisible(true);
                });
            }, {
                timeout: 400,
            });
        }
        else {
            setInnerVisible(false);
        }
    }, [modalVisible]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { block: true, onClick: openModal },
            React.createElement(TextWidget, { token: "SettingComponents.ReactionsSetter.configureReactions" })),
        React.createElement(Modal, { title: GlobalRegistry.getDesignerMessage('SettingComponents.ReactionsSetter.configureReactions'), width: "70%", centered: true, bodyStyle: { padding: 10 }, transitionName: "", maskTransitionName: "", visible: modalVisible, onCancel: closeModal, destroyOnClose: true, onOk: () => {
                form.submit((values) => {
                    props.onChange?.(values);
                });
                closeModal();
            } },
            React.createElement("div", { className: prefix }, innerVisible && (React.createElement(Form, { form: form },
                React.createElement(SchemaField, null,
                    React.createElement(SchemaField.Void, { "x-component": "FormCollapse", "x-component-props": {
                            formCollapse,
                            defaultActiveKey: ['deps', 'state'],
                            style: { marginBottom: 10 },
                        } },
                        React.createElement(SchemaField.Void, { "x-component": "FormCollapse.CollapsePanel", "x-component-props": {
                                key: 'deps',
                                header: GlobalRegistry.getDesignerMessage('SettingComponents.ReactionsSetter.relationsFields'),
                            } },
                            React.createElement(SchemaField.Array, { name: "dependencies", default: [{}], "x-component": "ArrayTable" },
                                React.createElement(SchemaField.Object, null,
                                    React.createElement(SchemaField.Void, { "x-component": "ArrayTable.Column", "x-component-props": {
                                            title: GlobalRegistry.getDesignerMessage('SettingComponents.ReactionsSetter.sourceField'),
                                            width: 240,
                                        } },
                                        React.createElement(SchemaField.String, { name: "source", "x-decorator": "FormItem", "x-component": "PathSelector", "x-component-props": {
                                                placeholder: GlobalRegistry.getDesignerMessage('SettingComponents.ReactionsSetter.pleaseSelect'),
                                            } })),
                                    React.createElement(SchemaField.Void, { "x-component": "ArrayTable.Column", "x-component-props": {
                                            title: GlobalRegistry.getDesignerMessage('SettingComponents.ReactionsSetter.sourceProperty'),
                                            width: 200,
                                        } },
                                        React.createElement(SchemaField.String, { name: "property", default: "value", "x-decorator": "FormItem", "x-component": "Select", "x-component-props": { showSearch: true }, enum: FieldStateProperties })),
                                    React.createElement(SchemaField.Void, { "x-component": "ArrayTable.Column", "x-component-props": {
                                            title: GlobalRegistry.getDesignerMessage('SettingComponents.ReactionsSetter.variableName'),
                                            width: 200,
                                        } },
                                        React.createElement(SchemaField.String, { name: "name", "x-decorator": "FormItem", "x-validator": {
                                                pattern: /^[$_a-zA-Z]+[$_a-zA-Z0-9]*$/,
                                                message: GlobalRegistry.getDesignerMessage('SettingComponents.ReactionsSetter.variableNameValidateMessage'),
                                            }, "x-component": "Input", "x-component-props": {
                                                addonBefore: '$deps.',
                                                placeholder: GlobalRegistry.getDesignerMessage('SettingComponents.ReactionsSetter.pleaseInput'),
                                            }, "x-reactions": (field) => {
                                                if (isVoidField(field))
                                                    return;
                                                field.query('.source').take((source) => {
                                                    if (isVoidField(source))
                                                        return;
                                                    if (source.value &&
                                                        !field.value &&
                                                        !field.modified) {
                                                        field.value =
                                                            source.inputValues[1]?.props?.name ||
                                                                `v_${uid()}`;
                                                    }
                                                });
                                            } })),
                                    React.createElement(SchemaField.Void, { "x-component": "ArrayTable.Column", "x-component-props": {
                                            title: GlobalRegistry.getDesignerMessage('SettingComponents.ReactionsSetter.variableType'),
                                            ellipsis: {
                                                showTitle: false,
                                            },
                                            width: 200,
                                            align: 'center',
                                        } },
                                        React.createElement(SchemaField.String, { name: "type", default: "any", "x-decorator": "FormItem", "x-component": "TypeView", "x-reactions": (field) => {
                                                if (isVoidField(field))
                                                    return;
                                                const property = field
                                                    .query('.property')
                                                    .get('inputValues');
                                                if (!property)
                                                    return;
                                                property[0] = property[0] || 'value';
                                                field.query('.source').take((source) => {
                                                    if (isVoidField(source))
                                                        return;
                                                    if (source.value) {
                                                        if (property[0] === 'value' ||
                                                            property[0] === 'initialValue' ||
                                                            property[0] === 'inputValue') {
                                                            field.value =
                                                                source.inputValues[1]?.props?.type ||
                                                                    'any';
                                                        }
                                                        else if (property[0] === 'inputValues') {
                                                            field.value = `any[]`;
                                                        }
                                                        else if (property[0]) {
                                                            field.value =
                                                                FieldStateValueTypes[property[0]];
                                                        }
                                                        else {
                                                            field.value = 'any';
                                                        }
                                                    }
                                                });
                                            } })),
                                    React.createElement(SchemaField.Void, { "x-component": "ArrayTable.Column", "x-component-props": {
                                            title: GlobalRegistry.getDesignerMessage('SettingComponents.ReactionsSetter.operations'),
                                            align: 'center',
                                            width: 80,
                                        } },
                                        React.createElement(SchemaField.Markup, { type: "void", "x-component": "ArrayTable.Remove" }))),
                                React.createElement(SchemaField.Void, { title: GlobalRegistry.getDesignerMessage('SettingComponents.ReactionsSetter.addRelationField'), "x-component": "ArrayTable.Addition", "x-component-props": { style: { marginTop: 8 } } }))),
                        React.createElement(SchemaField.Void, { "x-component": "FormCollapse.CollapsePanel", "x-component-props": {
                                header: GlobalRegistry.getDesignerMessage('SettingComponents.ReactionsSetter.propertyReactions'),
                                key: 'state',
                                className: 'reaction-state',
                            } },
                            React.createElement(SchemaField.Markup, { name: "fulfill.state", "x-component": "FieldPropertySetter" }))))))))));
};

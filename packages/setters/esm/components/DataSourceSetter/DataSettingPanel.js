import React, { useMemo, Fragment } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { ArrayItems, Form, Input, FormItem } from '@formily/antd';
import { createForm } from '@formily/core';
import { observer } from '@formily/reactive-react';
import { createSchemaField } from '@formily/react';
import { ValueInput } from '@samagrax/react-settings-form';
import { usePrefix, TextWidget } from '@samagrax/react';
import { Header } from './Header';
import { traverseTree } from './shared';
import './styles.less';
const SchemaField = createSchemaField({
    components: {
        FormItem,
        Input,
        ArrayItems,
        ValueInput,
    },
});
export const DataSettingPanel = observer((props) => {
    const { allowExtendOption, effects } = props;
    const prefix = usePrefix('data-source-setter');
    const form = useMemo(() => {
        let values;
        traverseTree(props.treeDataSource.dataSource, (dataItem) => {
            if (dataItem.key === props.treeDataSource.selectedKey) {
                values = dataItem;
            }
        });
        return createForm({
            values,
            effects: effects,
        });
    }, [
        props.treeDataSource.selectedKey,
        props.treeDataSource.dataSource.length,
    ]);
    if (!props.treeDataSource.selectedKey)
        return (React.createElement(Fragment, null,
            React.createElement(Header, { title: React.createElement(TextWidget, { token: "SettingComponents.DataSourceSetter.nodeProperty" }), extra: null }),
            React.createElement("div", { className: `${prefix + '-layout-item-content'}` },
                React.createElement(TextWidget, { token: "SettingComponents.DataSourceSetter.pleaseSelectNode" }))));
    return (React.createElement(Fragment, null,
        React.createElement(Header, { title: React.createElement(TextWidget, { token: "SettingComponents.DataSourceSetter.nodeProperty" }), extra: allowExtendOption ? (React.createElement(Button, { type: "text", onClick: () => {
                    form.setFieldState('map', (state) => {
                        state.value.push({});
                    });
                }, icon: React.createElement(PlusOutlined, null) },
                React.createElement(TextWidget, { token: "SettingComponents.DataSourceSetter.addKeyValuePair" }))) : null }),
        React.createElement("div", { className: `${prefix + '-layout-item-content'}` },
            React.createElement(Form, { form: form, labelWidth: 60, wrapperWidth: 160 },
                React.createElement(SchemaField, null,
                    React.createElement(SchemaField.Array, { name: "map", "x-component": "ArrayItems" },
                        React.createElement(SchemaField.Object, { "x-decorator": "ArrayItems.Item", "x-decorator-props": { type: 'divide' } },
                            React.createElement(SchemaField.String, { title: React.createElement(TextWidget, { token: "SettingComponents.DataSourceSetter.label" }), "x-decorator": "FormItem", "x-disabled": !allowExtendOption, name: "label", "x-component": "Input" }),
                            React.createElement(SchemaField.String, { title: React.createElement(TextWidget, { token: "SettingComponents.DataSourceSetter.value" }), "x-decorator": "FormItem", name: "value", "x-component": "ValueInput" }),
                            React.createElement(SchemaField.Void, { "x-component": "ArrayItems.Remove", "x-visible": allowExtendOption, "x-component-props": {
                                    style: {
                                        margin: 5,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    },
                                } }))))))));
});

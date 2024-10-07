import React from 'react';
import { FormPath } from '@formily/core';
import { toJS } from '@formily/reactive';
import { ArrayField, Field as InternalField, ObjectField, VoidField, observer, Schema, } from '@formily/react';
import { FormItem } from '@formily/next';
import { each, reduce } from '@formily/shared';
import { createBehavior } from '@samagrax/core';
import { useDesigner, useTreeNode, useComponents } from '@samagrax/react';
import { isArr, isStr } from '@samagrax/shared';
import { Container } from '../../common/Container';
import { AllLocales } from '../../locales';
Schema.silent(true);
const SchemaStateMap = {
    title: 'title',
    description: 'description',
    default: 'value',
    enum: 'dataSource',
    readOnly: 'readOnly',
    writeOnly: 'editable',
    required: 'required',
    'x-content': 'content',
    'x-value': 'value',
    'x-editable': 'editable',
    'x-disabled': 'disabled',
    'x-read-pretty': 'readPretty',
    'x-read-only': 'readOnly',
    'x-visible': 'visible',
    'x-hidden': 'hidden',
    'x-display': 'display',
    'x-pattern': 'pattern',
};
const NeedShownExpression = {
    title: true,
    description: true,
    default: true,
    'x-content': true,
    'x-value': true,
};
const isExpression = (val) => isStr(val) && /^\{\{.*\}\}$/.test(val);
const filterExpression = (val) => {
    if (typeof val === 'object') {
        const isArray = isArr(val);
        const results = reduce(val, (buf, value, key) => {
            if (isExpression(value)) {
                return buf;
            }
            else {
                const results = filterExpression(value);
                if (results === undefined || results === null)
                    return buf;
                if (isArray) {
                    return buf.concat([results]);
                }
                buf[key] = results;
                return buf;
            }
        }, isArray ? [] : {});
        return results;
    }
    if (isExpression(val)) {
        return;
    }
    return val;
};
const toDesignableFieldProps = (schema, components, nodeIdAttrName, id) => {
    const results = {};
    each(SchemaStateMap, (fieldKey, schemaKey) => {
        const value = schema[schemaKey];
        if (isExpression(value)) {
            if (!NeedShownExpression[schemaKey])
                return;
            if (value) {
                results[fieldKey] = value;
                return;
            }
        }
        else if (value) {
            results[fieldKey] = filterExpression(value);
        }
    });
    if (!components['FormItem']) {
        components['FormItem'] = FormItem;
    }
    const decorator = schema['x-decorator'] && FormPath.getIn(components, schema['x-decorator']);
    const component = schema['x-component'] && FormPath.getIn(components, schema['x-component']);
    const decoratorProps = schema['x-decorator-props'] || {};
    const componentProps = schema['x-component-props'] || {};
    if (decorator) {
        results.decorator = [decorator, toJS(decoratorProps)];
    }
    if (component) {
        results.component = [component, toJS(componentProps)];
    }
    if (decorator) {
        FormPath.setIn(results['decorator'][1], nodeIdAttrName, id);
    }
    else if (component) {
        FormPath.setIn(results['component'][1], nodeIdAttrName, id);
    }
    results.title = results.title && (React.createElement("span", { "data-content-editable": "title" }, results.title));
    results.description = results.description && (React.createElement("span", { "data-content-editable": "description" }, results.description));
    return results;
};
export const Field = observer((props) => {
    const designer = useDesigner();
    const components = useComponents();
    const node = useTreeNode();
    if (!node)
        return null;
    const fieldProps = toDesignableFieldProps(props, components, designer.props.nodeIdAttrName, node.id);
    if (props.type === 'object') {
        return (
        // @ts-ignore
        React.createElement(Container, null,
            React.createElement(ObjectField, { ...fieldProps, name: node.id }, props.children)));
    }
    else if (props.type === 'array') {
        return React.createElement(ArrayField, { ...fieldProps, name: node.id });
    }
    else if (node.props.type === 'void') {
        return (React.createElement(VoidField, { ...fieldProps, name: node.id }, props.children));
    }
    return React.createElement(InternalField, { ...fieldProps, name: node.id });
});
Field.Behavior = createBehavior({
    name: 'Field',
    selector: 'Field',
    designerLocales: AllLocales.Field,
});

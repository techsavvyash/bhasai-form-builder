import React from 'react';
import { Field, useField, observer } from '@formily/react';
import { Radio } from '@formily/antd';
import { usePrefix, IconWidget } from '@samagrax/react';
import { InputItems } from '../InputItems';
import cls from 'classnames';
import './styles.less';
export const FlexStyleSetter = observer((props) => {
    const field = useField();
    const prefix = usePrefix('flex-style-setter');
    return (React.createElement("div", { className: cls(prefix, props.className), style: props.style },
        React.createElement(InputItems, { vertical: true },
            React.createElement(Field, { name: "flexDirection", basePath: field.address.parent(), dataSource: [
                    {
                        label: React.createElement(IconWidget, { infer: "FlexDirectionRow" }),
                        value: 'row',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexDirectionColumn" }),
                        value: 'column',
                    },
                ], reactions: (field) => {
                    field.decorator[1].title = `Flex Direction : ${field.value || ''}`;
                }, decorator: [InputItems.Item], component: [Radio.Group, { optionType: 'button' }] }),
            React.createElement(Field, { name: "flexWrap", basePath: field.address.parent(), dataSource: [
                    {
                        label: React.createElement(IconWidget, { infer: "FlexNoWrap" }),
                        value: 'nowrap',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexWrap" }),
                        value: 'wrap',
                    },
                ], reactions: (field) => {
                    field.decorator[1].title = `Flex Wrap : ${field.value || ''}`;
                }, decorator: [InputItems.Item], component: [Radio.Group, { optionType: 'button' }] }),
            React.createElement(Field, { name: "alignContent", basePath: field.address.parent(), dataSource: [
                    {
                        label: React.createElement(IconWidget, { infer: "FlexAlignContentCenter" }),
                        value: 'center',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexAlignContentStart" }),
                        value: 'flex-start',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexAlignContentEnd" }),
                        value: 'flex-end',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexAlignContentSpaceAround" }),
                        value: 'space-around',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexAlignContentSpaceBetween" }),
                        value: 'space-between',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexAlignContentStretch" }),
                        value: 'stretch',
                    },
                ], reactions: (field) => {
                    field.decorator[1].title = `Align Content : ${field.value || ''}`;
                }, decorator: [InputItems.Item], component: [Radio.Group, { optionType: 'button' }] }),
            React.createElement(Field, { name: "justifyContent", basePath: field.address.parent(), dataSource: [
                    {
                        label: React.createElement(IconWidget, { infer: "FlexJustifyCenter" }),
                        value: 'center',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexJustifyStart" }),
                        value: 'flex-start',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexJustifyEnd" }),
                        value: 'flex-end',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexJustifySpaceAround" }),
                        value: 'space-around',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexJustifySpaceBetween" }),
                        value: 'space-between',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexJustifySpaceEvenly" }),
                        value: 'space-evenly',
                    },
                ], reactions: (field) => {
                    field.decorator[1].title = `Justify Content : ${field.value || ''}`;
                }, decorator: [InputItems.Item], component: [Radio.Group, { optionType: 'button' }] }),
            React.createElement(Field, { name: "alignItems", basePath: field.address.parent(), dataSource: [
                    {
                        label: React.createElement(IconWidget, { infer: "FlexAlignItemsCenter" }),
                        value: 'center',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexAlignItemsStart" }),
                        value: 'flex-start',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexAlignItemsEnd" }),
                        value: 'flex-end',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexAlignItemsStretch" }),
                        value: 'stretch',
                    },
                    {
                        label: React.createElement(IconWidget, { infer: "FlexAlignItemsBaseline" }),
                        value: 'baseline',
                    },
                ], reactions: (field) => {
                    field.decorator[1].title = `Align Items : ${field.value || ''}`;
                }, decorator: [InputItems.Item], component: [Radio.Group, { optionType: 'button' }] }))));
});

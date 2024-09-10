import React, { Fragment } from 'react';
import { Tree, Button } from 'antd';
import { uid } from '@formily/shared';
import { observer } from '@formily/reactive-react';
import { usePrefix, TextWidget, IconWidget } from '@samagrax/react';
import { Title } from './Title';
import { Header } from './Header';
import { traverseTree } from './shared';
import './styles.less';
import { GlobalRegistry } from '@samagrax/core';
const limitTreeDrag = ({ dropPosition }) => {
    if (dropPosition === 0) {
        return false;
    }
    return true;
};
export const TreePanel = observer((props) => {
    const prefix = usePrefix('data-source-setter');
    const dropHandler = (info) => {
        const dropKey = info.node?.key;
        const dragKey = info.dragNode?.key;
        const dropPos = info.node.pos.split('-');
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
        const data = [...props.treeDataSource.dataSource];
        // Find dragObject
        let dragObj;
        traverseTree(data, (item, index, arr) => {
            if (arr[index].key === dragKey) {
                arr.splice(index, 1);
                dragObj = item;
            }
        });
        if (!info.dropToGap) {
            traverseTree(data, (item) => {
                if (item.key === dropKey) {
                    item.children = item.children || [];
                    item.children.unshift(dragObj);
                }
            });
        }
        else if ((info.node.children || []).length > 0 &&
            info.node.expanded &&
            dropPosition === 1) {
            traverseTree(data, (item) => {
                if (item.key === dropKey) {
                    item.children = item.children || [];
                    item.children.unshift(dragObj);
                }
            });
        }
        else {
            let ar;
            let i;
            traverseTree(data, (item, index, arr) => {
                if (item.key === dropKey) {
                    ar = arr;
                    i = index;
                }
            });
            if (dropPosition === -1) {
                ar.splice(i, 0, dragObj);
            }
            else {
                ar.splice(i + 1, 0, dragObj);
            }
        }
        props.treeDataSource.dataSource = data;
    };
    return (React.createElement(Fragment, null,
        React.createElement(Header, { title: React.createElement(TextWidget, { token: "SettingComponents.DataSourceSetter.dataSourceTree" }), extra: React.createElement(Button, { type: "text", onClick: () => {
                    const uuid = uid();
                    const dataSource = props.treeDataSource.dataSource;
                    const initialKeyValuePairs = props.defaultOptionValue?.map((item) => ({ ...item })) || [
                        {
                            label: 'label',
                            value: `${GlobalRegistry.getDesignerMessage(`SettingComponents.DataSourceSetter.item`)} ${dataSource.length + 1}`,
                        },
                        { label: 'value', value: uuid },
                    ];
                    props.treeDataSource.dataSource = dataSource.concat({
                        key: uuid,
                        duplicateKey: uuid,
                        map: initialKeyValuePairs,
                        children: [],
                    });
                }, icon: React.createElement(IconWidget, { infer: "Add" }) },
                React.createElement(TextWidget, { token: "SettingComponents.DataSourceSetter.addNode" })) }),
        React.createElement("div", { className: `${prefix + '-layout-item-content'}` },
            React.createElement(Tree, { blockNode: true, draggable: true, allowDrop: props.allowTree ? () => true : limitTreeDrag, defaultExpandAll: true, defaultExpandParent: true, autoExpandParent: true, showLine: { showLeafIcon: false }, treeData: props.treeDataSource.dataSource, onDragEnter: () => { }, onDrop: dropHandler, titleRender: (titleProps) => {
                    return (React.createElement(Title, { ...titleProps, treeDataSource: props.treeDataSource }));
                }, onSelect: (selectedKeys) => {
                    if (selectedKeys[0]) {
                        props.treeDataSource.selectedKey = selectedKeys[0].toString();
                    }
                } }))));
});

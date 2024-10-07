import React from 'react';
import { clone, toArr } from '@formily/shared';
import { observer } from '@formily/reactive-react';
import { IconWidget, TextWidget, usePrefix } from '@samagrax/react';
import { traverseTree } from './shared';
import './styles.less';
export const Title = observer((props) => {
    const prefix = usePrefix('data-source-setter-node-title');
    const getTitleValue = (dataSource) => {
        const optionalKeys = ['label', 'title', 'header'];
        let nodeTitle;
        optionalKeys.some((key) => {
            const title = toArr(dataSource).find((item) => item.label === key)?.value;
            if (title !== undefined) {
                nodeTitle = title;
                return true;
            }
            return false;
        });
        if (nodeTitle === undefined) {
            toArr(dataSource || []).some((item) => {
                if (item.value && typeof item.value === 'string') {
                    nodeTitle = item.value;
                    return true;
                }
                return false;
            });
        }
        return nodeTitle;
    };
    const renderTitle = (dataSource) => {
        const nodeTitle = getTitleValue(dataSource);
        if (nodeTitle === undefined)
            return (React.createElement(TextWidget, { token: "SettingComponents.DataSourceSetter.defaultTitle" }));
        else
            return nodeTitle + '';
    };
    return (React.createElement("div", { className: prefix },
        React.createElement("span", { style: { marginRight: '5px' } }, renderTitle(props?.map || [])),
        React.createElement(IconWidget, { className: prefix + '-icon', infer: "Remove", onClick: () => {
                const newDataSource = clone(props?.treeDataSource?.dataSource);
                traverseTree(newDataSource || [], (dataItem, i, data) => {
                    if (data[i].key === props.duplicateKey)
                        toArr(data).splice(i, 1);
                });
                props.treeDataSource.dataSource = newDataSource;
            } })));
});

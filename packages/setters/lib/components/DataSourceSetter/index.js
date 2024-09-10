import React, { Fragment, useMemo, useState } from 'react';
import cls from 'classnames';
import { Modal, Button } from 'antd';
import { observable } from '@formily/reactive';
import { observer } from '@formily/reactive-react';
import { usePrefix, useTheme, TextWidget } from '@samagrax/react';
import { DataSettingPanel } from './DataSettingPanel';
import { TreePanel } from './TreePanel';
import { transformDataToValue, transformValueToData } from './shared';
import './styles.less';
export const DataSourceSetter = observer((props) => {
    const { className, value = [], onChange, allowTree = true, allowExtendOption = true, defaultOptionValue, effects = () => { }, } = props;
    const theme = useTheme();
    const prefix = usePrefix('data-source-setter');
    const [modalVisible, setModalVisible] = useState(false);
    const treeDataSource = useMemo(() => observable({
        dataSource: transformValueToData(value),
        selectedKey: '',
    }), [value, modalVisible]);
    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);
    return (React.createElement(Fragment, null,
        React.createElement(Button, { block: true, onClick: openModal },
            React.createElement(TextWidget, { token: "SettingComponents.DataSourceSetter.configureDataSource" })),
        React.createElement(Modal, { title: React.createElement(TextWidget, { token: "SettingComponents.DataSourceSetter.configureDataSource" }), width: "65%", bodyStyle: { padding: 10 }, transitionName: "", maskTransitionName: "", visible: modalVisible, onCancel: closeModal, onOk: () => {
                onChange(transformDataToValue(treeDataSource.dataSource));
                closeModal();
            } },
            React.createElement("div", { className: `${cls(prefix, className)} ${prefix + '-' + theme} ${prefix + '-layout'}` },
                React.createElement("div", { className: `${prefix + '-layout-item left'}` },
                    React.createElement(TreePanel, { defaultOptionValue: defaultOptionValue, allowTree: allowTree, treeDataSource: treeDataSource })),
                React.createElement("div", { className: `${prefix + '-layout-item right'}` },
                    React.createElement(DataSettingPanel, { allowExtendOption: allowExtendOption, treeDataSource: treeDataSource, effects: effects }))))));
});

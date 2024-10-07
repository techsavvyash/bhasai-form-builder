import React from 'react';
import { useTree, usePrefix } from '../../hooks';
import { observer } from '@formily/reactive-react';
import { IconWidget } from '../IconWidget';
import './styles.less';
export const EmptyWidget = observer((props) => {
    const tree = useTree();
    const prefix = usePrefix('empty');
    const renderEmpty = () => {
        return (React.createElement("div", { style: { display: 'flex', flexDirection: 'column' } },
            React.createElement("div", { className: "animations" },
                React.createElement(IconWidget, { infer: props.dragTipsDirection === 'left'
                        ? 'DragLeftSourceAnimation'
                        : 'DragRightSourceAnimation', size: 240 }),
                React.createElement(IconWidget, { infer: "BatchDragAnimation", size: 240 })),
            React.createElement("div", { className: "hotkeys-list" },
                React.createElement("div", null,
                    "Selection ",
                    React.createElement(IconWidget, { infer: "Command" }),
                    " + Click /",
                    ' ',
                    React.createElement(IconWidget, { infer: "Shift" }),
                    " + Click /",
                    ' ',
                    React.createElement(IconWidget, { infer: "Command" }),
                    " + A"),
                React.createElement("div", null,
                    "Copy ",
                    React.createElement(IconWidget, { infer: "Command" }),
                    " + C / Paste",
                    ' ',
                    React.createElement(IconWidget, { infer: "Command" }),
                    " + V"),
                React.createElement("div", null,
                    "Delete ",
                    React.createElement(IconWidget, { infer: "Delete" })))));
    };
    if (!tree?.children?.length) {
        return (React.createElement("div", { className: prefix }, props.children ? props.children : renderEmpty()));
    }
    return null;
});
EmptyWidget.defaultProps = {
    dragTipsDirection: 'left',
};

import React, { Fragment, useRef } from 'react';
import { Button, InputNumber } from 'antd';
import { observer } from '@formily/reactive-react';
import { CursorType, ScreenType } from '@samagrax/core';
import { useCursor, useHistory, useScreen, usePrefix, useWorkbench, } from '../../hooks';
import { IconWidget } from '../IconWidget';
import cls from 'classnames';
import './styles.less';
export const DesignerToolsWidget = observer((props) => {
    const screen = useScreen();
    const cursor = useCursor();
    const workbench = useWorkbench();
    const history = useHistory();
    const sizeRef = useRef({});
    const prefix = usePrefix('designer-tools');
    const renderHistoryController = () => {
        if (!props.use?.includes('HISTORY'))
            return null;
        return (React.createElement(Button.Group, { size: "small", style: { marginRight: 20 } },
            React.createElement(Button, { size: "small", disabled: !history?.allowUndo, onClick: () => {
                    history.undo();
                } },
                React.createElement(IconWidget, { infer: "Undo" })),
            React.createElement(Button, { size: "small", disabled: !history?.allowRedo, onClick: () => {
                    history.redo();
                } },
                React.createElement(IconWidget, { infer: "Redo" }))));
    };
    const renderCursorController = () => {
        if (workbench.type !== 'DESIGNABLE')
            return null;
        if (!props.use?.includes('CURSOR'))
            return null;
        return (React.createElement(Button.Group, { size: "small", style: { marginRight: 20 } },
            React.createElement(Button, { size: "small", disabled: cursor.type === CursorType.Normal, onClick: () => {
                    cursor.setType(CursorType.Normal);
                } },
                React.createElement(IconWidget, { infer: "Move" })),
            React.createElement(Button, { size: "small", disabled: cursor.type === CursorType.Selection, onClick: () => {
                    cursor.setType(CursorType.Selection);
                } },
                React.createElement(IconWidget, { infer: "Selection" }))));
    };
    const renderResponsiveController = () => {
        if (!props.use?.includes('SCREEN_TYPE'))
            return null;
        if (screen.type !== ScreenType.Responsive)
            return null;
        return (React.createElement(Fragment, null,
            React.createElement(InputNumber, { size: "small", value: screen.width, style: { width: 70, textAlign: 'center' }, onChange: (value) => {
                    sizeRef.current.width = value;
                }, onPressEnter: () => {
                    screen.setSize(sizeRef.current.width, screen.height);
                } }),
            React.createElement(IconWidget, { size: 10, infer: "Close", style: { padding: '0 3px', color: '#999' } }),
            React.createElement(InputNumber, { value: screen.height, size: "small", style: {
                    width: 70,
                    textAlign: 'center',
                    marginRight: 10,
                }, onChange: (value) => {
                    sizeRef.current.height = value;
                }, onPressEnter: () => {
                    screen.setSize(screen.width, sizeRef.current.height);
                } }),
            (screen.width !== '100%' || screen.height !== '100%') && (React.createElement(Button, { size: "small", style: { marginRight: 20 }, onClick: () => {
                    screen.resetSize();
                } },
                React.createElement(IconWidget, { infer: "Recover" })))));
    };
    const renderScreenTypeController = () => {
        if (!props.use?.includes('SCREEN_TYPE'))
            return null;
        return (React.createElement(Button.Group, { size: "small", style: { marginRight: 20 } },
            React.createElement(Button, { size: "small", disabled: screen.type === ScreenType.PC, onClick: () => {
                    screen.setType(ScreenType.PC);
                } },
                React.createElement(IconWidget, { infer: "PC" })),
            React.createElement(Button, { size: "small", disabled: screen.type === ScreenType.Mobile, onClick: () => {
                    screen.setType(ScreenType.Mobile);
                } },
                React.createElement(IconWidget, { infer: "Mobile" })),
            React.createElement(Button, { size: "small", disabled: screen.type === ScreenType.Responsive, onClick: () => {
                    screen.setType(ScreenType.Responsive);
                } },
                React.createElement(IconWidget, { infer: "Responsive" }))));
    };
    const renderMobileController = () => {
        if (!props.use?.includes('SCREEN_TYPE'))
            return null;
        if (screen.type !== ScreenType.Mobile)
            return;
        return (React.createElement(Button, { size: "small", style: { marginRight: 20 }, onClick: () => {
                screen.setFlip(!screen.flip);
            } },
            React.createElement(IconWidget, { infer: "Flip", style: {
                    transition: 'all .15s ease-in',
                    transform: screen.flip ? 'rotate(-90deg)' : '',
                } })));
    };
    return (React.createElement("div", { style: props.style, className: cls(prefix, props.className) },
        renderHistoryController(),
        renderCursorController(),
        renderScreenTypeController(),
        renderMobileController(),
        renderResponsiveController()));
});
DesignerToolsWidget.defaultProps = {
    use: ['HISTORY', 'CURSOR', 'SCREEN_TYPE'],
};

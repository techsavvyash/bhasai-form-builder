import React, { Fragment, useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { observer, useField } from '@formily/react';
import { FormLayout } from '@formily/antd';
import { IconWidget, usePrefix, useTreeNode } from '@samagrax/react';
import { Button } from 'antd';
import cls from 'classnames';
import './styles.less';
export const DrawerSetter = observer((props) => {
    const node = useTreeNode();
    const field = useField();
    const [visible, setVisible] = useState(false);
    const [remove, setRemove] = useState(false);
    const [root, setRoot] = useState();
    const prefix = usePrefix('drawer-setter');
    const formWrapperCls = usePrefix('settings-form-wrapper');
    useLayoutEffect(() => {
        const wrapper = document.querySelector('.' + formWrapperCls);
        if (wrapper) {
            setRoot(wrapper);
        }
    }, [node]);
    const renderDrawer = () => {
        if (root && visible) {
            return createPortal(React.createElement("div", { className: cls(prefix, 'animate__animated animate__slideInRight', {
                    animate__slideOutRight: remove,
                }) },
                React.createElement("div", { className: prefix + '-header', onClick: handleClose },
                    React.createElement(IconWidget, { infer: "Return", size: 18 }),
                    React.createElement("span", { className: prefix + '-header-text' }, props.text || field.title)),
                React.createElement("div", { className: prefix + '-body' },
                    React.createElement(FormLayout, { colon: false, labelWidth: 120, labelAlign: "left", wrapperAlign: "right", feedbackLayout: "none", tooltipLayout: "text" }, props.children))), root);
        }
        return null;
    };
    const handleOpen = () => {
        setVisible(true);
    };
    const handleClose = () => {
        setRemove(true);
        setTimeout(() => {
            setVisible(false);
            setRemove(false);
        }, 150);
    };
    return (React.createElement(Fragment, null,
        React.createElement(Button, { block: true, onClick: handleOpen, ...props.triggerProps }, props.text || field.title),
        renderDrawer()));
});

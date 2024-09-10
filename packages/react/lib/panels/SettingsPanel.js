import React, { useEffect, useState } from 'react';
import { requestIdle } from '@samagrax/shared';
import { observer } from '@formily/reactive-react';
import { TextWidget, IconWidget } from '../widgets';
import { usePrefix, useWorkbench } from '../hooks';
import cls from 'classnames';
export const SettingsPanel = observer((props) => {
    const prefix = usePrefix('settings-panel');
    const workbench = useWorkbench();
    const [innerVisible, setInnerVisible] = useState(true);
    const [pinning, setPinning] = useState(false);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        if (visible || workbench.type === 'DESIGNABLE') {
            if (!innerVisible) {
                requestIdle(() => {
                    requestAnimationFrame(() => {
                        setInnerVisible(true);
                    });
                });
            }
        }
    }, [visible, workbench.type]);
    if (workbench.type !== 'DESIGNABLE') {
        if (innerVisible)
            setInnerVisible(false);
        return null;
    }
    if (!visible) {
        if (innerVisible)
            setInnerVisible(false);
        return (React.createElement("div", { className: prefix + '-opener', onClick: () => {
                setVisible(true);
            } },
            React.createElement(IconWidget, { infer: "Setting", size: 20 })));
    }
    return (React.createElement("div", { className: cls(prefix, { pinning }) },
        React.createElement("div", { className: prefix + '-header' },
            React.createElement("div", { className: prefix + '-header-title' },
                React.createElement(TextWidget, null, props.title)),
            React.createElement("div", { className: prefix + '-header-actions' },
                React.createElement("div", { className: prefix + '-header-extra' }, props.extra),
                !pinning && (React.createElement(IconWidget, { infer: "PushPinOutlined", className: prefix + '-header-pin', onClick: () => {
                        setPinning(!pinning);
                    } })),
                pinning && (React.createElement(IconWidget, { infer: "PushPinFilled", className: prefix + '-pin-filled', onClick: () => {
                        setPinning(!pinning);
                    } })),
                React.createElement(IconWidget, { infer: "Close", className: prefix + '-header-close', onClick: () => {
                        setVisible(false);
                    } }))),
        React.createElement("div", { className: prefix + '-body' }, innerVisible && props.children)));
});

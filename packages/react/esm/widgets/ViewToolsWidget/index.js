import React from 'react';
import { Button } from 'antd';
import { observer } from '@formily/reactive-react';
import { IconWidget } from '../IconWidget';
import { usePrefix, useWorkbench } from '../../hooks';
import cls from 'classnames';
export const ViewToolsWidget = observer(({ use, style, className }) => {
    const workbench = useWorkbench();
    const prefix = usePrefix('view-tools');
    return (React.createElement(Button.Group, { style: style, className: cls(prefix, className) },
        use.includes('DESIGNABLE') && (React.createElement(Button, { disabled: workbench.type === 'DESIGNABLE', onClick: () => {
                workbench.type = 'DESIGNABLE';
            }, size: "small" },
            React.createElement(IconWidget, { infer: "Design" }))),
        use.includes('JSONTREE') && (React.createElement(Button, { disabled: workbench.type === 'JSONTREE', onClick: () => {
                workbench.type = 'JSONTREE';
            }, size: "small" },
            React.createElement(IconWidget, { infer: "JSON" }))),
        use.includes('MARKUP') && (React.createElement(Button, { disabled: workbench.type === 'MARKUP', onClick: () => {
                workbench.type = 'MARKUP';
            }, size: "small" },
            React.createElement(IconWidget, { infer: "Code" }))),
        use.includes('PREVIEW') && (React.createElement(Button, { disabled: workbench.type === 'PREVIEW', onClick: () => {
                workbench.type = 'PREVIEW';
            }, size: "small" },
            React.createElement(IconWidget, { infer: "Play" })))));
});
ViewToolsWidget.defaultProps = {
    use: ['DESIGNABLE', 'JSONTREE', 'PREVIEW'],
};

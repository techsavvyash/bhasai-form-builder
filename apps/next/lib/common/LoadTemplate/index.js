import React from 'react';
import { NodeActionsWidget } from '@samagrax/react';
export const LoadTemplate = (props) => {
    return (React.createElement(NodeActionsWidget, null, props.actions?.map((action, key) => {
        return React.createElement(NodeActionsWidget.Action, { ...action, key: key });
    })));
};

import React, { Fragment } from 'react';
import { observer } from '@formily/reactive-react';
export const NodeTitleWidget = observer((props) => {
    const takeNode = () => {
        const node = props.node;
        if (node.componentName === '$$ResourceNode$$') {
            return node.children[0];
        }
        return node;
    };
    const node = takeNode();
    return React.createElement(Fragment, null, node.getMessage('title') || node.componentName);
});

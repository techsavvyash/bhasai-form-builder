import React, { useEffect, useState } from 'react';
import { observer } from '@formily/reactive-react';
import { useTree, useWorkbench } from '../hooks';
import { Viewport } from '../containers';
import { requestIdle } from '@samagrax/shared';
export const ViewPanel = observer((props) => {
    const [visible, setVisible] = useState(true);
    const workbench = useWorkbench();
    const tree = useTree();
    useEffect(() => {
        if (workbench.type === props.type) {
            requestIdle(() => {
                requestAnimationFrame(() => {
                    setVisible(true);
                });
            });
        }
        else {
            setVisible(false);
        }
    }, [workbench.type]);
    if (workbench.type !== props.type)
        return null;
    const render = () => {
        return props.children(tree, (payload) => {
            tree.from(payload);
            tree.takeSnapshot();
        });
    };
    if (workbench.type === 'DESIGNABLE')
        return (React.createElement(Viewport, { dragTipsDirection: props.dragTipsDirection }, render()));
    return (React.createElement("div", { style: {
            overflow: props.scrollable ? 'overlay' : 'hidden',
            height: '100%',
            cursor: 'auto',
            userSelect: 'text',
        } }, visible && render()));
});
ViewPanel.defaultProps = {
    scrollable: true,
};

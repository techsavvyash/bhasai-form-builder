import React from 'react';
import { useDesigner, usePrefix } from '../../hooks';
import cls from 'classnames';
export var ResizeHandleType;
(function (ResizeHandleType) {
    ResizeHandleType["Resize"] = "RESIZE";
    ResizeHandleType["ResizeWidth"] = "RESIZE_WIDTH";
    ResizeHandleType["ResizeHeight"] = "RESIZE_HEIGHT";
})(ResizeHandleType || (ResizeHandleType = {}));
export const ResizeHandle = (props) => {
    const prefix = usePrefix('resize-handle');
    const designer = useDesigner();
    return (React.createElement("div", { ...props, [designer.props.screenResizeHandlerAttrName]: props.type, className: cls(prefix, {
            [`${prefix}-${props.type}`]: !!props.type,
        }) }, props.children));
};

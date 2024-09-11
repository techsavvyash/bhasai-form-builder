import React from 'react';
export declare enum ResizeHandleType {
    Resize = "RESIZE",
    ResizeWidth = "RESIZE_WIDTH",
    ResizeHeight = "RESIZE_HEIGHT"
}
export interface IResizeHandleProps {
    type?: ResizeHandleType;
    children?: React.ReactNode;
}
export declare const ResizeHandle: React.FC<IResizeHandleProps>;

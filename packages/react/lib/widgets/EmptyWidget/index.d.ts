import React from 'react';
import './styles.less';
export interface IEmptyWidgetProps {
    dragTipsDirection?: 'left' | 'right';
    children?: any;
}
export declare const EmptyWidget: React.FC<IEmptyWidgetProps>;

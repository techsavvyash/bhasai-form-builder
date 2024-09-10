import React from 'react';
import './styles.less';
type DesignerToolsType = 'HISTORY' | 'CURSOR' | 'SCREEN_TYPE';
export type IDesignerToolsWidgetProps = {
    className?: string;
    style?: React.CSSProperties;
    use?: DesignerToolsType[];
};
export declare const DesignerToolsWidget: React.FC<IDesignerToolsWidgetProps>;
export {};

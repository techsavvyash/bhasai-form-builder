import React from 'react';
import { IDesignerMiniLocales } from '@samagrax/core';
export interface ITextWidgetProps {
    componentName?: string;
    sourceName?: string;
    token?: string | IDesignerMiniLocales;
    defaultMessage?: string | IDesignerMiniLocales;
    children?: any;
}
export declare const TextWidget: React.FC<ITextWidgetProps>;

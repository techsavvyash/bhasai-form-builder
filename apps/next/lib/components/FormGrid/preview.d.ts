import React from 'react';
import { FormGrid as FormilyGird } from '@formily/next';
import { DnFC } from '@samagrax/react';
import './styles.less';
type formilyGrid = typeof FormilyGird;
export declare const FormGrid: DnFC<React.ComponentProps<formilyGrid>> & {
    GridColumn?: React.FC<React.ComponentProps<formilyGrid['GridColumn']>>;
};
export {};

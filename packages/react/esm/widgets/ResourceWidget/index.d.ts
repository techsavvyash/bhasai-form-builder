import React from 'react';
import { IResourceLike, IResource } from '@samagrax/core';
import './styles.less';
export type SourceMapper = (resource: IResource) => React.ReactChild;
export interface IResourceWidgetProps {
    title: React.ReactNode;
    sources?: IResourceLike[];
    className?: string;
    defaultExpand?: boolean;
    children?: SourceMapper | React.ReactElement;
}
export declare const ResourceWidget: React.FC<IResourceWidgetProps>;

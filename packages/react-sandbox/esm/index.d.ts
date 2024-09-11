import React from 'react';
export interface ISandboxProps {
    style?: React.CSSProperties;
    cssAssets?: string[];
    jsAssets?: string[];
    scope?: any;
}
export declare const useSandbox: (props: React.PropsWithChildren<ISandboxProps>) => React.MutableRefObject<HTMLIFrameElement>;
export declare const useSandboxScope: () => any;
export declare const renderSandboxContent: (render: (scope?: any) => JSX.Element) => void;
export declare const Sandbox: React.FC<ISandboxProps>;

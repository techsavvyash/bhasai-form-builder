import { Engine } from '@samagrax/core';
export interface IEffects {
    (engine: Engine): void;
}
export declare const useDesigner: (effects?: IEffects) => Engine;

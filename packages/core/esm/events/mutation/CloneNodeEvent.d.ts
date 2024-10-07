import { ICustomEvent } from '@samagrax/shared';
import { AbstractMutationNodeEvent } from './AbstractMutationNodeEvent';
export declare class CloneNodeEvent extends AbstractMutationNodeEvent implements ICustomEvent {
    type: string;
}

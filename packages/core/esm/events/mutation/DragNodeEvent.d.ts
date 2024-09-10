import { ICustomEvent } from '@samagrax/shared';
import { AbstractMutationNodeEvent } from './AbstractMutationNodeEvent';
export declare class DragNodeEvent extends AbstractMutationNodeEvent implements ICustomEvent {
    type: string;
}

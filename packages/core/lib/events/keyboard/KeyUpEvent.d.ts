import { ICustomEvent } from '@samagrax/shared';
import { AbstractKeyboardEvent } from './AbstractKeyboardEvent';
export declare class KeyUpEvent extends AbstractKeyboardEvent implements ICustomEvent {
    type: string;
}

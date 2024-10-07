import { ICustomEvent } from '@samagrax/shared';
import { AbstractCursorEvent } from './AbstractCursorEvent';
export declare class MouseClickEvent extends AbstractCursorEvent implements ICustomEvent {
    type: string;
}
export declare class MouseDoubleClickEvent extends AbstractCursorEvent implements ICustomEvent {
    type: string;
}

import { ICustomEvent } from '@samagrax/shared';
import { AbstractWorkspaceEvent } from './AbstractWorkspaceEvent';
export declare class SwitchWorkspaceEvent extends AbstractWorkspaceEvent implements ICustomEvent {
    type: string;
}

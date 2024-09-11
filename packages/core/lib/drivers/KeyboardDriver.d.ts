import { EventDriver } from '@samagrax/shared';
export declare class KeyboardDriver extends EventDriver {
    onKeyDown: (e: KeyboardEvent) => void;
    onKeyUp: (e: KeyboardEvent) => void;
    attach(): void;
    detach(): void;
}

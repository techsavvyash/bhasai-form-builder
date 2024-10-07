import { GlobalRegistry } from '@samagrax/core';
import { globalThisPolyfill } from '@samagrax/shared';
export const useRegistry = () => {
    return globalThisPolyfill['__DESIGNER_REGISTRY__'] || GlobalRegistry;
};

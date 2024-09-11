import { useContext, useEffect } from 'react';
import { DesignerEngineContext } from '../context';
import { isFn, globalThisPolyfill } from '@samagrax/shared';
export const useDesigner = (effects) => {
    const designer = globalThisPolyfill['__DESIGNABLE_ENGINE__'] ||
        useContext(DesignerEngineContext);
    useEffect(() => {
        if (isFn(effects)) {
            return effects(designer);
        }
    }, []);
    return designer;
};

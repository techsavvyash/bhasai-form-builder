import { useContext } from 'react';
import { DesignerLayoutContext } from '../context';
import { globalThisPolyfill } from '@samagrax/shared';
export const useLayout = () => {
    return (globalThisPolyfill['__DESIGNABLE_LAYOUT__'] ||
        useContext(DesignerLayoutContext));
};

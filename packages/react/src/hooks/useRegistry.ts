import { GlobalRegistry, IDesignerRegistry } from '@samagrax/core'
import { globalThisPolyfill } from '@samagrax/shared'

export const useRegistry = (): IDesignerRegistry => {
  return globalThisPolyfill['__DESIGNER_REGISTRY__'] || GlobalRegistry
}

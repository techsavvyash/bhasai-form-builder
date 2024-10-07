import { parse } from './parser'
import { Flowise } from './flowise'

function formilyCompiler(formilyJSON) {
  // Parsing formilyJSON -> Array of {title, component, description, validation(optional), options(optional)}
  const fieldDetails = parse(formilyJSON.schema.properties)
  const flowiseJSON = new Flowise(fieldDetails)
  return flowiseJSON.toJSON()
}

export default formilyCompiler

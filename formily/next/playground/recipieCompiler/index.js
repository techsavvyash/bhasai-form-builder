import { RecipeCompiler } from './recipieCompiler'
import { nodeOrganiser } from './nodeOrganiser'

export default function uploadLogic(flowiseSchema) {
  const chatflowName = ''
  flowiseSchema = { ...flowiseSchema, name: chatflowName }
  // console.log('flowData:', flowiseSchema)
  try {
    const flowiseSchemaCopy = nodeOrganiser(flowiseSchema)
    flowiseSchemaCopy.nodes.forEach(function (element) {
      if (element.data && element.data.inputs) {
        for (let key in element.data.inputs) {
          if (
            typeof element.data.inputs[key] === 'string' &&
            (element.data.inputs[key].startsWith('{') ||
              element.data.inputs[key].startsWith('['))
          ) {
            try {
              // Parse the JSON and update the input value
              element.data.inputs[key] = JSON.parse(element.data.inputs[key])
              // console.log(JSON.parse(element.data.inputs[key]))
            } catch (error) {
              // Handle JSON parsing errors if necessary
              console.error('Error parsing JSON:', error)
            }
          } else if (
            typeof element.data.inputs[key] === 'string' &&
            element.data.inputs['setters'] === ''
          ) {
            element.data.inputs[key] = {}
          } else if (
            // if not starting with { or [ then delete them
            typeof element.data.inputs[key] === 'string' &&
            (key === 'body' ||
              key === 'headers' ||
              element.data.inputs['query'] === '')
          ) {
            try {
              ;(key === 'body' || key === 'headers' || key === 'query') &&
                delete element.data.inputs[key]
            } catch (error) {
              // Handle JSON parsing errors if necessary
              console.error('Error:', error)
            }
          }
        }
      }
    })
    const compiler = new RecipeCompiler()
    // console.log('compiler input:', flowiseSchemaCopy)
    const compilerOutput = compiler.compileLogic(flowiseSchemaCopy)
    // console.log('Compiler Data:', compilerOutput)
    let response = {
      flowData: flowiseSchema,
      compilerData: compilerOutput,
    }
    return response
    // console.log('response data 1', response)
  } catch (err) {
    // console.log('err', err)
  }
}

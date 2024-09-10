import { Engine } from '@samagrax/core'
import {
  transformToSchema,
  transformToTreeNode,
} from '@samagrax/formily-transformer'
import { message } from 'antd'
import formily_flowise_compiler from '../compiler'

export const saveSchema = (designer: Engine) => {
  // const formilyJSON =
  localStorage.setItem(
    'formily-schema',
    JSON.stringify(transformToSchema(designer.getCurrentTree()))
  )
  // compile shit here
  const formDef = formily_flowise_compiler(
    transformToSchema(designer.getCurrentTree())
  )
  localStorage.setItem('flowise-schema', JSON.stringify(formDef))
  // Download the flowise schema as a JSON file
  // Creating a blob Object
  const blob = new Blob([JSON.stringify(formDef, null, 2)], {
    type: 'application/json',
  })
  // Creating an object URL
  const url = URL.createObjectURL(blob)
  // Creating an anchor tag
  const a = document.createElement('a')
  // Setting the href attribute
  a.href = url
  a.download = 'flowise-schema.json'
  // Appending the anchor tag to the body
  document.body.appendChild(a)
  // Triggering the click event
  a.click()
  // Removing the anchor tag from the body
  document.body.removeChild(a)
  // Revoking the object URL
  URL.revokeObjectURL(url)
  message.success('Save Success')
}

export const loadInitialSchema = (designer: Engine) => {
  try {
    designer.setCurrentTree(
      transformToTreeNode(JSON.parse(localStorage.getItem('formily-schema')))
    )
  } catch {}
}

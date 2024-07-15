import { Engine } from '@designable/core'
import {
  transformToSchema,
  transformToTreeNode,
} from '@designable/formily-transformer'
import { message } from 'antd'

export const saveSchema = (designer: Engine) => {
  localStorage.setItem(
    'formily-schema',
    JSON.stringify(transformToSchema(designer.getCurrentTree()))
  )
  // Download the flowise schema as a JSON file
  // Creating a blob Object
  const blob = new Blob([JSON.stringify(flowise, null, 2)], {
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

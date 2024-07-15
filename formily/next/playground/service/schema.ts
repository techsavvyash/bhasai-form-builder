import { Engine } from '@designable/core'
import {
  transformToSchema,
  transformToTreeNode,
} from '@designable/formily-transformer'
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
  message.success('Save Success')
}

export const loadInitialSchema = (designer: Engine) => {
  try {
    designer.setCurrentTree(
      transformToTreeNode(JSON.parse(localStorage.getItem('formily-schema')))
    )
  } catch {}
}

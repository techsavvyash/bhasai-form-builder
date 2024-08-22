import { Engine } from '@designable/core'
import {
  transformToSchema,
  transformToTreeNode,
} from '@designable/formily-transformer'
import { message } from 'antd'
import formily_flowise_compiler from '../compiler'
import genFlowData from '../recipieCompiler'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

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

// Publish Button Actions
export const publish = async (designer: Engine) => {
  const formDef = formily_flowise_compiler(
    transformToSchema(designer.getCurrentTree())
  )
  try {
    // Convert to logicDef (recipie Compiler)
    const data = genFlowData(formDef)
    if (data) {
      const { compilerData } = data
      // console.log('handleSaveCompilerData', compilerData);
      // Download flowise data as json
      let dataStr = JSON.stringify(compilerData)
      let dataUri =
        'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr)
      let compilerOutputFileDefaultName = `compilerOutput.json`
      let linkElement = document.createElement('a')
      linkElement.setAttribute('href', dataUri)
      linkElement.setAttribute('download', compilerOutputFileDefaultName)
      linkElement.click()

      const getBot = await axios.get(
        process.env.REACT_APP_UCI_API +
          `/admin/bot/bcfb3fe6-adc4-4aac-b292-c351fea6c08a`,
        {
          headers: {
            authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjZmNDgwZjY2NCJ9.eyJhdWQiOiJmMjA3MGI4YS0wNDkxLTQ1Y2ItOWYzNS04NTk5ZDZkZDc3ZWYiLCJleHAiOjE3MjQyNDAyODAsImlhdCI6MTcyNDIwNDI4MCwiaXNzIjoiYWNtZS5jb20iLCJzdWIiOiJjYmVjN2M0OS01ZDI0LTRhMmEtOTk2Ny1jMjgwYTkzMmE5NGUiLCJqdGkiOiJlZjIxZTNmZS04MjZjLTRmMmQtYWYwMi00ZTAxZDA5NjBlOTciLCJhdXRoZW50aWNhdGlvblR5cGUiOiJQQVNTV09SRCIsImVtYWlsIjoicGxheWdyb3VuZG93bmVyQHNhbWFncmFnb3Zlcm5hbmNlLmluIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImFwcGxpY2F0aW9uSWQiOiJmMjA3MGI4YS0wNDkxLTQ1Y2ItOWYzNS04NTk5ZDZkZDc3ZWYiLCJyb2xlcyI6WyJvd25lciJdLCJhdXRoX3RpbWUiOjE3MjQyMDQyODAsInRpZCI6IjA3ZTcxMmU4LTUyYTEtN2IwNS05YjYwLTI3YWI0ODFmOTIzZiJ9.-S9MzFXDrL58GCukg3aKZj3C2vw-CFcvZtAyaozXNlA',
          },
        }
      )
      // console.log('getBot:', getBot?.data);

      const convLogicRes = await axios.patch(
        process.env.REACT_APP_UCI_API +
          `/admin/conversationLogic/${getBot?.data?.result?.conversationLogicId}`,
        { logicDef: compilerData },
        {
          headers: {
            authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjZmNDgwZjY2NCJ9.eyJhdWQiOiJmMjA3MGI4YS0wNDkxLTQ1Y2ItOWYzNS04NTk5ZDZkZDc3ZWYiLCJleHAiOjE3MjQyNDAyODAsImlhdCI6MTcyNDIwNDI4MCwiaXNzIjoiYWNtZS5jb20iLCJzdWIiOiJjYmVjN2M0OS01ZDI0LTRhMmEtOTk2Ny1jMjgwYTkzMmE5NGUiLCJqdGkiOiJlZjIxZTNmZS04MjZjLTRmMmQtYWYwMi00ZTAxZDA5NjBlOTciLCJhdXRoZW50aWNhdGlvblR5cGUiOiJQQVNTV09SRCIsImVtYWlsIjoicGxheWdyb3VuZG93bmVyQHNhbWFncmFnb3Zlcm5hbmNlLmluIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImFwcGxpY2F0aW9uSWQiOiJmMjA3MGI4YS0wNDkxLTQ1Y2ItOWYzNS04NTk5ZDZkZDc3ZWYiLCJyb2xlcyI6WyJvd25lciJdLCJhdXRoX3RpbWUiOjE3MjQyMDQyODAsInRpZCI6IjA3ZTcxMmU4LTUyYTEtN2IwNS05YjYwLTI3YWI0ODFmOTIzZiJ9.-S9MzFXDrL58GCukg3aKZj3C2vw-CFcvZtAyaozXNlA',
          },
        }
      )
      // console.log('convLogicRes:', convLogicRes?.data);

      // handleSaveFlowiseData(chatflowName); => the code is below
      const { flowData } = data
      // console.log('handleSaveFlowiseData', flowData);
      setTimeout(async () => {
        try {
          if (sessionStorage.getItem('transformerId')) {
            const transformerApi =
              process.env.REACT_APP_UCI_API +
              '/admin/transformer/' +
              'a265e839-0591-4733-9f12-31d02c0d76e6'
            const res = await axios.patch(
              transformerApi,
              { name: uuidv4(), config: flowData },
              {
                headers: {
                  authorization:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjZmNDgwZjY2NCJ9.eyJhdWQiOiJmMjA3MGI4YS0wNDkxLTQ1Y2ItOWYzNS04NTk5ZDZkZDc3ZWYiLCJleHAiOjE3MjQyNDAyODAsImlhdCI6MTcyNDIwNDI4MCwiaXNzIjoiYWNtZS5jb20iLCJzdWIiOiJjYmVjN2M0OS01ZDI0LTRhMmEtOTk2Ny1jMjgwYTkzMmE5NGUiLCJqdGkiOiJlZjIxZTNmZS04MjZjLTRmMmQtYWYwMi00ZTAxZDA5NjBlOTciLCJhdXRoZW50aWNhdGlvblR5cGUiOiJQQVNTV09SRCIsImVtYWlsIjoicGxheWdyb3VuZG93bmVyQHNhbWFncmFnb3Zlcm5hbmNlLmluIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImFwcGxpY2F0aW9uSWQiOiJmMjA3MGI4YS0wNDkxLTQ1Y2ItOWYzNS04NTk5ZDZkZDc3ZWYiLCJyb2xlcyI6WyJvd25lciJdLCJhdXRoX3RpbWUiOjE3MjQyMDQyODAsInRpZCI6IjA3ZTcxMmU4LTUyYTEtN2IwNS05YjYwLTI3YWI0ODFmOTIzZiJ9.-S9MzFXDrL58GCukg3aKZj3C2vw-CFcvZtAyaozXNlA',
                },
              }
            )
            // console.log('res:', res?.data);
          } else {
            const transformerApi =
              process.env.REACT_APP_UCI_API + '/admin/transformer'
            const res = await axios.post(
              transformerApi,
              { name: uuidv4(), config: flowData },
              {
                headers: {
                  authorization:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjZmNDgwZjY2NCJ9.eyJhdWQiOiJmMjA3MGI4YS0wNDkxLTQ1Y2ItOWYzNS04NTk5ZDZkZDc3ZWYiLCJleHAiOjE3MjQyNDAyODAsImlhdCI6MTcyNDIwNDI4MCwiaXNzIjoiYWNtZS5jb20iLCJzdWIiOiJjYmVjN2M0OS01ZDI0LTRhMmEtOTk2Ny1jMjgwYTkzMmE5NGUiLCJqdGkiOiJlZjIxZTNmZS04MjZjLTRmMmQtYWYwMi00ZTAxZDA5NjBlOTciLCJhdXRoZW50aWNhdGlvblR5cGUiOiJQQVNTV09SRCIsImVtYWlsIjoicGxheWdyb3VuZG93bmVyQHNhbWFncmFnb3Zlcm5hbmNlLmluIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImFwcGxpY2F0aW9uSWQiOiJmMjA3MGI4YS0wNDkxLTQ1Y2ItOWYzNS04NTk5ZDZkZDc3ZWYiLCJyb2xlcyI6WyJvd25lciJdLCJhdXRoX3RpbWUiOjE3MjQyMDQyODAsInRpZCI6IjA3ZTcxMmU4LTUyYTEtN2IwNS05YjYwLTI3YWI0ODFmOTIzZiJ9.-S9MzFXDrL58GCukg3aKZj3C2vw-CFcvZtAyaozXNlA',
                },
              }
            )
            // console.log('res:', res?.data);
            sessionStorage.setItem('transformerId', res?.data?.result?.id)
          }
        } catch (error) {
          const err = error.message
          // console.log('error:', err);
        }
      })
    }
  } catch (error) {
    const err = error.message
    // console.log('error:', err);
  }
}

export const loadInitialSchema = (designer: Engine) => {
  try {
    designer.setCurrentTree(
      transformToTreeNode(JSON.parse(localStorage.getItem('formily-schema')))
    )
  } catch {}
}

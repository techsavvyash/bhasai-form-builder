/**
 * This file contains base JSONs for the transformer nodes used.
 */

import { EndOfSurvey } from '../logic/snippets'

/**
 * JSON for "Start Node"
 */
const startNode = {
  id: 'start',
  data: {
    id: 'start',
    name: 'start',
    type: 'Output',
    label: 'Start',
    inputs: {},
    outputs: {
      startPointer: '',
    },
    category: 'Miscellaneous',
    selected: false,
    baseClasses: ['xMessage'],
    description: 'Start pointer Points to node  ',
    inputParams: [],
    inputAnchors: [],
    outputAnchors: [
      {
        id: 'start-output-startPointer-xMessage',
        name: 'startPointer',
        type: 'xMessage',
        label: 'start Pointer',
      },
    ],
  },
  type: 'customNode',
  width: 300,
  height: 113,
  dragging: false,
  position: {
    x: 409.5560193025037,
    y: 25.92199759211908,
  },
  selected: false,
  positionAbsolute: {
    x: 409.5560193025037,
    y: 25.92199759211908,
  },
  style: {},
}

/**
 * JSON for a "Code Runner" transformer which says "Thank You!"
 */
const endNode = {
  id: 'CODE_RUNNER_END',
  position: {
    x: 3255.789032183661,
    y: -141.0959960862705,
  },
  type: 'customNode',
  data: {
    label: 'Code Runner Transformer',
    name: 'CODE_RUNNER',
    type: 'Output',
    category: 'GenericTransformer',
    description: 'A code runner capable of running custom JS code.',
    baseClasses: ['xMessage'],
    inputs: {
      xmessage: [], // will be filled by other code.
      code: `${EndOfSurvey()}`,
    },
    outputs: {
      onSuccess: '',
      onError: '',
    },
    inputAnchors: [
      {
        label: 'XMessage',
        name: 'xmessage',
        type: 'xMessage',
        list: true,
        id: 'CODE_RUNNER_END-input-xmessage-xMessage',
      },
    ],
    inputParams: [
      {
        label: 'Code',
        name: 'code',
        type: 'ide',
        rows: 2,
        id: 'CODE_RUNNER_END-input-code-ide',
      },
      {
        id: 'CODE_RUNNER_END-input-sideEffects-json',
        label: 'SideEffects',
        name: 'sideEffects',
        rows: 2,
        type: 'json',
      },
    ],
    outputAnchors: [
      {
        id: 'CODE_RUNNER_END-output-onSuccess-xMessage',
        name: 'onSuccess',
        label: 'On Success',
        type: 'xMessage',
      },
      {
        id: 'CODE_RUNNER_END-output-onError-xMessage',
        name: 'onError',
        label: 'On Error',
        type: 'xMessage',
      },
    ],
    id: 'CODE_RUNNER_END',
    selected: false,
  },
  width: 300,
  height: 569,
  selected: false,
  dragging: false,
  positionAbsolute: {
    x: 3255.789032183661,
    y: -141.0959960862705,
  },
  style: {},
}

/**
 * JSON for "LLM Transformer"
 */
const llmNode = {
  id: 'LLM',
  position: { x: 3988.7271438010634, y: -661.3071523540692 },
  type: 'customNode',
  data: {
    label: 'LLM Transformer',
    category: 'GenericTransformer',
    name: 'LLM',
    description: 'A general LLM model based transformer.',
    baseClasses: ['xMessage'],
    inputs: {
      xmessage: ['start.data.instance'],
      APIKey: '',
      model: '',
      prompt: '',
      corpusPrompt: '',
      temperature: '',
      enableStream: false,
      outputLanguage: '',
      outboundURL: '',
      bhashiniUserId: '',
      bhashiniAPIKey: '',
      bhashiniURL: '',
      provider: '',
      contextLength: '',
      languageProvider: '',
    },
    outputs: { onSuccess: '', onError: '' },
    inputAnchors: [
      {
        label: 'XMessage',
        name: 'xmessage',
        type: 'xMessage',
        list: true,
        id: 'LLM-input-xmessage-xMessage',
      },
    ],
    inputParams: [
      {
        label: 'API Key',
        name: 'APIKey',
        type: 'string',
        id: 'LLM-input-APIKey-string',
      },
      {
        label: 'Model',
        name: 'model',
        type: 'string',
        id: 'LLM-input-model-string',
      },
      {
        label: 'Prompt',
        name: 'prompt',
        type: 'string',
        id: 'LLM-input-prompt-string',
      },
      {
        label: 'Corpus Prompt',
        name: 'corpusPrompt',
        type: 'string',
        id: 'LLM-input-corpusPrompt-string',
      },
      {
        label: 'Temperature',
        name: 'temperature',
        type: 'number',
        id: 'LLM-input-temperature-number',
      },
      {
        label: 'Enable Stream',
        name: 'enableStream',
        type: 'boolean',
        id: 'LLM-input-enableStream-boolean',
      },
      {
        label: 'Output Language',
        name: 'outputLanguage',
        type: 'string',
        id: 'LLM-input-outputLanguage-string',
      },
      {
        label: 'Outbound URL',
        name: 'outboundURL',
        type: 'string',
        id: 'LLM-input-outboundURL-string',
      },
      {
        label: 'Bhashini User ID',
        name: 'bhashiniUserId',
        type: 'string',
        id: 'LLM-input-bhashiniUserId-string',
      },
      {
        label: 'Bhashini API Key',
        name: 'bhashiniAPIKey',
        type: 'string',
        id: 'LLM-input-bhashiniAPIKey-string',
      },
      {
        label: 'Bhashini URL',
        name: 'bhashiniURL',
        type: 'string',
        id: 'LLM-input-bhashiniURL-string',
      },
      {
        label: 'Provider',
        name: 'provider',
        type: 'string',
        id: 'LLM-input-provider-string',
      },
      {
        label: 'Context Length',
        name: 'contextLength',
        type: 'number',
        id: 'LLM-input-contextLength-number',
      },
      {
        label: 'Language Provider',
        name: 'languageProvider',
        type: 'string',
        id: 'LLM-input-languageProvider-string',
      },
      {
        id: 'LLM-input-sideEffects-json',
        label: 'SideEffects',
        name: 'sideEffects',
        rows: 2,
        type: 'json',
      },
    ],
    outputAnchors: [
      {
        id: 'LLM-output-onSuccess-xMessage',
        name: 'onSuccess',
        label: 'On Success',
        type: 'xMessage',
      },
      {
        id: 'LLM-output-onError-xMessage',
        name: 'onError',
        label: 'On Error',
        type: 'xMessage',
      },
    ],
    id: 'LLM',
    selected: false,
  },
  width: 300,
  height: 1690,
  selected: true,
  positionAbsolute: { x: 3988.7271438010634, y: -661.3071523540692 },
  dragging: false,
}

export { startNode, endNode, llmNode }

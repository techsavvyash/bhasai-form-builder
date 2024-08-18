/**
 * This file contains the parsing code for the JSON schema of the formily form.
 */

// import { INPUT_FIELD_TYPES } from './con fieldTypes'
import { INPUT_FIELD_TYPES } from '../logic/options'
import { PropParser } from './prop-parser'

class FieldParsers {
  /**
   *
   * @param {*} _config This is the formily form definition JSON schema
   */
  constructor(_config) {
    this.formilyJSON = _config
    this.propParser = new PropParser()
  }

  /// FIELD PARSERS ///

  /**
   * Parses the "INPUT" type field from the formily form def
   * @param {*} fieldDetail
   * @returns
   */
  Input(fieldDetail) {
    let title
    if (fieldDetail['name']) {
      title = fieldDetail['name'].replace(/\s/g, '')
    } else {
      title = fieldDetail['x-designable-id']
    }
    // const title = fieldDetail['title'].replace(/\s/g, '') // mustn't have spaces
    const display = this.propParser.displayParser(fieldDetail)
    const reactions = this.propParser.reactionsParser(fieldDetail)
    return {
      title,
      component: 'Input',
      description: fieldDetail['description'] || 'Description not provided',
      validation: fieldDetail['x-validator']
        ? this.propParser.validationParser(fieldDetail['x-validator'])
        : [],
      display,
      reactions,
      required: fieldDetail['required'] || false,
    }
  }

  Select(fieldDetail) {
    let title
    if (fieldDetail['name']) {
      title = fieldDetail['name'].replace(/\s/g, '')
    } else {
      title = fieldDetail['x-designable-id']
    }
    // const title = fieldDetail['title'].replace(/\s/g, '')
    const display = this.propParser.displayParser(fieldDetail)
    const reactions = this.propParser.reactionsParser(fieldDetail)
    if (!fieldDetail['enum']) {
      return {
        title,
        component: 'Select',
        description: fieldDetail['description'] || 'Description not provided',
        validation: [],
        options: [],
        display,
        reactions,
        required: fieldDetail['required'] || false,
      }
    }
    return {
      title,
      component: 'Select',
      description: fieldDetail['description'] || 'Description not provided',
      validation: [],
      options: fieldDetail['enum'].map((option, index) => {
        return {
          key: option['value'],
          text: option['label'],
          isEnabled: true,
          showTextInput: true,
        }
      }),
      display,
      reactions,
      required: fieldDetail['required'] || false,
    }
  }

  /**
   * Parses the "TextArea" type field from the formily form def
   * @param {*} fieldDetail
   * @returns
   */
  TextArea(fieldDetail) {
    // TODO: Implement TextArea
  }

  // Formily Input Field Details Parser
  /**
   * Form Def Parser
   * @param {*} fieldDetail
   * @returns
   */
  parseFormilyInputFieldDetails(fieldDetail) {
    const component = fieldDetail['x-component']
    // Switch case for each type of component
    let parsedObject

    switch (component) {
      case INPUT_FIELD_TYPES.INPUT:
        parsedObject = this.Input(fieldDetail)
        break
      case INPUT_FIELD_TYPES.SELECT:
        parsedObject = this.Select(fieldDetail)
        break
      case INPUT_FIELD_TYPES.TEXTAREA:
        // TODO: Implement TextArea
        break
      default:
        parsedObject = {
          title: 'Error',
          component: 'Error',
          description: 'Component not found',
          validation: [],
          display: false,
          required: false,
        }
    }
    return parsedObject
  }
}

// Formily JSON Parser
export const parse = (properties) => {
  const fieldDetails = []
  const parser = new FieldParsers(properties)
  const fields = Object.keys(properties)
  fields.forEach((field) => {
    fieldDetails.push(parser.parseFormilyInputFieldDetails(properties[field]))
  })
  return fieldDetails
}

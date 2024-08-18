import {
  extractInnerString,
  getTitleFromDependency,
  replaceDepsWithFormInput,
} from './utils'

export class PropParser {
  /**
   * Parses the 'x-display' field in the JSON schema
   * @param {*} fieldDetail
   * @returns
   */
  displayParser(fieldDetail) {
    if (!fieldDetail['x-display']) return true
    const display = fieldDetail['x-display']
    if (display === 'visible' || display === 'inherit' || display === '')
      return true
    else return false
  }

  /**
   * Parses the 'x-reactions' field in the JSON schema
   * @param {*} fieldDetail
   * @returns boolean
   * that can be directly used in the 'isVisibleCode' field of Flowise
   */
  reactionsParser(fieldDetail) {
    if (!fieldDetail['x-reactions']) return true
    if (fieldDetail['x-reactions'] == {}) return true
    if (fieldDetail['x-reactions']['fulfill'] == {}) return true
    if (fieldDetail['x-reactions']['fulfill']['state'] == {}) return true
    if (fieldDetail['x-reactions']['fulfill']['state']['visible'] == {})
      return true
    const dependencies = fieldDetail['x-reactions']['dependencies']
    const visibleCode = extractInnerString(
      fieldDetail['x-reactions']['fulfill']['state']['visible']
    )
    const titles = getTitleFromDependency(dependencies)
    if (!visibleCode) return true
    if (!titles) return true
    const reactions = replaceDepsWithFormInput(visibleCode, titles)
    return reactions
  }

  /**
   * Parses the 'x-validator' field in the JSON schema
   * @param {*} validations
   * @returns An array of validation functions
   */
  validationParser(validations) {
    const validationArray = []
    if (typeof validations === 'string') {
      validationArray.push(validations)
      return validationArray
    }
    return validations.length != 0 ? validations : validationArray
  }
}

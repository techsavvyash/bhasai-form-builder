/**
 *
 * Function to extract the content within double curly braces
 * @param {*} input
 * @returns
 */
export function extractInnerString(input) {
  const regex = /\{\{(.*?)\}\}/s
  const match = regex.exec(input)
  return match ? match[1] : null
}

/**
 * Get 'title' from the form "dependencies" field.
 * @param {*} dependency
 * @param {*} formilyJSON
 * @returns
 */
export function getTitleFromDependency(dependency) {
  const titles = {}
  dependency.forEach((dep) => {
    const source = dep['source']
    // const title = formilyJSON[source]['title'].replace(/\s/g, '')
    const title = source.replace(/\s/g, '')
    const name = dep['name']
    titles[name] = title
  })
  return titles
}

/**
 * Replace $deps with formInput and variable parts with the desired format
 * @param {*} input
 * @param {*} titles
 * @returns
 */
export function replaceDepsWithFormInput(input, titles) {
  // Replace $deps with formInput
  let result = input.replace(/\$deps/g, 'formInput')

  // Define the regex pattern to match the variable parts
  const variablePattern = /\.(v_[a-z0-9]+)/g

  // Replace each matched variable part with the desired format
  result = result.replace(variablePattern, (match, p1) => {
    return `["${titles[p1]}"]`
  })

  return result
}

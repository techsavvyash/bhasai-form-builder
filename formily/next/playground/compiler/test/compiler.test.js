import { formily_flowise_compiler } from '../index'
// const formily_flowise_compiler = require('../index');
import * as fs from 'fs'
// const fs = require('fs');

describe('Formily Flowise Compiler Tests', () => {
  const readJSON = (path) => JSON.parse(fs.readFileSync(path, 'utf8'))

  test('Test case 1 (INPUT FIELD | SINGLE)', () => {
    const formily_input1 = readJSON('./formily/formily_input1.json')
    const expected_output1 = readJSON('./flowise/flowise_output1.json')
    const flowise_output1 = formily_flowise_compiler(formily_input1)
    expect(flowise_output1).toEqual(expected_output1)
  })

  test('Test case 2 (INPUT FIELD | MULTIPLE)', () => {
    const formily_input2 = readJSON('./formily/formily_input2.json')
    const expected_output2 = readJSON('./flowise/flowise_output2.json')
    const flowise_output2 = formily_flowise_compiler(formily_input2)
    expect(flowise_output2).toEqual(expected_output2)
  })

  test('Test case 3 (SELECT FIELD | SINGLE)', () => {
    const formily_select1 = readJSON('./formily/formily_select1.json')
    const expected_output3 = readJSON('./flowise/flowise_select1.json')
    const flowise_select1 = formily_flowise_compiler(formily_select1)
    expect(flowise_select1).toEqual(expected_output3)
  })

  test('Test case 4 (SELECT FIELD | MULTIPLE)', () => {
    const formily_select2 = readJSON('./formily/formily_select2.json')
    const expected_output4 = readJSON('./flowise/flowise_select2.json')
    const flowise_select2 = formily_flowise_compiler(formily_select2)
    expect(flowise_select2).toEqual(expected_output4)
  })

  test('Test case 5 (MIX)', () => {
    const formily_mix1 = readJSON('./formily/formily_mix1.json')
    const expected_output5 = readJSON('./flowise/flowise_mix1.json')
    const flowise_mix1 = formily_flowise_compiler(formily_mix1)
    expect(flowise_mix1).toEqual(expected_output5)
  })

  test('Test case 6 (Space separated TITLE)', () => {
    const formily_space = readJSON('./formily/formily_space.json')
    const expected_output6 = readJSON('./flowise/flowise_space.json')
    const flowise_space = formily_flowise_compiler(formily_space)
    expect(flowise_space).toEqual(expected_output6)
  })

  test('Test case 7 (Validators)', () => {
    const formily_validators = readJSON('./formily/formily_validators.json')
    const expected_output7 = readJSON('./flowise/flowise_validators.json')
    const flowise_validators = formily_flowise_compiler(formily_validators)
    expect(flowise_validators).toEqual(expected_output7)
  })
})

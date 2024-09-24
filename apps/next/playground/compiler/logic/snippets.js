import { INPUT_FIELD_TYPES } from './options'
import validations from './validators'

// Default Code Text For Code Runner Nodes
const MSG_INIT = 'const msg = JSON.parse($0);\n'
const MSG_END = 'return JSON.stringify(msg);'

// IS VISIBLE CODE TEXT
export function isVisibleCode(fieldDetail) {
  const title = fieldDetail['title']
  let code = MSG_INIT
  // If field is not visible, throw an error to go to next group
  if (fieldDetail['display'] === false) {
    code += `throw new Error('Not Visible');\n`
  }
  // If field is visible, check for reactions
  if (fieldDetail['reactions']) {
    code += `let formInput = msg.transformer.metaData.formInput;\n`
    // If reactions are not fulfilled, throw an error to go to next group
    code += `if(!(${fieldDetail['reactions']})) throw new Error('Not Visible');\n`
  }
  code += `msg.transformer.metaData.required = {"${title}" : ${fieldDetail['required']}};\n`
  code += MSG_END
  return code
}

// ASK QUESTION CODE TEXT
export function AskQuestion(fieldDetail) {
  const title = fieldDetail['title']
  const description = fieldDetail['description'] || 'Description not provided'
  const component = fieldDetail['component']
  let code = MSG_INIT
  code += `msg.payload.text = "${description}";\nmsg.transformer.metaData.currentQuestion="${description}"\n`
  // code += `
  //   msg.transformer.metaData.prompt = \`You are an AI assistant who is helping a person fill out a conversational form. You are provided with the description of the question you have to ask to the user. Use the description to phrase and frame an empathetic question to be prompted to the user. The Description is ${description}\`;
  // `
  code += `
    msg.transformer.metaData.prompt = \`
    Given the description of a field for the 10th standard board exam registration form in India, generate a warm, conversational question that is clear and supportive. Ensure the question is concise, friendly, and focused on getting the needed information without extra wording.
    The Description is ${description}\`;
  `
  switch (component) {
    case INPUT_FIELD_TYPES.INPUT:
      break
    case INPUT_FIELD_TYPES.SELECT:
      code += Select(fieldDetail)
      break
    case INPUT_FIELD_TYPES.TEXTAREA:
      break
    default:
      break
  }
  code += `
    const currentInput = msg.transformer.metaData.currentInput;
    if(currentInput){
      currentInput["${title}"] = {
        text: "",
        retries: 0
      };
    }
    else {
      msg.transformer.metaData.currentInput = {
        "${title}": {
          text: "",
          retries: 0
        }
      };  
    }
  `
  code += MSG_END
  return code
}

// New: IS NORMAL CODE TEXT
export function isNormalCode(){
  let code = '';
  code += MSG_INIT;
  code = `
    const input = msg.payload.text.trim();
    const copyInput = input.toLowerCase();
    if(copyInput.startsWith('/back')){
      throw new Error('Back');
    }
  `
  code += MSG_END;
}

// RUN VALIDATOR CODE TEXT
export function runValidatorCode(fieldDetail) {
  const validationTypes = fieldDetail['validation'] // array of validation types
  const title = fieldDetail['title']
  let code = ''
  code += MSG_INIT

  code += validations

  // create key of validationResults[title] in metaData and initialize it as {}
  code += `
    if(!msg.transformer.metaData.validationResult) {
      msg.transformer.metaData.validationResult = {
        "${title}": {}
      };
    }
    else{
      msg.transformer.metaData.validationResult = {
        "${title}": {}
      };
    }
  `

  // if SKIPPED
  code += `
  if(msg.payload.text == "SKIP") {
    msg.transformer.metaData.validationResult["${title}"] = {
      "skip-validation": {
        error: false,
        message: "User Skipped the message"
      }
    }
    ${MSG_END}
  }
  `
  // store input in currentInput
  code += `
  msg.transformer.metaData.currentInput["${title}"].text = msg.payload.text;
  `

  // If validationTypes is not empty
  if (validationTypes.length != 0) {
    // code for validation
    code += `
    const inputText = msg.transformer.metaData.currentInput["${title}"].text;\n
    let res;
    const validationResult = msg.transformer.metaData.validationResult["${title}"] || {};
    `
    // run all validations and store results in metaData
    // key in validationResults [title]
    validationTypes.forEach((validationType) => {
      code += `
        res = validator["${validationType}"](inputText)
        validationResult["${validationType}"] = res;\n
      `
    })
    code += `msg.transformer.metaData.validationResult["${title}"] = validationResult;\n`
  }

  code += MSG_END
  return code
}

// In case of LLM Validator, store the input in currentInput before going to validator
export function llmCurrentInputStore(fieldDetail) {
  const title = fieldDetail['title']
  const description = fieldDetail['description']
  const promptArray = fieldDetail['prompt']

  let code = MSG_INIT
  // create key of validationResults[title] in metaData and initialize it as {}
  code += `
    if(!msg.transformer.metaData.validationResult) {
      msg.transformer.metaData.validationResult = {
        "${title}": {}
      };
    }
  `
  code += `
    if(msg.payload.text == "SKIP") {
      msg.transformer.metaData.validationResult["${title}"] = {
        "skip-validation": {
          error: false,
          message: "User Skipped the message"
        }
      }
      ${MSG_END}
    }
    msg.transformer.metaData.currentInput["${title}"].text = msg.payload.text;
  `

  // llm prompt
  let prompt = ''

  prompt = `
    msg.transformer.metaData.prompt = \`
    Given a user response and a question description, your task is to evaluate whether the user’s response correctly addresses the question. If the response is correct, confirm it. If the response is incorrect or incomplete, identify the issue, explain why the response is not sufficient, and provide guidance on how the user can improve their answer. If the user raises concerns or asks questions, address them while reiterating the original question to ensure clarity.

You are to always return the response in the form of JSON with three keys: “error”, “message”, and “response”.

	•	“error” is a boolean key that should be true if the answer is not relevant to the question, and false if the answer is relevant or has been validated.
	•	“message” should contain the reiterated response, including any necessary explanations or guidance.
	•	“response” should extract and contain the useful information from the user’s response that directly answers the question. For example, if the question asks for a name and the user responds with “My name is John Doe,” the “response” key should have the value “John Doe”.

Ensure that the response you send back is parseable by JSON.parse() in NodeJS. Only return stringified JSON, not markdown.
Have a friendly and professional tone.
Input:
	1.	User Response: \${msg.payload.text}
	2.	Question Description: ${description}

Output:
	•	Example: {“error”: false, “message”: “Thanks for your response.”, “response”: “John Doe”}
	•	Example: {“error”: true, “message”: “Your response is not relevant to the question.”, “response”: “”}
    \`;
  `

  promptArray.forEach((p) => {
    if (p != '') {
      prompt = `
        msg.transformer.metaData.prompt += \n\`${p}\`;
        \`User Response: \${msg.payload.text}
        Give me validation output in this format
        Output:
	      •	Example: {“error”: false, “message”: “Thanks for your response.”, “response”: “John Doe”}
	      •	Example: {“error”: true, “message”: “Your response is not relevant to the question.”, “response”: “”}
          \`;
      `
    }
  })

  code += prompt
  code += MSG_END
  return code
}

// InCase we get "SKIP" in LLM flow
export function llmSkipCode() {
  let code = MSG_INIT
  code += `
    if(msg.payload.text == "SKIP") {
      throw new Error("User Skipped the message");
    }
  `
  code += MSG_END
  return code
}

// In case of LLM Validator, check the validation result and store it in validationResult
export function llmValidatorCode(fieldDetail) {
  const title = fieldDetail['title']
  let code = MSG_INIT
  code += `
    const llmResponse = msg.payload.text;
    let markdown = '';
    if(llmResponse.startsWith('\`\`\`json')){
      markdown = llmResponse;
    }
    if(markdown){
      llmResponse = markdown.match(/json([\\s\\S]*?)/)[1].trim();
    }

    const jsonObject = JSON.parse(llmResponse);
    Object.keys(jsonObject).forEach((key) => {
      jsonObject[key.toLowerCase()] = jsonObject[key];
    });
    msg.transformer.metaData.validationResult["${title}"] = {
      llm: jsonObject,
    }
    if(!msg.transformer.metaData.validationResult["${title}"].llm.error){
      msg.transformer.metaData.currentInput["${title}"].text = msg.transformer.metaData.validationResult["${title}"].llm.response;
    }
    ${MSG_END}
  `
  return code
}

// Store INPUT in formInput and Validate it
export function storeInputCode(fieldDetail) {
  // required fields from fieldDetail
  const title = fieldDetail['title']
  const validationTypes = fieldDetail['validation'] // array of validation types

  let code = MSG_INIT

  // if skip-validation -> store '' in formInput
  code += `
    if(msg.transformer.metaData.validationResult["${title}"]["skip-validation"]){
      let formInput = msg.transformer.metaData.formInput;
      if(formInput){
        formInput = {...formInput, \"${title}\": ""};
      } else {
        formInput = {\"${title}\": ""}
      }
      msg.transformer.metaData.formInput = formInput;
      ${MSG_END}
    }
  `
  if (validationTypes.includes('llm')) {
    code += `
      if(msg.transformer.metaData.validationResult["${title}"]["llm"].error){
        throw new Error("Required Field");
      }
    `
  }
  if (!validationTypes.length == 0 && !validationTypes.includes('llm')) {
    // CHECKS
    // Check all the validations TAKING msg.transformer.metaData.validationResult["${title}"]
    //validationExpressions is an array of strings : each string is an expression that evaluates to true / false
    const validationExpressions = validationTypes.map((validationType) => {
      return `msg.transformer.metaData.validationResult["${title}"].${validationType}.error`
    })

    // Join all the expressions with OR
    const validationCheckString = validationExpressions.join(' || ')

    // VALIDATION CODE FLOW:
    // if validation is false, -> check if required == true -> throw error
    code += `
      if(${validationCheckString}){
          throw new Error("Required Field");
      }
    `
  }

  // Store Input in formInput
  const storeInput = `
    let formInput = msg.transformer.metaData.formInput;
    const inputText = msg.transformer.metaData.currentInput["${title}"].text;
    if(formInput){
      formInput = {...formInput, \"${title}\": inputText !="SKIP" ? inputText : ""};
    } else {
      formInput = {\"${title}\": inputText !="SKIP" ? inputText : ""};
    }
    msg.transformer.metaData.formInput = formInput;
  `
  code += storeInput
  code += MSG_END

  return code
}

// Validation msg Code Text
export function ValidationMsg(fieldDetail) {
  const title = fieldDetail['title']
  const validationTypes = fieldDetail['validation'] // array of validation types
  let code = ''
  code += MSG_INIT
  // increment retries
  code += `
    msg.transformer.metaData.currentInput["${title}"].retries += 1; 
  `
  // if validationTypes is not empty
  if (validationTypes.length != 0) {
    code += `
      const validationMsgs = [];
        const validations = msg.transformer.metaData.validationResult;
        if(validations){
          const validationResult = msg.transformer.metaData.validationResult["${title}"];
          if(validationResult){
            const validationTypes = Object.keys(validationResult);
            validationTypes.forEach((validationType) => {
              if(validationResult[validationType].error){
                validationMsgs.push(validationResult[validationType].message);
              }
            });
            const validationString = validationMsgs.join(" ");
            msg.payload.text = validationString;
          }
        }
    `
  }

  // if retries >= 2, show SKIP button
  code += `
    if(msg.transformer.metaData.currentInput["${title}"].retries >= 2) {
      if(!msg.transformer.metaData.required["${title}"]){
        msg.payload.text = "You have exceeded the number of retries for this field. If you wish you can Use the 'SKIP' button to skip this field. Contact the admin if you want to restart the survey.";
        msg.payload.buttonChoices = {
          header: "You have exceeded the number of retries for this field. If you wish you can Use the 'SKIP' button to skip this field.",
          choices: [
          {
            text: "SKIP",
            key: "SKIP",
            isEnabled: true,
            showTextInput: true
          },
          ]
        }
      }else{
        msg.payload.text += " This is a mandatory question you can't skip it.";
      }
    }
  `
  code += MSG_END
  // console.log(code);
  return code
}

export function EndOfSurvey() {
  let code = MSG_INIT
  code += `
    msg.payload.text = "Thank you for completing the registration. Your responses have been recorded. Have a great day!\\n Your recorded answers are: \\n";
  `
  // Showing the inputs taken in survey

  code += `
    const formInput = msg.transformer.metaData.formInput;
    if(formInput){
      Object.keys(formInput).forEach((key) => {
        msg.payload.text += key + ": " + formInput[key] + "\\n";
      });
    }
  `

  code += MSG_END
  return code
}

// HANDLING code text for Different FIELD TYPES
// HANDLE code text for SELECT FIELD
export function Select(fieldDetail) {
  const buttonChoices = 'msg.payload.buttonChoices ='
  const optionsJSON = JSON.stringify({
    // header: fieldDetail['description'],
    header: '',
    choices: fieldDetail['options'],
  })
  const options = `${optionsJSON};\n`
  return buttonChoices + options
}

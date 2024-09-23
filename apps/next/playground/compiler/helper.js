// create a JSON object with all the questions and their dependent questions
export const createAllQuestionsKeys = (fields) => {
    // Need only fields.title and fields.reactions
    const allQuestions = {};
    fields.forEach((field) => {
        allQuestions[field.title] = [];
        const reactions = getDependentQuestions(field.reactions);
        reactions.forEach((reaction) => {
            allQuestions[field.title].push(reaction);
        });
    });
    
    return allQuestions;
}

// Get the dependent questions for a given reaction string
// reaction : true || string
const getDependentQuestions = (reaction) => {
    if(reaction === true) {
        return [];
    }
    const regex = /formInput\.(\w+)/g;
    const matches = [...reaction.matchAll(regex)].map(match => match[1]);
    return matches;
}
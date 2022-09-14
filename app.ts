let userInput: unknown
let userName: string

userInput = 5
// userName = userInput
if(typeof userInput === 'string'){
    userName = userInput
}

function generateError(message: string, code: number): never {
    throw{message: message, ErrorCode: code}
}

generateError('An Error Occured!', 500)
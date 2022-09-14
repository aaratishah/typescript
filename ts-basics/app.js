var userInput;
var userName;
userInput = 5;
// userName = userInput
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, ErrorCode: code };
}
generateError('An Error Occured!', 500);

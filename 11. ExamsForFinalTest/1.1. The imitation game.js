function solve(input) {

    let message = input.shift();
    let currline = input.shift();

    while (currline !== 'Decode') {
        let tempMessage = '';
        let tokens = currline.split('|');
        let command = tokens[0];

        if (command === 'Move') {
            let lettersNumber = Number(tokens[1]);
            let lettersToMove = message.substring(0, lettersNumber);
            tempMessage = message.replace(lettersToMove, '');
            tempMessage += lettersToMove;
            message = tempMessage;
        } else if (command === 'Insert') {
            let index = Number(tokens[1]);
            let value = tokens[2];
            tempMessage = message.split('');
            tempMessage.splice(index, 0, value);
            message = tempMessage.join('');
        } else if (command === 'ChangeAll') {
            let substring = tokens[1];
            let replacement = tokens[2];

            while (message.includes(substring)) {
                tempMessage = message.replace(substring, replacement);
                message = tempMessage;
            }
        }
        currline = input.shift();
    }
    console.log(`The decrypted message is: ${message}`);
}

function solve(input) {

    let text = input.shift();
    let command = input.shift();

    while (command != 'End') {
        let tokens = command.split(' ');
        let currCommand = tokens[0];

        if (currCommand == 'Translate') {
            let first = tokens[1];
            let second = tokens[2];
            if (text.includes(first)) {
                text = text.replace(new RegExp(`${first}`, 'g'), second);
                console.log(text);
            } else {
                console.log(text);
            }
        } else if (currCommand == 'Includes') {
            let subString = tokens[1];
            if (text.includes(subString)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (currCommand == 'Start') {
            let subStr = tokens[1];
            if (text.startsWith(subStr)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (currCommand == 'Lowercase') {
            text = text.toLowerCase();
            console.log(text);
        } else if (currCommand == 'FindIndex') {
            let findIndex = tokens[1];
            let index = text.lastIndexOf(findIndex);
            console.log(index);
        } else if (currCommand == 'Remove') {
            let firstNum = Number(tokens[1]);
            let secondNum = Number(tokens[2]);
            let first = text.substring(0, firstNum);
            let second = text.substring(firstNum + secondNum);
            text = first.concat(second);
            console.log(text);
        }
        command = input.shift()
    }
}

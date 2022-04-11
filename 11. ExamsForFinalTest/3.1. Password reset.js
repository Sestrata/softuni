function solve(input) {

    let text = input.shift();
    let command = input.shift();
    let newText = '';

    while (command != 'Done') {
        let tokens = command.split(' ');
        let currCommand = tokens[0];

        if (currCommand == 'TakeOdd') {
            for (let i = 0; i < text.length; i++) {
                let letter = text[i];
                if (i % 2 != 0) {
                    newText += letter;
                }
            }
            text = newText;
            console.log(text);
        } else if (currCommand == 'Cut') {
            let currIndex = Number(tokens[1]);
            let currLength = Number(tokens[2]);
            let first = text.substring(0, currIndex);
            let second = text.substring(currIndex + currLength);
            text = first.concat(second);
            console.log(text);
        } else if (currCommand == 'Substitute') {
            let firstSub = tokens[1];
            let secondSub = tokens[2];
            if (text.includes(firstSub)) {
                text = text.replace(new RegExp(`${firstSub}`, 'g'), secondSub);
                console.log(text);
            } else {
                console.log('Nothing to replace!');
            }
        }
        command = input.shift();
    }
    console.log(`Your password is: ${text}`);
}

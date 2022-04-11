function solve(input) {

    let text = input.shift();

    while (input[0] != 'Reveal') {
        let tokens = input.shift().split(':|:');
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        if (command == 'InsertSpace') {
            let left = text.slice(0, p1);
            let right = text.slice(p1);
            text = left + ' ' + right;
            console.log(text);
        } else if (command == 'Reverse') {
            let index = text.indexOf(p1);
            if (index != -1) {
                let left = text.slice(0, index);
                let right = text.slice(index + p1.length);
                text = left + right + p1.split('').reverse().join('');
                console.log(text);
            } else {
                console.log('error');
            }
        } else if (command == 'ChangeAll') {
            text = text.split(p1).join(p2);
            console.log(text);
        }
    }
    console.log(`You have a new text message: ${text}`);
}

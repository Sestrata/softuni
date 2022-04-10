function solve(input) {

    let string = input[0];
    let letters = [];

    for (let i = 0; i < string.length; i++) {
        if (!letters.includes(string[i])) {
            letters.push(string[i]);
        }
    }

    while (letters.length > 0) {
        let char = letters.shift();
        let indexes = [];

        for (let i = 0; i < string.length; i++) {
            if (char === string[i]) {
                indexes.push(i);
            }
        }
        console.log(char + ':' + indexes.join('/'));
    }
}

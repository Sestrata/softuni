function solve(input) {

    let string = input.shift().split('');
    let lowOrUp = input.shift();
    let sum = 0;

    for (let i = 0; i < string.length; i++) {
        let currentLetter = string[i].charCodeAt(0);

        if (lowOrUp === "LOWERCASE") {
            if (currentLetter >= 97 && currentLetter <= 122) {
                sum += currentLetter;
            }
        } else if (lowOrUp === "UPPERCASE") {
            if (currentLetter >= 65 && currentLetter <= 90) {
                sum += currentLetter;
            }
        }
    }
    console.log(`The total sum is: ${sum}`);
}

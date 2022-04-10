function solve(input) {

    let firstChar = input.shift().charCodeAt();
    let secondChar = input.shift().charCodeAt();
    let randomString = input.shift().split('');
    let sum = 0;

    for (let i = 0; i < randomString.length; i++) {
        let current = randomString[i].charCodeAt();

        if (secondChar > firstChar) {
            if (current > firstChar && current < secondChar) {
                sum += current;
            }
        } else if (firstChar > secondChar) {
            if (current < firstChar && current > secondChar) {
                sum += current;
            }
        }
    }
    console.log(sum);
}

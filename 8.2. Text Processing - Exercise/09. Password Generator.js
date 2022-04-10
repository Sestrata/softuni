function solve(input) {
 
    let firstStr = input.shift().split('');
    let secondStr = input.shift().split('');
    let word = input.shift().toUpperCase().split('');
    let newStr = firstStr.concat(secondStr);
    let index = 0;
 
    for (let i = 0; i < newStr.length; i++) {
        let currentLfromNewStr = newStr[i].charCodeAt(0);
 
        if (currentLfromNewStr === 97 || currentLfromNewStr === 101 || currentLfromNewStr === 105 ||
            currentLfromNewStr === 111 || currentLfromNewStr === 117) {
            newStr[i] = word[index];
            index++;
        }
        if (index > word.length - 1) {
            index = 0;
        }
    }
    let reversedStr = newStr.reverse();
    let result = '';
    for (let letter of reversedStr) {
        result += letter;
    }
    console.log(`Your generated password is ${result}`);
}

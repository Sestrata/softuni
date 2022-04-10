function solve(input) {

    let arrOfNumbers = input;
    let arrOfNumsL = arrOfNumbers.length;

    let isPalindrome = (num) => {
        let startNum = num;
        let reversedNum = Number(num.toString().split('').reverse().join(''));

        if (startNum === reversedNum) {
            return 'true';
        } else {
            return 'false';
        }
        // return ? "true" : "false";
    }

    for (let i = 0; i < arrOfNumsL; i++) {
        let currentNum = arrOfNumbers[i];
        let result = isPalindrome(currentNum);
        console.log(result);
    }

    //another:
    // for (let num of arrOfNumbers) {
    //     let numAsString = num.toString();
    //     let reversedNumAsString = numAsString.split('').reverse().join('');

    //     if (numAsString === reversedNumAsString) {
    //         console.log(true);
    //     } else {
    //         console.log(false);
    //     }
    // }
}

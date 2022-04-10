function solve(input) {

    let arrOfNumbers = input;
    let arrModify = [];
    let firstArrSum = 0;
    let secondArrSum = 0;
    let arrLength = arrOfNumbers.length;

    for (let i = 0; i < arrLength; i++) {
        let currentNumber = arrOfNumbers[i];
        firstArrSum += currentNumber;

        let newNumber = 0;
        if (currentNumber % 2 === 0) {
            newNumber = currentNumber + i;
        } else {
            newNumber = currentNumber - i;
        }
        arrModify.push(newNumber);
        secondArrSum += newNumber;
    }
    console.log(arrModify);
    console.log(firstArrSum);
    console.log(secondArrSum);
}

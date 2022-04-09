function solve(input) {

    let inputAsString = input.toString();
    let inputL = inputAsString.length;

    let sumOdd = (numAsString) => {
        let oddSum = 0;
        for (let i = 0; i < inputL; i++) {
            let currentElement = Number(numAsString[i]);
            if (currentElement % 2 !== 0) {
                oddSum += currentElement;
            }
        }
        return oddSum;
    };

    let sumEven = (numAsString) => {
        let evenSum = 0;
        for (let i = 0; i < inputL; i++) {
            let currentElement = Number(numAsString[i]);
            if (currentElement % 2 === 0) {
                evenSum += currentElement;
            }
        }
        return evenSum;
    };
    console.log(`Odd sum = ${sumOdd(inputAsString)}, Even sum = ${sumEven(inputAsString)}`);
}

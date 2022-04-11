function solve(input) {

    let numbers = input.split(' ').map(x => Number(x));
    let numbersL = numbers.length;
    let sum = 0;

    for (let i = 0; i < numbersL; i++) {
        sum += numbers[i];
    }
    let average = sum / numbersL;
    let biggerNums = numbers.filter(x => x > average);
    biggerNums = biggerNums.sort((a, b) => b - a);
    biggerNums = biggerNums.slice(0, 5);

    if (biggerNums.length == 0) {
        console.log('No');
    } else {
        console.log(biggerNums.join(' '));
    }
}

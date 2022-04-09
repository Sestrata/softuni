function solve(num) {

    function getSum(num) {
        let numToString = num.toString();
        let sum = 0;
        for (let i = 0; i < numToString.length; i++) {
            sum += Number(numToString[i]);
        }
        return sum;
    }

    function getAverage(num) {
        return getSum(num) / num.toString().length;
    }

    while (getAverage(num) < 5) {
        num += '9';
    }
    console.log(num);
}

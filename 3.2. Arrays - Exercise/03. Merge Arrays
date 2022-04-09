function solve(first, second) {

    let firstArr = first;
    let secondArr = second;

    let resultArr = [];
    let firstL = firstArr.length;

    for (let i = 0; i < firstL; i++) {
        let resultArrElement;

        if (i % 2 === 0) {
            resultArrElement = Number(firstArr[i]) + Number(secondArr[i]);
        } else {
            resultArrElement = firstArr[i] + secondArr[i];
        }
        resultArr.push(resultArrElement);
    }
    console.log(resultArr.join(' - '));
}

function solve(arr) {

    let sortedArr = arr.sort((a, b) => {
        return a - b;
    });
    let resultArr = [];

    while (sortedArr.length !== 0) {
        let bigNum = sortedArr.pop();
        let smallNum = sortedArr.shift();
        resultArr.push(bigNum);
        resultArr.push(smallNum);
    }
    console.log(resultArr.join(' '));
}

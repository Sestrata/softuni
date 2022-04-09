function solve(arr) {

    let revArr = arr.reverse();
    let arrL = revArr.length - 1;
    let newArr = [];

    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arrL; i++) {
        let currentNum = revArr[i];
        if (currentNum > max) {
            max = currentNum;
            newArr.push(max);
        }
    }
    newArr.reverse();
    console.log(newArr.join(' '));
}

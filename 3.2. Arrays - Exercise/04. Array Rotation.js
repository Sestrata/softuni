function solve(arr, rotationCount) {

    let arrOfElements = arr;
    let rotations = rotationCount;

    for (let i = 0; i < rotations; i++) {
        let numberToMove = arrOfElements.shift();
        arrOfElements.push(numberToMove);
    }
    console.log(arrOfElements.join(' '));
}

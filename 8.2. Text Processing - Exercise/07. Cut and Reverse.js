function solve(str) {

    let middle = str.length / 2;

    let firstPart = str
        .substring(0, middle)
        .split('')
        .reverse()
        .join('');

    let secondPart = str
        .substring(middle)
        .split('')
        .reverse()
        .join('');

        console.log(firstPart);
        console.log(secondPart);
}

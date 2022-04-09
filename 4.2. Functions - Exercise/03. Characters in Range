function solve(first, second) {

    let firstSymbolAsNum = first.charCodeAt(0);
    let secondSymbolAsNum = second.charCodeAt(0);
    let smallerNum = Math.min(firstSymbolAsNum, secondSymbolAsNum);
    let biggerNum = Math.max(firstSymbolAsNum, secondSymbolAsNum);
    let result = [];

    for (let i = smallerNum + 1; i < biggerNum; i++) {
        let currentElement = String.fromCharCode(i);
        result.push(currentElement);
    }
    console.log(result.join(' '));
}

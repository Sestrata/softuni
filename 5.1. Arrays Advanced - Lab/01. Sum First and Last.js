function solve(arr) {

    let firstNum = arr.shift();
    let lastNum = arr.pop();

    let firstN = Number(firstNum);
    let lastN = Number(lastNum);
    
    let result = firstN + lastN;
    console.log(result);
}

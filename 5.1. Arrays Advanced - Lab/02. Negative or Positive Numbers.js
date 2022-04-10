function solve(arr) {

    let result = [];

    for (let num of arr) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
    
    console.log(result.join('\n'));
    // or:
    // for (let num of result) { 
    //     console.log(num);
    // }
}

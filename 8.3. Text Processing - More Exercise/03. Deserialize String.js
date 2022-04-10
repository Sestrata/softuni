function solve(input) {

    let stringArr = [];
 
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "end") {
            break;
        }
        let tokens = input[i].split(':');
        let letter = tokens[0];
        let indexes = tokens[1].split('/');
        for (let index of indexes) {
            stringArr[index] = letter;
        }
    }
    console.log(stringArr.join(''));
    
    // another:
    // let arr = [];

    // for (let i = 0; i < input.length; i++) {
    //     let current = input[i];
    //     if (current.includes(':')) {
    //         let curr = current.split(':');
    //         let letter = curr.shift();
    //         let indexes = curr[0];
    //         indexes = indexes.split('/');
    //         for (let j = 0; j < indexes.length; j++) {
    //             let indexFromInput = Number(indexes[j]);
    //             arr.push(letter + '-' + indexFromInput)
    //         }
    //     }
    // }
    // for (let k = 0; k < arr.length; k++) {
    //     let current = arr[k].split('-');
    //     arr.splice(k, 1, current);
    // }
    // let sorted = arr.sort((a, b) => a[1] - b[1]);
    // let output = '';
    // for (let final of sorted) {
    //     output += final[0];
    // }
    // console.log(output);
}

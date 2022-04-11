function solve(input) {

    let arr = input.shift().split(' ').map(Number);

    for (let command of input) {
        let tokens = command.split(' ');
        let currentCommand = tokens[0];
        let firstNum = Number(tokens[1]);
        let secondNum = Number(tokens[2]);

        if (currentCommand === 'swap') {
            let temp = arr[firstNum];
            arr[firstNum] = arr[secondNum];
            arr[secondNum] = temp;             
        } else if (currentCommand === 'multiply') {
            arr[firstNum] *= arr[secondNum];
        } else if (currentCommand === 'decrease') {
            arr = arr.map(x => x - 1);
        }
    }
    console.log(arr.join(', '));
}

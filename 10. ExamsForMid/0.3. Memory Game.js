function solve(input) {

    let sequence = input.shift().split(' ');
    let command = input.shift();
    let turns = 0;

    while (command !== 'end') {
        let [i1, i2] = command.split(' ').map(Number);
        turns++;

        if (sequence[i1] === sequence[i2]) {
            console.log(`Congrats! You have found matching elements - ${sequence[i1]}!`);
            sequence = removeElements(i1, i2);
        } else {
            if (i1 < 0 || i1 >= sequence.length || i2 < 0 || i2 >= sequence.length) {
                console.log("Invalid input! Adding additional elements to the board");
                let i = Math.trunc(sequence.length / 2);
                sequence.splice(i, 0, `-${turns}a`, `-${turns}a`);
            } else {
                console.log("Try again!");
            }
        }
        if (sequence.length === 0) {
            console.log(`You have won in ${turns} turns!`);
            break;
        }
        command = input.shift();
    }
    
    if (sequence.length > 0) {
        console.log("Sorry you lose :(");
        console.log(sequence.join(' '));
    }

    function removeElements(i1, i2) {
        const num1 = sequence[i1];
        const num2 = sequence[i2];
        if (num1 === num2) {
            sequence.splice(i1, 1);
            i2 = sequence.indexOf(num2);
            sequence.splice(i2, 1);
        }
        return sequence;
    }
}

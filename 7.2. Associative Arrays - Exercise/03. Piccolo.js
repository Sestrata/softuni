function solve(input) {

    let parking = {};

    for (let el of input) {
        let [command, carNum] = el.split(', ');

        if (command === 'IN') {
            parking[carNum] = command;
        } else if (command === 'OUT') {
            delete parking[carNum];
        }
    }
    let arrOfKeys = Object.keys(parking);
    let sortedNumbers = arrOfKeys.sort((a, b) => {
        return a.localeCompare(b);
    });

    if (sortedNumbers.length === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        console.log(sortedNumbers.join('\n'));
    }
}

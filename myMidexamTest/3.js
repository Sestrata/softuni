function solve(input) {

    let listOfPhone = input.shift().split(', ');

    for (let command of input) {
        let tokens = command.split(' - ');
        let currentCommand = tokens[0];
        let currentPhone = tokens[1];

        if (currentCommand === 'Add') {
            if(!listOfPhone.includes(currentPhone)){
                listOfPhone.push(currentPhone);
            }
        } else if (currentCommand === 'Remove') {
            if(listOfPhone.includes(currentPhone)){
                let index = listOfPhone.indexOf(currentPhone);
                listOfPhone.splice(index, 1);
            }
        } else if (currentCommand === 'Bonus phone') {
            let tokens = currentPhone.split(':');
            let first = tokens[0];
            let second = tokens[1];
            if (listOfPhone.includes(first)) {
                let index = listOfPhone.indexOf(first);
                listOfPhone.splice(index + 1, 0, second);
            }

        } else if (currentCommand === 'Last') {
            if (listOfPhone.includes(currentPhone)) {
                let index = listOfPhone.indexOf(currentPhone);
                listOfPhone.splice(index, 1);
                listOfPhone.push(currentPhone);
            }
        }
    }
    console.log(listOfPhone.join(', '));
}

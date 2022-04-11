function solve(input) {

    let journalItems = input.shift().split(', ');

    for (let command of input) {
        let tokens = command.split(' - ');
        let currentCommand = tokens[0];
        let item = tokens[1];

        if (currentCommand === 'Collect') {
            if (!journalItems.includes(item)) {
                journalItems.push(item);
            }
        } else if (currentCommand === 'Drop') {
            if (journalItems.includes(item)) {
                let index = journalItems.indexOf(item);
                journalItems.splice(index, 1);
            }
        } else if (currentCommand === 'Combine Items') {
            let tokens = item.split(':');
            let first = tokens[0];
            let second = tokens[1];
            if (journalItems.includes(first)) {
                let index = journalItems.indexOf(first);
                journalItems.splice(index + 1, 0, second);
            }
        } else if (currentCommand === 'Renew') {
            if (journalItems.includes(item)) {
                let index = journalItems.indexOf(item);
                journalItems.splice(index, 1);
                journalItems.push(item);
            }
        }
    }
    console.log(journalItems.join(', '));
}

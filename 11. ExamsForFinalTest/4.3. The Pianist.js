function solve(input) {

    let catalog = {};
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let [name, composer, key] = input.shift().split('|');
        
        catalog[name] = {
            composer,
            key
        };
    }

    while (input[0] != 'Stop') {
        let tokens = input.shift().split('|');
        let command = tokens[0];
        let name = tokens[1];

        if (command == 'Add') {
            if (catalog.hasOwnProperty(name)) {
                console.log(`${name} is already in the collection!`);
            } else {
                catalog[name] = {
                    composer: tokens[2],
                    key: tokens[3]
                };
                console.log(`${name} by ${tokens[2]} in ${tokens[3]} added to the collection!`);
            }
        } else if (command == 'Remove') {
            if (!catalog.hasOwnProperty(name)) {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            } else {
                delete catalog[name];
                console.log(`Successfully removed ${name}!`);
            }
        } else if (command == 'ChangeKey') {
            if (!catalog.hasOwnProperty(name)) {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            } else {
                catalog[name].key = tokens[2];
                console.log(`Changed the key of ${name} to ${tokens[2]}!`);
            }
        }
    }

    for (let [line, value] of Object.entries(catalog)) {
        console.log(`${line} -> Composer: ${value.composer}, Key: ${value.key}`);
    }
}

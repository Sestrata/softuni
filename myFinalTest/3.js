function solve(input) {

    let catalog = {};

    while (input[0] !== 'End') {
        let tokens = input.shift().split(' ');
        let command = tokens[0];
        let heroName = tokens[1];
        let spellName = tokens[2];

        let currHero = catalog[heroName];

        if (command == 'Enroll') {
            if (catalog.hasOwnProperty(heroName)) {
                console.log(`${heroName} is already enrolled.`);
            } else {
                catalog[heroName] = {
                    spellName: []
                };
            }
        } else if (command == 'Learn') {
            if (!catalog.hasOwnProperty(heroName)) {
                console.log(`${heroName} doesn't exist.`)
            } else {
                if (currHero.spellName.includes(spellName)) {
                    console.log(`${heroName} has already learnt ${spellName}.`)
                } else {
                    currHero.spellName.push(spellName);
                }
            }
        } else if (command == 'Unlearn') {
            if (!catalog.hasOwnProperty(heroName)) {
                console.log(`${heroName} doesn't exist.`)
            } else {
                let currspell = currHero.spellName;
                if (currspell.includes(spellName)) {
                    index = spellName.indexOf(spellName);
                    currspell.splice(index, 1);
                } else {
                    console.log(`${heroName} doesn't know ${spellName}.`)
                }
            }
        }
    }
    console.log('Heroes:');
    for (let [line, value] of Object.entries(catalog)) {
        console.log(`== ${line}: ${value.spellName.join(', ')}`);
    }
}

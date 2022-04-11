function solve(input) {

    let n = Number(input.shift());
    let catalog = {};

    for (let i = 0; i < n; i++) {
        let [name, rarity] = input.shift().split('<->');

        catalog[name] = {
            rarity: Number(rarity),
            rating: [],
            avgRating: 0
        };
    }

    while (input[0] != 'Exhibition') {
        let tokens = input.shift().split(': ');
        let command = tokens[0];
        let param = tokens[1].split(" - ");

        if (command == 'Rate') {
            let name = param[0];
            let rating = Number(param[1]);
            if (catalog.hasOwnProperty(name)) {
                let plant = catalog[name];
                plant.rating.push(rating);
                let total = 0;
                for (let rating of plant.rating) {
                    total += rating;
                }
                plant.avgRating = total / plant.rating.length;
            } else {
                console.log('error');
            }
        } else if (command == 'Update') {
            let name = param[0];
            let rating = Number(param[1]);
            if (catalog.hasOwnProperty(name)) {
                let plant = catalog[name];
                plant.rarity = rating;
            } else {
                console.log('error');
            }
        } else if (command == 'Reset') {
            let name = param[0];
            if (catalog.hasOwnProperty(name)) {
                let plant = catalog[name];
                plant.rating.length = 0;
                plant.avgRating = 0;
            } else {
                console.log('error');
            }
        }
    }
    console.log('Plants for the exhibition:');

    for (let [line, value] of Object.entries(catalog)) {
        console.log(`- ${line}; Rarity: ${value.rarity}; Rating: ${value.avgRating.toFixed(2)}`);
    }
}

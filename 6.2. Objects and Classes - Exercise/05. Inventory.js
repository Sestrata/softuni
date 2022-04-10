function solve(input) {

    let heroes = [];

    for (let heroInfo of input) {
        let tokens = heroInfo.split(' / ');
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = tokens[2].split(', ');

        let hero = {
            name: name,
            level: level,
            items: items
        };
        heroes.push(hero);
    }
    let sortedHeroesByLevel = heroes.sort((a, b) => a.level - b.level);

    for (hero of sortedHeroesByLevel) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }
}

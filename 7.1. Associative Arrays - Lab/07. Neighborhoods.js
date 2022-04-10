function solve(input) { 
    
    // with map:

    let neighborhoods = new Map();

    let currentNeighborhoods = input.shift().split(", ");

    for (let neighborhood of currentNeighborhoods) {
        neighborhoods.set(neighborhood, []);
    }

    for (let currentPerson of input) {
        currentPerson = currentPerson.split(' - ');
        let personNeighborhood = currentPerson[0];
        let person = currentPerson[1];

        if (neighborhoods.has(personNeighborhood)) {
            neighborhoods.get(personNeighborhood).push(person);
        }
    }
    let sortedNeighborhoods = Array.from(neighborhoods.entries());
    sortedNeighborhoods.sort((a, b) => b[1].length - a[1].length);

    for (let currentEntry of sortedNeighborhoods) {
        let neighborhoodToPrint = currentEntry[0];
        let personsToPrint = currentEntry[1];
        console.log(`${neighborhoodToPrint}: ${personsToPrint.length}`);

        for (currentPerson of personsToPrint) {
            console.log(`--${currentPerson}`);
        }
    }
}

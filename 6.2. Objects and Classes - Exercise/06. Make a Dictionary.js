function solve(input) {

    let dictionary = {};

    for (let element of input) {
        let obj = JSON.parse(element);
        dictionary = Object.assign(dictionary, obj);
    }

    let sorted = Object.keys(dictionary).sort((a, b) => a.localeCompare(b));

    for (let term of sorted) {
        let definition = dictionary[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}

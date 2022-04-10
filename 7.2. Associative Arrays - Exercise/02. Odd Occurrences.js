function solve(input) {

    // with map:
    let words = input.toLowerCase().split(' ');
    let map = new Map();

    for (let word of words) {
        let num = 0;
        if (map.has(word)) {
            num = map.get(word);
        }
        num++;
        map.set(word, num);
    }

    let entries = Array.from(map);
    let filteredEl = entries.filter((el) => {
        return el[1] % 2 !== 0;
    });

    let result = [];

    for (let word of filteredEl) {
        result.push(word[0]);
    }
    console.log(result.join(' '));


    // with obj /without sorted result/:
    // let occurrences = {};
    // let listOfStrings = input.split(' ');

    // for (let string of listOfStrings) {
    //     let stringToLower = string.toLowerCase();

    //     if (!Object.keys(occurrences).includes(stringToLower)) {
    //         occurrences[stringToLower] = 0;
    //     }
    //     occurrences[stringToLower] += 1;
    // }

    // let resultString = '';
    // for (let [key, value] of Object.entries(occurrences)) {
    //     if (value % 2 !== 0) {
    //         resultString += `${key} `;
    //     }
    // }
    // console.log(resultString);
}

function solve(input) {

    let wordsToSearch = input.shift().split(' ');
    let myWords = {};

    for (let elements of wordsToSearch) {
        myWords[elements] = 0;
    }

    for (let word of input) {
        if (myWords.hasOwnProperty(word)) { // or: (Object.keys(myWords).includes(word))
            myWords[word] += 1;
        }
    }

    let sortedEntries = Object.entries(myWords).sort((a, b) => {
        return b[1] - a[1];
    });

    sortedEntries.forEach((el) => {    // or: for(let [key, value] of sortedEntries);
        console.log(`${el[0]} - ${el[1]}`);  // console.log(`${key} - ${value}`);
    });
}

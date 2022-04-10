function solve(text, word) {

    let tokens = text.split(' ');
    let count = 0;
    for (let token of tokens) {
        if (token == word) {
            count++;
        }
    }
    console.log(count);

    // or:
    // word = ` ${word} `;
    // text = ` ${text} `;
    // let count = 0;
    // let index = 0
    // let found = text.indexOf(word);
    // while (found != -1) {
    //     count++;
    //     index = found + 1;
    //     found = text.indexOf(word, index);
    // }
    // console.log(count);

    // or:
    // text.split(' ').filter(x => x == word).length;
    // console.log(text)
}

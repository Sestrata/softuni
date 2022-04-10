function solve(words, text) {

    text = ` ${text} `;
    let wordsArr = words.split(', ');

    for (let word of wordsArr) {
        let template = ` ${'*'.repeat(word.length)} `;
        word = ` ${word} `;
        text = text.replace(template, word);
    }
    console.log(text.trim());
}

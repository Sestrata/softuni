function solve(text, word) {

    let newText = text.split(word);
    console.log(newText.join('*'.repeat(word.length)));
}

    // or:
    // while (text.includes(word)) {
    //     text = text.replace(word, '*'.repeat(word.length));
    // }
    // console.log(text);

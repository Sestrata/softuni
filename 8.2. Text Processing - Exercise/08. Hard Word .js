function solve(input) {

    let boyText = input[0];
    let fillers = input[1];
    let count = 0;

    for (let char of boyText) {
        if (char === '_') {
            count++;
        } else if (char !== '_' && count > 0) {
            for (let word of fillers) {
                if (word.length === count) {
                    let toReplace = '_'.repeat(count);
                    boyText = boyText.replace(toReplace, word);
                    count = 0;
                }
            }
        }
    }
    console.log(boyText);
}

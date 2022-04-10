function solve(input) {

    let text = input[0];
    let regExp = /(?:\s|^)\+359( |-)2\1\d{3}\1\d{4}\b/g;
    let match = regExp.exec(text);
    let result = [];

    while (match != null) {
        result.push(match[0].trim());

        match = regExp.exec(text);
    }
    console.log(result.join(', '));
}

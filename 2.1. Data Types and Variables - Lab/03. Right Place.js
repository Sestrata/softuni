function solve(string, symbol, match) {

    // let res = string.replace('_', symbol); //replace хваща само първата долна черта
    // let output = res === match ? "Matched" : "Not Matched";
    // console.log(output);

    //друго решение:
    let result = '';

    for (let i = 0; i < string.length; i++) {

        if (string[i] == '_') {
            result += symbol;
        } else {
            result += string[i];
        }
    }

    if (result == match) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

function solve(text) {

    let textL = text.length;
    let counter = 1;
    let arr = [];

    for (i = 0; i < textL; i++) {

        if (text[i] === 'add') {
            arr.push(counter++);
        } else {
            arr.pop(counter++);
        }
    }

    if (arr[0] === undefined) {
        console.log('Empty');
    } else {
        console.log(arr.join(' '));
    }
}

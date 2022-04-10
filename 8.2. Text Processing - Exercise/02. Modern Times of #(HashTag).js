function solve(text) {

    let result = [];
    let newText = text.split(' ');

    for (let element of newText) {
        if (element[0] === '#' && element.length !== 1) {
            result.push(element.substring(1));
        }
    }

    let final = [];

    for (let el of result) {
        let arr = el.split('');
        let arrL = arr.length;
        let flag = true;

        for (let i = 0; i < arrL; i++) {
            let current = arr[i].charCodeAt(0);

            if ((current < 97 || current > 122) &&
                (current < 65 || current > 90)) {
                flag = false;
            }
        }
        if (flag) {
            final.push(el);
        }
    }
    console.log(final.join('\n'));
}

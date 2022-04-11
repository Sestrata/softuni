function solve(input) {

    let rawKey = input.shift();

    for (let line of input) {
        if (line === 'Generate') {
            console.log(`Your activation key is: ${rawKey}`)
            break;
        }
        let [command, x, y, z] = line.split('>>>');

        if (command === 'Contains') {
            if (rawKey.includes(x)) {
                console.log(`${rawKey} contains ${x}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (command === 'Flip') {
            y = Number(y);
            z = Number(z);
            let subStr = rawKey.substring(y, z);
            if (x == 'Upper') {
                subStr = subStr.toUpperCase();
            } else {
                subStr = subStr.toLowerCase();
            }
            rawKey = rawKey.substring(0, y) + subStr + rawKey.substring(z);
            console.log(rawKey);
        } else if (command === 'Slice') {
            rawKey = rawKey.substring(0, x) + rawKey.substring(y);
            console.log(rawKey);
        }
    }
}

function solve(arr) {

    let arrL = arr.length;
    let guestList = [];

    for (let i = 0; i < arrL; i++) {
        let line = arr[i].split(" ");
        let name = line[0];
        let command = line[2];
        if (command !== 'not') {
            if (guestList.includes(name) === true) {
                console.log(`${name} is already in the list!`);
                continue;
            }
            guestList.push(name);
        } else {
            if (guestList.includes(name) === false) {
                console.log(`${name} is not in the list!`);
                continue;
            }
            guestList = guestList.filter(x => x != name);
        }
    }
    console.log(guestList.join('\n'));
}

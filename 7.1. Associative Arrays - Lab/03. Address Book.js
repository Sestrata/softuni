function solve(input) {

    let addressBook = {};

    for (let entry of input) {
        entry = entry.split(':');
        let name = entry[0];
        let address = entry[1];
        addressBook[name] = address;
    }

    let sortedArr = Object.entries(addressBook);
    sortedArr.sort((a, b) => {
        return a[0].localeCompare(b[0]);
    });

    for (sortedEntry of sortedArr) {
        console.log(`${sortedEntry[0]} -> ${sortedEntry[1]}`);
    }
}

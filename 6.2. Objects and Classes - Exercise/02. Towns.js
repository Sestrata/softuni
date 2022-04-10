function solve(input) {

    for (let table of input) {
        let singleLineInfo = table.split(' | ');

        let town = singleLineInfo[0];
        let latitude = Number(singleLineInfo[1]).toFixed(2);
        let longitude = Number(singleLineInfo[2]).toFixed(2);

        let currentTownInfo = {
            town: town,
            latitude: latitude,
            longitude: longitude
        }
        console.log(currentTownInfo);
    }
}

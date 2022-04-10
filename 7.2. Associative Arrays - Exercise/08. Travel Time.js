function solve(input) {

    let countries = {};

    for (let row of input) {
        let currentRow = row.split(' > ');
        let country = currentRow[0];
        let city = currentRow[1];
        let price = Number(currentRow[2]);
        // or:
        // let [country, city, price] = row.split(' > ')

        if (!countries.hasOwnProperty(country)) { // or: (!Object.keys(countries).includes(country))
            countries[country] = {};
        }
        if (!countries[country].hasOwnProperty(city)) { // or: (!Object.keys(countries[country].includes(city))
            countries[country][city] = price;
        }
        if (countries[country][city] > price) {
            countries[country][city] = price;
        }
    }
    let keys = Object.keys(countries);
    keys.sort((a, b) => a.localeCompare(b));

    for (let item of keys) {
        let sortedCities = Object.entries(countries[item]);
        sortedCities.sort((a, b) => a[1] - b[1]);

        let result = [];
        for (let city of sortedCities) {
            result.push(city.join(' -> '));
        }
        console.log(`${item} -> ${result.join(' ')}`);
    }
}

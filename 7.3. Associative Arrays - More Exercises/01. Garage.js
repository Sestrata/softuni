function solve(input) {

    let garages = {};

    for (let item of input) {
        let [numGarage, car] = item.split(' - ');

        if (!garages.hasOwnProperty(numGarage)) {
            garages[numGarage] = [];
        }
        if (!garages[numGarage].includes(car)) {
            garages[numGarage].push(car);
        }
    }
    let sortedGarages = Object.keys(garages);
    sortedGarages.sort((a, b) => a.localeCompare(b));

    for (let numGarage of sortedGarages) {
        console.log(`Garage № ${numGarage}`);

        for (let auto of garages[numGarage]) {
            auto = auto.replace(/: /g, " - ");
            console.log(`--- ${auto}`);
        }
    }
}

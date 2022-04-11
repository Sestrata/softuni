function solve(input) {

    let n = Number(input.shift());
    let cars = {};

    for (let i = 0; i < n; i++) {
        let [name, mileage, fuel] = input.shift().split('|');

        cars[name] = {
            mileage: Number(mileage),
            fuel: Number(fuel)
        };
    }

    while (input[0] != 'Stop') {
        let tokens = input.shift().split(' : ');
        let command = tokens[0];
        let carName = tokens[1];

        let currName = cars[carName];

        if (command == 'Drive') {
            let distance = Number(tokens[2]);
            let fuel = Number(tokens[3]);
            if (currName.fuel > fuel) {
                currName.mileage += distance;
                currName.fuel -= fuel;
                console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            } else {
                console.log('Not enough fuel to make that ride');
            }
            if (currName.mileage >= 100000) {
                delete cars[carName];
                console.log(`Time to sell the ${carName}!`)
            }
        } else if (command == 'Refuel') {
            let fuel = Number(tokens[2]);
            currName.fuel += fuel;
            if (currName.fuel > 75) {
                let overcharge = currName.fuel - 75;
                currName.fuel = 75;
                let newF = fuel - overcharge;
                console.log(`${carName} refueled with ${newF} liters`);
            } else {
                console.log(`${carName} refueled with ${fuel} liters`)
            }
        } else if (command == 'Revert') {
            let kilometers = Number(tokens[2]);
            currName.mileage -= kilometers;
            if (currName.mileage < 10000) {
                currName.mileage = 10000;
            } else {
                console.log(`${carName} mileage decreased by ${kilometers} kilometers`)
            }
        }
    }
    for (let [line, value] of Object.entries(cars)) {
        console.log(`${line} -> Mileage: ${value.mileage} kms, Fuel in the tank: ${value.fuel} lt.`);
    }
}

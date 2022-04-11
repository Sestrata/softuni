function solve(input) {

    let tour = input.shift();
    let line = input.shift();

    while (line != "Travel") {
        let [command, firstArgument, secondArgument] = line.split(":");
        if (command == 'Add Stop') {
            let index = Number(firstArgument);
            let str = secondArgument;
            if (index < tour.length && index >= 0) {
                let split1 = tour.slice(0, index).concat(str);
                let split2 = tour.slice(index, tour.length);
                tour = split1 + split2;
            }
            console.log(tour);
        } else if (command == 'Remove Stop') {
            let startIndex = Number(firstArgument);
            let endIndex = Number(secondArgument);
            if (startIndex < tour.length && startIndex >= 0
                && endIndex < tour.length && endIndex >= 0) {
                let split = tour.substring(startIndex, endIndex + 1);
                tour = tour.replace(split, "");
            }
            console.log(tour);
        } else {
            if (tour.includes(firstArgument)) {
                tour = tour.split(firstArgument).join(secondArgument);
            }
            console.log(tour);
        }
        line = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${tour}`);
}

function solve(array) {

    let allPeople = Number(array.shift());
    let vagons = array.shift().split(' ').map(Number);
    let vagonsLength = vagons.length;

    for (let i = 0; i < vagonsLength; i++) {
        let currentLift = Number(vagons[i]);

        if (allPeople <= 0) {
            console.log("The lift has empty spots!");
            console.log(vagons.join(" "));
            return;
        }

        if (currentLift < 4 && allPeople > 4) {
            let count = 4 - currentLift;
            allPeople -= count;
            count = count + currentLift;

            vagons.splice(i, 1);
            vagons.splice(i, 0, count);
        } else if (currentLift < 4 && allPeople <= 4) {
            while (currentLift < 4) {
                if (allPeople <= 0) {
                    vagons.splice(i, 1);
                    vagons.splice(i, 0, currentLift);
                    break;
                }
                allPeople--;
                currentLift++;
            }
            vagons.splice(i, 1);
            vagons.splice(i, 0, currentLift);
        }
    }
    let maxCapacityInOneLift = vagonsLength * 4;
    let result = 0;

    for (let number of vagons) {
        result += number;
    }

    if (allPeople > 0) {
        console.log(`There isn't enough space! ${allPeople} people in a queue!`);
        console.log(vagons.join(" "));
    } else if (allPeople <= 0 && result < maxCapacityInOneLift) {
        console.log("The lift has empty spots!");
        console.log(vagons.join(" "));
    } else {
        console.log(vagons.join(" "));
    }
}

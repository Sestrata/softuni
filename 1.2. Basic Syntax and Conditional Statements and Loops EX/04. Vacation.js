function solve(peopleInGroup, typeOfTheGroup, day) {

    let sum = 0;

    switch (typeOfTheGroup) {
        case "Students":
            if (day === "Friday") {
                sum = peopleInGroup * 8.45;
                if (peopleInGroup >= 30) {
                    sum = sum * 0.85;
                }
            } else if (day === "Saturday") {
                sum = peopleInGroup * 9.80;
                if (peopleInGroup >= 30) {
                    sum = sum * 0.85;
                }
            } else if (day === "Sunday") {
                sum = peopleInGroup * 10.46;
                if (peopleInGroup >= 30) {
                    sum = sum * 0.85;
                }
            } else {
                break;
            }
            break;

        case "Business":
            if (day === "Friday") {
                sum = peopleInGroup * 10.90;
                if (peopleInGroup >= 100) {
                    sum = sum - (10 * 10.90);
                }
            } else if (day === "Saturday") {
                sum = peopleInGroup * 15.60;
                if (peopleInGroup >= 100) {
                    sum = sum - (10 * 15.60);
                }
            } else if (day === "Sunday") {
                sum = peopleInGroup * 16;
                if (peopleInGroup >= 100) {
                    sum = sum - (10 * 16);
                }
            } else {
                break;
            }
            break;

        case "Regular":
            if (day === "Friday") {
                sum = peopleInGroup * 15;
                if (peopleInGroup >= 10 && peopleInGroup <= 20) {
                    sum = sum * 0.95;
                }
            } else if (day === "Saturday") {
                sum = peopleInGroup * 20;
                if (peopleInGroup >= 10 && peopleInGroup <= 20) {
                    sum = sum * 0.95;
                }
            } else if (day === "Sunday") {
                sum = peopleInGroup * 22.50;
                if (peopleInGroup >= 10 && peopleInGroup <= 20) {
                    sum = sum * 0.95;
                }
            } else {
                break;
            }
            break;
        default: break;
    }

    if (day === "Friday" || day === "Saturday" || day === "Sunday") {
        console.log(`Total price: ${sum.toFixed(2)}`);
    }
}

function solve(input) {

    let daysOfPlunder = Number(input.shift());
    let dailyPlunder = Number(input.shift());
    let expectedPlunder = Number(input);
    let totalPlunder = 0;
    let countDays = 0;

    for (let i = 0; i < daysOfPlunder; i++) {
        countDays++;
        totalPlunder += dailyPlunder;
        if (countDays % 3 == 0) {
            totalPlunder += dailyPlunder * 0.50;
        }
        if (countDays % 5 == 0) {
            totalPlunder -= totalPlunder * 0.30;
        }
    }
    let percentage = (totalPlunder / expectedPlunder) * 100;

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`)
    }
}

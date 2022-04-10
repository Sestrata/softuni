function solve(num) {

    let startingYield = num;
    let countDay = 0;
    let totalExtract = 0;
    let consumes = 26;
    let consumesAfterEx = 26;

    while (startingYield >= 100) {
        countDay++;
        totalExtract += (startingYield - consumes);
        startingYield -= 10;
    }
    totalExtract -= consumesAfterEx;

    if (totalExtract < 0) {
        totalExtract = 0;
    }
    console.log(countDay);
    console.log(totalExtract);
}

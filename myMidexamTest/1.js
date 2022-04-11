function solve(input) {

    let biscuitsPerDayPerWorker = Number(input.shift());
    let countWorkers = Number(input.shift());
    let numBiscuitsFor30DaysAtherF = Number(input);
    let day = 0;

    let totalBiscuits = 0;

    for (let i = 0; i < 30; i++) {
        day++;
        let biscuitsPerDay = biscuitsPerDayPerWorker * countWorkers;
        if (day % 3 == 0) {
            biscuitsPerDay = Math.floor(biscuitsPerDay * 0.75);
        }
        totalBiscuits += biscuitsPerDay;
    }
    console.log(`You have produced ${totalBiscuits} biscuits for the past month.`);

    let r = totalBiscuits - numBiscuitsFor30DaysAtherF;
    let percentage = (r /numBiscuitsFor30DaysAtherF) * 100;

    if (totalBiscuits > numBiscuitsFor30DaysAtherF) {
        console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`)
    } else {
        console.log(`You produce ${Math.abs(percentage).toFixed(2)} percent less biscuits.`)
    }
}

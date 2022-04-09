function solve(arr) {

    let arrL = arr.length;
    let totalPercent = 0;

    for (i = 0; i < arrL; i++) {
        let current = arr[i];

        if (current === "soap") {
            totalPercent += 10;
        } else if (current === "water") {
            totalPercent = totalPercent + (totalPercent * 0.20);
        } else if (current === "vacuum cleaner") {
            totalPercent = totalPercent + (totalPercent * 0.25);
        } else if (current === "mud") {
            totalPercent = totalPercent - (totalPercent * 0.10);
        }
    }
    console.log(`The car is ${totalPercent.toFixed(2)}% clean.`);
}

function solve(input) {

    let days = 30;
    let foodKg = input.shift();
    let hayKg = input.shift();
    let coverKg = input.shift();
    let guineapigWeight = input;
    let daysCount = 0;

    let foodInGr = foodKg * 1000;
    let hayInGr = hayKg * 1000;
    let coverInGr = coverKg * 1000;
    let guineapigWeightInGr = guineapigWeight * 1000;

    for (let i = 0; i < days; i++) {
        daysCount++;
        foodInGr -= 300;
        if (daysCount % 2 === 0) {
            hayInGr -= foodInGr * 0.05;
        }
        if (daysCount % 3 === 0) {
            coverInGr -= guineapigWeightInGr / 3;
        }
    }
    let food = foodInGr / 1000;
    let hay = hayInGr / 1000;
    let cover = coverInGr / 1000;
    
    if (food <= 0 || hay <= 0 || cover <= 0) {
        console.log('Merry must go to the pet store!');
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`)
    }
}

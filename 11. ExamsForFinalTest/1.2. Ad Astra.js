function solve(input) {

    let pattern = /([#\|])(?<itemName>[A-Za-z\s]+)\1(?<expirationDate>[\d]{2}[\/][\d]{2}[\/][\d]{2})\1(?<caloriesNum>[\d]{1,5})\1/g;
    let needDailyCalories = 2000;
    let totalCalories = 0;
    let provisions = [];
    let match = pattern.exec(input);

    while (match != null) {
        let item = match.groups['itemName'];
        let expDate = match.groups['expirationDate'];
        let calories = Number(match.groups['caloriesNum']);
        totalCalories += calories;
        provisions.push(`Item: ${item}, Best before: ${expDate}, Nutrition: ${calories}`);
        match = pattern.exec(input);
    }
    let daysToLast = Math.floor(totalCalories / needDailyCalories);
    console.log(`You have food to last you for: ${daysToLast} days!`);
    for (let line of provisions) {
        console.log(line);
    }
}

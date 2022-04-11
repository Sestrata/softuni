function solve(input) {

    let taxForFamily = 50;
    let taxForHeavyDuty = 80;
    let taxForSports = 100;
    let totalFamily = 0;
    let totalHeavyDuty = 0;
    let totalSports = 0;
    let total = 0;

    for (let i = 0; i < input.length; i++) {
        let splitedInput = input.toString().split('>>');

        for (let j = 0; j < splitedInput.length; j++) {
            let tokens = splitedInput[j];
            let splitedTokens = tokens.split(' ');
            let type = splitedTokens[0];
            let years = Number(splitedTokens[1]);
            let kilometre = Number(splitedTokens[2]);

            if (type === 'family') {
                totalFamily = Math.floor(kilometre / 3000) * 12 + taxForFamily - (years * 5);
                console.log(`A ${type} car will pay ${totalFamily.toFixed(2)} euros in taxes.`);
                total += totalFamily;

            } else if (type === 'heavyDuty') {
                totalHeavyDuty = Math.floor(kilometre / 9000) * 14 + taxForHeavyDuty - (years * 8);
                console.log(`A ${type} car will pay ${totalHeavyDuty.toFixed(2)} euros in taxes.`);
                total += totalHeavyDuty;

            } else if (type === 'sports') {
                totalSports = Math.floor(kilometre / 2000) * 18 + taxForSports - (years * 9);
                console.log(`A ${type} car will pay ${totalSports.toFixed(2)} euros in taxes.`);
                total += totalSports;

            } else {
                console.log('Invalid car type.');
            }
        }
    }
    console.log(`The National Revenue Agency will collect ${total.toFixed(2)} euros in taxes.`)
}

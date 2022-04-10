function solve(input) {

    let arr = input.shift().split(' ');

    for (let command of input) {
        let tokens = command.split(' ');
        let currentCommand = tokens[0];
        let currentGame = tokens[1];

        if (currentCommand === 'Buy') {
            if (!arr.includes(currentGame)) {
                arr.push(currentGame);
            }

        } else if (currentCommand === 'Trash') {
            if (arr.includes(currentGame)) {
                let index = arr.indexOf(currentGame);
                arr.splice(index, 1);
            }

        } else if (currentCommand === 'Repair') {
            if (arr.includes(currentGame)) {
                let index = arr.indexOf(currentGame);
                arr.splice(index, 1);
                arr.push(currentGame);
            }

        } else if (currentCommand === 'Upgrade') {
            let upgradeGAME = currentGame.split('-');
            let gameForUpgrade = upgradeGAME[0];
            let upgradeForGame = upgradeGAME[1];
            if (arr.includes(gameForUpgrade)) {
                let index = arr.indexOf(gameForUpgrade);
                upgradeGAME = `${gameForUpgrade}:${upgradeForGame}`
                arr.splice(index + 1, 0, upgradeGAME);
            }
        }
    }
    console.log(arr.join(' '))
}

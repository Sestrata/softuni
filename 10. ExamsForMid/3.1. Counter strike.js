function solve(input) {
    
    let startEnergy = Number(input.shift());
    let battles = input;
    let counterBattle = 0;

    for (let i = 0; i < battles.length; i++) {
        let currentBattle = Number(battles[i]);
        if (startEnergy >= currentBattle) {
            counterBattle++;
            startEnergy -= currentBattle;
            if (counterBattle % 3 === 0) {
                startEnergy += counterBattle;
            }
        } else if (startEnergy < currentBattle) {
            console.log(`Not enough energy! Game ends with ${counterBattle} won battles and ${startEnergy} energy`);
            break;
        } else if (battles[i] == 'End of battle') {
            console.log(`Won battles: ${counterBattle}. Energy left: ${startEnergy}`)
        }
    }
}

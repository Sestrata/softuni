function solve(input) {

    let patternName = /[A-Za-z]/g;
    let patternDistance = /[0-9]/g;
    let participants = input.shift().split(', ')
    let line = input.shift();
    let obj = {};
    let partsArr = [];

    while (line !== 'end of race') {
        let name = line.match(patternName).join('');
        let distance = line.match(patternDistance).join('');
        let distanceSum = 0;
        for (let i = 0; i < distance.length; i++) {
            let digit = Number(distance[i]);
            distanceSum += digit;
        }
        if (participants.includes(name)) {
            if (!obj.hasOwnProperty(name)) {
                obj[name] = distanceSum;
            } else {
                obj[name] += distanceSum;
            }
        }
        line = input.shift();
    }

    for (let partName in obj) {
        partsArr.push([partName, obj[partName]]);
    }
    partsArr.sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${partsArr[0][0]}`);
    console.log(`2nd place: ${partsArr[1][0]}`);
    console.log(`3rd place: ${partsArr[2][0]}`);
}

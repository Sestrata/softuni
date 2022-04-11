function solve(input) {

    let studentsCount = input.pop();
    let inputL = input.length;
    let allEfficiency = 0;
    let hours = 0;

    for (let i = 0; i < inputL; i++) {
        let current = Number(input[i]);
        allEfficiency += current;
    }

    while (studentsCount > 0) {
        hours++;
        if (hours % 4 != 0) {
            studentsCount -= allEfficiency;
        }
    }
    console.log(`Time needed: ${hours}h.`);
}

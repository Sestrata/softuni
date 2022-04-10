function solve(input) {

    let newInput = input.sort((a, b) => a.localeCompare(b));
    let firstLetter;

    while (newInput != 0) {
        if (newInput[0][0] != firstLetter) {
            firstLetter = newInput[0][0];
            console.log(firstLetter);
        }
        let [name, price] = newInput.shift().split(' : ');
        console.log(`  ${name}: ${price}`);
    }
}

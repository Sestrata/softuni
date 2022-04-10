function solve(input) {

    let num = input;

    for (i = 1; i <= num; i++) {
        let output = "";

        for (let j = 1; j <= i; j++) {
            output += `${i} `;
        }
        console.log(output);
    }
}

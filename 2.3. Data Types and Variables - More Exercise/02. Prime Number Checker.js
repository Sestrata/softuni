function solve(number) {

    let num = number;
    let prime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            prime = false;
        }
    }
    console.log(prime && num > 2
        ? `true`
        : `false`);
    // or:
    // if (prime && num > 2) {
    //     console.log(`true`);
    // } else {
    //     console.log(`false`);
    // }
}

function solve(num, power) {

    result = 1;

    for (let i = 1; i <= power; i++) {
        result *= num;
    }
    console.log(result);
}

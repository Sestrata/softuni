function solve(arr) {

    let sumE = 0;
    let sumO = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }

    for (let num of arr) {
        if (num % 2 === 0) {
            sumE += num;
        } else {
            sumO += num;
        }
    }

    let difference = sumE - sumO;
    console.log(difference);
}

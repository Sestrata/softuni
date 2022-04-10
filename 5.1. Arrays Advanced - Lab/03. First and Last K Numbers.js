function solve(arr) {

    let num = arr[0];
    let newArr = arr.slice(1);

    let forward = newArr.slice(0, num);
    let backwards = newArr.slice(-num); // the last K-number of items

    console.log(forward.join(' '));
    console.log(backwards.join(' '));
}

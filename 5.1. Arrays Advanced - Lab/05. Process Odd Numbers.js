function solve(arr) {

    let arrL = arr.length;
    let newArr = [];

    for (let i = 0; i < arrL; i++) {
        let current = arr[i];
        if (i % 2 == 1) {
            let total = current * 2;
            newArr.push(total)
        }
    }
    newArr.reverse();
    console.log(newArr.join(' '));

    // another:
    // let predicate = (x, i) => i % 2 == 1;
    // let filtered = nums.filter(predicate);
    // let operation = x => x * 2;
    // let mapped = filtered.map(operation);
    // mapped.reverse();
    // console.log(mapped.koin(' '));
}

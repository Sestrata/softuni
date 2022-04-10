function solve(arr) {

    let newArr = arr.sort();
    let arrL = newArr.length;

    for (let i = 0; i < arrL; i++) {
        let currentEl = newArr[i];
        console.log(`${i+1}.${currentEl}`);
    }
}

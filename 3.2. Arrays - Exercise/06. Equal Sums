function solve(arr) {

    let arrL = arr.length;
    let hasFoundResult = false;

    for (let i = 0; i < arrL; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let leftIdx = 0; leftIdx < i; leftIdx++) {
            let currentNum = arr[leftIdx];
            leftSum += currentNum;
        }

        let arrL = arr.length;
        for (let rightIdx = i + 1; rightIdx < arrL; rightIdx++) {
            let currentNum = arr[rightIdx];
            rightSum += currentNum;
        }

        if (leftSum === rightSum) {
            console.log(i);
            hasFoundResult = true;
            break;
        }
    }
    
    if (!hasFoundResult) {
        console.log('no');
    }
}

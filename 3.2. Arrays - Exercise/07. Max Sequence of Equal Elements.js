function solve(arr) {
 
    let longestArr = [];
 
    for (let i = 0; i < arr.length; i++) {
        let currentEl = Number(arr[i]);
        let currentArr = [currentEl];
 
        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = Number(arr[j]);
 
            if (nextEl === currentEl) {
                currentArr.push(nextEl);
            } else {
                break;
            }
        }
        if (currentArr.length > longestArr.length) {
            longestArr = currentArr;
        }
    }
    console.log(longestArr.join(' '));
}

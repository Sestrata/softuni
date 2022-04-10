function solve(arrs) {

    let counter = 0;
    let arrsL = arrs.length;

    for (let i = 0; i < arrsL; i++) {
        for (let j = 0; j < arrs[i].length - 1; j++) {
            if (arrs[i][j] == arrs[i][j + 1]) {
                counter++;
            }
        }
    }
    let firstArrL = arrs[0].length;
    let newArr = [];
    for (let k = 0; k < firstArrL; k++) {
        for (let l = 0; l < arrsL; l++) {
            let currentArr = arrs[l];
            let currentDig = currentArr.shift();
            newArr.push(currentDig);
        }
        for (let m = 0; m < newArr.length - 1; m++) {
            if (newArr[m] == newArr[m + 1]) {
                counter++;
            }
        }
        newArr = [];
    }
    console.log(counter);

    // another:
    // let counter = 0;
    // let arrsL = arrs.length - 1;

    // for (let i = 0; i < arrsL; i++) {

    //     for (let j = 1; j < arrs[i].length; j++) {

    //         if (arrs[i][j] == arrs[i + 1][j]) {
    //             counter++;
    //         }
    //         if (arrs[i][j] == arrs[i][j - 1]) {
    //             counter++;
    //         }
    //     }
    // }

    // for (let i = 0; i < arrs[arrsL].length; i++) {
    //     if (arrs[arrsL][i] == arrs[arrsL][i + 1]) {
    //         counter++;
    //     }
    // }

    // for (let i = 0; i < arrsL; i++) {
    //     if (arrs[i][0] == arrs[i + 1][0]) {
    //         counter++;
    //     }
    // }
    // console.log(counter);
}

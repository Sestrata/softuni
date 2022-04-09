function solve(arr) {

    let max = arr[0];
    let result = arr.filter(el => {
        if (el >= max) {
            max = el;
        }
        return el >= max;
    });
    console.log(result.join(' '));

    // another:
    //     let newArrey = []
    //     let lenghtOFArrey = arr.length
    //     let lastNum = 0

    //     for (let i = 0; i < lenghtOFArrey; i++) {
    //         currentNum = arr[i]

    //         if (currentNum >= lastNum) {
    //             lastNum = currentNum
    //             newArrey.push(currentNum)
    //         }
    //     }
    //     console.log(newArrey.join(' '));
}

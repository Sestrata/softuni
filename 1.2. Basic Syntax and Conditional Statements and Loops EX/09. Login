function solve(arr) {

    let userName = arr.shift();

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i].split('').reverse().join('')

        if (userName === current) {
            console.log(`User ${userName} logged in.`);
        } else {
            if (i === arr.length - 1) {
                console.log(`User ${userName} blocked!`);
            } else {
                console.log('Incorrect password. Try again.');
            }
        }
    }
}
//друго решение: 
// function solve(input) {
//     let index = 0;
//     let username = input[index];
//     index++;
//     let pass = input[index];
   
//     let correctPass = username.split("").reverse().join("");
   
//     let passCount = 0;
//     while (pass !== correctPass) {
//       passCount++;
//       if (passCount > 3) {
//         console.log(`User ${username} blocked!`);
//         break;
//       }
//       console.log("Incorrect password. Try again.");
//       index++;
//       pass = input[index];
//     }
//     if (pass === correctPass) {
//       console.log(`User ${username} logged in.`);
//     }
//   }

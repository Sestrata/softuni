function solve(num1, num2, num3) {

  let sum = num1 + num2 + num3;

  // sum % 1 === 0 
  // ? sum += ' - Integer' : sum += ' - Float';
  // console.log(sum);

  
  //друго решение:
  let sumToString = String(sum);
  let type = 'Integer';

  for (let i = 0; i < sumToString.length; i++) {
    if (sumToString[i] == '.') {
      type = 'Float';
    }
  }
  console.log(`${sum} - ${type}`);
}

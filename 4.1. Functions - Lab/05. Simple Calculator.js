function solve(num1, num2, operand) {

    let result = 0;
    switch (operand) {
        case "multiply":
            result = multiply(num1, num2);
            break;
        case "divide":
            result = divide(num1, num2);
            break;
        case "add":
            result = add(num1, num2);
            break;
        case "subtract":
            result = subtract(num1, num2);
            break
    }
    console.log(result);
    
    function multiply(n1, n2) {
        return n1 * n2;
    }
    function divide(n1, n2) {
        return n1 / n2;
    }
    function add(n1, n2) {
        return n1 + n2;
    }
    function subtract(n1, n2) {
        return n1 - n2;
    }
}

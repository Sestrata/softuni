function solve(input) {  
    
    // with map:

    let production = new Map();
    let arrLength = input.length;

    for (let i = 0; i < arrLength; i += 2) {
        let currentEl = input[i];
        let quantity = Number(input[i + 1]);

        if (!production.has(currentEl)) {
            production.set(currentEl, 0);
        }
        let updateQuantity = production.get(currentEl);
        updateQuantity += quantity;
        production.set(currentEl, updateQuantity);
    }
    
    for (let item of production) {
        console.log(`${item[0]} -> ${item[1]}`);
    }
}

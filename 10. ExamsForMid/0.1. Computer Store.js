function solve(input) {

    let command = input.pop();
    let sumWithoutTaxes = 0;
    let taxes = 0;
    let total = 0;

    for (let i = 0; i < input.length; i++) {
        let current = Number(input[i]);
        if (current > 0) {
            sumWithoutTaxes += current;
        } else {
            console.log('Invalid price!');
        } continue;
    }

    if (sumWithoutTaxes === 0) {
        return console.log('Invalid order!');
    }
    taxes += sumWithoutTaxes * 0.20;
    total = sumWithoutTaxes + taxes;

    if (command == 'special') {
        total = total - (total * 0.10);
    }
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${sumWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${total.toFixed(2)}$`);
}
// another:
// function solve(input) {

//     let priceWithoutTaxes = 0
//     let type = input.pop().toLowerCase();
//     let taxes = 0
//     let totalPrice = 0

//     for (price of input) {
//         let currentPrice = Number(price);

//         if (price > 0) {
//             priceWithoutTaxes += currentPrice;
//         } else {
//             console.log("Invalid price!")
//             continue;
//         }
//     }

//     if (priceWithoutTaxes === 0) {
//         return console.log("Invalid order!")
//     }

//     taxes = priceWithoutTaxes * 0.2
//     totalPrice = taxes + priceWithoutTaxes

//     if (type === "special") {
//         totalPrice = totalPrice - (totalPrice * 0.1)
//     }

//     console.log(`Congratulations you've just bought a new computer!`)
//     console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`) // toFixed(2) !!!
//     console.log(`Taxes: ${taxes.toFixed(2)}$`)
//     console.log("-----------")
//     console.log(`Total price: ${totalPrice.toFixed(2)}$`)
// }

function solve(input) {
 
    let furnit = []
    let total = 0
    let pattern = /\>>(?<name>\w{1,})\<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)/;
 
    while (input[0] !== 'Purchase') {
        let line = input.shift();
        let match = pattern.exec(line);
        if (match !== null) {
            let { name, price, qty } = match.groups;
            price = Number(price);
            qty = Number(qty);
            total += price * qty;
            furnit.push(name);
        }
    }
    console.log(`Bought furniture:`);
    for (let el of furnit) {
        console.log(el);
    }
    console.log(`Total money spend: ${total.toFixed(2)}`);
}

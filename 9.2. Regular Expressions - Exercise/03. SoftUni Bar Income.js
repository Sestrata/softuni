function solve(input) {

    let pattern = /%(?<clientName>[A-Z][a-z]*)%.*?<(?<productName>\w+)>.*?\|(?<count>-?\d+)\|.*?(?<price>\d+(?:\.\d+)?)\$/;
    let total = 0;

    while (input[0] !== 'end of shift') {
        let line = input.shift()
        let match = pattern.exec(line);

        if (match !== null) {
            let customerName = match.groups.clientName;
            let product = match.groups.productName;
            let count = Number(match.groups.count);
            let price = Number(match.groups.price);

            console.log(`${customerName}: ${product} - ${(count * price).toFixed(2)}`);
            total += count * price;
        }
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}

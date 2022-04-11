function solve(input) {

    let pattern = /(@#{1,})(?<name>[A-Z][A-Za-z\d]{4,}[A-Z])(@#{1,})/;
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let productGroup = '';
        let barcode = input.shift();
        let match = pattern.exec(barcode);

        if (match != null) {
            for (let el of match.groups.name) {
                if (el.charCodeAt() >= 48 && el.charCodeAt() <= 57) {
                    productGroup += el;
                }
            }
            if (productGroup == '') {
                productGroup = '00';
            }
            console.log(`Product group: ${productGroup}`)
        } else {
            console.log('Invalid barcode');
        }
    }
}

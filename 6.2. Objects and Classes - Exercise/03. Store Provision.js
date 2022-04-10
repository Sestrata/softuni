function solve(currentStocksArr, forDeliveryArr) {

    let store = [];
    let currentStocksL = currentStocksArr.length-1;
    let forDeliveryL = forDeliveryArr.length-1;

    for (let i = 0; i < currentStocksL; i += 2) {
        let product = currentStocksArr[i];
        let quantity = Number(currentStocksArr[i + 1]);

        let productObj = {
            product,
            quantity
        };
        store.push(productObj);
    }

    for (let i = 0; i < forDeliveryL; i += 2) {
        let product = forDeliveryArr[i];
        let quantity = Number(forDeliveryArr[i + 1]);

        let productObj = {
            product,
            quantity
        };

        let indexOfProduct = store.findIndex(x => x.product === product);
        if (indexOfProduct === -1) {
            store.push(productObj);
        } else {
            store[indexOfProduct].quantity += quantity;
        }
    }

    for (let article of store) {
        console.log(`${article.product} -> ${article.quantity}`);
    }
}

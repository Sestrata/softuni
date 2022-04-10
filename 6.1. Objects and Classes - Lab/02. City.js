function solve(city) {

    let cityEntries = Object.entries(city);

    for (let [cityKey, cityValue] of cityEntries) {
        console.log(`${cityKey} -> ${cityValue}`)
    }

    // let cityKeys = Object.keys(city)
    
    // for(let key of cityKeys){
    // console.log(`${keys} -> ${city[key]}`);
    // }
}

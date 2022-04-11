function solve(input) {

    let pattern = /(@|#){1,}(?<color>[a-z]{3,})(@|#){1,}([^A-Za-z0-9]{1,})*(\/){1,}(?<count>\d{1,})(\/){1,}/g;
    let match = pattern.exec(input);

    while (match != null) {
        count = match[6];
        color = match[2];

        console.log(`You found ${count} ${color} eggs!`)
        match = pattern.exec(input);
    }
}

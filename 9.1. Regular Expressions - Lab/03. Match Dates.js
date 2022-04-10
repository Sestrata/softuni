function solve(text) {

    let pattern = /(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g;
    let validDate = pattern.exec(text);

    while (validDate !== null) {
        let day = validDate.groups['day'];
        let month = validDate.groups['month'];
        let year = validDate.groups['year'];

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        
        validDate = pattern.exec(text);
    }
}

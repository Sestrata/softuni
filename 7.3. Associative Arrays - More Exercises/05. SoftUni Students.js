function solve(arr) {

    let listOfCourses = {};
 
    for (let token of arr) {
        if (token.includes(`:`)) {
            let [courseName, capacity] = token.split(`: `);
            if (!listOfCourses.hasOwnProperty(courseName)) {
                listOfCourses[courseName] = {
                    capacity: Number(capacity),
                    students: [],
                }
            } else {
                listOfCourses[courseName].capacity += Number(capacity);
            }
        } else if (token.includes(`with email`)) {
            token = token.split(`[`);
            let userName = token.shift();
            token = token[0].split(`]`);
            let creditCount = Number(token.shift());
            let temp = token[0].split(` `);
            let email = temp[3];
            let courseName = temp[5];
            if (listOfCourses.hasOwnProperty(courseName) && listOfCourses[courseName].capacity > 0) {
                listOfCourses[courseName].students.push({ 
                    userName: userName,                   
                    creditCount: creditCount,
                    email: email,
                });
                listOfCourses[courseName].capacity--;
            }
        }
    }
    let sortedByCapacity = Object.entries(listOfCourses)
        .sort((a, b) => Object.keys(b[1].students).length - Object.keys(a[1].students).length);
    for (let token of sortedByCapacity) {
        console.log(`${token[0]}: ${token[1].capacity} places left`);
        token[1].students.sort((a, b) => b.creditCount - a.creditCount).forEach(x => console.log(`--- ${x.creditCount}: ${x.userName}, ${x.email}`));
    }
}

function solve(input) { 
    
    // with map:

    let schoolGrades = new Map();

    for (entry of input) {
        entry = entry.split(" ");
        let name = entry.shift();
        let grades = entry.map(Number);

        if (schoolGrades.has(name)) {
            let currentGrades = schoolGrades.get(name);

            for (grade of grades) {
                currentGrades.push(grade);
            }
            schoolGrades.set(name, currentGrades);
        } else {
            schoolGrades.set(name, grades);
        }
    }

    let sortedSchoolGrades = Array.from(schoolGrades.entries());
    sortedSchoolGrades.sort((a, b) => averageSort(a, b))

    for (gradesEntry of sortedSchoolGrades) {
        let studentName = gradesEntry[0];
        let studentGrades = gradesEntry[1];
        console.log(`${studentName}: ${studentGrades.join(', ')}`);
    }

    function averageSort(a, b) {
        let sumA = 0;
        let sumB = 0;
        let gradesA = a[1];
        let gradesB = b[1];
        gradesA.forEach(gA => sumA += gA)
        gradesB.forEach(gB => sumB += gB);
        let averageA = sumA / gradesA.length;
        let averageB = sumB / gradesB.length;

        return averageA - averageB
    }
}

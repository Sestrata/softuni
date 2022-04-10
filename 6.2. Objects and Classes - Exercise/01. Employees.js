function solve(input) {

    // with obj:
    for (let singleName of input) {
        let singlePerson = {
            name: singleName,
            personalNum: singleName.length
        }
        console.log(`Name: ${singlePerson.name} -- Personal Number: ${singlePerson.personalNum}`);
    }

    // another with obj:
    // let listOfEmployees = {};
    // for (let employee of input) {
    //     listOfEmployees.name = employee;
    //     listOfEmployees.personalNum = employee.length;
    //     console.log(`Name: ${listOfEmployees.name} -- Personal Number: ${listOfEmployees.personalNum}`);
    // }

    // with Class:
//     list = [];
//     class Employees {
//         constructor(name, length) {
//             this.name = name,
//                 this.length = length
//         }
//     }
//     for (let employee of input) {
//         let currentEmployee = new Employees(employee, employee.length);
//         list.push(currentEmployee);
//     }
//     list.forEach((curEmpl) =>
//         console.log(`Name: ${curEmpl.name} -- Personal Number: ${curEmpl.length}`));
}

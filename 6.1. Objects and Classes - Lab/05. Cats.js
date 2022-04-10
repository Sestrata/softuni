function solve(array) {

    class Cat {
        constructor(name, age) {
            this.name = name,
            this.age = age
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];
    for (let currentString of array) {
        let currentData = currentString.split(' ');
        let name = currentData[0];
        let age = currentData[1];

        let currentCat = new Cat(name, age);

        cats.push(currentCat);
    }

    for (let cat of cats) {
        cat.meow();
    }
    // or:
    // forEach: cats.forEach(c=>c.meow())
}

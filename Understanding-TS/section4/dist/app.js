"use strict";
const hobbies = ['Sports', 'Cooking'];
const activieHobbies = ['Hiking'];
activieHobbies.push(...hobbies);
const person = {
    firstname: 'Victor',
    age: 27,
};
const copiedPerson3 = Object.assign({}, person);
console.log(copiedPerson3);
const add3 = (...number) => {
    let result = 0;
    return number.reduce((curResul, curValue) => {
        return curResul + curValue;
    }, 0);
};
const addedNumbers = add3(5, 6, 5, 8, 9);
console.log(addedNumbers);
const [hobby3, hooby4] = hobbies;
console.log(hobby3, hooby4);
const { firstname: name2, age } = person;
console.log(name2, age);
//# sourceMappingURL=app.js.map
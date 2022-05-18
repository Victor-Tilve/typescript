"use strict";
const hobbies = ['Sports', 'Cooking'];
const activieHobbies = ['Hiking', ...hobbies];
console.log(activieHobbies);
const person = {
    name: 'Victor',
    age: 27,
};
const copyPerson = Object.assign({ lastName: 'Tilve' }, person);
console.log(copyPerson);
//# sourceMappingURL=spreadOperator.js.map